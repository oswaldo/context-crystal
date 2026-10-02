package ccrystal.cli.mcp

import munit.FunSuite
import java.io.{BufferedReader, ByteArrayOutputStream, PrintStream, StringReader}
import io.circe.Json
import io.circe.parser.*
import io.circe.syntax.*
import ccrystal.core.mcp.*
import ccrystal.core.mcp.McpCodecs.given
import ccrystal.core.model.*
import ccrystal.cli.{CliCommand, InMemoryCrystalStore, Runner}

class McpEndToEndSessionSuite extends FunSuite:

  test("Full end-to-end MCP client session handshake, tools, resources, prompts, and deletion"):
    val store   = new InMemoryCrystalStore()
    val runner  = new Runner(store, confirmPrompt = _ => true)
    val handler = new DefaultMcpHandler(store, runner)

    val sessionScript =
      """{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05"}}
        |{"jsonrpc":"2.0","method":"notifications/initialized"}
        |{"jsonrpc":"2.0","id":2,"method":"tools/list"}
        |{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"crystal_init","arguments":{"name":"e2e-crystal","goal":"E2E Lifecycle Goal"}}}
        |{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"crystal_batch","arguments":{"commands":"task add -d 'Implement core' e2e-crystal; node add -k agent_reasoning -s 'Analyzed requirements' e2e-crystal; task done -t task-1 e2e-crystal; node add -k checkpoint -s 'Phase 1 done' -a 'v1-checkpoint' e2e-crystal"}}}
        |{"jsonrpc":"2.0","id":5,"method":"resources/read","params":{"uri":"ccrystal://e2e-crystal/state"}}
        |{"jsonrpc":"2.0","id":6,"method":"prompts/get","params":{"name":"hydrate_context","arguments":{"crystal_id":"e2e-crystal"}}}
        |{"jsonrpc":"2.0","id":7,"method":"prompts/get","params":{"name":"triage_cave"}}
        |{"jsonrpc":"2.0","id":8,"method":"tools/call","params":{"name":"crystal_delete","arguments":{"crystal_id":"e2e-crystal","force":true}}}
        |""".stripMargin

    val in     = new BufferedReader(new StringReader(sessionScript))
    val outBuf = new ByteArrayOutputStream()
    val out    = new PrintStream(outBuf, true, "UTF-8")

    val transport = new StdioMcpTransport(in, out)
    transport.run(handler)

    val responseLines = outBuf.toString("UTF-8").split("\n").map(_.trim).filter(_.nonEmpty).toList

    // 8 requests produced 8 responses (notification 2 produces no response)
    assertEquals(responseLines.size, 8)

    // 1. initialize response
    val initResp = decode[JsonRpcResponse](responseLines(0)).toOption.get
    assertEquals(initResp.id, JsonRpcId.Num(1L))
    assertEquals(initResp.error.isEmpty, true)
    val initResult = initResp.result.get.hcursor.as[InitializeResult].toOption.get
    assertEquals(initResult.serverInfo.name, "context-crystal")

    // 2. tools/list response
    val toolsResp = decode[JsonRpcResponse](responseLines(1)).toOption.get
    assertEquals(toolsResp.id, JsonRpcId.Num(2L))
    val tools = toolsResp.result.get.hcursor.as[ListToolsResult].toOption.get.tools
    assertEquals(tools.exists(_.name == "crystal_batch"), true)
    assertEquals(tools.exists(_.name == "crystal_delete"), true)

    // 3. crystal_init response
    val crystalInitResp = decode[JsonRpcResponse](responseLines(2)).toOption.get
    assertEquals(crystalInitResp.id, JsonRpcId.Num(3L))
    val initToolResult = crystalInitResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(
      !initToolResult.isError,
      s"crystal_init failed: ${initToolResult.content.map(_.text).mkString}",
    )
    assertEquals(initToolResult.content.head.text.contains("e2e-crystal"), true)

    // 4. crystal_batch response
    val batchResp = decode[JsonRpcResponse](responseLines(3)).toOption.get
    assertEquals(batchResp.id, JsonRpcId.Num(4L))
    val batchResult = batchResp.result.get.hcursor.as[CallToolResult].toOption.get
    assertEquals(batchResult.isError, false)

    // 5. resources/read response
    val resReadResp = decode[JsonRpcResponse](responseLines(4)).toOption.get
    assertEquals(resReadResp.id, JsonRpcId.Num(5L))
    val readResult = resReadResp.result.get.hcursor.as[ReadResourceResult].toOption.get
    assertEquals(readResult.contents.head.text.contains("e2e-crystal"), true)

    // 6. prompts/get hydrate_context response
    val hydrateResp = decode[JsonRpcResponse](responseLines(5)).toOption.get
    assertEquals(hydrateResp.id, JsonRpcId.Num(6L))
    val hydrateResult = hydrateResp.result.get.hcursor.as[GetPromptResult].toOption.get
    assertEquals(hydrateResult.messages.head.content.text.contains("E2E Lifecycle Goal"), true)

    // 7. prompts/get triage_cave response
    val triageResp = decode[JsonRpcResponse](responseLines(6)).toOption.get
    assertEquals(triageResp.id, JsonRpcId.Num(7L))
    val triageResult = triageResp.result.get.hcursor.as[GetPromptResult].toOption.get
    assertEquals(
      triageResult.messages.head.content.text.contains("Cave Lifecycle & Hygiene Triage Report"),
      true,
    )

    // 8. crystal_delete response
    val deleteResp = decode[JsonRpcResponse](responseLines(7)).toOption.get
    assertEquals(deleteResp.id, JsonRpcId.Num(8L))
    val deleteResult = deleteResp.result.get.hcursor.as[CallToolResult].toOption.get
    assertEquals(deleteResult.isError, false)
    assertEquals(store.exists("e2e-crystal"), false)

  test("End-to-end selective context hydration and beam shaping via CLI and MCP"):
    val store   = new InMemoryCrystalStore()
    val runner  = new Runner(store, confirmPrompt = _ => true)
    val handler = new DefaultMcpHandler(store, runner)

    // Setup crystal with multi-milestone DAG
    runner.run(
      CliCommand.Init(
        "beam-e2e",
        "E2E Beam Shaping",
        Some("Test end to end beam shaping"),
        None,
        None,
        None,
      ),
    )
    runner.run(
      CliCommand.NodeAdd(
        "beam-e2e",
        NodeKind.HumanPrompt,
        "Init spec",
        Nil,
        anchor = Some("spec_init"),
      ),
    )
    runner.run(
      CliCommand.NodeAdd(
        "beam-e2e",
        NodeKind.AgentReasoning,
        "Architecture design",
        Nil,
        anchor = Some("arch_done"),
      ),
    )
    runner.run(CliCommand.NodeAdd("beam-e2e", NodeKind.ToolExecution, "Implement models", Nil))
    runner.run(
      CliCommand.NodeAdd(
        "beam-e2e",
        NodeKind.Checkpoint,
        "Phase 1 Green",
        Nil,
        anchor = Some("p1_green"),
      ),
    )

    // 1. CLI Cast with --from arch_done --to p1_green
    val cliCastResult =
      runner.run(CliCommand.Cast("beam-e2e", from = Some("arch_done"), to = Some("p1_green")))
    assert(cliCastResult.isRight, "CLI cast should succeed")
    val cliCastText = cliCastResult.toOption.get
    assert(!cliCastText.contains("Init spec"), "Init spec should be excluded")
    assert(cliCastText.contains("Architecture design"), "Architecture design should be present")
    assert(cliCastText.contains("Phase 1 Green"), "Phase 1 Green should be present")

    // 2. CLI Hydrate with --tail 1
    val cliHydrateResult = runner.run(CliCommand.Cast("beam-e2e", tail = Some(1)))
    assert(cliHydrateResult.isRight, "CLI hydrate should succeed")
    val cliHydrateText = cliHydrateResult.toOption.get
    assert(!cliHydrateText.contains("Architecture design"), "Arch design excluded by tail 1")
    assert(cliHydrateText.contains("Phase 1 Green"), "Phase 1 Green present with tail 1")

    // 3. MCP JSON-RPC prompts/get with arguments
    val promptReq = JsonRpcRequest(
      id = JsonRpcId.Num(101L),
      method = "prompts/get",
      params = Some(
        Json.obj(
          "name" -> "hydrate_context".asJson,
          "arguments" -> Json.obj(
            "crystal_id" -> "beam-e2e".asJson,
            "from"       -> "arch_done".asJson,
            "tail"       -> "1".asJson,
          ),
        ),
      ),
    )
    val promptResp = handler.handle(promptReq)
    assertEquals(promptResp.error.isEmpty, true)
    val promptResult = promptResp.result.get.hcursor.as[GetPromptResult].toOption.get
    val promptMsg    = promptResult.messages.head.content.text
    assert(!promptMsg.contains("Init spec"), "MCP prompt excludes node before from")
    assert(promptMsg.contains("Phase 1 Green"), "MCP prompt includes tail node")

    // 4. MCP JSON-RPC resources/read with URI query string
    val resReq = JsonRpcRequest(
      id = JsonRpcId.Num(102L),
      method = "resources/read",
      params = Some(Json.obj("uri" -> "ccrystal://beam-e2e/hydrate?tail=2".asJson)),
    )
    val resResp = handler.handle(resReq)
    assertEquals(resResp.error.isEmpty, true)
    val resResult = resResp.result.get.hcursor.as[ReadResourceResult].toOption.get
    val resText   = resResult.contents.head.text
    assert(!resText.contains("Init spec"), "Resource query excludes older nodes")
    assert(resText.contains("Phase 1 Green"), "Resource query includes recent node")

  test(
    "Full end-to-end MCP session exercising ergonomic tools (atomic init tasks, crystal_search, crystal_hydrate, crystal_triage)",
  ):
    val store   = new InMemoryCrystalStore()
    val runner  = new Runner(store, confirmPrompt = _ => true)
    val handler = new DefaultMcpHandler(store, runner)

    val sessionScript =
      """{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"protocolVersion":"2024-11-05"}}
        |{"jsonrpc":"2.0","method":"notifications/initialized"}
        |{"jsonrpc":"2.0","id":2,"method":"tools/list"}
        |{"jsonrpc":"2.0","id":3,"method":"tools/call","params":{"name":"crystal_init","arguments":{"name":"ergo-session","goal":"Ergonomic Tools E2E","tasks":["T1 Design","T2 Implement"]}}}
        |{"jsonrpc":"2.0","id":4,"method":"tools/call","params":{"name":"crystal_search","arguments":{"json_output":true}}}
        |{"jsonrpc":"2.0","id":5,"method":"tools/call","params":{"name":"crystal_stats","arguments":{"detailed":true,"json_output":false}}}
        |{"jsonrpc":"2.0","id":6,"method":"tools/call","params":{"name":"crystal_hydrate","arguments":{"crystal_id":"ergo-session","summary_only":true}}}
        |{"jsonrpc":"2.0","id":7,"method":"tools/call","params":{"name":"crystal_triage","arguments":{"json_output":false}}}
        |{"jsonrpc":"2.0","id":8,"method":"tools/call","params":{"name":"crystal_delete","arguments":{"crystal_id":"ergo-session","force":true}}}
        |""".stripMargin

    val in        = new BufferedReader(new StringReader(sessionScript))
    val outBuf    = new ByteArrayOutputStream()
    val out       = new PrintStream(outBuf, true, "UTF-8")
    val transport = new StdioMcpTransport(in, out)
    transport.run(handler)

    val responseLines = outBuf.toString("UTF-8").split("\n").map(_.trim).filter(_.nonEmpty).toList
    assertEquals(responseLines.size, 8)

    // 1. initialize
    val initResp = decode[JsonRpcResponse](responseLines(0)).toOption.get
    assertEquals(initResp.id, JsonRpcId.Num(1L))
    assertEquals(initResp.error.isEmpty, true)

    // 2. tools/list
    val toolsResp = decode[JsonRpcResponse](responseLines(1)).toOption.get
    val tools     = toolsResp.result.get.hcursor.as[ListToolsResult].toOption.get.tools
    assert(tools.exists(_.name == "crystal_search"), "must list crystal_search")
    assert(tools.exists(_.name == "crystal_stats"), "must list crystal_stats")
    assert(!tools.exists(_.name == "crystal_list"), "must not list obsolete crystal_list")
    assert(tools.exists(_.name == "crystal_hydrate"), "must list crystal_hydrate")
    assert(tools.exists(_.name == "crystal_triage"), "must list crystal_triage")

    // 3. crystal_init with tasks
    val cInitResp   = decode[JsonRpcResponse](responseLines(2)).toOption.get
    val cInitResult = cInitResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(
      !cInitResult.isError,
      s"crystal_init failed: ${cInitResult.content.map(_.text).mkString}",
    )
    assert(cInitResult.content.head.text.contains("ergo-session"), "must mention crystal id")

    // 4. crystal_search (json)
    val listResp   = decode[JsonRpcResponse](responseLines(3)).toOption.get
    val listResult = listResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(!listResult.isError, "crystal_search must succeed")
    assert(
      listResult.content.head.text.contains("\"id\" : \"ergo-session\""),
      "must contain crystal id",
    )

    // 5. crystal_stats
    val statsResp   = decode[JsonRpcResponse](responseLines(4)).toOption.get
    val statsResult = statsResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(!statsResult.isError, "crystal_stats must succeed")
    assert(
      statsResult.content.head.text.contains("=== CONTEXT CRYSTAL CAVE METRICS & STATS ==="),
      "stats header",
    )
    assert(statsResult.content.head.text.contains("ergo-session"), "crystal in stats")

    // 6. crystal_hydrate (summary_only)
    val hydResp   = decode[JsonRpcResponse](responseLines(5)).toOption.get
    val hydResult = hydResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(!hydResult.isError, "crystal_hydrate must succeed")
    assert(hydResult.content.head.text.contains("Ergonomic Tools E2E"), "must contain goal title")

    // 7. crystal_triage (markdown table)
    val triageResp   = decode[JsonRpcResponse](responseLines(6)).toOption.get
    val triageResult = triageResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(!triageResult.isError, "crystal_triage must succeed")
    assert(triageResult.content.head.text.contains("ergo-session"), "triage must list ergo-session")
    assert(triageResult.content.head.text.contains("Keep"), "in-progress crystal must be Keep")

    // 8. crystal_delete
    val delResp   = decode[JsonRpcResponse](responseLines(7)).toOption.get
    val delResult = delResp.result.get.hcursor.as[CallToolResult].toOption.get
    assert(!delResult.isError, "crystal_delete must succeed")
    assertEquals(store.exists("ergo-session"), false)
