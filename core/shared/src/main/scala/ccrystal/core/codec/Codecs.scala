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
  case TransientLeaseStatus.Active               => "active"
  case TransientLeaseStatus.Reverted             => "reverted"
  case TransientLeaseStatus.Cleaned              => "cleaned"
  case TransientLeaseStatus.PromotedToPermanent  => "promoted_to_permanent"
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

given Codec[AcceptanceCriterion] = deriveCodec
given Codec[Goal] = deriveCodec
given Codec[Entity] = deriveCodec
given Codec[EntityRegistry] = deriveCodec
given Codec[Mask] = deriveCodec
given Codec[DAGNode] = deriveCodec
given Codec[DAG] = deriveCodec
given Codec[TransientLease] = deriveCodec
given Codec[ActionAuditEntry] = deriveCodec
given Codec[LessonLearned] = deriveCodec
given Codec[Artifact] = deriveCodec
given Codec[CrystalOrigin] = deriveCodec
given Codec[ContextCrystal] = deriveCodec
