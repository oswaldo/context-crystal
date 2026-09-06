package ccrystal.core

import ccrystal.core.dag.{CrystalDAG, CrystalSlicer, SliceParams}
import ccrystal.core.model.*
import munit.FunSuite

class CrystalSlicerSuite extends FunSuite:

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
    "Plan architecture",
  )
  val n3 = DAGNode(
    "n-3",
    List("n-2"),
    "2026-09-06T10:10:00Z",
    "usr_1",
    NodeKind.HumanPrompt,
    "Pivot to OAuth",
    anchor = Some("oauth_pivot"),
  )
  val n4 = DAGNode(
    "n-4",
    List("n-3"),
    "2026-09-06T10:15:00Z",
    "agent_1",
    NodeKind.ToolExecution,
    "Install decline",
    artifactIds = List("art-1"),
  )
  val n5 = DAGNode(
    "n-5",
    List("n-4"),
    "2026-09-06T10:20:00Z",
    "usr_1",
    NodeKind.Checkpoint,
    "Final check",
    anchor = Some("done"),
  )

  val dag = DAG("n-1", List(n1, n2, n3, n4, n5))

  val crystal = ContextCrystal(
    schemaVersion = "1.0.0",
    id = "cc-parent-001",
    name = Some("Parent Session"),
    createdAt = "2026-09-06T10:00:00Z",
    updatedAt = "2026-09-06T10:20:00Z",
    parentCrystalId = None,
    goal = Goal("Original Goal", "Test intent", GoalStatus.InProgress, Nil),
    entities = List(
      Entity("usr_1", EntityKind.Human, "Oswaldo"),
      Entity("agent_1", EntityKind.Agent, "Antigravity"),
    ),
    activeMask = None,
    dag = dag,
    transientLeases = List(
      TransientLease(
        "lease-1",
        TransientResourceType.GitWorktree,
        Some(".git/wt"),
        "temp",
        DisposalPolicy.DeleteAfterTest,
        TransientLeaseStatus.Active,
        "2026-09-06T10:00:00Z",
      ),
    ),
    lessonsLearned = Nil,
    artifacts =
      List(Artifact("art-1", "file:///tmp/art.json", "application/json", Some("Art description"))),
  )

  test("findNode resolves node by id or by semantic anchor"):
    assertEquals(CrystalSlicer.findNode(dag, "n-2").map(_.id), Some("n-2"))
    assertEquals(CrystalSlicer.findNode(dag, "oauth_pivot").map(_.id), Some("n-3"))
    assertEquals(CrystalSlicer.findNode(dag, "start").map(_.id), Some("n-1"))
    assertEquals(CrystalSlicer.findNode(dag, "unknown"), None)

  test("slice from anchor to end"):
    val res = CrystalSlicer.slice(crystal, SliceParams(from = Some("oauth_pivot")))
    assert(res.isRight)
    val slice = res.toOption.get
    assertEquals(slice.slicedNodes.map(_.id), List("n-3", "n-4", "n-5"))
    assertEquals(slice.entryNode.id, "n-3")
    // n-3 parent "n-2" was sliced out, so in normalizedDag it must be Nil
    assertEquals(slice.normalizedDag.rootNodeId, "n-3")
    val n3Norm = slice.normalizedDag.nodes.find(_.id == "n-3").get
    assertEquals(n3Norm.parentIds, Nil)
    // internal edges preserved
    val n4Norm = slice.normalizedDag.nodes.find(_.id == "n-4").get
    assertEquals(n4Norm.parentIds, List("n-3"))
    // Valid DAG
    assert(CrystalDAG.fromDAG(slice.normalizedDag).isRight)

  test("slice range from anchor to anchor"):
    val res =
      CrystalSlicer.slice(crystal, SliceParams(from = Some("start"), to = Some("oauth_pivot")))
    assert(res.isRight)
    val slice = res.toOption.get
    assertEquals(slice.slicedNodes.map(_.id), List("n-1", "n-2", "n-3"))

  test("slice tail N"):
    val res = CrystalSlicer.slice(crystal, SliceParams(tail = Some(2)))
    assert(res.isRight)
    val slice = res.toOption.get
    assertEquals(slice.slicedNodes.map(_.id), List("n-4", "n-5"))
    assertEquals(slice.normalizedDag.rootNodeId, "n-4")
    assertEquals(slice.normalizedDag.nodes.head.parentIds, Nil)

  test("slice head N"):
    val res = CrystalSlicer.slice(crystal, SliceParams(head = Some(2)))
    assert(res.isRight)
    val slice = res.toOption.get
    assertEquals(slice.slicedNodes.map(_.id), List("n-1", "n-2"))

  test("slice with invalid selector returns descriptive error"):
    val res = CrystalSlicer.slice(crystal, SliceParams(from = Some("nonexistent_anchor")))
    assert(res.isLeft)
    assert(res.left.toOption.get.contains("nonexistent_anchor"))

  test("fork creates clean child crystal with lineage back-pointers"):
    val res = CrystalSlicer.slice(crystal, SliceParams(from = Some("oauth_pivot")))
    assert(res.isRight)
    val slice = res.toOption.get

    val child = slice.fork(newId = "cc-child-002", newName = Some("OAuth Clean Session"))
    assertEquals(child.id, "cc-child-002")
    assertEquals(child.name, Some("OAuth Clean Session"))
    assertEquals(child.parentCrystalId, Some("cc-parent-001"))
    assert(child.origin.isDefined)
    val origin = child.origin.get
    assertEquals(origin.parentCrystalId, "cc-parent-001")
    assertEquals(origin.parentNodeId, Some("n-3"))
    assertEquals(origin.reason, Some("cleavage_slice"))
    // Transient leases from parent should NOT leak into child
    assertEquals(child.transientLeases, Nil)
    // Retained only referenced artifacts (art-1 referenced by n-4)
    assertEquals(child.artifacts.map(_.id), List("art-1"))
    // Valid DAG in child
    assert(CrystalDAG.fromDAG(child.dag).isRight)
