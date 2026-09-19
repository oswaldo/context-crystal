# Track Specification: Lifecycle Housekeeping, Melting & Archiving

**Track ID:** `lifecycle_housekeeping_and_archiving_20260919`  
**Type:** Feature  
**Core Tenets:** Tenet 10 (Deterministic, Zero-LLM Housekeeping), Tenet 15 (Bidirectional Compatibility)

## 1. Overview

As a cave evolves over time, crystals accumulate. While some crystals are actively receiving transitions, others conclude or become stale. Storing everything in the primary `.ccrystals/` root leads to tool resource bloat and token overhead during context beam hydration.

This track implements the Lifecycle Housekeeping, Melting & Archiving subsystem defined in Tenets 10 & 15 and Section 4.C/4.D of the Product Manifesto (`conductor/product.md`). It equips Context Crystal with:

1. **Cold Storage Archiving (`ccrystal archive`, `ccrystal unarchive`, `crystal_archive`):** Moving completed/inactive crystals into `.ccrystals/archive/` while retaining full state and artifacts.
2. **Zero-LLM Sub-DAG Melting (`ccrystal melt`, `crystal_melt`):** Deterministic node squashing that collapses chains of fine-grained intermediary steps into consolidated checkpoint nodes with aggregated artifact links, preserving key decisions while drastically reducing prompt beam token overhead without requiring LLM calls (with optional agent summary override).
3. **Aging State Classification & Triage:** Deterministic classification of crystals into `Active`, `Solid`, and `Stale` states based on activity recency, completion status, and active transient leases.
4. **CLI Subcommands & MCP Integration:** Native CLI commands and native MCP tools (`crystal_archive`, `crystal_unarchive`, `crystal_melt`) with JSON/text reporting.

## 2. Functional Requirements

1. **Storage SPI & Filesystem Layout:**
   - Extend `CrystalStore` trait with `archive(crystalId: String): Either[String, Unit]` and `unarchive(crystalId: String): Either[String, Unit]`.
   - In `FsCrystalStore`, move `.ccrystals/<id>.json` (and `.ccrystals/<id>/`) to `.ccrystals/archive/<id>.json` (and `.ccrystals/archive/<id>/`).
   - `listCrystals`: By default, only return active/unarchived crystals. Add `includeArchived: Boolean` (CLI `--archived` / `--all`) to inspect archived crystals.
2. **Deterministic Sub-DAG Melting (`ccrystal melt`):**
   - Provide `melt(crystalId: String, fromNodeId: String, toNodeId: String, customSummary: Option[String]): Either[String, DAGNode]`.
   - Replaces the path between `fromNodeId` and `toNodeId` with a single consolidated checkpoint `DAGNode`.
   - Consolidates:
     - `contentSummary`: Deterministic concatenation of intermediate node summaries (bulleted timeline) by default, or an optional user/agent-provided `customSummary`.
     - `artifactIds`, `inputArtifactIds`, `outputArtifactIds`, `preconditionArtifactIds`: Union set of all referenced artifacts across squashed nodes.
     - Preserves root connectivity, boundary timestamps, and updates outward children edges.
   - **Zero LLM Requirement:** Runs completely deterministically in Scala Native / JVM / JS.
3. **Crystal Aging State Classification:**
   - Extend `CrystalTriageReport` / triage logic with `AgingState` enum:
     - `Active`: In progress, modified within last 14 days, or has open transient leases.
     - `Solid`: Concluded (`concluded_success` or `concluded_abandoned`), 0 active leases, 0 open lessons.
     - `Stale`: Incomplete/in_progress with no activity for >30 days, or abandoned with unresolved items.
   - CLI flags: `ccrystal triage --solid`, `ccrystal triage --stale`.
4. **CLI Commands & Decline Parser:**
   - `ccrystal archive <crystal-id>`
   - `ccrystal unarchive <crystal-id>`
   - `ccrystal melt <crystal-id> --from <node> --to <node> [--summary <text>]`
   - `ccrystal list --archived` / `--all`
5. **Native MCP Server Integration:**
   - Tool `crystal_archive`: archives a crystal to cold storage.
   - Tool `crystal_unarchive`: restores an archived crystal to active state.
   - Tool `crystal_melt`: squashes a sub-DAG deterministically (with optional `summary`).
   - Update `crystal_list` and `crystal_triage` tools with archiving and aging filter flags.

## 3. Non-Functional Requirements

- **Zero-Reflection & Pure Functional:** All changes adhere to Scala 3 immutable models, ADTs, and `derives CanEqual`.
- **Zero-LLM Latency:** Melting and archiving execute instantaneously in Scala Native with zero external network or LLM dependencies.
- **Zero-Warning Policy:** Cross-platform compilation for JVM, Native, and JS with 0 compiler warnings and full `scalafmt` / `scalafix` compliance.
- **Bidirectional Compatibility:** Existing crystal JSON schemas v1.0.0 remain valid; no breaking changes to schema.

## 4. Out of Scope

- External remote cloud/S3 archive backends.
- 3D lattice visualizer rendering of melted nodes (Track 11).
