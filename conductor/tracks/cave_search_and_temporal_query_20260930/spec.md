# Specification: Cave Query, Search & Temporal Navigation

## 1. Overview & Problem Statement

Context Crystal persists crystallographic DAG state in `.ccrystals/` (and cold storage in `.ccrystals/archive/`). As caves grow over time across dozens of sessions, tracks, and collaborator interactions, agents and human developers face recurring lifecycle discovery questions:

1. **Inception & Prior Work:** *"Has this problem, subsystem, or refactoring been attempted or explored before?"*
2. **Temporal & Activity Queries:** *"What crystals were modified today or yesterday? What was touched since last Friday?"*
3. **In-Flight Resource Auditing:** *"Which crystal holds an active lease for worktree X or path Y? Which crystals currently have open tasks?"*
4. **Retrospective & Hygiene Queries:** *"Which crystals recorded lessons learned? Which crystals are stale or candidates for archiving?"*

### Tool Surface Consolidation & MCP Hygiene

Best practices for Model Context Protocol (MCP) servers discourage tool proliferation, which causes context bloat and agent routing indecision. Rather than introducing a 16th tool alongside `crystal_list`, this track **fuses listing and search into a single consolidated discovery tool: `crystal_search`**, fully replacing `crystal_list` in the MCP catalog.

When invoked without filtering parameters, `crystal_search` returns the full cave listing (identical to legacy `crystal_list`). When invoked with filtering criteria, it performs focused multi-dimensional searching and temporal scoping.

---

## 2. Functional Requirements

### 2.1 Core Search & Filter Domain Model (`CrystalFilter`)

Define an immutable, zero-reflection filter abstraction in `core` (`io.github.oswaldo.ccrystal.core.model.search.CrystalFilter`):

- **Text Search (`query: Option[String]`):** Case-insensitive token and substring matching against:
  - Crystal ID
  - Goal Nucleus (title, intent)
  - DAG node content (summaries, details, anchors)
  - Lessons learned (lessons, remedies)
  - Registered artifact names and descriptions
- **Temporal Bounds (`since: Option[Instant]`, `until: Option[Instant]`):** Filters by crystal activity timestamp (evaluated against latest transition timestamp, falling back to `createdAt`/`updatedAt`).
- **Status Filter (`status: Option[GoalStatus]`):** Filters by `InProgress`, `ConcludedSuccess`, `ConcludedAbandoned`, or `Paused`.
- **Resource Leases (`hasActiveLeases: Option[Boolean]`, `touchingPath: Option[String]`):**
  - `hasActiveLeases`: checks if the crystal has $\ge 1$ unreleased transient leases.
  - `touchingPath`: matches against transient lease target paths, worktrees, or linked artifact URIs/paths.
- **Task State (`hasOpenTasks: Option[Boolean]`):** Checks whether any `AcceptanceCriterion` remains incomplete.
- **Lesson Presence (`hasLessons: Option[Boolean]`):** Checks whether the crystal contains any recorded lessons.
- **Author Filter (`author: Option[String]`):** Filters by creator or node transition author ID.
- **Aging Category (`aging: Option[AgingCategory]`):**
  - `Active` (< 24h since last modification)
  - `Solid` (24h to 7d)
  - `Stale` (> 7d)
- **Archival Inclusion (`includeArchived: Boolean`, default `false`):** When true, searches both active `.ccrystals/` and cold storage `.ccrystals/archive/`.
- **Default Sorting & Ordering (`sort: Option[SearchSort]`, default `recent`):**
  - `recent`: Order by latest activity timestamp descending (most recent first).
  - `oldest`: Order by latest activity timestamp ascending.
  - `name`: Order alphabetically by crystal ID.
- **Defensive Pagination & Context Limits (`limit: Option[Int]`, `offset: Option[Int]`):**
  - `limit`: Maximum results to return per page (default: 20; uncap with `--all` or `limit: 0`).
  - `offset`: Starting index offset for page pagination (default: 0).
- **Result Metadata (`SearchResult`):** Contains `total` (all matching crystals), `offset`, `limit`, `hasMore`, `remaining` count of unviewed matching crystals, and paginated `matches`.

### 2.2 CLI Command: `ccrystal search`

Add `ccrystal search` with Decline-based options, while retaining `ccrystal list` backed by the same engine:

