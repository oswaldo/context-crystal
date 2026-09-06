# Specification: Destructive Lifecycle Cleanup (Crystal Deletion & Entity Deregistration)

## Overview
Context Crystal provides creation, advancement, slicing, and forking of computational contexts. However, it lacks native destructive operations: deleting crystals and deregistering cave entities. This track implements `ccrystal delete <crystal-id>` and `ccrystal entity deregister <entity-id>` with:
1. Complete cascade resolution across crystals and entities.
2. Impact preview detailing what will be lost, capped by `CCRYSTAL_DELETION_PREVIEW_LIMIT` (default 10).
3. Interactive `y/N` confirmation prompts by default.
4. Non-interactive `-f` / `--force` bypass flags for scripting and agent autonomy.
5. Batch executor safety protections.

---

## Functional Requirements

### 1. `ccrystal delete <crystal-id> [-f | --force]`
- **Validation:** Verifies crystal exists; returns clear error if not found.
- **Impact Preview:**
  - Displays Crystal ID, Goal title, intent, and timestamps.
  - Summarizes counts of:
    - DAG transition nodes and semantic anchors.
    - Tasks (completed vs pending).
    - Lessons learned (open vs actioned).
    - Transient leases.
  - Lists individual items up to `CCRYSTAL_DELETION_PREVIEW_LIMIT` (default 10, newest first). If more items exist, emits "... and N more [items]".
  - **Cascade Check:** Scans the Cave Entity Registry. If an entity is only referenced by or associated with this crystal and no others, announces that the entity will be cascade-deregistered.
- **Confirmation:**
  - In interactive mode (absence of `-f`/`--force`), prompts `Are you sure you want to permanently delete crystal '<id>' and all associated state? [y/N]: `.
  - If user inputs `y` or `yes` (case-insensitive), deletes the crystal directory `.ccrystals/<crystal-id>/` and any cascaded entities.
  - If user inputs anything else, aborts with `Deletion cancelled.` and exit code 0.
  - In non-interactive mode (`-f` / `--force`), executes immediately without prompting.

### 2. `ccrystal entity deregister <entity-id> [-f | --force]`
- **Validation:** Verifies entity exists in `.ccrystals/entities.json`; returns error if not found.
- **Cascade Impact Preview:**
  - Displays Entity details: ID, Name, Kind.
  - Identifies all crystals authored or referenced by this entity.
  - Summarizes each associated crystal with its impact preview (capped by `CCRYSTAL_DELETION_PREVIEW_LIMIT`).
- **Confirmation:**
  - In interactive mode (absence of `-f`/`--force`), prompts:
    `WARNING: Deregistering entity '<id>' will cascade-delete N crystal(s): [<names>] and all their DAG histories.`
    `Are you sure you want to proceed? [y/N]: `
  - If confirmed or if `-f`/`--force` is supplied:
    - Deletes all associated crystal directories.
    - Removes the entity record from `.ccrystals/entities.json`.

### 3. Environment Configuration
- `CCRYSTAL_DELETION_PREVIEW_LIMIT`: Integer specifying maximum items to display in each impact category (default: 10).

### 4. Batch Execution Safety
- Inside `ccrystal batch`, destructive commands MUST specify `-f` or `--force`. If omitted, batch execution halts with an error explaining that headless scripts require `--force`.

---

## Non-Functional Requirements
- **Pure Functional & Zero Reflection:** Deterministic immutable data structures and pure functions returning `Either[String, A]`.
- **Zero Warnings:** Zero compilation warnings or lint violations under Scala 3.9.0.
- **Cross-Platform:** Native, JVM, and JS compatibility where applicable.
- **TDD:** Strict test-driven development with 100% test coverage for destructive and cascade paths.
