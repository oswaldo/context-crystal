# Specification: Native MCP Server Ergonomics & Advanced Tooling

## 1. Overview & Problem Statement

Context Crystal provides a native, low-latency Model Context Protocol (MCP) server engine (`ccrystal mcp`). In autonomous agent pairing and dogfooding sessions, several ergonomic gaps between the native CLI commands and the MCP server interface became evident:

1. **Missing `crystal_list` Tool:** While the CLI offers `ccrystal list` displaying formatted crystal statuses, task completion ratios, active leases, and lessons, agents using MCP can only list resource URIs via `resources/list`. To inspect cave status, an agent must either issue multiple `resources/read` calls or drop into subshells.
2. **Multi-Turn Inception Friction:** `crystal_init` only accepts `name`, `goal`, `intent`, and `author`. Setting initial tasks requires either $N$ follow-up `crystal_task_transition` calls or stringly-typed `crystal_batch` recipes.
3. **Selective Beam Shaping Gaps:** Prompt hydration via MCP is only exposed as a static resource (`ccrystal://<id>/hydrate`). While query parameters exist internally, many MCP clients and tools do not support parameterized resource URIs, leaving agents unable to selectively shape the beam (e.g. `--tail 5`, `--from <anchor>`, `--summary-only`) via tools.
4. **Cave Lifecycle Hygiene & Triage Automation:** Post-track triage (`AGENTS.md`) encourages cleaning concluded crystals. While a static prompt `triage_cave` exists, there is no native MCP tool returning structured triage classifications (`keep`, `clean`, `review`) for automated decision making.

## 2. Functional Requirements

### 2.1 `crystal_list` MCP Tool
- **Input Schema:**
  - `status` (optional string): Filter crystals by goal status (`in_progress`, `concluded_success`, `concluded_abandoned`, `paused`).
  - `json_output` (optional boolean, default `false`): Return structured JSON instead of human-readable summary text.
- **Behavior:** Queries the active `CrystalStore`, counts completed vs total acceptance criteria, open lessons, and active leases, and formats the output identically to the CLI `ccrystal list` command.

### 2.2 Atomic Inception with Initial Tasks in `crystal_init`
- **Model / Command Update:** Extend `CliCommand.Init` with `tasks: List[String] = Nil`.
- **Tool Schema Update:** Add optional `tasks: string[]` to `crystal_init`.
- **Behavior:** When provided, automatically creates numbered `AcceptanceCriterion` entries (`task-1`, `task-2`, ...) attached to the initial `Goal`.

### 2.3 `crystal_hydrate` MCP Tool
- **Input Schema:**
  - `crystal_id` (required string): Crystal identifier to hydrate.
  - `tail` (optional integer): Number of recent transitions to include in the context beam.
  - `from` (optional string): Starting anchor or node ID/prefix for transition slice.
  - `to` (optional string): Ending anchor or node ID/prefix for transition slice.
  - `depth` (optional integer, default 10): Traversal depth.
  - `summary_only` (optional boolean, default `false`): Exclude transitions and return living state summary only.
- **Behavior:** Invokes `CliCommand.Cast` through `Runner`, returning the formatted context beam markdown directly in `CallToolResult`.

### 2.4 `crystal_triage` MCP Tool
- **Input Schema:**
  - `json_output` (optional boolean, default `false`): Return structured JSON array of triage items.
- **Behavior:** Inspects all crystals in the store and classifies them into:
  - `CandidateForCleanup`: Status is `ConcludedSuccess` or `ConcludedAbandoned`, 100% of tasks completed (or 0 tasks), 0 active leases, 0 open lessons.
  - `Active`: Status is `InProgress` with recent activity.
  - `RequiresReview`: Has unclosed leases, open lessons, or incomplete tasks while stalled.

### 2.5 Agent Skill & Tool Schemas
- Export updated JSON tool schemas to `.gemini/antigravity-cli/mcp/context-crystal/`.
- Update `.agents/skills/context-crystal/SKILL.md` to reference the new tools.

## 3. Non-Functional Requirements & Invariants

- **Bidirectional Compatibility:** All existing tools, schemas, resources, and CLI commands continue to function identically.
- **Pure Functional & Zero Reflection:** Scala 3 immutable ADTs, strict codecs, zero warnings (`-Werror`).
- **Performance:** Sub-millisecond tool execution in Scala Native release builds.

## 4. Acceptance Criteria

- [ ] Unit tests for `crystal_list`, extended `crystal_init`, `crystal_hydrate`, and `crystal_triage` in `DefaultMcpHandlerSuite`.
- [ ] End-to-end integration tests in `McpEndToEndSessionSuite`.
- [ ] Tool schemas updated in `.gemini/antigravity-cli/mcp/context-crystal/`.
- [ ] Agent skill updated in `SKILL.md`.
- [ ] All cross-project tests pass on JVM and Native.
