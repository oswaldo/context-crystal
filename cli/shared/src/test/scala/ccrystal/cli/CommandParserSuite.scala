package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class CommandParserSuite extends FunSuite:

  test("Parses 'init' command with required and optional flags"):
    val args = List("init", "my-crystal", "--goal", "Fix bug", "--intent", "Resolve NPE in parser")
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Init(name, goal, intent) =>
        assertEquals(name, "my-crystal")
        assertEquals(goal, "Fix bug")
        assertEquals(intent, Some("Resolve NPE in parser"))
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'task add' and 'task done' commands"):
    val addArgs = List("task", "add", "my-crystal", "--desc", "Write test")
    val parsedAdd = CommandParser.parse(addArgs)
    assert(parsedAdd.isRight)
    assertEquals(parsedAdd.toOption.get, CliCommand.TaskAdd("my-crystal", "Write test"))

    val doneArgs = List("task", "done", "my-crystal", "--id", "ac-1")
    val parsedDone = CommandParser.parse(doneArgs)
    assert(parsedDone.isRight)
    assertEquals(parsedDone.toOption.get, CliCommand.TaskDone("my-crystal", "ac-1"))

  test("Parses 'cast' (and 'hydrate') command"):
    val castArgs = List("cast", "my-crystal", "--depth", "5")
    val parsedCast = CommandParser.parse(castArgs)
    assert(parsedCast.isRight)
    assertEquals(parsedCast.toOption.get, CliCommand.Cast("my-crystal", depth = 5, summaryOnly = false))

    val hydrateArgs = List("hydrate", "my-crystal", "--summary-only")
    val parsedHydrate = CommandParser.parse(hydrateArgs)
    assert(parsedHydrate.isRight)
    assertEquals(parsedHydrate.toOption.get, CliCommand.Cast("my-crystal", depth = 10, summaryOnly = true))

  test("Parses 'node add' command"):
    val nodeArgs = List("node", "add", "my-crystal", "--kind", "tool_execution", "--summary", "Ran test suite")
    val parsedNode = CommandParser.parse(nodeArgs)
    assert(parsedNode.isRight)
    assertEquals(parsedNode.toOption.get, CliCommand.NodeAdd("my-crystal", NodeKind.ToolExecution, "Ran test suite", Nil))

  test("Parses 'lesson add' and 'transient lease' commands"):
    val lessonArgs = List("lesson", "add", "my-crystal", "--friction", "Native link failure", "--action", "Update libs")
    val parsedLesson = CommandParser.parse(lessonArgs)
    assert(parsedLesson.isRight)
    assertEquals(parsedLesson.toOption.get, CliCommand.LessonAdd("my-crystal", "Native link failure", None, Some("Update libs")))

    val leaseArgs = List("transient", "lease", "my-crystal", "--type", "git_worktree", "--desc", "Spike branch", "--policy", "revert_on_conclusion")
    val parsedLease = CommandParser.parse(leaseArgs)
    assert(parsedLease.isRight)
    assertEquals(parsedLease.toOption.get, CliCommand.TransientLeaseCmd("my-crystal", TransientResourceType.GitWorktree, None, "Spike branch", DisposalPolicy.RevertOnConclusion))
