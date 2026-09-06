package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.store.CrystalStore
import munit.FunSuite
import scala.collection.mutable

class InMemoryCrystalStore extends CrystalStore:
  val crystals = mutable.Map[String, ContextCrystal]()
  var registry = EntityRegistry()

  def save(crystal: ContextCrystal): Either[String, Unit] =
    crystals.put(crystal.id, crystal)
    Right(())

  def load(id: String): Either[String, ContextCrystal] =
    crystals.get(id).toRight(s"Crystal not found: $id")

  def list(): Either[String, List[ContextCrystal]] =
    Right(crystals.values.toList)

  def exists(id: String): Boolean = crystals.contains(id)

  def getEntityRegistry(): Either[String, EntityRegistry] = Right(registry)

  def saveEntityRegistry(reg: EntityRegistry): Either[String, Unit] =
    registry = reg
    Right(())

  def registerEntity(entity: Entity): Either[String, Entity] =
    registry = registry.copy(entities = registry.entities + (entity.id -> entity))
    Right(entity)

  def resolveOrCreateEntity(
      name: String,
      kind: EntityKind,
      distinct: Boolean,
  ): Either[String, Entity] =
    val ent = Entity(s"ent-$name", kind, name)
    registerEntity(ent)

class RunnerSliceSuite extends FunSuite:

  def createTestRunner(): (Runner, InMemoryCrystalStore) =
    val store = new InMemoryCrystalStore()
    val n1 = DAGNode(
      "n-1",
      Nil,
      "2026-09-06T10:00:00Z",
      "usr_1",
      NodeKind.HumanPrompt,
      "Init",
      anchor = Some("start"),
    )
    val n2 = DAGNode(
      "n-2",
      List("n-1"),
      "2026-09-06T10:05:00Z",
      "agent_1",
      NodeKind.AgentReasoning,
      "Design",
    )
    val n3 = DAGNode(
      "n-3",
      List("n-2"),
      "2026-09-06T10:10:00Z",
      "usr_1",
      NodeKind.Checkpoint,
      "Milestone",
      anchor = Some("v1_milestone"),
    )
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "parent-c",
      name = Some("Parent Session"),
      createdAt = "2026-09-06T10:00:00Z",
      updatedAt = "2026-09-06T10:10:00Z",
      parentCrystalId = None,
      goal = Goal("Test Goal", "Intent", GoalStatus.InProgress, Nil),
      entities = List(Entity("usr_1", EntityKind.Human, "Operator")),
      dag = DAG("n-1", List(n1, n2, n3)),
    )
    store.save(crystal)
    (new Runner(store), store)

  test("Runner slice with Prompt format"):
    val (runner, _) = createTestRunner()
    val res = runner.run(
      CliCommand.Slice("parent-c", from = Some("v1_milestone"), format = SliceFormat.Prompt),
    )
    assert(res.isRight)
    val out = res.toOption.get
    assert(out.contains("=== CONTEXT CRYSTAL SLICE: parent-c ==="))
    assert(out.contains("Slice Entry: n-3 (Anchor: v1_milestone)"))
    assert(out.contains("Milestone"))

  test("Runner slice with Human format"):
    val (runner, _) = createTestRunner()
    val res = runner.run(CliCommand.Slice("parent-c", head = Some(2), format = SliceFormat.Human))
    assert(res.isRight)
    val out = res.toOption.get
    assert(out.contains("Crystal 'parent-c' Slice Summary:"))
    assert(out.contains("Node Count: 2"))
    assert(out.contains("Anchors: start"))

  test("Runner slice with Json format"):
    val (runner, _) = createTestRunner()
    val res         = runner.run(CliCommand.Slice("parent-c", format = SliceFormat.Json))
    assert(res.isRight)
    val out = res.toOption.get
    assert(out.contains("\"rootNodeId\" : \"n-1\""))

  test("Runner slice with --fork-to and --prune materializes child crystal and tags parent"):
    val (runner, store) = createTestRunner()
    val res = runner.run(
      CliCommand.Slice(
        crystalId = "parent-c",
        from = Some("v1_milestone"),
        forkTo = Some("child-c"),
        prune = true,
      ),
    )
    assert(res.isRight)
    val out = res.toOption.get
    assert(out.contains("forked to new crystal 'child-c'"))

    // Verify child crystal was stored with lineage
    assert(store.exists("child-c"))
    val child = store.load("child-c").toOption.get
    assertEquals(child.id, "child-c")
    assertEquals(child.parentCrystalId, Some("parent-c"))
    assert(child.origin.isDefined)
    assertEquals(child.origin.get.parentCrystalId, "parent-c")
    assertEquals(child.origin.get.parentNodeId, Some("n-3"))
    assertEquals(child.dag.rootNodeId, "n-3")
    assertEquals(child.dag.nodes.map(_.id), List("n-3"))

    // Verify parent crystal was tagged with cleavage metadata
    val parent = store.load("parent-c").toOption.get
    assertEquals(parent.metadata.get("fracture_cleavage_to"), Some("child-c"))
    assertEquals(parent.metadata.get("fracture_anchor"), Some("n-3"))
