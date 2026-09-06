package ccrystal.cli.mcp

import java.io.{BufferedReader, PrintStream}
import io.circe.parser.*
import io.circe.syntax.*
import ccrystal.core.mcp.*
import ccrystal.core.mcp.McpCodecs.given

class StdioMcpTransport(
    in: BufferedReader,
    out: PrintStream,
) extends McpTransport:

  override def run(handler: McpHandler): Unit =
    var line = in.readLine()
    while line != null do
      val trimmed = line.trim
      if trimmed.nonEmpty then processLine(trimmed, handler)
      line = in.readLine()

  private def processLine(line: String, handler: McpHandler): Unit =
    decode[JsonRpcRequest](line) match
      case Right(req) =>
        val resp = handler.handle(req)
        out.println(resp.asJson.noSpaces)
        out.flush()
      case Left(_) =>
        // Could be a notification without an id
        decode[JsonRpcNotification](line) match
          case Right(notif) =>
            handler.handleNotification(notif)
          case Left(err) =>
            val errResp = JsonRpcResponse(
              id = JsonRpcId.Null,
              error = Some(JsonRpcError(JsonRpcError.ParseError, s"Parse error: ${err.getMessage}")),
            )
            out.println(errResp.asJson.noSpaces)
            out.flush()
