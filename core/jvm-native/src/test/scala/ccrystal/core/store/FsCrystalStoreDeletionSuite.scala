package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import java.nio.file.{Files, Path}
import java.util.Comparator

class FsCrystalStoreDeletionSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-deletion-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files
        .walk(tempDir)
        .sorted(Comparator.reverseOrder())
        .forEach(Files.deleteIfExists)

  private def createDummyCrystal(id: String, authorId: String): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = "2026-09-06T12:00:00Z",
      updatedAt = "2026-09-06T12:00:00Z",
      defaultAuthorId = Some(authorId),
      goal = Goal(s"Goal $id", s"Intent $id", GoalStatus.InProgress, Nil),
      entities = List(Entity(authorId, EntityKind.Human, authorId)),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-06T12:00:00Z", authorId, NodeKind.HumanPrompt, "Init")),
      ),
    )

  test("deleteCrystal removes crystal directory and state files"):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystal = createDummyCrystal("c-1", "usr_oswaldo")
    val saveRes = store.save(crystal)
    assert(saveRes.isRight)
    assert(store.exists("c-1"))

    val deleteRes = store.deleteCrystal("c-1")
    assert(deleteRes.isRight)
    assertEquals(deleteRes.toOption.get.deletedCrystalId, "c-1")
    assert(!store.exists("c-1"))
    assert(store.load("c-1").isLeft)

  test("deleteCrystal cascades to deregister orphaned entity"):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val entity1 = Entity("usr_solo", EntityKind.Human, "Solo User")
    val entity2 = Entity("usr_shared", EntityKind.Human, "Shared User")
    assert(store.registerEntity(entity1).isRight)
    assert(store.registerEntity(entity2).isRight)

    val crystal1 = createDummyCrystal("c-solo", "usr_solo")
    val crystal2 = createDummyCrystal("c-shared", "usr_shared")
    assert(store.save(crystal1).isRight)
    assert(store.save(crystal2).isRight)

    val deleteRes = store.deleteCrystal("c-solo")
    assert(deleteRes.isRight)
    val result = deleteRes.toOption.get
    assertEquals(result.deletedCrystalId, "c-solo")
    assertEquals(result.deregisteredEntityIds, List("usr_solo"))

    // Verify entity registry: usr_solo should be removed, usr_shared should remain
    val registry = store.getEntityRegistry().toOption.get
    assert(!registry.entities.contains("usr_solo"), "usr_solo should be deregistered")
    assert(registry.entities.contains("usr_shared"), "usr_shared should still exist")

  test("deleteCrystal does not deregister entity if another crystal still references it"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val entity = Entity("usr_shared", EntityKind.Human, "Shared User")
    assert(store.registerEntity(entity).isRight)

    val crystal1 = createDummyCrystal("c-1", "usr_shared")
    val crystal2 = createDummyCrystal("c-2", "usr_shared")
    assert(store.save(crystal1).isRight)
    assert(store.save(crystal2).isRight)

    val deleteRes = store.deleteCrystal("c-1")
    assert(deleteRes.isRight)
    val result = deleteRes.toOption.get
    assertEquals(result.deletedCrystalId, "c-1")
    assertEquals(result.deregisteredEntityIds, Nil)

    val registry = store.getEntityRegistry().toOption.get
    assert(registry.entities.contains("usr_shared"), "usr_shared must remain registered")

  test("deleteCrystal returns error when crystal does not exist"):
    val store     = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val deleteRes = store.deleteCrystal("non-existent")
    assert(deleteRes.isLeft, "Expected deletion to fail")
    assert(deleteRes.left.toOption.get.contains("not found"), "Error should contain 'not found'")

  test("deregisterEntity removes entity from cave registry"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val entity = Entity("usr_alice", EntityKind.Human, "Alice")
    assert(store.registerEntity(entity).isRight)

    val deregRes = store.deregisterEntity("usr_alice")
    assert(deregRes.isRight)
    val result = deregRes.toOption.get
    assertEquals(result.deregisteredEntityId, "usr_alice")
    assertEquals(result.deletedCrystalIds, Nil)

    val registry = store.getEntityRegistry().toOption.get
    assert(!registry.entities.contains("usr_alice"))

  test("deregisterEntity cascades to delete all crystals referencing the entity"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val alice = Entity("usr_alice", EntityKind.Human, "Alice")
    val bob   = Entity("usr_bob", EntityKind.Human, "Bob")
    assert(store.registerEntity(alice).isRight)
    assert(store.registerEntity(bob).isRight)

    val crystalA1 = createDummyCrystal("c-alice-1", "usr_alice")
    val crystalA2 = createDummyCrystal("c-alice-2", "usr_alice")
    val crystalB  = createDummyCrystal("c-bob", "usr_bob")
    assert(store.save(crystalA1).isRight)
    assert(store.save(crystalA2).isRight)
    assert(store.save(crystalB).isRight)

    val deregRes = store.deregisterEntity("usr_alice")
    assert(deregRes.isRight)
    val result = deregRes.toOption.get
    assertEquals(result.deregisteredEntityId, "usr_alice")
    assertEquals(result.deletedCrystalIds, List("c-alice-1", "c-alice-2"))

    assert(!store.exists("c-alice-1"))
    assert(!store.exists("c-alice-2"))
    assert(store.exists("c-bob"), "c-bob must remain intact")

    val registry = store.getEntityRegistry().toOption.get
    assert(!registry.entities.contains("usr_alice"))
    assert(registry.entities.contains("usr_bob"))

  test("deregisterEntity returns error when entity does not exist in registry"):
    val store    = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val deregRes = store.deregisterEntity("usr_nonexistent")
    assert(deregRes.isLeft, "Expected deregistration to fail")
    assert(
      deregRes.left.toOption.get.contains("not found in cave registry"),
      "Error should indicate not found in registry",
    )

  test("previewCrystalDeletion respects limit and identifies cascading entities"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val entity = Entity("usr_solo", EntityKind.Human, "Solo User")
    assert(store.registerEntity(entity).isRight)

    val nodes = (1 to 15).toList.map { i =>
      DAGNode(
        s"n-$i",
        Nil,
        s"2026-09-06T12:0$i:00Z",
        "usr_solo",
        NodeKind.ToolExecution,
        s"Action $i",
      )
    }
    val tasks = (1 to 12).toList.map { i =>
      AcceptanceCriterion(s"t-$i", s"Task description $i", completed = i % 2 == 0)
    }
    val lessons = (1 to 5).toList.map { i =>
      LessonLearned(s"l-$i", s"Friction $i", Some(s"Root cause $i"), Some(s"Action $i"))
    }
    val leases = (1 to 3).toList.map { i =>
      TransientLease(
        s"ls-$i",
        TransientResourceType.GitWorktree,
        None,
        s"Lease $i",
        DisposalPolicy.RevertOnConclusion,
        TransientLeaseStatus.Active,
        "2026-09-06T12:00:00Z",
      )
    }

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-preview",
      createdAt = "2026-09-06T12:00:00Z",
      updatedAt = "2026-09-06T12:00:00Z",
      defaultAuthorId = Some("usr_solo"),
      goal = Goal("Preview Goal", "Preview Intent", GoalStatus.InProgress, tasks),
      entities = List(entity),
      dag = DAG(nodes.head.id, nodes),
      transientLeases = leases,
      lessonsLearned = lessons,
    )
    assert(store.save(crystal).isRight)

    val previewRes = store.previewCrystalDeletion("c-preview", limit = 10)
    assert(previewRes.isRight)
    val preview = previewRes.toOption.get

    assertEquals(preview.crystalId, "c-preview")
    assertEquals(preview.totalNodes, 15)
    assertEquals(preview.nodeSummaries.size, 10)
    assertEquals(preview.totalTasks, 12)
    assertEquals(preview.completedTasks, 6)
    assertEquals(preview.taskDescriptions.size, 10)
    assertEquals(preview.totalLessons, 5)
    assertEquals(preview.lessonFrictions.size, 5)
    assertEquals(preview.totalLeases, 3)
    assertEquals(preview.activeLeases, 3)
    assertEquals(preview.leaseDescriptions.size, 3)
    assertEquals(preview.cascadingDeregisterEntityIds, List("usr_solo"))

  test("previewEntityDeregistration aggregates affected crystal previews"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val alice = Entity("usr_alice", EntityKind.Human, "Alice")
    assert(store.registerEntity(alice).isRight)

    val c1 = createDummyCrystal("c-1", "usr_alice")
    val c2 = createDummyCrystal("c-2", "usr_alice")
    assert(store.save(c1).isRight)
    assert(store.save(c2).isRight)

    val previewRes = store.previewEntityDeregistration("usr_alice", limit = 5)
    assert(previewRes.isRight)
    val preview = previewRes.toOption.get
    assertEquals(preview.entity.id, "usr_alice")
    assertEquals(preview.affectedCrystals.map(_.crystalId).sorted, List("c-1", "c-2"))

  test("deleteCrystal deletes an archived crystal from cold storage"):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystal = createDummyCrystal("c-arch", "usr_oswaldo")
    assert(store.save(crystal).isRight)
    assert(store.archive("c-arch").isRight)
    assert(store.isArchived("c-arch"))
    assert(!store.exists("c-arch"))

    val deleteRes = store.deleteCrystal("c-arch")
    assert(deleteRes.isRight)
    val res = deleteRes.toOption.get
    assertEquals(res.deletedCrystalId, "c-arch")
    assertEquals(res.isArchived, true)
    assert(!store.isArchived("c-arch"))
    assert(store.load("c-arch").isLeft)

  test(
    "deleteCrystal on archived crystal cascades orphaned entity only authored by that archived crystal",
  ):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val entity1 = Entity("usr_arch_solo", EntityKind.Human, "Solo Arch User")
    val entity2 = Entity("usr_active_shared", EntityKind.Human, "Shared Active User")
    assert(store.registerEntity(entity1).isRight)
    assert(store.registerEntity(entity2).isRight)

    val crystal1 = createDummyCrystal("c-arch-solo", "usr_arch_solo")
    val crystal2 = createDummyCrystal("c-active-shared", "usr_active_shared")
    assert(store.save(crystal1).isRight)
    assert(store.save(crystal2).isRight)
    assert(store.archive("c-arch-solo").isRight)

    val deleteRes = store.deleteCrystal("c-arch-solo")
    assert(deleteRes.isRight)
    val res = deleteRes.toOption.get
    assertEquals(res.deletedCrystalId, "c-arch-solo")
    assertEquals(res.isArchived, true)
    assertEquals(res.deregisteredEntityIds, List("usr_arch_solo"))

    val registry = store.getEntityRegistry().toOption.get
    assert(!registry.entities.contains("usr_arch_solo"), "usr_arch_solo should be deregistered")
    assert(registry.entities.contains("usr_active_shared"), "usr_active_shared should still exist")

  test(
    "deleteCrystal cleans up entries in .ccrystals/artifacts.json associated with the deleted crystal",
  ):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystal = createDummyCrystal("c-with-art", "usr_oswaldo")
    assert(store.save(crystal).isRight)

    val caveArtifact = Artifact(
      id = "art-c-with-art",
      name = "Cave Artifact for c-with-art",
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some("file:///tmp/something"),
      metadata = Map("crystal_id" -> "c-with-art"),
    )
    val unassociatedArtifact = Artifact(
      id = "art-unrelated",
      name = "Unrelated Cave Artifact",
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some("file:///tmp/other"),
    )
    assert(store.registerArtifact(caveArtifact).isRight)
    assert(store.registerArtifact(unassociatedArtifact).isRight)

    val deleteRes = store.deleteCrystal("c-with-art")
    assert(deleteRes.isRight)
    val res = deleteRes.toOption.get
    assertEquals(res.cleanedArtifactIds, List("art-c-with-art"))

    val reg = store.getArtifactRegistry().toOption.get
    assert(!reg.artifacts.contains("art-c-with-art"), "Associated artifact should be removed")
    assert(reg.artifacts.contains("art-unrelated"), "Unrelated artifact must remain")

  test("previewCrystalDeletion indicates isArchived when crystal is in cold storage"):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystal = createDummyCrystal("c-preview-arch", "usr_oswaldo")
    assert(store.save(crystal).isRight)
    assert(store.archive("c-preview-arch").isRight)

    val previewRes = store.previewCrystalDeletion("c-preview-arch")
    assert(previewRes.isRight)
    val preview = previewRes.toOption.get
    assertEquals(preview.crystalId, "c-preview-arch")
    assertEquals(preview.isArchived, true)
