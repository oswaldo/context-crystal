# Specification: Cross-Crystal Connections, Lattice Bonds & Defensive Hydration Paging

## 1. Overview & Problem Statement

Context Crystal's current architecture operates on sovereign, isolated crystals. While isolation ensures clean task focus, real-world systems engineering requires coordination across distinct operational units:

- A milestone release crystal coordinates with component feature crystals and distribution crystals (`depends_on`, `relates_to`).
- A bugfix track can be blocked by an upstream architectural investigation (`blocks`, `references`).
- An exploratory spike can be replaced by a production implementation (`supersedes`).

Without first-class structural connections, relationships between crystals remain informal text references in chat transcripts or lessons, causing cognitive fragmentation and context loss. Furthermore, as caves grow, naive context hydration risks context window blowup unless strictly bounded by defensive limits.

This track delivers:

1. **Typed Lattice Bonds (Spec v1.1.0):** Typed cross-crystal relations (`relates_to`, `depends_on`, `blocks`, `supersedes`, `references`) stored within crystal state.
2. **SemVer 1.x Compatibility Range Invariant:** Replaces fragile hardcoded version enums in JSON Schema with semantic pattern matching (`pattern: "^1\\.[0-9]+\\.[0-9]+$"`) and codec acceptance of all 1.x minor/patch versions with additive defaulting.
3. **Acyclic Lattice Invariant & Pure Cycle Detection:** Algorithmic cycle detection rejecting both direct self-loops and sneaky indirect dependency rings (`A -> B -> C -> A`) with human-readable diagnostic paths.
4. **Storage Layer Coordination & Referential Integrity:** APIs to bond and unbond crystals with bidirectional query support (outbound and inbound links) and pruning safety warnings when active bonds target a pruned crystal.
5. **Defensive Hydration & Lattice Quick-Peeking:** Automatic projection of connected crystals into `ccrystal hydrate` with status and open task summaries, strictly bounded to depth 1 and capped token volume to eliminate context bloat.
6. **Ergonomic CLI & Consolidated Native MCP Tooling:** `ccrystal connect`, `ccrystal disconnect`, `ccrystal connections`, and consolidated MCP tool `crystal_connect`.

---

## 2. Core Functional Requirements

### 2.1 Domain Model & Spec v1.1.0 (`ccrystal.core.model`)

```scala
enum BondRelation derives CanEqual:
  case RelatesTo
  case DependsOn
  case Blocks
  case Supersedes
  case References

object BondRelation:
  def parse(s: String): Option[BondRelation] =
    s.trim.toLowerCase match
      case "relates_to" | "relatesto" | "relates-to"   => Some(BondRelation.RelatesTo)
      case "depends_on" | "dependson" | "depends-on"   => Some(BondRelation.DependsOn)
      case "blocks"                                    => Some(BondRelation.Blocks)
      case "supersedes"                                => Some(BondRelation.Supersedes)
      case "references"                                => Some(BondRelation.References)
      case _                                           => None

final case class LatticeBond(
    targetCrystalId: String,
    relation: BondRelation,
    description: Option[String] = None,
    createdAt: String,
) derives CanEqual

final case class CrystalBondsSummary(
    crystalId: String,
    outbound: List[LatticeBond],
    inbound: List[(String, LatticeBond)], // (sourceCrystalId, bond)
) derives CanEqual
```

- **Update `ContextCrystal`:**
  Add `bonds: List[LatticeBond] = Nil`
- **Schema Compatibility Invariant:**
  In `spec/v1/context-crystal.json`:
  Replace `"enum": ["1.0.0"]` with `"pattern": "^1\\.[0-9]+\\.[0-9]+$"`.
  Add `bonds` array property defaulting to `[]`.
- **Circe Codecs:**
  - Decoding: if `bonds` field is absent in JSON (legacy 1.0.0 crystals), decodes cleanly as `Nil`.
  - Encoding: writes `schemaVersion: "1.1.0"` if bonds are present, or preserves `schemaVersion`.
  - Rejects only incompatible major versions (`< 1.0.0` or `>= 2.0.0`).

