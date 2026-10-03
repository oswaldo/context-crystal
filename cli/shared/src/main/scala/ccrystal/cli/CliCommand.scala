package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.dag.SliceParams

enum SliceFormat derives CanEqual:
  case Prompt
  case Human
  case Json

enum CliCommand derives CanEqual:
  case Init(
      name: String,
      goalTitle: String,
      intent: Option[String],
      author: Option[String] = None,
      authorKind: Option[EntityKind] = None,
      createdAt: Option[String] = None,
      tasks: List[String] = Nil,
  )
  case TaskAdd(crystalId: String, description: String)
  case TaskDone(crystalId: String, taskId: String)
  case TaskList(crystalId: String)
  case GoalTransition(
      crystalId: String,
      status: GoalStatus,
      summary: Option[String] = None,
  )
  case NodeAdd(
      crystalId: String,
      kind: NodeKind,
      summary: String,
      parentIds: List[String],
      author: Option[String] = None,
      fidelity: CaptureFidelity = CaptureFidelity.Inferred,
      anchor: Option[String] = None,
      timestamp: Option[String] = None,
      inputArtifactIds: List[String] = Nil,
      outputArtifactIds: List[String] = Nil,
      preconditionArtifactIds: List[String] = Nil,
  )
  case ArtifactList(
      cave: Boolean = false,
      crystalId: Option[String] = None,
      jsonOutput: Boolean = false,
  )
  case ArtifactRegister(
      id: String,
      name: Option[String] = None,
      substrate: ArtifactSubstrate = ArtifactSubstrate.Virtual,
      role: ArtifactRole = ArtifactRole.Target,
      uri: Option[String] = None,
      mediaType: Option[String] = None,
      description: Option[String] = None,
      locationName: Option[String] = None,
      civicAddress: Option[String] = None,
      geoUri: Option[String] = None,
      benchCoordinates: Option[String] = None,
      cave: Boolean = false,
      crystalId: Option[String] = None,
  )
  case ArtifactInspect(
      id: String,
      crystalId: Option[String] = None,
      jsonOutput: Boolean = false,
  )
  case Slice(
      crystalId: String,
      from: Option[String] = None,
      to: Option[String] = None,
      head: Option[Int] = None,
      tail: Option[Int] = None,
      format: SliceFormat = SliceFormat.Prompt,
      forkTo: Option[String] = None,
      prune: Boolean = false,
  )
  case LessonAdd(
      crystalId: String,
      friction: String,
      rootCause: Option[String],
      action: Option[String],
  )
  case LessonAction(crystalId: String, lessonId: String, actionText: String, actorId: String)
  case LessonList(crystalId: String)
  case TransientLeaseCmd(
      crystalId: String,
      resourceType: TransientResourceType,
      path: Option[String],
      description: String,
      policy: DisposalPolicy,
      acquiredAt: Option[String] = None,
  )
  case TransientClean(crystalId: String, leaseId: String)
  case TransientList(crystalId: String)
  case EntityList
  case EntityRegister(name: String, kind: EntityKind)
  case EntityDeregister(entityId: String, force: Boolean = false)
  case EntityConventions
  case Cast(
      crystalId: String,
      from: Option[String] = None,
      to: Option[String] = None,
      tail: Option[Int] = None,
      depth: Int = 10,
      summaryOnly: Boolean = false,
  )
  case Refresh(crystalId: Option[String], all: Boolean)
  case Batch(scriptOrChain: String)
  case Prune(
      crystalId: Option[String] = None,
      olderThan: Option[String] = None,
      all: Boolean = false,
      dryRun: Boolean = false,
      force: Boolean = false,
  )
  case Archive(crystalId: String)
  case Unarchive(crystalId: String)
  case Melt(
      crystalId: String,
      from: String,
      to: String,
      summary: Option[String] = None,
      anchor: Option[String] = None,
  )
  case Triage(
      filterAging: Option[AgingState] = None,
      includeArchived: Boolean = true,
      jsonOutput: Boolean = false,
  )
  case Mcp(transport: String = "stdio")
  case AgentDoctorCmd(jsonOutput: Boolean = false, verbose: Boolean = false)
  case AgentInstallCmd(
      target: Option[String] = None,
      dryRun: Boolean = false,
      force: Boolean = false,
  )
  case ForAi
  case Search(
      filter: ccrystal.core.model.search.CrystalFilter,
      jsonOutput: Boolean = false,
  )
  case Stats(
      filter: Option[ccrystal.core.model.search.CrystalFilter] = None,
      detailed: Boolean = false,
      jsonOutput: Boolean = false,
  )

  def castSliceParams: SliceParams = this match
    case Cast(_, from, to, tail, depth, _) =>
      val effTail = tail.orElse(if from.isEmpty && to.isEmpty then Some(depth) else None)
      SliceParams(from = from, to = to, tail = effTail)
    case _ => SliceParams()
