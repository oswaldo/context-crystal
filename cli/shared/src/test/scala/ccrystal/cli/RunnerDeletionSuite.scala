package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerDeletionSuite extends FunSuite:

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

    val entity = Entity("usr_alice", EntityKind.Human, "Alice")
    store.registerEntity(entity)

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-target",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      defaultAuthorId = Some("usr_alice"),
      goal = Goal("Target Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = List(entity),
      dag = DAG(
        "root",
        List(
          DAGNode("root", Nil, "2026-09-06T10:00:00Z", "usr_alice", NodeKind.HumanPrompt, "Init"),
        ),
      ),
    )
    store.save(crystal)

    (runner, store, promptsAsked)

  test("Runner Delete with interactive confirmation approved executes deletion"):
    val (runner, store, prompts) = createTestFixture()
    assert(store.exists("c-target"))

    val res = runner.run(CliCommand.Delete("c-target", force = false))
    assert(res.isRight)
    assert(res.toOption.get.contains("Permanently deleted crystal 'c-target'"))
    assert(prompts.nonEmpty, "Confirmation prompt must have been presented")
    assert(!store.exists("c-target"))

  test("Runner Delete with interactive confirmation declined aborts deletion"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store, confirmPrompt = _ => false)

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-abort",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      goal = Goal("Abort Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-06T10:00:00Z", "u-1", NodeKind.HumanPrompt, "Init")),
      ),
    )
    store.save(crystal)

    val res = runner.run(CliCommand.Delete("c-abort", force = false))
    assert(res.isRight)
    assert(res.toOption.get.contains("cancelled"))
    assert(store.exists("c-abort"), "Crystal must remain intact when cancelled")

  test("Runner Delete with force=true skips confirmation prompt"):
    val store        = new InMemoryCrystalStore()
    var promptCalled = false
    val runner       = new Runner(store, confirmPrompt = _ => { promptCalled = true; true })

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-force",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      goal = Goal("Force Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-06T10:00:00Z", "u-1", NodeKind.HumanPrompt, "Init")),
      ),
    )
    store.save(crystal)

    val res = runner.run(CliCommand.Delete("c-force", force = true))
    assert(res.isRight)
    assert(!promptCalled, "Confirmation prompt must not be invoked when force=true")
    assert(!store.exists("c-force"))

  test("Runner EntityDeregister with confirmation approved executes deregistration"):
    val store  = new InMemoryCrystalStore()
    val entity = Entity("usr_bob", EntityKind.Human, "Bob")
    store.registerEntity(entity)
    val runner = new Runner(store, confirmPrompt = _ => true)

    val res = runner.run(CliCommand.EntityDeregister("usr_bob", force = false))
    assert(res.isRight)
    assert(res.toOption.get.contains("Deregistered entity 'usr_bob'"))
    assert(!store.getEntityRegistry().toOption.get.entities.contains("usr_bob"))

  test("BatchExecutor rejects unforced destructive commands"):
    val store    = new InMemoryCrystalStore()
    val runner   = new Runner(store)
    val batchRes = BatchExecutor.executeChain("delete c-test", runner)
    assert(batchRes.isLeft)
    assert(batchRes.left.toOption.get.contains("requires --force (-f) flag"))

  test("BatchExecutor allows forced destructive commands"):
    val store = new InMemoryCrystalStore()
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "c-batch",
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:00:00Z",
      goal = Goal("Batch Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-09-06T10:00:00Z", "u-1", NodeKind.HumanPrompt, "Init")),
      ),
    )
    store.save(crystal)
    val runner   = new Runner(store)
    val batchRes = BatchExecutor.executeChain("delete c-batch -f", runner)
    assert(batchRes.isRight)
    assert(!store.exists("c-batch"))
