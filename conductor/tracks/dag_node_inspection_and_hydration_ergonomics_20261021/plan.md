# Implementation Plan: DAG Node Inspection, Hydration Ergonomics & Dogfooding Guards

- **Track ID:** `dag_node_inspection_and_hydration_ergonomics_20261021`
- **Specification:** [spec.md](./spec.md)
- **Status:** Complete

---

## Phase 1: Core DAG Query & Retrieval Engine (`core`)

- [x] Task 1.1: Implement `queryNodes` and `findNode` on `DAG` in `core`
  - Case-insensitive query matching across summary, actor, anchor, artifacts, metadata
  - Filter by `kind` and `author`
  - Type-safe `DAGNodeSort` enum (`Recent`, `Oldest`) and pagination (`limit`, `offset`, unconstrained)
- [x] Task 1.2: Unit tests in `core` (`DAGQuerySuite`)
  - Test query filtering, kind matching, pagination slices, and sort orders
- [x] Task 1.3: Phase 1 Checkpoint & Cross-Build Test (`sbt "coreJVM/test; coreNative/test; coreJS/test"`)

---

## Phase 2: CLI Subcommands (`cli`)

- [x] Task 2.1: Implement `ccrystal node list <crystal-id>` in Decline parser and runner
  - Support `--query`, `--kind`, `--author`, `--sort`, `--limit`, `--offset`, `--all`, `--json`
  - Tabular formatting and pagination summary
- [x] Task 2.2: Implement `ccrystal node show <crystal-id> <node-id>` in Decline parser and runner
  - Detailed node view and `--json` support
- [x] Task 2.3: Support `--all` on `ccrystal hydrate <crystal-id>`
  - Bypass default `tail: 10` truncation when `--all` is specified
- [x] Task 2.4: CLI Unit tests in `cliJVM` validating parser and runner execution
- [x] Task 2.5: Phase 2 Checkpoint & Verification

---

## Phase 3: Native MCP Server Extensions (Zero Tool Crowding)

- [x] Task 3.1: Support `all: Boolean` in `crystal_hydrate` MCP tool
- [x] Task 3.2: Support `crystal_id: Option[String]` in `crystal_search` MCP tool to query scoped DAG nodes
- [x] Task 3.3: MCP JSON-RPC unit tests in `DefaultMcpHandlerSuite`
- [x] Task 3.4: Phase 3 Checkpoint & Verification

---

## Phase 4: Quality Verification & Milestone Alignment

- [x] Task 4.1: Run full verification suite (`sbt "scalafmtCheckAll; scalafixAll --check; test"`)
- [x] Task 4.2: Update Conductor registry and Context Crystal tasks
