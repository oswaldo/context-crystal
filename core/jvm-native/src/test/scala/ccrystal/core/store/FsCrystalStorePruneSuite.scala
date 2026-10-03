package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import java.nio.file.{Files, Path}
import java.util.Comparator

class FsCrystalStorePruneSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-prune-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files
        .walk(tempDir)
        .sorted(Comparator.reverseOrder())
        .forEach(Files.deleteIfExists)

  private def createDummyCrystal(id: String, authorId: String, timestamp: String): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = timestamp,
      updatedAt = timestamp,
      defaultAuthorId = Some(authorId),
      goal = Goal(s"Goal $id", s"Intent $id", GoalStatus.ConcludedSuccess, Nil),
      entities = List(Entity(authorId, EntityKind.Human, authorId)),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, timestamp, authorId, NodeKind.HumanPrompt, "Init")),
      ),
    )

  test("previewPrune reports candidate archived crystals and preserves disk files"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-arch-old", "usr_old", "2026-08-01T10:00:00Z")
    val c2    = createDummyCrystal("c-arch-new", "usr_new", "2026-10-02T10:00:00Z")
    val cAct  = createDummyCrystal("c-active", "usr_act", "2026-10-02T10:00:00Z")

    assert(store.save(c1).isRight)
    assert(store.save(c2).isRight)
    assert(store.save(cAct).isRight)

    assert(store.archive("c-arch-old").isRight)
    assert(store.archive("c-arch-new").isRight)

    val previewRes = store.previewPrune(olderThanDays = Some(30L))
    assert(previewRes.isRight)
    val preview = previewRes.toOption.get
    assertEquals(preview.totalCrystals, 1)
    assertEquals(preview.candidates.map(_.crystalId), List("c-arch-old"))
    assert(preview.totalBytesFreed > 0L)

    // Verify files still exist
    assert(store.isArchived("c-arch-old"))
    assert(store.isArchived("c-arch-new"))
    assert(store.exists("c-active"))

  test(
    "pruneArchived deletes expired archived crystals, cascades orphaned entities, and cleans artifacts",
  ):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)

    val entityOld    = Entity("usr_solo_ancient", EntityKind.Human, "Ancient Solo")
    val entityShared = Entity("usr_shared_agent", EntityKind.Agent, "Shared Agent")
    assert(store.registerEntity(entityOld).isRight)
    assert(store.registerEntity(entityShared).isRight)

    val cOld    = createDummyCrystal("c-old", "usr_solo_ancient", "2026-08-01T10:00:00Z")
    val cRecent = createDummyCrystal("c-recent", "usr_shared_agent", "2026-10-02T10:00:00Z")
    val cActive = createDummyCrystal("c-active", "usr_shared_agent", "2026-10-02T10:00:00Z")

    assert(store.save(cOld).isRight)
    assert(store.save(cRecent).isRight)
    assert(store.save(cActive).isRight)

    assert(store.archive("c-old").isRight)
    assert(store.archive("c-recent").isRight)

    val artifact = Artifact(
      id = "art-old-spec",
      name = "Old Spec",
      metadata = Map("crystal_id" -> "c-old"),
    )
    assert(store.registerArtifact(artifact).isRight)

    // Dry run first
    val dryRes = store.pruneArchived(olderThanDays = Some(30L), dryRun = true)
    assert(dryRes.isRight)
    val dry = dryRes.toOption.get
    assertEquals(dry.dryRun, true)
    assertEquals(dry.prunedCrystalIds, List("c-old"))
    assert(store.isArchived("c-old"))

    // Real prune
    val pruneRes = store.pruneArchived(olderThanDays = Some(30L), dryRun = false)
    assert(pruneRes.isRight)
    val res = pruneRes.toOption.get
    assertEquals(res.dryRun, false)
    assertEquals(res.prunedCrystalIds, List("c-old"))
    assertEquals(res.deregisteredEntityIds, List("usr_solo_ancient"))
    assertEquals(res.cleanedArtifactIds, List("art-old-spec"))

    // Verify c-old is permanently gone
    assert(!store.isArchived("c-old"))
    // Verify c-recent and c-active remain
    assert(store.isArchived("c-recent"))
    assert(store.exists("c-active"))

    // Verify entity registry
    val reg = store.getEntityRegistry().toOption.get
    assert(!reg.entities.contains("usr_solo_ancient"))
    assert(reg.entities.contains("usr_shared_agent"))

    // Verify artifact registry
    val artReg = store.getArtifactRegistry().toOption.get
    assert(!artReg.artifacts.contains("art-old-spec"))
