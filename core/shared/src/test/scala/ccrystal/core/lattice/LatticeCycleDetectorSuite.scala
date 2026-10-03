package ccrystal.core.lattice

import munit.FunSuite
import ccrystal.core.model.lattice.{BondRelation, LatticeBond}

class LatticeCycleDetectorSuite extends FunSuite:

  private def bond(target: String): LatticeBond =
    LatticeBond(
      targetCrystalId = target,
      relation = BondRelation.DependsOn,
      description = None,
      createdAt = "2026-10-03T18:00:00Z",
    )

  test("Reject self-loop (direct loop from A to A)"):
    val existing = Map.empty[String, List[LatticeBond]]
    val cycle    = LatticeCycleDetector.detectCycle("crystal-A", "crystal-A", existing)
    assertEquals(cycle, Some(List("crystal-A", "crystal-A")))

  test("Reject direct 2-node cycle (A -> B when B -> A already exists)"):
    val existing = Map(
      "crystal-B" -> List(bond("crystal-A")),
    )
    val cycle = LatticeCycleDetector.detectCycle("crystal-A", "crystal-B", existing)
    assertEquals(cycle, Some(List("crystal-A", "crystal-B", "crystal-A")))

  test("Reject transitive 3-node cycle (A -> B when B -> C -> A already exists)"):
    val existing = Map(
      "crystal-B" -> List(bond("crystal-C")),
      "crystal-C" -> List(bond("crystal-A")),
    )
    val cycle = LatticeCycleDetector.detectCycle("crystal-A", "crystal-B", existing)
    assertEquals(cycle, Some(List("crystal-A", "crystal-B", "crystal-C", "crystal-A")))

  test("Reject deep indirect cycle (A -> D when D -> C -> B -> A exists)"):
    val existing = Map(
      "crystal-D" -> List(bond("crystal-C")),
      "crystal-C" -> List(bond("crystal-B")),
      "crystal-B" -> List(bond("crystal-A")),
    )
    val cycle = LatticeCycleDetector.detectCycle("crystal-A", "crystal-D", existing)
    assertEquals(cycle, Some(List("crystal-A", "crystal-D", "crystal-C", "crystal-B", "crystal-A")))

  test("Allow valid acyclic connection in a line (A -> B -> C)"):
    val existing = Map(
      "crystal-B" -> List(bond("crystal-C")),
    )
    val cycle = LatticeCycleDetector.detectCycle("crystal-A", "crystal-B", existing)
    assertEquals(cycle, None)

  test("Allow diamond DAG structures (A -> B, A -> C, B -> D, C -> D)"):
    val existing = Map(
      "crystal-A" -> List(bond("crystal-B"), bond("crystal-C")),
      "crystal-B" -> List(bond("crystal-D")),
    )
    // Adding C -> D does not create a cycle
    val cycle = LatticeCycleDetector.detectCycle("crystal-C", "crystal-D", existing)
    assertEquals(cycle, None)

  test("Allow connecting disconnected components"):
    val existing = Map(
      "c-1" -> List(bond("c-2")),
      "c-3" -> List(bond("c-4")),
    )
    val cycle = LatticeCycleDetector.detectCycle("c-2", "c-3", existing)
    assertEquals(cycle, None)
