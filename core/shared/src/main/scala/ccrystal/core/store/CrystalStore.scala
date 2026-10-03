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
  def listArtifacts(crystalId: Option[String] = None): Either[String, List[Artifact]]
  def getArtifact(id: String, crystalId: Option[String] = None): Either[String, Option[Artifact]]
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
