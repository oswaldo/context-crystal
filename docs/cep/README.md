# Crystal Enhancement Proposals (CEPs)

Welcome to the **Crystal Enhancement Proposal (CEP)** process.

A CEP is a formal design document that provides information to the Context Crystal community, describes a new feature, extension standard, or operational process for Context Crystal (`ccrystal`), and outlines its architectural rationale, interface schemas, and migration path.

Analogous to **RFCs** (IETF / Rust), **JSRs** (Java Specification Requests), and **PEPs** (Python Enhancement Proposals), the CEP process ensures that Context Crystal evolves with rigorous community governance while strictly safeguarding its core architectural invariant: **a lightweight, zero-reflection, microsecond-latency context engine**.

---

## 1. CEP Types

1. **Standards Track (Core):**
   Proposes modifications to the core Context Crystal DAG, persistence engine, serialization schemas (`crystal.json`, `entities.json`), CLI subcommands, or MCP tools.
2. **Extension Track (Domain Standards):**
   Defines an official domain-specific schema, metadata namespace, or runtime adapter (e.g., Media Provenance, Robotics Telemetry, Hardware In-the-Loop, IDE/LSP integrations) without modifying the core binary.
3. **Process Track (Governance & Workflows):**
   Describes operational guidelines, collaboration models, or community governance (e.g., CEP-0001 itself).

---

## 2. CEP Index

| CEP # | Title | Type | Status | Author | Created |
| :--- | :--- | :--- | :--- | :--- | :--- |
| [**CEP-0001**](cep-0001-cep-process.md) | The Crystal Enhancement Proposal Process & Lifecycle Specification | Process | **Draft** | Oswaldo Dantas | 2026-10-05 |
| [**CEP-0002**](cep-0002-media-multimodal-provenance.md) | Media & Multi-Modal Asset Provenance Extension Standard | Extension | **Draft** | Oswaldo Dantas | 2026-10-05 |

---

## 3. How to Submit a CEP

1. Fork or create a branch in `context-crystal` (or follow the worktree policy in `AGENTS.md`).
2. Copy [`docs/cep/template.md`](template.md) to `docs/cep/cep-XXXX-<short-title>.md`.
3. Fill out all sections, adhering to the **Zero-Core-Overhead Invariant**.
4. Open a Pull Request or create a discussion crystal in `.ccrystals/`.
