# Implementation Plan: Track - Data Provenance & Capture Fidelity

## Phase 1: Core Models and Schema Update
- [ ] Task: Write Tests - Add tests in `ModelCodecSuite` to verify round-trip serialization of `DAGNode` with new `CaptureFidelity` enum (both `Inferred` and `Intercepted`).
- [ ] Task: Write Tests - Add tests in `ModelCodecSuite` to ensure legacy JSON payloads missing the `fidelity` field deserialize cleanly with `Inferred` as default.
- [ ] Task: Implement - Define `CaptureFidelity` enum (`Inferred`, `Intercepted`) and update `DAGNode` case class in `Models.scala`.
- [ ] Task: Implement - Update `Codecs.scala` to support serialization/deserialization for `CaptureFidelity`.
- [ ] Task: Implement - Update `spec/v1/context-crystal.json` schema definition to include the new `fidelity` field on `DAGNode` with default `"Inferred"`.
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)

## Phase 2: CLI Integration
- [ ] Task: Write Tests - Add tests in `ccrystal-cli` test suite to verify the new `--fidelity` flag is parsed correctly by decline.
- [ ] Task: Implement - Update decline parser in `ccrystal-cli` to accept `--fidelity <inferred|intercepted>`.
- [ ] Task: Implement - Plumb the parsed `fidelity` option into the node creation logic (defaulting to `CaptureFidelity.Inferred` if omitted).
- [ ] Task: Phase Verification & Checkpoint (Refer to workflow.md)
