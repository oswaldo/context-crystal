package ccrystal.core.model

import scala.CanEqual

enum GoalStatus derives CanEqual:
  case InProgress
  case ConcludedSuccess
  case ConcludedAbandoned

case class AcceptanceCriterion(
    id: String,
    description: String,
    completed: Boolean,
) derives CanEqual

case class Goal(
    title: String,
    intent: String,
    status: GoalStatus,
    acceptanceCriteria: List[AcceptanceCriterion],
    metadata: Map[String, String] = Map.empty,
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
    endpoints: Map[String, String] = Map.empty,
) derives CanEqual

case class EntityRegistry(
    caveId: Option[String] = None,
    authorshipMode: AuthorshipMode = AuthorshipMode.Tracked,
    entities: Map[String, Entity] = Map.empty,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

case class Mask(
    name: String,
    roleDescription: String,
    capabilities: List[String] = Nil,
    parameters: Map[String, String] = Map.empty,
) derives CanEqual

enum NodeKind derives CanEqual:
  case HumanPrompt
  case AgentReasoning
  case ToolExecution
  case Checkpoint
  case Branch
  case Resolution

enum CaptureFidelity derives CanEqual:
  case Inferred
  case Intercepted

case class DAGNode(
    id: String,
    parentIds: List[String],
    timestamp: String,
    actorId: String,
    kind: NodeKind,
    contentSummary: String,
    anchor: Option[String] = None,
    artifactIds: List[String] = Nil,
    inputArtifactIds: List[String] = Nil,
    outputArtifactIds: List[String] = Nil,
    preconditionArtifactIds: List[String] = Nil,
    fidelity: CaptureFidelity = CaptureFidelity.Inferred,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

object DAGNode:
  def apply(
      id: String,
      parentIds: List[String],
      timestamp: String,
      actorId: String,
      kind: NodeKind,
      contentSummary: String,
  ): DAGNode =
    DAGNode(
      id = id,
      parentIds = parentIds,
      timestamp = timestamp,
      actorId = actorId,
      kind = kind,
      contentSummary = contentSummary,
      anchor = None,
      artifactIds = Nil,
      inputArtifactIds = Nil,
      outputArtifactIds = Nil,
      preconditionArtifactIds = Nil,
      fidelity = CaptureFidelity.Inferred,
      metadata = Map.empty,
    )

  def apply(
      id: String,
      parentIds: List[String],
      timestamp: String,
      actorId: String,
      kind: NodeKind,
      contentSummary: String,
      artifactIds: List[String],
  ): DAGNode =
    DAGNode(
      id = id,
      parentIds = parentIds,
      timestamp = timestamp,
      actorId = actorId,
      kind = kind,
      contentSummary = contentSummary,
      anchor = None,
      artifactIds = artifactIds,
      inputArtifactIds = Nil,
      outputArtifactIds = Nil,
      preconditionArtifactIds = Nil,
      fidelity = CaptureFidelity.Inferred,
      metadata = Map.empty,
    )

  def apply(
      id: String,
      parentIds: List[String],
      timestamp: String,
      actorId: String,
      kind: NodeKind,
      contentSummary: String,
      anchor: Option[String],
      artifactIds: List[String],
      fidelity: CaptureFidelity,
      metadata: Map[String, String],
  ): DAGNode =
    DAGNode(
      id = id,
      parentIds = parentIds,
      timestamp = timestamp,
      actorId = actorId,
      kind = kind,
      contentSummary = contentSummary,
      anchor = anchor,
      artifactIds = artifactIds,
      inputArtifactIds = Nil,
      outputArtifactIds = Nil,
      preconditionArtifactIds = Nil,
      fidelity = fidelity,
      metadata = metadata,
    )

case class DAG(
    rootNodeId: String,
    nodes: List[DAGNode],
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
    createdAt: String,
) derives CanEqual

enum LessonStatus derives CanEqual:
  case Open
  case Actioned
  case Dismissed

case class ActionAuditEntry(
    timestamp: String,
    action: String,
    actorId: String,
) derives CanEqual

case class LessonLearned(
    id: String,
    observedFriction: String,
    rootCause: Option[String] = None,
    recommendedAction: Option[String] = None,
    status: LessonStatus = LessonStatus.Open,
    actionAuditTrail: List[ActionAuditEntry] = Nil,
) derives CanEqual

enum ArtifactSubstrate derives CanEqual:
  case Virtual
  case Physical

enum ArtifactRole derives CanEqual:
  case Target
  case Instrument
  case Precondition

case class PhysicalLocation(
    name: String,
    civicAddress: Option[String] = None,
    geoUri: Option[String] = None,
    benchCoordinates: Option[String] = None,
) derives CanEqual

case class Artifact(
    id: String,
    name: String,
    substrate: ArtifactSubstrate = ArtifactSubstrate.Virtual,
    role: ArtifactRole = ArtifactRole.Target,
    uri: Option[String] = None,
    mediaType: Option[String] = None,
    description: Option[String] = None,
    location: Option[PhysicalLocation] = None,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

object Artifact:
  def apply(
      id: String,
      uri: String,
      mediaType: String,
      description: Option[String],
  ): Artifact =
    Artifact(
      id = id,
      name = id,
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some(uri),
      mediaType = Some(mediaType),
      description = description,
      location = None,
      metadata = Map.empty,
    )

  def apply(
      id: String,
      uri: String,
      mediaType: String,
      description: Option[String],
      sha256: Option[String],
  ): Artifact =
    Artifact(
      id = id,
      name = id,
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some(uri),
      mediaType = Some(mediaType),
      description = description,
      location = None,
      metadata = sha256.map(h => Map("sha256" -> h)).getOrElse(Map.empty),
    )

case class CaveArtifactRegistry(
    caveId: Option[String] = None,
    artifacts: Map[String, Artifact] = Map.empty,
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

case class CrystalOrigin(
    parentCrystalId: String,
    parentNodeId: Option[String] = None,
    reason: Option[String] = None,
    createdAt: Option[String] = None,
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
    metadata: Map[String, String] = Map.empty,
) derives CanEqual

case class CrystalDeletionResult(
    deletedCrystalId: String,
    deregisteredEntityIds: List[String] = Nil,
) derives CanEqual

case class EntityDeregistrationResult(
    deregisteredEntityId: String,
    deletedCrystalIds: List[String] = Nil,
) derives CanEqual

case class CrystalImpactPreview(
    crystalId: String,
    goalTitle: String,
    intent: String,
    goalStatus: GoalStatus,
    createdAt: String,
    updatedAt: String,
    totalNodes: Int,
    nodeSummaries: List[String],
    totalTasks: Int,
    completedTasks: Int,
    taskDescriptions: List[String],
    totalLessons: Int,
    openLessons: Int,
    lessonFrictions: List[String],
    totalLeases: Int,
    activeLeases: Int,
    leaseDescriptions: List[String],
    cascadingDeregisterEntityIds: List[String] = Nil,
) derives CanEqual

case class EntityImpactPreview(
    entity: Entity,
    affectedCrystals: List[CrystalImpactPreview],
) derives CanEqual
