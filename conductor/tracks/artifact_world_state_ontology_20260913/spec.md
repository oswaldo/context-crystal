# Specification: Artifact & World-State Ontology (Virtual & Physical Substrates)

## Overview
Context Crystal currently maintains living state containers, task lists, and DAG lineage capturing *conversational deliberation* and *task progression*. However, modern autonomous agent workflows interact simultaneously with virtual artifacts (code files, schemas, models) and physical environments (devices, lab benches, civic locations, physical instruments). 

This track elevates artifacts and environmental preconditions into **first-class citizens** alongside Entities and DAG transitions. It provides a grounded, dual-substrate ontology (`Virtual` vs `Physical`) with a functional triad role model (`Target`, `Instrument`, `Precondition`), causal DAG linkages, cave/crystal artifact registries, and context beam projection.

---

## Architectural Principles & Design

1. **Dual Substrate Taxonomy (`ArtifactSubstrate`):**
   - `Virtual`: Code files, build targets, schema definitions, documentation, API endpoints, datasets.
   - `Physical`: Edge hardware, robotics, breadboards, testing rigs, physical devices, rooms, benches.

2. **Functional Triad Role Model (`ArtifactRole`):**
   - `Target`: The active deliverable or outcome being produced, altered, or debugged.
   - `Instrument`: An existing tool, fixture, or execution harness used to achieve the goal.
   - `Precondition`: An ambient invariant or required prerequisite state (e.g. clean git worktree, powered hardware rig, environmental temperature).

3. **Physical & Virtual Addressing:**
   - Universal `uri: Option[String]` supporting RFC standards (`file://`, `https://`, `urn:`, `geo:`).
   - Structured `PhysicalLocation` case class:
     - `name: String`
     - `civicAddress: Option[String]` (adhering strictly to synthetic example hygiene, e.g. *Musterstraße 1, Berlin*)
     - `geoUri: Option[String]` (RFC 5870 e.g. `geo:52.5200,13.4050`)
     - `benchCoordinates: Option[String]` (e.g. `Rack-04 / Shelf-B / Bench-12`)

4. **Causal DAG Provenance Linkages:**
   - Enrich `DAGNode` with directional artifact tracking:
     - `inputArtifactIds: List[String]` (artifacts consumed or read during transition)
     - `outputArtifactIds: List[String]` (artifacts created or modified by transition)
     - `preconditionArtifactIds: List[String]` (invariants verified before transition)

5. **Cave & Crystal Artifact Registries:**
   - **Cave Registry (`.ccrystals/artifacts.json`):** Shared long-lived assets (canonical repositories, shared test rigs, developer hardware baselines).
   - **Crystal Artifacts:** Ephemeral, crystal-scoped deliverables tracked directly in `crystal.json`.
   - **Dynamic MCP Resource:** `ccrystal://artifacts` (cave assets) and `ccrystal://{crystal_id}/artifacts`.

6. **Hydration Beam Shaping Integration:**
   - Update `ContextHydrator` to project active deliverables (`Target`), available tools (`Instrument`), and environmental prerequisites (`Precondition`) into the formatted prompt beam during context cast/hydration.

7. **Additive Schema Evolution & Backward Compatibility:**
   - Keep schema evolution additive within `spec/v1/context-crystal.json`.
   - Default all new artifact lists on existing crystals and nodes to `Nil` / `empty`, ensuring complete bidirectional compatibility with pre-Track-16 crystals.

---

## Functional Requirements

### 1. Core Models & Codecs (`ccrystal.core.model`, `ccrystal.core.codec`)
- Introduce ADTs with `derives CanEqual`:
  - `enum ArtifactSubstrate derives CanEqual: case Virtual, Physical`
  - `enum ArtifactRole derives CanEqual: case Target, Instrument, Precondition`
  - `case class PhysicalLocation(name: String, civicAddress: Option[String], geoUri: Option[String], benchCoordinates: Option[String]) derives CanEqual`
  - `case class Artifact(id: String, name: String, substrate: ArtifactSubstrate, role: ArtifactRole, uri: Option[String], location: Option[PhysicalLocation], metadata: Map[String, Json] = Map.empty) derives CanEqual`
- Add directional artifact fields to `DAGNode`:
  - `inputArtifactIds: List[String] = Nil`
  - `outputArtifactIds: List[String] = Nil`
  - `preconditionArtifactIds: List[String] = Nil`
- Add `artifacts: List[Artifact] = Nil` to `ContextCrystal`.
- Provide bidirectional Circe encoders and decoders adhering to `context-crystal.json`.

### 2. Storage & Cave Registry (`FsCrystalStore`, `ArtifactStore`)
- Implement storage operations for `.ccrystals/artifacts.json` (Cave Artifact Registry).
- Support registering, listing, and retrieving shared artifacts.
- Support crystal-level artifact additions and queries.

### 3. CLI Interface (`CliCommand`, `CommandParser`, `Runner`)
- `ccrystal artifact list [--cave] [--crystal <id>] [--json]`
- `ccrystal artifact register --id <id> --name <name> --substrate <virtual|physical> --role <target|instrument|precondition> [--uri <uri>] [--cave]`
- `ccrystal artifact inspect <id> [--json]`
- Updated `ccrystal node add` supporting `--input-artifact <id>`, `--output-artifact <id>`, and `--precondition-artifact <id>`.

### 4. Context Beam Projection (`ContextHydrator`)
- Format an `## Artifacts & World State` section in the context cast:
  - Active Targets
  - Available Instruments
  - Environmental Preconditions & Invariants (with physical location details if applicable)

### 5. Native MCP Server Tools & Resources
- Resource: `ccrystal://artifacts`
- Resource: `ccrystal://{id}/artifacts`
- MCP Tool: `crystal_artifact` for listing, registering, and inspecting artifacts.

---

## Out of Scope
- Direct physical hardware telemetry polling or IoT bus actuation.
- Raw binary blob storage (Context Crystal stores metadata, pointers, and URIs).
