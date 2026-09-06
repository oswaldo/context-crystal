# Specification: Track - Crystal Cleavage & Fragment Slicing

## 1. Overview
As agent interaction loops expand over long horizons, context sessions grow bloated, wander across diverging goals, or suffer from token inflation and hallucination drift. 

In crystallography, when internal stress accumulates or an orientation shifts, a mineral undergoes *cleavage* along structural planes. Analogously, this track introduces **Crystal Cleavage & Fragment Slicing** into Context Crystal:
- Nodes in the DAG can carry an optional semantic **`anchor`** (a human/AI-readable label like `"auth_pivot"`, `"v2_design"`, or `"checkpoint_3"`).
- Developers and AI agents can query and slice sub-DAG fragments from a cleavage point using range and topological selectors (`--from`, `--to`, `--head`, `--tail`).
- Cleaved shards can be output directly (`prompt`, `human`, `json`) or materialized into a fresh, independent crystal via `--fork-to <name>`, establishing cryptographic provenance back-pointers (`CrystalOrigin`) to the parent crystal.

## 2. Functional Requirements

### 2.1 Data Model & JSON Schema
- **Semantic Anchors on DAGNode:**
  - Add optional `anchor: Option[String] = None` to `ccrystal.core.model.DAGNode`.
  - Update `spec/v1/context-crystal.json` to include `"anchor": { "type": ["string", "null"] }` under `DAGNode` properties.
  - Update `Codecs.scala` to serialize and deserialize `anchor`.
  - Maintain backward compatibility: legacy crystals omitting `anchor` must deserialize with `None`.

### 2.2 Core Slicing Engine (`ccrystal.core.dag.CrystalSlicer`)
- Implement pure functional slicing operations on `DAG`:
  - **Node Resolution:** Support resolving a node by either its unique `id` or its `anchor` (e.g. `findNode(selector: String)`).
  - **Linear Slicing:** Slice nodes between start and end boundaries (`from`, `to`), or slice ordinal ranges (`head`, `tail`).
  - **Topological Slicing:** Extract reachable sub-graphs starting from a designated cleavage anchor down to leaf nodes or within depth $D$.
  - **Sub-DAG Normalization:** Ensure the resulting slice forms a valid DAG (identifying the new slice root, maintaining internal edges, and pruning severed edges).
  - **Fork Construction:** Produce a new `ContextCrystal` containing the cleaved DAG shard, populated with a `CrystalOrigin(parentCrystalId, parentNodeId, reason = Some("cleavage_slice"))`.

### 2.3 CLI Interface (`ccrystal slice`)
- Introduce a new command `slice` to the decline CLI:
  - Usage: `ccrystal slice <crystal-id> [options]`
  - Selectors:
    - `--from <anchor|id>`: Begin slice from specified anchor or node ID.
    - `--to <anchor|id>`: End slice at specified anchor or node ID.
    - `--head <N>`: Take first N nodes.
    - `--tail <N>`: Take last N nodes.
  - Output Formats:
    - `--format prompt` (default): Renders markdown/prompt-ready context of the sliced fragment for LLM ingestion.
    - `--format human`: Structural summary of the slice (node count, anchor markers, author attributions).
    - `--format json`: Full JSON serialization of the sliced sub-crystal.
  - Lifecycle & Materialization:
    - `--fork-to <name>`: Persists the extracted slice as a new crystal in `.ccrystals/<name>/` with linked `origin`.
    - `--prune`: When `--fork-to` is supplied, tags the parent crystal's cleavage point in metadata.

## 3. Non-Functional Requirements
- **Zero Reflection & Pure Functional:** All slice operations must be deterministic, pure functions operating on immutable data structures.
- **Strict Schema Compliance:** All materialized fork crystals must validate against `spec/v1/context-crystal.json`.
- **Cross-Platform Parity:** Core slicing logic must compile and pass tests across JVM, Native, and JS platforms.

## 4. Acceptance Criteria
- [ ] `anchor` field added to `DAGNode` and `spec/v1/context-crystal.json` with full round-trip codec test coverage.
- [ ] Pure functional `CrystalSlicer` unit tests cover:
  - Resolution by anchor and by ID.
  - Linear slice (`from`/`to`, `head`/`tail`).
  - Topological sub-tree extraction from cleavage node to leaves.
  - Sub-DAG edge normalization and new root node assignment.
  - `CrystalOrigin` lineage construction.
- [ ] CLI command `ccrystal slice` supports `--from`, `--to`, `--head`, `--tail`, `--format <prompt|human|json>`, and `--fork-to <name>`.
- [ ] Full test suite passes across `coreJVM`, `coreNative`, `coreJS`, `cliJVM`, and `cliNative`.

## 5. Out of Scope
- Automatic AI token-budget self-pruning triggers (this will be handled by the Agent Skill in Track 5).
- Interactive 3D visual cleavage manipulators (reserved for Track 7 visualizer).
