package ccrystal.core.mcp

trait McpTransport:
  def run(handler: McpHandler): Unit
