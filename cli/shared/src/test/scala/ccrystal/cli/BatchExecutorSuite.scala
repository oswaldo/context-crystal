package ccrystal.cli

import munit.FunSuite

class BatchExecutorSuite extends FunSuite:

  test("Splits semicolon-delimited commands with quoted strings"):
    val input =
      "init my-crystal --goal 'Build Dashboard'; task add my-crystal --desc 'Setup UI'; task done my-crystal --id task-1"
    val commands = BatchExecutor.splitCommands(input)
    assertEquals(commands.size, 3)
    assertEquals(commands(0), List("init", "my-crystal", "--goal", "Build Dashboard"))
    assertEquals(commands(1), List("task", "add", "my-crystal", "--desc", "Setup UI"))
    assertEquals(commands(2), List("task", "done", "my-crystal", "--id", "task-1"))

  test("Executes batch recipe concluding crystal with resolution summary"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    val recipe =
      "init batch-proj --goal 'Launch feature'; task done batch-proj -t task-1; conclude batch-proj -s 'Feature complete and tested'"
    val res = BatchExecutor.executeChain(recipe, runner)
    assert(res.isRight, s"Batch execution failed: $res")
    val outputs = res.toOption.get
    assertEquals(outputs.size, 3)
    assert(outputs(2).contains("concluded successfully and appended resolution node 'node-2'"))

    val crystal = store.load("batch-proj").toOption.get
    assertEquals(crystal.goal.status, ccrystal.core.model.GoalStatus.ConcludedSuccess)
    assertEquals(crystal.dag.nodes.size, 2)
    assertEquals(crystal.dag.nodes.last.contentSummary, "Feature complete and tested")

  test("Executes batch recipe abandoning crystal with reason"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    val recipe =
      "init abandon-proj --goal 'Old prototype'; abandon abandon-proj -r 'Pivoted to new architecture'"
    val res = BatchExecutor.executeChain(recipe, runner)
    assert(res.isRight, s"Batch execution failed: $res")

    val crystal = store.load("abandon-proj").toOption.get
    assertEquals(crystal.goal.status, ccrystal.core.model.GoalStatus.ConcludedAbandoned)
    assertEquals(crystal.dag.nodes.size, 2)
    assertEquals(crystal.dag.nodes.last.contentSummary, "Pivoted to new architecture")

  test("Preserves semicolons inside single and double quoted arguments"):
    val input =
      "init semi-proj --goal 'Step 1; Step 2'; node add semi-proj -k checkpoint -s \"Verified A; cleaned B\" --fidelity inferred"
    val commands = BatchExecutor.splitCommands(input)
    assertEquals(commands.size, 2)
    assertEquals(commands(0), List("init", "semi-proj", "--goal", "Step 1; Step 2"))
    assertEquals(
      commands(1),
      List(
        "node",
        "add",
        "semi-proj",
        "-k",
        "checkpoint",
        "-s",
        "Verified A; cleaned B",
        "--fidelity",
        "inferred",
      ),
    )

  test("Pre-validates all commands in batch before executing any state mutations"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    val recipe =
      "init atomic-proj --goal 'Should not persist on syntax error'; node add atomic-proj --invalid-flag"
    val res = BatchExecutor.executeChain(recipe, runner)
    assert(res.isLeft, "Expected batch with syntax error in command #2 to fail")
    assert(
      store.load("atomic-proj").isLeft,
      "Command #1 should not have mutated store when command #2 has a syntax error",
    )
