package ccrystal.core

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.dag.CrystalDAG
import ccrystal.core.audit.CrystalAuditor

class DAGAndAuditSuite extends FunSuite:

  val nodeRoot = DAGNode(
    id = "n-root",
    parentIds = Nil,
    timestamp = "2026-08-28T12:00:00Z",
    actorId = "human-1",
    kind = NodeKind.HumanPrompt,
    contentSummary = "Root Prompt"
  )

  val node1 = DAGNode(
    id = "n-1",
    parentIds = List("n-root"),
    timestamp = "2026-08-28T12:05:00Z",
    actorId = "agent-1",
    kind = NodeKind.AgentReasoning,
    contentSummary = "Step 1"
  )

  val node2 = DAGNode(
    id = "n-2",
    parentIds = List("n-1"),
    timestamp = "2026-08-28T12:10:00Z",
    actorId = "agent-1",
    kind = NodeKind.ToolExecution,
    contentSummary = "Step 2"
  )

  test("CrystalDAG adds nodes and validates cycle-free state"):
    val dag2 = for
      dag0 <- CrystalDAG.empty("n-root", nodeRoot)
      dag1 <- dag0.addNode(node1)
      dag2 <- dag1.addNode(node2)
    yield dag2

    assert(dag2.isRight)
    val dag = dag2.toOption.get
    assertEquals(dag.nodes.size, 3)
    assertEquals(dag.leafNodes.map(_.id), List("n-2"))

  test("CrystalDAG detects invalid cycles and duplicates"):
    val dag0 = CrystalDAG.empty("n-root", nodeRoot)
      .flatMap(_.addNode(node1))
      .flatMap(_.addNode(node2))
      .toOption.get

    val duplicateNode = DAGNode(
      id = "n-root",
      parentIds = List("n-2"),
      timestamp = "2026-08-28T12:20:00Z",
      actorId = "agent-1",
      kind = NodeKind.AgentReasoning,
      contentSummary = "Duplicate root"
    )
    assert(dag0.addNode(duplicateNode).isLeft)

    val nonExistentParentNode = DAGNode(
      id = "n-ghost",
      parentIds = List("n-missing"),
      timestamp = "2026-08-28T12:25:00Z",
      actorId = "agent-1",
      kind = NodeKind.AgentReasoning,
      contentSummary = "Missing parent"
    )
    assert(dag0.addNode(nonExistentParentNode).isLeft)

  test("CrystalAuditor detects uncleaned transient leases"):
    val activeLease = TransientLease(
      id = "lease-active",
      resourceType = TransientResourceType.GitWorktree,
      resourcePath = Some(".git/worktrees/temp"),
      description = "Dangling worktree",
      disposalPolicy = DisposalPolicy.RevertOnConclusion,
      status = TransientLeaseStatus.Active,
      createdAt = "2026-08-28T12:00:00Z"
    )
    val cleanedLease = TransientLease(
      id = "lease-cleaned",
      resourceType = TransientResourceType.DebugConfig,
      resourcePath = None,
      description = "Cleaned config",
      disposalPolicy = DisposalPolicy.DeleteAfterTest,
      status = TransientLeaseStatus.Cleaned,
      createdAt = "2026-08-28T12:00:00Z"
    )

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "cc-test-audit",
      createdAt = "2026-08-28T12:00:00Z",
      updatedAt = "2026-08-28T12:00:00Z",
      goal = Goal("Test", "Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG("n-root", List(nodeRoot)),
      transientLeases = List(activeLease, cleanedLease),
      lessonsLearned = Nil
    )

    val uncleaned = CrystalAuditor.findUncleanedTransientLeases(crystal)
    assertEquals(uncleaned.map(_.id), List("lease-active"))
    assert(CrystalAuditor.isReadyForConclusion(crystal).isLeft)

  test("CrystalAuditor detects unaddressed lessons learned"):
    val openLesson = LessonLearned(
      id = "lesson-open",
      observedFriction = "Friction A",
      status = LessonStatus.Open
    )
    val actionedLesson = LessonLearned(
      id = "lesson-done",
      observedFriction = "Friction B",
      status = LessonStatus.Actioned,
      actionAuditTrail = List(ActionAuditEntry("2026-08-28T13:00:00Z", "Fixed", "user-1"))
    )

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "cc-test-audit",
      createdAt = "2026-08-28T12:00:00Z",
      updatedAt = "2026-08-28T12:00:00Z",
      goal = Goal("Test", "Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG("n-root", List(nodeRoot)),
      transientLeases = Nil,
      lessonsLearned = List(openLesson, actionedLesson)
    )

    val unaddressed = CrystalAuditor.findUnaddressedLessons(crystal)
    assertEquals(unaddressed.map(_.id), List("lesson-open"))
    assert(CrystalAuditor.isReadyForConclusion(crystal).isLeft)

  test("CrystalAuditor passes conclusion readiness when all leases are cleaned and lessons actioned"):
    val readyCrystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "cc-ready",
      createdAt = "2026-08-28T12:00:00Z",
      updatedAt = "2026-08-28T12:00:00Z",
      goal = Goal("Test", "Intent", GoalStatus.ConcludedSuccess, Nil),
      entities = Nil,
      dag = DAG("n-root", List(nodeRoot)),
      transientLeases = List(
        TransientLease("l-1", TransientResourceType.GitWorktree, None, "Worktree", DisposalPolicy.RevertOnConclusion, TransientLeaseStatus.Cleaned, "2026-08-28T12:00:00Z")
      ),
      lessonsLearned = List(
        LessonLearned("les-1", "Friction", None, None, LessonStatus.Actioned, List(ActionAuditEntry("2026-08-28T12:00:00Z", "Actioned", "human")))
      )
    )
    assertEquals(CrystalAuditor.isReadyForConclusion(readyCrystal), Right(()))
