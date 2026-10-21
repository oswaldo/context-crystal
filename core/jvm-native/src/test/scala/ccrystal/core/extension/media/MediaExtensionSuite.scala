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

  test(
    "supports studio media artifacts: trilingual subtitle tracks, thumbnails, and broadcast loudness",
  ):
    withTempCave { (store, _) =>
      val subtitleTrack = Artifact(
        id = "artifact-subtitles-trilingual",
        name = "master_subtitles_pt_en_de.srt",
        substrate = ArtifactSubstrate.Physical,
        role = ArtifactRole.Target,
        uri = Some("media/subtitles/master_subtitles.srt"),
        mediaType = Some("application/x-subrip"),
        description = Some("Synchronized trilingual broadcast subtitles"),
        location = None,
        metadata = Map(
          "media_type"    -> "subtitle_track",
          "language"      -> "pt-BR",
          "languages"     -> "pt-BR,en,de",
          "loudness_lufs" -> "-14.0",
        ),
      )

      val regRes = store.registerArtifact(subtitleTrack)
      assertEquals(regRes, Right(subtitleTrack))

      val retrieved = store.getArtifact("artifact-subtitles-trilingual").toOption.flatten.get
      assertEquals(retrieved.metadata.get("media_type"), Some("subtitle_track"))
      assertEquals(retrieved.metadata.get("language"), Some("pt-BR"))
      assertEquals(retrieved.metadata.get("loudness_lufs"), Some("-14.0"))
    }

  test("packaged spec/extensions/media extension manifest and schema parse cleanly"):
    import io.circe.parser.decode
    import ccrystal.core.codec.extension.given

    val specMediaDir = os.pwd / "spec" / "extensions" / "media"
    assert(os.exists(specMediaDir), "spec/extensions/media must exist")
    assert(os.exists(specMediaDir / "extension.json"), "extension.json must exist")
    assert(os.exists(specMediaDir / "schema.json"), "schema.json must exist")
    assert(os.exists(specMediaDir / "review.sh"), "review.sh must exist")
    assert(os.exists(specMediaDir / "SKILL.md"), "SKILL.md must exist")

    val manifestContent = os.read(specMediaDir / "extension.json")
    val manifestRes     = decode[ExtensionManifest](manifestContent)
    assert(manifestRes.isRight, s"Manifest decode failed: ${manifestRes.left}")
    val manifest = manifestRes.toOption.get
    assertEquals(manifest.id, "media")
    assertEquals(manifest.substrate, ExtensionSubstrate.Declarative)
    assertEquals(manifest.scope, ExtensionScope.Cave)
    assertEquals(manifest.enabled, true)
    assertEquals(manifest.schemaUri, Some("spec/extensions/media/schema.json"))
    assertEquals(manifest.entrypoint, Some("review.sh"))
    assertEquals(manifest.skill, Some("SKILL.md"))

  test("store resolves companion SKILL.md for declarative media extension"):
    val tempCave = os.temp.dir(prefix = "ccrystal-media-skill")
    try
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
          |  "skill": "SKILL.md"
          |}""".stripMargin,
      )
      os.write(
        mediaDir / "SKILL.md",
        """# Media Skill
          |Review media assets.
          |""".stripMargin,
      )
      val store    = new FsCrystalStore(tempCave)
      val skillRes = store.resolveExtensionSkill("media", None)
      assert(skillRes.isRight, "skill lookup should succeed")
      val skillText = skillRes.toOption.get
      assert(skillText.isDefined, "skill text must be found")
      assert(skillText.get.contains("Media Skill"), "content should match")
    finally
      try os.remove.all(tempCave)
      catch case _: Throwable => ()

  test("media extension reports aggregate telemetry to getExtensionStats"):
    withTempCave { (store, cavePath) =>
      val master = Artifact(
        id = "master-cut",
        name = "master.mp4",
        substrate = ArtifactSubstrate.Physical,
        role = ArtifactRole.Target,
        metadata = Map(
          "media_type"       -> "video_master",
          "size_bytes"       -> "10485760", // 10 MB
          "duration_seconds" -> "60.0",
        ),
      )
      val still = Artifact(
        id = "still-01",
        name = "still.jpg",
        substrate = ArtifactSubstrate.Physical,
        role = ArtifactRole.Instrument,
        metadata = Map(
          "media_type" -> "inspection_still",
          "size_bytes" -> "524288", // 512 KB
        ),
      )
      store.registerArtifact(master)
      store.registerArtifact(still)

      val stats         = store.getExtensionStats()
      val mediaStatsOpt = stats.find(_.extensionId == "media")
      assert(mediaStatsOpt.isDefined, "media extension stats must be present")
      val mediaStats = mediaStatsOpt.get
      assertEquals(mediaStats.metrics.get("total_media_assets"), Some("2"))
      assertEquals(mediaStats.metrics.get("type_video_master"), Some("1"))
      assertEquals(mediaStats.metrics.get("type_inspection_still"), Some("1"))
      assert(mediaStats.summary.contains("2 media asset(s)"))
      assert(mediaStats.summary.contains("60.0s footage"))
    }
