package ccrystal.core.stats

import ccrystal.core.model.*
import ccrystal.core.model.search.*
import ccrystal.core.model.stats.*
import ccrystal.core.dag.{ContextHydrator, HydrationParams, SliceParams}
import ccrystal.core.audit.CrystalTriage
import ccrystal.core.codec.given
import io.circe.syntax.*

object CaveStatsEngine:

  def compute(
      allCrystalPairs: List[(ContextCrystal, Boolean)], // (crystal, isArchived)
      globalActiveBytes: Long,
      globalArchivedBytes: Long,
      perCrystalBytes: Map[String, Long],
      entityRegistry: Option[EntityRegistry],
      artifactRegistry: Option[CaveArtifactRegistry],
      filter: Option[CrystalFilter] = None,
      nowEpochMillis: Long = System.currentTimeMillis(),
  ): CaveStats =
    // 1. Filter crystals if a filter is provided
    val evaluatedPairs = filter match
      case Some(f) =>
        allCrystalPairs.filter { case (crystal, isArchived) =>
          SearchEngine.matches(crystal, f, nowEpochMillis, isArchived).isDefined
        }
      case None =>
        // By default, include all active crystals, and include archived if store loaded them
        allCrystalPairs

    val evaluatedCrystals = evaluatedPairs.map(_._1)

    // 2. Compute Temporal Extents
    val temporalExtents = computeTemporalExtents(evaluatedCrystals)

    // 3. Compute Structural Totals
    val totalCrystals    = evaluatedCrystals.size
    val activeCrystals   = evaluatedPairs.count { case (_, isArchived) => !isArchived }
    val archivedCrystals = evaluatedPairs.count { case (_, isArchived) => isArchived }
    val totalDagNodes    = evaluatedCrystals.map(_.dag.nodes.size.toLong).sum
    val totalTasks       = evaluatedCrystals.map(_.goal.acceptanceCriteria.size).sum
    val completedTasks   = evaluatedCrystals.map(_.goal.acceptanceCriteria.count(_.completed)).sum
    val openTasks        = totalTasks - completedTasks
    val activeLeases =
      evaluatedCrystals.map(_.transientLeases.count(_.status == TransientLeaseStatus.Active)).sum
    val totalLessons = evaluatedCrystals.map(_.lessonsLearned.size).sum
    val openLessons =
      evaluatedCrystals.map(_.lessonsLearned.count(_.status == LessonStatus.Open)).sum

    val crystalArtifactCount = evaluatedCrystals.map(_.artifacts.size).sum
    val caveArtifactCount    = artifactRegistry.map(_.artifacts.size).getOrElse(0)
    val totalArtifacts       = crystalArtifactCount + caveArtifactCount
    val totalEntities        = entityRegistry.map(_.entities.size).getOrElse(0)

    val structure = StructuralTotals(
      totalCrystals = totalCrystals,
      activeCrystals = activeCrystals,
      archivedCrystals = archivedCrystals,
      totalDagNodes = totalDagNodes,
      totalTasks = totalTasks,
      completedTasks = completedTasks,
      openTasks = openTasks,
      activeLeases = activeLeases,
      totalLessons = totalLessons,
      openLessons = openLessons,
      totalArtifacts = totalArtifacts,
      totalEntities = totalEntities,
    )

    // 4. Compute Storage Footprint
    val storage = computeStorageFootprint(
      evaluatedPairs = evaluatedPairs,
      globalActiveBytes = globalActiveBytes,
      globalArchivedBytes = globalArchivedBytes,
      perCrystalBytes = perCrystalBytes,
      isFiltered = filter.isDefined,
    )

    // 5. Compute Token Savings & Per-Crystal Usage
    val (tokenSavings, crystalUsages) = computeTokenAndUsageMetrics(evaluatedPairs, perCrystalBytes)

    // 6. Compute Cave Health Breakdown
    val health = computeHealthBreakdown(evaluatedCrystals)

    CaveStats(
      filter = filter,
      extents = temporalExtents,
      structure = structure,
      storage = storage,
      tokenSavings = tokenSavings,
      health = health,
      topCrystals = crystalUsages.sortBy(u => -u.totalBytes).take(10),
    )

  private def computeTemporalExtents(crystals: List[ContextCrystal]): TemporalExtents =
    if crystals.isEmpty then
      TemporalExtents(
        oldestCrystalId = None,
        oldestCreatedAt = None,
        newestCrystalId = None,
        newestUpdatedAt = None,
        spanDays = 0L,
      )
    else
      // Find oldest by createdAt (or first node timestamp)
      val createdDates = crystals.flatMap { c =>
        val iso =
          if c.createdAt != null && c.createdAt.trim.nonEmpty then c.createdAt
          else c.dag.nodes.headOption.map(_.timestamp).getOrElse("1970-01-01T00:00:00Z")
        CivilDate.parseIsoToEpochMillis(iso).map(millis => (c.id, iso, millis))
      }

      val (oldestId, oldestIso, minMillis) =
        if createdDates.nonEmpty then
          val minElem = createdDates.minBy(_._3)
          (Some(minElem._1), Some(minElem._2), minElem._3)
        else (None, None, 0L)

      // Find newest by updatedAt or latest node timestamp
      val updatedDates = crystals.flatMap { c =>
        val iso =
          if c.updatedAt != null && c.updatedAt.trim.nonEmpty then c.updatedAt
          else
            c.dag.nodes.lastOption
              .map(_.timestamp)
              .getOrElse(
                if c.createdAt != null && c.createdAt.trim.nonEmpty then c.createdAt
                else "1970-01-01T00:00:00Z",
              )
        CivilDate.parseIsoToEpochMillis(iso).map(millis => (c.id, iso, millis))
      }

      val (newestId, newestIso, maxMillis) =
        if updatedDates.nonEmpty then
          val maxElem = updatedDates.maxBy(_._3)
          (Some(maxElem._1), Some(maxElem._2), maxElem._3)
        else (None, None, 0L)

      val spanDays =
        if minMillis > 0L && maxMillis >= minMillis then (maxMillis - minMillis) / 86400000L
        else 0L

      TemporalExtents(
        oldestCrystalId = oldestId,
        oldestCreatedAt = oldestIso,
        newestCrystalId = newestId,
        newestUpdatedAt = newestIso,
        spanDays = spanDays,
      )

  private def computeStorageFootprint(
      evaluatedPairs: List[(ContextCrystal, Boolean)],
      globalActiveBytes: Long,
      globalArchivedBytes: Long,
      perCrystalBytes: Map[String, Long],
      isFiltered: Boolean,
  ): StorageFootprint =
    if !isFiltered && (globalActiveBytes > 0L || globalArchivedBytes > 0L) then
      val total = globalActiveBytes + globalArchivedBytes
      val avg   = if evaluatedPairs.nonEmpty then total / evaluatedPairs.size else 0L
      StorageFootprint(
        activeBytes = globalActiveBytes,
        archivedBytes = globalArchivedBytes,
        totalBytes = total,
        averageCrystalBytes = avg,
      )
    else
      // Sum up bytes for evaluated crystals
      var activeSum   = 0L
      var archivedSum = 0L
      evaluatedPairs.foreach { case (c, isArchived) =>
        val bytes = perCrystalBytes.getOrElse(c.id, estimateCrystalBytes(c))
        if isArchived then archivedSum += bytes
        else activeSum += bytes
      }
      val total = activeSum + archivedSum
      val avg   = if evaluatedPairs.nonEmpty then total / evaluatedPairs.size else 0L
      StorageFootprint(
        activeBytes = activeSum,
        archivedBytes = archivedSum,
        totalBytes = total,
        averageCrystalBytes = avg,
      )

  private def estimateCrystalBytes(crystal: ContextCrystal): Long =
    // Approximate JSON bytes when not on disk (e.g. in tests/memory)
    crystal.asJson.noSpaces.getBytes("UTF-8").length.toLong

  private def computeTokenAndUsageMetrics(
      evaluatedPairs: List[(ContextCrystal, Boolean)],
      perCrystalBytes: Map[String, Long],
  ): (TokenSavingsEstimate, List[CrystalDiskUsage]) =
    var totalRawTokens      = 0L
    var totalHydratedTokens = 0L
    val usages              = List.newBuilder[CrystalDiskUsage]

    evaluatedPairs.foreach { case (c, isArchived) =>
      val agingState = CrystalTriage.classifyAging(c)
      val agingCat   = AgingCategory.fromAgingState(agingState)
      val totalBytes = perCrystalBytes.getOrElse(c.id, estimateCrystalBytes(c))

      // 1. Raw DAG representation (full serialized DAG JSON)
      val rawDagJsonChars = c.dag.asJson.noSpaces.length.toLong
      val rawTokens       = (rawDagJsonChars / 4L).max(1L)
      totalRawTokens += rawTokens

      // 2. Focused hydrated representation (topological beam with recent tail)
      val hydrationParams =
        if c.goal.status != GoalStatus.InProgress then HydrationParams(summaryOnly = true)
        else HydrationParams(slice = SliceParams(tail = Some(10)))

      val hydratedBeamChars =
        ContextHydrator.hydrate(c, hydrationParams).map(_.length.toLong).getOrElse(0L)
      val hydratedTokens = (hydratedBeamChars / 4L).max(1L)
      totalHydratedTokens += hydratedTokens

      usages += CrystalDiskUsage(
        crystalId = c.id,
        status = c.goal.status,
        aging = agingCat,
        totalBytes = totalBytes,
        dagNodes = c.dag.nodes.size,
        estimatedTokens = rawTokens,
        isArchived = isArchived,
      )
    }

    val tokensSaved = math.max(0L, totalRawTokens - totalHydratedTokens)
    val percentage =
      if totalRawTokens > 0L then (tokensSaved.toDouble / totalRawTokens.toDouble) * 100.0
      else 0.0

    val savings = TokenSavingsEstimate(
      estimatedRawDagTokens = totalRawTokens,
      estimatedHydratedTokens = totalHydratedTokens,
      estimatedTokensSaved = tokensSaved,
      savingsPercentage = math.round(percentage * 10.0) / 10.0,
    )

    (savings, usages.result())

  private def computeHealthBreakdown(crystals: List[ContextCrystal]): CaveHealthBreakdown =
    val statusCounts = collection.mutable.Map[String, Int](
      "in_progress"         -> 0,
      "concluded_success"   -> 0,
      "concluded_abandoned" -> 0,
    )
    val agingCounts = collection.mutable.Map[String, Int](
      "active" -> 0,
      "solid"  -> 0,
      "stale"  -> 0,
    )

    crystals.foreach { c =>
      val stKey = c.goal.status match
        case GoalStatus.InProgress         => "in_progress"
        case GoalStatus.ConcludedSuccess   => "concluded_success"
        case GoalStatus.ConcludedAbandoned => "concluded_abandoned"
      statusCounts(stKey) = statusCounts.getOrElse(stKey, 0) + 1

      val agingState = CrystalTriage.classifyAging(c)
      val agingKey = AgingCategory.fromAgingState(agingState) match
        case AgingCategory.Active => "active"
        case AgingCategory.Solid  => "solid"
        case AgingCategory.Stale  => "stale"
      agingCounts(agingKey) = agingCounts.getOrElse(agingKey, 0) + 1
    }

    CaveHealthBreakdown(
      byStatus = statusCounts.toMap,
      byAging = agingCounts.toMap,
    )
