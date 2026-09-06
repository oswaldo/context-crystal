# Native Model Context Protocol (MCP) Server: `ccrystal mcp`

The Context Crystal native MCP server exposes zero-overhead context lifecycle management, DAG lineage, transient resource leasing, and context hydration directly to MCP-compliant AI environments (such as Claude Desktop, Cursor, Zed, Windsurf, and OpenHands).

---

## Architecture & Transport

- **Binary:** Single standalone native binary compiled with Scala Native (`ccrystal`). Zero runtime dependencies on Python, Node.js, Docker, or JVM.
- **Protocol:** Strictly compliant with JSON-RPC 2.0 and MCP protocol version `2024-11-05`.
- **Transport:** Line-delimited standard I/O (`stdio`). Pluggable `McpTransport` architecture permits future HTTP/SSE extensions.
- **Strict Anonymity & Local Sovereignty:** All state containers and DAG nodes reside locally on disk in `.ccrystals/`. No telemetry, external API calls, or cloud sync.

---

## Exposed MCP Capabilities

### 1. Tools

- **`crystal_batch` (Recommended Primary Tool):**
  Executes compound semicolon-delimited atomic transition recipes in a single roundtrip to minimize token overhead.
  *Example:* `"task add -d 'Implement cache' my-crystal; node add -k agent_reasoning -s 'Design verified' my-crystal; task done -t task-1 my-crystal"`
- **`crystal_init`:** Initialize a new context crystal with a target goal, intent, and author.
- **`crystal_checkpoint`:** Create an anchor checkpoint node in the crystal DAG (`inferred` or `intercepted` fidelity).
- **`crystal_task_transition`:** Add (`action: "add"`) or complete (`action: "done"`) a task.
- **`crystal_transient_lease`:** Acquire (`action: "lease"`) or clean (`action: "clean"`) a transient resource lease (e.g., git worktrees, debug configs).
- **`crystal_slice_fork`:** Extract crystal fragments or fork sub-DAG lineages into a new child crystal.
- **`crystal_delete`:** Irrecoverably delete a crystal and cascade orphaned cave entities (`force: true`).

### 2. Resources

- **`crystal://{crystal_id}/state`:** Returns living state container JSON (Goal status, pending tasks, active leases, open lessons).
- **`crystal://{crystal_id}/dag`:** Returns normalized DAG nodes and parent lineage JSON.
- **`crystal://entities`:** Returns registered cave entities and identities.

### 3. Prompts

- **`hydrate_context`:** Injects a synthesized Context Crystal prompt beam directly into the client conversation.
  *Arguments:* `crystal_id` (required), `depth` (optional), `summary_only` (optional).
- **`triage_cave`:** Generates a workspace inventory report and instructions for reviewing and cleaning up concluded, abandoned, or stale crystals.

---

## Agent Operational Invariant: Task Inception Check

When beginning any non-trivial or multi-step engineering task, an AI entity interacting through MCP should:
1. **Discover:** Query `resources/list` (matching `crystal://*`) to determine whether a relevant crystal is already active.
2. **Attach or Initialize:** If a matching crystal exists, read its state (`crystal://{id}/state`) or invoke `hydrate_context`. If no crystal matches the current objective, initialize a new crystal via `crystal_init`.
3. **Lease Isolation:** If operating in a temporary branch or worktree, register a transient lease via `crystal_transient_lease` to ensure auditable cleanup upon conclusion.

---

## Configuration Templates

- [Claude Desktop Configuration](claude-desktop.json)
- [Cursor IDE Configuration](cursor-mcp.json)
- [Zed Editor Configuration](zed.json)
