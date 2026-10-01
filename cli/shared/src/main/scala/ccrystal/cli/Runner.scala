package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.store.CrystalStore
import ccrystal.core.dag.{ContextHydrator, CrystalDAG, CrystalSlicer, HydrationParams, SliceParams}
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
    case CliCommand.Init(name, goalTitle, intent, authorOpt, authorKindOpt, createdAtOpt, tasks) =>
      val now        = createdAtOpt.getOrElse(Instant.now().toString)
      val authorKind = authorKindOpt.getOrElse(EntityKind.Human)
      val authorName = authorOpt.getOrElse("Operator")

      for
        resolvedAuthor <- store.resolveOrCreateEntity(authorName, authorKind)
        initialTasks = tasks.zipWithIndex.map { case (desc, idx) =>
          AcceptanceCriterion(s"task-${idx + 1}", desc, completed = false)
        }
        goal = Goal(
          title = goalTitle,
          intent = intent.getOrElse(goalTitle),
          status = GoalStatus.InProgress,
          acceptanceCriteria = initialTasks,
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

    case CliCommand.ListCrystals(statusOpt, jsonOutput, includeArchived) =>
      store.list(includeArchived).map { crystals =>
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
            val archivedTag  = if store.isArchived(c.id) then " (archived)" else ""
            sb.append(
              s"- ${c.id} [${c.goal.status}]$archivedTag Tasks: $done/$total | Active Leases: $activeLeases | Open Lessons: $openLessons\n",
            )
          }
          sb.toString
      }

    case CliCommand.Search(filter, jsonOutput) =>
      store.search(filter).map { matches =>
        if jsonOutput then matches.asJson.spaces2
        else
          val sb = new java.lang.StringBuilder()
          val header = filter.query match
            case Some(q) => s"Found ${matches.size} crystal(s) matching query '$q':\n"
            case None    => s"Found ${matches.size} crystal(s):\n"
          sb.append(header)
          matches.foreach { m =>
            val c            = m.crystal
            val done         = c.goal.acceptanceCriteria.count(_.completed)
            val total        = c.goal.acceptanceCriteria.size
            val openLessons  = c.lessonsLearned.count(_.status == LessonStatus.Open)
            val activeLeases = c.transientLeases.count(_.status == TransientLeaseStatus.Active)
            val archivedTag  = if m.isArchived then " (archived)" else ""
            val agingTag     = s"[${m.agingCategory}]"
            val reasonsStr =
              if m.matchedReasons.nonEmpty then s" | ${m.matchedReasons.mkString(", ")}" else ""
            sb.append(
              s"- ${c.id} [${c.goal.status}]$archivedTag $agingTag Tasks: $done/$total | Active Leases: $activeLeases | Open Lessons: $openLessons$reasonsStr\n",
            )
          }
          sb.toString
      }

    case CliCommand.TaskAdd(crystalId, desc) =>
      var assignedTaskId = ""
      store
        .update(crystalId) { crystal =>
          val taskId = s"task-${crystal.goal.acceptanceCriteria.size + 1}"
          assignedTaskId = taskId
          val newAc = AcceptanceCriterion(taskId, desc, completed = false)
          val updatedGoal = crystal.goal.copy(
            acceptanceCriteria = crystal.goal.acceptanceCriteria :+ newAc,
          )
          Right(
            crystal.copy(
              updatedAt = Instant.now().toString,
              goal = updatedGoal,
            ),
          )
        }
        .map(_ => s"Added task '$assignedTaskId' to $crystalId: $desc")

    case CliCommand.TaskDone(crystalId, taskId) =>
      store
        .update(crystalId) { crystal =>
          val updatedAcs = crystal.goal.acceptanceCriteria.map { ac =>
            if ac.id == taskId then ac.copy(completed = true) else ac
          }
          Right(
            crystal.copy(
              updatedAt = Instant.now().toString,
              goal = crystal.goal.copy(acceptanceCriteria = updatedAcs),
            ),
          )
        }
        .map(_ => s"Marked task '$taskId' as completed in $crystalId")

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

    case CliCommand.GoalTransition(crystalId, newStatus, summaryOpt) =>
      var resolutionMsg = ""
      store
        .update(crystalId) { crystal =>
          val now = Instant.now().toString
          val (updatedDag, resMsg) = summaryOpt match
            case Some(summary) =>
              val parents = crystal.dag.nodes.lastOption.map(n => List(n.id)).getOrElse(Nil)
              val nodeId  = s"node-${crystal.dag.nodes.size + 1}"
              val actorId = crystal.defaultAuthorId.getOrElse("usr_operator")
              val resolutionNode = DAGNode(
                id = nodeId,
                parentIds = parents,
                timestamp = now,
                actorId = actorId,
                fidelity = CaptureFidelity.Inferred,
                kind = NodeKind.Resolution,
                contentSummary = summary,
              )
              (
                crystal.dag.copy(nodes = crystal.dag.nodes :+ resolutionNode),
                s" and appended resolution node '$nodeId'",
              )
            case None =>
              (crystal.dag, "")

          resolutionMsg = resMsg
          Right(
            crystal.copy(
              updatedAt = now,
              goal = crystal.goal.copy(status = newStatus),
              dag = updatedDag,
            ),
          )
        }
        .map { _ =>
          val statusDesc = newStatus match
            case GoalStatus.ConcludedSuccess   => "concluded successfully"
            case GoalStatus.ConcludedAbandoned => "concluded as abandoned"
            case GoalStatus.InProgress         => "transitioned to in_progress"
          s"Crystal '$crystalId' $statusDesc$resolutionMsg"
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
          inputArtifactIds,
          outputArtifactIds,
          preconditionArtifactIds,
        ) =>
      var resultMsg = ""
      store
        .update(crystalId) { crystal =>
          val now      = Instant.now().toString
          val nodeTime = timestampOpt.getOrElse(now)
          val parents =
            if parentIds.isEmpty then
              crystal.dag.nodes.lastOption.map(n => List(n.id)).getOrElse(Nil)
            else parentIds
          val nodeId  = s"node-${crystal.dag.nodes.size + 1}"
          val actorId = authorOpt.orElse(crystal.defaultAuthorId).getOrElse("usr_operator")
          val allArtifactIds =
            (inputArtifactIds ++ outputArtifactIds ++ preconditionArtifactIds).distinct
          val newNode = DAGNode(
            id = nodeId,
            parentIds = parents,
            timestamp = nodeTime,
            actorId = actorId,
            kind = kind,
            contentSummary = summary,
            anchor = anchorOpt,
            artifactIds = allArtifactIds,
            inputArtifactIds = inputArtifactIds,
            outputArtifactIds = outputArtifactIds,
            preconditionArtifactIds = preconditionArtifactIds,
            fidelity = fidelity,
          )

          for
            cDag       <- CrystalDAG.fromDAG(crystal.dag)
            updatedDag <- cDag.addNode(newNode)
          yield
            val anchorMsg = anchorOpt.fold("")(a => s" <anchor: $a>")
            val artParts = List(
              Option.when(inputArtifactIds.nonEmpty)(s"inputs: ${inputArtifactIds.mkString(",")}"),
              Option.when(outputArtifactIds.nonEmpty)(
                s"outputs: ${outputArtifactIds.mkString(",")}",
              ),
              Option.when(preconditionArtifactIds.nonEmpty)(
                s"preconditions: ${preconditionArtifactIds.mkString(",")}",
              ),
            ).flatten
            val artMsg = if artParts.nonEmpty then s" [${artParts.mkString("; ")}]" else ""
            resultMsg =
              s"Appended node '$nodeId' [$kind]$anchorMsg$artMsg [${fidelity.toString.toLowerCase}] (Author: $actorId) to $crystalId: $summary"
            crystal.copy(
              updatedAt = now,
              dag = updatedDag.raw,
            )
        }
        .map(_ => resultMsg)

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
      var assignedLessonId = ""
      store
        .update(crystalId) { crystal =>
          val lessonId = s"lesson-${crystal.lessonsLearned.size + 1}"
          assignedLessonId = lessonId
          val newLesson = LessonLearned(lessonId, friction, rootCause, action, LessonStatus.Open)
          Right(
            crystal.copy(
              updatedAt = Instant.now().toString,
              lessonsLearned = crystal.lessonsLearned :+ newLesson,
            ),
          )
        }
        .map(_ => s"Logged lesson '$assignedLessonId' in $crystalId: $friction")

    case CliCommand.LessonAction(crystalId, lessonId, actionText, actorId) =>
      store
        .update(crystalId) { crystal =>
          val now = Instant.now().toString
          val updatedLessons = crystal.lessonsLearned.map { l =>
            if l.id == lessonId then
              l.copy(
                status = LessonStatus.Actioned,
                actionAuditTrail = l.actionAuditTrail :+ ActionAuditEntry(now, actionText, actorId),
              )
            else l
          }
          Right(
            crystal.copy(
              updatedAt = now,
              lessonsLearned = updatedLessons,
            ),
          )
        }
        .map(_ => s"Actioned lesson '$lessonId' in $crystalId: $actionText")

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
      var assignedLeaseId = ""
      store
        .update(crystalId) { crystal =>
          val now       = Instant.now().toString
          val leaseTime = acquiredAtOpt.getOrElse(now)
          val leaseId   = s"lease-${crystal.transientLeases.size + 1}"
          assignedLeaseId = leaseId
          val newLease = TransientLease(
            leaseId,
            rType,
            path,
            desc,
            policy,
            TransientLeaseStatus.Active,
            leaseTime,
          )
          Right(
            crystal.copy(
              updatedAt = now,
              transientLeases = crystal.transientLeases :+ newLease,
            ),
          )
        }
        .map(_ => s"Registered transient lease '$assignedLeaseId' in $crystalId: $desc")

    case CliCommand.TransientClean(crystalId, leaseId) =>
      store
        .update(crystalId) { crystal =>
          val updatedLeases = crystal.transientLeases.map { lease =>
            if lease.id == leaseId then lease.copy(status = TransientLeaseStatus.Cleaned) else lease
          }
          Right(
            crystal.copy(
              updatedAt = Instant.now().toString,
              transientLeases = updatedLeases,
            ),
          )
        }
        .map(_ => s"Cleaned transient lease '$leaseId' in $crystalId")

    case CliCommand.TransientList(crystalId) =>
      store.load(crystalId).map { crystal =>
        val sb = new java.lang.StringBuilder()
        sb.append(s"Transient leases for '${crystal.id}':\n")
        crystal.transientLeases.foreach { l =>
          sb.append(s"- [${l.status}] ${l.id} (${l.resourceType}): ${l.description}\n")
        }
        sb.toString
      }

    case CliCommand.ArtifactList(cave, crystalIdOpt, jsonOutput) =>
      val targetScope = if cave then None else crystalIdOpt
      store.listArtifacts(targetScope).map { artifacts =>
        if jsonOutput then artifacts.asJson.spaces2
        else
          val scopeDesc = targetScope match
            case Some(cId) => s"crystal '$cId'"
            case None      => "cave registry"
          val sb = new java.lang.StringBuilder()
          sb.append(s"=== Artifacts in $scopeDesc (${artifacts.size} total) ===\n")
          if artifacts.isEmpty then sb.append("No artifacts registered.\n")
          else
            artifacts.foreach { art =>
              val locStr = art.location
                .map(l => s" @ ${l.name}${l.benchCoordinates.map(b => s" ($b)").getOrElse("")}")
                .getOrElse("")
              val uriStr = art.uri.map(u => s" <$u>").getOrElse("")
              sb.append(s"- ${art.id} [${art.substrate}/${art.role}] '${art.name}'$locStr$uriStr\n")
            }
          sb.toString
      }

    case CliCommand.ArtifactRegister(
          id,
          nameOpt,
          substrate,
          role,
          uriOpt,
          mediaTypeOpt,
          descOpt,
          locNameOpt,
          civicAddrOpt,
          geoUriOpt,
          benchCoordsOpt,
          cave,
          crystalIdOpt,
        ) =>
      val location =
        if (
            locNameOpt.isDefined || civicAddrOpt.isDefined || geoUriOpt.isDefined || benchCoordsOpt.isDefined
          )
        then
          Some(
            PhysicalLocation(
              name = locNameOpt.getOrElse(id),
              civicAddress = civicAddrOpt,
              geoUri = geoUriOpt,
              benchCoordinates = benchCoordsOpt,
            ),
          )
        else None

      val artifact = Artifact(
        id = id,
        name = nameOpt.getOrElse(id),
        substrate = substrate,
        role = role,
        uri = uriOpt,
        mediaType = mediaTypeOpt,
        description = descOpt,
        location = location,
        metadata = Map.empty,
      )

      if crystalIdOpt.isDefined && !cave then
        val cId = crystalIdOpt.get
        store
          .update(cId) { crystal =>
            val updatedArtifacts = crystal.artifacts.filterNot(_.id == id) :+ artifact
            Right(
              crystal.copy(
                updatedAt = Instant.now().toString,
                artifacts = updatedArtifacts,
              ),
            )
          }
          .map { _ =>
            s"Registered artifact '$id' [${artifact.substrate}/${artifact.role}] in crystal '$cId'."
          }
      else
        store.registerArtifact(artifact).map { art =>
          s"Registered artifact '${art.id}' [${art.substrate}/${art.role}] in cave registry."
        }

    case CliCommand.ArtifactInspect(id, crystalIdOpt, jsonOutput) =>
      store.getArtifact(id, crystalIdOpt).flatMap {
        case Some(art) =>
          if jsonOutput then Right(art.asJson.spaces2)
          else
            val sb = new java.lang.StringBuilder()
            sb.append(s"=== Artifact: ${art.id} ===\n")
            sb.append(s"Name: ${art.name}\n")
            sb.append(s"Substrate: ${art.substrate}\n")
            sb.append(s"Role: ${art.role}\n")
            art.uri.foreach(u => sb.append(s"URI: $u\n"))
            art.mediaType.foreach(m => sb.append(s"Media Type: $m\n"))
            art.description.foreach(d => sb.append(s"Description: $d\n"))
            art.location.foreach { loc =>
              sb.append(s"Location Name: ${loc.name}\n")
              loc.civicAddress.foreach(a => sb.append(s"Civic Address: $a\n"))
              loc.geoUri.foreach(g => sb.append(s"Geo URI: $g\n"))
              loc.benchCoordinates.foreach(b => sb.append(s"Bench Coords: $b\n"))
            }
            if art.metadata.nonEmpty then sb.append(s"Metadata: ${art.metadata.asJson.noSpaces}\n")
            Right(sb.toString)
        case None =>
          val scopeMsg = crystalIdOpt
            .map(c => s" in crystal '$c' or cave")
            .getOrElse(" in cave registry")
          Left(s"Artifact '$id' not found$scopeMsg")
      }

    case castCmd: CliCommand.Cast =>
      store.load(castCmd.crystalId).flatMap { crystal =>
        ContextHydrator.hydrate(
          crystal,
          HydrationParams(slice = castCmd.castSliceParams, summaryOnly = castCmd.summaryOnly),
        )
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
                    store.update(crystalId) { parent =>
                      Right(
                        parent.copy(
                          updatedAt = now,
                          metadata = parent.metadata ++ Map(
                            "fracture_cleavage_to" -> forkName,
                            "fracture_anchor"      -> slice.entryNode.id,
                            "fractured_at"         -> now,
                          ),
                        ),
                      )
                    }
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

    case CliCommand.Archive(crystalId) =>
      store.archive(crystalId).map { _ =>
        s"Archived crystal '$crystalId' to cold storage (.ccrystals/archive/$crystalId)"
      }

    case CliCommand.Unarchive(crystalId) =>
      store.unarchive(crystalId).map { _ =>
        s"Unarchived crystal '$crystalId' back to active cave"
      }

    case CliCommand.Melt(crystalId, from, to, summaryOpt, anchorOpt) =>
      store.melt(crystalId, from, to, summaryOpt, anchorOpt).map { node =>
        s"Melted sub-DAG in '$crystalId' into checkpoint node '${node.id}'"
      }

    case CliCommand.Triage(filterAgingOpt, includeArchived, jsonOutput) =>
      store.list(includeArchived).map { crystals =>
        val allItems = crystals.map { c =>
          val isArchived = store.isArchived(c.id)
          ccrystal.core.audit.CrystalTriage.triage(c, isArchived)
        }
        val filtered = ccrystal.core.audit.CrystalTriage.filterByAging(allItems, filterAgingOpt)

        if jsonOutput then
          import ccrystal.core.codec.given
          filtered.asJson.spaces2
        else
          val sb = new java.lang.StringBuilder()
          sb.append("# Cave Lifecycle & Hygiene Triage Report\n\n")
          sb.append(
            s"Total crystals found in workspace: ${crystals.size} (Filtered: ${filtered.size})\n\n",
          )
          sb.append(
            "| Crystal ID | Status | Aging | Category | Tasks | Leases | Lessons | Recommendation |\n",
          )
          sb.append("|---|---|---|---|---|---|---|---|\n")
          filtered.foreach { item =>
            sb.append(
              s"| `${item.id}` | ${item.status} | ${item.agingState} | ${item.category} | ${item.totalTasks - item.pendingTasks}/${item.totalTasks} | ${item.activeLeases} | ${item.openLessons} | ${item.recommendation} |\n",
            )
          }
          sb.toString
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

    case CliCommand.EntityConventions =>
      Right(
        """================================================================================
          |Context Crystal: Entity Naming & PII Protection Conventions
          |================================================================================
          |
          |Prefix   Kind     Example Handle    Canonical Entity ID
          |--------------------------------------------------------------------------------
          |usr_     Human    john / lead       usr_john / usr_lead
          |agt_     Agent    antigravity       agt_antigravity
          |mdl_     Model    gemini-flash      mdl_gemini_flash
          |tool_    Tool     bash-runner       tool_bash_runner
          |sys_     System   git-sync          sys_git_sync
          |
          |Core Guidelines:
          |1. Handles should be short alphanumeric slugs (lowercase, hyphens/underscores).
          |2. Avoid personal full names, accents, or diacritics (e.g. prefer 'john' over 'John Doe Júnior').
          |3. Crystals are committed to Git: protect Personally Identifiable Information (PII) from unintended public exposure.
          |4. For single-developer contexts, the entity display name is optional and defaults to the handle.
          |================================================================================""".stripMargin.trim,
      )

    case CliCommand.Mcp(transport) =>
      if transport != "stdio" then
        Left(s"Unsupported MCP transport: '$transport'. Only 'stdio' is currently supported.")
      else
        val handler = new ccrystal.cli.mcp.DefaultMcpHandler(store, this)
        val in      = new java.io.BufferedReader(new java.io.InputStreamReader(System.in, "UTF-8"))
        val stdioTransport = new ccrystal.cli.mcp.StdioMcpTransport(in, System.out)
        stdioTransport.run(handler)
        Right("")

    case CliCommand.ForAi =>
      Right(
        """# Context Crystal: Operational Invariants for AI Entities
          |
          |You are operating Context Crystal (`ccrystal`), a low-overhead, zero-reflection context & DAG lifecycle engine. Follow these core invariants:
          |
          |## 1. Privacy, PII Protection & Context Sovereignty
          |- **Zero Unprompted PII Persistence:** NEVER record Personally Identifiable Information (legal full names, personal emails, physical addresses, private keys, corporate IDs) into `.ccrystals/`.
          |- **Public Git Exposure:** Crystals are version-controlled and designed to be published or shared. Never scrape `git config user.name` or OS environment variables to assume human identity.
          |- **Operator Preference Invariant:** Check persistent memory (e.g., Engram project memory, `AGENTS.md`, or rules) for the operator's preferred entity handle. If unknown, ask once and offer to store it permanently so subsequent sessions proceed without friction.
          |
          |## 2. Canonical Entity Naming & Schema Conventions
          |All identities in Context Crystal follow `<prefix>_<slug>`:
          |- **Humans (`usr_`):** `usr_<firstname>[-discriminator]` (e.g., `usr_john`) or role handles (`usr_maintainer`, `usr_lead`). Avoid full legal names, accents, or punctuation. The display name is optional and defaults to the handle.
          |- **Agents (`agt_`):** `agt_<agentname>` (e.g., `agt_antigravity`, `agt_claude_code`).
          |- **Models (`mdl_`):** `mdl_<modelname>` (e.g., `mdl_gemini_3_flash`).
          |- **Tools (`tool_`):** `tool_<toolname>` (e.g., `tool_bash_runner`).
          |- **System (`sys_`):** `sys_<subsystem>` (e.g., `sys_git_sync`).
          |
          |## 3. Autonomous Execution & MCP Best Practices
          |- **MCP Protocol First:** When operating as an MCP client, prioritize native tools (`crystal_init`, `crystal_batch`, `crystal_checkpoint`) over spawning shell subshells.
          |- **Atomic Batching:** For multi-step transitions, compose a single chained command or `ccrystal batch` script to minimize turn roundtrips.
          |- **Transient Resource Leases:** Register temporary worktrees, debug configs, and test assets as transient leases (`ccrystal transient lease`) and clean them upon conclusion.
          |
          |## 4. CLI Argument Enums & Normalization
          |All CLI enum options accept case-insensitive, kebab-case, PascalCase, or snake_case inputs:
          |- **Node Kinds (`--kind`):** `human_prompt`, `agent_reasoning`, `tool_execution`, `checkpoint`, `branch`, `resolution`
          |- **Transient Resource Types (`--type`):** `git_worktree`, `env_override`, `debug_config`, `dummy_asset`, `mock_service`
          |- **Disposal Policies (`--policy`):** `revert_on_conclusion`, `delete_after_test`, `replace_in_final_cut`, `manual`
          |- **Entity Kinds (`--kind`, `-k`):** `human`, `agent`, `model`, `system`, `tool`
          |- **Capture Fidelity (`--fidelity`):** `inferred`, `intercepted`
          |- **Goal Statuses (`--status`):** `in_progress`, `concluded_success`, `concluded_abandoned`
          |- **Artifact Roles (`--role`):** `target`, `instrument`, `precondition`
          |- **Artifact Substrates (`--substrate`):** `virtual`, `physical`
          |- **Aging States (`--state`):** `active`, `solid`, `stale`
          |
          |Note: This instruction was meant for non-humans (AI assistants and autonomous agents). For human CLI usage, run 'ccrystal --help'.""".stripMargin.trim,
      )

    case CliCommand.AgentDoctorCmd(jsonOutput, verbose) =>
      val doctor = new ccrystal.core.agent.AgentDoctor(
        ccrystal.cli.agent.DefaultFileSystemInspector,
        ccrystal.core.agent.HarnessPathResolver.default,
      )
      val storePath = store match
        case fs: ccrystal.core.store.FsCrystalStore => fs.rootPath.toAbsolutePath.toString
        case _                                      => ".ccrystals"
      val report = doctor.diagnose(storePath)
      if jsonOutput then Right(ccrystal.cli.agent.AgentDoctorRenderer.renderJson(report))
      else Right(ccrystal.cli.agent.AgentDoctorRenderer.renderText(report, verbose))

    case CliCommand.AgentInstallCmd(targetOpt, dryRun, force) =>
      val targetHarness = targetOpt.flatMap(ccrystal.core.agent.AgentHarness.fromString)
      if targetOpt.isDefined && targetHarness.isEmpty then
        Left(
          s"Unknown harness '${targetOpt.get}'. Valid harnesses: ${ccrystal.core.agent.AgentHarness.all.map(_.id).mkString(", ")}",
        )
      else
        val doctor = new ccrystal.core.agent.AgentDoctor(
          ccrystal.cli.agent.DefaultFileSystemOperator,
          ccrystal.core.agent.HarnessPathResolver.default,
        )
        val installer = new ccrystal.core.agent.AgentInstaller(
          ccrystal.cli.agent.DefaultFileSystemOperator,
          ccrystal.core.agent.HarnessPathResolver.default,
        )
        val storePath = store match
          case fs: ccrystal.core.store.FsCrystalStore => fs.rootPath.toAbsolutePath.toString
          case _                                      => ".ccrystals"
        val report  = doctor.diagnose(storePath)
        val summary = installer.install(report, targetHarness, dryRun, force)
        Right(ccrystal.cli.agent.AgentInstallerRenderer.renderText(summary))

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
