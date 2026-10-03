package ccrystal.core.audit

import ccrystal.core.model.*

case class CrystalTriageItem(
    id: String,
    status: GoalStatus,
    goal: String,
    category: String,
    agingState: AgingState,
    pendingTasks: Int,
    totalTasks: Int,
    activeLeases: Int,
    openLessons: Int,
    isArchived: Boolean,
    recommendation: String,
) derives CanEqual

object CrystalTriage:

  def parseApproxDays(iso: String): Option[Long] =
    try
      if iso.length >= 10 then
        val year  = iso.substring(0, 4).toLong
        val month = iso.substring(5, 7).toLong
        val day   = iso.substring(8, 10).toLong
        Some(year * 365L + (month - 1) * 30L + day)
      else None
    catch case _: Throwable => None

  def classifyAging(
      crystal: ContextCrystal,
      nowIso: String = "2026-09-19T00:00:00Z",
      staleThresholdDays: Int = 30,
  ): AgingState =
    val doneTasks    = crystal.goal.acceptanceCriteria.count(_.completed)
    val totalTasks   = crystal.goal.acceptanceCriteria.size
    val pendingTasks = totalTasks - doneTasks
    val activeLeases = crystal.transientLeases.count(_.status == TransientLeaseStatus.Active)
    val openLessons  = crystal.lessonsLearned.count(_.status == LessonStatus.Open)
    val isConcluded =
      crystal.goal.status == GoalStatus.ConcludedSuccess || crystal.goal.status == GoalStatus.ConcludedAbandoned

    if isConcluded && pendingTasks == 0 && activeLeases == 0 && openLessons == 0 then
      AgingState.Solid
    else if activeLeases > 0 then AgingState.Active
    else
      val elapsedDays = for
        nowDays     <- parseApproxDays(nowIso)
        updatedDays <- parseApproxDays(crystal.updatedAt)
      yield nowDays - updatedDays

      elapsedDays match
        case Some(days) if days > staleThresholdDays =>
          AgingState.Stale
        case _ if crystal.goal.status == GoalStatus.InProgress =>
          AgingState.Active
        case _ =>
          AgingState.Stale

  def triage(
      crystal: ContextCrystal,
      isArchived: Boolean = false,
      nowIso: String = "2026-09-19T00:00:00Z",
      staleThresholdDays: Int = 30,
  ): CrystalTriageItem =
    val doneTasks    = crystal.goal.acceptanceCriteria.count(_.completed)
    val totalTasks   = crystal.goal.acceptanceCriteria.size
    val pendingTasks = totalTasks - doneTasks
    val activeLeases = crystal.transientLeases.count(_.status == TransientLeaseStatus.Active)
    val openLessons  = crystal.lessonsLearned.count(_.status == LessonStatus.Open)
    val isConcluded =
      crystal.goal.status == GoalStatus.ConcludedSuccess || crystal.goal.status == GoalStatus.ConcludedAbandoned

    val aging = classifyAging(crystal, nowIso, staleThresholdDays)

    val (category, recommendation) =
      if isArchived then
        val elapsedDays = for
          nowDays     <- parseApproxDays(nowIso)
          updatedDays <- parseApproxDays(crystal.updatedAt)
        yield nowDays - updatedDays
        elapsedDays match
          case Some(days) if days >= 90 =>
            (
              "ArchivedPruneCandidate",
              s"Archived ${days}d ago (>=90d retention); recommend pruning via 'ccrystal prune --older-than 90d'",
            )
          case _ =>
            ("Archived", "Stored in cold storage; unarchive via crystal_unarchive if resuming")
      else if isConcluded && pendingTasks == 0 && activeLeases == 0 && openLessons == 0 then
        (
          "CandidateForCleanup",
          "Safe to archive via ccrystal archive or delete via ccrystal delete",
        )
      else if crystal.goal.status == GoalStatus.InProgress && aging == AgingState.Active then
        ("Keep", "Active in-progress track")
      else ("RequiresReview", "Unclosed leases, open lessons, incomplete tasks, or stale context")

    CrystalTriageItem(
      id = crystal.id,
      status = crystal.goal.status,
      goal = crystal.goal.title,
      category = category,
      agingState = aging,
      pendingTasks = pendingTasks,
      totalTasks = totalTasks,
      activeLeases = activeLeases,
      openLessons = openLessons,
      isArchived = isArchived,
      recommendation = recommendation,
    )

  def filterByAging(
      items: List[CrystalTriageItem],
      filter: Option[AgingState],
  ): List[CrystalTriageItem] =
    filter match
      case Some(state) => items.filter(_.agingState == state)
      case None        => items
