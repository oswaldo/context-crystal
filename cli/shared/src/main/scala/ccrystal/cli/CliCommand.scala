package ccrystal.cli

import ccrystal.core.model.*

enum CliCommand derives CanEqual:
  case Init(name: String, goalTitle: String, intent: Option[String])
  case ListCrystals(status: Option[GoalStatus], jsonOutput: Boolean)
  case TaskAdd(crystalId: String, description: String)
  case TaskDone(crystalId: String, taskId: String)
  case TaskList(crystalId: String)
  case NodeAdd(crystalId: String, kind: NodeKind, summary: String, parentIds: List[String])
  case LessonAdd(crystalId: String, friction: String, rootCause: Option[String], action: Option[String])
  case LessonAction(crystalId: String, lessonId: String, actionText: String, actorId: String)
  case LessonList(crystalId: String)
  case TransientLeaseCmd(crystalId: String, resourceType: TransientResourceType, path: Option[String], description: String, policy: DisposalPolicy)
  case TransientClean(crystalId: String, leaseId: String)
  case TransientList(crystalId: String)
  case Cast(crystalId: String, depth: Int = 10, summaryOnly: Boolean = false)
  case Batch(scriptOrChain: String)
