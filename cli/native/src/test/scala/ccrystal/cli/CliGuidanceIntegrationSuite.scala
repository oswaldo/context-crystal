package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.store.FsCrystalStore
import java.nio.file.{Files, Path}
import java.util.Comparator

class CliGuidanceIntegrationSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-guidance-native-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files
        .walk(tempDir)
        .sorted(Comparator.reverseOrder())
        .forEach(Files.deleteIfExists)

  test("End-to-end CLI execution of --for-ai via Runner and FsCrystalStore"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val runner = Runner(store)

    val parseRes = CommandParser.parse(List("--for-ai"))
    assert(parseRes.isRight)
    val cmd = parseRes.toOption.get
    assertEquals(cmd, CliCommand.ForAi)

    val runRes = runner.run(cmd)
    assert(runRes.isRight)
    val output = runRes.toOption.get
    assert(output.contains("Operational Invariants for AI Entities"))
    assert(output.contains("Zero Unprompted PII Persistence"))
    assert(output.contains("usr_"))

  test("End-to-end CLI execution of entity conventions via Runner and FsCrystalStore"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val runner = Runner(store)

    val parseRes = CommandParser.parse(List("entity", "conventions"))
    assert(parseRes.isRight)
    val cmd = parseRes.toOption.get
    assertEquals(cmd, CliCommand.EntityConventions)

    val runRes = runner.run(cmd)
    assert(runRes.isRight)
    val output = runRes.toOption.get
    assert(output.contains("Entity Naming & PII Protection Conventions"))
    assert(output.contains("usr_"))
    assert(output.contains("agt_"))

  test("End-to-end entity registration with diacritics normalizes to clean slug in entities.json"):
    val store  = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val runner = Runner(store)

    val parseRes =
      CommandParser.parse(List("entity", "register", "-n", "John Doe Júnior", "-k", "human"))
    assert(parseRes.isRight)
    val cmd = parseRes.toOption.get

    val runRes = runner.run(cmd)
    assert(runRes.isRight)
    val output = runRes.toOption.get
    assert(output.contains("usr_john_doe_junior"))

    val registryRes = store.getEntityRegistry()
    assert(registryRes.isRight)
    val registry = registryRes.toOption.get
    assert(registry.entities.contains("usr_john_doe_junior"))
