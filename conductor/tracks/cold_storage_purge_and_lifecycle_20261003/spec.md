# Specification: Cold Storage Prune, Deletion Symmetry & Lifecycle Completeness

## 1. Overview & Problem Statement

Context Crystal provides complete context lifecycle management: crystal initialization, DAG advancement, cleavage/slicing, melting, conclusion, and archiving to cold storage (`.ccrystals/archive/`). However, two lifecycle hygiene gaps currently exist:

1. **Deletion Asymmetry:** `ccrystal delete <id>` and `CrystalStore.deleteCrystal(id)` currently only search active crystal directories (`.ccrystals/<id>`). If a crystal has been archived to cold storage (`.ccrystals/archive/<id>`), deletion fails with "not found", forcing manual filesystem intervention. Furthermore, deletion currently does not clean up associated entries in the Cave Artifact Registry (`.ccrystals/artifacts.json`).
2. **Monotonic Cold Storage Growth (Lack of Retention & Pruning):** Once crystals are archived, they accumulate monotonically in `.ccrystals/archive/`. While archiving preserves historical lineage and keeps active working context clean, long-lived projects need automated, safe retention mechanisms to prune ancient or obsolete archived contexts based on age or explicit batch criteria, with preview impact and dry-run safety.

This track seals the single-crystal lifecycle by delivering:
- **Transparent Deletion Symmetry:** `ccrystal delete <id>` operates seamlessly across both active (`.ccrystals/`) and cold storage (`.ccrystals/archive/`), cascade-deregistering orphaned entities and removing associated artifact registry entries.
- **Dedicated Prune Engine & CLI Subcommand:** `ccrystal prune` supporting targeting by ID, `--older-than <duration>` (e.g. `30d`, `90d`), or `--all`, with mandatory confirmation, `--dry-run` preview, and `-f` / `--force` automation flags.
- **Consolidated Native MCP Tool (`crystal_prune`):** Expands the removal tool surface under `crystal_prune` (with `crystal_delete` preserved as a backward-compatible alias), introducing zero tool bloat while giving autonomous agents safe pruning and dry-run capabilities.
- **Triage Recommendation Integration:** `ccrystal triage` and `crystal_triage` inspect archived crystals against retention thresholds (default: 90 days) and recommend candidates for pruning.

---

## 2. Core Functional Requirements

### 2.1 Storage Layer: Deletion Symmetry (`CrystalStore` & `FsCrystalStore`)

1. **Location Transparency:**
   - When `deleteCrystal(id)` is invoked, the store checks both active storage (`.ccrystals/<id>`) and cold storage (`.ccrystals/archive/<id>`).
   - If present in both (anomalous state), both are cleaned and reported.
   - If present in neither, returns `Left("Crystal '<id>' not found in active or archived storage")`.
2. **Symmetrical Cascade Deregistration:**
   - Scans remaining crystals across **both** active and archived storage to determine if any entity was exclusively authored by the deleted crystal. If so, cascade-deregisters the orphaned entity from `.ccrystals/entities.json`.
3. **Cave Artifact Registry Synchronization:**
   - Inspects `.ccrystals/artifacts.json`. Removes any artifact records owned by or referencing the deleted crystal, preventing dangling artifact pointers.
4. **Enhanced Preview (`previewCrystalDeletion`):**
   - Returns a `CrystalImpactPreview` that indicates whether the crystal is currently `Active` or `Archived`, along with the crystal's disk footprint, nodes, tasks, lessons, transient leases, and affected entities/artifacts.

### 2.2 Prune Domain Models & Engine (`ccrystal.core.model.prune` & `ccrystal.core.prune`)

```scala
package ccrystal.core.model.prune

final case class PruneCandidate(
    crystalId: String,
    archivedAt: Option[String],
    ageDays: Long,
    diskBytes: Long,
    nodeCount: Int,
    taskCount: Int,
    lessonCount: Int
)

final case class PruneImpactPreview(
    candidates: List[PruneCandidate],
    totalCrystals: Int,
    totalBytesFreed: Long,
    orphanedEntitiesToDeregister: List[String],
    artifactsToClean: List[String]
)

final case class PruneResult(
    prunedCrystalIds: List[String],
    deregisteredEntityIds: List[String],
    cleanedArtifactIds: List[String],
    bytesFreed: Long,
    dryRun: Boolean
)
```