### 2.2 Acyclic Lattice Invariant & Cycle Detection (`ccrystal.core.lattice.LatticeCycleDetector`)

1. **Cycle Prevention:**
   The connection lattice across active crystals must remain a Directed Acyclic Graph (DAG) for all directed bonds.
2. **Algorithm:**
   Before adding a bond from `sourceId` to `targetId`:
   - Inspect existing bonds across all crystals in the cave.
   - Run depth-first reachability search: can `sourceId` already be reached by following directed bonds starting from `targetId`?
   - If a path `targetId -> ... -> sourceId` exists, adding `sourceId -> targetId` creates a cycle.
   - Reject the operation with `Left`:
     `s"Circular lattice dependency detected: bonding '$sourceId' -> '$targetId' forms a cycle ($pathString). Directed crystal cycles are not permitted."`

### 2.3 Storage Layer & Referential Integrity (`CrystalStore` & `FsCrystalStore`)

1. **`connect(sourceId: String, targetId: String, relation: BondRelation, description: Option[String]): Either[String, LatticeBond]`**
   - Validates `sourceId` exists.
   - Validates `targetId` exists (active cave or cold storage archive).
   - Validates no self-loop (`sourceId != targetId`).
   - Runs `LatticeCycleDetector` to ensure no indirect cycles.
   - Idempotent: if a bond targeting `targetId` with `relation` already exists, updates description and preserves `createdAt`.
   - Persists source crystal atomically via OCC `update`.
2. **`disconnect(sourceId: String, targetId: String, relation: Option[BondRelation]): Either[String, Int]`**
   - Removes matching bonds from `sourceId`.
3. **`bonds(crystalId: String): Either[String, CrystalBondsSummary]`**
   - Returns outbound bonds from `crystalId`.
   - Scans remaining cave crystals to discover inbound bonds targeting `crystalId`.
4. **Referential Integrity on Prune:**
   - In `previewCrystalDeletion` / `previewPrune`:
     Check if any remaining active crystals have inbound bonds targeting the candidate crystal.
     Include warnings in the preview report:
     `! Warning: Targeted by N active crystal bond(s): <list>`
   - When pruned with `--force`, the crystal is pruned and incoming bonds remain gracefully identifiable as pointing to an archived/pruned target without crashing.

### 2.4 Defensive Hydration & Lattice Quick-Peeking (`ContextHydrator`)

- In `ccrystal hydrate <id>`:
  - If `crystal.bonds` is non-empty, render a dedicated section:

    ```markdown
    ## Connected Lattice Bonds:
    - [depends_on] milestone-v1.2.0: Milestone v1.2.0 Release (in_progress, 4 open tasks) - Tracking milestone
    - [relates_to] docs-portal: Public Documentation Portal (concluded_success, 0 open tasks)
    ```

  - **Defensive Invariants:**
    - Depth limited strictly to 1: Quick-peeks only direct targets, never recursively expands their DAGs.
    - Token volume capped: Emits only Target ID, Relation, Goal Title, Status, and open task count (~40 tokens per link).
    - Completed tasks in target crystals are omitted from the summary.

### 2.5 CLI Commands

```bash
# Connect crystals
ccrystal connect <source-id> <target-id> [--rel <relation>] [--desc <description>]

# Disconnect crystals
ccrystal disconnect <source-id> <target-id> [--rel <relation>]

# List connections
ccrystal connections <crystal-id> [--json]
```

### 2.6 Native MCP Server Tool: `crystal_connect`

- Consolidated tool keeping MCP surface at 16 tools:
  - `action`: `"connect"`, `"disconnect"`, `"list"`
  - `crystal_id`: Source crystal identifier
  - `target_id`: Target crystal identifier (required for connect / disconnect)
  - `relation`: Bond relation string (optional, defaults to `relates_to`)
  - `description`: Optional bond description
