package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerNodeSuite extends FunSuite:

  test("CommandParser parses 'node list' with all flags"):
    val args = List(
      "node",
      "list",
      "test-crystal",
      "--query",
      "media",
      "--kind",
      "checkpoint",
      "--author",
      "usr_oswaldo",
      "--sort",
      "oldest",
      "--limit",
      "10",
      "--offset",
      "5",
      "--json",
    )
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight, s"Failed to parse: $parsed")
    parsed.foreach {
      case CliCommand.NodeList(id, q, k, u, s, limit, offset, all, json) =>
        assertEquals(id, "test-crystal")
        assertEquals(q, Some("media"))
        assertEquals(k, Some(NodeKind.Checkpoint))
        assertEquals(u, Some("usr_oswaldo"))
        assertEquals(s, DAGNodeSort.Oldest)
        assertEquals(limit, 10)
        assertEquals(offset, 5)
        assertEquals(all, false)
        assertEquals(json, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("CommandParser parses 'node list' with --all"):
    val args   = List("node", "list", "test-crystal", "--all")
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.NodeList(id, _, _, _, _, limit, offset, all, _) =>
        assertEquals(id, "test-crystal")
        assertEquals(limit, 0)
        assertEquals(all, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("CommandParser parses 'node show'"):
    val args   = List("node", "show", "test-crystal", "node-1", "--json")
    val parsed = CommandParser.parse(args)
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.NodeShow(id, nid, json) =>
        assertEquals(id, "test-crystal")
        assertEquals(nid, "node-1")
        assertEquals(json, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("CommandParser parses 'hydrate' and 'cast' with --all"):
    val parsed1 = CommandParser.parse(List("hydrate", "test-crystal", "--all"))
    assert(parsed1.isRight)
    parsed1.foreach {
      case CliCommand.Cast(id, _, _, _, _, _, all) =>
        assertEquals(id, "test-crystal")
        assertEquals(all, true)
      case other => fail(s"Unexpected: $other")
    }

  test("Runner executes 'node list' and 'node show' with formatted and JSON output"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)

    // Init crystal
    runner.run(CliCommand.Init("c1", "Goal 1", Some("Intent 1"))).toOption.get

    // Add nodes
    runner
      .run(
        CliCommand.NodeAdd(
          crystalId = "c1",
          kind = NodeKind.AgentReasoning,
          summary = "Reasoning about media provenance",
          parentIds = Nil,
          author = Some("agt_test"),
          anchor = Some("anchor-1"),
        ),
      )
      .toOption
      .get

    runner
      .run(
        CliCommand.NodeAdd(
          crystalId = "c1",
          kind = NodeKind.Checkpoint,
          summary = "Checkpoint passed",
          parentIds = Nil,
          author = Some("usr_oswaldo"),
        ),
      )
      .toOption
      .get

    // List all
    val listRes = runner.run(CliCommand.NodeList("c1", all = true))
    assert(listRes.isRight)
    val text = listRes.toOption.get
    assert(text.contains("DAG transition nodes for crystal 'c1'"), "header present")
    assert(text.contains("Reasoning about media provenance"), "summary present")
    assert(text.contains("Checkpoint passed"), "second summary present")

    // List with query filter
    val filterRes = runner.run(CliCommand.NodeList("c1", query = Some("media")))
    assert(filterRes.isRight)
    assert(filterRes.toOption.get.contains("Reasoning about media provenance"))
    assert(!filterRes.toOption.get.contains("Checkpoint passed"))

    // List JSON
    val jsonRes = runner.run(CliCommand.NodeList("c1", jsonOutput = true))
    assert(jsonRes.isRight)
    assert(jsonRes.toOption.get.contains("\"contentSummary\" : \"Checkpoint passed\""))

    // Show single node
    val showRes = runner.run(CliCommand.NodeShow("c1", "node-2"))
    assert(showRes.isRight)
    val showText = showRes.toOption.get
    assert(showText.contains("DAG Node: node-2"))
    assert(showText.contains("Kind: AgentReasoning"))
    assert(showText.contains("Actor: agt_test"))
    assert(showText.contains("Anchor: anchor-1"))

    // Show single node JSON
    val showJsonRes = runner.run(CliCommand.NodeShow("c1", "node-2", jsonOutput = true))
    assert(showJsonRes.isRight)
    assert(showJsonRes.toOption.get.contains("\"id\" : \"node-2\""))

    // Show non-existent node
    val notFound = runner.run(CliCommand.NodeShow("c1", "node-999"))
    assert(notFound.isLeft)
    assertEquals(notFound.left.toOption.get, "Node 'node-999' not found in crystal 'c1'")
