package ccrystal.core.stats

import ccrystal.core.model.*
import ccrystal.core.model.search.*
import ccrystal.core.model.stats.*
import munit.FunSuite

class CaveStatsEngineSuite extends FunSuite:

  private def makeCrystal(
      id: String,
      status: GoalStatus,
      createdAt: String,
      updatedAt: String,
      nodes: Int = 3,
      tasks: (Int, Int) = (2, 1), // (total, completed)
      leases: Int = 0,
      lessons: Int = 0,
  ): ContextCrystal =
    val dagNodes = (1 to nodes).toList.map { i =>
      DAGNode(
        id = s"n-$i",
        parentIds = if i > 1 then List(s"n-${i - 1}") else Nil,
        timestamp = if i == 1 then createdAt else updatedAt,
        actorId = "usr_tester",
        kind = if i == 1 then NodeKind.HumanPrompt else NodeKind.AgentReasoning,
        contentSummary =
          s"Summary of step $i in crystal $id with detailed explanation of work done",
        fidelity = CaptureFidelity.Inferred,
      )
    }

    val criteria = (1 to tasks._1).toList.map { i =>
      AcceptanceCriterion(
        id = s"t-$i",
        description = s"Task $i",
        completed = i <= tasks._2,
      )
    }

    val leaseList = (1 to leases).toList.map { i =>
      TransientLease(
        id = s"l-$i",
        resourceType = TransientResourceType.GitWorktree,
        resourcePath = Some(s"/tmp/worktree-$id-$i"),
        description = s"Lease $i",
        disposalPolicy = DisposalPolicy.RevertOnConclusion,
        status = TransientLeaseStatus.Active,
        createdAt = createdAt,
      )
    }

    val lessonList = (1 to lessons).toList.map { i =>
      LessonLearned(
        id = s"les-$i",
        observedFriction = s"Friction $i",
        status = LessonStatus.Open,
      )
    }

    ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = createdAt,
      updatedAt = updatedAt,
      goal = Goal(
        title = s"Goal of $id",
        intent = s"Intent of $id",
        status = status,
        acceptanceCriteria = criteria,
      ),
      entities = Nil,
      dag = DAG(rootNodeId = "n-1", nodes = dagNodes),
      transientLeases = leaseList,
      lessonsLearned = lessonList,
      artifacts = Nil,
    )

  test("Computes zero/empty stats when cave is empty"):
    val stats = CaveStatsEngine.compute(
      allCrystalPairs = Nil,
      globalActiveBytes = 0L,
      globalArchivedBytes = 0L,
      perCrystalBytes = Map.empty,
      entityRegistry = None,
      artifactRegistry = None,
      filter = None,
    )

    assertEquals(stats.structure.totalCrystals, 0)
    assertEquals(stats.structure.totalDagNodes, 0L)
    assertEquals(stats.extents.oldestCrystalId, None)
    assertEquals(stats.extents.spanDays, 0L)
    assertEquals(stats.storage.totalBytes, 0L)
    assertEquals(stats.tokenSavings.estimatedTokensSaved, 0L)

  test("Computes accurate temporal extents, structural counts, and lifespan"):
    val c1 = makeCrystal(
      id = "c-first",
      status = GoalStatus.ConcludedSuccess,
      createdAt = "2026-08-01T10:00:00Z",
      updatedAt = "2026-08-05T10:00:00Z",
      nodes = 5,
      tasks = (4, 4),
      leases = 0,
      lessons = 1,
    )
    val c2 = makeCrystal(
      id = "c-latest",
      status = GoalStatus.InProgress,
      createdAt = "2026-08-10T10:00:00Z",
      updatedAt = "2026-08-20T10:00:00Z",
      nodes = 10,
      tasks = (5, 2),
      leases = 1,
      lessons = 0,
    )

    val pairs    = List((c1, false), (c2, false))
    val perBytes = Map("c-first" -> 10000L, "c-latest" -> 25000L)

    val stats = CaveStatsEngine.compute(
      allCrystalPairs = pairs,
      globalActiveBytes = 35000L,
      globalArchivedBytes = 0L,
      perCrystalBytes = perBytes,
      entityRegistry = Some(
        EntityRegistry(
          caveId = Some("test-cave"),
          entities = Map("u1" -> Entity("u1", EntityKind.Human, "Tester")),
        ),
      ),
      artifactRegistry = None,
      filter = None,
    )

    assertEquals(stats.structure.totalCrystals, 2)
    assertEquals(stats.structure.activeCrystals, 2)
    assertEquals(stats.structure.archivedCrystals, 0)
    assertEquals(stats.structure.totalDagNodes, 15L)
    assertEquals(stats.structure.totalTasks, 9)
    assertEquals(stats.structure.completedTasks, 6)
    assertEquals(stats.structure.openTasks, 3)
    assertEquals(stats.structure.activeLeases, 1)
    assertEquals(stats.structure.totalLessons, 1)
    assertEquals(stats.structure.totalEntities, 1)

    assertEquals(stats.extents.oldestCrystalId, Some("c-first"))
    assertEquals(stats.extents.newestCrystalId, Some("c-latest"))
    assertEquals(stats.extents.spanDays, 19L) // Aug 1 to Aug 20 = 19 days

    assertEquals(stats.storage.activeBytes, 35000L)
    assertEquals(stats.storage.totalBytes, 35000L)
    assertEquals(stats.storage.averageCrystalBytes, 17500L)

    assert(stats.tokenSavings.estimatedRawDagTokens > 0L, "raw dag tokens > 0")
    assert(stats.tokenSavings.estimatedTokensSaved > 0L, "tokens saved > 0")
    assert(stats.tokenSavings.savingsPercentage > 0.0, "savings percentage > 0")

    assertEquals(stats.health.byStatus("in_progress"), 1)
    assertEquals(stats.health.byStatus("concluded_success"), 1)
    assertEquals(stats.topCrystals.head.crystalId, "c-latest")

  test("Scopes stats calculation when CrystalFilter is provided"):
    val cActive = makeCrystal(
      id = "c-active",
      status = GoalStatus.InProgress,
      createdAt = "2026-08-01T10:00:00Z",
      updatedAt = "2026-08-01T10:00:00Z",
      nodes = 3,
      tasks = (3, 1),
    )
    val cDone = makeCrystal(
      id = "c-done",
      status = GoalStatus.ConcludedSuccess,
      createdAt = "2026-08-05T10:00:00Z",
      updatedAt = "2026-08-05T10:00:00Z",
      nodes = 8,
      tasks = (4, 4),
    )

    val pairs    = List((cActive, false), (cDone, false))
    val perBytes = Map("c-active" -> 5000L, "c-done" -> 15000L)

    val filterInProgress = CrystalFilter(status = Some(GoalStatus.InProgress))
    val stats = CaveStatsEngine.compute(
      allCrystalPairs = pairs,
      globalActiveBytes = 20000L,
      globalArchivedBytes = 0L,
      perCrystalBytes = perBytes,
      entityRegistry = None,
      artifactRegistry = None,
      filter = Some(filterInProgress),
    )

    assertEquals(stats.structure.totalCrystals, 1)
    assertEquals(stats.structure.totalDagNodes, 3L)
    assertEquals(stats.extents.oldestCrystalId, Some("c-active"))
    assertEquals(stats.extents.newestCrystalId, Some("c-active"))
    assertEquals(stats.storage.totalBytes, 5000L)
    assertEquals(stats.health.byStatus("in_progress"), 1)
    assertEquals(stats.health.byStatus("concluded_success"), 0)
