package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.store.CrystalStore
import ccrystal.core.dag.{CrystalDAG, CrystalSlicer, SliceParams}
import ccrystal.core.audit.CrystalAuditor
import ccrystal.core.codec.given
import io.circe.syntax.*
import java.time.Instant

object Runner:
  val defaultConfirmPrompt: String => Boolean = { prompt =>
    print(prompt)
    Console.out.flush()
    val input = scala.io.StdIn.readLine()
    if input == null then false
    else
      val trimmed = input.trim.toLowerCase
      trimmed == "y" || trimmed == "yes"
  }

class Runner(
    val store: CrystalStore,
    val confirmPrompt: String => Boolean = Runner.defaultConfirmPrompt,
):

  def run(cmd: CliCommand): Either[String, String] = cmd match
    case CliCommand.Init(name, goalTitle, intent, authorOpt, authorKindOpt, createdAtOpt) =>
      val now        = createdAtOpt.getOrElse(Instant.now().toString)
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
          sb.append(s"- $mark ${ac.id}: ${ac.description}\n")
        }
        sb.toString
      }

    case CliCommand.NodeAdd(
          crystalId,
          kind,
          summary,
          parentIds,
          authorOpt,
          fidelity,
          anchorOpt,
          timestampOpt,
        ) =>
      store.load(crystalId).flatMap { crystal =>
        val now      = Instant.now().toString
        val nodeTime = timestampOpt.getOrElse(now)
        val parents =
          if parentIds.isEmpty then crystal.dag.nodes.lastOption.map(n => List(n.id)).getOrElse(Nil)
          else parentIds
        val nodeId  = s"node-${crystal.dag.nodes.size + 1}"
        val actorId = authorOpt.orElse(crystal.defaultAuthorId).getOrElse("usr_operator")
        val newNode = DAGNode(
          id = nodeId,
          parentIds = parents,
          timestamp = nodeTime,
          actorId = actorId,
          kind = kind,
          contentSummary = summary,
          anchor = anchorOpt,
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
        yield
          val anchorMsg = anchorOpt.fold("")(a => s" <anchor: $a>")
          s"Appended node '$nodeId' [$kind]$anchorMsg [${fidelity.toString.toLowerCase}] (Author: $actorId) to $crystalId: $summary"
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

    case CliCommand.TransientLeaseCmd(crystalId, rType, path, desc, policy, acquiredAtOpt) =>
      store.load(crystalId).flatMap { crystal =>
        val now       = Instant.now().toString
        val leaseTime = acquiredAtOpt.getOrElse(now)
        val leaseId   = s"lease-${crystal.transientLeases.size + 1}"
        val newLease = TransientLease(
          leaseId,
          rType,
          path,
          desc,
          policy,
          TransientLeaseStatus.Active,
          leaseTime,
        )
        val updated = crystal.copy(
          updatedAt = now,
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

    case CliCommand.Slice(crystalId, fromOpt, toOpt, headOpt, tailOpt, format, forkToOpt, prune) =>
      store.load(crystalId).flatMap { crystal =>
        val params = SliceParams(fromOpt, toOpt, headOpt, tailOpt)
        CrystalSlicer.slice(crystal, params).flatMap { slice =>
          forkToOpt match
            case Some(forkName) =>
              val now = Instant.now().toString
              val child =
                slice.fork(newId = forkName, newName = Some(forkName), createdAt = Some(now))
              for
                _ <- store.save(child)
                _ <-
                  if prune then
                    val updatedParent = crystal.copy(
                      updatedAt = now,
                      metadata = crystal.metadata ++ Map(
                        "fracture_cleavage_to" -> forkName,
                        "fracture_anchor"      -> slice.entryNode.id,
                        "fractured_at"         -> now,
                      ),
                    )
                    store.save(updatedParent)
                  else Right(())
              yield s"Sliced fragment (${slice.slicedNodes.size} node(s)) and forked to new crystal '$forkName' at .ccrystals/$forkName"

            case None =>
              format match
                case SliceFormat.Prompt =>
                  val sb         = new java.lang.StringBuilder()
                  val anchorInfo = slice.entryNode.anchor.fold("")(a => s" (Anchor: $a)")
                  sb.append(s"=== CONTEXT CRYSTAL SLICE: ${crystal.id} ===\n\n")
                  sb.append(s"Slice Entry: ${slice.entryNode.id}$anchorInfo\n")
                  sb.append(s"Nodes: ${slice.slicedNodes.size}\n\n")
                  sb.append("## State Transitions:\n")
                  slice.slicedNodes.foreach { n =>
                    val anchorTag = n.anchor.fold("")(a => s" <anchor: $a>")
                    sb.append(s"- [${n.kind}] (${n.actorId})$anchorTag: ${n.contentSummary}\n")
                  }
                  sb.append("\n=== END SLICE ===")
                  Right(sb.toString)

                case SliceFormat.Human =>
                  val sb = new java.lang.StringBuilder()
                  sb.append(s"Crystal '${crystal.id}' Slice Summary:\n")
                  sb.append(
                    s"- Range: ${slice.slicedNodes.head.id} -> ${slice.slicedNodes.last.id}\n",
                  )
                  sb.append(s"- Node Count: ${slice.slicedNodes.size}\n")
                  val anchors = slice.slicedNodes.flatMap(_.anchor)
                  if anchors.nonEmpty then sb.append(s"- Anchors: ${anchors.mkString(", ")}\n")
                  Right(sb.toString)

                case SliceFormat.Json =>
                  Right(slice.normalizedDag.asJson.spaces2)
        }
      }

    case CliCommand.Batch(script) =>
      Left("Batch execution handled via BatchExecutor")

    case CliCommand.Delete(crystalId, force) =>
      val limit = getPreviewLimit
      store.previewCrystalDeletion(crystalId, limit).flatMap { preview =>
        if !force then
          print(formatCrystalDeletionPreview(preview))
          val confirmed = confirmPrompt(
            s"Are you sure you want to permanently delete crystal '$crystalId' and all associated state? [y/N]: ",
          )
          if !confirmed then Right(s"Deletion of crystal '$crystalId' cancelled.")
          else executeDelete(crystalId)
        else executeDelete(crystalId)
      }

    case CliCommand.EntityDeregister(entityId, force) =>
      val limit = getPreviewLimit
      store.previewEntityDeregistration(entityId, limit).flatMap { preview =>
        if !force then
          val sb = new java.lang.StringBuilder()
          sb.append(
            s"\n--- IRRECOVERABLE DEREGISTRATION IMPACT: Entity '$entityId' (${preview.entity.name} [${preview.entity.kind}]) ---\n",
          )
          if preview.affectedCrystals.isEmpty then
            sb.append("No crystals are associated with this entity.\n")
          else
            sb.append(
              s"WARNING: Deregistering this entity will cascade-delete ${preview.affectedCrystals.size} crystal(s):\n",
            )
            preview.affectedCrystals.foreach { cp =>
              sb.append(
                s"- ${cp.crystalId}: ${cp.goalTitle} (${cp.totalNodes} nodes, ${cp.totalTasks} tasks)\n",
              )
            }
          sb.append("------------------------------------------------------------\n")
          print(sb.toString)
          val confirmed = confirmPrompt(
            s"Are you sure you want to deregister entity '$entityId' and cascade-delete all associated crystals? [y/N]: ",
          )
          if !confirmed then Right(s"Deregistration of entity '$entityId' cancelled.")
          else executeDeregister(entityId)
        else executeDeregister(entityId)
      }

  private def getPreviewLimit: Int =
    sys.env.get("CCRYSTAL_DELETION_PREVIEW_LIMIT").flatMap(_.toIntOption).getOrElse(10)

  private def executeDelete(crystalId: String): Either[String, String] =
    store.deleteCrystal(crystalId).map { res =>
      val cascadeMsg =
        if res.deregisteredEntityIds.nonEmpty then
          s" (Cascade-deregistered orphaned entities: ${res.deregisteredEntityIds.mkString(", ")})"
        else ""
      s"Permanently deleted crystal '$crystalId'$cascadeMsg"
    }

  private def executeDeregister(entityId: String): Either[String, String] =
    store.deregisterEntity(entityId).map { res =>
      val cascadeMsg =
        if res.deletedCrystalIds.nonEmpty then
          s" (Cascade-deleted crystals: ${res.deletedCrystalIds.mkString(", ")})"
        else ""
      s"Deregistered entity '$entityId' from cave registry$cascadeMsg"
    }

  private def formatCrystalDeletionPreview(preview: CrystalImpactPreview): String =
    val sb = new java.lang.StringBuilder()
    sb.append(s"\n--- IRRECOVERABLE DELETION IMPACT: Crystal '${preview.crystalId}' ---\n")
    sb.append(s"Goal: ${preview.goalTitle} [${preview.goalStatus}]\n")
    if preview.intent.nonEmpty then sb.append(s"Intent: ${preview.intent}\n")
    sb.append(s"Created: ${preview.createdAt} | Updated: ${preview.updatedAt}\n\n")

    sb.append(s"DAG Nodes (${preview.totalNodes} total):\n")
    preview.nodeSummaries.foreach(s => sb.append(s"  - $s\n"))
    if preview.totalNodes > preview.nodeSummaries.size then
      sb.append(s"  ... and ${preview.totalNodes - preview.nodeSummaries.size} older nodes\n")

    sb.append(s"\nTasks (${preview.totalTasks} total, ${preview.completedTasks} completed):\n")
    preview.taskDescriptions.foreach(t => sb.append(s"  - $t\n"))
    if preview.totalTasks > preview.taskDescriptions.size then
      sb.append(s"  ... and ${preview.totalTasks - preview.taskDescriptions.size} older tasks\n")

    if preview.totalLessons > 0 then
      sb.append(
        s"\nLessons Learned (${preview.totalLessons} total, ${preview.openLessons} open):\n",
      )
      preview.lessonFrictions.foreach(l => sb.append(s"  - $l\n"))
      if preview.totalLessons > preview.lessonFrictions.size then
        sb.append(
          s"  ... and ${preview.totalLessons - preview.lessonFrictions.size} older lessons\n",
        )

    if preview.totalLeases > 0 then
      sb.append(
        s"\nTransient Leases (${preview.totalLeases} total, ${preview.activeLeases} active):\n",
      )
      preview.leaseDescriptions.foreach(ls => sb.append(s"  - $ls\n"))
      if preview.totalLeases > preview.leaseDescriptions.size then
        sb.append(
          s"  ... and ${preview.totalLeases - preview.leaseDescriptions.size} older leases\n",
        )

    if preview.cascadingDeregisterEntityIds.nonEmpty then
      sb.append("\nCascading Entity Deregistration:\n")
      preview.cascadingDeregisterEntityIds.foreach { eid =>
        sb.append(s"  ! Entity '$eid' will be deregistered from cave (no remaining crystals)\n")
      }

    sb.append("------------------------------------------------------------\n")
    sb.toString
