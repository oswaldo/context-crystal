package ccrystal.core.mcp

trait McpHandler:
  def handle(request: JsonRpcRequest): JsonRpcResponse
  def handleNotification(notification: JsonRpcNotification): Unit = ()
