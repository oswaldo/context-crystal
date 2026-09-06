package ccrystal.cli.mcp

import munit.FunSuite
import java.io.{BufferedReader, ByteArrayOutputStream, PrintStream, StringReader}
import io.circe.Json
import io.circe.parser.*
import io.circe.syntax.*
import ccrystal.core.mcp.*
import ccrystal.core.mcp.McpCodecs.given

class StdioMcpTransportSuite extends FunSuite:

  class MockMcpHandler extends McpHandler:
    var notificationsReceived: List[JsonRpcNotification] = Nil

    override def handle(request: JsonRpcRequest): JsonRpcResponse =
      request.method match
        case "ping" =>
          JsonRpcResponse(id = request.id, result = Some(Json.obj()))
        case "echo" =>
          JsonRpcResponse(id = request.id, result = request.params)
        case other =>
          JsonRpcResponse(
            id = request.id,
            error = Some(JsonRpcError(JsonRpcError.MethodNotFound, s"Unknown method: $other")),
          )

    override def handleNotification(notification: JsonRpcNotification): Unit =
      notificationsReceived = notificationsReceived :+ notification

  test("StdioMcpTransport handles single and multiple line JSON-RPC requests"):
    val handler = new MockMcpHandler()
    val input =
      """{"jsonrpc":"2.0","id":1,"method":"ping"}
        |{"jsonrpc":"2.0","id":"req-2","method":"echo","params":{"hello":"world"}}
        |""".stripMargin

    val in     = new BufferedReader(new StringReader(input))
    val outBuf = new ByteArrayOutputStream()
    val out    = new PrintStream(outBuf, true, "UTF-8")

    val transport = new StdioMcpTransport(in, out)
    transport.run(handler)

    val outputLines = outBuf.toString("UTF-8").split("\n").map(_.trim).filter(_.nonEmpty).toList
    assertEquals(outputLines.size, 2)

    val resp1 = decode[JsonRpcResponse](outputLines(0)).toOption.get
    assertEquals(resp1.id, JsonRpcId.Num(1L))
    assertEquals(resp1.error.isEmpty, true)
    assertEquals(resp1.result.isDefined, true)

    val resp2 = decode[JsonRpcResponse](outputLines(1)).toOption.get
    assertEquals(resp2.id, JsonRpcId.Str("req-2"))
    assertEquals(resp2.error.isEmpty, true)
    assertEquals(resp2.result.get.hcursor.get[String]("hello").toOption, Some("world"))

  test("StdioMcpTransport handles notifications without emitting response"):
    val handler = new MockMcpHandler()
    val input =
      """{"jsonrpc":"2.0","method":"notifications/initialized"}
        |{"jsonrpc":"2.0","id":5,"method":"ping"}
        |""".stripMargin

    val in     = new BufferedReader(new StringReader(input))
    val outBuf = new ByteArrayOutputStream()
    val out    = new PrintStream(outBuf, true, "UTF-8")

    val transport = new StdioMcpTransport(in, out)
    transport.run(handler)

    assertEquals(handler.notificationsReceived.size, 1)
    assertEquals(handler.notificationsReceived.head.method, "notifications/initialized")

    val outputLines = outBuf.toString("UTF-8").split("\n").map(_.trim).filter(_.nonEmpty).toList
    assertEquals(outputLines.size, 1)
    val resp = decode[JsonRpcResponse](outputLines.head).toOption.get
    assertEquals(resp.id, JsonRpcId.Num(5L))

  test("StdioMcpTransport returns ParseError for invalid JSON"):
    val handler = new MockMcpHandler()
    val input =
      """{invalid json here
        |""".stripMargin

    val in     = new BufferedReader(new StringReader(input))
    val outBuf = new ByteArrayOutputStream()
    val out    = new PrintStream(outBuf, true, "UTF-8")

    val transport = new StdioMcpTransport(in, out)
    transport.run(handler)

    val outputLines = outBuf.toString("UTF-8").split("\n").map(_.trim).filter(_.nonEmpty).toList
    assertEquals(outputLines.size, 1)
    val resp = decode[JsonRpcResponse](outputLines.head).toOption.get
    assertEquals(resp.id, JsonRpcId.Null)
    assertEquals(resp.error.isDefined, true)
    assertEquals(resp.error.get.code, JsonRpcError.ParseError)
