package ccrystal.core.model.extension

import munit.FunSuite
import io.circe.parser.*
import io.circe.syntax.*
import ccrystal.core.model.extension.*
import ccrystal.core.codec.extension.given

class ExtensionCodecSuite extends FunSuite:

  test("Round-trip serialization of ExtensionSubstrate"):
    assertEquals(ExtensionSubstrate.Embedded.asJson.noSpaces, "\"embedded\"")
    assertEquals(ExtensionSubstrate.Declarative.asJson.noSpaces, "\"declarative\"")
    assertEquals(decode[ExtensionSubstrate]("\"embedded\""), Right(ExtensionSubstrate.Embedded))
    assertEquals(
      decode[ExtensionSubstrate]("\"declarative\""),
      Right(ExtensionSubstrate.Declarative),
    )
    assert(decode[ExtensionSubstrate]("\"unknown\"").isLeft)

  test("Round-trip serialization of ExtensionScope"):
    assertEquals(ExtensionScope.Host.asJson.noSpaces, "\"host\"")
    assertEquals(ExtensionScope.Cave.asJson.noSpaces, "\"cave\"")
    assertEquals(ExtensionScope.Crystal.asJson.noSpaces, "\"crystal\"")
    assertEquals(decode[ExtensionScope]("\"host\""), Right(ExtensionScope.Host))
    assertEquals(decode[ExtensionScope]("\"cave\""), Right(ExtensionScope.Cave))
    assertEquals(decode[ExtensionScope]("\"crystal\""), Right(ExtensionScope.Crystal))
    assert(decode[ExtensionScope]("\"global\"").isLeft)

  test("Round-trip serialization of ExtensionManifest with full fields"):
    val manifest = ExtensionManifest(
      id = "comms",
      name = "Crystal Comms",
      version = "1.0.0",
      substrate = ExtensionSubstrate.Embedded,
      scope = ExtensionScope.Cave,
      enabled = true,
      description = Some("Lock-free filesystem inboxes and multi-agent coordination"),
      schemaUri = Some("https://example.com/spec/extensions/comms/v1.json"),
      metadata = Map("retentionDays" -> "7", "channel" -> "default"),
    )

    val json    = manifest.asJson.noSpaces
    val decoded = decode[ExtensionManifest](json)
    assertEquals(decoded, Right(manifest))

  test("Decoding ExtensionManifest with defaults for optional fields"):
    val minimalJson =
      """{
        |  "id": "media",
        |  "name": "Media Provenance",
        |  "version": "0.1.0",
        |  "substrate": "declarative",
        |  "scope": "crystal",
        |  "enabled": false
        |}""".stripMargin

    val expected = ExtensionManifest(
      id = "media",
      name = "Media Provenance",
      version = "0.1.0",
      substrate = ExtensionSubstrate.Declarative,
      scope = ExtensionScope.Crystal,
      enabled = false,
      description = None,
      schemaUri = None,
      entrypoint = None,
      skill = None,
      metadata = Map.empty,
    )

    assertEquals(decode[ExtensionManifest](minimalJson), Right(expected))

  test("Round-trip serialization with companion skill"):
    val manifest = ExtensionManifest(
      id = "sample_runner",
      name = "Sample Drop-in Executable Extension",
      version = "1.0.0",
      substrate = ExtensionSubstrate.Declarative,
      scope = ExtensionScope.Cave,
      enabled = true,
      entrypoint = Some("run.sh"),
      skill = Some("SKILL.md"),
    )
    val json = manifest.asJson.noSpaces
    assertEquals(decode[ExtensionManifest](json), Right(manifest))
