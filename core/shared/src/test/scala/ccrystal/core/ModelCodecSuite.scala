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
