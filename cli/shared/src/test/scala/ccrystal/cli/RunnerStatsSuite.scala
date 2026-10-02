package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.model.search.*
import ccrystal.core.model.stats.CaveStats
import io.circe.parser.decode
import munit.FunSuite

class RunnerStatsSuite extends FunSuite:

  private def createSampleCrystal(
      store: InMemoryCrystalStore,
      id: String,
      title: String,
      status: GoalStatus = GoalStatus.InProgress,
      tasks: List[AcceptanceCriterion] = Nil,
      leases: List[TransientLease] = Nil,
      lessons: List[LessonLearned] = Nil,
  ): ContextCrystal =
    val rootNode = DAGNode(
      id = s"node-$id-1",
      parentIds = Nil,
      timestamp = "2026-09-25T10:00:00Z",
      actorId = "usr_tester",
      kind = NodeKind.HumanPrompt,
      contentSummary = s"Initial prompt for $id with descriptive summary",
    )
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = "2026-09-25T10:00:00Z",
      updatedAt = "2026-09-25T10:00:00Z",
      defaultAuthorId = Some("usr_tester"),
      goal = Goal(title, "Sample Intent", status, tasks),
      entities = List(Entity("usr_tester", EntityKind.Human, "Tester")),
      dag = DAG(rootNode.id, List(rootNode)),
      transientLeases = leases,
      lessonsLearned = lessons,
    )
    store.save(crystal).toOption.get
    crystal

  test("Runner.run with CliCommand.Stats formats dashboard text"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(
      store,
      "crystal-1",
      "First Feature",
      status = GoalStatus.InProgress,
      tasks = List(AcceptanceCriterion("t-1", "Task 1", completed = true)),
    )
    createSampleCrystal(
      store,
      "crystal-2",
      "Second Feature",
      status = GoalStatus.ConcludedSuccess,
      tasks = List(AcceptanceCriterion("t-2", "Task 2", completed = true)),
    )
    val runner = new Runner(store)

    val res = runner.run(CliCommand.Stats(None, detailed = true, jsonOutput = false))
    assert(res.isRight, s"Runner failed: $res")
    val output = res.toOption.get

    assert(output.contains("=== CONTEXT CRYSTAL CAVE METRICS & STATS ==="), "header present")
    assert(output.contains("Scope: Global Cave (2 crystals evaluated)"), "scope present")
    assert(output.contains("Total Crystals:     2 (2 active, 0 archived)"), "crystal count")
    assert(output.contains("Quantitative Token Savings"), "token savings section")
    assert(output.contains("Detailed Disk Usage (Top Crystals):"), "detailed top crystals section")
    assert(output.contains("crystal-1"), "crystal 1 listed")
    assert(output.contains("crystal-2"), "crystal 2 listed")

  test("Runner.run with CliCommand.Stats formats JSON output"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "c-json", "JSON Test Goal")
    val runner = new Runner(store)

    val res = runner.run(CliCommand.Stats(None, detailed = false, jsonOutput = true))
    assert(res.isRight, s"Runner failed: $res")
    val output = res.toOption.get

    import ccrystal.core.codec.given
    val decoded = decode[CaveStats](output)
    assert(decoded.isRight, s"Failed to decode CaveStats JSON: $decoded")
    val stats = decoded.toOption.get
    assertEquals(stats.structure.totalCrystals, 1)
    assertEquals(stats.extents.oldestCrystalId, Some("c-json"))

  test("Runner.run with CliCommand.Stats respects filter scope"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "active-1", "Active Feature", status = GoalStatus.InProgress)
    createSampleCrystal(store, "done-1", "Done Feature", status = GoalStatus.ConcludedSuccess)
    val runner = new Runner(store)

    val filter = CrystalFilter(status = Some(GoalStatus.InProgress))
    val res    = runner.run(CliCommand.Stats(Some(filter), detailed = false, jsonOutput = false))
    assert(res.isRight, s"Runner failed: $res")
    val output = res.toOption.get

    assert(output.contains("1 crystals evaluated"), "evaluated 1 crystal")
    assert(output.contains("Filtered (status=InProgress; 1 crystals evaluated)"), "scope label")
