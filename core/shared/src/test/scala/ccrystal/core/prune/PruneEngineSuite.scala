package ccrystal.core.prune

import munit.FunSuite
import java.time.Instant
import ccrystal.core.model.*
import ccrystal.core.model.prune.*

class PruneEngineSuite extends FunSuite:

  private val nowMillis = Instant.parse("2026-10-03T12:00:00Z").toEpochMilli

  private def makeCrystal(id: String, author: String, updatedAt: String): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = updatedAt,
      updatedAt = updatedAt,
      defaultAuthorId = Some(author),
      goal = Goal(s"Goal $id", "Intent", GoalStatus.ConcludedSuccess, Nil),
      entities = List(Entity(author, EntityKind.Human, author)),
      dag = DAG("root", List(DAGNode("root", Nil, updatedAt, author, NodeKind.HumanPrompt, "Init"))),
    )

  test("parseDurationDays handles d, w, m, and bare numbers"):
    assertEquals(PruneEngine.parseDurationDays("30d"), Right(30L))
    assertEquals(PruneEngine.parseDurationDays("2w"), Right(14L))
    assertEquals(PruneEngine.parseDurationDays("3m"), Right(90L))
    assertEquals(PruneEngine.parseDurationDays("60"), Right(60L))
    assert(PruneEngine.parseDurationDays("invalid").isLeft)
    assert(PruneEngine.parseDurationDays("").isLeft)

  test(
    "evaluate filters archived crystals older than threshold and detects orphaned entities and artifacts",
  ):
    // 40 days before 2026-10-03 is ~2026-08-24
    val cOld = makeCrystal("c-ancient", "usr_ancient_only", "2026-08-20T10:00:00Z")
    // 10 days before 2026-10-03 is 2026-09-23
    val cRecent = makeCrystal("c-recent", "usr_shared", "2026-09-23T10:00:00Z")
    // Active crystal that also references usr_shared
    val cActive = makeCrystal("c-active", "usr_shared", "2026-10-01T10:00:00Z")

    val entityReg = EntityRegistry(
      entities = Map(
        "usr_ancient_only" -> Entity("usr_ancient_only", EntityKind.Human, "Ancient"),
        "usr_shared"       -> Entity("usr_shared", EntityKind.Human, "Shared"),
      ),
    )

    val artifactReg = CaveArtifactRegistry(
      artifacts = Map(
        "art-ancient" -> Artifact(
          "art-ancient",
          "Ancient Art",
          metadata = Map("crystal_id" -> "c-ancient"),
        ),
        "art-unlinked" -> Artifact("art-unlinked", "Unlinked Art"),
      ),
    )

    val diskSizes = Map("c-ancient" -> 50000L, "c-recent" -> 20000L)

    val previewRes = PruneEngine.evaluate(
      archivedCrystals = List(cOld, cRecent),
      activeCrystals = List(cActive),
      perCrystalDiskBytes = diskSizes,
      entityRegistry = entityReg,
      artifactRegistry = artifactReg,
      targetCrystalId = None,
      olderThanDays = Some(30L),
      all = false,
      nowEpochMillis = nowMillis,
    )

    assert(previewRes.isRight)
    val preview = previewRes.toOption.get
    assertEquals(preview.totalCrystals, 1)
    assertEquals(preview.candidates.map(_.crystalId), List("c-ancient"))
    assertEquals(preview.totalBytesFreed, 50000L)
    assertEquals(preview.orphanedEntitiesToDeregister, List("usr_ancient_only"))
    assertEquals(preview.artifactsToClean, List("art-ancient"))

  test("evaluate with all = true selects all archived crystals"):
    val cOld    = makeCrystal("c-1", "u1", "2026-08-20T10:00:00Z")
    val cRecent = makeCrystal("c-2", "u2", "2026-09-23T10:00:00Z")

    val previewRes = PruneEngine.evaluate(
      archivedCrystals = List(cOld, cRecent),
      activeCrystals = Nil,
      perCrystalDiskBytes = Map("c-1" -> 1000L, "c-2" -> 2000L),
      entityRegistry = EntityRegistry(),
      artifactRegistry = CaveArtifactRegistry(),
      targetCrystalId = None,
      olderThanDays = None,
      all = true,
      nowEpochMillis = nowMillis,
    )

    assert(previewRes.isRight)
    val preview = previewRes.toOption.get
    assertEquals(preview.totalCrystals, 2)
    assertEquals(preview.totalBytesFreed, 3000L)

  test("evaluate returns error when no targeting criterion provided"):
    val res = PruneEngine.evaluate(
      archivedCrystals = Nil,
      activeCrystals = Nil,
      perCrystalDiskBytes = Map.empty,
      entityRegistry = EntityRegistry(),
      artifactRegistry = CaveArtifactRegistry(),
      targetCrystalId = None,
      olderThanDays = None,
      all = false,
      nowEpochMillis = nowMillis,
    )
    assert(res.isLeft)
    assert(res.left.toOption.get.contains("criterion"))
