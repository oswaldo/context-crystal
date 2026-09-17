package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerGoalTransitionSuite extends FunSuite:

  private def createSampleCrystal(store: InMemoryCrystalStore, id: String = "test-c"): Unit =
    val rootNode = DAGNode(
      id = "node-1",
      parentIds = Nil,
      timestamp = "2026-09-17T20:00:00Z",
      actorId = "usr_tester",
      kind = NodeKind.HumanPrompt,
      contentSummary = "Initial prompt",
      fidelity = CaptureFidelity.Intercepted,
    )
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = "2026-09-17T20:00:00Z",
      updatedAt = "2026-09-17T20:00:00Z",
      defaultAuthorId = Some("usr_tester"),
      goal = Goal("Test Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = List(Entity("usr_tester", EntityKind.Human, "Tester")),
      dag = DAG(rootNode.id, List(rootNode)),
    )
    store.save(crystal).toOption.get

  test("Runner.run with GoalTransition concludes crystal without summary"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "test-conclude-nosummary")
    val runner = new Runner(store)

    val res = runner.run(
      CliCommand.GoalTransition("test-conclude-nosummary", GoalStatus.ConcludedSuccess, None),
    )
    assertEquals(res.isRight, true, "res is Right")
    assert(
      res.toOption.get.contains("concluded successfully"),
      "message contains concluded successfully",
    )

    val updated = store.load("test-conclude-nosummary").toOption.get
    assertEquals(updated.goal.status, GoalStatus.ConcludedSuccess)
    assertEquals(updated.dag.nodes.size, 1)

  test(
    "Runner.run with GoalTransition concludes crystal with summary and appends resolution DAG node",
  ):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "test-conclude-summary")
    val runner = new Runner(store)

    val res = runner.run(
      CliCommand.GoalTransition(
        "test-conclude-summary",
        GoalStatus.ConcludedSuccess,
        Some("All acceptance criteria satisfied and verified in staging"),
      ),
    )
    assertEquals(res.isRight, true, "res is Right")
    assert(
      res.toOption.get.contains("concluded successfully"),
      "message contains concluded successfully",
    )
    assert(
      res.toOption.get.contains("appended resolution node 'node-2'"),
      "message mentions resolution node",
    )

    val updated = store.load("test-conclude-summary").toOption.get
    assertEquals(updated.goal.status, GoalStatus.ConcludedSuccess)
    assertEquals(updated.dag.nodes.size, 2)
    val resNode = updated.dag.nodes.last
    assertEquals(resNode.id, "node-2")
    assertEquals(resNode.kind, NodeKind.Resolution)
    assertEquals(resNode.fidelity, CaptureFidelity.Inferred)
    assertEquals(
      resNode.contentSummary,
      "All acceptance criteria satisfied and verified in staging",
    )
    assertEquals(resNode.parentIds, List("node-1"))

  test("Runner.run with GoalTransition abandons crystal with reason"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "test-abandon")
    val runner = new Runner(store)

    val res = runner.run(
      CliCommand.GoalTransition(
        "test-abandon",
        GoalStatus.ConcludedAbandoned,
        Some("Abandoned due to obsolete requirements"),
      ),
    )
    assertEquals(res.isRight, true, "res is Right")
    assert(res.toOption.get.contains("concluded as abandoned"), "message contains abandoned")

    val updated = store.load("test-abandon").toOption.get
    assertEquals(updated.goal.status, GoalStatus.ConcludedAbandoned)
    assertEquals(updated.dag.nodes.size, 2)
    val resNode = updated.dag.nodes.last
    assertEquals(resNode.kind, NodeKind.Resolution)
    assertEquals(resNode.contentSummary, "Abandoned due to obsolete requirements")

  test("Runner.run with GoalTransition transitions to in_progress"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "test-in-progress")
    val runner = new Runner(store)

    runner.run(CliCommand.GoalTransition("test-in-progress", GoalStatus.ConcludedSuccess, None))
    assertEquals(
      store.load("test-in-progress").toOption.get.goal.status,
      GoalStatus.ConcludedSuccess,
    )

    val res = runner.run(CliCommand.GoalTransition("test-in-progress", GoalStatus.InProgress, None))
    assertEquals(res.isRight, true, "res is Right")
    assert(res.toOption.get.contains("transitioned to in_progress"), "message contains in_progress")
    assertEquals(store.load("test-in-progress").toOption.get.goal.status, GoalStatus.InProgress)

  test("Runner.run with GoalTransition returns Left for non-existent crystal"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    val res =
      runner.run(CliCommand.GoalTransition("missing-crystal", GoalStatus.ConcludedSuccess, None))
    assertEquals(res.isLeft, true, "missing crystal returns Left")
