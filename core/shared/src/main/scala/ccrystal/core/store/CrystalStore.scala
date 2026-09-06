package ccrystal.core.store

import ccrystal.core.model.*

trait CrystalStore:
  def save(crystal: ContextCrystal): Either[String, Unit]
  def load(id: String): Either[String, ContextCrystal]
  def list(): Either[String, List[ContextCrystal]]
  def exists(id: String): Boolean
  def getEntityRegistry(): Either[String, EntityRegistry]
  def saveEntityRegistry(registry: EntityRegistry): Either[String, Unit]
  def registerEntity(entity: Entity): Either[String, Entity]
  def resolveOrCreateEntity(
      name: String,
      kind: EntityKind,
      distinct: Boolean = false
  ): Either[String, Entity]
