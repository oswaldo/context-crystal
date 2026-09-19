package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class CliHousekeepingSuite extends FunSuite:

  test("Parses 'archive' command with crystal id"):
    val args   = List("archive", "my-crystal")
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight, "Expected archive command to parse successfully")
    assertEquals(parsed.toOption.get, CliCommand.Archive("my-crystal"))

  test("Parses 'unarchive' command with crystal id"):
    val args   = List("unarchive", "my-crystal")
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight, "Expected unarchive command to parse successfully")
    assertEquals(parsed.toOption.get, CliCommand.Unarchive("my-crystal"))

  test("Parses 'melt' command with required and optional flags"):
    val basicArgs   = List("melt", "c-1", "--from", "n1", "--to", "n3")
    val parsedBasic = CommandParser.parse(basicArgs)
    assert(parsedBasic.isRight, "Expected basic melt command to parse")
    assertEquals(
      parsedBasic.toOption.get,
      CliCommand.Melt(
        crystalId = "c-1",
        from = "n1",
        to = "n3",
        summary = None,
        anchor = None,
      ),
    )

    val fullArgs = List(
      "melt",
      "c-1",
      "--from",
      "n1",
      "--to",
      "n3",
      "--summary",
      "Custom squashed summary",
      "--anchor",
      "melted_v1",
    )
    val parsedFull = CommandParser.parse(fullArgs)
    assert(parsedFull.isRight, "Expected full melt command to parse")
    assertEquals(
      parsedFull.toOption.get,
      CliCommand.Melt(
        crystalId = "c-1",
        from = "n1",
        to = "n3",
        summary = Some("Custom squashed summary"),
        anchor = Some("melted_v1"),
      ),
    )

  test("Parses 'list' with --archived and --all flags"):
    val argsArchived   = List("list", "--archived")
    val parsedArchived = CommandParser.parse(argsArchived)
    assert(parsedArchived.isRight, "Expected list --archived to parse")
    assertEquals(
      parsedArchived.toOption.get,
      CliCommand.ListCrystals(status = None, jsonOutput = false, includeArchived = true),
    )

    val argsAll   = List("list", "--all")
    val parsedAll = CommandParser.parse(argsAll)
    assert(parsedAll.isRight, "Expected list --all to parse")
    assertEquals(
      parsedAll.toOption.get,
      CliCommand.ListCrystals(status = None, jsonOutput = false, includeArchived = true),
    )

  test("Parses 'triage' command with --solid, --stale, and --json flags"):
    val argsSolid   = List("triage", "--solid")
    val parsedSolid = CommandParser.parse(argsSolid)
    assert(parsedSolid.isRight, "Expected triage --solid to parse")
    assertEquals(
      parsedSolid.toOption.get,
      CliCommand.Triage(filterAging = Some(AgingState.Solid), jsonOutput = false),
    )

    val argsStale   = List("triage", "--stale")
    val parsedStale = CommandParser.parse(argsStale)
    assert(parsedStale.isRight, "Expected triage --stale to parse")
    assertEquals(
      parsedStale.toOption.get,
      CliCommand.Triage(filterAging = Some(AgingState.Stale), jsonOutput = false),
    )

    val argsJson   = List("triage", "--json")
    val parsedJson = CommandParser.parse(argsJson)
    assert(parsedJson.isRight, "Expected triage --json to parse")
    assertEquals(
      parsedJson.toOption.get,
      CliCommand.Triage(filterAging = None, jsonOutput = true),
    )

  test("Runner executes Archive and Unarchive commands"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)

    val entity = Entity("usr_bob", EntityKind.Human, "Bob")
    store.registerEntity(entity)

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-archive-test",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      defaultAuthorId = Some("usr_bob"),
      goal = Goal("Archive test goal", "Intent", GoalStatus.ConcludedSuccess, Nil),
      entities = List(entity),
      dag = DAG(
        "n1",
        List(
          DAGNode("n1", Nil, "2026-09-06T10:00:00Z", "usr_bob", NodeKind.HumanPrompt, "Init"),
        ),
      ),
    )
    store.save(crystal)

    assert(!store.isArchived("c-archive-test"))

    // Archive
    val archiveRes = runner.run(CliCommand.Archive("c-archive-test"))
    assert(archiveRes.isRight, "Archive command should succeed")
    assert(store.isArchived("c-archive-test"), "Crystal should be marked as archived")

    // Unarchive
    val unarchiveRes = runner.run(CliCommand.Unarchive("c-archive-test"))
    assert(unarchiveRes.isRight, "Unarchive command should succeed")
    assert(!store.isArchived("c-archive-test"), "Crystal should no longer be archived")

  test("Runner executes Melt command"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)

    val entity = Entity("usr_bob", EntityKind.Human, "Bob")
    store.registerEntity(entity)

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-melt-test",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      defaultAuthorId = Some("usr_bob"),
      goal = Goal("Melt test goal", "Intent", GoalStatus.InProgress, Nil),
      entities = List(entity),
      dag = DAG(
        "n1",
        List(
          DAGNode("n1", Nil, "2026-09-06T10:00:00Z", "usr_bob", NodeKind.HumanPrompt, "Init"),
          DAGNode(
            "n2",
            List("n1"),
            "2026-09-06T10:01:00Z",
            "usr_bob",
            NodeKind.ToolExecution,
            "Step 1",
          ),
          DAGNode(
            "n3",
            List("n2"),
            "2026-09-06T10:02:00Z",
            "usr_bob",
            NodeKind.Checkpoint,
            "Step 2",
          ),
        ),
      ),
    )
    store.save(crystal)

    val meltRes = runner.run(
      CliCommand.Melt(
        "c-melt-test",
        "n1",
        "n3",
        Some("Squashed step 1 and 2"),
        Some("squashed_root"),
      ),
    )
    assert(meltRes.isRight, "Melt command should succeed")
    assert(
      meltRes.toOption.get.contains("Melted sub-DAG in 'c-melt-test'"),
      "Output contains melted summary",
    )

    val reloaded = store.load("c-melt-test").toOption.get
    assertEquals(reloaded.dag.nodes.size, 1)

  test("Runner executes Triage command with filtering and text output"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)

    val entity = Entity("usr_bob", EntityKind.Human, "Bob")
    store.registerEntity(entity)

    val solidCrystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-solid",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      defaultAuthorId = Some("usr_bob"),
      goal = Goal("Solid goal", "Intent", GoalStatus.ConcludedSuccess, Nil),
      entities = List(entity),
      dag = DAG(
        "n1",
        List(DAGNode("n1", Nil, "2026-09-06T10:00:00Z", "usr_bob", NodeKind.HumanPrompt, "Init")),
      ),
    )
    val activeCrystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-active",
      createdAt = "2026-09-18T10:00:00Z",
      updatedAt = "2026-09-18T10:00:00Z",
      defaultAuthorId = Some("usr_bob"),
      goal = Goal("Active goal", "Intent", GoalStatus.InProgress, Nil),
      entities = List(entity),
      dag = DAG(
        "n1",
        List(DAGNode("n1", Nil, "2026-09-18T10:00:00Z", "usr_bob", NodeKind.HumanPrompt, "Init")),
      ),
    )
    store.save(solidCrystal)
    store.save(activeCrystal)

    val solidRes =
      runner.run(CliCommand.Triage(filterAging = Some(AgingState.Solid), jsonOutput = false))
    assert(solidRes.isRight, "Triage --solid should succeed")
    val solidOut = solidRes.toOption.get
    assert(solidOut.contains("c-solid"), "Output must contain c-solid")
    assert(!solidOut.contains("c-active"), "Output must not contain c-active")

    val jsonRes = runner.run(CliCommand.Triage(filterAging = None, jsonOutput = true))
    assert(jsonRes.isRight, "Triage --json should succeed")
    assert(jsonRes.toOption.get.contains("\"id\" : \"c-solid\""), "JSON should contain c-solid")
    assert(jsonRes.toOption.get.contains("\"id\" : \"c-active\""), "JSON should contain c-active")
