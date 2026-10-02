# Specification: Cave Statistics, Storage Metrics & Token Savings

## 1. Overview & Problem Statement

As engineering teams and autonomous agents accumulate history in a Context Crystal workspace cave (`.ccrystals/`), operators need high-level, deterministic answers to key lifecycle and operational questions:

- **Temporal Genesis & Activity:** What is the oldest crystal in the cave (genesis)? What is the most recent crystal? When was the cave last updated?
- **Structural Inventory:** How many total crystals exist (active vs cold storage archive)? How many total DAG transitions/messages have been recorded across the cave? How many acceptance criteria/tasks have been completed vs remain open? How many active transient leases exist? How many lessons learned and registered artifacts/entities exist?
- **Physical Footprint:** What is the total storage footprint of the cave on disk (in bytes, KB, MB) across active `.ccrystals/` and archived `.ccrystals/archive/`? What is the average footprint per crystal?
- **Quantitative Token Efficiency:** How many prompt tokens has Context Crystal saved compared to naive conversational transcripts? By utilizing selective context hydration (`ccrystal cast/hydrate --from/--tail`), sub-DAG topological melting (`ccrystal melt`), and compact state representations, Context Crystal deterministically slashes token consumption. A clear statistical calculation provides a quantitative indicator of token efficiency. *(Note: These figures are reference estimates based on best-effort heuristic assumptions [~4 chars/token] rather than scientifically validated tokenizer benchmarks—an engineering hypothesis we aim to empirically validate in future research).*
- **Cave Health Breakdown:** What is the distribution of crystals across goal statuses (`InProgress`, `ConcludedSuccess`, `ConcludedAbandoned`) and aging states (`Active`, `Solid`, `Stale`)?

This track delivers a dedicated CLI subcommand (`ccrystal stats`) and native MCP tool (`crystal_stats`) to compute and render these metrics deterministically with zero LLM overhead.

---

## 2. Core Functional Requirements

### 2.1 Domain Models (`ccrystal.core.model.stats`)

```scala
package ccrystal.core.model.stats

import ccrystal.core.model.*
import ccrystal.core.model.search.{AgingCategory, CrystalFilter}

final case class TemporalExtents(
    oldestCrystalId: Option[String],
    oldestCreatedAt: Option[String],
    newestCrystalId: Option[String],
    newestUpdatedAt: Option[String],
    spanDays: Long,
)

final case class StructuralTotals(
    totalCrystals: Int,
    activeCrystals: Int,
    archivedCrystals: Int,
    totalDagNodes: Long,
    totalTasks: Int,
    completedTasks: Int,
    openTasks: Int,
    activeLeases: Int,
    totalLessons: Int,
    openLessons: Int,
    totalArtifacts: Int,
    totalEntities: Int,
)

final case class StorageFootprint(
    activeBytes: Long,
    archivedBytes: Long,
    totalBytes: Long,
    averageCrystalBytes: Long,
)

final case class TokenSavingsEstimate(
    estimatedRawDagTokens: Long,
    estimatedHydratedTokens: Long,
    estimatedTokensSaved: Long,
    savingsPercentage: Double,
)

final case class CaveHealthBreakdown(
    byStatus: Map[String, Int],
    byAging: Map[String, Int],
)

final case class CrystalDiskUsage(
    crystalId: String,
    status: GoalStatus,
    aging: AgingCategory,
    totalBytes: Long,
    dagNodes: Int,
    estimatedTokens: Long,
    isArchived: Boolean,
)

final case class CaveStats(
    filter: Option[CrystalFilter],
    extents: TemporalExtents,
    structure: StructuralTotals,
    storage: StorageFootprint,
    tokenSavings: TokenSavingsEstimate,
    health: CaveHealthBreakdown,
    topCrystals: List[CrystalDiskUsage],
)
```

### 2.2 CLI Interface: `ccrystal stats` (Composable with Search Filters)

By reusing the `CrystalFilter` parser from `ccrystal search`, `ccrystal stats` effortlessly supports combined queries answering targeted operational questions without reinventing filter logic:

