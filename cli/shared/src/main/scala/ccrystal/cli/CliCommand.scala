package ccrystal.cli

import ccrystal.core.model.*

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
  )
  case ListCrystals(status: Option[GoalStatus], jsonOutput: Boolean)
  case TaskAdd(crystalId: String, description: String)
  case TaskDone(crystalId: String, taskId: String)
  case TaskList(crystalId: String)
  case NodeAdd(
      crystalId: String,
      kind: NodeKind,
      summary: String,
      parentIds: List[String],
      author: Option[String] = None,
      fidelity: CaptureFidelity = CaptureFidelity.Inferred,
      anchor: Option[String] = None,
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
  )
  case TransientClean(crystalId: String, leaseId: String)
  case TransientList(crystalId: String)
  case EntityList
  case EntityRegister(name: String, kind: EntityKind)
  case Cast(crystalId: String, depth: Int = 10, summaryOnly: Boolean = false)
  case Refresh(crystalId: Option[String], all: Boolean)
  case Batch(scriptOrChain: String)
