package ccrystal.core.mcp

import io.circe.Json

enum JsonRpcId derives CanEqual:
  case Str(value: String)
  case Num(value: Long)
  case Null

case class JsonRpcRequest(
    jsonrpc: String = "2.0",
    id: JsonRpcId,
    method: String,
    params: Option[Json] = None,
) derives CanEqual

case class JsonRpcNotification(
    jsonrpc: String = "2.0",
    method: String,
    params: Option[Json] = None,
) derives CanEqual

case class JsonRpcError(
    code: Int,
    message: String,
    data: Option[Json] = None,
) derives CanEqual

object JsonRpcError:
  val ParseError: Int     = -32700
  val InvalidRequest: Int = -32600
  val MethodNotFound: Int = -32601
  val InvalidParams: Int  = -32602
  val InternalError: Int  = -32603

case class JsonRpcResponse(
    jsonrpc: String = "2.0",
    id: JsonRpcId,
    result: Option[Json] = None,
    error: Option[JsonRpcError] = None,
) derives CanEqual

case class ClientInfo(
    name: String,
    version: String,
) derives CanEqual

case class InitializeParams(
    protocolVersion: String,
    capabilities: Json = Json.obj(),
    clientInfo: Option[ClientInfo] = None,
) derives CanEqual

case class ServerCapabilities(
    tools: Option[Json] = Some(Json.obj()),
    resources: Option[Json] = Some(Json.obj()),
    prompts: Option[Json] = Some(Json.obj()),
) derives CanEqual

case class ServerInfo(
    name: String,
    version: String,
) derives CanEqual

case class InitializeResult(
    protocolVersion: String,
    capabilities: ServerCapabilities,
    serverInfo: ServerInfo,
    instructions: Option[String] = None,
) derives CanEqual

case class Tool(
    name: String,
    description: String,
    inputSchema: Json,
) derives CanEqual

case class ListToolsResult(
    tools: List[Tool],
) derives CanEqual

case class CallToolParams(
    name: String,
    arguments: Option[Json] = None,
) derives CanEqual

case class ToolContent(
    `type`: String = "text",
    text: String,
) derives CanEqual

case class CallToolResult(
    content: List[ToolContent],
    isError: Boolean = false,
) derives CanEqual

case class Resource(
    uri: String,
    name: String,
    description: Option[String] = None,
    mimeType: Option[String] = Some("application/json"),
) derives CanEqual

case class ListResourcesResult(
    resources: List[Resource],
) derives CanEqual

case class ReadResourceParams(
    uri: String,
) derives CanEqual

case class ResourceContents(
    uri: String,
    mimeType: Option[String] = Some("application/json"),
    text: String,
) derives CanEqual

case class ReadResourceResult(
    contents: List[ResourceContents],
) derives CanEqual

case class PromptArgument(
    name: String,
    description: Option[String] = None,
    required: Boolean = false,
) derives CanEqual

case class Prompt(
    name: String,
    description: Option[String] = None,
    arguments: List[PromptArgument] = Nil,
) derives CanEqual

case class ListPromptsResult(
    prompts: List[Prompt],
) derives CanEqual

case class GetPromptParams(
    name: String,
    arguments: Option[Map[String, String]] = None,
) derives CanEqual

case class PromptMessageContent(
    `type`: String = "text",
    text: String,
) derives CanEqual

case class PromptMessage(
    role: String,
    content: PromptMessageContent,
) derives CanEqual

case class GetPromptResult(
    description: Option[String] = None,
    messages: List[PromptMessage],
) derives CanEqual
