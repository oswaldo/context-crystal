package ccrystal.core.store

import ccrystal.core.model.*
import ccrystal.core.codec.given
import io.circe.parser.decode
import io.circe.syntax.*
import java.nio.file.{Files, Path, Paths, StandardCopyOption, StandardOpenOption}
import java.nio.charset.StandardCharsets
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.locks.ReentrantLock
import scala.jdk.CollectionConverters.*

object FsCrystalStore:
  private val processLocks = new ConcurrentHashMap[String, ReentrantLock]()

  private[store] def getProcessLock(dir: Path): ReentrantLock =
    val key = dir.toAbsolutePath.normalize().toString
    processLocks.computeIfAbsent(key, _ => new ReentrantLock())

class FsCrystalStore(val rootPath: Path) extends CrystalStore:

  def this(rootStr: String) = this(Paths.get(rootStr))

  private def atomicWrite(target: Path, content: String): Unit =
    val parent = target.getParent
    if parent != null && !Files.exists(parent) then Files.createDirectories(parent)
    val tempFile = parent.resolve(
      s".${target.getFileName.toString}.tmp-${System.currentTimeMillis()}-${System.nanoTime()}",
    )
    try
      Files.write(tempFile, content.getBytes(StandardCharsets.UTF_8))
      try
        Files.move(
          tempFile,
          target,
          StandardCopyOption.REPLACE_EXISTING,
          StandardCopyOption.ATOMIC_MOVE,
        )
      catch
        case _: Throwable =>
          Files.move(tempFile, target, StandardCopyOption.REPLACE_EXISTING)

    catch
      case ex: Throwable =>
        try Files.deleteIfExists(tempFile)
        catch case _: Throwable => ()
        throw ex

  private val LockStalenessMs: Long = 5000L
  private val MaxLockAttempts: Int  = 50

  private[store] def withCrystalLock[T](dir: Path)(block: => Either[String, T]): Either[String, T] =
    val pLock = FsCrystalStore.getProcessLock(dir)
    pLock.lock()
    try
      if !Files.exists(dir) then Files.createDirectories(dir)
      val lockFile = dir.resolve(".lock")
      val pid      = ProcessPlatform.currentPid()

      def acquire(attemptCount: Int): Boolean =
        val now         = System.currentTimeMillis()
        val lockContent = s"pid=$pid\ntimestamp=$now\n"
        try
          Files.write(
            lockFile,
            lockContent.getBytes(StandardCharsets.UTF_8),
            StandardOpenOption.CREATE_NEW,
            StandardOpenOption.WRITE,
          )
          true
        catch
          case _: Throwable =>
            val isStale =
              try
                if Files.exists(lockFile) then
                  val rawBytes = Files.readAllBytes(lockFile)
                  val rawStr   = new String(rawBytes, StandardCharsets.UTF_8)
                  rawStr.linesIterator.find(_.startsWith("timestamp=")).flatMap { l =>
                    l.stripPrefix("timestamp=").trim.toLongOption
                  } match
                    case Some(ts) => (now - ts) > LockStalenessMs
                    case None =>
                      (now - Files.getLastModifiedTime(lockFile).toMillis) > LockStalenessMs
                else false
              catch case _: Throwable => false

            if isStale then
              try Files.deleteIfExists(lockFile)
              catch case _: Throwable => ()

            if attemptCount < MaxLockAttempts then
              try Thread.sleep(10L + (attemptCount % 5) * 5L)
              catch case _: Throwable => ()
              acquire(attemptCount + 1)
            else false

      if acquire(1) then
        try block
        finally
          try Files.deleteIfExists(lockFile)
          catch case _: Throwable => ()
      else
        Left(s"Failed to acquire lock on crystal directory '$dir' after $MaxLockAttempts attempts")
    finally pLock.unlock()

  private def saveDirect(dir: Path, crystal: ContextCrystal): Either[String, Unit] =
    try
      Files.createDirectories(dir)
      Files.createDirectories(dir.resolve("artifacts"))

      // 1. Write crystal.json (Source of Truth)
      val jsonContent = crystal.asJson.spaces2
      atomicWrite(dir.resolve("crystal.json"), jsonContent)

      // 2. Write tasks.md (Derived view)
      val tasksContent = generateTasksMarkdown(crystal)
      atomicWrite(dir.resolve("tasks.md"), tasksContent)

      // 3. Write lessons-learned.md (Derived view)
      val lessonsContent = generateLessonsMarkdown(crystal)
      atomicWrite(dir.resolve("lessons-learned.md"), lessonsContent)

      // 4. Write transient.json
      val transientContent = crystal.transientLeases.asJson.spaces2
      atomicWrite(dir.resolve("transient.json"), transientContent)

      Right(())
    catch case ex: Throwable => Left(s"Failed to save crystal ${crystal.id}: ${ex.getMessage}")

  override def exists(id: String): Boolean =
    Files.exists(crystalDir(id).resolve("crystal.json"))

  override def save(crystal: ContextCrystal): Either[String, Unit] =
    val dir = crystalDir(crystal.id)
    withCrystalLock(dir) {
      saveDirect(dir, crystal)
    }

  override def update(id: String)(
      f: ContextCrystal => Either[String, ContextCrystal],
  ): Either[String, ContextCrystal] =
    val dir        = crystalDir(id)
    val activeFile = dir.resolve("crystal.json")
    val maxRetries = 25

    def attempt(retryCount: Int): Either[String, ContextCrystal] =
      if !Files.exists(activeFile) then
        if retryCount < maxRetries then
          try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
          catch case _: Throwable => ()
          attempt(retryCount + 1)
        else Left(s"Crystal '$id' not found at ${activeFile.toString}")
      else
        try
          val rawBytes   = Files.readAllBytes(activeFile)
          val rawContent = new String(rawBytes, StandardCharsets.UTF_8)
          if rawContent.trim.isEmpty then
            if retryCount < maxRetries then
              try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
              catch case _: Throwable => ()
              attempt(retryCount + 1)
            else
              Left(
                s"Crystal '$id' at ${activeFile.toString} was unexpectedly empty after $maxRetries attempts",
              )
          else
            val initialFingerprint = ContentFingerprint.compute(rawContent)

            decode[ContextCrystal](rawContent) match
              case Left(err) if retryCount < maxRetries =>
                try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
                catch case _: Throwable => ()
                attempt(retryCount + 1)
              case Left(err) =>
                Left(s"JSON parse error loading crystal $id: ${err.getMessage}")
              case Right(loaded) =>
                f(loaded) match
                  case Left(err) => Left(err)
                  case Right(updatedCrystal) =>
                    val commitResult = withCrystalLock(dir) {
                      val currentBytes       = Files.readAllBytes(activeFile)
                      val currentContent     = new String(currentBytes, StandardCharsets.UTF_8)
                      val currentFingerprint = ContentFingerprint.compute(currentContent)

                      if currentFingerprint == initialFingerprint then
                        saveDirect(dir, updatedCrystal).map(_ => updatedCrystal)
                      else Left("OCC_CONFLICT")
                    }

                    commitResult match
                      case Right(success) => Right(success)
                      case Left(err) if err == "OCC_CONFLICT" =>
                        if retryCount < maxRetries then
                          try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
                          catch case _: Throwable => ()
                          attempt(retryCount + 1)
                        else
                          Left(
                            s"Concurrent modification detected on crystal '$id': conflict could not be reconciled after $maxRetries attempts",
                          )
                      case Left(otherErr) => Left(otherErr)

        catch
          case _: Throwable if retryCount < maxRetries =>
            try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
            catch case _: Throwable => ()
            attempt(retryCount + 1)
          case ex: Throwable =>
            Left(s"Failed during atomic update of crystal $id: ${ex.getMessage}")

    attempt(1)

  override def isArchived(id: String): Boolean =
    Files.exists(archiveCrystalDir(id).resolve("crystal.json"))

  override def archive(id: String): Either[String, Unit] =
    try
      val srcDir  = crystalDir(id)
      val destDir = archiveCrystalDir(id)
      if isArchived(id) then Left(s"Crystal '$id' is already archived")
      else if !exists(id) then Left(s"Crystal '$id' does not exist in active cave")
      else if Files.exists(destDir) then
        Left(s"Cannot archive crystal '$id': target directory $destDir already exists")
      else
        Files.createDirectories(archiveDir)
        Files.move(srcDir, destDir)
        Right(())
    catch case ex: Throwable => Left(s"Failed to archive crystal '$id': ${ex.getMessage}")

  override def unarchive(id: String): Either[String, Unit] =
    try
      val srcDir  = archiveCrystalDir(id)
      val destDir = crystalDir(id)
      if !isArchived(id) then Left(s"Crystal '$id' is not archived")
      else if exists(id) then
        Left(s"Cannot unarchive crystal '$id': active crystal already exists at $destDir")
      else
        Files.move(srcDir, destDir)
        Right(())
    catch case ex: Throwable => Left(s"Failed to unarchive crystal '$id': ${ex.getMessage}")

  override def melt(
      crystalId: String,
      fromSelector: String,
      toSelector: String,
      customSummary: Option[String] = None,
      anchor: Option[String] = None,
  ): Either[String, DAGNode] =
    var producedNode: Option[DAGNode] = None
    update(crystalId) { crystal =>
      ccrystal.core.dag.CrystalMelter
        .meltWithNode(
          crystal,
          fromSelector,
          toSelector,
          customSummary,
          anchor = anchor,
        )
        .map { case (updated, node) =>
          producedNode = Some(node)
          updated
        }
    }.flatMap { _ =>
      producedNode match
        case Some(node) => Right(node)
        case None       => Left(s"Failed to produce melted DAGNode for crystal '$crystalId'")
    }

  override def load(id: String): Either[String, ContextCrystal] =
    val maxRetries = 10
    def attempt(retryCount: Int): Either[String, ContextCrystal] =
      try
        val activeFile  = crystalDir(id).resolve("crystal.json")
        val archiveFile = archiveCrystalDir(id).resolve("crystal.json")
        val file =
          if Files.exists(activeFile) then activeFile
          else if Files.exists(archiveFile) then archiveFile
          else activeFile
        if !Files.exists(file) then
          if retryCount < maxRetries then
            try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
            catch case _: Throwable => ()
            attempt(retryCount + 1)
          else Left(s"Crystal '$id' not found at $file")
        else
          val content = new String(Files.readAllBytes(file), StandardCharsets.UTF_8)
          if content.trim.isEmpty then
            if retryCount < maxRetries then
              try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
              catch case _: Throwable => ()
              attempt(retryCount + 1)
            else Left(s"Crystal '$id' at $file was unexpectedly empty after $maxRetries attempts")
          else
            decode[ContextCrystal](content) match
              case Left(err) if retryCount < maxRetries =>
                try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
                catch case _: Throwable => ()
                attempt(retryCount + 1)
              case Left(err) =>
                Left(s"JSON parse error for '$id': ${err.getMessage}")
              case Right(crystal) => Right(crystal)
      catch
        case _: Throwable if retryCount < maxRetries =>
          try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
          catch case _: Throwable => ()
          attempt(retryCount + 1)
        case ex: Throwable => Left(s"Failed to load crystal '$id': ${ex.getMessage}")

    attempt(1)

  override def list(): Either[String, List[ContextCrystal]] = list(includeArchived = false)

  override def list(includeArchived: Boolean): Either[String, List[ContextCrystal]] =
    try
      if !Files.exists(rootPath) then Right(Nil)
      else
        val activeDirs = Files
          .list(rootPath)
          .iterator()
          .asScala
          .filter { p =>
            Files.isDirectory(p) &&
            p.getFileName.toString != "archive" &&
            !p.getFileName.toString.startsWith("_")
          }
          .toList

        val archiveDirs =
          if includeArchived && Files.exists(archiveDir) then
            Files
              .list(archiveDir)
              .iterator()
              .asScala
              .filter(Files.isDirectory(_))
              .toList
          else Nil

        val allDirs = activeDirs ++ archiveDirs
        val crystals = allDirs.flatMap { dir =>
          val jsonFile = dir.resolve("crystal.json")
          if Files.exists(jsonFile) then
            val content = new String(Files.readAllBytes(jsonFile), StandardCharsets.UTF_8)
            decode[ContextCrystal](content).toOption
          else None
        }
        Right(crystals)
    catch case ex: Throwable => Left(s"Failed to list crystals in $rootPath: ${ex.getMessage}")

  override def getEntityRegistry(): Either[String, EntityRegistry] =
    try
      val file = rootPath.resolve("entities.json")
      if !Files.exists(file) then Right(EntityRegistry())
      else
        val content = new String(Files.readAllBytes(file), StandardCharsets.UTF_8)
        decode[EntityRegistry](content).left.map(err =>
          s"JSON parse error in entities.json: ${err.getMessage}",
        )
    catch case ex: Throwable => Left(s"Failed to load entity registry: ${ex.getMessage}")

  override def saveEntityRegistry(registry: EntityRegistry): Either[String, Unit] =
    try
      Files.createDirectories(rootPath)
      val file        = rootPath.resolve("entities.json")
      val jsonContent = registry.asJson.spaces2
      atomicWrite(file, jsonContent)
      Right(())
    catch case ex: Throwable => Left(s"Failed to save entity registry: ${ex.getMessage}")

  override def registerEntity(entity: Entity): Either[String, Entity] =
    getEntityRegistry().flatMap { reg =>
      val updated = reg.copy(entities = reg.entities + (entity.id -> entity))
      saveEntityRegistry(updated).map(_ => entity)
    }

  override def getArtifactRegistry(): Either[String, CaveArtifactRegistry] =
    try
      val file = rootPath.resolve("artifacts.json")
      if !Files.exists(file) then Right(CaveArtifactRegistry())
      else
        val content = new String(Files.readAllBytes(file), StandardCharsets.UTF_8)
        decode[CaveArtifactRegistry](content).left.map(err =>
          s"JSON parse error in artifacts.json: ${err.getMessage}",
        )
    catch case ex: Throwable => Left(s"Failed to load artifact registry: ${ex.getMessage}")

  override def saveArtifactRegistry(registry: CaveArtifactRegistry): Either[String, Unit] =
    try
      Files.createDirectories(rootPath)
      val file        = rootPath.resolve("artifacts.json")
      val jsonContent = registry.asJson.spaces2
      atomicWrite(file, jsonContent)
      Right(())
    catch case ex: Throwable => Left(s"Failed to save artifact registry: ${ex.getMessage}")

  override def registerArtifact(artifact: Artifact): Either[String, Artifact] =
    getArtifactRegistry().flatMap { reg =>
      val updated = reg.copy(artifacts = reg.artifacts + (artifact.id -> artifact))
      saveArtifactRegistry(updated).map(_ => artifact)
    }

  override def listArtifacts(crystalId: Option[String] = None): Either[String, List[Artifact]] =
    crystalId match
      case Some(cId) =>
        load(cId).map(_.artifacts)
      case None =>
        getArtifactRegistry().map(_.artifacts.values.toList.sortBy(_.id))

  override def getArtifact(
      id: String,
      crystalId: Option[String] = None,
  ): Either[String, Option[Artifact]] =
    crystalId match
      case Some(cId) =>
        load(cId).flatMap { crystal =>
          crystal.artifacts.find(_.id == id) match
            case some @ Some(_) => Right(some)
            case None           => getArtifactRegistry().map(_.artifacts.get(id))
        }
      case None =>
        getArtifactRegistry().map(_.artifacts.get(id))

  override def resolveOrCreateEntity(
      name: String,
      kind: EntityKind,
      distinct: Boolean = false,
  ): Either[String, Entity] =
    getEntityRegistry().flatMap { reg =>
      val existingMatches = reg.entities.values
        .filter(e => e.kind == kind && (e.name == name || e.name.startsWith(s"$name-")))
        .toList
      if !distinct && existingMatches.exists(_.name == name) then
        Right(existingMatches.find(_.name == name).get)
      else if existingMatches.isEmpty then
        val prefix = kind match
          case EntityKind.Human  => "usr"
          case EntityKind.Agent  => "agt"
          case EntityKind.Model  => "mdl"
          case EntityKind.System => "sys"
          case EntityKind.Tool   => "tool"
        val slug      = name.toLowerCase.replaceAll("[^a-z0-9_-]", "_")
        val entityId  = s"${prefix}_$slug"
        val newEntity = Entity(entityId, kind, name)
        registerEntity(newEntity)
      else
        // Distinct or collision: assign incremental numerical suffix
        val pattern = s"^${java.util.regex.Pattern.quote(name)}-([0-9]+)$$".r
        val usedIndices = existingMatches.flatMap { e =>
          e.name match
            case `name`       => Some(0)
            case pattern(num) => num.toIntOption
            case _            => None
        }.toSet

        var nextIdx = 1
        while usedIndices.contains(nextIdx) do nextIdx += 1

        val newName = s"$name-$nextIdx"
        val prefix = kind match
          case EntityKind.Human  => "usr"
          case EntityKind.Agent  => "agt"
          case EntityKind.Model  => "mdl"
          case EntityKind.System => "sys"
          case EntityKind.Tool   => "tool"
        val slug      = newName.toLowerCase.replaceAll("[^a-z0-9_-]", "_")
        val entityId  = s"${prefix}_$slug"
        val newEntity = Entity(entityId, kind, newName)
        registerEntity(newEntity)
    }

  override def deleteCrystal(id: String): Either[String, CrystalDeletionResult] =
    try
      val dir = crystalDir(id)
      if !Files.exists(dir) || !Files.exists(dir.resolve("crystal.json")) then
        Left(s"Crystal '$id' not found at $dir")
      else
        for
          targetCrystal <- load(id)
          allCrystals   <- list()
          remainingCrystals  = allCrystals.filterNot(_.id == id)
          remainingEntityIds = remainingCrystals.flatMap(crystalEntityReferences).toSet
          targetEntityIds    = crystalEntityReferences(targetCrystal).toSet
          orphanedEntityIds  = targetEntityIds.filterNot(remainingEntityIds.contains)
          registry <- getEntityRegistry()
          entitiesToDeregister = orphanedEntityIds.filter(registry.entities.contains).toList.sorted
          _ <- deleteDirectoryRecursively(dir)
          _ <-
            if entitiesToDeregister.isEmpty then Right(())
            else
              val updatedRegistry =
                registry.copy(entities = registry.entities -- entitiesToDeregister)
              saveEntityRegistry(updatedRegistry)
        yield CrystalDeletionResult(id, entitiesToDeregister)
    catch case ex: Throwable => Left(s"Failed to delete crystal '$id': ${ex.getMessage}")

  override def deregisterEntity(entityId: String): Either[String, EntityDeregistrationResult] =
    try
      for
        registry <- getEntityRegistry()
        _ <-
          if !registry.entities.contains(entityId) then
            Left(s"Entity '$entityId' not found in cave registry")
          else Right(())
        allCrystals <- list()
        crystalsToDelete = allCrystals.filter(c => crystalEntityReferences(c).contains(entityId))
        deletedIds       = crystalsToDelete.map(_.id).sorted
        _ <- deletedIds.foldLeft[Either[String, Unit]](Right(())) { (acc, cId) =>
          acc.flatMap(_ => deleteDirectoryRecursively(crystalDir(cId)))
        }
        updatedRegistry = registry.copy(entities = registry.entities - entityId)
        _ <- saveEntityRegistry(updatedRegistry)
      yield EntityDeregistrationResult(entityId, deletedIds)
    catch case ex: Throwable => Left(s"Failed to deregister entity '$entityId': ${ex.getMessage}")

  override def previewCrystalDeletion(
      id: String,
      limit: Int = 10,
  ): Either[String, CrystalImpactPreview] =
    for
      targetCrystal <- load(id)
      allCrystals   <- list()
      remainingCrystals  = allCrystals.filterNot(_.id == id)
      remainingEntityIds = remainingCrystals.flatMap(crystalEntityReferences).toSet
      targetEntityIds    = crystalEntityReferences(targetCrystal).toSet
      orphanedEntityIds  = targetEntityIds.filterNot(remainingEntityIds.contains)
      registry <- getEntityRegistry()
      entitiesToDeregister = orphanedEntityIds.filter(registry.entities.contains).toList.sorted
      nodes                = targetCrystal.dag.nodes.reverse
      nodeSummaries        = nodes.take(limit).map(n => s"[${n.kind}] ${n.contentSummary}")
      tasks                = targetCrystal.goal.acceptanceCriteria.reverse
      taskDescriptions = tasks
        .take(limit)
        .map(t => s"[${if t.completed then "x" else " "}] ${t.description}")
      lessons           = targetCrystal.lessonsLearned.reverse
      lessonFrictions   = lessons.take(limit).map(l => s"[${l.status}] ${l.observedFriction}")
      leases            = targetCrystal.transientLeases.reverse
      leaseDescriptions = leases.take(limit).map(l => s"[${l.status}] ${l.description}")
    yield CrystalImpactPreview(
      crystalId = targetCrystal.id,
      goalTitle = targetCrystal.goal.title,
      intent = targetCrystal.goal.intent,
      goalStatus = targetCrystal.goal.status,
      createdAt = targetCrystal.createdAt,
      updatedAt = targetCrystal.updatedAt,
      totalNodes = targetCrystal.dag.nodes.size,
      nodeSummaries = nodeSummaries,
      totalTasks = targetCrystal.goal.acceptanceCriteria.size,
      completedTasks = targetCrystal.goal.acceptanceCriteria.count(_.completed),
      taskDescriptions = taskDescriptions,
      totalLessons = targetCrystal.lessonsLearned.size,
      openLessons = targetCrystal.lessonsLearned.count(_.status == LessonStatus.Open),
      lessonFrictions = lessonFrictions,
      totalLeases = targetCrystal.transientLeases.size,
      activeLeases = targetCrystal.transientLeases.count(_.status == TransientLeaseStatus.Active),
      leaseDescriptions = leaseDescriptions,
      cascadingDeregisterEntityIds = entitiesToDeregister,
    )

  override def previewEntityDeregistration(
      entityId: String,
      limit: Int = 10,
  ): Either[String, EntityImpactPreview] =
    for
      registry <- getEntityRegistry()
      entity <- registry.entities.get(entityId) match
        case Some(e) => Right(e)
        case None    => Left(s"Entity '$entityId' not found in cave registry")
      allCrystals <- list()
      crystalsToDelete = allCrystals.filter(c => crystalEntityReferences(c).contains(entityId))
      previews <- crystalsToDelete.foldLeft[Either[String, List[CrystalImpactPreview]]](
        Right(Nil),
      ) { (acc, c) =>
        acc.flatMap { list =>
          previewCrystalDeletion(c.id, limit).map(p => list :+ p)
        }
      }
    yield EntityImpactPreview(entity, previews)

  private def crystalEntityReferences(crystal: ContextCrystal): Set[String] =
    val author     = crystal.defaultAuthorId.toSet
    val inEntities = crystal.entities.map(_.id).toSet
    val inNodes    = crystal.dag.nodes.map(_.actorId).toSet
    author ++ inEntities ++ inNodes

  private def deleteDirectoryRecursively(dir: Path): Either[String, Unit] =
    try
      if Files.exists(dir) then
        Files
          .walk(dir)
          .sorted(java.util.Comparator.reverseOrder())
          .forEach(Files.deleteIfExists)
      Right(())
    catch case ex: Throwable => Left(s"Failed to delete directory '$dir': ${ex.getMessage}")

  private def crystalDir(id: String): Path =
    rootPath.resolve(id)

  private def archiveDir: Path =
    rootPath.resolve("archive")

  private def archiveCrystalDir(id: String): Path =
    archiveDir.resolve(id)

  private val AutoGenWarning =
    "> [!NOTE]\n> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.\n\n"

  private def generateTasksMarkdown(crystal: ContextCrystal): String =
    val sb = new java.lang.StringBuilder()
    sb.append(s"# Tasks: ${crystal.goal.title}\n\n")
    sb.append(AutoGenWarning)
    sb.append(s"**Status:** ${crystal.goal.status}\n\n")
    sb.append("## Acceptance Criteria / Tasks\n\n")
    if crystal.goal.acceptanceCriteria.isEmpty then sb.append("- No tasks specified\n")
    else
      crystal.goal.acceptanceCriteria.foreach { ac =>
        val check = if ac.completed then "x" else " "
        sb.append(s"- [$check] ${ac.description} `[${ac.id}]`\n")
      }
    sb.toString

  private def generateLessonsMarkdown(crystal: ContextCrystal): String =
    val sb = new java.lang.StringBuilder()
    sb.append(s"# Lessons Learned: ${crystal.goal.title}\n\n")
    sb.append(AutoGenWarning)
    if crystal.lessonsLearned.isEmpty then sb.append("No lessons recorded yet.\n")
    else
      crystal.lessonsLearned.foreach { l =>
        sb.append(s"### Lesson `[${l.id}]` - Status: ${l.status}\n")
        sb.append(s"- **Observed Friction:** ${l.observedFriction}\n")
        l.rootCause.foreach(rc => sb.append(s"- **Root Cause:** $rc\n"))
        l.recommendedAction.foreach(ra => sb.append(s"- **Recommended Action:** $ra\n"))
        if l.actionAuditTrail.nonEmpty then
          sb.append("- **Audit Trail:**\n")
          l.actionAuditTrail.foreach(at =>
            sb.append(s"  - `${at.timestamp}` (${at.actorId}): ${at.action}\n"),
          )
        sb.append("\n")
      }
    sb.toString

  private def computeDirSize(dir: Path): Long =
    if !Files.exists(dir) then 0L
    else
      try
        Files
          .list(dir)
          .iterator()
          .asScala
          .map { p =>
            if Files.isDirectory(p) then computeDirSize(p)
            else
              try Files.size(p)
              catch case _: Throwable => 0L
          }
          .sum
      catch case _: Throwable => 0L

  override def getDiskSizes(): (Long, Long, Map[String, Long]) =
    try
      if !Files.exists(rootPath) then (0L, 0L, Map.empty)
      else
        var activeTotal = 0L
        val perCrystal  = Map.newBuilder[String, Long]

        val activeDirs = Files
          .list(rootPath)
          .iterator()
          .asScala
          .filter(p =>
            Files.isDirectory(p) && p.getFileName.toString != "archive" && !p.getFileName.toString
              .startsWith("_"),
          )
          .toList

        activeDirs.foreach { dir =>
          val sz = computeDirSize(dir)
          activeTotal += sz
          perCrystal += (dir.getFileName.toString -> sz)
        }

        var archiveTotal = 0L
        if Files.exists(archiveDir) then
          val arcDirs =
            Files.list(archiveDir).iterator().asScala.filter(Files.isDirectory(_)).toList
          arcDirs.foreach { dir =>
            val sz = computeDirSize(dir)
            archiveTotal += sz
            perCrystal += (dir.getFileName.toString -> sz)
          }

        (activeTotal, archiveTotal, perCrystal.result())
    catch case _: Throwable => (0L, 0L, Map.empty)