1. **Prune Engine (`PruneEngine`):**
   - Pure functional evaluation of cold storage candidates in `.ccrystals/archive/`.
   - Supports duration parsing: `<number>d` (days, e.g. `30d`, `90d`), `<number>w` (weeks), `<number>m` (months / 30 days).
   - Computes age from crystal metadata (`updated_at` or archival timestamp / filesystem mtime).
   - Computes total disk space that will be freed.
   - Computes orphaned entities and dangling cave artifacts across remaining crystals.
2. **`CrystalStore.pruneArchived(...)`:**
   - `def previewPrune(olderThanDays: Option[Long], crystalId: Option[String], all: Boolean): Either[String, PruneImpactPreview]`
   - `def pruneArchived(olderThanDays: Option[Long], crystalId: Option[String], all: Boolean, dryRun: Boolean): Either[String, PruneResult]`

### 2.3 CLI Command: `ccrystal prune`

```bash
# Prune a specific archived crystal
ccrystal prune <crystal-id> [-f | --force]

# Preview pruning of crystals older than 60 days
ccrystal prune --older-than 60d --dry-run

# Prune crystals older than 90 days with interactive confirmation
ccrystal prune --older-than 90d

# Prune all cold storage with force bypass
ccrystal prune --all --force
```

1. **Safety Invariants:**
   - At least one targeting option (`<crystal-id>`, `--older-than <duration>`, or `--all`) must be provided. If none are specified, the command displays usage error.
   - Interactive `y/N` confirmation is mandatory unless `-f` / `--force` or `--dry-run` is specified.
   - Clear preview table displayed prior to prompt: lists candidate IDs, age, disk footprint, and summary totals (crystals, bytes, cascaded entities).
   - In batch execution mode (`ccrystal batch`), headless safety invariant applies: requires `--force` or fails.

### 2.4 CLI Command: `ccrystal delete` Enhancements

- If the targeted crystal is located in `.ccrystals/archive/`, the confirmation prompt and preview explicitly state:
  `Target: [Cold Storage Archive] .ccrystals/archive/<id>`
- Seamless execution with identical semantics to active crystal deletion.

### 2.5 Native MCP Server Tool: `crystal_prune` (with `crystal_delete` Alias)

- Expose `crystal_prune` in `ccrystal mcp` tools list.
- Keep `crystal_delete` as a supported invocation alias mapped to the same handler for backward compatibility.
- **Parameters:**
  - `crystal_id`: Optional specific crystal ID.
  - `older_than`: Optional duration filter (`30d`, `60d`, `90d`).
  - `archive_only`: Optional boolean (default `true` for batch pruning).
  - `dry_run`: Optional boolean (default `true` for batch actions).
  - `force`: Optional boolean to confirm execution.
- **Output:**
  - Formatted text summary detailing pruned crystals, freed bytes, deregistered entities, and whether dry-run occurred. Pass `json_output: true` for structured consumption.

### 2.6 Cave Triage Integration (`ccrystal triage` & `crystal_triage`)

- Expand triage engine to inspect `.ccrystals/archive/`.
- If archived crystals exceed the retention threshold (default: 90 days), emit a high-confidence recommendation:
  `[Cold Storage Retention] N archived crystal(s) older than 90d found in cold storage (total: X KB/MB). Recommend running 'ccrystal prune --older-than 90d' to reclaim disk space.`

---

## 3. Non-Functional Requirements

- **Pure Functional & Zero-Reflection:** Deterministic models, pure functions returning `Either[String, A]`, Circe codecs.
- **Zero-Warning Policy:** Scalafmt, scalafix, zero compiler warnings under Scala 3.9.0.
- **Multi-Platform Support:** Clean compilation and execution across Native, JVM, and JS targets.
- **Defensive Safeguards:** No accidental deletion of active crystals by `prune`. Clear dry-run reports before irreversible file removal.
