package ccrystal.core.audit

import ccrystal.core.model.*
import munit.FunSuite

class CrystalTriageSuite extends FunSuite:

  private def makeCrystal(
      id: String,
      status: GoalStatus,
      updatedAt: String,
      tasks: List[AcceptanceCriterion] = Nil,
      leases: List[TransientLease] = Nil,
      lessons: List[LessonLearned] = Nil,
  ): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = "2026-08-01T10:00:00Z",
      updatedAt = updatedAt,
      defaultAuthorId = Some("usr_1"),
      goal = Goal(s"Goal $id", "Intent", status, tasks),
      entities = List(Entity("usr_1", EntityKind.Human, "User 1")),
      dag = DAG("root", List(DAGNode("root", Nil, "2026-08-01T10:00:00Z", "usr_1", NodeKind.HumanPrompt, "Init"))),
      transientLeases = leases,
      lessonsLearned = lessons,
    )

  val activeLease = TransientLease(
    id = "l-1",
    resourceType = TransientResourceType.GitWorktree,
    resourcePath = Some("/tmp/wt"),
    description = "Active worktree",
    disposalPolicy = DisposalPolicy.Manual,
    status = TransientLeaseStatus.Active,
    createdAt = "2026-08-01T10:00:00Z",
  )

  test("classifyAging identifies Solid crystals"):
    val solid = makeCrystal(
      id = "c-solid",
      status = GoalStatus.ConcludedSuccess,
      updatedAt = "2026-08-10T10:00:00Z",
      tasks = List(AcceptanceCriterion("t1", "Task 1", completed = true)),
    )
    val item = CrystalTriage.triage(solid, isArchived = false, nowIso = "2026-09-19T00:00:00Z")
    assertEquals(item.agingState, AgingState.Solid)
    assertEquals(item.category, "CandidateForCleanup")

  test("classifyAging identifies Active crystals (recent and with active leases)"):
    // Recent in-progress crystal (updated 2 days ago)
    val recent = makeCrystal(
      id = "c-recent",
      status = GoalStatus.InProgress,
      updatedAt = "2026-09-17T10:00:00Z",
    )
    val itemRecent = CrystalTriage.triage(recent, isArchived = false, nowIso = "2026-09-19T00:00:00Z")
    assertEquals(itemRecent.agingState, AgingState.Active)
    assertEquals(itemRecent.category, "Keep")

    // Old in-progress crystal with an active lease
    val withLease = makeCrystal(
      id = "c-lease",
      status = GoalStatus.InProgress,
      updatedAt = "2026-07-01T10:00:00Z",
      leases = List(activeLease),
    )
    val itemLease = CrystalTriage.triage(withLease, isArchived = false, nowIso = "2026-09-19T00:00:00Z")
    assertEquals(itemLease.agingState, AgingState.Active)

  test("classifyAging identifies Stale crystals (untouched > 30 days or incomplete with open lessons)"):
    // In-progress crystal untouched for >30 days without active leases
    val stale = makeCrystal(
      id = "c-stale",
      status = GoalStatus.InProgress,
      updatedAt = "2026-08-01T10:00:00Z", // 49 days prior to 2026-09-19
    )
    val itemStale = CrystalTriage.triage(stale, isArchived = false, nowIso = "2026-09-19T00:00:00Z")
    assertEquals(itemStale.agingState, AgingState.Stale)
    assertEquals(itemStale.category, "RequiresReview")

  test("CrystalTriage.filterByAging filters triage items"):
    val cSolid  = makeCrystal("c-solid", GoalStatus.ConcludedSuccess, "2026-08-10T10:00:00Z")
    val cActive = makeCrystal("c-active", GoalStatus.InProgress, "2026-09-18T10:00:00Z")
    val cStale  = makeCrystal("c-stale", GoalStatus.InProgress, "2026-07-01T10:00:00Z")

    val items = List(
      CrystalTriage.triage(cSolid, nowIso = "2026-09-19T00:00:00Z"),
      CrystalTriage.triage(cActive, nowIso = "2026-09-19T00:00:00Z"),
      CrystalTriage.triage(cStale, nowIso = "2026-09-19T00:00:00Z"),
    )

    val solidOnly = CrystalTriage.filterByAging(items, Some(AgingState.Solid))
    assertEquals(solidOnly.map(_.id), List("c-solid"))

    val staleOnly = CrystalTriage.filterByAging(items, Some(AgingState.Stale))
    assertEquals(staleOnly.map(_.id), List("c-stale"))

    val activeOnly = CrystalTriage.filterByAging(items, Some(AgingState.Active))
    assertEquals(activeOnly.map(_.id), List("c-active"))
