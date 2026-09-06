package ccrystal.core.model

import scala.CanEqual

enum GoalStatus derives CanEqual:
  case InProgress
  case ConcludedSuccess
  case ConcludedAbandoned

case class AcceptanceCriterion(
    id: String,
    description: String,
    completed: Boolean
) derives CanEqual

case class Goal(
    title: String,
    intent: String,
    status: GoalStatus,
    acceptanceCriteria: List[AcceptanceCriterion],
    metadata: Map[String, String] = Map.empty
) derives CanEqual

enum EntityKind derives CanEqual:
  case Human
  case Agent
  case Model
  case System
  case Tool

enum AuthorshipMode derives CanEqual:
  case None
  case Tracked
  case Signed

case class Entity(
    id: String,
    kind: EntityKind,
    name: String,
    metadata: Map[String, String] = Map.empty,
    publicKey: Option[String] = None,
    endpoints: Map[String, String] = Map.empty
) derives CanEqual

case class EntityRegistry(
    caveId: Option[String] = None,
    authorshipMode: AuthorshipMode = AuthorshipMode.Tracked,
    entities: Map[String, Entity] = Map.empty,
    metadata: Map[String, String] = Map.empty
) derives CanEqual

case class Mask(
    name: String,
    roleDescription: String,
    capabilities: List[String] = Nil,
    parameters: Map[String, String] = Map.empty
) derives CanEqual

enum NodeKind derives CanEqual:
  case HumanPrompt
  case AgentReasoning
  case ToolExecution
  case Checkpoint
  case Branch
  case Resolution

case class DAGNode(
    id: String,
    parentIds: List[String],
    timestamp: String,
    actorId: String,
    kind: NodeKind,
    contentSummary: String,
    artifactIds: List[String] = Nil,
    metadata: Map[String, String] = Map.empty
) derives CanEqual

case class DAG(
    rootNodeId: String,
    nodes: List[DAGNode]
) derives CanEqual

enum TransientResourceType derives CanEqual:
  case GitWorktree
  case EnvOverride
  case DebugConfig
  case DummyAsset
  case MockService

enum DisposalPolicy derives CanEqual:
  case RevertOnConclusion
  case DeleteAfterTest
  case ReplaceInFinalCut
  case Manual

enum TransientLeaseStatus derives CanEqual:
  case Active
  case Reverted
  case Cleaned
  case PromotedToPermanent

case class TransientLease(
    id: String,
    resourceType: TransientResourceType,
    resourcePath: Option[String],
    description: String,
    disposalPolicy: DisposalPolicy,
    status: TransientLeaseStatus,
    createdAt: String
) derives CanEqual

enum LessonStatus derives CanEqual:
  case Open
  case Actioned
  case Dismissed

case class ActionAuditEntry(
    timestamp: String,
    action: String,
    actorId: String
) derives CanEqual

case class LessonLearned(
    id: String,
    observedFriction: String,
    rootCause: Option[String] = None,
    recommendedAction: Option[String] = None,
    status: LessonStatus = LessonStatus.Open,
    actionAuditTrail: List[ActionAuditEntry] = Nil
) derives CanEqual

case class Artifact(
    id: String,
    uri: String,
    mediaType: String,
    description: Option[String] = None,
    sha256: Option[String] = None
) derives CanEqual

case class CrystalOrigin(
    parentCrystalId: String,
    parentNodeId: Option[String] = None,
    reason: Option[String] = None,
    createdAt: Option[String] = None
) derives CanEqual

case class ContextCrystal(
    schemaVersion: String,
    id: String,
    name: Option[String] = None,
    createdAt: String,
    updatedAt: String,
    parentCrystalId: Option[String] = None,
    origin: Option[CrystalOrigin] = None,
    caveId: Option[String] = None,
    defaultAuthorId: Option[String] = None,
    goal: Goal,
    entities: List[Entity],
    activeMask: Option[Mask] = None,
    dag: DAG,
    transientLeases: List[TransientLease] = Nil,
    lessonsLearned: List[LessonLearned] = Nil,
    artifacts: List[Artifact] = Nil,
    metadata: Map[String, String] = Map.empty
) derives CanEqual
