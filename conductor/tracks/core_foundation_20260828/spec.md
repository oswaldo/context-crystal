# Track Specification: MVP Core Foundation

**Track ID:** `core_foundation_20260828`  
**Type:** MVP / Foundation  
**Status:** In-Design  

## 1. Overview
The MVP Core Foundation establishes the repository workspace, the vendor-neutral JSON Schema specification (`spec/v1/context-crystal.json`), and the cross-compiled Scala 3 core library (`core/`) with full parity across Scala Native, JVM, and Scala.js.

This lays the immutable data interchange foundation for Context Crystal, enabling all downstream modules (`cli/`, `tui/`, `skills/`, and `web/`) to share typed models, serialization codecs, DAG operations, and validation routines.

---

## 2. Functional Requirements

### A. Specification (`spec/`)
1. **JSON Schema v1 (`spec/v1/context-crystal.json`):**
   - Formal JSON Schema (Draft 2020-12) defining:
     - `Envelope`: Schema version, crystal ID, creation/update timestamps, signature/hash.
     - `Goal`: Title, intent description, acceptance criteria list, outcome status (`in_progress`, `concluded_success`, `concluded_abandoned`).
     - `Entities & Masks`: Models, harnesses, human contributors, active prompt masks.
     - `DAG State Transitions`: Nodes representing actions, mutations, checkpoints, and structural branches.
     - `Transient Leases`: Temporary worktrees, debug configs, and dummy placeholder assets with disposal policies.
     - `Lessons Learned`: Friction logs, root causes, resolution actions, and audit trail.
2. **Schema Test Fixtures (`spec/fixtures/`):**
   - Valid and invalid crystal JSON examples covering simple linear facets, dendritic branching, transient leases, and closed-loop lessons.

### B. Build System & Scaffolding
1. **sbt Multi-Project Configuration:**
   - Root `build.sbt` with `sbt-crossproject` configured for `core` targeting JVM, Native (0.5.x+), and JS (1.17+).
   - Dependencies: `circe` (core, generic, parser), `munit` (testing).

### C. Core Domain Library (`core/`)
1. **Domain ADTs (`ccrystal.core.model.*`):**
   - Strongly-typed Scala 3 case classes, enums, and opaque types for Envelope, Goal, Entity, Mask, StateNode, TransitionDAG, TransientLease, and LessonLearned.
2. **Circe Codecs & Serialization (`ccrystal.core.codec.*`):**
   - High-performance, portable Circe encoders/decoders for all domain models with round-trip JSON parity.
3. **DAG Traversal & Integrity (`ccrystal.core.dag.*`):**
   - Immutable operations: append node, branch sub-context, detect cycles, find root/leaf nodes, verify parent hashes.
4. **Transient & Lesson Auditing (`ccrystal.core.audit.*`):**
   - Pure functional routines to detect uncleaned transient leases and unaddressed lessons learned.

---

## 3. Non-Functional Requirements
- **Portability:** Identical test execution across Scala Native, JVM, and JS runtimes with zero JVM-only reflection dependencies.
- **Immutability:** 100% pure immutable data structures and functional transformations.
- **Code Coverage:** >80% test coverage verified with cross-platform MUnit suites.

---

## 4. Acceptance Criteria
- [ ] `spec/v1/context-crystal.json` passes JSON Schema standard meta-validation.
- [ ] `sbt compile` cleanly compiles `coreJVM`, `coreNative`, and `coreJS`.
- [ ] `sbt test` executes and passes all MUnit test suites across JVM, Native, and JS platforms.
- [ ] Round-trip JSON encoding and decoding verified against all schema test fixtures.
- [ ] DAG cycle detection and node parentage integrity tests pass cleanly.

---

## 5. Out of Scope for Track 1
- CLI executable binary packaging (`cli/` will be Track 2).
- Terminal User Interface (`tui/`) and Web UI (`web/`).
- Remote client-server HTTP endpoints.
