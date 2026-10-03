package ccrystal.core.dag

import ccrystal.core.model.*
import munit.FunSuite

class ContextHydratorSuite extends FunSuite:

  val n1 = DAGNode(
    id = "node-001-init",
    parentIds = Nil,
    timestamp = "2026-09-07T10:00:00Z",
    actorId = "usr_alice",
    kind = NodeKind.HumanPrompt,
    contentSummary = "Initialize project specification",
    anchor = Some("spec_init"),
  )
  val n2 = DAGNode(
    id = "node-002-plan",
    parentIds = List("node-001-init"),
    timestamp = "2026-09-07T10:05:00Z",
    actorId = "agent_bob",
    kind = NodeKind.AgentReasoning,
    contentSummary = "Design pure functional architecture",
    anchor = Some("arch_plan"),
  )
  val n3 = DAGNode(
    id = "node-003-tool",
    parentIds = List("node-002-plan"),
    timestamp = "2026-09-07T10:10:00Z",
    actorId = "agent_bob",
    kind = NodeKind.ToolExecution,
    contentSummary = "Generate models and codecs",
    fidelity = CaptureFidelity.Intercepted,
  )
  val n4 = DAGNode(
    id = "node-004-test",
    parentIds = List("node-003-tool"),
    timestamp = "2026-09-07T10:15:00Z",
    actorId = "agent_bob",
    kind = NodeKind.ToolExecution,
    contentSummary = "Run test suite",
    anchor = Some("tests_pass"),
  )
  val n5 = DAGNode(
    id = "node-005-check",
    parentIds = List("node-004-test"),
    timestamp = "2026-09-07T10:20:00Z",
    actorId = "usr_alice",
    kind = NodeKind.Checkpoint,
    contentSummary = "Phase 1 checkpoint approved",
    anchor = Some("checkpoint_1"),
  )

  val dag = DAG(rootNodeId = "node-001-init", nodes = List(n1, n2, n3, n4, n5))

  val crystal = ContextCrystal(
    schemaVersion = "1.0.0",
    id = "crystal-hydra-test",
    name = Some("Hydration Test Crystal"),
    createdAt = "2026-09-07T10:00:00Z",
    updatedAt = "2026-09-07T10:20:00Z",
    parentCrystalId = None,
    goal = Goal(
      title = "Implement Selective Hydration",
      intent = "Allow beam shaping over context",
      status = GoalStatus.InProgress,
      acceptanceCriteria = List(
        AcceptanceCriterion("task-1", "Core Hydrator", completed = true),
        AcceptanceCriterion("task-2", "CLI integration", completed = false),
      ),
    ),
    entities = List(
      Entity("usr_alice", EntityKind.Human, "Alice"),
      Entity("agent_bob", EntityKind.Agent, "Bob"),
    ),
    activeMask = None,
    dag = dag,
    transientLeases = List(
      TransientLease(
        id = "lease-1",
        resourceType = TransientResourceType.GitWorktree,
        resourcePath = Some("/tmp/test"),
        description = "Worktree at /tmp/test",
        disposalPolicy = DisposalPolicy.Manual,
        status = TransientLeaseStatus.Active,
        createdAt = "2026-09-07T10:00:00Z",
      ),
    ),
    lessonsLearned = List(
      LessonLearned(
        id = "lesson-1",
        observedFriction = "Large DAGs consume excess tokens",
        recommendedAction = Some("Use beam shaping to isolate relevant sub-DAGs"),
        status = LessonStatus.Open,
      ),
    ),
  )

  test("ContextHydrator: full hydration preserves living state container and all transitions") {
    val res = ContextHydrator.hydrate(crystal, HydrationParams())
    assert(res.isRight, "Expected successful hydration")
    val text = res.toOption.get

    // Assert Living State Container elements
    assert(text.contains("=== CONTEXT CRYSTAL CAST: crystal-hydra-test ==="), "Missing header")
    assert(text.contains("## Goal: Implement Selective Hydration"), "Missing goal title")
    assert(text.contains("Intent: Allow beam shaping over context"), "Missing goal intent")
    assert(text.contains("Status: in_progress"), "Missing goal status")
    assert(text.contains("- [x] task-1: Core Hydrator"), "Missing completed task")
    assert(text.contains("- [ ] task-2: CLI integration"), "Missing pending task")
    assert(text.contains("## Unresolved Lessons Learned:"), "Missing lessons header")
    assert(text.contains("Large DAGs consume excess tokens"), "Missing lesson content")
    assert(text.contains("## Active Transient Leases"), "Missing leases header")
    assert(text.contains("Worktree at /tmp/test"), "Missing lease content")

    // Assert Transitions
    assert(text.contains("Initialize project specification"), "Missing node 1")
    assert(text.contains("Phase 1 checkpoint approved"), "Missing node 5")
  }

  test("ContextHydrator: summaryOnly suppresses transitions but preserves living state container") {
    val res = ContextHydrator.hydrate(crystal, HydrationParams(summaryOnly = true))
    assert(res.isRight, "Expected successful summary hydration")
    val text = res.toOption.get

    assert(text.contains("## Goal: Implement Selective Hydration"), "Missing goal")
    assert(text.contains("- [x] task-1: Core Hydrator"), "Missing task 1")
    assert(text.contains("- [ ] task-2: CLI integration"), "Missing task 2")
    assert(!text.contains("## State Transitions"), "Summary-only must omit state transitions")
    assert(!text.contains("Initialize project specification"), "Summary-only must omit node 1")
  }

  test("ContextHydrator: beam shaping with --from anchor and --to anchor") {
    val params = HydrationParams(
      slice = SliceParams(from = Some("arch_plan"), to = Some("tests_pass")),
    )
    val res = ContextHydrator.hydrate(crystal, params)
    assert(res.isRight, s"Hydration failed: $res")
    val text = res.toOption.get

    // Living state intact
    assert(text.contains("## Goal: Implement Selective Hydration"), "Missing goal")
    assert(text.contains("- [x] task-1: Core Hydrator"), "Missing task 1")

    // Sliced transitions: only n2, n3, n4
    assert(!text.contains("Initialize project specification"), "n1 should be excluded")
    assert(text.contains("Design pure functional architecture"), "n2 must be present")
    assert(text.contains("Generate models and codecs"), "n3 must be present")
    assert(text.contains("Run test suite"), "n4 must be present")
    assert(!text.contains("Phase 1 checkpoint approved"), "n5 should be excluded")
  }

  test("ContextHydrator: beam shaping with --tail N") {
    val params = HydrationParams(
      slice = SliceParams(tail = Some(2)),
    )
    val res = ContextHydrator.hydrate(crystal, params)
    assert(res.isRight, s"Hydration failed: $res")
    val text = res.toOption.get

    // Only last 2 nodes: n4 and n5
    assert(!text.contains("Initialize project specification"), "n1 excluded")
    assert(!text.contains("Design pure functional architecture"), "n2 excluded")
    assert(!text.contains("Generate models and codecs"), "n3 excluded")
    assert(text.contains("Run test suite"), "n4 must be present")
    assert(text.contains("Phase 1 checkpoint approved"), "n5 must be present")
  }

  test("ContextHydrator: UUID prefix resolution for --from and --to") {
    val params = HydrationParams(
      slice = SliceParams(from = Some("node-002"), to = Some("node-004")),
    )
    val res = ContextHydrator.hydrate(crystal, params)
    assert(res.isRight, s"Hydration failed: $res")
    val text = res.toOption.get

    assert(!text.contains("Initialize project specification"), "n1 excluded")
    assert(text.contains("Design pure functional architecture"), "n2 present")
    assert(text.contains("Generate models and codecs"), "n3 present")
    assert(text.contains("Run test suite"), "n4 present")
    assert(!text.contains("Phase 1 checkpoint approved"), "n5 excluded")
  }

  test("ContextHydrator: strict error on invalid selector") {
    val params = HydrationParams(
      slice = SliceParams(from = Some("nonexistent-anchor")),
    )
    val res = ContextHydrator.hydrate(crystal, params)
    assert(res.isLeft, "Expected failure for nonexistent anchor")
    assertEquals(
      res.left.toOption.get,
      "Selector 'nonexistent-anchor' (for --from) did not match any node ID or anchor",
    )
  }

  test("ContextHydrator: strict error when from is topologically after to") {
    val params = HydrationParams(
      slice = SliceParams(from = Some("checkpoint_1"), to = Some("spec_init")),
    )
    val res = ContextHydrator.hydrate(crystal, params)
    assert(res.isLeft, "Expected failure for inverted range")
    assert(
      res.left.toOption.get.contains("Invalid slice range"),
      "Expected Invalid slice range error",
    )
  }

  test(
    "ContextHydrator: projects Artifacts & World State section and directional transition links",
  ) {
    val targetArtifact = Artifact(
      id = "art-model-file",
      name = "Models.scala",
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some("file:///core/Models.scala"),
      description = Some("Domain models source"),
    )
    val instrumentArtifact = Artifact(
      id = "art-test-rig",
      name = "CAN-bus Rig 01",
      substrate = ArtifactSubstrate.Physical,
      role = ArtifactRole.Instrument,
      uri = Some("urn:hardware:rig-01"),
      description = Some("Physical test bench"),
      location = Some(
        PhysicalLocation(
          name = "Electronics Lab",
          civicAddress = Some("Musterstraße 1, Berlin"),
          geoUri = Some("geo:52.5200,13.4050"),
          benchCoordinates = Some("Bench-07"),
        ),
      ),
    )
    val preconditionArtifact = Artifact(
      id = "art-env-power",
      name = "24V Power Bus",
      substrate = ArtifactSubstrate.Physical,
      role = ArtifactRole.Precondition,
      description = Some("Power supply ready and calibrated"),
    )

    val nodeWithCausalLinks = DAGNode(
      id = "node-causal-test",
      parentIds = Nil,
      timestamp = "2026-09-13T10:00:00Z",
      actorId = "agent_bob",
      kind = NodeKind.ToolExecution,
      contentSummary = "Flash firmware and run diagnostics",
      anchor = Some("flash_test"),
      artifactIds = List("art-model-file"),
      inputArtifactIds = List("art-model-file"),
      outputArtifactIds = List("art-diagnostics-log"),
      preconditionArtifactIds = List("art-env-power", "art-test-rig"),
    )

    val crystalWithArtifacts = crystal.copy(
      artifacts = List(targetArtifact, instrumentArtifact, preconditionArtifact),
      dag = DAG(rootNodeId = "node-causal-test", nodes = List(nodeWithCausalLinks)),
    )

    val res = ContextHydrator.hydrate(crystalWithArtifacts, HydrationParams())
    assert(res.isRight, "Expected successful hydration with artifacts")
    val text = res.toOption.get

    // Assert Artifacts & World State header and items
    assert(text.contains("## Artifacts & World State:"), "Missing artifacts section header")
    assert(
      text.contains("[Target] (Virtual) art-model-file: Models.scala"),
      "Missing Target artifact",
    )
    assert(text.contains("<file:///core/Models.scala>"), "Missing Target URI")
    assert(
      text.contains("[Instrument] (Physical) art-test-rig: CAN-bus Rig 01"),
      "Missing Instrument artifact",
    )
    assert(text.contains("@ Electronics Lab (Bench-07)"), "Missing physical bench location")
    assert(
      text.contains("[Precondition] (Physical) art-env-power: 24V Power Bus"),
      "Missing Precondition artifact",
    )

    // Assert directional links in transition line
    assert(text.contains("[inputs: art-model-file]"), "Missing inputs badge")
    assert(text.contains("[outputs: art-diagnostics-log]"), "Missing outputs badge")
    assert(
      text.contains("[preconditions: art-env-power, art-test-rig]"),
      "Missing preconditions badge",
    )
  }

  test("ContextHydrator projects connected lattice bonds with depth-1 quick peeks"):
    import ccrystal.core.model.lattice.*

    val targetCrystal = crystal.copy(
      id = "c-target-auth",
      goal = Goal(
        title = "Auth Service Refactor",
        intent = "Migrate to JWT",
        status = GoalStatus.InProgress,
        acceptanceCriteria = List(
          AcceptanceCriterion("t-1", "Design token", completed = true),
          AcceptanceCriterion("t-2", "Implement handler", completed = false),
        ),
      ),
    )

    val sourceCrystal = crystal.copy(
      id = "c-caller-billing",
      goal = Goal(
        title = "Billing Integration",
        intent = "Connect Stripe",
        status = GoalStatus.ConcludedSuccess,
        acceptanceCriteria = List(AcceptanceCriterion("t-b", "Done", completed = true)),
      ),
    )

    val outboundBond = LatticeBond(
      targetCrystalId = "c-target-auth",
      relation = BondRelation.DependsOn,
      description = Some("Requires auth tokens"),
      createdAt = "2026-10-03T18:00:00Z",
    )

    val inboundBond = InboundBond(
      sourceCrystalId = "c-caller-billing",
      bond = LatticeBond(
        targetCrystalId = crystal.id,
        relation = BondRelation.Blocks,
        description = Some("Billing blocked until crystal completes"),
        createdAt = "2026-10-03T18:05:00Z",
      ),
    )

    val bondsSummary = CrystalBondsSummary(
      crystalId = crystal.id,
      outbound = List(outboundBond),
      inbound = List(inboundBond),
    )

    val peeks = Map(
      "c-target-auth"    -> targetCrystal,
      "c-caller-billing" -> sourceCrystal,
    )

    val params = HydrationParams(
      bondsSummary = Some(bondsSummary),
      connectedPeeks = peeks,
    )

    val res = ContextHydrator.hydrate(crystal, params)
    assert(res.isRight)
    val text = res.toOption.get

    assert(text.contains("## Connected Lattice Bonds:"), "Expected Connected Lattice Bonds header")
    assert(
      text.contains(
        "- -> c-target-auth (depends_on): Requires auth tokens [Goal: Auth Service Refactor | Status: in_progress | Open Tasks: 1]",
      ),
      s"Expected formatted outbound bond with peek, got:\n$text",
    )
    assert(
      text.contains(
        "- <- c-caller-billing (blocks): Billing blocked until crystal completes [Goal: Billing Integration | Status: concluded_success | Open Tasks: 0]",
      ),
      s"Expected formatted inbound bond with peek, got:\n$text",
    )

  test("ContextHydrator omits Connected Lattice Bonds section when bonds are empty"):
    val res = ContextHydrator.hydrate(crystal, HydrationParams())
    assert(res.isRight)
    val text = res.toOption.get
    assert(!text.contains("## Connected Lattice Bonds:"))
