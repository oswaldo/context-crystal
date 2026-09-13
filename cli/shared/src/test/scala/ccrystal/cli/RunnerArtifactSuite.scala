package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerArtifactSuite extends FunSuite:

  def createRunner(): (Runner, InMemoryCrystalStore) =
    val store = new InMemoryCrystalStore()
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "test-crystal",
      name = Some("Test Crystal"),
      createdAt = "2026-09-13T10:00:00Z",
      updatedAt = "2026-09-13T10:00:00Z",
      defaultAuthorId = Some("usr_operator"),
      goal = Goal("Test Goal", "Test Intent", GoalStatus.InProgress, Nil),
      entities = Nil,
      dag = DAG(
        "node-init",
        List(
          DAGNode(
            "node-init",
            Nil,
            "2026-09-13T10:00:00Z",
            "usr_operator",
            NodeKind.HumanPrompt,
            "Init",
          ),
        ),
      ),
      artifacts = Nil,
    )
    store.save(crystal)
    val runner = new Runner(store, confirmPrompt = _ => true)
    (runner, store)

  test("Runner handles ArtifactRegister to cave and crystal"):
    val (runner, store) = createRunner()

    // 1. Register to cave
    val caveCmd = CliCommand.ArtifactRegister(
      id = "cave-art-1",
      name = Some("Cave Tool"),
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Instrument,
      uri = Some("https://example.com/tool"),
      cave = true,
    )
    val caveRes = runner.run(caveCmd)
    assertEquals(caveRes.isRight, true, "cave registration succeeds")
    assert(caveRes.toOption.get.contains("cave-art-1"), "Output mentions cave-art-1")

    val caveReg = store.getArtifactRegistry().toOption.get
    assert(caveReg.artifacts.contains("cave-art-1"), "Artifact present in cave registry")

    // 2. Register to crystal
    val crystalCmd = CliCommand.ArtifactRegister(
      id = "c-art-1",
      name = Some("Sensor Unit"),
      substrate = ArtifactSubstrate.Physical,
      role = ArtifactRole.Precondition,
      locationName = Some("Lab 4"),
      benchCoordinates = Some("Bench-1"),
      crystalId = Some("test-crystal"),
    )
    val crystalRes = runner.run(crystalCmd)
    assertEquals(crystalRes.isRight, true, "crystal registration succeeds")
    assert(crystalRes.toOption.get.contains("c-art-1"), "Output mentions c-art-1")

    val loaded = store.load("test-crystal").toOption.get
    assertEquals(loaded.artifacts.exists(_.id == "c-art-1"), true, "Artifact present in crystal")

  test("Runner handles ArtifactList and ArtifactInspect"):
    val (runner, _) = createRunner()

    runner.run(
      CliCommand.ArtifactRegister(
        id = "art-test-list",
        name = Some("Listable Artifact"),
        substrate = ArtifactSubstrate.Virtual,
        role = ArtifactRole.Target,
        cave = true,
      ),
    )

    // List
    val listRes = runner.run(CliCommand.ArtifactList(cave = true))
    assertEquals(listRes.isRight, true, "list succeeds")
    assert(listRes.toOption.get.contains("art-test-list"), "List output includes artifact")

    // Inspect
    val inspectRes = runner.run(CliCommand.ArtifactInspect("art-test-list"))
    assertEquals(inspectRes.isRight, true, "inspect succeeds")
    assert(inspectRes.toOption.get.contains("art-test-list"), "Inspect includes ID")
    assert(inspectRes.toOption.get.contains("Listable Artifact"), "Inspect includes Name")

    // Inspect non-existent
    val inspectMissing = runner.run(CliCommand.ArtifactInspect("non-existent"))
    assertEquals(inspectMissing.isLeft, true, "missing inspect returns Left")

  test("Runner handles NodeAdd with directional artifact linkage"):
    val (runner, store) = createRunner()

    val nodeCmd = CliCommand.NodeAdd(
      crystalId = "test-crystal",
      kind = NodeKind.ToolExecution,
      summary = "Run calibration cycle",
      parentIds = List("node-init"),
      inputArtifactIds = List("art-in"),
      outputArtifactIds = List("art-out"),
      preconditionArtifactIds = List("art-pre"),
    )
    val nodeRes = runner.run(nodeCmd)
    assertEquals(nodeRes.isRight, true, "node add succeeds")

    val crystal   = store.load("test-crystal").toOption.get
    val addedNode = crystal.dag.nodes.find(_.contentSummary == "Run calibration cycle").get
    assertEquals(addedNode.inputArtifactIds, List("art-in"))
    assertEquals(addedNode.outputArtifactIds, List("art-out"))
    assertEquals(addedNode.preconditionArtifactIds, List("art-pre"))
    assertEquals(addedNode.artifactIds.sorted, List("art-in", "art-out", "art-pre").sorted)
