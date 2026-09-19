package ccrystal.core.store

import ccrystal.core.model.*

trait CrystalStore:
  def save(crystal: ContextCrystal): Either[String, Unit]
  def load(id: String): Either[String, ContextCrystal]
  def list(): Either[String, List[ContextCrystal]] = list(includeArchived = false)
  def list(includeArchived: Boolean): Either[String, List[ContextCrystal]]
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
