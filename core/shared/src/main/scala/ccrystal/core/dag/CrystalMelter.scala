package ccrystal.core.dag

import ccrystal.core.model.*

object CrystalMelter:

  private def matchesSelector(n: DAGNode, sel: String): Boolean =
    n.id == sel || n.anchor.contains(sel) || n.id.startsWith(sel)

  def meltWithNode(
      crystal: ContextCrystal,
      fromSelector: String,
      toSelector: String,
      customSummary: Option[String] = None,
      meltedNodeId: Option[String] = None,
      actorId: Option[String] = None,
      anchor: Option[String] = None,
  ): Either[String, (ContextCrystal, DAGNode)] =
    val nodes = crystal.dag.nodes
    if nodes.isEmpty then Left("Cannot melt an empty crystal DAG")
    else
      val fromIdx = nodes.indexWhere(n => matchesSelector(n, fromSelector))
      if fromIdx == -1 then
        Left(s"Selector '$fromSelector' (for --from) did not match any node ID or anchor")
      else
        val toIdx = nodes.lastIndexWhere(n => matchesSelector(n, toSelector))
        if toIdx == -1 then
          Left(s"Selector '$toSelector' (for --to) did not match any node ID or anchor")
        else if fromIdx > toIdx then
          Left(s"Invalid melt range: from-index ($fromIdx) is greater than to-index ($toIdx)")
        else
          val nodesBefore = nodes.take(fromIdx)
          val meltedNodes = nodes.slice(fromIdx, toIdx + 1)
          val nodesAfter  = nodes.drop(toIdx + 1)

          val meltedIds   = meltedNodes.map(_.id).toSet
          val firstMelted = meltedNodes.head
          val lastMelted  = meltedNodes.last

          val consolidatedId =
            meltedNodeId.getOrElse(s"melted-${firstMelted.id}-${lastMelted.id}")

          // Incoming parents: parents of melted nodes that are outside the melted set
          val incomingParents =
            meltedNodes.flatMap(_.parentIds).filterNot(meltedIds.contains).distinct

          // Content summary: user/agent override or zero-LLM bulleted summary
          val summary = customSummary match
            case Some(s) if s.trim.nonEmpty => s.trim
            case _ =>
              val bullets =
                meltedNodes.map(n => s"- [${n.kind}] ${n.contentSummary}").mkString("\n")
              s"Melted ${meltedNodes.size} nodes (${firstMelted.id}..${lastMelted.id}):\n$bullets"

          // Artifact aggregation
          val allArtifactIds             = meltedNodes.flatMap(_.artifactIds).distinct
          val allInputArtifactIds        = meltedNodes.flatMap(_.inputArtifactIds).distinct
          val allOutputArtifactIds       = meltedNodes.flatMap(_.outputArtifactIds).distinct
          val allPreconditionArtifactIds = meltedNodes.flatMap(_.preconditionArtifactIds).distinct

          // Fidelity: Intercepted only if all are Intercepted
          val fidelity =
            if meltedNodes.forall(_.fidelity == CaptureFidelity.Intercepted) then
              CaptureFidelity.Intercepted
            else CaptureFidelity.Inferred

          // Consolidated metadata
          val mergedMeta =
            meltedNodes.map(_.metadata).foldLeft(Map.empty[String, String])(_ ++ _) ++ Map(
              "meltedNodeCount" -> meltedNodes.size.toString,
              "meltedRange"     -> s"${firstMelted.id}..${lastMelted.id}",
            )

          val consolidatedNode = DAGNode(
            id = consolidatedId,
            parentIds = incomingParents,
            timestamp = lastMelted.timestamp,
            actorId = actorId.getOrElse(lastMelted.actorId),
            kind = NodeKind.Checkpoint,
            contentSummary = summary,
            anchor = anchor.orElse(lastMelted.anchor),
            artifactIds = allArtifactIds,
            inputArtifactIds = allInputArtifactIds,
            outputArtifactIds = allOutputArtifactIds,
            preconditionArtifactIds = allPreconditionArtifactIds,
            fidelity = fidelity,
            metadata = mergedMeta,
          )

          // Rewire outward children in nodesAfter: any parentId in meltedIds becomes consolidatedId
          val rewiredAfter = nodesAfter.map { n =>
            val newParents = n.parentIds.map { pid =>
              if meltedIds.contains(pid) then consolidatedId else pid
            }.distinct
            if newParents != n.parentIds then n.copy(parentIds = newParents)
            else n
          }

          val newNodes = nodesBefore ++ List(consolidatedNode) ++ rewiredAfter
          val newRootNodeId =
            if fromIdx == 0 then consolidatedId
            else crystal.dag.rootNodeId

          val updatedDag = DAG(rootNodeId = newRootNodeId, nodes = newNodes)
          val now        = lastMelted.timestamp
          Right((crystal.copy(dag = updatedDag, updatedAt = now), consolidatedNode))

  def melt(
      crystal: ContextCrystal,
      fromSelector: String,
      toSelector: String,
      customSummary: Option[String] = None,
      meltedNodeId: Option[String] = None,
      actorId: Option[String] = None,
      anchor: Option[String] = None,
  ): Either[String, ContextCrystal] =
    meltWithNode(
      crystal,
      fromSelector,
      toSelector,
      customSummary,
      meltedNodeId,
      actorId,
      anchor,
    ).map(_._1)
