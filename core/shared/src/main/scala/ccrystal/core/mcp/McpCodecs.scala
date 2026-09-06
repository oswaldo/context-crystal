package ccrystal.core.mcp

import io.circe.*
import io.circe.generic.semiauto.*
import io.circe.syntax.*
import ccrystal.core.mcp.*

object McpCodecs:

  given Encoder[JsonRpcId] = Encoder.instance {
    case JsonRpcId.Str(s) => Json.fromString(s)
    case JsonRpcId.Num(n) => Json.fromLong(n)
    case JsonRpcId.Null   => Json.Null
  }

  given Decoder[JsonRpcId] = Decoder.instance { c =>
    c.as[String]
      .map(JsonRpcId.Str.apply)
      .orElse(c.as[Long].map(JsonRpcId.Num.apply))
      .orElse {
        if c.value.isNull then Right(JsonRpcId.Null)
        else Left(DecodingFailure("Expected string, number, or null for JsonRpcId", c.history))
      }
  }

  given Codec[JsonRpcError] = deriveCodec[JsonRpcError]

  given Encoder[JsonRpcRequest] = deriveEncoder[JsonRpcRequest]
  given Decoder[JsonRpcRequest] = deriveDecoder[JsonRpcRequest]

  given Codec[JsonRpcNotification] = deriveCodec[JsonRpcNotification]

  given Encoder[JsonRpcResponse] = Encoder.instance { resp =>
    val base: List[(String, Json)] = List(
      "jsonrpc" -> resp.jsonrpc.asJson,
      "id"      -> resp.id.asJson,
    )
    val withResult: List[(String, Json)] = resp.result.fold(base)(r => base :+ ("result" -> r))
    val withError: List[(String, Json)] =
      resp.error.fold(withResult)(e => withResult :+ ("error" -> e.asJson))
    Json.obj(withError*)
  }

  given Decoder[JsonRpcResponse] = deriveDecoder[JsonRpcResponse]

  given Codec[ClientInfo]         = deriveCodec[ClientInfo]
  given Codec[InitializeParams]   = deriveCodec[InitializeParams]
  given Codec[ServerCapabilities] = deriveCodec[ServerCapabilities]
  given Codec[ServerInfo]         = deriveCodec[ServerInfo]
  given Codec[InitializeResult]   = deriveCodec[InitializeResult]

  given Codec[Tool]            = deriveCodec[Tool]
  given Codec[ListToolsResult] = deriveCodec[ListToolsResult]
  given Codec[CallToolParams]  = deriveCodec[CallToolParams]
  given Codec[ToolContent]     = deriveCodec[ToolContent]
  given Codec[CallToolResult]  = deriveCodec[CallToolResult]

  given Codec[Resource]            = deriveCodec[Resource]
  given Codec[ListResourcesResult] = deriveCodec[ListResourcesResult]
  given Codec[ReadResourceParams]  = deriveCodec[ReadResourceParams]
  given Codec[ResourceContents]    = deriveCodec[ResourceContents]
  given Codec[ReadResourceResult]  = deriveCodec[ReadResourceResult]

  given Codec[PromptArgument]       = deriveCodec[PromptArgument]
  given Codec[Prompt]               = deriveCodec[Prompt]
  given Codec[ListPromptsResult]    = deriveCodec[ListPromptsResult]
  given Codec[GetPromptParams]      = deriveCodec[GetPromptParams]
  given Codec[PromptMessageContent] = deriveCodec[PromptMessageContent]
  given Codec[PromptMessage]        = deriveCodec[PromptMessage]
  given Codec[GetPromptResult]      = deriveCodec[GetPromptResult]
