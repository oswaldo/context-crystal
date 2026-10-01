package ccrystal.cli

import ccrystal.core.model.*
import ccrystal.core.model.search.*
import io.circe.parser.decode
import munit.FunSuite

class RunnerSearchSuite extends FunSuite:

  private def createSampleCrystal(
      store: InMemoryCrystalStore,
      id: String,
      title: String,
      intent: String = "Sample Intent",
      status: GoalStatus = GoalStatus.InProgress,
      tasks: List[AcceptanceCriterion] = Nil,
      leases: List[TransientLease] = Nil,
      lessons: List[LessonLearned] = Nil,
  ): ContextCrystal =
    val rootNode = DAGNode(
      id = s"node-$id-1",
      parentIds = Nil,
      timestamp = "2026-09-25T10:00:00Z",
      actorId = "usr_tester",
      kind = NodeKind.HumanPrompt,
      contentSummary = s"Initial prompt for $id",
    )
    val crystal = ContextCrystal(
      schemaVersion = "1.0.0",
      id = id,
      name = Some(id),
      createdAt = "2026-09-25T10:00:00Z",
      updatedAt = "2026-09-25T10:00:00Z",
      defaultAuthorId = Some("usr_tester"),
      goal = Goal(title, intent, status, tasks),
      entities = List(Entity("usr_tester", EntityKind.Human, "Tester")),
      dag = DAG(rootNode.id, List(rootNode)),
      transientLeases = leases,
      lessonsLearned = lessons,
    )
    store.save(crystal).toOption.get
    crystal

  test("Runner.run with CliCommand.Search formats text table output"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "mcp-engine", "Native MCP Server Engine")
    createSampleCrystal(store, "auth-tokens", "Security and authorization tokens")
    val runner = new Runner(store)

    val res = runner.run(CliCommand.Search(CrystalFilter(query = Some("mcp")), jsonOutput = false))
    assert(res.isRight, s"Runner failed: $res")
    val output = res.toOption.get
    assert(output.contains("Found 1 crystal(s) matching query 'mcp':"))
    assert(output.contains("- mcp-engine [InProgress]"))
    assert(!output.contains("auth-tokens"))

  test("Runner.run with CliCommand.Search formats JSON output"):
    val store = new InMemoryCrystalStore()
    createSampleCrystal(store, "mcp-engine", "Native MCP Server Engine")
    val runner = new Runner(store)

    val res = runner.run(CliCommand.Search(CrystalFilter(query = Some("mcp")), jsonOutput = true))
    assert(res.isRight, s"Runner failed: $res")
    val output = res.toOption.get
    import ccrystal.core.codec.given
    val decoded = decode[List[SearchMatch]](output)
    assert(decoded.isRight, s"Failed to decode JSON output: $decoded")
    val matches = decoded.toOption.get
    assertEquals(matches.size, 1)
    assertEquals(matches.head.crystal.id, "mcp-engine")
