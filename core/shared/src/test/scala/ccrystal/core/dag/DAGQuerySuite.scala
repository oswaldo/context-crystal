package ccrystal.core.dag

import munit.FunSuite
import ccrystal.core.model.*

class DAGQuerySuite extends FunSuite:

  val node1: DAGNode = DAGNode(
    id = "node-1",
    parentIds = Nil,
    timestamp = "2026-10-21T10:00:00Z",
    actorId = "usr_oswaldo",
    kind = NodeKind.HumanPrompt,
    contentSummary = "Initial prompt to design media pipeline",
    anchor = Some("genesis"),
    metadata = Map("env" -> "production"),
  )

  val node2: DAGNode = DAGNode(
    id = "node-2",
    parentIds = List("node-1"),
    timestamp = "2026-10-21T10:05:00Z",
    actorId = "agt_antigravity",
    kind = NodeKind.AgentReasoning,
    contentSummary = "Reasoning about CEP-0002 media schemas and video cuts",
    metadata = Map("framework" -> "scala-native"),
  )

  val node3: DAGNode = DAGNode(
    id = "node-3",
    parentIds = List("node-2"),
    timestamp = "2026-10-21T10:10:00Z",
    actorId = "agt_antigravity",
    kind = NodeKind.ToolExecution,
    contentSummary = "Ran ffmpeg inspection on master video",
    outputArtifactIds = List("artifact-video-master"),
  )

  val node4: DAGNode = DAGNode(
    id = "node-4",
    parentIds = List("node-3"),
    timestamp = "2026-10-21T10:15:00Z",
    actorId = "usr_oswaldo",
    kind = NodeKind.Checkpoint,
    contentSummary = "Milestone checkpoint: video inspection passed",
    anchor = Some("checkpoint-phase-1"),
  )

  val dag: DAG = DAG(
    rootNodeId = "node-1",
    nodes = List(node1, node2, node3, node4),
  )

  val crystalDAG: CrystalDAG = CrystalDAG.fromDAG(dag).toOption.get

  test("findNode finds node by exact id and prefix"):
    assertEquals(dag.findNode("node-2"), Some(node2))
    assertEquals(dag.findNode("node-3"), Some(node3))
    assertEquals(dag.findNode("node-"), Some(node1)) // prefix matches first
    assertEquals(dag.findNode("non-existent"), None)

    assertEquals(crystalDAG.findNode("node-4"), Some(node4))
    assertEquals(crystalDAG.findNode("missing"), None)

  test("queryNodes matches text query across summary, actor, metadata, and artifacts"):
    val (res1, total1) = dag.queryNodes(query = Some("CEP-0002"))
    assertEquals(total1, 1)
    assertEquals(res1, List(node2))

    val (res2, total2) = dag.queryNodes(query = Some("production"))
    assertEquals(total2, 1)
    assertEquals(res2, List(node1))

    val (res3, total3) = dag.queryNodes(query = Some("artifact-video-master"))
    assertEquals(total3, 1)
    assertEquals(res3, List(node3))

  test("queryNodes filters by kind and author"):
    val (resKind, totalKind) = dag.queryNodes(kind = Some(NodeKind.Checkpoint))
    assertEquals(totalKind, 1)
    assertEquals(resKind, List(node4))

    val (resAuthor, totalAuthor) = dag.queryNodes(author = Some("usr_oswaldo"))
    assertEquals(totalAuthor, 2)
    assertEquals(resAuthor, List(node4, node1)) // recent first by default

  test("queryNodes handles sorting (recent vs oldest)"):
    val (recent, _) = dag.queryNodes(sort = DAGNodeSort.Recent)
    assertEquals(recent, List(node4, node3, node2, node1))

    val (oldest, _) = dag.queryNodes(sort = DAGNodeSort.Oldest)
    assertEquals(oldest, List(node1, node2, node3, node4))

  test("queryNodes supports pagination (limit, offset, all)"):
    val (p1, t1) = dag.queryNodes(sort = DAGNodeSort.Oldest, limit = 2, offset = 0)
    assertEquals(t1, 4)
    assertEquals(p1, List(node1, node2))

    val (p2, t2) = dag.queryNodes(sort = DAGNodeSort.Oldest, limit = 2, offset = 2)
    assertEquals(t2, 4)
    assertEquals(p2, List(node3, node4))

    // Unconstrained / all (limit <= 0)
    val (allNodes, tAll) = dag.queryNodes(sort = DAGNodeSort.Oldest, limit = 0)
    assertEquals(tAll, 4)
    assertEquals(allNodes, List(node1, node2, node3, node4))
