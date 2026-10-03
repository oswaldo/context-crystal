package ccrystal.core.codec

import io.circe.*
import io.circe.generic.semiauto.*
import io.circe.syntax.*
import ccrystal.core.model.*

given Encoder[GoalStatus] = Encoder.encodeString.contramap {
  case GoalStatus.InProgress         => "in_progress"
  case GoalStatus.ConcludedSuccess   => "concluded_success"
  case GoalStatus.ConcludedAbandoned => "concluded_abandoned"
}

given Decoder[GoalStatus] = Decoder.decodeString.emap {
  case "in_progress"         => Right(GoalStatus.InProgress)
  case "concluded_success"   => Right(GoalStatus.ConcludedSuccess)
  case "concluded_abandoned" => Right(GoalStatus.ConcludedAbandoned)
  case other                 => Left(s"Invalid GoalStatus: $other")
}

given Encoder[AgingState] = Encoder.encodeString.contramap {
  case AgingState.Active => "active"
  case AgingState.Solid  => "solid"
  case AgingState.Stale  => "stale"
}

given Decoder[AgingState] = Decoder.decodeString.emap {
  case "active" => Right(AgingState.Active)
  case "solid"  => Right(AgingState.Solid)
  case "stale"  => Right(AgingState.Stale)
  case other    => Left(s"Invalid AgingState: $other")
}

given Encoder[EntityKind] = Encoder.encodeString.contramap {
  case EntityKind.Human  => "human"
  case EntityKind.Agent  => "agent"
  case EntityKind.Model  => "model"
  case EntityKind.System => "system"
  case EntityKind.Tool   => "tool"
}

given Decoder[EntityKind] = Decoder.decodeString.emap {
  case "human"  => Right(EntityKind.Human)
  case "agent"  => Right(EntityKind.Agent)
  case "model"  => Right(EntityKind.Model)
  case "system" => Right(EntityKind.System)
  case "tool"   => Right(EntityKind.Tool)
  case other    => Left(s"Invalid EntityKind: $other")
}

given Encoder[AuthorshipMode] = Encoder.encodeString.contramap {
  case AuthorshipMode.None    => "none"
  case AuthorshipMode.Tracked => "tracked"
  case AuthorshipMode.Signed  => "signed"
}

given Decoder[AuthorshipMode] = Decoder.decodeString.emap {
  case "none"    => Right(AuthorshipMode.None)
  case "tracked" => Right(AuthorshipMode.Tracked)
  case "signed"  => Right(AuthorshipMode.Signed)
  case other     => Left(s"Invalid AuthorshipMode: $other")
}

given Encoder[NodeKind] = Encoder.encodeString.contramap {
  case NodeKind.HumanPrompt    => "human_prompt"
  case NodeKind.AgentReasoning => "agent_reasoning"
  case NodeKind.ToolExecution  => "tool_execution"
  case NodeKind.Checkpoint     => "checkpoint"
  case NodeKind.Branch         => "branch"
  case NodeKind.Resolution     => "resolution"
}

given Decoder[NodeKind] = Decoder.decodeString.emap {
  case "human_prompt"    => Right(NodeKind.HumanPrompt)
  case "agent_reasoning" => Right(NodeKind.AgentReasoning)
  case "tool_execution"  => Right(NodeKind.ToolExecution)
  case "checkpoint"      => Right(NodeKind.Checkpoint)
  case "branch"          => Right(NodeKind.Branch)
  case "resolution"      => Right(NodeKind.Resolution)
  case other             => Left(s"Invalid NodeKind: $other")
}

given Encoder[TransientResourceType] = Encoder.encodeString.contramap {
  case TransientResourceType.GitWorktree => "git_worktree"
  case TransientResourceType.EnvOverride => "env_override"
  case TransientResourceType.DebugConfig => "debug_config"
  case TransientResourceType.DummyAsset  => "dummy_asset"
  case TransientResourceType.MockService => "mock_service"
}

