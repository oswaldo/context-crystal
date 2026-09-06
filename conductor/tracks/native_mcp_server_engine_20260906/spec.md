# Specification: Native Model Context Protocol (MCP) Server Engine

## Overview
The Model Context Protocol (MCP) provides an open standard for LLM applications (Claude Desktop, Cursor, Zed, Windsurf, OpenHands) to securely discover and invoke tools, inspect resources, and hydrate prompts. This track introduces a native, zero-dependency MCP server engine directly embedded in the Context Crystal CLI (`ccrystal mcp`).

---

## Architectural Principles & Decoupling

1. **Protocol Handler (`McpHandler`):**
   - Implements JSON-RPC 2.0 protocol dispatching independently of network or I/O transport.
   - Handles `initialize`, `ping`, `tools/list`, `tools/call`, `resources/list`, `resources/read`, `prompts/list`, and `prompts/get`.
2. **Transport Abstraction (`McpTransport`):**
   - Decouples input/output communication from protocol handling.
   - Initial implementation: `StdioMcpTransport` reading line-delimited JSON-RPC from standard input and writing to standard output.
   - Designed to allow future pluggable transports (e.g. HTTP/SSE server) without refactoring protocol logic.
3. **Zero External Runtime:**
   - Compiled with Scala Native to single-binary standalone execution with zero Node.js, Python, or JVM installation requirements.

---

## Functional Capabilities

### 1. Tools Exposed
- **`crystal_batch` (Primary Tool):**
  - Executes compound semicolon-delimited atomic transition recipes (`"node add ...; task done ..."`).
  - Maximizes efficiency by minimizing tool-call roundtrips.
- **`crystal_init`:**
  - Parameters: `name: String`, `goal: String`, optional `intent: Option[String]`, optional `author: Option[String]`.
- **`crystal_checkpoint`:**
  - Parameters: `crystal_id: String`, `summary: String`, optional `anchor: Option[String]`, optional `fidelity: Option[String]`.
- **`crystal_task_transition`:**
  - Parameters: `crystal_id: String`, `action: String` (`add` or `done`), `description_or_id: String`.
- **`crystal_transient_lease`:**
  - Parameters: `crystal_id: String`, `action: String` (`lease` or `clean`), optional `resource_type: Option[String]`, optional `description: Option[String]`, optional `lease_id: Option[String]`.
- **`crystal_slice_fork`:**
  - Parameters: `crystal_id: String`, `fork_to: String`, optional `from_anchor: Option[String]`, optional `prune: Option[Boolean]`.
- **`crystal_delete`:**
  - Parameters: `crystal_id: String`, `force: Boolean`.

### 2. Resources Exposed
- **`crystal://{crystal_id}/state`:**
  - Returns living state container JSON (Goal status, pending tasks, active leases, open lessons).
- **`crystal://{crystal_id}/dag`:**
  - Returns normalized DAG nodes and lineage JSON.
- **`crystal://entities`:**
  - Returns registered cave entities and masks.

### 3. Prompts Exposed
- **`hydrate_context`:**
  - Parameters: `crystal_id: String`, optional `depth: Option[Int]`, optional `summary_only: Option[Boolean]`.
  - Injects hydrated system prompt directly into the client conversation.

---

## Non-Functional Requirements
- **JSON-RPC 2.0 Compliance:** Adheres strictly to JSON-RPC 2.0 and MCP 2024-11-05 protocol schemas.
- **Pure Functional & Zero Reflection:** Deterministic immutable case classes, enums, and Circe codecs.
- **Zero Warnings:** Zero compilation warnings or lint violations under Scala 3.9.0.
- **Cross-Platform:** Core protocol and codecs testable and runnable across JVM and Native.
