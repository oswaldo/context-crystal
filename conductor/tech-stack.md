# Technology Stack: Context Crystal

## 1. Specification (`spec/`)
- **Schema Format:** JSON Schema (Draft 2020-12) & JSON-LD context vocabulary.
- **Validation & Test Suite:** JSON Schema Test Suite fixtures executable across any standard-compliant validator.

---

## 2. Core Library (`core/`)
- **Language:** Scala 3 (latest stable).
- **Build System:** sbt with `sbt-crossproject` for multi-platform cross-compilation.
- **Cross-Platform Targets:**
  - **Scala Native:** For instant-launch binaries, CLI utilities, deterministic audit scripts, and embedded usage.
  - **Scala JVM:** For server-side integrations, big data pipelines, and enterprise JVM services.
  - **Scala.js:** For browser-based applications, client-side validation, and WASM/JS interop.
- **Serialization & Codecs:** `circe` / `circe-generic` / `circe-parser` (cross-compiled on JVM, JS, and Native).
- **Graph & Data Structures:** Immutable functional collections, Cats / Cats-Effect (optional / modularized).
- **Pluggable Persistence SPI:** Abstract `CrystalStore` trait supporting:
  - `FsCrystalStore`: Filesystem repository reading/writing human-readable `.ccrystals/<name>/` (with `crystal.json`, `artifacts/`, `tasks.md`, `lessons-learned.md`, `transient.json`, and nested sub-contexts).
  - `SqlCrystalStore`: Local relational/embedded store (SQLite).
  - `RemoteCrystalStore`: HTTP/API client querying remote Context Crystal Web servers.
- **Deterministic Auditing & Lifecycle Engine:** Fast, non-LLM routines for scanning lessons-learned ledgers, active transient resource leases, action trails, and archiving policies.
- **Testing:** MUnit (cross-platform testing across JVM, Native, and JS).

---

## 3. Command-Line Interface (`cli/`)
- **CLI Parsing:** `decline` (composable, applicative command-line parser) or `mainargs`.
- **Packaging:** Native binary output via Scala Native (`sbt coreNative/nativeLink`).
- **Core Commands (Zero-LLM Fast Paths):**
  - `ccrystal init <name>` / `ccrystal validate` / `ccrystal export`
  - `ccrystal audit lessons` (identify unaddressed/open lessons across all local crystals)
  - `ccrystal audit transient` (detect uncleaned worktrees, temporary configs, or placeholder assets)
  - `ccrystal action lesson <id> --action "..."` (record actionable resolution & audit trail)
  - `ccrystal archive --older-than <duration>`
- **Formatting:** ANSI color rendering with streaming JSON / NDJSON support for unix pipeability.

---

## 4. Terminal User Interface (`tui/`)
- **Rendering & Events:** Native ANSI / terminal control or Bubbletea/Ratatui via Scala Native FFI bindings.
- **State Management:** Functional event loop (Elm-architecture / Model-Update-View).

---

## 5. Agent Skills & Extensions (`skills/`)
- **Format:** Standard Agent Skills open format (`SKILL.md` with YAML frontmatter) and rules.
- **Framework & Workflow Agnostic:** Seamlessly bridges with zero configuration across ad-hoc projects, Conductor tracks, OpenSpec, SpecKit, or ADR-driven repos.
- **Supported Environments:**
  - **Google Antigravity:** Native skill & workflow definitions.
  - **Claude Code:** Slash-command adapters and system prompts.
  - **Cursor / Windsurf:** Rule and prompt injection templates.
- **Protocol Interop:** Model Context Protocol (MCP) server endpoints wrapping the `cli` / `core` for dynamic tool discovery.

---

## 6. Enterprise Web UI (`web/`)
- **Frontend:** Scala.js + **Laminar** (reactive UI) or **Tyrian** (Elm-architecture UI) sharing `core` codecs.
- **Backend / API:** **Tapir** (type-safe, OpenAPI-generating endpoints) + **Http4s** (functional asynchronous HTTP).
- **Storage / Persistence:** Pluggable repository layer (embedded SQLite / RocksDB or PostgreSQL) with federation and multi-tenant isolation roadmap.
