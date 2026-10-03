package ccrystal.core.store

import ccrystal.core.model.*
import ccrystal.core.codec.given
import io.circe.parser.decode
import io.circe.syntax.*
import java.nio.file.{Path, Paths}
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.locks.ReentrantLock

object FsCrystalStore:
  private val processLocks = new ConcurrentHashMap[String, ReentrantLock]()

  private[store] def getProcessLock(dir: Path): ReentrantLock =
    val key = dir.toAbsolutePath.normalize().toString
    processLocks.computeIfAbsent(key, _ => new ReentrantLock())

class FsCrystalStore(val rootPath: Path) extends CrystalStore:

  val rootOsPath: os.Path = os.Path(rootPath.toAbsolutePath.normalize())

  def this(rootOs: os.Path) = this(rootOs.toNIO)
  def this(rootStr: String) = this(Paths.get(rootStr))

  private def atomicWrite(target: os.Path, content: String): Unit =
    val parent = target / os.up
    if !os.exists(parent) then os.makeDir.all(parent)
    val tempFile =
      parent / s".${target.last}.tmp-${System.currentTimeMillis()}-${System.nanoTime()}"
    try
      os.write.over(tempFile, content, createFolders = true)
      try os.move(tempFile, target, replaceExisting = true, atomicMove = true)
      catch case _: Throwable => os.move(tempFile, target, replaceExisting = true)
    catch
      case ex: Throwable =>
        try os.remove(tempFile)
        catch case _: Throwable => ()
        throw ex

  private val LockStalenessMs: Long = 5000L
  private val MaxLockAttempts: Int  = 50

  private[store] def withCrystalLock[T](dir: Path)(block: => Either[String, T]): Either[String, T] =
    withCrystalLock(os.Path(dir.toAbsolutePath.normalize()))(block)

  private[store] def withCrystalLock[T](dir: os.Path)(
      block: => Either[String, T],
  ): Either[String, T] =
    val pLock = FsCrystalStore.getProcessLock(dir.toNIO)
    pLock.lock()
    try
      if !os.exists(dir) then os.makeDir.all(dir)
      val lockFile = dir / ".lock"
      val pid      = ProcessPlatform.currentPid()

      def acquire(attemptCount: Int): Boolean =
        val now         = System.currentTimeMillis()
        val lockContent = s"pid=$pid\ntimestamp=$now\n"
        try
          os.write(lockFile, lockContent)
          true
        catch
          case _: Throwable =>
            val isStale =
              try
                if os.exists(lockFile) then
                  val rawStr = os.read(lockFile)
                  rawStr.linesIterator.find(_.startsWith("timestamp=")).flatMap { l =>
                    l.stripPrefix("timestamp=").trim.toLongOption
                  } match
                    case Some(ts) => (now - ts) > LockStalenessMs
                    case None =>
                      (now - os.mtime(lockFile)) > LockStalenessMs
                else false
              catch case _: Throwable => false

            if isStale then
              try os.remove(lockFile)
              catch case _: Throwable => ()

            if attemptCount < MaxLockAttempts then
              try Thread.sleep(10L + (attemptCount % 5) * 5L)
              catch case _: Throwable => ()
              acquire(attemptCount + 1)
            else false

      if acquire(1) then
        try block
        finally
          try os.remove(lockFile)
          catch case _: Throwable => ()
      else
        Left(s"Failed to acquire lock on crystal directory '$dir' after $MaxLockAttempts attempts")
    finally pLock.unlock()

  private def saveDirect(dir: os.Path, crystal: ContextCrystal): Either[String, Unit] =
    try
      os.makeDir.all(dir / "artifacts")

      // 1. Write crystal.json (Source of Truth)
      val jsonContent = crystal.asJson.spaces2
      atomicWrite(dir / "crystal.json", jsonContent)

      // 2. Write tasks.md (Derived view)
      val tasksContent = generateTasksMarkdown(crystal)
      atomicWrite(dir / "tasks.md", tasksContent)

      // 3. Write lessons-learned.md (Derived view)
      val lessonsContent = generateLessonsMarkdown(crystal)
      atomicWrite(dir / "lessons-learned.md", lessonsContent)

      // 4. Write transient.json
      val transientContent = crystal.transientLeases.asJson.spaces2
      atomicWrite(dir / "transient.json", transientContent)

      Right(())
    catch case ex: Throwable => Left(s"Failed to save crystal ${crystal.id}: ${ex.getMessage}")

  override def exists(id: String): Boolean =
    os.exists(crystalDir(id) / "crystal.json")

  override def save(crystal: ContextCrystal): Either[String, Unit] =
    val dir = crystalDir(crystal.id)
    withCrystalLock(dir) {
      saveDirect(dir, crystal)
    }

  override def update(id: String)(
      f: ContextCrystal => Either[String, ContextCrystal],
  ): Either[String, ContextCrystal] =
    val dir        = crystalDir(id)
    val activeFile = dir / "crystal.json"
    val maxRetries = 25

    def attempt(retryCount: Int): Either[String, ContextCrystal] =
      if !os.exists(activeFile) then
        if retryCount < maxRetries then
          try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
          catch case _: Throwable => ()
          attempt(retryCount + 1)
        else Left(s"Crystal '$id' not found at ${activeFile.toString}")
      else
        try
          val rawContent = os.read(activeFile)
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
                      val currentContent     = os.read(activeFile)
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
    os.exists(archiveCrystalDir(id) / "crystal.json")

  override def archive(id: String): Either[String, Unit] =
    try
      val srcDir  = crystalDir(id)
      val destDir = archiveCrystalDir(id)
      if isArchived(id) then Left(s"Crystal '$id' is already archived")
      else if !exists(id) then Left(s"Crystal '$id' does not exist in active cave")
      else if os.exists(destDir) then
        Left(s"Cannot archive crystal '$id': target directory $destDir already exists")
      else
        os.makeDir.all(archiveDir)
        os.move(srcDir, destDir)
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
        os.move(srcDir, destDir)
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
        val activeFile  = crystalDir(id) / "crystal.json"
        val archiveFile = archiveCrystalDir(id) / "crystal.json"
        val file =
          if os.exists(activeFile) then activeFile
          else if os.exists(archiveFile) then archiveFile
          else activeFile
        if !os.exists(file) then
          if retryCount < maxRetries then
            try Thread.sleep(retryCount * 5L + scala.util.Random.nextInt(10))
            catch case _: Throwable => ()
            attempt(retryCount + 1)
          else Left(s"Crystal '$id' not found at $file")
        else
          val content = os.read(file)
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
      if !os.exists(rootOsPath) then Right(Nil)
      else
        val activeDirs = os
          .list(rootOsPath)
          .filter { p =>
            os.isDir(p) &&
            p.last != "archive" &&
            !p.last.startsWith("_")
          }
          .toList

        val archiveDirs =
          if includeArchived && os.exists(archiveDir) then
            os.list(archiveDir).filter(os.isDir(_)).toList
          else Nil

        val allDirs = activeDirs ++ archiveDirs
        val crystals = allDirs.flatMap { dir =>
          val jsonFile = dir / "crystal.json"
          if os.exists(jsonFile) then
            val content = os.read(jsonFile)
            decode[ContextCrystal](content).toOption
          else None
        }
        Right(crystals)
    catch case ex: Throwable => Left(s"Failed to list crystals in $rootPath: ${ex.getMessage}")

  override def getEntityRegistry(): Either[String, EntityRegistry] =
    try
      val file = rootOsPath / "entities.json"
      if !os.exists(file) then Right(EntityRegistry())
      else
        val content = os.read(file)
        decode[EntityRegistry](content).left.map(err =>
          s"JSON parse error in entities.json: ${err.getMessage}",
        )
    catch case ex: Throwable => Left(s"Failed to load entity registry: ${ex.getMessage}")

  override def saveEntityRegistry(registry: EntityRegistry): Either[String, Unit] =
    try
      os.makeDir.all(rootOsPath)
      val file        = rootOsPath / "entities.json"
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
      val file = rootOsPath / "artifacts.json"
      if !os.exists(file) then Right(CaveArtifactRegistry())
      else
        val content = os.read(file)
        decode[CaveArtifactRegistry](content).left.map(err =>
          s"JSON parse error in artifacts.json: ${err.getMessage}",
        )
    catch case ex: Throwable => Left(s"Failed to load artifact registry: ${ex.getMessage}")

  override def saveArtifactRegistry(registry: CaveArtifactRegistry): Either[String, Unit] =
    try
      os.makeDir.all(rootOsPath)
      val file        = rootOsPath / "artifacts.json"
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
      val activeD       = crystalDir(id)
      val archiveD      = archiveCrystalDir(id)
      val activeExists  = os.exists(activeD) && os.exists(activeD / "crystal.json")
      val archiveExists = os.exists(archiveD) && os.exists(archiveD / "crystal.json")

      if !activeExists && !archiveExists then
        Left(s"Crystal '$id' not found in active or archived storage")
      else
        val dirsToDelete =
          (if activeExists then List(activeD) else Nil) ++ (if archiveExists then List(archiveD)
                                                            else Nil)
        val wasArchived = !activeExists && archiveExists
        for
          targetCrystal <- load(id)
          allCrystals   <- list(includeArchived = true)
          remainingCrystals  = allCrystals.filterNot(_.id == id)
          remainingEntityIds = remainingCrystals.flatMap(crystalEntityReferences).toSet
          targetEntityIds    = crystalEntityReferences(targetCrystal).toSet
          orphanedEntityIds  = targetEntityIds.filterNot(remainingEntityIds.contains)
          registry <- getEntityRegistry()
          entitiesToDeregister = orphanedEntityIds.filter(registry.entities.contains).toList.sorted
          _ <- dirsToDelete.foldLeft[Either[String, Unit]](Right(())) { (acc, d) =>
            acc.flatMap(_ => deleteDirectoryRecursively(d))
          }
          _ <-
            if entitiesToDeregister.isEmpty then Right(())
            else
              val updatedRegistry =
                registry.copy(entities = registry.entities -- entitiesToDeregister)
              saveEntityRegistry(updatedRegistry)
          artifactReg <- getArtifactRegistry()
          matchingArtifacts = artifactReg.artifacts.values.filter { art =>
            art.metadata.get("crystal_id").contains(id) ||
            art.metadata.get("crystalId").contains(id) ||
            art.uri.exists(u =>
              u.startsWith(s"crystal://$id") || u.contains(s"/.ccrystals/$id/") || u.contains(
                s"/.ccrystals/archive/$id/",
              ),
            )
          }.toList
          cleanedArtifactIds = matchingArtifacts.map(_.id).sorted
          _ <-
            if cleanedArtifactIds.isEmpty then Right(())
            else
              val updatedArtifacts = artifactReg.artifacts -- cleanedArtifactIds
              saveArtifactRegistry(artifactReg.copy(artifacts = updatedArtifacts))
        yield CrystalDeletionResult(
          deletedCrystalId = id,
          deregisteredEntityIds = entitiesToDeregister,
          cleanedArtifactIds = cleanedArtifactIds,
          isArchived = wasArchived,
        )
    catch case ex: Throwable => Left(s"Failed to delete crystal '$id': ${ex.getMessage}")

  override def deregisterEntity(entityId: String): Either[String, EntityDeregistrationResult] =
    try
      for
        registry <- getEntityRegistry()
        _ <-
          if !registry.entities.contains(entityId) then
            Left(s"Entity '$entityId' not found in cave registry")
          else Right(())
        allCrystals <- list(includeArchived = true)
        crystalsToDelete = allCrystals.filter(c => crystalEntityReferences(c).contains(entityId))
        deletedIds       = crystalsToDelete.map(_.id).sorted
        _ <- deletedIds.foldLeft[Either[String, Unit]](Right(())) { (acc, cId) =>
          acc.flatMap { _ =>
            val aDir   = crystalDir(cId)
            val arcDir = archiveCrystalDir(cId)
            val r1     = if os.exists(aDir) then deleteDirectoryRecursively(aDir) else Right(())
            val r2 =
              if os.exists(arcDir) then deleteDirectoryRecursively(arcDir) else Right(())
            r1.flatMap(_ => r2)
          }
        }
        updatedRegistry = registry.copy(entities = registry.entities - entityId)
        _ <- saveEntityRegistry(updatedRegistry)
      yield EntityDeregistrationResult(entityId, deletedIds)
    catch case ex: Throwable => Left(s"Failed to deregister entity '$entityId': ${ex.getMessage}")

  override def previewCrystalDeletion(
      id: String,
      limit: Int = 10,
  ): Either[String, CrystalImpactPreview] =
    val isArch = isArchived(id)
    for
      targetCrystal <- load(id)
      allCrystals   <- list(includeArchived = true)
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
      inboundBonds = remainingCrystals.flatMap { other =>
        other.bonds.filter(_.targetCrystalId == id).map { b =>
          ccrystal.core.model.lattice.InboundBond(other.id, b)
        }
      }
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
      isArchived = isArch,
      inboundBonds = inboundBonds,
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
      allCrystals <- list(includeArchived = true)
      crystalsToDelete = allCrystals.filter(c => crystalEntityReferences(c).contains(entityId))
      previews <- crystalsToDelete.foldLeft[Either[String, List[CrystalImpactPreview]]](
        Right(Nil),
      ) { (acc, c) =>
        acc.flatMap { list =>
          previewCrystalDeletion(c.id, limit).map(p => list :+ p)
        }
      }
    yield EntityImpactPreview(entity, previews)

  override def previewPrune(
      targetCrystalId: Option[String] = None,
      olderThanDays: Option[Long] = None,
      all: Boolean = false,
  ): Either[String, ccrystal.core.model.prune.PruneImpactPreview] =
    for
      allCrystals <- list(includeArchived = true)
      activeCrystals   = allCrystals.filterNot(c => isArchived(c.id))
      archivedCrystals = allCrystals.filter(c => isArchived(c.id))
      diskSizes        = getDiskSizes()
      perCrystal       = diskSizes._3
      entityReg   <- getEntityRegistry()
      artifactReg <- getArtifactRegistry()
      preview <- ccrystal.core.prune.PruneEngine.evaluate(
        archivedCrystals = archivedCrystals,
        activeCrystals = activeCrystals,
        perCrystalDiskBytes = perCrystal,
        entityRegistry = entityReg,
        artifactRegistry = artifactReg,
        targetCrystalId = targetCrystalId,
        olderThanDays = olderThanDays,
        all = all,
      )
    yield preview

  override def pruneArchived(
      targetCrystalId: Option[String] = None,
      olderThanDays: Option[Long] = None,
      all: Boolean = false,
      dryRun: Boolean = false,
  ): Either[String, ccrystal.core.model.prune.PruneResult] =
    previewPrune(targetCrystalId, olderThanDays, all).flatMap { preview =>
      if dryRun then
        Right(
          ccrystal.core.model.prune.PruneResult(
            prunedCrystalIds = preview.candidates.map(_.crystalId),
            deregisteredEntityIds = preview.orphanedEntitiesToDeregister,
            cleanedArtifactIds = preview.artifactsToClean,
            bytesFreed = preview.totalBytesFreed,
            dryRun = true,
          ),
        )
      else
        for
          _ <- preview.candidates.foldLeft[Either[String, Unit]](Right(())) { (acc, cand) =>
            acc.flatMap(_ => deleteDirectoryRecursively(archiveCrystalDir(cand.crystalId)))
          }
          entityReg <- getEntityRegistry()
          _ <-
            if preview.orphanedEntitiesToDeregister.isEmpty then Right(())
            else
              val updated =
                entityReg
                  .copy(entities = entityReg.entities -- preview.orphanedEntitiesToDeregister)
              saveEntityRegistry(updated)
          artifactReg <- getArtifactRegistry()
          _ <-
            if preview.artifactsToClean.isEmpty then Right(())
            else
              val updated =
                artifactReg.copy(artifacts = artifactReg.artifacts -- preview.artifactsToClean)
              saveArtifactRegistry(updated)
        yield ccrystal.core.model.prune.PruneResult(
          prunedCrystalIds = preview.candidates.map(_.crystalId),
          deregisteredEntityIds = preview.orphanedEntitiesToDeregister,
          cleanedArtifactIds = preview.artifactsToClean,
          bytesFreed = preview.totalBytesFreed,
          dryRun = false,
        )
    }

  private def crystalEntityReferences(crystal: ContextCrystal): Set[String] =
    val author     = crystal.defaultAuthorId.toSet
    val inEntities = crystal.entities.map(_.id).toSet
    val inNodes    = crystal.dag.nodes.map(_.actorId).toSet
    author ++ inEntities ++ inNodes

  private def deleteDirectoryRecursively(dir: os.Path): Either[String, Unit] =
    try
      if os.exists(dir) then os.remove.all(dir)
      Right(())
    catch case ex: Throwable => Left(s"Failed to delete directory '$dir': ${ex.getMessage}")

  private def crystalDir(id: String): os.Path =
    rootOsPath / id

  private def archiveDir: os.Path =
    rootOsPath / "archive"

  private def archiveCrystalDir(id: String): os.Path =
    archiveDir / id

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

  private def computeDirSize(dir: os.Path): Long =
    if !os.exists(dir) then 0L
    else
      try
        os.walk(dir)
          .iterator
          .map { p =>
            if os.isFile(p) then
              try os.size(p)
              catch case _: Throwable => 0L
            else 0L
          }
          .sum
      catch case _: Throwable => 0L

  override def getDiskSizes(): (Long, Long, Map[String, Long]) =
    try
      if !os.exists(rootOsPath) then (0L, 0L, Map.empty)
      else
        var activeTotal = 0L
        val perCrystal  = Map.newBuilder[String, Long]

        val activeDirs = os
          .list(rootOsPath)
          .filter(p => os.isDir(p) && p.last != "archive" && !p.last.startsWith("_"))
          .toList

        activeDirs.foreach { dir =>
          val sz = computeDirSize(dir)
          activeTotal += sz
          perCrystal += (dir.last -> sz)
        }

        var archiveTotal = 0L
        if os.exists(archiveDir) then
          val arcDirs = os.list(archiveDir).filter(os.isDir(_)).toList
          arcDirs.foreach { dir =>
            val sz = computeDirSize(dir)
            archiveTotal += sz
            perCrystal += (dir.last -> sz)
          }

        (activeTotal, archiveTotal, perCrystal.result())
    catch case _: Throwable => (0L, 0L, Map.empty)

  override def connect(
      sourceId: String,
      targetId: String,
      relation: ccrystal.core.model.lattice.BondRelation,
      description: Option[String] = None,
  ): Either[String, ccrystal.core.model.lattice.LatticeBond] =
    if !exists(sourceId) && !isArchived(sourceId) then Left(s"Source crystal '$sourceId' not found")
    else if !exists(targetId) && !isArchived(targetId) then
      Left(s"Target crystal '$targetId' not found")
    else
      for
        allCrystals <- list(includeArchived = true)
        existingBonds = allCrystals.map(c => c.id -> c.bonds).toMap
        _ <- ccrystal.core.lattice.LatticeCycleDetector
          .detectCycle(sourceId, targetId, existingBonds) match
          case Some(cyclePath) =>
            Left(
              s"Cycle detected: Cannot connect '$sourceId' to '$targetId' as it forms a closed cycle: ${cyclePath.mkString(" -> ")}",
            )
          case None => Right(())
        now = java.time.Instant.now().toString
        newBond = ccrystal.core.model.lattice.LatticeBond(
          targetCrystalId = targetId,
          relation = relation,
          description = description,
          createdAt = now,
        )
        _ <- update(sourceId) { crystal =>
          val filtered =
            crystal.bonds.filterNot(b => b.targetCrystalId == targetId && b.relation == relation)
          Right(crystal.copy(bonds = filtered :+ newBond, updatedAt = now))
        }
      yield newBond

  override def disconnect(
      sourceId: String,
      targetId: String,
      relation: Option[ccrystal.core.model.lattice.BondRelation] = None,
  ): Either[String, Boolean] =
    if !exists(sourceId) && !isArchived(sourceId) then Left(s"Source crystal '$sourceId' not found")
    else
      var removed = false
      val now     = java.time.Instant.now().toString
      update(sourceId) { crystal =>
        val (matching, remaining) = crystal.bonds.partition { b =>
          b.targetCrystalId == targetId && relation.forall(_ == b.relation)
        }
        if matching.nonEmpty then
          removed = true
          Right(crystal.copy(bonds = remaining, updatedAt = now))
        else Right(crystal)
      }.map(_ => removed)

  override def bonds(
      crystalId: String,
  ): Either[String, ccrystal.core.model.lattice.CrystalBondsSummary] =
    if !exists(crystalId) && !isArchived(crystalId) then Left(s"Crystal '$crystalId' not found")
    else
      for
        targetCrystal <- load(crystalId)
        allCrystals   <- list(includeArchived = true)
      yield
        val outbound = targetCrystal.bonds
        val inbound = allCrystals.flatMap { other =>
          if other.id == crystalId then Nil
          else
            other.bonds.filter(_.targetCrystalId == crystalId).map { b =>
              ccrystal.core.model.lattice.InboundBond(other.id, b)
            }
        }
        ccrystal.core.model.lattice.CrystalBondsSummary(
          crystalId = crystalId,
          outbound = outbound,
          inbound = inbound,
        )
