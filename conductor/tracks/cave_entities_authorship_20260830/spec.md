# Track Specification: Cave Entities and Authorship Tracking (`cave_entities_authorship_20260830`)

## Overview
Context Crystal needs a first-class identity, scoping, and provenance tracking model to support multi-agent and human-AI collaborative workflows across single-user and large enterprise environments. Without explicit identity scoping and authorship attribution, concurrent multi-agent executions risk collisions and lack clear provenance.

This track introduces the **Cave** contextual scope metaphor, a decoupled **`.ccrystals/entities.json`** registry, deterministic agent collision resolution with incremental numeric suffixes, configurable authorship modes (`none`, `tracked`, `signed`), and token-efficient entity referencing with open metadata extension points across core models.

---

## Functional Requirements

### 1. Core Domain Models & Codecs
- **AuthorshipMode**: Add `AuthorshipMode` enum (`None`, `Tracked`, `Signed`) with serialization codecs.
- **Entity Enhancements**: Update `Entity` model to support `kind` (`Human`, `Agent`, `System`, `Tool`), `name`, optional `publicKey`, and extensible `metadata: Map[String, String]`.
- **Entity Registry Model**: Define `EntityRegistry` containing `entities: Map[String, Entity]` with JSON codecs (`Codecs.scala`) mapping to `.ccrystals/entities.json`.
- **DAG & Block Compact Attribution**:
  - `DAGNode` contains `actorId: String` (compact reference to registered entity ID).
  - Add `metadata: Map[String, String]` to `DAGNode`, `Goal`, `Artifact`, `TransientLease`, `LessonLearned`, and `ContextCrystal` to provide open extension points.
  - `ContextCrystal` includes `defaultAuthorId: Option[String]` and optional crystal-level `caveId: Option[String]`.

### 2. Filesystem Storage Engine (`FsCrystalStore`)
- **Entity Registry Management**:
  - Automatically initialize `.ccrystals/entities.json` on `init` or when missing.
  - Provide `getEntities()`, `registerEntity(entity: Entity): Either[StoreError, Entity]`, and `resolveOrCreateEntity(name: String, kind: EntityKind): Either[StoreError, Entity]`.
- **Collision Resolution**:
  - When registering an agent entity with a base name (e.g. `antigravity`), if an active/existing entity with the same base name exists under differing sessions, deterministically allocate the next incremental suffix (e.g. `antigravity-1`, `antigravity-2`).

### 3. CLI Configuration & Commands
- **CLI Authorship Options**:
  - Global CLI / command flag `--author <name>` and optional `--author-kind <human|agent|system>`.
  - Configurable default authorship mode (`tracked` by default, `none` to disable).
- **Entity CLI Commands**:
  - `ccrystal entity list`: List all registered entities in the current Cave (`.ccrystals/entities.json`).
  - `ccrystal entity register --name <name> --kind <kind>`: Explicitly register an entity.

---

## Non-Functional Requirements
- **Token Efficiency**: Entity definitions reside in `.ccrystals/entities.json`; crystal files store only compact entity IDs.
- **Cross-Platform Compatibility**: Full pure functional Scala 3 code building cleanly across Scala Native, JVM, and JS.
- **Zero Schema Breakage for Signatures**: Reserve structure so cryptographic signatures can be introduced in later web modules without breaking existing crystals.

---

## Acceptance Criteria
1. `sbt test` passes across JVM, Native, and JS targets.
2. `.ccrystals/entities.json` is created and managed properly by `FsCrystalStore`.
3. Concurrent agent entity name collisions resolve to unique incremented names (`agt_name-1`, `agt_name-2`).
4. `cast`, `hydrate`, `task add`, and `node add` respect the active entity ID and authorship tracking.
5. All core models deserialize existing crystals with backward-compatible defaults.