given Decoder[TransientResourceType] = Decoder.decodeString.emap {
  case "git_worktree" => Right(TransientResourceType.GitWorktree)
  case "env_override" => Right(TransientResourceType.EnvOverride)
  case "debug_config" => Right(TransientResourceType.DebugConfig)
  case "dummy_asset"  => Right(TransientResourceType.DummyAsset)
  case "mock_service" => Right(TransientResourceType.MockService)
  case other          => Left(s"Invalid TransientResourceType: $other")
}

given Encoder[DisposalPolicy] = Encoder.encodeString.contramap {
  case DisposalPolicy.RevertOnConclusion => "revert_on_conclusion"
  case DisposalPolicy.DeleteAfterTest    => "delete_after_test"
  case DisposalPolicy.ReplaceInFinalCut  => "replace_in_final_cut"
  case DisposalPolicy.Manual             => "manual"
}

given Decoder[DisposalPolicy] = Decoder.decodeString.emap {
  case "revert_on_conclusion" => Right(DisposalPolicy.RevertOnConclusion)
  case "delete_after_test"    => Right(DisposalPolicy.DeleteAfterTest)
  case "replace_in_final_cut" => Right(DisposalPolicy.ReplaceInFinalCut)
  case "manual"               => Right(DisposalPolicy.Manual)
  case other                  => Left(s"Invalid DisposalPolicy: $other")
}

given Encoder[TransientLeaseStatus] = Encoder.encodeString.contramap {
  case TransientLeaseStatus.Active              => "active"
  case TransientLeaseStatus.Reverted            => "reverted"
  case TransientLeaseStatus.Cleaned             => "cleaned"
  case TransientLeaseStatus.PromotedToPermanent => "promoted_to_permanent"
}

given Decoder[TransientLeaseStatus] = Decoder.decodeString.emap {
  case "active"                => Right(TransientLeaseStatus.Active)
  case "reverted"              => Right(TransientLeaseStatus.Reverted)
  case "cleaned"               => Right(TransientLeaseStatus.Cleaned)
  case "promoted_to_permanent" => Right(TransientLeaseStatus.PromotedToPermanent)
  case other                   => Left(s"Invalid TransientLeaseStatus: $other")
}

given Encoder[LessonStatus] = Encoder.encodeString.contramap {
  case LessonStatus.Open      => "open"
  case LessonStatus.Actioned  => "actioned"
  case LessonStatus.Dismissed => "dismissed"
}

given Decoder[LessonStatus] = Decoder.decodeString.emap {
  case "open"      => Right(LessonStatus.Open)
  case "actioned"  => Right(LessonStatus.Actioned)
  case "dismissed" => Right(LessonStatus.Dismissed)
  case other       => Left(s"Invalid LessonStatus: $other")
}

given Encoder[CaptureFidelity] = Encoder.encodeString.contramap {
  case CaptureFidelity.Inferred    => "inferred"
  case CaptureFidelity.Intercepted => "intercepted"
}

given Decoder[CaptureFidelity] = Decoder.decodeString.emap {
  case "inferred"    => Right(CaptureFidelity.Inferred)
  case "intercepted" => Right(CaptureFidelity.Intercepted)
  case other         => Left(s"Invalid CaptureFidelity: $other")
}

given Encoder[ArtifactSubstrate] = Encoder.encodeString.contramap {
  case ArtifactSubstrate.Virtual  => "virtual"
  case ArtifactSubstrate.Physical => "physical"
}

given Decoder[ArtifactSubstrate] = Decoder.decodeString.emap {
  case "virtual"  => Right(ArtifactSubstrate.Virtual)
  case "physical" => Right(ArtifactSubstrate.Physical)
  case other      => Left(s"Invalid ArtifactSubstrate: $other")
}

given Encoder[ArtifactRole] = Encoder.encodeString.contramap {
  case ArtifactRole.Target       => "target"
  case ArtifactRole.Instrument   => "instrument"
  case ArtifactRole.Precondition => "precondition"
}

given Decoder[ArtifactRole] = Decoder.decodeString.emap {
  case "target"       => Right(ArtifactRole.Target)
  case "instrument"   => Right(ArtifactRole.Instrument)
  case "precondition" => Right(ArtifactRole.Precondition)
  case other          => Left(s"Invalid ArtifactRole: $other")
}

