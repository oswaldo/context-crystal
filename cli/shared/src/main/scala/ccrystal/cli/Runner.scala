package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.store.CrystalStore
import ccrystal.core.dag.CrystalDAG
import ccrystal.core.audit.CrystalAuditor
import ccrystal.core.codec.given
import io.circe.syntax.*
import java.time.Instant

class Runner(val store: CrystalStore):

  def run(cmd: CliCommand): Either[String, String] = cmd match
    case CliCommand.Init(name, goalTitle, intent, authorOpt, authorKindOpt) =>
      val now        = Instant.now().toString
      val authorKind = authorKindOpt.getOrElse(EntityKind.Human)
      val authorName = authorOpt.getOrElse("Operator")

      for
        resolvedAuthor <- store.resolveOrCreateEntity(authorName, authorKind)
        goal = Goal(
          title = goalTitle,
          intent = intent.getOrElse(goalTitle),
          status = GoalStatus.InProgress,
          acceptanceCriteria = Nil,
        )
        rootNode = DAGNode(
          id = s"node-$name-init",
          parentIds = Nil,
          timestamp = now,
          actorId = resolvedAuthor.id,
          kind = NodeKind.HumanPrompt,
          contentSummary = s"Initialized crystal '$name' with goal: $goalTitle",
        )
        crystal = ContextCrystal(
          schemaVersion = "1.0.0",
          id = name,
          name = Some(name),
          createdAt = now,
          updatedAt = now,
          defaultAuthorId = Some(resolvedAuthor.id),
          goal = goal,
          entities = List(resolvedAuthor),
          dag = DAG(rootNode.id, List(rootNode)),
        )
        _ <- store.save(crystal)
      yield s"Initialized crystal '$name' at .ccrystals/$name (Author: ${resolvedAuthor.name} [${resolvedAuthor.id}])"

    case CliCommand.ListCrystals(statusOpt, jsonOutput) =>
      store.list().map { crystals =>
        val filtered = statusOpt match
          case Some(st) => crystals.filter(_.goal.status == st)
          case None     => crystals

        if jsonOutput then filtered.asJson.spaces2
        else
          val sb = new java.lang.StringBuilder()
          sb.append(s"Found ${filtered.size} crystal(s):\n")
          filtered.foreach { c =>
            val done         = c.goal.acceptanceCriteria.count(_.completed)
            val total        = c.goal.acceptanceCriteria.size
            val openLessons  = c.lessonsLearned.count(_.status == LessonStatus.Open)
            val activeLeases = c.transientLeases.count(_.status == TransientLeaseStatus.Active)
            sb.append(
              s"- ${c.id} [${c.goal.status}] Tasks: $done/$total | Active Leases: $activeLeases | Open Lessons: $openLessons\n",
            )
          }
          sb.toString
      }

    case CliCommand.TaskAdd(crystalId, desc) =>
      store.load(crystalId).flatMap { crystal =>
        val taskId = s"task-${crystal.goal.acceptanceCriteria.size + 1}"
        val newAc  = AcceptanceCriterion(taskId, desc, completed = false)
        val updatedGoal = crystal.goal.copy(
          acceptanceCriteria = crystal.goal.acceptanceCriteria :+ newAc,
        )
        val updated = crystal.copy(
          updatedAt = Instant.now().toString,
          goal = updatedGoal,
        )
        store.save(updated).map(_ => s"Added task '$taskId' to $crystalId: $desc")
      }

    case CliCommand.TaskDone(crystalId, taskId) =>
      store.load(crystalId).flatMap { crystal =>
        val updatedAcs = crystal.goal.acceptanceCriteria.map { ac =>
          if ac.id == taskId then ac.copy(completed = true) else ac
        }
        val updated = crystal.copy(
          updatedAt = Instant.now().toString,
          goal = crystal.goal.copy(acceptanceCriteria = updatedAcs),
        )
        store.save(updated).map(_ => s"Marked task '$taskId' as completed in $crystalId")
      }

    case CliCommand.TaskList(crystalId) =>
      store.load(crystalId).map { crystal =>
        val sb = new java.lang.StringBuilder()
        sb.append(s"Tasks for '${crystal.id}':\n")
        crystal.goal.acceptanceCriteria.foreach { ac =>
          val mark = if ac.completed then "[x]" else "[ ]"
          sb.append(s"$mark ${ac.id}: ${ac.description}\n")
        }
        sb.toString
      }

    case CliCommand.NodeAdd(crystalId, kind, summary, parentIds, authorOpt, fidelity) =>
      store.load(crystalId).flatMap { crystal =>
        val now = Instant.now().toString
        val parents =
          if parentIds.isEmpty then crystal.dag.nodes.lastOption.map(n => List(n.id)).getOrElse(Nil)
          else parentIds
        val nodeId  = s"node-${crystal.dag.nodes.size + 1}"
        val actorId = authorOpt.orElse(crystal.defaultAuthorId).getOrElse("usr_operator")
        val newNode = DAGNode(
          id = nodeId,
          parentIds = parents,
          timestamp = now,
          actorId = actorId,
          kind = kind,
          contentSummary = summary,
          artifactIds = Nil,
          fidelity = fidelity,
        )

        for
          cDag       <- CrystalDAG.fromDAG(crystal.dag)
          updatedDag <- cDag.addNode(newNode)
          updatedCrystal = crystal.copy(
            updatedAt = now,
            dag = updatedDag.raw,
          )
          _ <- store.save(updatedCrystal)
        yield s"Appended node '$nodeId' [$kind] [${fidelity.toString.toLowerCase}] (Author: $actorId) to $crystalId: $summary"
      }

    case CliCommand.EntityList =>
      store.getEntityRegistry().map { reg =>
        val sb = new java.lang.StringBuilder()
        sb.append(s"=== Cave Entity Registry (${reg.entities.size} registered) ===\n")
        reg.caveId.foreach(c => sb.append(s"Cave Scope: $c\n"))
        sb.append(s"Authorship Mode: ${reg.authorshipMode}\n\n")
        if reg.entities.isEmpty then sb.append("No entities registered yet.\n")
        else
          reg.entities.values.foreach { e =>
            sb.append(s"- ${e.id} [${e.kind}] name: '${e.name}'\n")
          }
        sb.toString
      }

    case CliCommand.EntityRegister(name, kind) =>
      store.resolveOrCreateEntity(name, kind).map { entity =>
        s"Registered entity '${entity.name}' with ID '${entity.id}' in cave registry."
      }

    case CliCommand.LessonAdd(crystalId, friction, rootCause, action) =>
      store.load(crystalId).flatMap { crystal =>
        val lessonId  = s"lesson-${crystal.lessonsLearned.size + 1}"
        val newLesson = LessonLearned(lessonId, friction, rootCause, action, LessonStatus.Open)
        val updated = crystal.copy(
          updatedAt = Instant.now().toString,
          lessonsLearned = crystal.lessonsLearned :+ newLesson,
        )
        store.save(updated).map(_ => s"Logged lesson '$lessonId' in $crystalId: $friction")
      }

    case CliCommand.LessonAction(crystalId, lessonId, actionText, actorId) =>
      store.load(crystalId).flatMap { crystal =>
        val now = Instant.now().toString
        val updatedLessons = crystal.lessonsLearned.map { l =>
          if l.id == lessonId then
            l.copy(
              status = LessonStatus.Actioned,
              actionAuditTrail = l.actionAuditTrail :+ ActionAuditEntry(now, actionText, actorId),
            )
          else l
        }
        val updated = crystal.copy(
          updatedAt = now,
          lessonsLearned = updatedLessons,
        )
        store.save(updated).map(_ => s"Actioned lesson '$lessonId' in $crystalId: $actionText")
      }

    case CliCommand.LessonList(crystalId) =>
      store.load(crystalId).map { crystal =>
        val sb = new java.lang.StringBuilder()
        sb.append(s"Lessons for '${crystal.id}':\n")
        crystal.lessonsLearned.foreach { l =>
          sb.append(s"- [${l.status}] ${l.id}: ${l.observedFriction}\n")
        }
        sb.toString
      }

    case CliCommand.TransientLeaseCmd(crystalId, rType, path, desc, policy) =>
      store.load(crystalId).flatMap { crystal =>
        val leaseId = s"lease-${crystal.transientLeases.size + 1}"
        val newLease = TransientLease(
          leaseId,
          rType,
          path,
          desc,
          policy,
          TransientLeaseStatus.Active,
          Instant.now().toString,
        )
        val updated = crystal.copy(
          updatedAt = Instant.now().toString,
          transientLeases = crystal.transientLeases :+ newLease,
        )
        store.save(updated).map(_ => s"Registered transient lease '$leaseId' in $crystalId: $desc")
      }

    case CliCommand.TransientClean(crystalId, leaseId) =>
      store.load(crystalId).flatMap { crystal =>
        val updatedLeases = crystal.transientLeases.map { lease =>
          if lease.id == leaseId then lease.copy(status = TransientLeaseStatus.Cleaned) else lease
        }
        val updated = crystal.copy(
          updatedAt = Instant.now().toString,
          transientLeases = updatedLeases,
        )
        store.save(updated).map(_ => s"Cleaned transient lease '$leaseId' in $crystalId")
      }

    case CliCommand.TransientList(crystalId) =>
      store.load(crystalId).map { crystal =>
        val sb = new java.lang.StringBuilder()
        sb.append(s"Transient leases for '${crystal.id}':\n")
        crystal.transientLeases.foreach { l =>
          sb.append(s"- [${l.status}] ${l.id} (${l.resourceType}): ${l.description}\n")
        }
        sb.toString
      }

    case CliCommand.Cast(crystalId, depth, summaryOnly) =>
      store.load(crystalId).map { crystal =>
        val sb = new java.lang.StringBuilder()
        sb.append(s"=== CONTEXT CRYSTAL CAST: ${crystal.id} ===\n\n")
        sb.append(s"## Goal: ${crystal.goal.title}\n")
        sb.append(s"Intent: ${crystal.goal.intent}\n")
        sb.append(s"Status: ${crystal.goal.status}\n\n")

        sb.append("## Active Tasks:\n")
        crystal.goal.acceptanceCriteria.foreach { ac =>
          val mark = if ac.completed then "[x]" else "[ ]"
          sb.append(s"- $mark ${ac.id}: ${ac.description}\n")
        }
        sb.append("\n")

        if !summaryOnly then
          sb.append(s"## Recent State Transitions (Depth: $depth):\n")
          val recentNodes = crystal.dag.nodes.takeRight(depth)
          recentNodes.foreach { n =>
            sb.append(s"- [${n.kind}] (${n.actorId}): ${n.contentSummary}\n")
          }
          sb.append("\n")

          val openLessons = crystal.lessonsLearned.filter(_.status == LessonStatus.Open)
          if openLessons.nonEmpty then
            sb.append("## Unresolved Lessons Learned:\n")
            openLessons.foreach(l => sb.append(s"- [${l.id}] ${l.observedFriction}\n"))
            sb.append("\n")

          val activeLeases = crystal.transientLeases.filter(_.status == TransientLeaseStatus.Active)
          if activeLeases.nonEmpty then
            sb.append("## Active Transient Leases (Must be cleaned before conclusion):\n")
            activeLeases
              .foreach(l => sb.append(s"- [${l.id}] ${l.resourceType}: ${l.description}\n"))
            sb.append("\n")

        sb.append("=== END CAST ===")
        sb.toString
      }

    case CliCommand.Refresh(crystalIdOpt, all) =>
      if all then
        store.list().flatMap { crystals =>
          val results  = crystals.map(c => store.save(c))
          val failures = results.collect { case Left(err) => err }
          if failures.isEmpty then
            Right(s"Refreshed derived views for ${crystals.size} crystal(s).")
          else Left(s"Errors during batch refresh: ${failures.mkString("; ")}")
        }
      else
        crystalIdOpt match
          case Some(id) =>
            store.load(id).flatMap { crystal =>
              store
                .save(crystal)
                .map(_ =>
                  s"Refreshed derived views (tasks.md, lessons-learned.md, transient.json) for '$id'.",
                )
            }
          case None =>
            Left("Please specify a crystal ID or use --all to refresh all crystals.")

    case CliCommand.Batch(script) =>
      Left("Batch execution handled via BatchExecutor")
