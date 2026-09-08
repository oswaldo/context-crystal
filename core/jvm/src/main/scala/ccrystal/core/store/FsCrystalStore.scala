package ccrystal.core.store

import ccrystal.core.model.*
import ccrystal.core.codec.given
import io.circe.parser.decode
import io.circe.syntax.*
import java.nio.file.{Files, Path, Paths}
import java.nio.charset.StandardCharsets
import scala.jdk.CollectionConverters.*

class FsCrystalStore(val rootPath: Path) extends CrystalStore:

  def this(rootStr: String) = this(Paths.get(rootStr))

  override def exists(id: String): Boolean =
    Files.exists(crystalDir(id).resolve("crystal.json"))

  override def save(crystal: ContextCrystal): Either[String, Unit] =
    try
      val dir = crystalDir(crystal.id)
      Files.createDirectories(dir)
      Files.createDirectories(dir.resolve("artifacts"))

      // 1. Write crystal.json (Source of Truth)
      val jsonContent = crystal.asJson.spaces2
      Files.write(dir.resolve("crystal.json"), jsonContent.getBytes(StandardCharsets.UTF_8))

      // 2. Write tasks.md (Derived view)
      val tasksContent = generateTasksMarkdown(crystal)
      Files.write(dir.resolve("tasks.md"), tasksContent.getBytes(StandardCharsets.UTF_8))

      // 3. Write lessons-learned.md (Derived view)
      val lessonsContent = generateLessonsMarkdown(crystal)
      Files.write(
        dir.resolve("lessons-learned.md"),
        lessonsContent.getBytes(StandardCharsets.UTF_8),
      )

      // 4. Write transient.json
      val transientContent = crystal.transientLeases.asJson.spaces2
      Files.write(dir.resolve("transient.json"), transientContent.getBytes(StandardCharsets.UTF_8))

      Right(())
    catch case ex: Throwable => Left(s"Failed to save crystal ${crystal.id}: ${ex.getMessage}")

  override def load(id: String): Either[String, ContextCrystal] =
    try
      val file = crystalDir(id).resolve("crystal.json")
      if !Files.exists(file) then Left(s"Crystal '$id' not found at $file")
      else
        val content = new String(Files.readAllBytes(file), StandardCharsets.UTF_8)
        decode[ContextCrystal](content).left.map(err =>
          s"JSON parse error for '$id': ${err.getMessage}",
        )
    catch case ex: Throwable => Left(s"Failed to load crystal '$id': ${ex.getMessage}")

  override def list(): Either[String, List[ContextCrystal]] =
    try
      if !Files.exists(rootPath) then Right(Nil)
      else
        val dirs = Files
          .list(rootPath)
          .iterator()
          .asScala
          .filter(Files.isDirectory(_))
          .toList

        val crystals = dirs.flatMap { dir =>
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
      Files.write(file, jsonContent.getBytes(StandardCharsets.UTF_8))
      Right(())
    catch case ex: Throwable => Left(s"Failed to save entity registry: ${ex.getMessage}")

  override def registerEntity(entity: Entity): Either[String, Entity] =
    getEntityRegistry().flatMap { reg =>
      val updated = reg.copy(entities = reg.entities + (entity.id -> entity))
      saveEntityRegistry(updated).map(_ => entity)
    }

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
        val slug      = toSlug(name)
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
        val slug      = toSlug(newName)
        val entityId  = s"${prefix}_$slug"
        val newEntity = Entity(entityId, kind, newName)
        registerEntity(newEntity)
    }

  private def toSlug(raw: String): String =
    val normalized =
      java.text.Normalizer.normalize(raw, java.text.Normalizer.Form.NFD).replaceAll("\\p{M}", "")
    normalized.toLowerCase
      .replaceAll("[^a-z0-9_-]", "_")
      .replaceAll("_+", "_")
      .stripPrefix("_")
      .stripSuffix("_")

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