- `-q, --query <text>`: Free-text search across crystal metadata, DAG, lessons, and artifacts.
- `--since <iso-datetime|relative>`: Filter crystals updated on or after timestamp (supports ISO-8601, `today`, `yesterday`, or relative offsets like `1d`, `7d`).
- `--until <iso-datetime|relative>`: Filter crystals updated on or before timestamp.
- `--today`: Convenience flag for `--since today`.
- `--yesterday`: Convenience flag for `--since yesterday --until today`.
- `--status <status>`: Filter by goal status (case-insensitive enum).
- `--has-active-leases`: Only show crystals with active transient resource leases.
- `--touching-path <path>`: Match leases or artifacts referencing the specified path.
- `--has-open-tasks`: Only show crystals with incomplete acceptance criteria.
- `--has-lessons`: Only show crystals with recorded lessons.
- `--author <id>`: Filter by author ID.
- `--aging <active|solid|stale>`: Filter by aging bucket.
- `--sort <recent|oldest|name>`: Sort order (default: `recent`).
- `--limit <N>`: Maximum results to return (default: 20; 0 to uncap).
- `--offset <N>`: Pagination offset (default: 0).
- `--all`: Show all results without pagination cap.
- `--include-archived`: Include crystals in cold storage (`.ccrystals/archive/`).
- `--json`: Output JSON envelope (`SearchResult`) with pagination metadata and matches instead of formatted text.

**Formatting:**
- Text table output displays: Crystal ID, Status, Matched Reasons/Snippets, Task Progress ($X/Y$), Active Leases, Last Modified relative date.
- Emits pagination header:
  - If results exceed page: `Found N crystal(s) (showing 1-20, R remaining; use --offset 20 to view next page):`
  - If all results fit: `Found N crystal(s):`

### 2.3 Consolidated MCP Server Tool: `crystal_search` (Replacing `crystal_list`)

- **Tool Name:** `crystal_search`
- **Replaces:** `crystal_list` (consolidating the tool surface and preventing tool bloat).
- **Parameters:**
  - `query` (optional string): Full-text search string.
  - `since` (optional string): ISO-8601 or relative date string.
  - `until` (optional string): ISO-8601 or relative date string.
  - `status` (optional string): `in_progress`, `concluded_success`, `concluded_abandoned`, `paused`.
  - `has_active_leases` (optional boolean): Filter by presence of active leases.
  - `touching_path` (optional string): Filter by path referenced in leases or artifacts.
  - `has_open_tasks` (optional boolean): Filter by open tasks.
  - `has_lessons` (optional boolean): Filter by recorded lessons.
  - `author` (optional string): Filter by author ID.
  - `aging` (optional string): `active`, `solid`, `stale`.
  - `sort` (optional string, default `recent`): `recent`, `oldest`, `name`.
  - `limit` (optional integer, default 20): Maximum results to return per page (0 to uncap).
  - `offset` (optional integer, default 0): Result offset for pagination.
  - `include_archived` (optional boolean, default `false`): Include crystals in cold storage.
  - `json_output` (optional boolean, default `false`): Output structured `SearchResult` JSON envelope.
- **Behavior:**
  - If called with zero filter parameters (or just `include_archived` / `json_output`), acts as the complete cave listing, maintaining full parity with former `crystal_list`.
  - If called with any filters, applies the `CrystalFilter` criteria and returns matching crystals with contextual match reasons.

### 2.4 Agent Skill & Tool Schemas

- Remove `crystal_list.json` and generate `crystal_search.json` in `.gemini/antigravity-cli/mcp/context-crystal/`.
- Update `.agents/skills/context-crystal/SKILL.md` and `docs/mcp/instructions.md` to document the unified `crystal_search` tool.

---

## 3. Non-Functional Requirements & Invariants

- **Boundary Separation:** Context Crystal operates as a fast, zero-hallucination operational navigational compass over the cave filesystem. It does not replace semantic vector databases (e.g. Engram/RAG).
- **Tool Hygiene:** Prevents tool count growth by consolidating listing and searching into `crystal_search`.
- **Pure Functional & Zero Reflection:** Scala 3 immutable ADTs, strict codecs, zero warnings (`-Werror`).
- **Pragmatic Help & Strict Self-Describing Enums:** Decline option descriptions clearly list all permissible values; invalid values emit informative errors listing valid alternatives.
- **Performance:** Sub-millisecond filtering across caves with dozens of crystals in Scala Native release builds.

---

## 4. Acceptance Criteria

- [ ] Core unit tests for `CrystalFilter` evaluation and temporal parsing logic across JVM, Native, and JS.
- [ ] CLI unit & integration tests for `ccrystal search` with various flag combinations and `--json` formatting.
- [ ] MCP unit tests for `crystal_search` in `DefaultMcpHandlerSuite` (verifying full-listing behavior on empty filter as well as targeted searches).
- [ ] MCP JSON schema exported to `.gemini/antigravity-cli/mcp/context-crystal/crystal_search.json` (and `crystal_list.json` removed).
- [ ] Updated agent skill in `.agents/skills/context-crystal/SKILL.md` and MCP docs in `docs/mcp/instructions.md`.
- [ ] Full test suite passes on JVM and Native with zero warnings.