given Codec[AcceptanceCriterion] = deriveCodec
given Codec[Goal] = Codec.from(
  Decoder.instance { c =>
    for
      title              <- c.downField("title").as[String]
      intent             <- c.downField("intent").as[String]
      status             <- c.downField("status").as[GoalStatus]
      acceptanceCriteria <- c.downField("acceptanceCriteria").as[List[AcceptanceCriterion]]
      metadata <- c
        .downField("metadata")
        .as[Option[Map[String, String]]]
        .map(_.getOrElse(Map.empty))
    yield Goal(
      title = title,
      intent = intent,
      status = status,
      acceptanceCriteria = acceptanceCriteria,
      metadata = metadata,
    )
  },
  deriveEncoder[Goal],
)
given Codec[Entity] = Codec.from(
  Decoder.instance { c =>
    for
      id   <- c.downField("id").as[String]
      kind <- c.downField("kind").as[EntityKind]
      name <- c.downField("name").as[String]
      metadata <- c
        .downField("metadata")
        .as[Option[Map[String, String]]]
        .map(_.getOrElse(Map.empty))
      publicKey <- c.downField("publicKey").as[Option[String]]
      endpoints <- c
        .downField("endpoints")
        .as[Option[Map[String, String]]]
        .map(_.getOrElse(Map.empty))
    yield Entity(
      id = id,
      kind = kind,
      name = name,
      metadata = metadata,
      publicKey = publicKey,
      endpoints = endpoints,
    )
  },
  deriveEncoder[Entity],
)
given Codec[EntityRegistry]   = deriveCodec
given Codec[CrystalOrigin]    = deriveCodec
given Codec[Mask]             = deriveCodec
given Codec[PhysicalLocation] = deriveCodec
given Codec[DAGNode] = Codec.from(
  Decoder.instance { c =>
    for
      id             <- c.downField("id").as[String]
      parentIds      <- c.downField("parentIds").as[List[String]]
      timestamp      <- c.downField("timestamp").as[String]
      actorId        <- c.downField("actorId").as[String]
      kind           <- c.downField("kind").as[NodeKind]
      contentSummary <- c.downField("contentSummary").as[String]
      anchor         <- c.downField("anchor").as[Option[String]]
      artifactIds    <- c.downField("artifactIds").as[Option[List[String]]].map(_.getOrElse(Nil))
      inputArtifactIds <- c
        .downField("inputArtifactIds")
        .as[Option[List[String]]]
        .map(_.getOrElse(Nil))
      outputArtifactIds <- c
        .downField("outputArtifactIds")
        .as[Option[List[String]]]
        .map(_.getOrElse(Nil))
      preconditionArtifactIds <- c
        .downField("preconditionArtifactIds")
        .as[Option[List[String]]]
        .map(_.getOrElse(Nil))
      fidelity <- c
        .downField("fidelity")
        .as[Option[CaptureFidelity]]
        .map(_.getOrElse(CaptureFidelity.Inferred))
      metadata <- c
        .downField("metadata")
        .as[Option[Map[String, String]]]
        .map(_.getOrElse(Map.empty))
    yield DAGNode(
      id = id,
      parentIds = parentIds,
      timestamp = timestamp,
      actorId = actorId,
      kind = kind,
      contentSummary = contentSummary,
      anchor = anchor,
      artifactIds = artifactIds,
      inputArtifactIds = inputArtifactIds,
      outputArtifactIds = outputArtifactIds,
      preconditionArtifactIds = preconditionArtifactIds,
      fidelity = fidelity,
      metadata = metadata,
    )
  },
  deriveEncoder[DAGNode],
)
given Codec[DAG]              = deriveCodec
given Codec[TransientLease]   = deriveCodec
given Codec[ActionAuditEntry] = deriveCodec
given Codec[LessonLearned]    = deriveCodec
given Codec[Artifact] = Codec.from(
  Decoder.instance { c =>
    for
      id   <- c.downField("id").as[String]
      name <- c.downField("name").as[Option[String]].map(_.getOrElse(id))
      substrate <- c
        .downField("substrate")
        .as[Option[ArtifactSubstrate]]
        .map(_.getOrElse(ArtifactSubstrate.Virtual))
      role <- c.downField("role").as[Option[ArtifactRole]].map(_.getOrElse(ArtifactRole.Target))
      uri  <- c.downField("uri").as[Option[String]]
      mediaType   <- c.downField("mediaType").as[Option[String]]
      description <- c.downField("description").as[Option[String]]
      location    <- c.downField("location").as[Option[PhysicalLocation]]
      metadata <- c
        .downField("metadata")
        .as[Option[Map[String, String]]]
        .map(_.getOrElse(Map.empty))
    yield Artifact(
      id = id,
      name = name,
      substrate = substrate,
      role = role,
      uri = uri,
      mediaType = mediaType,
      description = description,
      location = location,
      metadata = metadata,
    )
  },
  deriveEncoder[Artifact],
)
given Codec[CaveArtifactRegistry] = deriveCodec
given Encoder[ccrystal.core.model.lattice.BondRelation] = Encoder.encodeString.contramap {
  case ccrystal.core.model.lattice.BondRelation.RelatesTo  => "relates_to"
  case ccrystal.core.model.lattice.BondRelation.DependsOn  => "depends_on"
  case ccrystal.core.model.lattice.BondRelation.Blocks     => "blocks"
  case ccrystal.core.model.lattice.BondRelation.Supersedes => "supersedes"
  case ccrystal.core.model.lattice.BondRelation.References => "references"
}

