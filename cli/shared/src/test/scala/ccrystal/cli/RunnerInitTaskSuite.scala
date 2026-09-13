package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerInitTaskSuite extends FunSuite:

  test("Runner.run with CliCommand.Init initializes crystal with tasks"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    val cmd = CliCommand.Init(
      name = "init-with-tasks",
      goalTitle = "Test Goal",
      intent = Some("Detailed Intent"),
      tasks = List("First acceptance task", "Second acceptance task"),
    )
    val result = runner.run(cmd)
    assert(result.isRight, s"Runner failed: $result")
    val crystal = store.load("init-with-tasks").toOption.get
    assertEquals(crystal.goal.acceptanceCriteria.size, 2)
    assertEquals(crystal.goal.acceptanceCriteria(0).id, "task-1")
    assertEquals(crystal.goal.acceptanceCriteria(0).description, "First acceptance task")
    assertEquals(crystal.goal.acceptanceCriteria(0).completed, false)
    assertEquals(crystal.goal.acceptanceCriteria(1).id, "task-2")
    assertEquals(crystal.goal.acceptanceCriteria(1).description, "Second acceptance task")
    assertEquals(crystal.goal.acceptanceCriteria(1).completed, false)
