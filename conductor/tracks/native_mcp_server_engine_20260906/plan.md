# Implementation Plan: Native Model Context Protocol (MCP) Server Engine

## Phase 1: Core MCP Protocol Models, Codecs & Decoupled Handlers (Red-Green TDD)
- [ ] Task: Write failing unit tests for MCP JSON-RPC protocol models and codecs (Red)
- [ ] Task: Implement MCP protocol ADTs and JSON-RPC 2.0 Circe codecs (Green)
- [ ] Task: Write failing unit tests for McpHandler tool dispatching, resource providers, and prompts (Red)
- [ ] Task: Implement McpHandler trait and DefaultMcpHandler wired to CrystalStore and Runner (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Transport Layer & CLI Integration (Red-Green TDD)
- [ ] Task: Write failing unit tests for McpTransport and StdioMcpTransport stream loop (Red)
- [ ] Task: Implement McpTransport trait and StdioMcpTransport line-delimited engine (Green)
- [ ] Task: Write failing unit tests for CLI 'ccrystal mcp' command parsing (Red)
- [ ] Task: Implement CliCommand.Mcp in CommandParser, Runner, and Main entry point (Green)
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Client Compatibility, Distribution Configs & Native Verification
- [ ] Task: Write end-to-end integration tests simulating an MCP client session over stdio streams
- [ ] Task: Generate distribution templates for Claude Desktop and Cursor rules in docs/mcp/
- [ ] Task: Compile native CLI binary and verify live 'ccrystal mcp' handshake
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