given Decoder[ccrystal.core.model.lattice.BondRelation] = Decoder.decodeString.emap { s =>
  ccrystal.core.model.lattice.BondRelation.parse(s) match
    case Some(r) => Right(r)
    case None =>
      Left(
        s"Invalid BondRelation: '$s' (valid: relates_to, depends_on, blocks, supersedes, references)",
      )
}

given Codec[ccrystal.core.model.lattice.LatticeBond]         = deriveCodec
given Codec[ccrystal.core.model.lattice.InboundBond]         = deriveCodec
given Codec[ccrystal.core.model.lattice.CrystalBondsSummary] = deriveCodec

given Codec[ContextCrystal] = Codec.from(
  Decoder.instance { c =>
    for
      schemaVersion   <- c.downField("schemaVersion").as[String]
      id              <- c.downField("id").as[String]
      name            <- c.downField("name").as[Option[String]]
      createdAt       <- c.downField("createdAt").as[String]
      updatedAt       <- c.downField("updatedAt").as[String]
      parentCrystalId <- c.downField("parentCrystalId").as[Option[String]]
      origin          <- c.downField("origin").as[Option[CrystalOrigin]]
      caveId          <- c.downField("caveId").as[Option[String]]
      defaultAuthorId <- c.downField("defaultAuthorId").as[Option[String]]
      goal            <- c.downField("goal").as[Goal]
      entities        <- c.downField("entities").as[List[Entity]]
      activeMask      <- c.downField("activeMask").as[Option[Mask]]
      dag             <- c.downField("dag").as[DAG]
      transientLeases <- c
        .downField("transientLeases")
        .as[Option[List[TransientLease]]]
        .map(_.getOrElse(Nil))
      lessonsLearned <- c
        .downField("lessonsLearned")
        .as[Option[List[LessonLearned]]]
        .map(_.getOrElse(Nil))
      artifacts <- c
        .downField("artifacts")
        .as[Option[List[Artifact]]]
        .map(_.getOrElse(Nil))
      bonds <- c
        .downField("bonds")
        .as[Option[List[ccrystal.core.model.lattice.LatticeBond]]]
        .map(_.getOrElse(Nil))
      metadata <- c
        .downField("metadata")
        .as[Option[Map[String, String]]]
        .map(_.getOrElse(Map.empty))
    yield ContextCrystal(
      schemaVersion = schemaVersion,
      id = id,
      name = name,
      createdAt = createdAt,
      updatedAt = updatedAt,
      parentCrystalId = parentCrystalId,
      origin = origin,
      caveId = caveId,
      defaultAuthorId = defaultAuthorId,
      goal = goal,
      entities = entities,
      activeMask = activeMask,
      dag = dag,
      transientLeases = transientLeases,
      lessonsLearned = lessonsLearned,
      artifacts = artifacts,
      bonds = bonds,
      metadata = metadata,
    )
  },
  deriveEncoder[ContextCrystal],
)
given Codec[ccrystal.core.audit.CrystalTriageItem] = deriveCodec

