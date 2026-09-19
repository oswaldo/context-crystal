package ccrystal.core.dag

import ccrystal.core.model.*
import munit.FunSuite

class CrystalMelterSuite extends FunSuite:

  val n1 = DAGNode(
    "n-1",
    Nil,
    "2026-09-06T10:00:00Z",
    "usr_1",
    NodeKind.HumanPrompt,
    "Init prompt",
    anchor = Some("start"),
  )
  val n2 = DAGNode(
    "n-2",
    List("n-1"),
    "2026-09-06T10:05:00Z",
    "agent_1",
    NodeKind.AgentReasoning,
    "Investigate issue",
    artifactIds = List("art-1"),
    inputArtifactIds = List("art-in-1"),
  )
  val n3 = DAGNode(
    "n-3",
    List("n-2"),
    "2026-09-06T10:10:00Z",
    "agent_1",
    NodeKind.ToolExecution,
    "Run diagnostics",
    artifactIds = List("art-2"),
    outputArtifactIds = List("art-out-1"),
  )
  val n4 = DAGNode(
    "n-4",
    List("n-3"),
    "2026-09-06T10:15:00Z",
    "agent_1",
    NodeKind.ToolExecution,
    "Apply patch",
    preconditionArtifactIds = List("art-pre-1"),
  )
  val n5 = DAGNode(
    "n-5",
    List("n-4"),
    "2026-09-06T10:20:00Z",
    "usr_1",
    NodeKind.Checkpoint,
    "Verification complete",
    anchor = Some("done"),
  )

  val crystal = ContextCrystal(
    schemaVersion = "1.0.0",
    id = "c-test-melt",
    name = Some("Melt Test"),
    createdAt = "2026-09-06T10:00:00Z",
    updatedAt = "2026-09-06T10:20:00Z",
    defaultAuthorId = Some("usr_1"),
    goal = Goal("Test goal", "Intent", GoalStatus.InProgress, Nil),
    entities = List(Entity("usr_1", EntityKind.Human, "User 1")),
    dag = DAG("n-1", List(n1, n2, n3, n4, n5)),
  )

  test("melt squashes linear chain with deterministic zero-LLM summary"):
    val res = CrystalMelter.melt(crystal, fromSelector = "n-2", toSelector = "n-4")
    assert(res.isRight, s"melt should succeed: $res")
    val updated = res.toOption.get

    // Original had 5 nodes; n-2, n-3, n-4 squashed into 1 => total 3 nodes
    assertEquals(updated.dag.nodes.size, 3)
    assertEquals(updated.dag.rootNodeId, "n-1")

    val meltedNode = updated.dag.nodes(1)
    assertEquals(meltedNode.parentIds, List("n-1"))
    assertEquals(meltedNode.kind, NodeKind.Checkpoint)
    assert(
      meltedNode.contentSummary.contains("Melted 3 nodes (n-2..n-4):"),
      "summary should contain count",
    )
    assert(meltedNode.contentSummary.contains("Investigate issue"), "summary should list n2")
    assert(meltedNode.contentSummary.contains("Run diagnostics"), "summary should list n3")
    assert(meltedNode.contentSummary.contains("Apply patch"), "summary should list n4")

    // n-5 parentIds should be rewired to point to melted node
    val lastNode = updated.dag.nodes(2)
    assertEquals(lastNode.id, "n-5")
    assertEquals(lastNode.parentIds, List(meltedNode.id))

  test("melt supports custom agent summary override and anchor"):
    val res = CrystalMelter.melt(
      crystal,
      fromSelector = "n-2",
      toSelector = "n-3",
      customSummary = Some("Investigated and diagnosed root cause in single pass."),
      anchor = Some("diag_squashed"),
    )
    assert(res.isRight)
    val updated    = res.toOption.get
    val meltedNode = updated.dag.nodes(1)

    assertEquals(meltedNode.contentSummary, "Investigated and diagnosed root cause in single pass.")
    assertEquals(meltedNode.anchor, Some("diag_squashed"))

  test("melt aggregates all directional artifact links without duplicates"):
    val res = CrystalMelter.melt(crystal, fromSelector = "n-2", toSelector = "n-4")
    assert(res.isRight)
    val updated    = res.toOption.get
    val meltedNode = updated.dag.nodes(1)

    assertEquals(meltedNode.artifactIds.sorted, List("art-1", "art-2"))
    assertEquals(meltedNode.inputArtifactIds, List("art-in-1"))
    assertEquals(meltedNode.outputArtifactIds, List("art-out-1"))
    assertEquals(meltedNode.preconditionArtifactIds, List("art-pre-1"))

  test("melt updates rootNodeId when melting from the root node"):
    val res = CrystalMelter.melt(crystal, fromSelector = "n-1", toSelector = "n-3")
    assert(res.isRight)
    val updated    = res.toOption.get
    val meltedNode = updated.dag.nodes.head

    assertEquals(updated.dag.rootNodeId, meltedNode.id)
    assertEquals(meltedNode.parentIds, Nil)
    assertEquals(updated.dag.nodes.size, 3)

  test("melt rejects invalid selectors and inverted ranges"):
    val errMissingFrom =
      CrystalMelter.melt(crystal, fromSelector = "unknown-node", toSelector = "n-3")
    assert(errMissingFrom.isLeft, "missing from selector should fail")

    val errMissingTo = CrystalMelter.melt(crystal, fromSelector = "n-2", toSelector = "missing-to")
    assert(errMissingTo.isLeft, "missing to selector should fail")

    val errInverted = CrystalMelter.melt(crystal, fromSelector = "n-4", toSelector = "n-2")
    assert(errInverted.isLeft, "inverted range should fail")
