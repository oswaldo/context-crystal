package ccrystal.core.store

import munit.FunSuite
import ccrystal.core.model.*
import ccrystal.core.model.lattice.*
import java.nio.file.{Files, Path}
import java.util.Comparator

class FsCrystalStoreLatticeSuite extends FunSuite:

  var tempDir: Path = scala.compiletime.uninitialized

  override def beforeEach(context: BeforeEach): Unit =
    tempDir = Files.createTempDirectory("ccrystal-lattice-test-")

  override def afterEach(context: AfterEach): Unit =
    if tempDir != null && Files.exists(tempDir) then
      Files
        .walk(tempDir)
        .sorted(Comparator.reverseOrder())
        .forEach(Files.deleteIfExists)

  private def createDummyCrystal(id: String): ContextCrystal =
    ContextCrystal(
      schemaVersion = "1.1.0",
      id = id,
      name = Some(id),
      createdAt = "2026-10-03T18:00:00Z",
      updatedAt = "2026-10-03T18:00:00Z",
      defaultAuthorId = Some("usr_dev"),
      goal = Goal(s"Goal $id", s"Intent $id", GoalStatus.InProgress, Nil),
      entities = List(Entity("usr_dev", EntityKind.Human, "Developer")),
      dag = DAG(
        "root",
        List(DAGNode("root", Nil, "2026-10-03T18:00:00Z", "usr_dev", NodeKind.HumanPrompt, "Init")),
      ),
    )

  test("connect establishes a directed bond between two valid crystals"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-1")
    val c2    = createDummyCrystal("c-2")
    assert(store.save(c1).isRight)
    assert(store.save(c2).isRight)

    val bondRes = store.connect("c-1", "c-2", BondRelation.DependsOn, Some("Needs auth API"))
    assert(bondRes.isRight)
    val bond = bondRes.toOption.get
    assertEquals(bond.targetCrystalId, "c-2")
    assertEquals(bond.relation, BondRelation.DependsOn)
    assertEquals(bond.description, Some("Needs auth API"))

    // Verify persisted crystal
    val loaded1 = store.load("c-1").toOption.get
    assertEquals(loaded1.bonds.size, 1)
    assertEquals(loaded1.bonds.head.targetCrystalId, "c-2")

    // Verify bonds summary
    val b1 = store.bonds("c-1").toOption.get
    assertEquals(b1.outbound.size, 1)
    assertEquals(b1.inbound.size, 0)

    val b2 = store.bonds("c-2").toOption.get
    assertEquals(b2.outbound.size, 0)
    assertEquals(b2.inbound.size, 1)
    assertEquals(b2.inbound.head.sourceCrystalId, "c-1")
    assertEquals(b2.inbound.head.bond.relation, BondRelation.DependsOn)

  test("connect fails if source or target crystal does not exist"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-1")
    assert(store.save(c1).isRight)

    val err1 = store.connect("c-nonexistent", "c-1", BondRelation.RelatesTo)
    assert(err1.isLeft)
    assert(err1.left.toOption.get.contains("Source crystal 'c-nonexistent' not found"))

    val err2 = store.connect("c-1", "c-nonexistent", BondRelation.RelatesTo)
    assert(err2.isLeft)
    assert(err2.left.toOption.get.contains("Target crystal 'c-nonexistent' not found"))

  test("connect rejects self-loop (c-1 -> c-1)"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-1")
    assert(store.save(c1).isRight)

    val res = store.connect("c-1", "c-1", BondRelation.DependsOn)
    assert(res.isLeft)
    assert(res.left.toOption.get.contains("Cycle detected"))
    assert(res.left.toOption.get.contains("c-1 -> c-1"))

  test("connect rejects 2-node cycle and transitive 3-node cycle"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-1")
    val c2    = createDummyCrystal("c-2")
    val c3    = createDummyCrystal("c-3")
    assert(store.save(c1).isRight)
    assert(store.save(c2).isRight)
    assert(store.save(c3).isRight)

    // c-1 -> c-2
    assert(store.connect("c-1", "c-2", BondRelation.DependsOn).isRight)

    // c-2 -> c-1 must fail (2-node cycle)
    val directCycle = store.connect("c-2", "c-1", BondRelation.DependsOn)
    assert(directCycle.isLeft)
    assert(directCycle.left.toOption.get.contains("c-2 -> c-1 -> c-2"))

    // c-2 -> c-3
    assert(store.connect("c-2", "c-3", BondRelation.Blocks).isRight)

    // c-3 -> c-1 must fail (3-node cycle: c-3 -> c-1 -> c-2 -> c-3)
    val transitiveCycle = store.connect("c-3", "c-1", BondRelation.DependsOn)
    assert(transitiveCycle.isLeft)
    assert(transitiveCycle.left.toOption.get.contains("c-3 -> c-1 -> c-2 -> c-3"))

  test("disconnect removes directed bonds"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-1")
    val c2    = createDummyCrystal("c-2")
    assert(store.save(c1).isRight)
    assert(store.save(c2).isRight)

    assert(store.connect("c-1", "c-2", BondRelation.DependsOn).isRight)
    assert(store.connect("c-1", "c-2", BondRelation.RelatesTo).isRight)

    val bBefore = store.bonds("c-1").toOption.get
    assertEquals(bBefore.outbound.size, 2)

    // Disconnect specific relation
    val discRes = store.disconnect("c-1", "c-2", Some(BondRelation.DependsOn))
    assertEquals(discRes, Right(true))

    val bAfter1 = store.bonds("c-1").toOption.get
    assertEquals(bAfter1.outbound.size, 1)
    assertEquals(bAfter1.outbound.head.relation, BondRelation.RelatesTo)

    // Disconnect all remaining bonds to c-2
    val discAll = store.disconnect("c-1", "c-2", None)
    assertEquals(discAll, Right(true))

    val bAfterAll = store.bonds("c-1").toOption.get
    assertEquals(bAfterAll.outbound.size, 0)

  test("previewCrystalDeletion surfaces inbound bonds warning"):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val c1    = createDummyCrystal("c-1")
    val c2    = createDummyCrystal("c-2")
    assert(store.save(c1).isRight)
    assert(store.save(c2).isRight)

    assert(store.connect("c-1", "c-2", BondRelation.DependsOn, Some("Critical dependency")).isRight)

    val preview = store.previewCrystalDeletion("c-2").toOption.get
    assertEquals(preview.inboundBonds.size, 1)
    assertEquals(preview.inboundBonds.head.sourceCrystalId, "c-1")
    assertEquals(preview.inboundBonds.head.bond.relation, BondRelation.DependsOn)

  test(
    "previewPrune surfaces inbound lattice warnings when active crystal targets archived candidate",
  ):
    val store = FsCrystalStore(tempDir.resolve(".ccrystals").toString)
    val cArch = createDummyCrystal("c-old")
    val cAct  = createDummyCrystal("c-active")
    assert(store.save(cArch).isRight)
    assert(store.save(cAct).isRight)

    assert(store.connect("c-active", "c-old", BondRelation.References).isRight)
    assert(store.archive("c-old").isRight)

    val previewRes = store.previewPrune(targetCrystalId = Some("c-old"))
    assert(previewRes.isRight)
    val preview = previewRes.toOption.get
    assertEquals(preview.candidates.map(_.crystalId), List("c-old"))
    assertEquals(preview.inboundLatticeWarnings.size, 1)
    assert(preview.inboundLatticeWarnings.head.contains("c-active"))
    assert(preview.inboundLatticeWarnings.head.contains("c-old"))
