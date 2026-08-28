package ccrystal.core.store

import ccrystal.core.model.ContextCrystal

trait CrystalStore:
  def save(crystal: ContextCrystal): Either[String, Unit]
  def load(id: String): Either[String, ContextCrystal]
  def list(): Either[String, List[ContextCrystal]]
  def exists(id: String): Boolean
