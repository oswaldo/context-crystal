package ccrystal.core.model.extension

import scala.CanEqual

enum ExtensionSubstrate derives CanEqual:
  case Embedded
  case Declarative

enum ExtensionScope derives CanEqual:
  case Host
  case Cave
  case Crystal

case class ExtensionManifest(
    id: String,
    name: String,
    version: String,
    substrate: ExtensionSubstrate,
    scope: ExtensionScope,
    enabled: Boolean,
    description: Option[String] = None,
    schemaUri: Option[String] = None,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

trait ExtensionModule:
  def id: String
  def name: String
  def defaultManifest: ExtensionManifest
