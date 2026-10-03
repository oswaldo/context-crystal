package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.model.lattice.*

class RunnerLatticeSuite extends FunSuite:

  private def createDummyCrystal(id: String, goalTitle: String): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.1.0",
      id = id,
      name = Some(id),
      createdAt = "2026-10-03T18:00:00Z",
      updatedAt = "2026-10-03T18:00:00Z",
      defaultAuthorId = Some("usr_dev"),
      goal = Goal(
        title = goalTitle,
        intent = s"Intent for $goalTitle",
        status = GoalStatus.InProgress,
        acceptanceCriteria = List(
          AcceptanceCriterion("t-1", "Implement module", completed = false),
          AcceptanceCriterion("t-2", "Write tests", completed = true),
        ),
      ),
      entities = List(Entity("usr_dev", EntityKind.Human, "Developer")),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-10-03T18:00:00Z", "usr_dev", NodeKind.HumanPrompt, "Init")),
      ),
    )

  test("Runner handles Connect command and formats confirmation"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    store.save(createDummyCrystal("c-auth", "Auth Service"))
    store.save(createDummyCrystal("c-billing", "Billing Module"))

    val res = runner.run(
      CliCommand.Connect(
        "c-billing",
        "c-auth",
        BondRelation.DependsOn,
        Some("Needs token verification"),
      ),
    )
    assert(res.isRight)
    val msg = res.toOption.get
    assert(msg.contains("Connected 'c-billing' -> 'c-auth' [depends_on]: Needs token verification"))

  test("Runner Connect rejects cycle and reports error"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    store.save(createDummyCrystal("c-1", "Crystal 1"))
    store.save(createDummyCrystal("c-2", "Crystal 2"))

    assert(runner.run(CliCommand.Connect("c-1", "c-2", BondRelation.DependsOn)).isRight)

    val cycleRes = runner.run(CliCommand.Connect("c-2", "c-1", BondRelation.DependsOn))
    assert(cycleRes.isLeft)
    assert(cycleRes.left.toOption.get.contains("Cycle detected"))

  test("Runner handles Disconnect command"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    store.save(createDummyCrystal("c-1", "Crystal 1"))
    store.save(createDummyCrystal("c-2", "Crystal 2"))

    assert(runner.run(CliCommand.Connect("c-1", "c-2", BondRelation.DependsOn)).isRight)

    val discRes = runner.run(CliCommand.Disconnect("c-1", "c-2", Some(BondRelation.DependsOn)))
    assert(discRes.isRight)
    assert(discRes.toOption.get.contains("Disconnected 'c-1' -> 'c-2' [depends_on]."))

  test("Runner handles Connections command in text and JSON modes"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    store.save(createDummyCrystal("c-auth", "Auth Service"))
    store.save(createDummyCrystal("c-billing", "Billing Module"))

    runner.run(
      CliCommand.Connect(
        "c-billing",
        "c-auth",
        BondRelation.DependsOn,
        Some("Needs token verification"),
      ),
    )

    // Text format for c-auth (has inbound bond from c-billing)
    val textRes = runner.run(CliCommand.Connections("c-auth", jsonOutput = false))
    assert(textRes.isRight)
    val text = textRes.toOption.get
    assert(text.contains("=== LATTICE BONDS: c-auth ==="))
    assert(text.contains("Inbound Bonds (1):"))
    assert(text.contains("- <- c-billing (depends_on): Needs token verification"))

    // JSON format
    val jsonRes = runner.run(CliCommand.Connections("c-auth", jsonOutput = true))
    assert(jsonRes.isRight)
    val json = jsonRes.toOption.get
    assert(json.contains("\"crystalId\" : \"c-auth\""))
    assert(json.contains("\"sourceCrystalId\" : \"c-billing\""))

  test("Runner Cast (hydrate) incorporates connected crystals with bounded quick-peeks"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)
    store.save(createDummyCrystal("c-auth", "Auth Service"))
    store.save(createDummyCrystal("c-billing", "Billing Module"))

    runner.run(
      CliCommand.Connect(
        "c-billing",
        "c-auth",
        BondRelation.DependsOn,
        Some("Needs token verification"),
      ),
    )

    // Hydrate c-billing (outbound)
    val hydOut = runner.run(CliCommand.Cast("c-billing"))
    assert(hydOut.isRight)
    val textOut = hydOut.toOption.get
    assert(textOut.contains("## Connected Lattice Bonds:"))
    assert(
      textOut.contains(
        "- -> c-auth (depends_on): Needs token verification [Goal: Auth Service | Status: in_progress | Open Tasks: 1]",
      ),
    )

    // Hydrate c-auth (inbound)
    val hydIn = runner.run(CliCommand.Cast("c-auth"))
    assert(hydIn.isRight)
    val textIn = hydIn.toOption.get
    assert(textIn.contains("## Connected Lattice Bonds:"))
    assert(
      textIn.contains(
        "- <- c-billing (depends_on): Needs token verification [Goal: Billing Module | Status: in_progress | Open Tasks: 1]",
      ),
    )
