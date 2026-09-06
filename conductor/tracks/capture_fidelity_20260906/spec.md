# Specification: Track - Data Provenance & Capture Fidelity

## 1. Overview
Introduce explicit data provenance tracking to the Context Crystal schema. This feature allows the model to differentiate between data that was generated via agent reasoning/summarization ("Inferred") and data that was captured deterministically with zero data loss ("Intercepted"). This lays the foundation for enterprise-level trust boundaries and auditing.

## 2. Functional Requirements
- **Core Model Update:** 
  - Define a new enum `CaptureFidelity` with values `Inferred` and `Intercepted`.
  - Add a new field `fidelity: CaptureFidelity` to the `DAGNode` case class.
- **JSON Schema Update:**
  - Update `spec/v1/context-crystal.json` to include the `fidelity` property on `DAGNode`, with a default value of `Inferred`.
- **Codec & Backward Compatibility:**
  - Update `Codecs.scala` to serialize and deserialize the new `fidelity` field.
  - Ensure that parsing older `context-crystal.json` files defaults the missing `fidelity` field to `Inferred`.
- **CLI Enhancements:**
  - Update the native CLI to accept an optional `--fidelity <inferred|intercepted>` flag when creating or appending nodes.
  - The CLI flag should default to `inferred` if omitted.

## 3. Non-Functional Requirements
- **Deterministic:** The schema validation must continue to enforce strict 1:1 round-tripping for the JSON serialization.

## 4. Acceptance Criteria
- [ ] `CaptureFidelity` enum is implemented and integrated into `DAGNode`.
- [ ] `context-crystal.json` schema validation succeeds with the new field.
- [ ] Codecs tests verify round-trip serialization of both `Inferred` and `Intercepted` fidelity levels.
- [ ] Codecs successfully parse legacy crystal JSONs, defaulting `fidelity` to `Inferred`.
- [ ] The `ccrystal` CLI binary compiles and successfully parses the `--fidelity` flag, accurately reflecting it in the resulting crystal node.

## 5. Out of Scope
- Interception hooks (e.g., shell proxy or IDE wrapper) are out of scope. This track only covers the data model, serialization, and CLI interface.