given Encoder[ccrystal.core.model.search.AgingCategory] = Encoder.encodeString.contramap {
  case ccrystal.core.model.search.AgingCategory.Active => "active"
  case ccrystal.core.model.search.AgingCategory.Solid  => "solid"
  case ccrystal.core.model.search.AgingCategory.Stale  => "stale"
}

given Decoder[ccrystal.core.model.search.AgingCategory] = Decoder.decodeString.emap {
  case "active" => Right(ccrystal.core.model.search.AgingCategory.Active)
  case "solid"  => Right(ccrystal.core.model.search.AgingCategory.Solid)
  case "stale"  => Right(ccrystal.core.model.search.AgingCategory.Stale)
  case other    => Left(s"Invalid AgingCategory: $other")
}

given Codec[ccrystal.core.model.search.CrystalFilter] = deriveCodec
given Codec[ccrystal.core.model.search.SearchMatch]   = deriveCodec

given Encoder[ccrystal.core.model.search.SearchSort] = Encoder.encodeString.contramap {
  case ccrystal.core.model.search.SearchSort.Recent => "recent"
  case ccrystal.core.model.search.SearchSort.Oldest => "oldest"
  case ccrystal.core.model.search.SearchSort.Name   => "name"
}

given Decoder[ccrystal.core.model.search.SearchSort] = Decoder.decodeString.emap {
  case "recent" => Right(ccrystal.core.model.search.SearchSort.Recent)
  case "oldest" => Right(ccrystal.core.model.search.SearchSort.Oldest)
  case "name"   => Right(ccrystal.core.model.search.SearchSort.Name)
  case other    => Left(s"Invalid SearchSort: $other")
}

given Codec[ccrystal.core.model.search.SearchResult] = deriveCodec

given Codec[ccrystal.core.model.stats.TemporalExtents]      = deriveCodec
given Codec[ccrystal.core.model.stats.StructuralTotals]     = deriveCodec
given Codec[ccrystal.core.model.stats.StorageFootprint]     = deriveCodec
given Codec[ccrystal.core.model.stats.TokenSavingsEstimate] = deriveCodec
given Codec[ccrystal.core.model.stats.CaveHealthBreakdown]  = deriveCodec
given Codec[ccrystal.core.model.stats.CrystalDiskUsage]     = deriveCodec
given Codec[ccrystal.core.model.stats.CaveStats]            = deriveCodec

given Codec[ccrystal.core.model.prune.PruneCandidate] = deriveCodec
given Codec[ccrystal.core.model.prune.PruneImpactPreview] = Codec.from(
  Decoder.instance { c =>
    for
      candidates    <- c.downField("candidates").as[List[ccrystal.core.model.prune.PruneCandidate]]
      totalCrystals <- c.downField("totalCrystals").as[Int]
      totalBytesFreed              <- c.downField("totalBytesFreed").as[Long]
      orphanedEntitiesToDeregister <- c.downField("orphanedEntitiesToDeregister").as[List[String]]
      artifactsToClean             <- c.downField("artifactsToClean").as[List[String]]
      inboundLatticeWarnings <- c
        .downField("inboundLatticeWarnings")
        .as[Option[List[String]]]
        .map(_.getOrElse(Nil))
    yield ccrystal.core.model.prune.PruneImpactPreview(
      candidates = candidates,
      totalCrystals = totalCrystals,
      totalBytesFreed = totalBytesFreed,
      orphanedEntitiesToDeregister = orphanedEntitiesToDeregister,
      artifactsToClean = artifactsToClean,
      inboundLatticeWarnings = inboundLatticeWarnings,
    )
  },
  deriveEncoder[ccrystal.core.model.prune.PruneImpactPreview],
)
given Codec[ccrystal.core.model.prune.PruneResult] = deriveCodec
