package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class CommandParserSuite extends FunSuite:

  test("Parses 'init' command with required and optional flags"):
    val args = List("init", "my-crystal", "--goal", "Fix bug", "--intent", "Resolve NPE in parser")
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Init(name, goal, intent, author, authorKind, createdAt, tasks) =>
        assertEquals(name, "my-crystal")
        assertEquals(goal, "Fix bug")
        assertEquals(intent, Some("Resolve NPE in parser"))
        assertEquals(author, None)
        assertEquals(authorKind, None)
        assertEquals(createdAt, None)
        assertEquals(tasks, Nil)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'init' with explicit --created-at"):
    val args = List(
      "init",
      "my-crystal",
      "--goal",
      "Fix bug",
      "--created-at",
      "2026-09-06T12:00:00Z",
    )
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Init(name, goal, intent, author, authorKind, createdAt, tasks) =>
        assertEquals(name, "my-crystal")
        assertEquals(goal, "Fix bug")
        assertEquals(createdAt, Some("2026-09-06T12:00:00Z"))
        assertEquals(tasks, Nil)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'init' with multiple --task flags"):
    val args = List(
      "init",
      "my-crystal",
      "--goal",
      "Feature X",
      "-t",
      "Task 1",
      "--task",
      "Task 2",
    )
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Init(name, goal, _, _, _, _, tasks) =>
        assertEquals(name, "my-crystal")
        assertEquals(goal, "Feature X")
        assertEquals(tasks, List("Task 1", "Task 2"))
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'task add' and 'task done' commands"):
    val addArgs   = List("task", "add", "my-crystal", "--desc", "Write test")
    val parsedAdd = CommandParser.parse(addArgs)
    assert(parsedAdd.isRight)
    assertEquals(parsedAdd.toOption.get, CliCommand.TaskAdd("my-crystal", "Write test"))

    val doneArgs   = List("task", "done", "my-crystal", "--id", "ac-1")
    val parsedDone = CommandParser.parse(doneArgs)
    assert(parsedDone.isRight)
    assertEquals(parsedDone.toOption.get, CliCommand.TaskDone("my-crystal", "ac-1"))

  test("Parses 'cast' (and 'hydrate') command"):
    val castArgs   = List("cast", "my-crystal", "--depth", "5")
    val parsedCast = CommandParser.parse(castArgs)
    assert(parsedCast.isRight)
    assertEquals(
      parsedCast.toOption.get,
      CliCommand.Cast("my-crystal", depth = 5, summaryOnly = false),
    )

    val hydrateArgs   = List("hydrate", "my-crystal", "--summary-only")
    val parsedHydrate = CommandParser.parse(hydrateArgs)
    assert(parsedHydrate.isRight)
    assertEquals(
      parsedHydrate.toOption.get,
      CliCommand.Cast("my-crystal", depth = 10, summaryOnly = true),
    )

  test("Parses 'cast' with selective beam shaping flags (--from, --to, --tail)"):
    val castArgs = List(
      "cast",
      "my-crystal",
      "--from",
      "arch_init",
      "--to",
      "tests_pass",
      "--tail",
      "5",
    )
    val parsedCast = CommandParser.parse(castArgs)
    assert(parsedCast.isRight, "Expected successful parse of cast with beam shaping")
    assertEquals(
      parsedCast.toOption.get,
      CliCommand.Cast(
        "my-crystal",
        from = Some("arch_init"),
        to = Some("tests_pass"),
        tail = Some(5),
        summaryOnly = false,
      ),
    )

  test("Parses 'hydrate' with selective beam shaping flags"):
    val hydrateArgs = List(
      "hydrate",
      "my-crystal",
      "--from",
      "checkpoint-1",
      "--tail",
      "3",
      "--summary-only",
    )
    val parsedHydrate = CommandParser.parse(hydrateArgs)
    assert(parsedHydrate.isRight, "Expected successful parse of hydrate with beam shaping")
    assertEquals(
      parsedHydrate.toOption.get,
      CliCommand.Cast(
        "my-crystal",
        from = Some("checkpoint-1"),
        to = None,
        tail = Some(3),
        summaryOnly = true,
      ),
    )

  test("Parses 'node add' command"):
    val nodeArgs =
      List("node", "add", "my-crystal", "--kind", "tool_execution", "--summary", "Ran test suite")
    val parsedNode = CommandParser.parse(nodeArgs)
    assert(parsedNode.isRight)
    assertEquals(
      parsedNode.toOption.get,
      CliCommand.NodeAdd("my-crystal", NodeKind.ToolExecution, "Ran test suite", Nil),
    )

  test("Parses 'node add' with explicit --timestamp"):
    val nodeArgs = List(
      "node",
      "add",
      "my-crystal",
      "--kind",
      "tool_execution",
      "--summary",
      "Ran test suite",
      "--timestamp",
      "2026-09-06T14:30:00Z",
    )
    val parsedNode = CommandParser.parse(nodeArgs)
    assert(parsedNode.isRight)
    assertEquals(
      parsedNode.toOption.get,
      CliCommand.NodeAdd(
        "my-crystal",
        NodeKind.ToolExecution,
        "Ran test suite",
        Nil,
        timestamp = Some("2026-09-06T14:30:00Z"),
      ),
    )

  test("Parses 'lesson add' and 'transient lease' commands"):
    val lessonArgs = List(
      "lesson",
      "add",
      "my-crystal",
      "--friction",
      "Native link failure",
      "--action",
      "Update libs",
    )
    val parsedLesson = CommandParser.parse(lessonArgs)
    assert(parsedLesson.isRight)
    assertEquals(
      parsedLesson.toOption.get,
      CliCommand.LessonAdd("my-crystal", "Native link failure", None, Some("Update libs")),
    )

    val leaseArgs = List(
      "transient",
      "lease",
      "my-crystal",
      "--type",
      "git_worktree",
      "--desc",
      "Spike branch",
      "--policy",
      "revert_on_conclusion",
    )
    val parsedLease = CommandParser.parse(leaseArgs)
    assert(parsedLease.isRight)
    assertEquals(
      parsedLease.toOption.get,
      CliCommand.TransientLeaseCmd(
        "my-crystal",
        TransientResourceType.GitWorktree,
        None,
        "Spike branch",
        DisposalPolicy.RevertOnConclusion,
      ),
    )

  test("Parses 'transient lease' with explicit --acquired-at"):
    val leaseArgs = List(
      "transient",
      "lease",
      "my-crystal",
      "--type",
      "git_worktree",
      "--desc",
      "Spike branch",
      "--policy",
      "revert_on_conclusion",
      "--acquired-at",
      "2026-09-06T13:00:00Z",
    )
    val parsedLease = CommandParser.parse(leaseArgs)
    assert(parsedLease.isRight)
    assertEquals(
      parsedLease.toOption.get,
      CliCommand.TransientLeaseCmd(
        "my-crystal",
        TransientResourceType.GitWorktree,
        None,
        "Spike branch",
        DisposalPolicy.RevertOnConclusion,
        acquiredAt = Some("2026-09-06T13:00:00Z"),
      ),
    )

  test("Parses 'entity list' and 'entity register' commands"):
    val listArgs   = List("entity", "list")
    val parsedList = CommandParser.parse(listArgs)
    assert(parsedList.isRight)
    assertEquals(parsedList.toOption.get, CliCommand.EntityList)

    val regArgs   = List("entity", "register", "--name", "antigravity", "--kind", "agent")
    val parsedReg = CommandParser.parse(regArgs)
    assert(parsedReg.isRight)
    assertEquals(parsedReg.toOption.get, CliCommand.EntityRegister("antigravity", EntityKind.Agent))

  test("Parses 'init' and 'node add' with explicit --author"):
    val initArgs = List(
      "init",
      "authored-crystal",
      "--goal",
      "Fix bugs",
      "--author",
      "antigravity",
      "--author-kind",
      "agent",
    )
    val parsedInit = CommandParser.parse(initArgs)
    assert(parsedInit.isRight)
    assertEquals(
      parsedInit.toOption.get,
      CliCommand.Init(
        "authored-crystal",
        "Fix bugs",
        None,
        Some("antigravity"),
        Some(EntityKind.Agent),
      ),
    )

    val nodeArgs = List(
      "node",
      "add",
      "authored-crystal",
      "--kind",
      "agent_reasoning",
      "--summary",
      "Planned next steps",
      "--author",
      "agt_antigravity_1",
    )
    val parsedNode = CommandParser.parse(nodeArgs)
    assert(parsedNode.isRight)
    assertEquals(
      parsedNode.toOption.get,
      CliCommand.NodeAdd(
        "authored-crystal",
        NodeKind.AgentReasoning,
        "Planned next steps",
        Nil,
        Some("agt_antigravity_1"),
        CaptureFidelity.Inferred,
      ),
    )

  test("Parses 'node add' with explicit and default --fidelity"):
    val defaultFidelityArgs = List(
      "node",
      "add",
      "c-1",
      "--kind",
      "human_prompt",
      "--summary",
      "Prompt text",
    )
    val parsedDefault = CommandParser.parse(defaultFidelityArgs)
    assert(parsedDefault.isRight)
    assertEquals(
      parsedDefault.toOption.get,
      CliCommand.NodeAdd(
        "c-1",
        NodeKind.HumanPrompt,
        "Prompt text",
        Nil,
        None,
        CaptureFidelity.Inferred,
      ),
    )

    val interceptedArgs = List(
      "node",
      "add",
      "c-1",
      "--kind",
      "tool_execution",
      "--summary",
      "Captured verbatim stdout",
      "--fidelity",
      "intercepted",
    )
    val parsedIntercepted = CommandParser.parse(interceptedArgs)
    assert(parsedIntercepted.isRight)
    assertEquals(
      parsedIntercepted.toOption.get,
      CliCommand.NodeAdd(
        "c-1",
        NodeKind.ToolExecution,
        "Captured verbatim stdout",
        Nil,
        None,
        CaptureFidelity.Intercepted,
      ),
    )

    val invalidFidelityArgs = List(
      "node",
      "add",
      "c-1",
      "--kind",
      "tool_execution",
      "--summary",
      "Captured verbatim stdout",
      "--fidelity",
      "unknown_fidelity",
    )
    val parsedInvalid = CommandParser.parse(invalidFidelityArgs)
    assert(parsedInvalid.isLeft)

  test("Parses 'node add' with optional --anchor"):
    val anchorArgs = List(
      "node",
      "add",
      "c-1",
      "--kind",
      "checkpoint",
      "--summary",
      "Save state",
      "--anchor",
      "milestone_1",
    )
    val parsed = CommandParser.parse(anchorArgs)
    assert(parsed.isRight)
    assertEquals(
      parsed.toOption.get,
      CliCommand.NodeAdd(
        "c-1",
        NodeKind.Checkpoint,
        "Save state",
        Nil,
        None,
        CaptureFidelity.Inferred,
        Some("milestone_1"),
      ),
    )

  test("Parses 'slice' command with selectors and formats"):
    val sliceDefault  = List("slice", "my-crystal")
    val parsedDefault = CommandParser.parse(sliceDefault)
    assert(parsedDefault.isRight)
    assertEquals(
      parsedDefault.toOption.get,
      CliCommand.Slice("my-crystal", None, None, None, None, SliceFormat.Prompt, None, false),
    )

    val sliceAllFlags = List(
      "slice",
      "my-crystal",
      "--from",
      "auth_pivot",
      "--to",
      "done",
      "--head",
      "10",
      "--tail",
      "5",
      "--format",
      "json",
      "--fork-to",
      "new-session",
      "--prune",
    )
    val parsedAll = CommandParser.parse(sliceAllFlags)
    assert(parsedAll.isRight)
    assertEquals(
      parsedAll.toOption.get,
      CliCommand.Slice(
        "my-crystal",
        Some("auth_pivot"),
        Some("done"),
        Some(10),
        Some(5),
        SliceFormat.Json,
        Some("new-session"),
        true,
      ),
    )

    val invalidFormat = List("slice", "my-crystal", "--format", "yaml")
    assert(CommandParser.parse(invalidFormat).isLeft)

  test("Parses 'delete' command with optional --force flag"):
    val deleteNoForce = List("delete", "my-crystal")
    val parsed1       = CommandParser.parse(deleteNoForce)
    assert(parsed1.isRight)
    assertEquals(parsed1.toOption.get, CliCommand.Delete("my-crystal", force = false))

    val deleteWithForce = List("delete", "my-crystal", "--force")
    val parsed2         = CommandParser.parse(deleteWithForce)
    assert(parsed2.isRight)
    assertEquals(parsed2.toOption.get, CliCommand.Delete("my-crystal", force = true))

    val deleteShortForce = List("delete", "my-crystal", "-f")
    val parsed3          = CommandParser.parse(deleteShortForce)
    assert(parsed3.isRight)
    assertEquals(parsed3.toOption.get, CliCommand.Delete("my-crystal", force = true))

  test("Parses 'entity deregister' command with optional --force flag"):
    val deregNoForce = List("entity", "deregister", "usr_alice")
    val parsed1      = CommandParser.parse(deregNoForce)
    assert(parsed1.isRight)
    assertEquals(parsed1.toOption.get, CliCommand.EntityDeregister("usr_alice", force = false))

    val deregWithForce = List("entity", "deregister", "usr_alice", "--force")
    val parsed2        = CommandParser.parse(deregWithForce)
    assert(parsed2.isRight)
    assertEquals(parsed2.toOption.get, CliCommand.EntityDeregister("usr_alice", force = true))

  test("Parses 'mcp' command"):
    val mcpArgs = List("mcp")
    val parsed  = CommandParser.parse(mcpArgs)
    assertEquals(parsed.isRight, true)
    assertEquals(parsed.toOption.get, CliCommand.Mcp("stdio"))

  test("Parses '--for-ai' flag into CliCommand.ForAi"):
    val aiArgs = List("--for-ai")
    val parsed = CommandParser.parse(aiArgs)
    assertEquals(parsed.isRight, true)
    assertEquals(parsed.toOption.get, CliCommand.ForAi)

  test("CommandParser.parseWithHelp(List('--help')) includes '--for-ai' flag description"):
    val res = CommandParser.parseWithHelp(List("--help"))
    assert(res.isLeft)
    val helpText = res.left.toOption.get.toString
    assert(helpText.contains("--for-ai"), "Help must list --for-ai")

  test("Parses 'entity conventions' command into CliCommand.EntityConventions"):
    val convArgs = List("entity", "conventions")
    val parsed   = CommandParser.parse(convArgs)
    assertEquals(parsed.isRight, true)
    assertEquals(parsed.toOption.get, CliCommand.EntityConventions)

  test("init --help contains PII warning and handle guidance for --author"):
    val res = CommandParser.parseWithHelp(List("init", "--help"))
    assert(res.isLeft)
    val helpText = res.left.toOption.get.toString
    assert(
      helpText.contains("avoid full legal names") || helpText.contains("PII"),
      "init --help must warn against PII in --author",
    )

  test("Parses 'artifact list' with and without flags"):
    val defaultList = List("artifact", "list")
    val p1          = CommandParser.parse(defaultList)
    assertEquals(p1.isRight, true, "default artifact list parse")
    assertEquals(
      p1.toOption.get,
      CliCommand.ArtifactList(cave = false, crystalId = None, jsonOutput = false),
    )

    val caveList = List("artifact", "list", "--cave", "--json")
    val p2       = CommandParser.parse(caveList)
    assertEquals(p2.isRight, true, "cave artifact list parse")
    assertEquals(
      p2.toOption.get,
      CliCommand.ArtifactList(cave = true, crystalId = None, jsonOutput = true),
    )

    val crystalList = List("artifact", "list", "--crystal", "c-1")
    val p3          = CommandParser.parse(crystalList)
    assertEquals(p3.isRight, true, "crystal artifact list parse")
    assertEquals(
      p3.toOption.get,
      CliCommand.ArtifactList(cave = false, crystalId = Some("c-1"), jsonOutput = false),
    )

  test("Parses 'artifact register' with virtual and physical options"):
    val virtArgs = List(
      "artifact",
      "register",
      "--id",
      "art-v1",
      "--name",
      "Virtual Mock",
      "--substrate",
      "virtual",
      "--role",
      "instrument",
      "--uri",
      "file:///tmp/mock.json",
      "--cave",
    )
    val p1 = CommandParser.parse(virtArgs)
    assertEquals(p1.isRight, true, "virtual artifact register")
    assertEquals(
      p1.toOption.get,
      CliCommand.ArtifactRegister(
        id = "art-v1",
        name = Some("Virtual Mock"),
        substrate = ArtifactSubstrate.Virtual,
        role = ArtifactRole.Instrument,
        uri = Some("file:///tmp/mock.json"),
        cave = true,
      ),
    )

    val physArgs = List(
      "artifact",
      "register",
      "--id",
      "art-p1",
      "--name",
      "Oscilloscope Rig",
      "--substrate",
      "physical",
      "--role",
      "precondition",
      "--location-name",
      "Hardware Lab A",
      "--civic-address",
      "Musterstraße 1, Berlin",
      "--geo-uri",
      "geo:52.5200,13.4050",
      "--bench-coords",
      "Bench-3, Rack-2",
      "--crystal",
      "c-hardware",
    )
    val p2 = CommandParser.parse(physArgs)
    assertEquals(p2.isRight, true, "physical artifact register")
    assertEquals(
      p2.toOption.get,
      CliCommand.ArtifactRegister(
        id = "art-p1",
        name = Some("Oscilloscope Rig"),
        substrate = ArtifactSubstrate.Physical,
        role = ArtifactRole.Precondition,
        locationName = Some("Hardware Lab A"),
        civicAddress = Some("Musterstraße 1, Berlin"),
        geoUri = Some("geo:52.5200,13.4050"),
        benchCoordinates = Some("Bench-3, Rack-2"),
        crystalId = Some("c-hardware"),
      ),
    )

  test("Parses 'artifact inspect' with and without flags"):
    val inspectArgs = List("artifact", "inspect", "art-1")
    val p1          = CommandParser.parse(inspectArgs)
    assertEquals(p1.isRight, true, "inspect parse")
    assertEquals(
      p1.toOption.get,
      CliCommand.ArtifactInspect("art-1", crystalId = None, jsonOutput = false),
    )

    val inspectCrystal = List("artifact", "inspect", "art-1", "--crystal", "c-1", "--json")
    val p2             = CommandParser.parse(inspectCrystal)
    assertEquals(p2.isRight, true, "inspect crystal parse")
    assertEquals(
      p2.toOption.get,
      CliCommand.ArtifactInspect("art-1", crystalId = Some("c-1"), jsonOutput = true),
    )

  test("Parses 'node add' with artifact linkage flags"):
    val nodeArgs = List(
      "node",
      "add",
      "c-1",
      "--kind",
      "tool_execution",
      "--summary",
      "Execute test rig",
      "--input-artifact",
      "art-in-1",
      "--input-artifact",
      "art-in-2",
      "--output-artifact",
      "art-out-1",
      "--precondition-artifact",
      "art-pre-1",
    )
    val p = CommandParser.parse(nodeArgs)
    assertEquals(p.isRight, true, "node add with artifact flags")
    assertEquals(
      p.toOption.get,
      CliCommand.NodeAdd(
        crystalId = "c-1",
        kind = NodeKind.ToolExecution,
        summary = "Execute test rig",
        parentIds = Nil,
        inputArtifactIds = List("art-in-1", "art-in-2"),
        outputArtifactIds = List("art-out-1"),
        preconditionArtifactIds = List("art-pre-1"),
      ),
    )

  test("Parses 'conclude' command with and without summary"):
    val p1 = CommandParser.parse(List("conclude", "c-1"))
    assertEquals(p1.isRight, true, "conclude without summary")
    assertEquals(
      p1.toOption.get,
      CliCommand.GoalTransition("c-1", GoalStatus.ConcludedSuccess, None),
    )

    val p2 = CommandParser.parse(List("conclude", "c-1", "-s", "Completed all tasks successfully"))
    assertEquals(p2.isRight, true, "conclude with summary")
    assertEquals(
      p2.toOption.get,
      CliCommand.GoalTransition(
        "c-1",
        GoalStatus.ConcludedSuccess,
        Some("Completed all tasks successfully"),
      ),
    )

  test("Parses 'abandon' command with and without reason"):
    val p1 = CommandParser.parse(List("abandon", "c-1"))
    assertEquals(p1.isRight, true, "abandon without reason")
    assertEquals(
      p1.toOption.get,
      CliCommand.GoalTransition("c-1", GoalStatus.ConcludedAbandoned, None),
    )

    val p2 =
      CommandParser.parse(List("abandon", "c-1", "-r", "Superseded by architecture overhaul"))
    assertEquals(p2.isRight, true, "abandon with reason")
    assertEquals(
      p2.toOption.get,
      CliCommand.GoalTransition(
        "c-1",
        GoalStatus.ConcludedAbandoned,
        Some("Superseded by architecture overhaul"),
      ),
    )

  test("Parses 'goal status' command with different statuses and optional summary"):
    val p1 = CommandParser.parse(List("goal", "status", "c-1", "--status", "concluded_success"))
    assertEquals(p1.isRight, true, "goal status concluded_success")
    assertEquals(
      p1.toOption.get,
      CliCommand.GoalTransition("c-1", GoalStatus.ConcludedSuccess, None),
    )

    val p2 = CommandParser.parse(
      List("goal", "status", "c-1", "--status", "in_progress", "-s", "Reopened for minor fix"),
    )
    assertEquals(p2.isRight, true, "goal status in_progress")
    assertEquals(
      p2.toOption.get,
      CliCommand.GoalTransition("c-1", GoalStatus.InProgress, Some("Reopened for minor fix")),
    )

  test("Parses enums with flexible normalization (kebab-case, PascalCase, snake_case)"):
    val pKebab = CommandParser.parse(
      List("node", "add", "c-1", "--kind", "tool-execution", "--summary", "Ran tests"),
    )
    assertEquals(pKebab.isRight, true, "kebab-case node kind")
    assertEquals(
      pKebab.toOption.get,
      CliCommand.NodeAdd("c-1", NodeKind.ToolExecution, "Ran tests", Nil),
    )

    val pPascal = CommandParser.parse(
      List("node", "add", "c-1", "--kind", "ToolExecution", "--summary", "Ran tests"),
    )
    assertEquals(pPascal.isRight, true, "PascalCase node kind")
    assertEquals(
      pPascal.toOption.get,
      CliCommand.NodeAdd("c-1", NodeKind.ToolExecution, "Ran tests", Nil),
    )

    val pLease = CommandParser.parse(
      List(
        "transient",
        "lease",
        "c-1",
        "--type",
        "git-worktree",
        "--policy",
        "delete-after-test",
        "--desc",
        "Worktree",
      ),
    )
    assertEquals(pLease.isRight, true, "kebab-case transient lease enum arguments")
    val leaseCmd = pLease.toOption.get.asInstanceOf[CliCommand.TransientLeaseCmd]
    assertEquals(leaseCmd.resourceType, TransientResourceType.GitWorktree)
    assertEquals(leaseCmd.policy, DisposalPolicy.DeleteAfterTest)

  test("Enum parse failure outputs actionable list of valid options"):
    val res = CommandParser.parse(
      List("node", "add", "c-1", "--kind", "invalid-kind", "--summary", "Ran tests"),
    )
    assertEquals(res.isLeft, true)
    val help = res.swap.toOption.get
    assert(
      help.contains("valid: human_prompt, agent_reasoning, tool_execution"),
      s"Error message must list valid node kinds, got: $help",
    )

  test("Parses 'search' with default empty options"):
    val res = CommandParser.parse(List("search"))
    assertEquals(res.isRight, true)
    res.foreach {
      case CliCommand.Search(filter, jsonOutput) =>
        assertEquals(filter.query, None)
        assertEquals(filter.since, None)
        assertEquals(filter.until, None)
        assertEquals(filter.status, None)
        assertEquals(jsonOutput, false)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'search' with query, temporal, and status flags"):
    val res = CommandParser.parse(
      List(
        "search",
        "-q",
        "mcp",
        "--since",
        "2026-09-01",
        "--until",
        "2026-09-30",
        "--status",
        "in_progress",
        "--json",
      ),
    )
    assertEquals(res.isRight, true)
    res.foreach {
      case CliCommand.Search(filter, jsonOutput) =>
        assertEquals(filter.query, Some("mcp"))
        assertEquals(filter.since, Some("2026-09-01"))
        assertEquals(filter.until, Some("2026-09-30"))
        assertEquals(filter.status, Some(GoalStatus.InProgress))
        assertEquals(jsonOutput, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'search' with convenience flags and lease/task filters"):
    val res = CommandParser.parse(
      List(
        "search",
        "--today",
        "--has-active-leases",
        "--has-open-tasks",
        "--has-lessons",
        "--include-archived",
        "--touching-path",
        "/tmp/wt",
        "--author",
        "usr_1",
        "--aging",
        "active",
      ),
    )
    assertEquals(res.isRight, true)
    res.foreach {
      case CliCommand.Search(filter, _) =>
        assertEquals(filter.since, Some("today"))
        assertEquals(filter.hasActiveLeases, Some(true))
        assertEquals(filter.hasOpenTasks, Some(true))
        assertEquals(filter.hasLessons, Some(true))
        assertEquals(filter.includeArchived, true)
        assertEquals(filter.touchingPath, Some("/tmp/wt"))
        assertEquals(filter.author, Some("usr_1"))
        assertEquals(filter.aging, Some(ccrystal.core.model.search.AgingCategory.Active))
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'stats' command with global defaults"):
    val res = CommandParser.parse(List("stats"))
    assertEquals(res.isRight, true)
    res.foreach {
      case CliCommand.Stats(filter, detailed, jsonOutput) =>
        assertEquals(filter, None)
        assertEquals(detailed, false)
        assertEquals(jsonOutput, false)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'stats' with search filter flags and --detailed --json"):
    val res = CommandParser.parse(
      List(
        "stats",
        "--since",
        "7d",
        "--status",
        "in_progress",
        "--detailed",
        "--json",
      ),
    )
    assertEquals(res.isRight, true)
    res.foreach {
      case CliCommand.Stats(Some(filter), detailed, jsonOutput) =>
        assertEquals(filter.since, Some("7d"))
        assertEquals(filter.status, Some(GoalStatus.InProgress))
        assertEquals(detailed, true)
        assertEquals(jsonOutput, true)
      case other => fail(s"Unexpected command: $other")
    }
