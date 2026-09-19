package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import java.nio.file.{Files, Path}
import java.util.Comparator

class FsCrystalStoreArchivingSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-archive-test-")

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
      createdAt = "2026-09-19T12:00:00Z",
      updatedAt = "2026-09-19T12:00:00Z",
      defaultAuthorId = Some(authorId),
      goal = Goal(s"Goal $id", s"Intent $id", GoalStatus.InProgress, Nil),
      entities = List(Entity(authorId, EntityKind.Human, authorId)),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-19T12:00:00Z", authorId, NodeKind.HumanPrompt, "Init")),
      ),
    )

  test("archive moves active crystal into archive directory"):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystal = createDummyCrystal("c-arch", "usr_oswaldo")
    assert(store.save(crystal).isRight, "save should succeed")
    assert(store.exists("c-arch"), "crystal exists in active store")
    assert(!store.isArchived("c-arch"), "crystal is not yet archived")

    val archiveRes = store.archive("c-arch")
    assert(archiveRes.isRight, s"archive should succeed: $archiveRes")

    assert(store.isArchived("c-arch"), "crystal should be marked as archived")
    assert(
      !Files.exists(tempDir.resolve(".ccrystals").resolve("c-arch")),
      "active directory should not exist",
    )
    assert(
      Files.exists(
        tempDir.resolve(".ccrystals").resolve("archive").resolve("c-arch").resolve("crystal.json"),
      ),
      "archive crystal.json should exist",
    )

  test("unarchive restores archived crystal back to active directory"):
    val store   = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystal = createDummyCrystal("c-restore", "usr_oswaldo")
    assert(store.save(crystal).isRight)
    assert(store.archive("c-restore").isRight)
    assert(store.isArchived("c-restore"))

    val unarchiveRes = store.unarchive("c-restore")
    assert(unarchiveRes.isRight, s"unarchive should succeed: $unarchiveRes")

    assert(!store.isArchived("c-restore"), "crystal should no longer be archived")
    assert(
      Files.exists(tempDir.resolve(".ccrystals").resolve("c-restore").resolve("crystal.json")),
      "active crystal.json should exist",
    )
    assert(
      !Files.exists(tempDir.resolve(".ccrystals").resolve("archive").resolve("c-restore")),
      "archive directory should no longer exist",
    )

  test("list filters out archived crystals unless includeArchived is true"):
    val store    = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val active1  = createDummyCrystal("c-act-1", "usr_oswaldo")
    val active2  = createDummyCrystal("c-act-2", "usr_oswaldo")
    val archived = createDummyCrystal("c-archived", "usr_oswaldo")

    assert(store.save(active1).isRight)
    assert(store.save(active2).isRight)
    assert(store.save(archived).isRight)
    assert(store.archive("c-archived").isRight)

    val defaultList = store.list().toOption.get
    assertEquals(defaultList.map(_.id).sorted, List("c-act-1", "c-act-2"))

    val allList = store.list(includeArchived = true).toOption.get
    assertEquals(allList.map(_.id).sorted, List("c-act-1", "c-act-2", "c-archived"))

  test("archive and unarchive handle error conditions"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)

    // Non-existent crystal
    val errNonExistent = store.archive("does-not-exist")
    assert(errNonExistent.isLeft, "archiving non-existent crystal should fail")

    // Create and archive
    val crystal = createDummyCrystal("c-err", "usr_oswaldo")
    assert(store.save(crystal).isRight)
    assert(store.archive("c-err").isRight)

    // Archive already archived
    val errAlreadyArchived = store.archive("c-err")
    assert(errAlreadyArchived.isLeft, "archiving already archived crystal should fail")

    // Unarchive non-existent
    val errUnarchiveMissing = store.unarchive("ghost")
    assert(errUnarchiveMissing.isLeft, "unarchiving non-existent crystal should fail")
