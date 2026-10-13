package ccrystal.core.codec.extension

import io.circe.*
import io.circe.syntax.*
import ccrystal.core.model.extension.*

given Encoder[ExtensionSubstrate] = Encoder.encodeString.contramap {
  case ExtensionSubstrate.Embedded    => "embedded"
  case ExtensionSubstrate.Declarative => "declarative"
}

given Decoder[ExtensionSubstrate] = Decoder.decodeString.emap { str =>
  str.trim.toLowerCase match
    case "embedded"    => Right(ExtensionSubstrate.Embedded)
    case "declarative" => Right(ExtensionSubstrate.Declarative)
    case other => Left(s"Invalid ExtensionSubstrate: '$other' (valid: embedded, declarative)")
}

given Encoder[ExtensionScope] = Encoder.encodeString.contramap {
  case ExtensionScope.Host    => "host"
  case ExtensionScope.Cave    => "cave"
  case ExtensionScope.Crystal => "crystal"
}

given Decoder[ExtensionScope] = Decoder.decodeString.emap { str =>
  str.trim.toLowerCase match
    case "host"    => Right(ExtensionScope.Host)
    case "cave"    => Right(ExtensionScope.Cave)
    case "crystal" => Right(ExtensionScope.Crystal)
    case other     => Left(s"Invalid ExtensionScope: '$other' (valid: host, cave, crystal)")
}

given Encoder[ExtensionManifest] = Encoder.instance { m =>
  Json.obj(
    "id"          -> m.id.asJson,
    "name"        -> m.name.asJson,
    "version"     -> m.version.asJson,
    "substrate"   -> m.substrate.asJson,
    "scope"       -> m.scope.asJson,
    "enabled"     -> m.enabled.asJson,
    "description" -> m.description.asJson,
    "schemaUri"   -> m.schemaUri.asJson,
    "entrypoint"  -> m.entrypoint.asJson,
    "metadata"    -> m.metadata.asJson,
  )
}

given Decoder[ExtensionManifest] = Decoder.instance { c =>
  for
    id          <- c.downField("id").as[String]
    name        <- c.downField("name").as[String]
    version     <- c.downField("version").as[String]
    substrate   <- c.downField("substrate").as[ExtensionSubstrate]
    scope       <- c.downField("scope").as[ExtensionScope]
    enabled     <- c.downField("enabled").as[Boolean]
    description <- c.downField("description").as[Option[String]]
    schemaUri   <- c.downField("schemaUri").as[Option[String]]
    entrypoint  <- c.downField("entrypoint").as[Option[String]]
    metadata <- c.downField("metadata").as[Option[Map[String, String]]].map(_.getOrElse(Map.empty))
  yield ExtensionManifest(
    id = id,
    name = name,
    version = version,
    substrate = substrate,
    scope = scope,
    enabled = enabled,
    description = description,
    schemaUri = schemaUri,
    entrypoint = entrypoint,
    metadata = metadata,
  )
}
