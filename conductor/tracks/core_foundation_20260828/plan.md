# Implementation Plan: MVP Core Foundation

**Track ID:** `core_foundation_20260828`  
**Spec:** `spec.md`  

---

## Phase 1: Specification & Schema Fixtures
Establish the vendor-neutral JSON Schema v1 and standard validation fixtures.

- [x] Task: Create `spec/v1/context-crystal.json` JSON Schema (Draft 2020-12) defining Envelope, Goal, Entity/Mask, DAG Nodes, Transient Leases, and Lessons Learned [734e999]
- [~] Task: Create valid and invalid sample crystal fixtures in `spec/fixtures/`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

---

## Phase 2: sbt Multi-Platform Build Configuration
Configure the Scala 3 build system with `sbt-crossproject` targeting JVM, Native, and JS.

- [ ] Task: Configure `project/plugins.sbt` with `sbt-scalajs`, `sbt-scala-native`, and `sbt-crossproject`
- [ ] Task: Create `build.sbt` defining `core` cross-project with Circe and MUnit dependencies
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

---

## Phase 3: Core Domain Models & Codecs (TDD)
Implement domain ADTs and Circe JSON encoders/decoders with full cross-platform parity.

- [ ] Task: (TDD Red) Write MUnit tests for Domain Model serialization and deserialization against `spec/fixtures/`
- [ ] Task: (TDD Green) Implement `ccrystal.core.model.*` (Envelope, Goal, Entity, Mask, StateNode, TransientLease, LessonLearned)
- [ ] Task: (TDD Green) Implement `ccrystal.core.codec.*` Circe encoders/decoders
- [ ] Task: Verify cross-platform round-trip serialization tests on `coreJVM`, `coreNative`, and `coreJS`
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

---

## Phase 4: DAG State Operations & Deterministic Auditing (TDD)
Implement immutable lattice DAG operations and pure functional auditing routines.

- [ ] Task: (TDD Red) Write MUnit tests for DAG node addition, branch creation, ancestor traversal, and cycle detection
- [ ] Task: (TDD Green) Implement `ccrystal.core.dag.CrystalDAG` immutable graph operations
- [ ] Task: (TDD Red) Write MUnit tests for transient lease audit (uncleaned items) and lessons learned audit (unaddressed items)
- [ ] Task: (TDD Green) Implement `ccrystal.core.audit.CrystalAuditor` deterministic scanning routines
- [ ] Task: Verify all unit tests pass across JVM, Native, and JS with >80% code coverage
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
