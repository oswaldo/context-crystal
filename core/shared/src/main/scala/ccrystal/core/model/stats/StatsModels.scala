package ccrystal.core.model.stats

import ccrystal.core.model.*
import ccrystal.core.model.search.{AgingCategory, CrystalFilter}
import scala.CanEqual

final case class TemporalExtents(
    oldestCrystalId: Option[String],
    oldestCreatedAt: Option[String],
    newestCrystalId: Option[String],
    newestUpdatedAt: Option[String],
    spanDays: Long,
) derives CanEqual

final case class StructuralTotals(
    totalCrystals: Int,
    activeCrystals: Int,
    archivedCrystals: Int,
    totalDagNodes: Long,
    totalTasks: Int,
    completedTasks: Int,
    openTasks: Int,
    activeLeases: Int,
    totalLessons: Int,
    openLessons: Int,
    totalArtifacts: Int,
    totalEntities: Int,
) derives CanEqual

final case class StorageFootprint(
    activeBytes: Long,
    archivedBytes: Long,
    totalBytes: Long,
    averageCrystalBytes: Long,
) derives CanEqual

/** Estimated prompt token savings achieved by selective hydration vs. raw conversational DAG
  * re-ingestion.
  *
  * NOTE: These figures are reference estimates based on best-effort heuristics (~4 chars/token) and
  * operational assumptions rather than scientifically validated tokenizer counts. They represent an
  * engineering hypothesis of context reduction that we aim to empirically benchmark and validate in
  * future research.
  */
final case class TokenSavingsEstimate(
    estimatedRawDagTokens: Long,
    estimatedHydratedTokens: Long,
    estimatedTokensSaved: Long,
    savingsPercentage: Double,
) derives CanEqual

final case class CaveHealthBreakdown(
    byStatus: Map[String, Int],
    byAging: Map[String, Int],
) derives CanEqual

final case class CrystalDiskUsage(
    crystalId: String,
    status: GoalStatus,
    aging: AgingCategory,
    totalBytes: Long,
    dagNodes: Int,
    estimatedTokens: Long,
    isArchived: Boolean,
) derives CanEqual

final case class CaveStats(
    filter: Option[CrystalFilter],
    extents: TemporalExtents,
    structure: StructuralTotals,
    storage: StorageFootprint,
    tokenSavings: TokenSavingsEstimate,
    health: CaveHealthBreakdown,
    topCrystals: List[CrystalDiskUsage],
) derives CanEqual