- **Global Cave Metrics:**

  ```bash
  ccrystal stats
  ```

- **Filter-Scoped Metrics:**
  - *"How much disk and token volume did we use for crystals updated in the last 7 days?"*

    ```bash
    ccrystal stats --since 7d
    ```

  - *"What are the stats for active crystals with in-flight leases?"*

    ```bash
    ccrystal stats --status in_progress --has-active-leases
    ```

  - *"Show disk and token breakdown for stale crystals:"*

    ```bash
    ccrystal stats --aging stale --detailed
    ```

  - *"Disk footprint for crystals touching a specific worktree or path:"*

    ```bash
    ccrystal stats --touching-path ../ccrystal-worktrees/my-feature
    ```

- **Options:**
  - Search filter options: `-q / --query`, `--since`, `--until`, `--today`, `--yesterday`, `--status`, `--has-active-leases`, `--touching-path`, `--has-open-tasks`, `--has-lessons`, `--author`, `--aging`, `--include-archived` / `--archived`.
  - Display options: `--detailed` (prints per-crystal disk usage ranking table), `--json` (emits structured JSON).

- **Human-Readable Dashboard Table:**

  ```text
  === CONTEXT CRYSTAL CAVE METRICS & STATS ===
  Scope: Global Cave (13 crystals evaluated)

  Temporal Genesis & Activity:
    Genesis:      c-1 (2026-08-28T10:00:00Z)
    Most Recent:  cave-stats-and-telemetry (2026-10-02T01:34:25Z)
    Lifespan:     35 day(s)

  Cave Structural Inventory:
    Total Crystals:     13 (12 active, 1 archived)
    DAG Transitions:    142 total nodes
    Tasks / Criteria:   58 total (52 completed [89.6%], 6 open)
    Active Leases:      1 lease(s) in-flight
    Lessons Learned:    14 recorded (0 unresolved)
    Artifacts/Entities: 8 artifacts | 5 registered entities

  Storage Footprint on Disk:
    Active Cave:        428.5 KB
    Cold Storage:       48.2 KB
    Total Footprint:    476.7 KB (avg 36.6 KB / crystal)

  Quantitative Token Savings (vs. Full DAG Re-Ingestion):
    Estimated Full DAG Volume:    ~245,000 tokens
    Current Hydrated Footprint:   ~18,500 tokens
    Tokens Preserved / Saved:     ~226,500 tokens (92.4% reduction)

  Cave Health Distribution:
    Status: 10 ConcludedSuccess | 1 InProgress | 0 ConcludedAbandoned
    Aging:  10 Solid | 1 Active | 0 Stale

  Detailed Disk Usage (Top Crystals):
    - c-large-feature:     142.3 KB | 48 nodes | ~72,000 tokens [ConcludedSuccess]
    - auth-refactor:        86.1 KB | 29 nodes | ~44,000 tokens [ConcludedSuccess]
    - cave-search:          54.2 KB | 18 nodes | ~27,000 tokens [ConcludedSuccess]
  ==============================================
  ```

### 2.3 Native MCP Server Tool: `crystal_stats`

- **Tool Name:** `crystal_stats`
- **Description:** "Compute and inspect workspace cave statistics, temporal genesis, structural totals, physical disk footprints, and quantitative prompt token savings across global cave or filtered search criteria."
- **Parameters:**
  - Filtering parameters (reusing `crystal_search` dimensions): `query`, `since`, `until`, `status`, `has_active_leases`, `touching_path`, `has_open_tasks`, `has_lessons`, `author`, `aging`, `include_archived`.
  - Output options: `detailed: boolean` (default false), `json_output: boolean` (default false).

---

## 3. Verification Criteria

- Pure functional domain models and codecs round-trip adhering strictly to specs.
- Accurate civil date epoch span computation using zero-dependency `CivilDate`.
- Token estimation based on deterministic ~4 chars/token heuristic.
- 100% green test passes across all targets (Native, JVM, JS).
- Full Markdown lint compliance and zero compiler warnings.
