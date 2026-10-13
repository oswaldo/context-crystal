# Implementation Plan: Modular Spec Extensions Architecture & Crystal Comms

- **Track ID:** `spec_extensions_and_crystal_comms_20261013`
- **Specification:** [spec.md](./spec.md)
- **Status:** In Progress

---

## Phase 1: Core Extension Models & 3-Tier Scoping Engine (`core`)

- [x] Task 1.1: Extension Domain Models & Circe Codecs [026f876]
  - Implement `ExtensionSubstrate` (Embedded, Declarative), `ExtensionScope` (Host, Cave, Crystal), and `ExtensionManifest`.
  - Circe codecs adhering to `spec/v1/context-crystal.json` non-breaking conventions.
  - Write MUnit tests in `core` validating round-trip serialization and substrate/scope parsing.
- [x] Task 1.2: 3-Tier Storage & Extension Discovery on `CrystalStore` / `FsCrystalStore` [c42c214]
  - Implement discovery scanner resolving `Host (~/.config/ccrystal/extensions)` -> `Cave (.ccrystals/extensions)` -> `Crystal (.ccrystals/<id>/extensions)` precedence cascade.
  - Implement `listExtensions`, `getExtensionManifest`, `saveExtensionManifest`, and `resolveExtensionStateDir`.
  - Write MUnit tests covering multi-scope resolution and precedence overrides.
- [x] Task 1.3: Crystal Comms Embedded Module (`CommsEngine`) [71c3d18]
  - Implement `CommsMessage` case class and Circe codecs.
  - Implement `CommsEngine` managing atomic inbox delivery, outbox staging, and append-only `messages.jsonl` audit log inside `.ccrystals/<id>/extensions/comms/`.
  - Write MUnit tests verifying lock-free message delivery, listing, and recipient isolation.
- [x] Task 1.4: Phase 1 Checkpoint & Cross-Build Test
  - Run `sbt "coreJVM/test; coreNative/test; coreJS/test"`.

---

## Phase 2: CEP-0002 Media Provenance Declarative Package & Cave-Wide Dogfooding

- [x] Task 2.1: Declarative Extension Manifest & Schema Package for Media [f5d1412]
  - Create packaged extension bundle under `spec/extensions/media/` and sample cave installation `.ccrystals/extensions/media/` containing `extension.json` and schema definitions per CEP-0002.
- [x] Task 2.2: Declarative Extension Validation & Dogfood Test [aed86ec]
  - Write unit/integration tests confirming cave-wide declarative drop-in discovery, manifest inheritance by crystals, and media metadata validation on artifacts.
- [x] Task 2.3: Phase 2 Checkpoint & Verification
  - Verify declarative loading passes seamlessly on Native and JVM targets.

---

## Phase 3: CLI Subcommands & User Ergonomics (`cli`)

- [ ] Task 3.1: Decline CLI Subcommands for Extensions (`ccrystal ext`)
  - Implement `ccrystal ext list` (with scope filtering/display), `ccrystal ext enable`, `ccrystal ext disable`.
  - Write CLI parser tests in `cliJVM/test`.
- [ ] Task 3.2: Decline CLI Subcommands for Comms (`ccrystal ext comms`)
  - Implement `ccrystal ext comms send` and `ccrystal ext comms list`.
  - Write CLI parser and execution tests.
- [ ] Task 3.3: Phase 3 Checkpoint & Native Compilation
  - Verify `cliJVM/test` and link `cliNative/nativeLink`.

---

## Phase 4: Native MCP Server Tools & Schema Synchronization

- [ ] Task 4.1: Native MCP Tools for Extensions
  - Implement `crystal_extension_list` (with multi-scope resolution) and `crystal_extension_manage`.
  - Implement MCP comms operations (`crystal_extension_comms_send`, `crystal_extension_comms_read`).
- [ ] Task 4.2: MCP Schemas & Instructions Documentation
  - Update `docs/mcp/schemas/` with tool schemas and update `docs/mcp/instructions.md`.
  - Write MCP JSON-RPC unit tests.
- [ ] Task 4.3: Phase 4 Checkpoint & MCP Verification
  - Verify MCP handler test suite across targets.

---

## Phase 5: Verification, Linters, and Conductor Review

- [ ] Task 5.1: Run Full Verification Suite
  - Run `sbt "scalafmtCheckAll; scalafixAll --check; test"`.
  - Run `npx markdownlint-cli "README.md" "AGENTS.md" "docs/*.md" "skills/**/SKILL.md"`.
- [ ] Task 5.2: Update Active Crystal Tasks & Conductor Registry
  - Update `tasks.md` in `.ccrystals/release-v1-3-0-extensions-media-and-mcp-optimization`.
  - Update `conductor/tracks.md` and `conductor/next-steps.md`.
  - Prepare branch for review.
