package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.store.FsCrystalStore
import java.nio.file.{Files, Path}
import java.util.Comparator

class CliFsDeletionIntegrationSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-cli-fs-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files
        .walk(tempDir)
        .sorted(Comparator.reverseOrder())
        .forEach(Files.deleteIfExists)

  test("End-to-end CLI deletion removes crystal directory from filesystem"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val runner = Runner(store, confirmPrompt = _ => true)

    val initRes = runner.run(
      CliCommand.Init("proj-alpha", "Goal Alpha", None, Some("usr_alice"), Some(EntityKind.Human)),
    )
    assert(initRes.isRight)
    assert(store.exists("proj-alpha"))
    val crystalDir = tempDir.resolve(".ccrystals").resolve("proj-alpha")
    assert(Files.exists(crystalDir))

    val delRes = runner.run(CliCommand.Prune(crystalId = Some("proj-alpha"), force = true))
    assert(delRes.isRight)
    assert(!Files.exists(crystalDir), "Directory must be physically removed")
    assert(!store.exists("proj-alpha"))

  test("End-to-end entity deregister cascades to delete filesystem directories"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val runner = Runner(store, confirmPrompt = _ => true)

    val init1 =
      runner.run(CliCommand.Init("p1", "G1", None, Some("Bob"), Some(EntityKind.Human)))
    val init2 =
      runner.run(CliCommand.Init("p2", "G2", None, Some("Bob"), Some(EntityKind.Human)))
    assert(init1.isRight)
    assert(init2.isRight)

    assert(Files.exists(tempDir.resolve(".ccrystals").resolve("p1")))
    assert(Files.exists(tempDir.resolve(".ccrystals").resolve("p2")))

    val deregRes = runner.run(CliCommand.EntityDeregister("usr_bob", force = true))
    assert(deregRes.isRight)
    assert(!Files.exists(tempDir.resolve(".ccrystals").resolve("p1")))
    assert(!Files.exists(tempDir.resolve(".ccrystals").resolve("p2")))
    assert(!store.getEntityRegistry().toOption.get.entities.contains("usr_bob"))
