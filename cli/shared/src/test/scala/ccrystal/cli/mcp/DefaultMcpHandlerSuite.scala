package ccrystal.cli.mcp

import munit.FunSuite
import io.circe.Json
import io.circe.syntax.*
import ccrystal.core.mcp.*
import ccrystal.core.mcp.McpCodecs.given
import ccrystal.cli.{InMemoryCrystalStore, Runner}

class DefaultMcpHandlerSuite extends FunSuite:

  private def createFixture(): (DefaultMcpHandler, InMemoryCrystalStore, Runner) =
    val store   = new InMemoryCrystalStore()
    val runner  = new Runner(store, confirmPrompt = _ => true)
    val handler = new DefaultMcpHandler(store, runner)
    (handler, store, runner)

  test("DefaultMcpHandler handles initialize"):
    val (handler, _, _) = createFixture()
    val req = JsonRpcRequest(
      id = JsonRpcId.Num(1L),
      method = "initialize",
      params = Some(Json.obj("protocolVersion" -> "2024-11-05".asJson)),
    )
    val resp = handler.handle(req)
    assertEquals(resp.id, JsonRpcId.Num(1L))
    assertEquals(resp.error.isEmpty, true)
    assertEquals(resp.result.isDefined, true)
    val result = resp.result.get
    assertEquals(result.hcursor.get[String]("protocolVersion").toOption, Some("2024-11-05"))
    assertEquals(
      result.hcursor.downField("serverInfo").get[String]("name").toOption,
      Some("context-crystal"),
    )

  test("DefaultMcpHandler handles ping"):
    val (handler, _, _) = createFixture()
    val req = JsonRpcRequest(
      id = JsonRpcId.Num(2L),
      method = "ping",
    )
    val resp = handler.handle(req)
    assertEquals(resp.id, JsonRpcId.Num(2L))
    assertEquals(resp.error.isEmpty, true)
    assertEquals(resp.result.isDefined, true)

  test("DefaultMcpHandler handles tools/list"):
    val (handler, _, _) = createFixture()
    val req = JsonRpcRequest(
      id = JsonRpcId.Num(3L),
      method = "tools/list",
    )
    val resp = handler.handle(req)
    assertEquals(resp.error.isEmpty, true)
    val toolNames =
      resp.result.get.hcursor.downField("tools").as[List[Tool]].toOption.get.map(_.name)
    assertEquals(toolNames.contains("crystal_batch"), true)
    assertEquals(toolNames.contains("crystal_init"), true)
    assertEquals(toolNames.contains("crystal_checkpoint"), true)
    assertEquals(toolNames.contains("crystal_task_transition"), true)
    assertEquals(toolNames.contains("crystal_transient_lease"), true)
    assertEquals(toolNames.contains("crystal_slice_fork"), true)
    assertEquals(toolNames.contains("crystal_delete"), true)

  test("DefaultMcpHandler handles tools/call crystal_init and crystal_batch"):
    val (handler, store, _) = createFixture()

    // 1. crystal_init
    val initReq = JsonRpcRequest(
      id = JsonRpcId.Str("c-init"),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name" -> "crystal_init".asJson,
          "arguments" -> Json.obj(
            "name"   -> "demo-crystal".asJson,
            "goal"   -> "Demonstrate MCP".asJson,
            "author" -> "Agent".asJson,
          ),
        ),
      ),
    )
    val initResp = handler.handle(initReq)
    assertEquals(initResp.error.isEmpty, true)
    assertEquals(store.exists("demo-crystal"), true)

    // 2. crystal_batch
    val batchReq = JsonRpcRequest(
      id = JsonRpcId.Str("c-batch"),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name" -> "crystal_batch".asJson,
          "arguments" -> Json.obj(
            "commands" -> "task add -d 'Phase 1' demo-crystal; node add -k checkpoint -s 'Anchor node' demo-crystal".asJson,
          ),
        ),
      ),
    )
    val batchResp = handler.handle(batchReq)
    assertEquals(batchResp.error.isEmpty, true)
    val batchResult = batchResp.result.get.hcursor.as[CallToolResult].toOption.get
    assertEquals(batchResult.isError, false)

  test("DefaultMcpHandler handles resources/list and resources/read"):
    val (handler, _, _) = createFixture()

    // Initialize crystal
    handler.handle(
      JsonRpcRequest(
        id = JsonRpcId.Num(10L),
        method = "tools/call",
        params = Some(
          Json.obj(
            "name" -> "crystal_init".asJson,
            "arguments" -> Json.obj(
              "name" -> "res-crystal".asJson,
              "goal" -> "Test Resources".asJson,
            ),
          ),
        ),
      ),
    )

    // List resources
    val listReq  = JsonRpcRequest(id = JsonRpcId.Num(11L), method = "resources/list")
    val listResp = handler.handle(listReq)
    assertEquals(listResp.error.isEmpty, true)
    val resList = listResp.result.get.hcursor.as[ListResourcesResult].toOption.get
    val uris    = resList.resources.map(_.uri)
    assertEquals(uris.contains("crystal://res-crystal/state"), true)
    assertEquals(uris.contains("crystal://res-crystal/dag"), true)
    assertEquals(uris.contains("crystal://entities"), true)

    // Read resource state
    val readReq = JsonRpcRequest(
      id = JsonRpcId.Num(12L),
      method = "resources/read",
      params = Some(Json.obj("uri" -> "crystal://res-crystal/state".asJson)),
    )
    val readResp = handler.handle(readReq)
    assertEquals(readResp.error.isEmpty, true)
    val readResult = readResp.result.get.hcursor.as[ReadResourceResult].toOption.get
    assertEquals(readResult.contents.head.uri, "crystal://res-crystal/state")
    assertEquals(readResult.contents.head.text.contains("res-crystal"), true)

  test("DefaultMcpHandler handles prompts/list and prompts/get"):
    val (handler, _, _) = createFixture()

    // Initialize crystal
    handler.handle(
      JsonRpcRequest(
        id = JsonRpcId.Num(20L),
        method = "tools/call",
        params = Some(
          Json.obj(
            "name" -> "crystal_init".asJson,
            "arguments" -> Json.obj(
              "name" -> "prompt-crystal".asJson,
              "goal" -> "Test Prompts".asJson,
            ),
          ),
        ),
      ),
    )

    // List prompts
    val listReq  = JsonRpcRequest(id = JsonRpcId.Num(21L), method = "prompts/list")
    val listResp = handler.handle(listReq)
    assertEquals(listResp.error.isEmpty, true)
    val promptsList = listResp.result.get.hcursor.as[ListPromptsResult].toOption.get
    assertEquals(promptsList.prompts.exists(_.name == "hydrate_context"), true)

    // Get prompt
    val getReq = JsonRpcRequest(
      id = JsonRpcId.Num(22L),
      method = "prompts/get",
      params = Some(
        Json.obj(
          "name"      -> "hydrate_context".asJson,
          "arguments" -> Json.obj("crystal_id" -> "prompt-crystal".asJson),
        ),
      ),
    )
    val getResp = handler.handle(getReq)
    assertEquals(getResp.error.isEmpty, true)
    val promptResult = getResp.result.get.hcursor.as[GetPromptResult].toOption.get
    assertEquals(promptResult.messages.nonEmpty, true)
    assertEquals(promptResult.messages.head.content.text.contains("prompt-crystal"), true)

    // Get prompt triage_cave
    val triageReq = JsonRpcRequest(
      id = JsonRpcId.Num(23L),
      method = "prompts/get",
      params = Some(
        Json.obj(
          "name" -> "triage_cave".asJson,
        ),
      ),
    )
    val triageResp = handler.handle(triageReq)
    assertEquals(triageResp.error.isEmpty, true)
    val triageResult = triageResp.result.get.hcursor.as[GetPromptResult].toOption.get
    assertEquals(
      triageResult.messages.head.content.text.contains("Cave Lifecycle & Hygiene Triage Report"),
      true,
    )

  test("DefaultMcpHandler returns MethodNotFound for unknown methods"):
    val (handler, _, _) = createFixture()
    val req = JsonRpcRequest(
      id = JsonRpcId.Str("unknown"),
      method = "nonexistent/method",
    )
    val resp = handler.handle(req)
    assertEquals(resp.error.isDefined, true)
    assertEquals(resp.error.get.code, JsonRpcError.MethodNotFound)
