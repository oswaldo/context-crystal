# Tasks: Native Model Context Protocol (MCP) Server Engine

> [!NOTE]
> **Auto-Generated View:** This file is projected from `crystal.json` (the single source of truth). Do not edit manually; use `ccrystal` CLI commands to update state.

**Status:** InProgress

## Acceptance Criteria / Tasks

- [x] Write failing unit tests for MCP JSON-RPC protocol models and codecs `[task-1]`
- [x] Implement MCP protocol ADTs and JSON-RPC 2.0 Circe codecs `[task-2]`
- [x] Write failing unit tests for McpHandler tool dispatching, resource providers, and prompts `[task-3]`
- [x] Implement McpHandler trait and DefaultMcpHandler wired to CrystalStore and Runner `[task-4]`
- [x] Phase 1 Verification & Checkpoint `[task-5]`
- [x] Write failing unit tests for McpTransport and StdioMcpTransport stream loop `[task-6]`
- [x] Implement McpTransport trait and StdioMcpTransport line-delimited engine `[task-7]`
- [x] Write failing unit tests for CLI 'ccrystal mcp' command parsing `[task-8]`
- [x] Implement CliCommand.Mcp in CommandParser, Runner, and Main entry point `[task-9]`
- [x] Phase 2 Verification & Checkpoint `[task-10]`
