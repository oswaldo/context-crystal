# Specification: Selective Context Hydration & Beam Shaping

## Overview
Context Crystal maintains living state containers and append-only DAGs that record full conversational and task execution lineages. As crystals grow over extended pairing sessions, injecting the entire transition history into LLM context consumes unnecessary tokens and degrades instruction attention.

This track introduces **Selective Context Hydration & Beam Shaping** across the Context Crystal CLI (`ccrystal cast` / `ccrystal hydrate`) and MCP Server (`hydrate_context` prompt and `crystal://{id}/hydrate` resource). It allows developers and autonomous agents to shape the context beam using sub-DAG slice selectors (`--from`, `--to`, `--tail`), focusing attention on relevant milestones while preserving the full living state container (Goal, Tasks, Leases, Lessons Learned).

---

## Architectural Principles & Design

1. **Decoupled Hydration Engine (`ContextHydrator`):**
   - Extract prompt formatting and beam shaping logic out of `Runner.scala` into a pure-functional core component (`ccrystal.core.dag.ContextHydrator` or `ccrystal.core.format.ContextHydrator`).
   - Cross-platform support (JVM, Native, JS) with pure functional transformation from `ContextCrystal` + `HydrationParams` to formatted prompt Markdown.

2. **Living State Preservation:**
   - The top-level living state container (Goal title/intent/status, Active/Completed Acceptance Criteria tasks, Unresolved Lessons Learned, Active Transient Leases) is always hydrated in full.
   - Beam shaping selectively filters and slices the **State Transitions** section of the context cast based on `SliceParams` (`from`, `to`, `tail`, `head`).

3. **Dual-Resolution Selector Matching:**
   - Selectors (`--from`, `--to`) resolve against DAG nodes by exact node UUID, UUID prefix, or semantic `anchor` label.
   - Validates ranges strictly: fails fast with an informative error if a selector does not match any node or if `--from` appears topologically after `--to`.

4. **Surface Area Alignment (CLI & MCP):**
   - **CLI:** `ccrystal cast` and `ccrystal hydrate` support `--from <selector>`, `--to <selector>`, and `--tail <N>` (with backwards-compatible `--depth <N>` and `--summary-only`).
   - **MCP Prompt:** `hydrate_context` accepts optional `from: Option[String]`, `to: Option[String]`, and `tail: Option[Int]`.
   - **MCP Resource:** Exposes dynamic resource `crystal://{crystal_id}/hydrate` supporting optional query parameters `?from=...&to=...&tail=...`.

---

## Functional Requirements

### 1. Core Model & Hydrator
- **`HydrationParams`:** Case class capturing:
  - `slice: SliceParams` (`from: Option[String]`, `to: Option[String]`, `head: Option[Int]`, `tail: Option[Int]`)
  - `summaryOnly: Boolean = false`
- **`ContextHydrator.hydrate(crystal: ContextCrystal, params: HydrationParams): Either[String, String]`:**
  - Validates selectors via `CrystalSlicer.slice` (or dedicated resolver).
  - Emits formatted context block containing:
    - Header and Crystal ID
    - Goal and Intent
    - Task list (with `[x]` / `[ ]` checkmarks)
    - Filtered State Transitions with node kind, author, content summary, anchor, and fidelity badge (if non-standard)
    - Unresolved Lessons Learned
    - Active Transient Leases

### 2. CLI Flags & Command Parsing
- Update `CliCommand.Cast` to accept:
  - `crystalId: String`
  - `slice: SliceParams`
  - `summaryOnly: Boolean`
- Support CLI flags on both `ccrystal cast` and `ccrystal hydrate`:
  - `--from <anchor|id>`: Start of transition slice (inclusive)
  - `--to <anchor|id>`: End of transition slice (inclusive)
  - `--tail <N>`: Select the N most recent transitions in the resolved slice
  - `--depth <N>`: Retained as an alias for `--tail <N>` for backwards compatibility
  - `--summary-only`: Omit transition history entirely

### 3. Native MCP Server Integration
- **`hydrate_context` Prompt:**
  - Arguments: `crystal_id: String`, `from: Option[String]`, `to: Option[String]`, `tail: Option[Int]`, `summary_only: Option[Boolean]`, `depth: Option[Int]`.
  - Invokes `ContextHydrator` and returns prompt message with shaped context.
- **`crystal://{crystal_id}/hydrate` Resource:**
  - Supports URI template and query parameters (e.g. `crystal://my-crystal/hydrate?tail=5&from=checkpoint-1`).
  - Returns raw shaped prompt text with `text/markdown` or `text/plain` mime type.

---

## Non-Functional Requirements
- **Zero Warnings & Strict Equality:** Fully compliant with `-language:strictEquality` and Zero-Warning Policy.
- **Fail-Fast Error Messages:** Clear, human-readable error messages when selectors fail to resolve.
- **Deterministic Pure Functions:** Zero reflection, immutable models, cross-platform compilation across JVM and Native.
