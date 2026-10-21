package ccrystal.core.store

import ccrystal.core.model.*

trait CrystalStore:
  def save(crystal: ContextCrystal): Either[String, Unit]
  def load(id: String): Either[String, ContextCrystal]
  def update(id: String)(
      f: ContextCrystal => Either[String, ContextCrystal],
  ): Either[String, ContextCrystal] =
    load(id).flatMap(f).flatMap(updated => save(updated).map(_ => updated))
  def list(): Either[String, List[ContextCrystal]] = list(includeArchived = false)
  def list(includeArchived: Boolean): Either[String, List[ContextCrystal]]
  def search(
      filter: ccrystal.core.model.search.CrystalFilter,
  ): Either[String, ccrystal.core.model.search.SearchResult] =
    for
      activeCrystals <- list(includeArchived = false)
      archivedCrystals <-
        if filter.includeArchived then
          list(includeArchived = true).map(_.filter(c => isArchived(c.id)))
        else Right(Nil)
    yield
      val pairs = activeCrystals.map((_, false)) ++ archivedCrystals.map((_, true))
      ccrystal.core.model.search.SearchEngine.search(pairs, filter)
  def getDiskSizes(): (Long, Long, Map[String, Long]) = (0L, 0L, Map.empty)
  def getExtensionStats(): List[ccrystal.core.model.stats.ExtensionStatsSummary] = Nil
  def stats(
      filter: Option[ccrystal.core.model.search.CrystalFilter] = None,
  ): Either[String, ccrystal.core.model.stats.CaveStats] =
    val includeArchived = filter.forall(_.includeArchived)
    for
      activeCrystals <- list(includeArchived = false)
      archivedCrystals <-
        if includeArchived then list(includeArchived = true).map(_.filter(c => isArchived(c.id)))
        else Right(Nil)
      entityReg   <- getEntityRegistry().map(Option(_)).orElse(Right(None))
      artifactReg <- getArtifactRegistry().map(Option(_)).orElse(Right(None))
    yield
      val pairs = activeCrystals.map((_, false)) ++ archivedCrystals.map((_, true))
      val (actBytes, arcBytes, perCrystal) = getDiskSizes()
      ccrystal.core.stats.CaveStatsEngine.compute(
        allCrystalPairs = pairs,
        globalActiveBytes = actBytes,
        globalArchivedBytes = arcBytes,
        perCrystalBytes = perCrystal,
        entityRegistry = entityReg,
        artifactRegistry = artifactReg,
        filter = filter,
        extensions = getExtensionStats(),
      )
  def archive(id: String): Either[String, Unit]
  def unarchive(id: String): Either[String, Unit]
  def isArchived(id: String): Boolean
  def exists(id: String): Boolean
  def melt(
      crystalId: String,
      fromSelector: String,
      toSelector: String,
      customSummary: Option[String] = None,
      anchor: Option[String] = None,
  ): Either[String, DAGNode]
  def getEntityRegistry(): Either[String, EntityRegistry]
  def saveEntityRegistry(registry: EntityRegistry): Either[String, Unit]
  def registerEntity(entity: Entity): Either[String, Entity]
  def resolveOrCreateEntity(
      name: String,
      kind: EntityKind,
      distinct: Boolean = false,
  ): Either[String, Entity]
  def deleteCrystal(id: String): Either[String, CrystalDeletionResult]
  def deregisterEntity(entityId: String): Either[String, EntityDeregistrationResult]
  def previewCrystalDeletion(id: String, limit: Int = 10): Either[String, CrystalImpactPreview]
  def previewEntityDeregistration(
      entityId: String,
      limit: Int = 10,
  ): Either[String, EntityImpactPreview]
  def getArtifactRegistry(): Either[String, CaveArtifactRegistry]
  def saveArtifactRegistry(registry: CaveArtifactRegistry): Either[String, Unit]
  def registerArtifact(artifact: Artifact): Either[String, Artifact]
  def unregisterArtifact(id: String, crystalId: Option[String] = None): Either[String, Unit] =
    crystalId match
      case Some(cId) =>
        update(cId) { crystal =>
          if !crystal.artifacts.exists(_.id == id) then
            Left(s"Artifact '$id' not found in crystal '$cId'")
          else
            Right(
              crystal.copy(
                updatedAt = java.time.Instant.now().toString,
                artifacts = crystal.artifacts.filterNot(_.id == id),
              ),
            )
        }.map(_ => ())
      case None =>
        getArtifactRegistry().flatMap { reg =>
          if !reg.artifacts.contains(id) then
            Left(s"Artifact '$id' not found in cave artifact registry")
          else
            val updated = reg.copy(artifacts = reg.artifacts - id)
            saveArtifactRegistry(updated)
        }
  def listArtifacts(crystalId: Option[String] = None): Either[String, List[Artifact]]
  def getArtifact(id: String, crystalId: Option[String] = None): Either[String, Option[Artifact]]
  def addTask(crystalId: String, description: String): Either[String, AcceptanceCriterion] =
    var assignedAc: Option[AcceptanceCriterion] = None
    update(crystalId) { crystal =>
      val taskId = s"task-${crystal.goal.acceptanceCriteria.size + 1}"
      val newAc  = AcceptanceCriterion(taskId, description, completed = false)
      assignedAc = Some(newAc)
      Right(
        crystal.copy(
          updatedAt = java.time.Instant.now().toString,
          goal = crystal.goal.copy(
            acceptanceCriteria = crystal.goal.acceptanceCriteria :+ newAc,
          ),
        ),
      )
    }.flatMap { _ =>
      assignedAc match
        case Some(ac) => Right(ac)
        case None     => Left("Failed to record task")
    }

  def completeTask(crystalId: String, taskId: String): Either[String, AcceptanceCriterion] =
    var completedAc: Option[AcceptanceCriterion] = None
    update(crystalId) { crystal =>
      val found = crystal.goal.acceptanceCriteria.exists(_.id == taskId)
      val updatedAcs = crystal.goal.acceptanceCriteria.map { ac =>
        if ac.id == taskId then
          val comp = ac.copy(completed = true)
          completedAc = Some(comp)
          comp
        else ac
      }
      val finalAcs =
        if !found then
          val synthetic = AcceptanceCriterion(taskId, taskId, completed = true)
          completedAc = Some(synthetic)
          updatedAcs :+ synthetic
        else updatedAcs
      Right(
        crystal.copy(
          updatedAt = java.time.Instant.now().toString,
          goal = crystal.goal.copy(acceptanceCriteria = finalAcs),
        ),
      )
    }.flatMap { _ =>
      completedAc match
        case Some(ac) => Right(ac)
        case None     => Left(s"Task '$taskId' not found in crystal '$crystalId'")
    }

  def removeTask(crystalId: String, taskId: String): Either[String, AcceptanceCriterion] =
    var removedAc: Option[AcceptanceCriterion] = None
    update(crystalId) { crystal =>
      crystal.goal.acceptanceCriteria.find(_.id == taskId) match
        case None =>
          Left(s"Task '$taskId' not found in crystal '$crystalId'")
        case Some(ac) =>
          removedAc = Some(ac)
          Right(
            crystal.copy(
              updatedAt = java.time.Instant.now().toString,
              goal = crystal.goal.copy(
                acceptanceCriteria = crystal.goal.acceptanceCriteria.filterNot(_.id == taskId),
              ),
            ),
          )
    }.flatMap { _ =>
      removedAc match
        case Some(ac) => Right(ac)
        case None     => Left(s"Task '$taskId' not found in crystal '$crystalId'")
    }
  def previewPrune(
      targetCrystalId: Option[String] = None,
      olderThanDays: Option[Long] = None,
      all: Boolean = false,
  ): Either[String, ccrystal.core.model.prune.PruneImpactPreview] =
    Left("previewPrune not supported by this store")
  def pruneArchived(
      targetCrystalId: Option[String] = None,
      olderThanDays: Option[Long] = None,
      all: Boolean = false,
      dryRun: Boolean = false,
  ): Either[String, ccrystal.core.model.prune.PruneResult] =
    Left("pruneArchived not supported by this store")
  def connect(
      sourceId: String,
      targetId: String,
      relation: ccrystal.core.model.lattice.BondRelation,
      description: Option[String] = None,
  ): Either[String, ccrystal.core.model.lattice.LatticeBond] =
    Left("connect not supported by this store")
  def disconnect(
      sourceId: String,
      targetId: String,
      relation: Option[ccrystal.core.model.lattice.BondRelation] = None,
  ): Either[String, Boolean] =
    Left("disconnect not supported by this store")
  def bonds(crystalId: String): Either[String, ccrystal.core.model.lattice.CrystalBondsSummary] =
    Left("bonds not supported by this store")
  def listExtensions(
      crystalId: Option[String] = None,
  ): Either[String, List[ccrystal.core.model.extension.ExtensionManifest]] =
    Right(Nil)
  def getExtensionManifest(
      extId: String,
      crystalId: Option[String] = None,
  ): Either[String, Option[ccrystal.core.model.extension.ExtensionManifest]] =
    Right(None)
  def saveExtensionManifest(
      manifest: ccrystal.core.model.extension.ExtensionManifest,
      crystalId: Option[String] = None,
  ): Either[String, Unit] =
    Left("saveExtensionManifest not supported by this store")
  def resolveExtensionStateDir(extId: String, crystalId: String): Either[String, String] =
    Left("resolveExtensionStateDir not supported by this store")
  def resolveExtensionSkill(
      extId: String,
      crystalId: Option[String] = None,
  ): Either[String, Option[String]] =
    Right(None)
