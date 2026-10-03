package ccrystal.core.dag

import ccrystal.core.model.*
import scala.CanEqual

case class HydrationParams(
    slice: SliceParams = SliceParams(),
    summaryOnly: Boolean = false,
    bondsSummary: Option[ccrystal.core.model.lattice.CrystalBondsSummary] = None,
    connectedPeeks: Map[String, ContextCrystal] = Map.empty,
) derives CanEqual

object ContextHydrator:

  private def formatStatus(status: GoalStatus): String = status match
    case GoalStatus.InProgress         => "in_progress"
    case GoalStatus.ConcludedSuccess   => "concluded_success"
    case GoalStatus.ConcludedAbandoned => "concluded_abandoned"

  private def peekSuffix(crystalOpt: Option[ContextCrystal]): String =
    crystalOpt match
      case Some(c) =>
        val status    = formatStatus(c.goal.status)
        val openTasks = c.goal.acceptanceCriteria.count(!_.completed)
        s" [Goal: ${c.goal.title} | Status: $status | Open Tasks: $openTasks]"
      case None => ""

  def hydrate(crystal: ContextCrystal, params: HydrationParams): Either[String, String] =
    val slicedNodesRes: Either[String, List[DAGNode]] =
      if crystal.dag.nodes.isEmpty then
        if params.slice.from.isDefined || params.slice.to.isDefined then
          Left("Cannot slice an empty crystal DAG")
        else Right(Nil)
      else if params.slice.from.isEmpty && params.slice.to.isEmpty && params.slice.tail.isEmpty && params.slice.head.isEmpty
      then Right(crystal.dag.nodes)
      else CrystalSlicer.slice(crystal, params.slice).map(_.slicedNodes)

    slicedNodesRes.map { slicedNodes =>
      val sb = new java.lang.StringBuilder()
      sb.append(s"=== CONTEXT CRYSTAL CAST: ${crystal.id} ===\n\n")
      sb.append(s"## Goal: ${crystal.goal.title}\n")
      sb.append(s"Intent: ${crystal.goal.intent}\n")
      val statusStr = formatStatus(crystal.goal.status)
      sb.append(s"Status: $statusStr\n\n")

      sb.append("## Active Tasks:\n")
      crystal.goal.acceptanceCriteria.foreach { ac =>
        val mark = if ac.completed then "[x]" else "[ ]"
        sb.append(s"- $mark ${ac.id}: ${ac.description}\n")
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
        activeLeases.foreach { l =>
          sb.append(s"- [${l.id}] ${l.resourceType}: ${l.description}\n")
        }
        sb.append("\n")

      if crystal.artifacts.nonEmpty then
        sb.append("## Artifacts & World State:\n")
        crystal.artifacts.foreach { a =>
          val uriPart = a.uri.map(u => s" <$u>").getOrElse("")
          val locPart = a.location match
            case Some(loc) =>
              val benchPart = loc.benchCoordinates.map(b => s" ($b)").getOrElse("")
              s" @ ${loc.name}$benchPart"
            case None => ""
          val descPart = a.description.map(d => s" - $d").getOrElse("")
          sb.append(s"- [${a.role}] (${a.substrate}) ${a.id}: ${a.name}$locPart$uriPart$descPart\n")
        }
        sb.append("\n")

      val (outboundBonds, inboundBonds) = params.bondsSummary match
        case Some(s) => (s.outbound, s.inbound)
        case None    => (crystal.bonds, Nil)

      if outboundBonds.nonEmpty || inboundBonds.nonEmpty then
        sb.append("## Connected Lattice Bonds:\n")
        outboundBonds.foreach { b =>
          val relStr  = ccrystal.core.model.lattice.BondRelation.format(b.relation)
          val descStr = b.description.map(d => s": $d").getOrElse("")
          val peek    = peekSuffix(params.connectedPeeks.get(b.targetCrystalId))
          sb.append(s"- -> ${b.targetCrystalId} ($relStr)$descStr$peek\n")
        }
        inboundBonds.foreach { ib =>
          val relStr  = ccrystal.core.model.lattice.BondRelation.format(ib.bond.relation)
          val descStr = ib.bond.description.map(d => s": $d").getOrElse("")
          val peek    = peekSuffix(params.connectedPeeks.get(ib.sourceCrystalId))
          sb.append(s"- <- ${ib.sourceCrystalId} ($relStr)$descStr$peek\n")
        }
        sb.append("\n")

      if !params.summaryOnly && slicedNodes.nonEmpty then
        val subtitle = (params.slice.from, params.slice.to, params.slice.tail) match
          case (Some(f), Some(t), Some(tl)) => s" (From: $f, To: $t, Tail: $tl)"
          case (Some(f), Some(t), None)     => s" (From: $f, To: $t)"
          case (Some(f), None, Some(tl))    => s" (From: $f, Tail: $tl)"
          case (Some(f), None, None)        => s" (From: $f)"
          case (None, Some(t), Some(tl))    => s" (To: $t, Tail: $tl)"
          case (None, Some(t), None)        => s" (To: $t)"
          case (None, None, Some(tl))       => s" (Tail: $tl)"
          case (None, None, None)           => ""
        sb.append(s"## State Transitions$subtitle:\n")
        slicedNodes.foreach { n =>
          val anchorPart = n.anchor.map(a => s" [#$a]").getOrElse("")
          val fidelityPart =
            if n.fidelity != CaptureFidelity.Inferred then s" [fidelity: ${n.fidelity}]" else ""
          val inputsPart =
            if n.inputArtifactIds.nonEmpty then s" [inputs: ${n.inputArtifactIds.mkString(", ")}]"
            else ""
          val outputsPart =
            if n.outputArtifactIds.nonEmpty then
              s" [outputs: ${n.outputArtifactIds.mkString(", ")}]"
            else ""
          val precondsPart =
            if n.preconditionArtifactIds.nonEmpty then
              s" [preconditions: ${n.preconditionArtifactIds.mkString(", ")}]"
            else ""
          sb.append(
            s"- [${n.kind}] (${n.actorId}): ${n.contentSummary}$anchorPart$fidelityPart$inputsPart$outputsPart$precondsPart\n",
          )
        }
        sb.append("\n")

      sb.append("=== END CAST ===")
      sb.toString
    }
