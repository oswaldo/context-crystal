package ccrystal.core.dag

import ccrystal.core.model.*
import scala.CanEqual

case class SliceParams(
    from: Option[String] = None,
    to: Option[String] = None,
    head: Option[Int] = None,
    tail: Option[Int] = None,
) derives CanEqual

case class CrystalSlice(
    parentCrystal: ContextCrystal,
    slicedNodes: List[DAGNode],
    entryNode: DAGNode,
    normalizedDag: DAG,
) derives CanEqual:

  def fork(
      newId: String,
      newName: Option[String] = None,
      reason: Option[String] = Some("cleavage_slice"),
      createdAt: Option[String] = None,
  ): ContextCrystal =
    val now                   = createdAt.getOrElse(parentCrystal.updatedAt)
    val referencedArtifactIds = slicedNodes.flatMap(_.artifactIds).toSet
    val retainedArtifacts =
      parentCrystal.artifacts.filter(a => referencedArtifactIds.contains(a.id))
    val origin = CrystalOrigin(
      parentCrystalId = parentCrystal.id,
      parentNodeId = Some(entryNode.id),
      reason = reason,
      createdAt = Some(now),
    )
    parentCrystal.copy(
      id = newId,
      name = newName,
      createdAt = now,
      updatedAt = now,
      parentCrystalId = Some(parentCrystal.id),
      origin = Some(origin),
      dag = normalizedDag,
      transientLeases = Nil,
      lessonsLearned = Nil,
      artifacts = retainedArtifacts,
    )

object CrystalSlicer:

  private def matchesSelector(n: DAGNode, sel: String): Boolean =
    n.id == sel || n.anchor.contains(sel) || n.id.startsWith(sel)

  def findNode(dag: DAG, selector: String): Option[DAGNode] =
    dag.nodes.find(n => matchesSelector(n, selector))

  def slice(crystal: ContextCrystal, params: SliceParams): Either[String, CrystalSlice] =
    val nodes = crystal.dag.nodes
    if nodes.isEmpty then Left("Cannot slice an empty crystal DAG")
    else
      val fromIndexRes: Either[String, Int] = params.from match
        case Some(sel) =>
          nodes.indexWhere(n => matchesSelector(n, sel)) match
            case -1  => Left(s"Selector '$sel' (for --from) did not match any node ID or anchor")
            case idx => Right(idx)
        case None => Right(0)

      val toIndexRes: Either[String, Int] = params.to match
        case Some(sel) =>
          nodes.lastIndexWhere(n => matchesSelector(n, sel)) match
            case -1  => Left(s"Selector '$sel' (for --to) did not match any node ID or anchor")
            case idx => Right(idx)
        case None => Right(nodes.length - 1)

      for
        fromIdx <- fromIndexRes
        toIdx   <- toIndexRes
        _ <-
          if fromIdx > toIdx then
            Left(s"Invalid slice range: from-index ($fromIdx) is greater than to-index ($toIdx)")
          else Right(())
        rangeNodes = nodes.slice(fromIdx, toIdx + 1)
        tailFiltered = params.tail match
          case Some(n) if n > 0 => rangeNodes.takeRight(n)
          case _                => rangeNodes
        headFiltered = params.head match
          case Some(n) if n > 0 => tailFiltered.take(n)
          case _                => tailFiltered
        _ <-
          if headFiltered.isEmpty then Left("Slice resulted in an empty node set")
          else Right(())
        entryNode   = headFiltered.head
        selectedIds = headFiltered.map(_.id).toSet
        normalizedNodes = headFiltered.map { node =>
          val validParents = node.parentIds.filter(pid => selectedIds.contains(pid))
          if validParents != node.parentIds then node.copy(parentIds = validParents)
          else node
        }
        normalizedDag = DAG(rootNodeId = entryNode.id, nodes = normalizedNodes)
      yield CrystalSlice(
        parentCrystal = crystal,
        slicedNodes = headFiltered,
        entryNode = entryNode,
        normalizedDag = normalizedDag,
      )
