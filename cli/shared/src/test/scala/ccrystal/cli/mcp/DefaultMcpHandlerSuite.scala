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
    assertEquals(uris.contains("ccrystal://res-crystal/state"), true)
    assertEquals(uris.contains("ccrystal://res-crystal/dag"), true)
    assertEquals(uris.contains("ccrystal://entities"), true)

    // Read resource state
    val readReq = JsonRpcRequest(
      id = JsonRpcId.Num(12L),
      method = "resources/read",
      params = Some(Json.obj("uri" -> "ccrystal://res-crystal/state".asJson)),
    )
    val readResp = handler.handle(readReq)
    assertEquals(readResp.error.isEmpty, true)
    val readResult = readResp.result.get.hcursor.as[ReadResourceResult].toOption.get
    assertEquals(readResult.contents.head.uri, "ccrystal://res-crystal/state")
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

  test(
    "DefaultMcpHandler supports selective hydrate_context prompt arguments and ccrystal://{id}/hydrate resource",
  ):
    val (handler, _, _) = createFixture()

    // Initialize crystal and add nodes
    handler.handle(
      JsonRpcRequest(
        id = JsonRpcId.Num(30L),
        method = "tools/call",
        params = Some(
          Json.obj(
            "name" -> "crystal_init".asJson,
            "arguments" -> Json.obj(
              "name" -> "beam-crystal".asJson,
              "goal" -> "Test MCP Beam Shaping".asJson,
            ),
          ),
        ),
      ),
    )
    handler.handle(
      JsonRpcRequest(
        id = JsonRpcId.Num(31L),
        method = "tools/call",
        params = Some(
          Json.obj(
            "name" -> "crystal_checkpoint".asJson,
            "arguments" -> Json.obj(
              "crystal_id" -> "beam-crystal".asJson,
              "summary"    -> "First milestone reached".asJson,
              "anchor"     -> "m1".asJson,
            ),
          ),
        ),
      ),
    )
    handler.handle(
      JsonRpcRequest(
        id = JsonRpcId.Num(32L),
        method = "tools/call",
        params = Some(
          Json.obj(
            "name" -> "crystal_checkpoint".asJson,
            "arguments" -> Json.obj(
              "crystal_id" -> "beam-crystal".asJson,
              "summary"    -> "Second milestone reached".asJson,
              "anchor"     -> "m2".asJson,
            ),
          ),
        ),
      ),
    )

    // Verify resources/list includes ccrystal://beam-crystal/hydrate
    val resListReq  = JsonRpcRequest(id = JsonRpcId.Num(33L), method = "resources/list")
    val resListResp = handler.handle(resListReq)
    assertEquals(resListResp.error.isEmpty, true)
    val uris =
      resListResp.result.get.hcursor.as[ListResourcesResult].toOption.get.resources.map(_.uri)
    assertEquals(uris.contains("ccrystal://beam-crystal/hydrate"), true)

    // Read resource ccrystal://beam-crystal/hydrate?from=m1&tail=1
    val readReq = JsonRpcRequest(
      id = JsonRpcId.Num(34L),
      method = "resources/read",
      params = Some(Json.obj("uri" -> "ccrystal://beam-crystal/hydrate?from=m1&tail=1".asJson)),
    )
    val readResp = handler.handle(readReq)
    assertEquals(readResp.error.isEmpty, true)
    val readResult = readResp.result.get.hcursor.as[ReadResourceResult].toOption.get
    assertEquals(readResult.contents.head.mimeType, Some("text/markdown"))
    assertEquals(readResult.contents.head.text.contains("Second milestone reached"), true)

    // Get prompt hydrate_context with selective arguments (from = m1, tail = 1)
    val promptReq = JsonRpcRequest(
      id = JsonRpcId.Num(35L),
      method = "prompts/get",
      params = Some(
        Json.obj(
          "name" -> "hydrate_context".asJson,
          "arguments" -> Json.obj(
            "crystal_id" -> "beam-crystal".asJson,
            "from"       -> "m1".asJson,
            "tail"       -> "1".asJson,
          ),
        ),
      ),
    )
    val promptResp = handler.handle(promptReq)
    assertEquals(promptResp.error.isEmpty, true)
    val promptResult = promptResp.result.get.hcursor.as[GetPromptResult].toOption.get
    assertEquals(promptResult.messages.head.content.text.contains("Second milestone reached"), true)

  test("DefaultMcpHandler supports crystal_artifact tool and artifact resources"):
    val (handler, store, _) = createFixture()

    // 1. tools/list includes crystal_artifact
    val listToolsReq  = JsonRpcRequest(id = JsonRpcId.Num(40L), method = "tools/list")
    val listToolsResp = handler.handle(listToolsReq)
    assertEquals(listToolsResp.error.isEmpty, true)
    val toolNames =
      listToolsResp.result.get.hcursor.downField("tools").as[List[Tool]].toOption.get.map(_.name)
    assertEquals(
      toolNames.contains("crystal_artifact"),
      true,
      "tools/list contains crystal_artifact",
    )

    // 2. tools/call crystal_artifact register (cave)
    val regReq = JsonRpcRequest(
      id = JsonRpcId.Num(41L),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name" -> "crystal_artifact".asJson,
          "arguments" -> Json.obj(
            "action"        -> "register".asJson,
            "id"            -> "mcp-art-1".asJson,
            "name"          -> "MCP Sensor".asJson,
            "substrate"     -> "physical".asJson,
            "role"          -> "precondition".asJson,
            "location_name" -> "Lab 2".asJson,
            "cave"          -> true.asJson,
          ),
        ),
      ),
    )
    val regResp = handler.handle(regReq)
    assertEquals(regResp.error.isEmpty, true, "registration succeeds")

    // 3. tools/call crystal_artifact inspect
    val inspectReq = JsonRpcRequest(
      id = JsonRpcId.Num(42L),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name" -> "crystal_artifact".asJson,
          "arguments" -> Json.obj(
            "action" -> "inspect".asJson,
            "id"     -> "mcp-art-1".asJson,
          ),
        ),
      ),
    )
    val inspectResp = handler.handle(inspectReq)
    assertEquals(inspectResp.error.isEmpty, true, "inspect succeeds")
    val inspectContent = inspectResp.result.get.hcursor.as[CallToolResult].toOption.get
    assertEquals(inspectContent.isError, false)
    assert(
      inspectContent.content.head.text.contains("mcp-art-1"),
      "inspect text contains artifact id",
    )

    // 4. tools/call crystal_artifact list
    val listArtReq = JsonRpcRequest(
      id = JsonRpcId.Num(43L),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name" -> "crystal_artifact".asJson,
          "arguments" -> Json.obj(
            "action" -> "list".asJson,
            "cave"   -> true.asJson,
          ),
        ),
      ),
    )
    val listArtResp = handler.handle(listArtReq)
    assertEquals(listArtResp.error.isEmpty, true, "list succeeds")

    // 5. resources/list contains ccrystal://artifacts
    val resListReq  = JsonRpcRequest(id = JsonRpcId.Num(44L), method = "resources/list")
    val resListResp = handler.handle(resListReq)
    assertEquals(resListResp.error.isEmpty, true)
    val resources =
      resListResp.result.get.hcursor.as[ListResourcesResult].toOption.get.resources.map(_.uri)
    assertEquals(
      resources.contains("ccrystal://artifacts"),
      true,
      "resources/list includes ccrystal://artifacts",
    )

    // 6. resources/read ccrystal://artifacts
    val readArtReq = JsonRpcRequest(
      id = JsonRpcId.Num(45L),
      method = "resources/read",
      params = Some(Json.obj("uri" -> "ccrystal://artifacts".asJson)),
    )
    val readArtResp = handler.handle(readArtReq)
    assertEquals(readArtResp.error.isEmpty, true)
    val readContent = readArtResp.result.get.hcursor.as[ReadResourceResult].toOption.get
    assert(
      readContent.contents.head.text.contains("mcp-art-1"),
      "registry contains registered artifact",
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

  test("DefaultMcpHandler handles crystal_init with tasks and crystal_list tool"):
    val (handler, store, _) = createFixture()

    // 1. crystal_init with tasks
    val initReq = JsonRpcRequest(
      id = JsonRpcId.Str("init-tasks"),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name" -> "crystal_init".asJson,
          "arguments" -> Json.obj(
            "name"  -> "init-tasks-crystal".asJson,
            "goal"  -> "Goal with tasks".asJson,
            "tasks" -> List("Task Alpha", "Task Beta").asJson,
          ),
        ),
      ),
    )
    val initResp = handler.handle(initReq)
    assertEquals(initResp.error.isEmpty, true, "init should succeed")
    val crystal = store.load("init-tasks-crystal").toOption.get
    assertEquals(crystal.goal.acceptanceCriteria.size, 2)
    assertEquals(crystal.goal.acceptanceCriteria(0).id, "task-1")
    assertEquals(crystal.goal.acceptanceCriteria(0).description, "Task Alpha")
    assertEquals(crystal.goal.acceptanceCriteria(1).id, "task-2")
    assertEquals(crystal.goal.acceptanceCriteria(1).description, "Task Beta")

    // 2. tools/list includes crystal_list
    val toolsReq  = JsonRpcRequest(id = JsonRpcId.Str("tools-list"), method = "tools/list")
    val toolsResp = handler.handle(toolsReq)
    assertEquals(toolsResp.error.isEmpty, true)
    val tools = toolsResp.result.get.hcursor.downField("tools").as[List[Tool]].toOption.get
    assert(tools.exists(_.name == "crystal_list"), "tools/list must include crystal_list")

    // 3. tools/call crystal_list (text output)
    val listReq = JsonRpcRequest(
      id = JsonRpcId.Str("call-list"),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name"      -> "crystal_list".asJson,
          "arguments" -> Json.obj(),
        ),
      ),
    )
    val listResp = handler.handle(listReq)
    assertEquals(listResp.error.isEmpty, true)
    val listText =
      listResp.result.get.hcursor.downField("content").downArray.get[String]("text").toOption.get
    assert(listText.contains("init-tasks-crystal"), "list text output should mention crystal ID")
    assert(listText.contains("Tasks: 0/2"), "list text output should show task ratio 0/2")

    // 4. tools/call crystal_list (json output)
    val listJsonReq = JsonRpcRequest(
      id = JsonRpcId.Str("call-list-json"),
      method = "tools/call",
      params = Some(
        Json.obj(
          "name"      -> "crystal_list".asJson,
          "arguments" -> Json.obj("json_output" -> true.asJson),
        ),
      ),
    )
    val listJsonResp = handler.handle(listJsonReq)
    assertEquals(listJsonResp.error.isEmpty, true)
    val listJsonText = listJsonResp.result.get.hcursor
      .downField("content")
      .downArray
      .get[String]("text")
      .toOption
      .get
    assert(
      listJsonText.contains("\"id\" : \"init-tasks-crystal\""),
      "list JSON output should include crystal JSON",
    )
