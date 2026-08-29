package ccrystal.cli

import munit.FunSuite

class BatchExecutorSuite extends FunSuite:

  test("Splits semicolon-delimited commands with quoted strings"):
    val input = "init my-crystal --goal 'Build Dashboard'; task add my-crystal --desc 'Setup UI'; task done my-crystal --id task-1"
    val commands = BatchExecutor.splitCommands(input)
    assertEquals(commands.size, 3)
    assertEquals(commands(0), List("init", "my-crystal", "--goal", "Build Dashboard"))
    assertEquals(commands(1), List("task", "add", "my-crystal", "--desc", "Setup UI"))
    assertEquals(commands(2), List("task", "done", "my-crystal", "--id", "task-1"))
