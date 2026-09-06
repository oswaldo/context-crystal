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
      dag = DAG("root", List(DAGNode("root", Nil, "2026-09-06T12:00:00Z", authorId, NodeKind.HumanPrompt, "Init"))),
    )

  test("deleteCrystal removes crystal directory and state files"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
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
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
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
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
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
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val deleteRes = store.deleteCrystal("non-existent")
    assert(deleteRes.isLeft, "Expected deletion to fail")
    assert(deleteRes.left.toOption.get.contains("not found"), "Error should contain 'not found'")
