# Specification: DAG Node Inspection, Hydration Ergonomics & Dogfooding Guards

## 1. Overview & Motivation

During active dogfooding and ecosystem maintenance in Context Crystal, an anti-pattern was identified: when inspecting historical DAG events and decisions, autonomous entities and developers were forced to bypass `ccrystal` and resort to raw `jq` / `cat` commands against `.ccrystals/<id>/crystal.json`.

This ergonomic friction stemmed from three specific capability gaps in the core engine and CLI:
1. `ccrystal node` only implemented `add`, lacking any read, query, or inspection commands (`node list`, `node show`).
2. `ccrystal hydrate` truncated state transitions to `tail: 10` by default, with no `--all` flag to cast full lineage without arbitrary cutoff.
3. `crystal_search` operated cave-wide across crystals, but lacked an optional `crystal_id` scope parameter to search and inspect DAG nodes within a specific crystal.

This track closes these gaps for the **v1.3.0** milestone according to established good practices:
- Self-describing enums, pagination (`limit`, `offset`, `all`), and sorting (`recent`, `oldest`).
- Zero MCP tool crowding: extending existing `crystal_hydrate` and `crystal_search` rather than proliferating redundant tools.
- Codifying the **Dogfooding & Raw Bypass Reflection Invariant** in `AGENTS.md`.

---

## 2. Functional Requirements

### 2.1 Core DAG Query & Retrieval Engine (`core`)
- In `ccrystal.core.model.DAG`:
  - `queryNodes(query: Option[String] = None, kind: Option[DAGNodeKind] = None, author: Option[String] = None, sort: String = "recent", limit: Int = 20, offset: Int = 0): (List[DAGNode], Int)`
  - Matches `query` case-insensitively across `contentSummary`, `actorId`, `anchor`, artifact IDs, and metadata keys/values.
  - Sort orders: `"recent"` (reverse chronological / newest first) and `"oldest"` (chronological).
  - Paginates with `limit` (0 means unconstrained/all) and `offset`.
  - `findNode(nodeId: String): Option[DAGNode]` retrieves a specific node by ID or prefix.

### 2.2 CLI Commands (`cli`)
- **`ccrystal node list <crystal-id>`**:
  - Flags:
    - `--query, -q <string>`: Search text query.
    - `--kind, -k <kind>`: Node kind filter with self-describing choices (`human_prompt, agent_reasoning, tool_execution, checkpoint, branch, resolution`).
    - `--author, -u <string>`: Filter by author/actor entity ID.
    - `--sort <recent|oldest>`: Sort order (default: `recent`).
    - `--limit <int>`: Page size limit (default: `20`).
    - `--offset <int>`: Pagination offset (default: `0`).
    - `--all`: Alias to uncap limit and show all matching nodes.
    - `--json`: Output JSON array of `DAGNode` objects.
  - Formatted text output displaying tabular list of nodes with pagination summary.
- **`ccrystal node show <crystal-id> <node-id>`**:
  - Displays complete details for a single DAG node:
    - ID, Kind, Author/Actor, Timestamp, Fidelity, Anchor (if present).
    - Parent Node IDs.
    - Artifact IDs (input, output, precondition).
    - Metadata key-value dictionary.
    - Full content summary.
  - `--json` flag to emit raw `DAGNode` JSON.
- **`ccrystal hydrate <crystal-id>`**:
  - Add `--all` flag: casts the complete context beam without `tail 10` truncation.

### 2.3 Native MCP Server Integration (Zero Tool Crowding)
- **`crystal_hydrate`**:
  - Add optional property `"all": { "type": "boolean", "description": "Cast full lineage beam without tail truncation (default: false)" }`.
- **`crystal_search`**:
  - Add optional property `"crystal_id": { "type": "string", "description": "When provided, scopes search or listing to DAG nodes within the specified crystal, returning matching nodes" }`.

---

## 3. Non-Functional Requirements & Invariants
- **Zero Reflection / Pure Functional:** Uses immutable data structures, case classes, and pure functions.
- **Backwards Compatibility:** All existing CLI invocations and MCP calls remain 100% compatible.
- **Self-Describing Enums:** Enum options are enumerated in Decline CLI help text.
- **Dogfooding Invariant:** Codified in `AGENTS.md` to prevent future silent `jq` bypasses.
