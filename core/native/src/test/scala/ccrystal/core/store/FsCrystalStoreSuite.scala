package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import java.nio.file.{Files, Path}
import java.util.Comparator

class FsCrystalStoreSuite extends FunSuite:

  var tempDir: Path = _

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files.walk(tempDir)
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
        AcceptanceCriterion("ac-2", "Stream metrics", false)
      )
    )

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "mission-launch-dashboard",
      name = Some("Mission Launch Dashboard"),
      createdAt = "2026-08-29T12:00:00Z",
      updatedAt = "2026-08-29T12:00:00Z",
      goal = goal,
      entities = List(Entity("e-1", EntityKind.Human, "Flight Director")),
      dag = DAG("n-root", List(DAGNode("n-root", Nil, "2026-08-29T12:00:00Z", "e-1", NodeKind.HumanPrompt, "Init dashboard"))),
      transientLeases = List(
        TransientLease("l-1", TransientResourceType.EnvOverride, None, "Debug telemetry", DisposalPolicy.RevertOnConclusion, TransientLeaseStatus.Active, "2026-08-29T12:00:00Z")
      ),
      lessonsLearned = List(
        LessonLearned("les-1", "Grafana rate limiting", Some("Poll interval too low"), Some("Increase interval"), LessonStatus.Open)
      )
    )

    val saveRes = store.save(crystal)
    assert(saveRes.isRight)

    val crystalDir = tempDir.resolve(".ccrystals").resolve("mission-launch-dashboard")
    assert(Files.exists(crystalDir.resolve("crystal.json")), "crystal.json should exist")
    assert(Files.exists(crystalDir.resolve("tasks.md")), "tasks.md should exist")
    assert(Files.exists(crystalDir.resolve("lessons-learned.md")), "lessons-learned.md should exist")
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
      dag = DAG("root", List(DAGNode("root", Nil, "2026-08-29T12:00:00Z", "u-1", NodeKind.HumanPrompt, "A")))
    )
    val crystalB = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "crystal-b",
      createdAt = "2026-08-29T12:00:00Z",
      updatedAt = "2026-08-29T12:00:00Z",
      goal = Goal("Goal B", "Intent B", GoalStatus.ConcludedSuccess, Nil),
      entities = Nil,
      dag = DAG("root", List(DAGNode("root", Nil, "2026-08-29T12:00:00Z", "u-1", NodeKind.HumanPrompt, "B")))
    )

    store.save(crystalA)
    store.save(crystalB)

    val listRes = store.list()
    assert(listRes.isRight)
    val list = listRes.toOption.get
    assertEquals(list.map(_.id).toSet, Set("crystal-a", "crystal-b"))
