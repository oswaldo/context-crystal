package ccrystal.core.mcp

import munit.FunSuite
import io.circe.Json
import io.circe.parser.*
import io.circe.syntax.*
import ccrystal.core.mcp.*
import ccrystal.core.mcp.McpCodecs.given

class McpCodecSuite extends FunSuite:

  test("JsonRpcId serialization and deserialization (String, Long, Null)"):
    val strId: JsonRpcId  = JsonRpcId.Str("req-123")
    val numId: JsonRpcId  = JsonRpcId.Num(42L)
    val nullId: JsonRpcId = JsonRpcId.Null

    assertEquals(strId.asJson.noSpaces, "\"req-123\"")
    assertEquals(numId.asJson.noSpaces, "42")
    assertEquals(nullId.asJson.noSpaces, "null")

    assertEquals(decode[JsonRpcId]("\"req-123\"").toOption, Some(strId))
    assertEquals(decode[JsonRpcId]("42").toOption, Some(numId))
    assertEquals(decode[JsonRpcId]("null").toOption, Some(nullId))

  test("JsonRpcRequest and JsonRpcResponse round-trip"):
    val req = JsonRpcRequest(
      id = JsonRpcId.Num(1L),
      method = "initialize",
      params = Some(Json.obj("protocolVersion" -> "2024-11-05".asJson)),
    )
    val reqJson    = req.asJson.noSpaces
    val decodedReq = decode[JsonRpcRequest](reqJson)
    assertEquals(decodedReq.toOption, Some(req))

    val resp = JsonRpcResponse(
      id = JsonRpcId.Num(1L),
      result = Some(Json.obj("protocolVersion" -> "2024-11-05".asJson)),
    )
    val respJson    = resp.asJson.noSpaces
    val decodedResp = decode[JsonRpcResponse](respJson)
    assertEquals(decodedResp.toOption, Some(resp))

    val errResp = JsonRpcResponse(
      id = JsonRpcId.Str("err-1"),
      error = Some(JsonRpcError(-32601, "Method not found")),
    )
    val errJson    = errResp.asJson.noSpaces
    val decodedErr = decode[JsonRpcResponse](errJson)
    assertEquals(decodedErr.toOption, Some(errResp))

  test("InitializeParams and InitializeResult codecs"):
    val clientInfo = ClientInfo(name = "test-client", version = "1.0.0")
    val initParams = InitializeParams(
      protocolVersion = "2024-11-05",
      capabilities = Json.obj(),
      clientInfo = Some(clientInfo),
    )
    val initJson = initParams.asJson.noSpaces
    assertEquals(decode[InitializeParams](initJson).toOption, Some(initParams))

    val initResult = InitializeResult(
      protocolVersion = "2024-11-05",
      capabilities = ServerCapabilities(
        tools = Some(Json.obj()),
        resources = Some(Json.obj()),
        prompts = Some(Json.obj()),
      ),
      serverInfo = ServerInfo(name = "context-crystal", version = "1.0.0"),
    )
    val resultJson = initResult.asJson.noSpaces
    assertEquals(decode[InitializeResult](resultJson).toOption, Some(initResult))

  test("Tools list and call codecs"):
    val tool = Tool(
      name = "crystal_batch",
      description = "Execute atomic batch recipes",
      inputSchema = Json.obj(
        "type"       -> "object".asJson,
        "properties" -> Json.obj("commands" -> Json.obj("type" -> "string".asJson)),
        "required"   -> List("commands").asJson,
      ),
    )
    val toolsList = ListToolsResult(tools = List(tool))
    val toolsJson = toolsList.asJson.noSpaces
    assertEquals(decode[ListToolsResult](toolsJson).toOption, Some(toolsList))

    val callParams = CallToolParams(
      name = "crystal_batch",
      arguments = Some(Json.obj("commands" -> "node add -s test; task done task-1".asJson)),
    )
    val callParamsJson = callParams.asJson.noSpaces
    assertEquals(decode[CallToolParams](callParamsJson).toOption, Some(callParams))

    val callResult = CallToolResult(
      content = List(ToolContent(`type` = "text", text = "Batch completed successfully.")),
      isError = false,
    )
    val callResultJson = callResult.asJson.noSpaces
    assertEquals(decode[CallToolResult](callResultJson).toOption, Some(callResult))

  test("Resources list and read codecs"):
    val resource = Resource(
      uri = "crystal://native-mcp-server/state",
      name = "State for native-mcp-server",
      description = Some("Living state container JSON"),
      mimeType = Some("application/json"),
    )
    val listRes  = ListResourcesResult(resources = List(resource))
    val listJson = listRes.asJson.noSpaces
    assertEquals(decode[ListResourcesResult](listJson).toOption, Some(listRes))

    val readResult = ReadResourceResult(
      contents = List(
        ResourceContents(
          uri = "crystal://native-mcp-server/state",
          mimeType = Some("application/json"),
          text = "{\"id\":\"native-mcp-server\"}",
        ),
      ),
    )
    val readJson = readResult.asJson.noSpaces
    assertEquals(decode[ReadResourceResult](readJson).toOption, Some(readResult))

  test("Prompts list and get codecs"):
    val prompt = Prompt(
      name = "hydrate_context",
      description = Some("Injects hydrated system prompt directly into conversation"),
      arguments = List(
        PromptArgument(
          name = "crystal_id",
          description = Some("Target crystal ID"),
          required = true,
        ),
      ),
    )
    val listPrompts = ListPromptsResult(prompts = List(prompt))
    val listJson    = listPrompts.asJson.noSpaces
    assertEquals(decode[ListPromptsResult](listJson).toOption, Some(listPrompts))

    val getResult = GetPromptResult(
      description = Some("Hydrated context for native-mcp-server"),
      messages = List(
        PromptMessage(
          role = "user",
          content = PromptMessageContent(`type` = "text", text = "# System Prompt Context Beam"),
        ),
      ),
    )
    val getResultJson = getResult.asJson.noSpaces
    assertEquals(decode[GetPromptResult](getResultJson).toOption, Some(getResult))
