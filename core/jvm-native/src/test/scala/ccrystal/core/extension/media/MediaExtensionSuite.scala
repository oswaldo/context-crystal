package ccrystal.core.extension.media

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.model.extension.*
import ccrystal.core.store.FsCrystalStore

class MediaExtensionSuite extends FunSuite:

  def withTempCave(test: (FsCrystalStore, os.Path) => Unit): Unit =
    val tempCave = os.temp.dir(prefix = "ccrystal-media-cave")
    try
      // Seed cave with declarative media extension
      val mediaDir = tempCave / "extensions" / "media"
      os.makeDir.all(mediaDir)
      os.write(
        mediaDir / "extension.json",
        """{
          |  "id": "media",
          |  "name": "Media & Multi-Modal Asset Provenance",
          |  "version": "1.0.0",
          |  "substrate": "declarative",
          |  "scope": "cave",
          |  "enabled": true,
          |  "description": "CEP-0002 Media Provenance",
          |  "schemaUri": "spec/extensions/media/schema.json",
          |  "metadata": {
          |    "supportedMediaTypes": "video_master,inspection_still"
          |  }
          |}""".stripMargin,
      )

      val store = new FsCrystalStore(tempCave)
      test(store, tempCave)
    finally
      try os.remove.all(tempCave)
      catch case _: Throwable => ()

  test("cave-wide declarative media extension is discovered by all crystals"):
    withTempCave { (store, _) =>
      val crystalId = "cut-iteration-v1"
      val extsRes   = store.listExtensions(Some(crystalId))
      assert(extsRes.isRight, "listExtensions should succeed")
      val exts = extsRes.toOption.get

      val mediaExt = exts.find(_.id == "media")
      assert(mediaExt.isDefined, "media extension should be discovered")
      assertEquals(mediaExt.get.substrate, ExtensionSubstrate.Declarative)
      assertEquals(mediaExt.get.scope, ExtensionScope.Cave)
      assertEquals(mediaExt.get.enabled, true)
      assertEquals(
        mediaExt.get.metadata.get("supportedMediaTypes"),
        Some("video_master,inspection_still"),
      )
    }

  test("media artifact with CEP-0002 metadata is registered and retrieved accurately"):
    withTempCave { (store, _) =>
      val crystalId = "cut-iteration-v1"
      val videoMaster = Artifact(
        id = "artifact-master-cut-01",
        name = "demo_cyan_hybrid_editorial.mp4",
        substrate = ArtifactSubstrate.Physical,
        role = ArtifactRole.Target,
        uri = Some("media/cuts/widescreen_16x9/demo_cyan_hybrid_editorial.mp4"),
        mediaType = Some("video/mp4"),
        description = Some("Widescreen 16:9 master video cut"),
        location = None,
        metadata = Map(
          "media_type"       -> "video_master",
          "aspect_ratio"     -> "16:9",
          "resolution"       -> "1920x1080",
          "fps"              -> "30.0",
          "duration_seconds" -> "18.02",
          "codec"            -> "h264_nvenc",
          "color_profile"    -> "bt709",
        ),
      )

      val regRes = store.registerArtifact(videoMaster)
      assertEquals(regRes, Right(videoMaster))

      val retrievedRes = store.getArtifact("artifact-master-cut-01")
      assertEquals(retrievedRes, Right(Some(videoMaster)))
      val retrieved = retrievedRes.toOption.get.get
      assertEquals(retrieved.metadata.get("aspect_ratio"), Some("16:9"))
      assertEquals(retrieved.metadata.get("resolution"), Some("1920x1080"))
      assertEquals(retrieved.metadata.get("fps"), Some("30.0"))
    }
