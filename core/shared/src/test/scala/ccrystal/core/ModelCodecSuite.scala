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
        AcceptanceCriterion("ac-2", "Make email optional in parser", completed = false)
      )
    )

    val entities = List(
      Entity("ent-human-1", EntityKind.Human, "Lead Developer", Map.empty),
      Entity("ent-model-1", EntityKind.Model, "Gemini 3.7 Flash", Map("temperature" -> "0.2"))
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
          artifactIds = Nil
        )
      )
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
      artifacts = Nil
    )

    val json = crystal.asJson
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
        acceptanceCriteria = List(AcceptanceCriterion("ac-1", "Pass all runtimes", true))
      ),
      entities = List(Entity("ent-1", EntityKind.Human, "Architect", Map.empty)),
      activeMask = Some(Mask("TDD", "Persona", List("fs_write"), Map.empty)),
      dag = DAG("n-1", List(DAGNode("n-1", Nil, "2026-08-28T12:00:00Z", "ent-1", NodeKind.HumanPrompt, "Start", Nil))),
      transientLeases = List(
        TransientLease(
          id = "lease-1",
          resourceType = TransientResourceType.GitWorktree,
          resourcePath = Some(".git/worktrees/spike"),
          description = "Spike worktree",
          disposalPolicy = DisposalPolicy.RevertOnConclusion,
          status = TransientLeaseStatus.Cleaned,
          createdAt = "2026-08-28T12:20:00Z"
        )
      ),
      lessonsLearned = List(
        LessonLearned(
          id = "lesson-1",
          observedFriction = "Portability issue",
          rootCause = Some("Java time import"),
          recommendedAction = Some("Use scala-java-time"),
          status = LessonStatus.Actioned,
          actionAuditTrail = List(
            ActionAuditEntry("2026-08-28T13:00:00Z", "Updated tech-stack.md", "ent-1")
          )
        )
      ),
      artifacts = List(
        Artifact("art-1", "file:///build.sbt", "text/x-scala", Some("Build file"), Some("hash123"))
      )
    )

    val json = crystal.asJson
    val decoded = decode[ContextCrystal](json.noSpaces)
    assertEquals(decoded, Right(crystal))

  test("Round-trip serialization of AuthorshipMode and EntityRegistry"):
    val registry = EntityRegistry(
      caveId = Some("acme/eng/platform"),
      authorshipMode = AuthorshipMode.Tracked,
      entities = Map(
        "usr_oswaldo" -> Entity("usr_oswaldo", EntityKind.Human, "oswaldo", Map("role" -> "architect")),
        "agt_antigravity_1" -> Entity("agt_antigravity_1", EntityKind.Agent, "antigravity-1", Map("model" -> "gemini-3.7-flash"))
      )
    )

    val json = registry.asJson
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
      metadata = Map("tokens_used" -> "120", "temperature" -> "0.2")
    )
    val decodedNode = decode[DAGNode](node.asJson.noSpaces)
    assertEquals(decodedNode, Right(node))

  test("Round-trip serialization of CrystalOrigin and Entity endpoints"):
    val origin = CrystalOrigin(
      parentCrystalId = "cc-parent-999",
      parentNodeId = Some("node-parent-42"),
      reason = Some("fork_bug_investigation"),
      createdAt = Some("2026-09-06T04:00:00Z")
    )
    val entity = Entity(
      id = "ent-worker-1",
      kind = EntityKind.Agent,
      name = "Subagent Worker",
      metadata = Map("cluster" -> "gpu-us-east"),
      publicKey = Some("ssh-ed25519 AAAAC3NzaC1lZDI1NTE5..."),
      endpoints = Map(
        "inbox" -> ".ccrystals/_comms/ent-worker-1/inbox",
        "rpc" -> "http://127.0.0.1:9090"
      )
    )

    assertEquals(decode[CrystalOrigin](origin.asJson.noSpaces), Right(origin))
    assertEquals(decode[Entity](entity.asJson.noSpaces), Right(entity))

