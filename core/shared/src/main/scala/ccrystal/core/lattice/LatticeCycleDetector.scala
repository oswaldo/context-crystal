package ccrystal.core.lattice

import ccrystal.core.model.lattice.LatticeBond

object LatticeCycleDetector:

  /** Checks if adding a directed bond from `sourceId` to `targetId` creates a cycle in the crystal
    * lattice graph.
    *
    * @param sourceId
    *   The origin crystal establishing the bond
    * @param targetId
    *   The destination crystal being targeted
    * @param existingBonds
    *   Map of crystal IDs to their outbound lattice bonds
    * @return
    *   Some(cyclePath) if adding the bond creates a directed cycle, None if acyclic
    */
  def detectCycle(
      sourceId: String,
      targetId: String,
      existingBonds: Map[String, List[LatticeBond]],
  ): Option[List[String]] =
    if sourceId == targetId then Some(List(sourceId, targetId))
    else
      findPath(from = targetId, to = sourceId, existingBonds, visited = Set.empty) match
        case Some(path) => Some(sourceId :: path)
        case None       => None

  private def findPath(
      from: String,
      to: String,
      existingBonds: Map[String, List[LatticeBond]],
      visited: Set[String],
  ): Option[List[String]] =
    if from == to then Some(List(from))
    else if visited.contains(from) then None
    else
      val nextVisited                  = visited + from
      val neighbors                    = existingBonds.getOrElse(from, Nil).map(_.targetCrystalId)
      var result: Option[List[String]] = None
      val it                           = neighbors.iterator
      while it.hasNext && result.isEmpty do
        val next = it.next()
        findPath(next, to, existingBonds, nextVisited) match
          case Some(subPath) => result = Some(from :: subPath)
          case None          => ()
      result
