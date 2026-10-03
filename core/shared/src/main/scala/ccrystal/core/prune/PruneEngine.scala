package ccrystal.core.prune

import ccrystal.core.model.*
import ccrystal.core.model.prune.*
import ccrystal.core.model.search.SearchEngine
import scala.util.matching.Regex

object PruneEngine:

  private val DurationRegex: Regex = """^(\d+)([dwm]?)$""".r

  def parseDurationDays(input: String): Either[String, Long] =
    val trimmed = input.trim.toLowerCase
    trimmed match
      case DurationRegex(numStr, unit) =>
        try
          val num = numStr.toLong
          if num <= 0 then Left(s"Duration must be greater than zero: '$input'")
          else
            unit match
              case "w"      => Right(num * 7L)
              case "m"      => Right(num * 30L)
              case "d" | "" => Right(num)
              case other    => Left(s"Unknown duration unit '$other' in '$input'")
        catch case _: Throwable => Left(s"Invalid duration number: '$input'")
      case other =>
        Left(s"Invalid duration format: '$other' (expected e.g. '30d', '2w', '3m')")

  def evaluate(
      archivedCrystals: List[ContextCrystal],
      activeCrystals: List[ContextCrystal],
      perCrystalDiskBytes: Map[String, Long],
      entityRegistry: EntityRegistry,
      artifactRegistry: CaveArtifactRegistry,
      targetCrystalId: Option[String],
      olderThanDays: Option[Long],
      all: Boolean,
      nowEpochMillis: Long = System.currentTimeMillis(),
  ): Either[String, PruneImpactPreview] =
    if targetCrystalId.isEmpty && olderThanDays.isEmpty && !all then
      Left(
        "At least one prune targeting criterion must be specified (crystal ID, older-than, or all)",
      )
    else
      val matchingArchived = archivedCrystals.filter { c =>
        targetCrystalId match
          case Some(tId) => c.id == tId
          case None =>
            olderThanDays match
              case Some(minDays) =>
                val actMillis = SearchEngine.latestActivityMillis(c)
                val ageDays =
                  if actMillis > 0L then Math.max(0L, (nowEpochMillis - actMillis) / 86400000L)
                  else 0L
                ageDays >= minDays
              case None =>
                all
      }

      if targetCrystalId.isDefined && matchingArchived.isEmpty then
        Left(s"Archived crystal '${targetCrystalId.get}' not found in cold storage")
      else
        val candidateIds = matchingArchived.map(_.id).toSet
        val remainingCrystals =
          activeCrystals ++ archivedCrystals.filterNot(c => candidateIds.contains(c.id))

        def crystalEntityRefs(c: ContextCrystal): Set[String] =
          c.defaultAuthorId.toSet ++ c.entities.map(_.id).toSet ++ c.dag.nodes.map(_.actorId).toSet

        val remainingEntityIds = remainingCrystals.flatMap(crystalEntityRefs).toSet
        val targetedEntityIds  = matchingArchived.flatMap(crystalEntityRefs).toSet
        val orphanedEntityIds  = targetedEntityIds.filterNot(remainingEntityIds.contains)
        val entitiesToDeregister =
          orphanedEntityIds.filter(entityRegistry.entities.contains).toList.sorted

        val matchingArtifacts = artifactRegistry.artifacts.values.filter { art =>
          candidateIds.exists { cId =>
            art.metadata.get("crystal_id").contains(cId) ||
            art.metadata.get("crystalId").contains(cId) ||
            art.uri.exists(u =>
              u.startsWith(s"crystal://$cId") ||
                u.contains(s"/.ccrystals/$cId/") ||
                u.contains(s"/.ccrystals/archive/$cId/"),
            )
          }
        }.toList
        val artifactsToClean = matchingArtifacts.map(_.id).sorted

        val candidates = matchingArchived
          .map { c =>
            val actMillis = SearchEngine.latestActivityMillis(c)
            val ageDays =
              if actMillis > 0L then Math.max(0L, (nowEpochMillis - actMillis) / 86400000L) else 0L
            val diskBytes = perCrystalDiskBytes.getOrElse(c.id, 0L)
            PruneCandidate(
              crystalId = c.id,
              archivedAt = Some(c.updatedAt),
              ageDays = ageDays,
              diskBytes = diskBytes,
              nodeCount = c.dag.nodes.size,
              taskCount = c.goal.acceptanceCriteria.size,
              lessonCount = c.lessonsLearned.size,
            )
          }
          .sortBy(-_.ageDays)

        val totalBytes = candidates.map(_.diskBytes).sum

        val inboundLatticeWarnings = remainingCrystals.flatMap { other =>
          other.bonds.filter(b => candidateIds.contains(b.targetCrystalId)).map { b =>
            s"Active crystal '${other.id}' has inbound ${ccrystal.core.model.lattice.BondRelation.format(b.relation)} bond targeting candidate '${b.targetCrystalId}'"
          }
        }.sorted

        Right(
          PruneImpactPreview(
            candidates = candidates,
            totalCrystals = candidates.size,
            totalBytesFreed = totalBytes,
            orphanedEntitiesToDeregister = entitiesToDeregister,
            artifactsToClean = artifactsToClean,
            inboundLatticeWarnings = inboundLatticeWarnings,
          ),
        )
