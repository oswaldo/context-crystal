package ccrystal.core

import munit.FunSuite
import io.circe.parser.*
import io.circe.syntax.*
import ccrystal.core.model.*
import ccrystal.core.codec.given

class ModelCodecSuite extends FunSuite:

  test("Round-trip serialization of minimal ContextCrystal"):
    val goal = Goal(
      title = "Fix NPE in User Parser",
      intent = "Investigate and resolve NPE thrown when user email is omitted.",
      status = GoalStatus.InProgress,
      acceptanceCriteria = List(
        AcceptanceCriterion("ac-1", "Reproduce NPE with failing test", completed = true),
        AcceptanceCriterion("ac-2", "Make email optional in parser", completed = false),
      ),
    )

    val entities = List(
      Entity("ent-human-1", EntityKind.Human, "Lead Developer", Map.empty),
      Entity("ent-model-1", EntityKind.Model, "Gemini 3.7 Flash", Map("temperature" -> "0.2")),
    )

    val dag = DAG(
      rootNodeId = "node-root-1",
      nodes = List(
        DAGNode(
          id = "node-root-1",
          parentIds = Nil,
          timestamp = "2026-08-28T12:00:00Z",
          actorId = "ent-human-1",
          kind = NodeKind.HumanPrompt,
          contentSummary = "Please fix NPE when user JSON lacks email field.",
          artifactIds = Nil,
        ),
      ),
    )

    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "cc-minimal-001",
      name = Some("Minimal Context Crystal"),
      createdAt = "2026-08-28T12:00:00Z",
      updatedAt = "2026-08-28T12:00:00Z",
      parentCrystalId = None,
      goal = goal,
      entities = entities,
      activeMask = None,
      dag = dag,
      transientLeases = Nil,
      lessonsLearned = Nil,
      artifacts = Nil,
    )

    val json    = crystal.asJson
    val decoded = decode[ContextCrystal](json.noSpaces)
    assertEquals(decoded, Right(crystal))

  test("Round-trip serialization of full crystal with transient leases and lessons learned"):
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = "cc-full-002",
      name = Some("Full Crystal"),
      createdAt = "2026-08-28T12:00:00Z",
      updatedAt = "2026-08-28T13:30:00Z",
      parentCrystalId = None,
      goal = Goal(
        title = "Implement High-Performance Cross-Compiled Parser",
        intent = "Deliver zero-reflection Scala 3 parser",
        status = GoalStatus.ConcludedSuccess,
        acceptanceCriteria = List(AcceptanceCriterion("ac-1", "Pass all runtimes", true)),
      ),
      entities = List(Entity("ent-1", EntityKind.Human, "Architect", Map.empty)),
      activeMask = Some(Mask("TDD", "Persona", List("fs_write"), Map.empty)),
      dag = DAG(
        "n-1",
        List(
          DAGNode(
            "n-1",
            Nil,
            "2026-08-28T12:00:00Z",
            "ent-1",
            NodeKind.HumanPrompt,
            "Start",
            artifactIds = Nil,
          ),
        ),
      ),
      transientLeases = List(
        TransientLease(
          id = "lease-1",
          resourceType = TransientResourceType.GitWorktree,
          resourcePath = Some(".git/worktrees/spike"),
          description = "Spike worktree",
          disposalPolicy = DisposalPolicy.RevertOnConclusion,
          status = TransientLeaseStatus.Cleaned,
          createdAt = "2026-08-28T12:20:00Z",
        ),
      ),
      lessonsLearned = List(
        LessonLearned(
          id = "lesson-1",
          observedFriction = "Portability issue",
          rootCause = Some("Java time import"),
          recommendedAction = Some("Use scala-java-time"),
          status = LessonStatus.Actioned,
          actionAuditTrail = List(
            ActionAuditEntry("2026-08-28T13:00:00Z", "Updated tech-stack.md", "ent-1"),
          ),
        ),
      ),
      artifacts = List(
        Artifact("art-1", "file:///build.sbt", "text/x-scala", Some("Build file"), Some("hash123")),
      ),
    )

    val json    = crystal.asJson
    val decoded = decode[ContextCrystal](json.noSpaces)
    assertEquals(decoded, Right(crystal))

  test("Round-trip serialization of AuthorshipMode and EntityRegistry"):
    val registry = EntityRegistry(
      caveId = Some("acme/eng/platform"),
      authorshipMode = AuthorshipMode.Tracked,
      entities = Map(
        "usr_oswaldo" -> Entity(
          "usr_oswaldo",
          EntityKind.Human,
          "oswaldo",
          Map("role" -> "architect"),
        ),
        "agt_antigravity_1" -> Entity(
          "agt_antigravity_1",
          EntityKind.Agent,
          "antigravity-1",
          Map("model" -> "gemini-3.7-flash"),
        ),
      ),
    )

    val json    = registry.asJson
    val decoded = decode[EntityRegistry](json.noSpaces)
    assertEquals(decoded, Right(registry))

  test("AuthorshipMode enum values serialization"):
    assertEquals(AuthorshipMode.None.asJson.asString, Some("none"))
    assertEquals(AuthorshipMode.Tracked.asJson.asString, Some("tracked"))
    assertEquals(AuthorshipMode.Signed.asJson.asString, Some("signed"))
    assertEquals(decode[AuthorshipMode]("\"none\""), Right(AuthorshipMode.None))
    assertEquals(decode[AuthorshipMode]("\"tracked\""), Right(AuthorshipMode.Tracked))
    assertEquals(decode[AuthorshipMode]("\"signed\""), Right(AuthorshipMode.Signed))

  test("Extensible metadata support across ContextCrystal, DAGNode, and Goal"):
    val node = DAGNode(
      id = "n-1",
      parentIds = Nil,
      timestamp = "2026-08-30T12:00:00Z",
      actorId = "agt_antigravity_1",
      kind = NodeKind.AgentReasoning,
      contentSummary = "Synthesized next steps",
      artifactIds = Nil,
      metadata = Map("tokens_used" -> "120", "temperature" -> "0.2"),
    )
    val decodedNode = decode[DAGNode](node.asJson.noSpaces)
    assertEquals(decodedNode, Right(node))

  test("Round-trip serialization of CrystalOrigin and Entity endpoints"):
    val origin = CrystalOrigin(
      parentCrystalId = "cc-parent-999",
      parentNodeId = Some("node-parent-42"),
      reason = Some("fork_bug_investigation"),
      createdAt = Some("2026-09-06T04:00:00Z"),
    )
    val entity = Entity(
      id = "ent-worker-1",
      kind = EntityKind.Agent,
      name = "Subagent Worker",
      metadata = Map("cluster" -> "gpu-us-east"),
      publicKey = Some("ssh-ed25519 AAAAC3NzaC1lZDI1NTE5..."),
      endpoints = Map(
        "inbox" -> ".ccrystals/_comms/ent-worker-1/inbox",
        "rpc"   -> "http://127.0.0.1:9090",
      ),
    )

    assertEquals(decode[CrystalOrigin](origin.asJson.noSpaces), Right(origin))
    assertEquals(decode[Entity](entity.asJson.noSpaces), Right(entity))

  test(
    "Round-trip serialization of DAGNode with new CaptureFidelity enum (both Inferred and Intercepted)",
  ):
    val nodeInferred = DAGNode(
      id = "n-1",
      parentIds = Nil,
      timestamp = "2026-09-06T12:00:00Z",
      actorId = "usr_oswaldo",
      kind = NodeKind.HumanPrompt,
      contentSummary = "Let's start",
      artifactIds = Nil,
      fidelity = CaptureFidelity.Inferred,
      metadata = Map.empty,
    )
    val nodeIntercepted = nodeInferred.copy(
      id = "n-2",
      fidelity = CaptureFidelity.Intercepted,
    )

    assertEquals(decode[DAGNode](nodeInferred.asJson.noSpaces), Right(nodeInferred))
    assertEquals(decode[DAGNode](nodeIntercepted.asJson.noSpaces), Right(nodeIntercepted))

  test(
    "Legacy JSON payloads missing the fidelity field deserialize cleanly with Inferred as default",
  ):
    val legacyJson =
      """
        |{
        |  "id": "n-legacy",
        |  "parentIds": [],
        |  "timestamp": "2026-09-06T12:00:00Z",
        |  "actorId": "usr_oswaldo",
        |  "kind": "human_prompt",
        |  "contentSummary": "Old crystal node"
        |}
        |""".stripMargin

    val expectedNode = DAGNode(
      id = "n-legacy",
      parentIds = Nil,
      timestamp = "2026-09-06T12:00:00Z",
      actorId = "usr_oswaldo",
      kind = NodeKind.HumanPrompt,
      contentSummary = "Old crystal node",
      artifactIds = Nil,
      fidelity = CaptureFidelity.Inferred,
      metadata = Map.empty,
    )

    assertEquals(decode[DAGNode](legacyJson), Right(expectedNode))

  test("CaptureFidelity enum values serialization"):
    assertEquals(CaptureFidelity.Inferred.asJson.asString, Some("inferred"))
    assertEquals(CaptureFidelity.Intercepted.asJson.asString, Some("intercepted"))
    assertEquals(decode[CaptureFidelity]("\"inferred\""), Right(CaptureFidelity.Inferred))
    assertEquals(decode[CaptureFidelity]("\"intercepted\""), Right(CaptureFidelity.Intercepted))

  test("Round-trip serialization of DAGNode with semantic anchor"):
    val nodeWithAnchor = DAGNode(
      id = "n-anchor-1",
      parentIds = Nil,
      timestamp = "2026-09-06T17:30:00Z",
      actorId = "usr_oswaldo",
      kind = NodeKind.Checkpoint,
      contentSummary = "Reached stable checkpoint",
      anchor = Some("v1_milestone"),
      artifactIds = Nil,
      fidelity = CaptureFidelity.Intercepted,
      metadata = Map.empty,
    )
    val nodeWithoutAnchor = nodeWithAnchor.copy(
      id = "n-anchor-2",
      anchor = None,
    )

    assertEquals(decode[DAGNode](nodeWithAnchor.asJson.noSpaces), Right(nodeWithAnchor))
    assertEquals(decode[DAGNode](nodeWithoutAnchor.asJson.noSpaces), Right(nodeWithoutAnchor))

  test("Legacy JSON payloads missing the anchor field deserialize cleanly with None as default"):
    val legacyJson =
      """
        |{
        |  "id": "n-legacy-no-anchor",
        |  "parentIds": [],
        |  "timestamp": "2026-09-06T12:00:00Z",
        |  "actorId": "usr_oswaldo",
        |  "kind": "human_prompt",
        |  "contentSummary": "Old crystal node without anchor"
        |}
        |""".stripMargin

    val expectedNode = DAGNode(
      id = "n-legacy-no-anchor",
      parentIds = Nil,
      timestamp = "2026-09-06T12:00:00Z",
      actorId = "usr_oswaldo",
      kind = NodeKind.HumanPrompt,
      contentSummary = "Old crystal node without anchor",
      anchor = None,
      artifactIds = Nil,
      fidelity = CaptureFidelity.Inferred,
      metadata = Map.empty,
    )

    assertEquals(decode[DAGNode](legacyJson), Right(expectedNode))

  test("ArtifactSubstrate enum serialization"):
    assertEquals(ArtifactSubstrate.Virtual.asJson.asString, Some("virtual"))
    assertEquals(ArtifactSubstrate.Physical.asJson.asString, Some("physical"))
    assertEquals(decode[ArtifactSubstrate]("\"virtual\""), Right(ArtifactSubstrate.Virtual))
    assertEquals(decode[ArtifactSubstrate]("\"physical\""), Right(ArtifactSubstrate.Physical))

  test("ArtifactRole enum serialization"):
    assertEquals(ArtifactRole.Target.asJson.asString, Some("target"))
    assertEquals(ArtifactRole.Instrument.asJson.asString, Some("instrument"))
    assertEquals(ArtifactRole.Precondition.asJson.asString, Some("precondition"))
    assertEquals(decode[ArtifactRole]("\"target\""), Right(ArtifactRole.Target))
    assertEquals(decode[ArtifactRole]("\"instrument\""), Right(ArtifactRole.Instrument))
    assertEquals(decode[ArtifactRole]("\"precondition\""), Right(ArtifactRole.Precondition))

  test("Round-trip serialization of PhysicalLocation"):
    val location = PhysicalLocation(
      name = "Hardware Bench A",
      civicAddress = Some("Musterstraße 1, Berlin"),
      geoUri = Some("geo:52.5200,13.4050"),
      benchCoordinates = Some("Rack-04 / Shelf-B / Bench-12"),
    )
    val json = location.asJson.noSpaces
    assertEquals(decode[PhysicalLocation](json), Right(location))

  test("Round-trip serialization of Virtual and Physical Artifacts"):
    val virtualArtifact = Artifact(
      id = "art-core-models",
      name = "Core Models Scala Source",
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some("file:///home/example/ccrystal/Models.scala"),
      mediaType = Some("text/x-scala"),
      description = Some("Scala 3 source defining core domain ADTs"),
      location = None,
      metadata = Map("version" -> "1.1"),
    )

    val physicalArtifact = Artifact(
      id = "art-rig-01",
      name = "CAN-bus Hardware Test Rig",
      substrate = ArtifactSubstrate.Physical,
      role = ArtifactRole.Instrument,
      uri = Some("urn:hardware:can-rig:01"),
      mediaType = None,
      description = Some("Bench test rig with logic analyzer"),
      location = Some(
        PhysicalLocation(
          name = "Electronics Lab 2",
          civicAddress = Some("Musterstraße 1, Berlin"),
          geoUri = Some("geo:52.5200,13.4050"),
          benchCoordinates = Some("Bench-07"),
        ),
      ),
      metadata = Map("calibrated" -> "true"),
    )

    assertEquals(decode[Artifact](virtualArtifact.asJson.noSpaces), Right(virtualArtifact))
    assertEquals(decode[Artifact](physicalArtifact.asJson.noSpaces), Right(physicalArtifact))

  test("Legacy Artifact payloads deserialize cleanly with default substrate and role"):
    val legacyJson =
      """
        |{
        |  "id": "art-legacy",
        |  "uri": "https://example.com/schema.json",
        |  "mediaType": "application/json",
        |  "description": "Legacy schema"
        |}
        |""".stripMargin

    val expected = Artifact(
      id = "art-legacy",
      name = "art-legacy",
      substrate = ArtifactSubstrate.Virtual,
      role = ArtifactRole.Target,
      uri = Some("https://example.com/schema.json"),
      mediaType = Some("application/json"),
      description = Some("Legacy schema"),
      location = None,
      metadata = Map.empty,
    )
    assertEquals(decode[Artifact](legacyJson), Right(expected))

  test("Round-trip serialization of DAGNode with directional artifact linkages"):
    val node = DAGNode(
      id = "node-artifact-causal-1",
      parentIds = List("root"),
      timestamp = "2026-09-13T10:00:00Z",
      actorId = "usr_oswaldo",
      kind = NodeKind.ToolExecution,
      contentSummary = "Flashed firmware to physical test rig",
      anchor = Some("flash_firmware"),
      artifactIds = List("art-firmware-bin"),
      inputArtifactIds = List("art-firmware-bin"),
      outputArtifactIds = List("art-flash-log"),
      preconditionArtifactIds = List("art-rig-01"),
      fidelity = CaptureFidelity.Intercepted,
      metadata = Map("duration_ms" -> "3420"),
    )

    assertEquals(decode[DAGNode](node.asJson.noSpaces), Right(node))

  test("Legacy DAGNode without directional artifact links deserializes cleanly"):
    val legacyJson =
      """
        |{
        |  "id": "node-legacy-artifacts",
        |  "parentIds": [],
        |  "timestamp": "2026-09-13T10:00:00Z",
        |  "actorId": "usr_oswaldo",
        |  "kind": "tool_execution",
        |  "contentSummary": "Ran tests",
        |  "artifactIds": ["art-1"]
        |}
        |""".stripMargin

    val expected = DAGNode(
      id = "node-legacy-artifacts",
      parentIds = Nil,
      timestamp = "2026-09-13T10:00:00Z",
      actorId = "usr_oswaldo",
      kind = NodeKind.ToolExecution,
      contentSummary = "Ran tests",
      anchor = None,
      artifactIds = List("art-1"),
      inputArtifactIds = Nil,
      outputArtifactIds = Nil,
      preconditionArtifactIds = Nil,
      fidelity = CaptureFidelity.Inferred,
      metadata = Map.empty,
    )

    assertEquals(decode[DAGNode](legacyJson), Right(expected))

  test("Round-trip serialization of CaveArtifactRegistry"):
    val registry = CaveArtifactRegistry(
      caveId = Some("cave-berlin-lab"),
      artifacts = Map(
        "art-rig-01" -> Artifact(
          id = "art-rig-01",
          name = "CAN-bus Hardware Test Rig",
          substrate = ArtifactSubstrate.Physical,
          role = ArtifactRole.Instrument,
          uri = Some("urn:hardware:can-rig:01"),
          mediaType = None,
          description = Some("Bench test rig"),
          location = Some(
            PhysicalLocation(
              name = "Electronics Lab",
              civicAddress = Some("Musterstraße 1, Berlin"),
              geoUri = Some("geo:52.5200,13.4050"),
              benchCoordinates = Some("Bench-07"),
            ),
          ),
          metadata = Map.empty,
        ),
      ),
      metadata = Map("owner" -> "Hardware Guild"),
    )

    assertEquals(decode[CaveArtifactRegistry](registry.asJson.noSpaces), Right(registry))

  test("Round-trip serialization of CaveStats and stats sub-models"):
    import ccrystal.core.model.stats.*
    import ccrystal.core.model.search.AgingCategory

    val stats = CaveStats(
      filter = None,
      extents = TemporalExtents(
        oldestCrystalId = Some("c-old"),
        oldestCreatedAt = Some("2026-08-28T10:00:00Z"),
        newestCrystalId = Some("c-new"),
        newestUpdatedAt = Some("2026-10-02T01:00:00Z"),
        spanDays = 35L,
      ),
      structure = StructuralTotals(
        totalCrystals = 12,
        activeCrystals = 10,
        archivedCrystals = 2,
        totalDagNodes = 142L,
        totalTasks = 50,
        completedTasks = 45,
        openTasks = 5,
        activeLeases = 1,
        totalLessons = 8,
        openLessons = 0,
        totalArtifacts = 4,
        totalEntities = 3,
      ),
      storage = StorageFootprint(
        activeBytes = 400000L,
        archivedBytes = 50000L,
        totalBytes = 450000L,
        averageCrystalBytes = 37500L,
      ),
      tokenSavings = TokenSavingsEstimate(
        estimatedRawDagTokens = 200000L,
        estimatedHydratedTokens = 15000L,
        estimatedTokensSaved = 185000L,
        savingsPercentage = 92.5,
      ),
      health = CaveHealthBreakdown(
        byStatus = Map("concluded_success" -> 10, "in_progress" -> 2),
        byAging = Map("solid" -> 10, "active" -> 2),
      ),
      topCrystals = List(
        CrystalDiskUsage(
          crystalId = "c-large",
          status = GoalStatus.ConcludedSuccess,
          aging = AgingCategory.Solid,
          totalBytes = 150000L,
          dagNodes = 40,
          estimatedTokens = 60000L,
          isArchived = false,
        ),
      ),
    )

    val json    = stats.asJson.noSpaces
    val decoded = decode[CaveStats](json)
    assertEquals(decoded, Right(stats))
