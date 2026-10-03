package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerPruneSuite extends FunSuite:

  private def createTestFixture()
      : (Runner, InMemoryCrystalStore, collection.mutable.ListBuffer[String]) =
    val store         = new InMemoryCrystalStore()
    val promptsAsked  = collection.mutable.ListBuffer[String]()
    var shouldConfirm = true

    val runner = new Runner(
      store,
      confirmPrompt = { prompt =>
        promptsAsked += prompt
        shouldConfirm
      },
    )

    val entity = Entity("usr_ancient", EntityKind.Human, "Ancient Developer")
    store.registerEntity(entity)

    // Old crystal (updated 60 days ago relative to 2026-10-03)
    val oldArchived = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-arch-old",
      createdAt = "2026-08-01T10:00:00Z",
      updatedAt = "2026-08-01T10:00:00Z",
      defaultAuthorId = Some("usr_ancient"),
      goal = Goal("Old Goal", "Intent", GoalStatus.ConcludedSuccess, Nil),
      entities = List(entity),
      dag = DAG(
        "root",
        List(
          DAGNode("root", Nil, "2026-08-01T10:00:00Z", "usr_ancient", NodeKind.HumanPrompt, "Init"),
        ),
      ),
    )
    store.save(oldArchived)
    store.archive("c-arch-old")

    // Recent active crystal
    val activeRecent = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-active",
      createdAt = "2026-10-02T10:00:00Z",
      updatedAt = "2026-10-02T10:00:00Z",
      defaultAuthorId = Some("usr_ancient"),
      goal = Goal("Active Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = List(entity),
      dag = DAG(
        "root",
        List(
          DAGNode("root", Nil, "2026-10-02T10:00:00Z", "usr_ancient", NodeKind.HumanPrompt, "Init"),
        ),
      ),
    )
    store.save(activeRecent)

    (runner, store, promptsAsked)

  test("Runner Prune with interactive confirmation approved executes pruning"):
    val (runner, store, prompts) = createTestFixture()
    assert(store.isArchived("c-arch-old"))

    val res = runner.run(CliCommand.Prune(olderThan = Some("30d"), force = false))
    assert(res.isRight)
    val msg = res.toOption.get
    assert(msg.contains("Successfully pruned 1 archived crystal(s)"))
    assert(prompts.nonEmpty, "Confirmation prompt must have been presented")
    assert(!store.isArchived("c-arch-old"))
    assert(store.exists("c-active"))

  test("Runner Prune with interactive confirmation declined aborts pruning"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store, confirmPrompt = _ => false)
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-arch-keep",
      createdAt = "2026-08-01T10:00:00Z",
      updatedAt = "2026-08-01T10:00:00Z",
      goal = Goal("Goal", "Intent", GoalStatus.ConcludedSuccess, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-08-01T10:00:00Z", "u1", NodeKind.HumanPrompt, "Init")),
      ),
    )
    store.save(crystal)
    store.archive("c-arch-keep")

    val res = runner.run(CliCommand.Prune(olderThan = Some("30d"), force = false))
    assert(res.isRight)
    assertEquals(res.toOption.get, "Prune operation cancelled.")
    assert(store.isArchived("c-arch-keep"))

  test("Runner Prune with --dry-run outputs preview without deleting files"):
    val (runner, store, prompts) = createTestFixture()
    assert(store.isArchived("c-arch-old"))

    val res = runner.run(CliCommand.Prune(olderThan = Some("30d"), dryRun = true))
    assert(res.isRight)
    val msg = res.toOption.get
    assert(msg.contains("[DRY RUN]"))
    assert(msg.contains("`c-arch-old`"))
    assertEquals(prompts.isEmpty, true, "No confirmation prompt on dry-run")
    assert(store.isArchived("c-arch-old"))

  test("Runner Prune with --force executes without prompting"):
    val (runner, store, prompts) = createTestFixture()
    assert(store.isArchived("c-arch-old"))

    val res = runner.run(CliCommand.Prune(olderThan = Some("30d"), force = true))
    assert(res.isRight)
    assert(res.toOption.get.contains("Successfully pruned 1 archived crystal(s)"))
    assertEquals(prompts.isEmpty, true, "No prompts on --force")
    assert(!store.isArchived("c-arch-old"))

  test("Runner Delete on archived crystal indicates cold storage"):
    val (runner, store, _) = createTestFixture()
    assert(store.isArchived("c-arch-old"))

    val res = runner.run(CliCommand.Delete("c-arch-old", force = true))
    assert(res.isRight)
    assert(res.toOption.get.contains("from cold storage"))
    assert(!store.isArchived("c-arch-old"))
