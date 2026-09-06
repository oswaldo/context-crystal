package ccrystal.core.dag

import ccrystal.core.model.{DAG, DAGNode}
import scala.collection.immutable.ListSet

case class CrystalDAG private (raw: DAG):
  def rootNodeId: String   = raw.rootNodeId
  def nodes: List[DAGNode] = raw.nodes

  def nodeMap: Map[String, DAGNode] =
    nodes.map(n => n.id -> n).toMap

  def leafNodes: List[DAGNode] =
    val parentIdSet = nodes.flatMap(_.parentIds).toSet
    nodes.filterNot(n => parentIdSet.contains(n.id))

  def addNode(node: DAGNode): Either[String, CrystalDAG] =
    if nodeMap.contains(node.id) then Left(s"Duplicate node ID: ${node.id}")
    else if node.parentIds.exists(pid => !nodeMap.contains(pid)) then
      val missing = node.parentIds.filterNot(nodeMap.contains)
      Left(s"Parent node(s) not found in DAG: ${missing.mkString(", ")}")
    else Right(CrystalDAG(raw.copy(nodes = nodes :+ node)))

object CrystalDAG:
  def empty(rootNodeId: String, rootNode: DAGNode): Either[String, CrystalDAG] =
    if rootNode.id != rootNodeId then
      Left(s"Root node ID mismatch: expected $rootNodeId, got ${rootNode.id}")
    else Right(CrystalDAG(DAG(rootNodeId, List(rootNode))))

  def fromDAG(dag: DAG): Either[String, CrystalDAG] =
    val nodeMap = dag.nodes.map(n => n.id -> n).toMap
    if !nodeMap.contains(dag.rootNodeId) then
      Left(s"Root node ${dag.rootNodeId} not present in DAG nodes")
    else Right(CrystalDAG(dag))
