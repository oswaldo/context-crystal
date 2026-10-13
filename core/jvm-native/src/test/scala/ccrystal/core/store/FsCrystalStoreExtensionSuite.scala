package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.model.extension.*
import ccrystal.core.codec.extension.given

class FsCrystalStoreExtensionSuite extends FunSuite:

  def withTempStore(test: (FsCrystalStore, os.Path, os.Path) => Unit): Unit =
    val tempCave = os.temp.dir(prefix = "ccrystal-cave-test")
    val tempHost = os.temp.dir(prefix = "ccrystal-host-test")
    try
      val store = new FsCrystalStore(tempCave, Some(tempHost))
      test(store, tempCave, tempHost)
    finally
      try os.remove.all(tempCave)
      catch case _: Throwable => ()
      try os.remove.all(tempHost)
      catch case _: Throwable => ()

  test("listExtensions returns embedded comms extension by default"):
    withTempStore { (store, _, _) =>
      val res = store.listExtensions(None)
      assert(res.isRight, "listExtensions should succeed")
      val extensions = res.toOption.get
      assert(extensions.exists(_.id == "comms"), "comms should exist by default")
    }

  test("saveExtensionManifest saves cave-wide extension and resolves it"):
    withTempStore { (store, tempCave, _) =>
      val mediaManifest = ExtensionManifest(
        id = "media",
        name = "Media Provenance",
        version = "1.0.0",
        substrate = ExtensionSubstrate.Declarative,
        scope = ExtensionScope.Cave,
        enabled = true,
        description = Some("CEP-0002 Media provenance"),
        schemaUri = None,
        metadata = Map("aspectRatio" -> "16:9"),
      )

      val saveRes = store.saveExtensionManifest(mediaManifest, None)
      assertEquals(saveRes, Right(()))

      assert(
        os.exists(tempCave / "extensions" / "media" / "extension.json"),
        "manifest file should exist",
      )

      val listRes = store.listExtensions(None)
      assert(listRes.isRight, "listExtensions should succeed")
      val found = listRes.toOption.get.find(_.id == "media")
      assert(found.isDefined, "media extension should be found")
      assertEquals(found.get.name, "Media Provenance")
      assertEquals(found.get.scope, ExtensionScope.Cave)
      assertEquals(found.get.enabled, true)
    }

  test("crystal-level extension overrides cave-level extension for specific crystal"):
    withTempStore { (store, _, _) =>
      val caveManifest = ExtensionManifest(
        id = "media",
        name = "Media Provenance",
        version = "1.0.0",
        substrate = ExtensionSubstrate.Declarative,
        scope = ExtensionScope.Cave,
        enabled = true,
      )
      store.saveExtensionManifest(caveManifest, None)

      val crystalId = "test-crystal-01"
      val crystalOverride = ExtensionManifest(
        id = "media",
        name = "Media Provenance (Disabled for Crystal)",
        version = "1.0.0",
        substrate = ExtensionSubstrate.Declarative,
        scope = ExtensionScope.Crystal,
        enabled = false,
      )
      store.saveExtensionManifest(crystalOverride, Some(crystalId))

      // When listing for cave without crystalId, cave version is returned
      val caveList = store.listExtensions(None).toOption.get
      assertEquals(caveList.find(_.id == "media").get.enabled, true)
      assertEquals(caveList.find(_.id == "media").get.scope, ExtensionScope.Cave)

      // When listing for crystalId, crystal override is returned
      val crystalList = store.listExtensions(Some(crystalId)).toOption.get
      assertEquals(crystalList.find(_.id == "media").get.enabled, false)
      assertEquals(crystalList.find(_.id == "media").get.scope, ExtensionScope.Crystal)
    }

  test("cave-level extension overrides host-level extension"):
    withTempStore { (store, tempCave, tempHost) =>
      val hostManifest = ExtensionManifest(
        id = "media",
        name = "Host Media",
        version = "0.9.0",
        substrate = ExtensionSubstrate.Declarative,
        scope = ExtensionScope.Host,
        enabled = true,
      )
      store.saveExtensionManifest(hostManifest, None) // at host scope when scope is Host

      val hostList = store.listExtensions(None).toOption.get
      assertEquals(hostList.find(_.id == "media").get.name, "Host Media")

      // Now create cave override
      val caveManifest = ExtensionManifest(
        id = "media",
        name = "Cave Media",
        version = "1.0.0",
        substrate = ExtensionSubstrate.Declarative,
        scope = ExtensionScope.Cave,
        enabled = true,
      )
      store.saveExtensionManifest(caveManifest, None)

      val combinedList = store.listExtensions(None).toOption.get
      assertEquals(combinedList.find(_.id == "media").get.name, "Cave Media")
      assertEquals(combinedList.find(_.id == "media").get.scope, ExtensionScope.Cave)
    }

  test("resolveExtensionStateDir creates and returns crystal extension directory"):
    withTempStore { (store, tempCave, _) =>
      val crystalId   = "my-crystal"
      val extId       = "comms"
      val stateDirRes = store.resolveExtensionStateDir(extId, crystalId)
      assert(stateDirRes.isRight, "resolveExtensionStateDir should succeed")
      val pathStr = stateDirRes.toOption.get
      assert(os.exists(os.Path(java.nio.file.Paths.get(pathStr))), "path should exist on disk")
      assertEquals(pathStr, (tempCave / crystalId / "extensions" / extId).toString)
    }

  test("resolveExtensionSkill returns embedded comms skill and auto-detects SKILL.md"):
    withTempStore { (store, tempCave, _) =>
      // 1. Embedded comms skill
      val commsSkill = store.resolveExtensionSkill("comms", None)
      assert(commsSkill.isRight, "comms skill should resolve")
      assert(commsSkill.toOption.get.isDefined, "comms skill should be defined")
      assert(
        commsSkill.toOption.get.get.contains("Crystal Comms"),
        "comms skill should contain title",
      )

      // 2. Declarative extension with SKILL.md
      val extDir = tempCave / "extensions" / "sample_ext"
      os.makeDir.all(extDir)
      os.write(
        extDir / "extension.json",
        """{
          |  "id": "sample_ext",
          |  "name": "Sample Extension",
          |  "version": "1.0.0",
          |  "substrate": "declarative",
          |  "scope": "cave",
          |  "enabled": true
          |}""".stripMargin,
      )
      os.write(extDir / "SKILL.md", "# Sample Extension Agent Skill\n\nInstructions for agent.")

      // Verify listExtensions auto-detects SKILL.md
      val exts   = store.listExtensions(None).toOption.get
      val sample = exts.find(_.id == "sample_ext").get
      assertEquals(sample.skill, Some("SKILL.md"))

      // Verify resolveExtensionSkill reads content
      val skillRes = store.resolveExtensionSkill("sample_ext", None)
      assert(skillRes.isRight, "sample_ext skill should resolve")
      assertEquals(
        skillRes.toOption.get,
        Some("# Sample Extension Agent Skill\n\nInstructions for agent."),
      )
    }
