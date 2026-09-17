# Specification: Crystal Lifecycle Conclusion & Agent MCP Ergonomics

## 1. Overview & Problem Statement

Context Crystal tracks the lifecycle of goals through `GoalStatus` (`InProgress`, `ConcludedSuccess`, `ConcludedAbandoned`), and tools such as `crystal_triage` and `ccrystal list` rely on these statuses to determine active context vs cleanable historical crystals. However, during autonomous agent operation, two critical friction points were identified:

1. **No Mechanism to Conclude a Crystal:**
   While `ccrystal task done` marks individual tasks as completed, there is currently no CLI subcommand, batch recipe verb, or MCP tool to transition a crystal's top-level goal status. As a result, crystals remain permanently `InProgress` unless manually altered on disk.
2. **Missing MCP Server Instructions (`instructions.md`):**
   Antigravity and other host MCP clients look for `~/.gemini/antigravity-cli/mcp/context-crystal/instructions.md` alongside lazy tool schemas. Because this file was absent, interacting agents lacked immediate visibility into binary paths, batching best practices, lifecycle invariants, and capture fidelity guidelines, requiring redundant discovery steps.

## 2. Functional Requirements

### 2.1 CLI Goal Transition Commands
- **Explicit Subcommands:**
  - `ccrystal conclude <crystal-id> [-s "Optional resolution summary"]`: Transitions `goal.status` to `GoalStatus.ConcludedSuccess`.
  - `ccrystal abandon <crystal-id> [-r "Optional abandonment reason"]`: Transitions `goal.status` to `GoalStatus.ConcludedAbandoned`.
- **General Subcommand:**
  - `ccrystal goal status <crystal-id> --status <in_progress|concluded_success|concluded_abandoned> [-s "Optional summary"]`: Allows arbitrary programmatic status transitions.
- **Batch Command Support:**
  - Ensure `conclude` and `abandon` are parseable and executable within compound semicolon-separated recipes via `BatchExecutor` (e.g. `task done -t task-3 my-proj; conclude -s "All criteria met" my-proj`).

### 2.2 Provenance DAG Node Generation
- When `conclude` or `abandon` is invoked with a summary or reason:
  - If a summary or reason string is provided, automatically append a `DAGNode` to the crystal:
    - `kind = NodeKind.Resolution`
    - `fidelity = CaptureFidelity.Inferred`
    - `summary = <summary or reason text>`
    - `parentIds = <current leaf node IDs>`
  - If no summary/reason is provided, update `goal.status` without appending an empty resolution node.

### 2.3 Native MCP Tool: `crystal_goal_transition`
- **Tool Definition:** Register `crystal_goal_transition` in `DefaultMcpHandler` and write its JSON schema.
- **Input Schema:**
  - `crystal_id` (string, required): Identifier of the target crystal.
  - `status` (string, required): One of `["concluded_success", "concluded_abandoned", "in_progress"]`.
  - `summary` (string, optional): Resolution summary or abandonment reason.
- **Behavior:**
  - Validates crystal existence.
  - Updates crystal goal status in `CrystalStore`.
  - Appends resolution DAG node if `summary` is present.
  - Returns human-readable confirmation in `CallToolResult`.

### 2.4 Wire-Level MCP Protocol Instructions (`InitializeResult.instructions`)
- **MCP Wire Spec Standard (2024-11-05):** Extend `InitializeResult` in `ccrystal.core.mcp.McpModels` with `instructions: Option[String] = None`.
- **Codec Roundtrip:** Update Circe encoders and decoders in `McpCodecs` to serialize and deserialize `instructions` bidirectionally.
- **Server Initialization:** `DefaultMcpHandler` populates `instructions` with concise, universal operational guidelines during the `initialize` handshake, ensuring all standard MCP clients (Claude Desktop, Zed, Cursor, etc.) receive operational context directly over the wire without relying on host-specific filesystem conventions.

### 2.5 Multi-Runtime Scaffolding & Project Structure Templates (`docs/runtimes/`)
- Curate copy-pasteable, production-grade instruction snippets and configuration guides for major agent runtimes:
  - `docs/runtimes/CLAUDE.md`: For Anthropic Claude Code CLI.
  - `docs/runtimes/cursor.mdc`: For Cursor IDE (`.cursor/rules/context-crystal.mdc` or `.cursorrules`).
  - `docs/runtimes/windsurf.md`: For Codeium Windsurf / Cascade (`.windsurfrules`).
  - `docs/runtimes/copilot.md`: For GitHub Copilot Workspace / Edits (`.github/copilot-instructions.md`).
  - `docs/runtimes/AGENTS.md`: For open agentic entity runtimes (Linux Foundation / OpenAgents standard).
  - `docs/runtimes/README.md`: Architectural guide detailing how projects should be structured across multi-agent runtimes.

### 2.6 Agent MCP Server Instructions (`instructions.md`)
- Author `docs/mcp/instructions.md` containing operational conventions, batch recipes, and lifecycle flow.
- Deploy to `~/.gemini/antigravity-cli/mcp/context-crystal/instructions.md` for the Antigravity host runtime.

### 2.7 Agent Skill & Documentation Updates
- Update `.agents/skills/context-crystal/SKILL.md` to document the new `conclude` and `abandon` commands and `crystal_goal_transition` tool.
- Update `docs/for_ais.md` and `conductor/product.md` where appropriate.

## 3. Non-Functional Requirements & Invariants

- **Bidirectional Compatibility:** Existing crystals, schemas, and CLI commands remain completely unaffected.
- **Pure Functional & Zero Reflection:** Scala 3 immutable ADTs, `derives CanEqual`, explicit codecs, zero compiler warnings under `-Werror`.
- **MUnit Strict Equality Clues:** All test assertions must use `assertEquals` or include explicit clue strings.
- **Atomic Operations:** Crystal file updates must remain atomic via `CrystalStore.save`.

## 4. Acceptance Criteria

- [x] Unit & integration tests in `RunnerSuite` / `CommandParserSuite` covering `conclude`, `abandon`, and `goal status`.
- [x] Unit tests in `DefaultMcpHandlerSuite` for `crystal_goal_transition`.
- [x] Batch execution tests covering compound recipes ending in `conclude`.
- [x] Provenance resolution node creation verified in tests.
- [ ] `InitializeResult.instructions` codec roundtrip unit tests in `McpCodecSuite`.
- [ ] `DefaultMcpHandler` `initialize` returns wire-level `instructions` verified in `DefaultMcpHandlerSuite`.
- [x] Tool schema `crystal_goal_transition.json` generated and installed to `~/.gemini/antigravity-cli/mcp/context-crystal/`.
- [x] `instructions.md` deployed to `~/.gemini/antigravity-cli/mcp/context-crystal/instructions.md`.
- [ ] Curated multi-runtime templates created in `docs/runtimes/`.
- [ ] Full test suite passes across Native, JVM, and JS targets.
- [ ] Cross-project tests pass across JVM and Native targets.
