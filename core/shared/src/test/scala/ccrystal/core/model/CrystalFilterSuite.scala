package ccrystal.core.model

import ccrystal.core.model.search.{
  AgingCategory,
  CivilDate,
  CrystalFilter,
  SearchEngine,
  SearchMatch,
  TemporalParser,
}
import munit.FunSuite

class CrystalFilterSuite extends FunSuite:

  // 2026-10-01T12:00:00Z
  private val nowMillis = CivilDate.epochMillis(2026, 10, 1, 12, 0, 0)

  private def makeCrystal(
      id: String,
      title: String = "Test Goal",
      intent: String = "Test Intent",
      status: GoalStatus = GoalStatus.InProgress,
      createdAt: String = "2026-09-20T10:00:00Z",
      updatedAt: String = "2026-09-25T10:00:00Z",
      authorId: String = "usr_1",
      tasks: List[AcceptanceCriterion] = Nil,
      leases: List[TransientLease] = Nil,
      lessons: List[LessonLearned] = Nil,
      artifacts: List[Artifact] = Nil,
      nodes: List[DAGNode] = Nil,
  ): ContextCrystal =
    val dagNodes =
      if nodes.isEmpty then
        List(DAGNode("root", Nil, createdAt, authorId, NodeKind.HumanPrompt, "Init summary"))
      else nodes

    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = createdAt,
      updatedAt = updatedAt,
      defaultAuthorId = Some(authorId),
      goal = Goal(title, intent, status, tasks),
      entities = List(Entity(authorId, EntityKind.Human, "Test User")),
      dag = DAG("root", dagNodes),
      transientLeases = leases,
      lessonsLearned = lessons,
      artifacts = artifacts,
    )

  test("TemporalParser parses ISO-8601 date and datetime strings"):
    val t1         = TemporalParser.parse("2026-09-30T10:00:00Z", nowMillis)
    val expectedT1 = CivilDate.epochMillis(2026, 9, 30, 10, 0, 0)
    assertEquals(t1, Some(expectedT1))

    val t2         = TemporalParser.parse("2026-09-30", nowMillis)
    val expectedT2 = CivilDate.epochMillis(2026, 9, 30, 0, 0, 0)
    assertEquals(t2, Some(expectedT2))

  test("TemporalParser parses relative date expressions (today, yesterday, 1d, 7d, 24h)"):
    val today         = TemporalParser.parse("today", nowMillis)
    val expectedToday = CivilDate.epochMillis(2026, 10, 1, 0, 0, 0)
    assertEquals(today, Some(expectedToday))

    val yesterday         = TemporalParser.parse("yesterday", nowMillis)
    val expectedYesterday = CivilDate.epochMillis(2026, 9, 30, 0, 0, 0)
    assertEquals(yesterday, Some(expectedYesterday))

    val oneDay = TemporalParser.parse("1d", nowMillis)
    assertEquals(oneDay, Some(nowMillis - 86400000L))

    val sevenDays = TemporalParser.parse("7d", nowMillis)
    assertEquals(sevenDays, Some(nowMillis - 7L * 86400000L))

    val hours = TemporalParser.parse("24h", nowMillis)
    assertEquals(hours, Some(nowMillis - 24L * 3600000L))

  test("SearchEngine matches query against ID, title, intent, and DAG summaries"):
    val c1 = makeCrystal("mcp-server", title = "Native MCP Server Engine")
    val c2 = makeCrystal("auth-guard", intent = "Security architecture and tokens")
    val c3 = makeCrystal(
      "docs-portal",
      nodes = List(
        DAGNode(
          "n1",
          Nil,
          "2026-09-20T10:00:00Z",
          "usr_1",
          NodeKind.HumanPrompt,
          "Explore Laminar UI",
        ),
      ),
    )

    val filterMcp = CrystalFilter(query = Some("mcp"))
    assert(SearchEngine.matches(c1, filterMcp, nowMillis).isDefined, "c1 should match 'mcp'")
    assert(SearchEngine.matches(c2, filterMcp, nowMillis).isEmpty, "c2 should not match 'mcp'")

    val filterSecurity = CrystalFilter(query = Some("security"))
    assert(
      SearchEngine.matches(c2, filterSecurity, nowMillis).isDefined,
      "c2 should match 'security'",
    )

    val filterLaminar = CrystalFilter(query = Some("laminar"))
    assert(
      SearchEngine.matches(c3, filterLaminar, nowMillis).isDefined,
      "c3 should match 'laminar'",
    )

  test("SearchEngine matches temporal bounds (since and until)"):
    val older = makeCrystal("older", updatedAt = "2026-09-20T10:00:00Z")
    val newer = makeCrystal("newer", updatedAt = "2026-09-30T15:00:00Z")

    val filterSince = CrystalFilter(since = Some("2026-09-28T00:00:00Z"))
    assert(
      SearchEngine.matches(older, filterSince, nowMillis).isEmpty,
      "older should not match since 2026-09-28",
    )
    assert(
      SearchEngine.matches(newer, filterSince, nowMillis).isDefined,
      "newer should match since 2026-09-28",
    )

    val filterUntil = CrystalFilter(until = Some("2026-09-25T00:00:00Z"))
    assert(
      SearchEngine.matches(older, filterUntil, nowMillis).isDefined,
      "older should match until 2026-09-25",
    )
    assert(
      SearchEngine.matches(newer, filterUntil, nowMillis).isEmpty,
      "newer should not match until 2026-09-25",
    )

  test("SearchEngine matches active leases and touching path"):
    val lease = TransientLease(
      id = "l1",
      resourceType = TransientResourceType.GitWorktree,
      resourcePath = Some("/home/oswaldo/git/ccrystal-worktrees/track-1"),
      description = "Dedicated worktree",
      disposalPolicy = DisposalPolicy.Manual,
      status = TransientLeaseStatus.Active,
      createdAt = "2026-09-25T10:00:00Z",
    )
    val cWithLease = makeCrystal("with-lease", leases = List(lease))
    val cNoLease   = makeCrystal("no-lease")

    val filterHasLeases = CrystalFilter(hasActiveLeases = Some(true))
    assert(
      SearchEngine.matches(cWithLease, filterHasLeases, nowMillis).isDefined,
      "with-lease should match",
    )
    assert(
      SearchEngine.matches(cNoLease, filterHasLeases, nowMillis).isEmpty,
      "no-lease should not match",
    )

    val filterPath = CrystalFilter(touchingPath = Some("track-1"))
    assert(
      SearchEngine.matches(cWithLease, filterPath, nowMillis).isDefined,
      "should match path substring track-1",
    )

  test("SearchEngine matches open tasks and lessons"):
    val taskOpen = AcceptanceCriterion("t1", "Incomplete task", completed = false)
    val taskDone = AcceptanceCriterion("t2", "Completed task", completed = true)
    val lesson   = LessonLearned("les1", "Friction with build", status = LessonStatus.Open)

    val cOpen = makeCrystal("open-tasks", tasks = List(taskOpen, taskDone), lessons = List(lesson))
    val cDone = makeCrystal("done-tasks", tasks = List(taskDone))

    val filterTasks = CrystalFilter(hasOpenTasks = Some(true))
    assert(
      SearchEngine.matches(cOpen, filterTasks, nowMillis).isDefined,
      "cOpen should match hasOpenTasks",
    )
    assert(
      SearchEngine.matches(cDone, filterTasks, nowMillis).isEmpty,
      "cDone should not match hasOpenTasks",
    )

    val filterLessons = CrystalFilter(hasLessons = Some(true))
    assert(
      SearchEngine.matches(cOpen, filterLessons, nowMillis).isDefined,
      "cOpen should match hasLessons",
    )
    assert(
      SearchEngine.matches(cDone, filterLessons, nowMillis).isEmpty,
      "cDone should not match hasLessons",
    )

  test("SearchEngine matches aging category"):
    val recent =
      makeCrystal("recent", status = GoalStatus.InProgress, updatedAt = "2026-10-01T10:00:00Z")
    val concluded = makeCrystal(
      "concluded",
      status = GoalStatus.ConcludedSuccess,
      updatedAt = "2026-09-20T10:00:00Z",
      tasks = List(AcceptanceCriterion("t1", "Done", completed = true)),
    )
    val stale =
      makeCrystal("stale", status = GoalStatus.InProgress, updatedAt = "2026-08-01T10:00:00Z")

    val filterActive = CrystalFilter(aging = Some(AgingCategory.Active))
    assert(
      SearchEngine.matches(recent, filterActive, nowMillis).isDefined,
      "recent should be Active",
    )

    val filterSolid = CrystalFilter(aging = Some(AgingCategory.Solid))
    assert(
      SearchEngine.matches(concluded, filterSolid, nowMillis).isDefined,
      "concluded clean crystal should be Solid",
    )

    val filterStale = CrystalFilter(aging = Some(AgingCategory.Stale))
    assert(
      SearchEngine.matches(stale, filterStale, nowMillis).isDefined,
      "stale crystal should be Stale",
    )
