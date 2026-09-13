package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import java.nio.file.{Files, Path}
import java.util.Comparator

class FsCrystalStoreSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files
        .walk(tempDir)
        .sorted(Comparator.reverseOrder())
        .forEach(Files.deleteIfExists)

  test("FsCrystalStore initializes and saves .ccrystals/<name> directory layout"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val goal = Goal(
      title = "Dashboard Launch",
      intent = "Build monitoring UI",
      status = GoalStatus.InProgress,
      acceptanceCriteria = List(
        AcceptanceCriterion("ac-1", "Setup panel", true),
        AcceptanceCriterion("ac-2", "Stream metrics", false),
      ),
    )

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "mission-launch-dashboard",
      name = Some("Mission Launch Dashboard"),
      createdAt = "2026-08-29T12:00:00Z",
      updatedAt = "2026-08-29T12:00:00Z",
      goal = goal,
      entities = List(Entity("e-1", EntityKind.Human, "Flight Director")),
      dag = DAG(
        "n-root",
        List(
          DAGNode(
            "n-root",
            Nil,
            "2026-08-29T12:00:00Z",
            "e-1",
            NodeKind.HumanPrompt,
            "Init dashboard",
          ),
        ),
      ),
      transientLeases = List(
        TransientLease(
          "l-1",
          TransientResourceType.EnvOverride,
          None,
          "Debug telemetry",
          DisposalPolicy.RevertOnConclusion,
          TransientLeaseStatus.Active,
          "2026-08-29T12:00:00Z",
        ),
      ),
      lessonsLearned = List(
        LessonLearned(
          "les-1",
          "Grafana rate limiting",
          Some("Poll interval too low"),
          Some("Increase interval"),
          LessonStatus.Open,
        ),
      ),
    )

    val saveRes = store.save(crystal)
    assert(saveRes.isRight)

    val crystalDir = tempDir.resolve(".ccrystals").resolve("mission-launch-dashboard")
    assert(Files.exists(crystalDir.resolve("crystal.json")), "crystal.json should exist")
    assert(Files.exists(crystalDir.resolve("tasks.md")), "tasks.md should exist")
    assert(
      Files.exists(crystalDir.resolve("lessons-learned.md")),
      "lessons-learned.md should exist",
    )
    assert(Files.exists(crystalDir.resolve("transient.json")), "transient.json should exist")

    // Verify round-trip load
    val loadRes = store.load("mission-launch-dashboard")
    assert(loadRes.isRight)
    val loaded = loadRes.toOption.get
    assertEquals(loaded.id, crystal.id)
    assertEquals(loaded.goal.title, crystal.goal.title)
    assertEquals(loaded.goal.acceptanceCriteria.size, 2)
    assertEquals(loaded.transientLeases.size, 1)
    assertEquals(loaded.lessonsLearned.size, 1)

  test("FsCrystalStore lists all existing crystals"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val crystalA = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "crystal-a",
      createdAt = "2026-08-29T12:00:00Z",
      updatedAt = "2026-08-29T12:00:00Z",
      goal = Goal("Goal A", "Intent A", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-08-29T12:00:00Z", "u-1", NodeKind.HumanPrompt, "A")),
      ),
    )
    val crystalB = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "crystal-b",
      createdAt = "2026-08-29T12:00:00Z",
      updatedAt = "2026-08-29T12:00:00Z",
      goal = Goal("Goal B", "Intent B", GoalStatus.ConcludedSuccess, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-08-29T12:00:00Z", "u-1", NodeKind.HumanPrompt, "B")),
      ),
    )

    store.save(crystalA)
    store.save(crystalB)

    val listRes = store.list()
    assert(listRes.isRight)
    val list = listRes.toOption.get
    assertEquals(list.map(_.id).toSet, Set("crystal-a", "crystal-b"))

  test("FsCrystalStore manages .ccrystals/entities.json lifecycle and collision resolution"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)

    // Initial registry should be empty or auto-created
    val initialEntities = store.getEntityRegistry()
    assert(initialEntities.isRight)
    assertEquals(initialEntities.toOption.get.entities.isEmpty, true)

    // Register human entity
    val humanRes = store.registerEntity(
      Entity("usr_oswaldo", EntityKind.Human, "oswaldo", Map("role" -> "lead")),
    )
    assert(humanRes.isRight)

    // Resolve or create agent entity with collision resolution
    val agt1 = store.resolveOrCreateEntity("antigravity", EntityKind.Agent)
    assert(agt1.isRight)
    assertEquals(agt1.toOption.get.name, "antigravity")

    // Requesting another concurrent agent of same base name resolves to incremented suffix
    val agt2 = store.resolveOrCreateEntity("antigravity", EntityKind.Agent, distinct = true)
    assert(agt2.isRight)
    assertEquals(agt2.toOption.get.name, "antigravity-1")

    val agt3 = store.resolveOrCreateEntity("antigravity", EntityKind.Agent, distinct = true)
    assert(agt3.isRight)
    assertEquals(agt3.toOption.get.name, "antigravity-2")

    // Verify entities.json exists and contains registered entities
    val entitiesJsonPath = tempDir.resolve(".ccrystals").resolve("entities.json")
    assert(Files.exists(entitiesJsonPath), "entities.json should exist")

    val reloadedRegistry = store.getEntityRegistry()
    assert(reloadedRegistry.isRight)
    val entitiesMap = reloadedRegistry.toOption.get.entities
    assert(entitiesMap.contains("usr_oswaldo"))
    assert(entitiesMap.contains(agt1.toOption.get.id))
    assert(entitiesMap.contains(agt2.toOption.get.id))
    assert(entitiesMap.contains(agt3.toOption.get.id))

    // Resolve entity with clean handle
    val handleRes = store.resolveOrCreateEntity("john", EntityKind.Human)
    assert(handleRes.isRight)
    assertEquals(handleRes.toOption.get.id, "usr_john")

  test("FsCrystalStore manages .ccrystals/artifacts.json lifecycle and artifact queries"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)

    // Initial registry should be empty
    val initialArtifacts = store.getArtifactRegistry()
    assert(initialArtifacts.isRight)
    assertEquals(initialArtifacts.toOption.get.artifacts.isEmpty, true)

    // Register a cave-wide instrument artifact
    val rigArtifact = Artifact(
      id = "art-rig-01",
      name = "CAN-bus Hardware Test Rig",
      substrate = ArtifactSubstrate.Physical,
      role = ArtifactRole.Instrument,
      uri = Some("urn:hardware:can-rig:01"),
      description = Some("Bench test rig"),
      location = Some(
        PhysicalLocation(
          name = "Electronics Lab",
          civicAddress = Some("Musterstraße 1, Berlin"),
          geoUri = Some("geo:52.5200,13.4050"),
          benchCoordinates = Some("Bench-07"),
        ),
      ),
    )
    val regRes = store.registerArtifact(rigArtifact)
    assert(regRes.isRight)

    // Verify artifacts.json exists on disk
    val artifactsJsonPath = tempDir.resolve(".ccrystals").resolve("artifacts.json")
    assert(Files.exists(artifactsJsonPath), "artifacts.json should exist")

    // Query cave artifacts
    val caveList = store.listArtifacts()
    assert(caveList.isRight, "caveList should be Right")
    assertEquals(caveList.toOption.get.map(_.id), List("art-rig-01"), "caveList IDs match")

    // Save a crystal with crystal-scoped deliverables
    val fileArtifact = Artifact(
      id = "art-schema",
      name = "v1 Schema",
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some("file:///spec/v1/context-crystal.json"),
    )
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-with-artifacts",
      createdAt = "2026-09-13T10:00:00Z",
      updatedAt = "2026-09-13T10:00:00Z",
      goal = Goal("Schema Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-13T10:00:00Z", "u-1", NodeKind.HumanPrompt, "Init")),
      ),
      artifacts = List(fileArtifact),
    )
    assert(store.save(crystal).isRight, "save crystal with artifacts should be Right")

    // Query crystal-scoped artifacts
    val crystalArtifacts = store.listArtifacts(crystalId = Some("c-with-artifacts"))
    assert(crystalArtifacts.isRight, "crystalArtifacts should be Right")
    assertEquals(
      crystalArtifacts.toOption.get.map(_.id),
      List("art-schema"),
      "crystalArtifacts IDs match",
    )

    // Query specific artifact with crystal fallback
    val fetchedTarget = store.getArtifact("art-schema", crystalId = Some("c-with-artifacts"))
    assert(fetchedTarget.isRight, "fetchedTarget should be Right")
    assertEquals(
      fetchedTarget.toOption.get.map(_.name),
      Some("v1 Schema"),
      "fetchedTarget name matches",
    )

    val fetchedRig = store.getArtifact("art-rig-01", crystalId = Some("c-with-artifacts"))
    assert(fetchedRig.isRight, "fetchedRig should be Right")
    assertEquals(
      fetchedRig.toOption.get.map(_.name),
      Some("CAN-bus Hardware Test Rig"),
      "fetchedRig name matches",
    )
