package ccrystal.core.model.prune

import scala.CanEqual

final case class PruneCandidate(
    crystalId: String,
    archivedAt: Option[String],
    ageDays: Long,
    diskBytes: Long,
    nodeCount: Int,
    taskCount: Int,
    lessonCount: Int,
) derives CanEqual

final case class PruneImpactPreview(
    candidates: List[PruneCandidate],
    totalCrystals: Int,
    totalBytesFreed: Long,
    orphanedEntitiesToDeregister: List[String],
    artifactsToClean: List[String],
    inboundLatticeWarnings: List[String] = Nil,
) derives CanEqual

final case class PruneResult(
    prunedCrystalIds: List[String],
    deregisteredEntityIds: List[String],
    cleanedArtifactIds: List[String],
    bytesFreed: Long,
    dryRun: Boolean,
) derives CanEqual
