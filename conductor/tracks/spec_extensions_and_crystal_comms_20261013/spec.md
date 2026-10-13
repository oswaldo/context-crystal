# Specification: Modular Spec Extensions Architecture & Crystal Comms

## 1. Overview & Motivation

Context Crystal core specification (`spec/v1/context-crystal.json`) is designed to remain sovereign, lean, microsecond-fast, and domain-agnostic. However, real-world multi-agent coordination, multi-modal asset provenance (CEP-0002), and specialized domain tools require namespaced, modular storage and schemas without polluting the core DAG or blowing up binary sizes.

This track delivers the **Modular Spec Extensions Architecture** utilizing a **Dual-Substrate Model** across a **3-Tier Scoping Hierarchy**:

1. **Dual-Substrate Execution Model:**
   - **Embedded Core Extensions (`ExtensionModule`):** Statically compiled modules linked directly into the Scala Native binary. They provide microsecond-fast, compiled domain models and native performance. The premier exemplar is **Crystal Comms** (lock-free filesystem inboxes, outboxes, and append-only message audit trails for multi-agent coordination).
   - **Declarative Drop-In Extensions (`extension.json`):** Dynamic extensions discoverable on the filesystem declaring their own manifests, schema URIs/validators, and asset layouts without requiring binary recompilation. The premier exemplar is **CEP-0002 Media & Multi-Modal Asset Provenance**, dogfooding the declarative discovery path from Day 1.

2. **3-Tier Scoping & Inheritance Cascade:**
   - **Host-Wide Scope (`~/.config/ccrystal/extensions/<ext-id>/`):** User-installed extensions available to all projects and caves on this workstation.
   - **Cave-Wide Scope (`.ccrystals/extensions/<ext-id>/`):** Project-committed or repository-level extensions shared by all collaborators on this repository.
   - **Crystal-Specific Scope (`.ccrystals/<crystal-id>/extensions/<ext-id>/`):** Crystal-specific configuration overrides and isolated runtime state (e.g., active message inboxes or inspection stills).
   - **Precedence:** `Crystal Override > Cave Default > Host User > Embedded Binary`.

Context Crystal is bonded to crystal `release-v1-3-0-extensions-media-and-mcp-optimization` in `.ccrystals/`.

---

## 2. Architecture & Domain Model

### 2.1 Extension Directory & Storage Hierarchy

```text
Host Level:
~/.config/ccrystal/extensions/
└── <ext-id>/
    └── extension.json                 # User-wide extension definitions

Cave Level (Repository Root):
.ccrystals/
├── extensions/
│   └── media/                         # Cave-wide declarative exemplar (CEP-0002)
│       ├── extension.json             # Manifest declaring schema & asset rules
│       └── schema.json                # Declarative JSON Schema
├── <crystal-id>/
│   ├── crystal.json
│   ├── tasks.md
│   ├── lessons-learned.md
│   ├── transient.json
│   └── extensions/
│       ├── comms/                     # Crystal-isolated runtime state for Comms
│       │   ├── extension.json         # Optional crystal-level manifest override
│       │   ├── inbox/                 # Inbound messages per recipient (<msg-id>.json)
│       │   ├── outbox/                # Outbound messages (<msg-id>.json)
│       │   └── messages.jsonl         # Append-only chronological audit log
│       └── media/                     # Crystal-isolated runtime state for Media
│           └── extension.json         # (Optional) crystal-level override
```

### 2.2 Extension Scope & Manifest Schema

```scala
enum ExtensionSubstrate:
  case Embedded
  case Declarative

enum ExtensionScope:
  case Host
  case Cave
  case Crystal

case class ExtensionManifest(
    id: String,
    name: String,
    version: String,
    substrate: ExtensionSubstrate,
    scope: ExtensionScope,
    enabled: Boolean,
    description: Option[String] = None,
    schemaUri: Option[String] = None,
    metadata: Map[String, Json] = Map.empty
)

trait ExtensionModule:
  def id: String
  def name: String
  def defaultManifest: ExtensionManifest
```

### 2.3 Reference Embedded Module: Crystal Comms

#### Comms Message Schema (`CommsMessage`)

```scala
case class CommsMessage(
    id: String,
    timestamp: Instant,
    senderId: String,
    recipientId: String,
    channel: String,
    subject: String,
    body: String,
    replyToId: Option[String] = None,
    metadata: Map[String, Json] = Map.empty
)
```

- Lock-free atomic writes: Messages written as atomic temp-file swaps in `inbox/<recipientId>/<id>.json` and appended to `messages.jsonl`.
- Support for human steersman messages (`senderId: "usr_..."` or flagged in metadata).

### 2.4 Reference Declarative Module: CEP-0002 Media

- Declarative manifest for `media` defining schema validation for `metadata.media` on artifacts.
- Dogfoods the Cave-wide declarative discovery by placing the `media` extension package under `.ccrystals/extensions/media/` and verifying that crystals inherit it, validate media provenance metadata on artifacts, and project media summaries through CLI and MCP.

---

## 3. Storage, CLI & MCP Requirements

### 3.1 Store Extensions on `CrystalStore` / `FsCrystalStore`

- `listExtensions(crystalId: Option[CrystalId]): List[ExtensionManifest]` (resolves Host + Cave + Crystal cascading scopes)
- `getExtensionManifest(extId: String, crystalId: Option[CrystalId]): Option[ExtensionManifest]`
- `saveExtensionManifest(manifest: ExtensionManifest, crystalId: Option[CrystalId]): Unit`
- `resolveExtensionStateDir(crystalId: CrystalId, extId: String): os.Path`

### 3.2 CLI Commands (`ccrystal ext`)

- `ccrystal ext list [--crystal <id>] [--scope <host|cave|crystal>]`: Tabular listing of active, embedded, and dropped extensions across scopes.
- `ccrystal ext enable <ext-id> [--crystal <id>] [--cave]`
- `ccrystal ext disable <ext-id> [--crystal <id>] [--cave]`
- `ccrystal ext comms send <crystal-id> --from <sender> --to <recipient> --subject <subj> --body <text>`
- `ccrystal ext comms list <crystal-id> [--inbox <recipient>] [--outbox] [--limit <n>]`

### 3.3 Native MCP Server Integration

- `crystal_extension_list`: Lists all extensions across scopes with resolution source.
- `crystal_extension_manage`: Enables/disables an extension at cave or crystal scope.
- `crystal_extension_comms_send` & `crystal_extension_comms_read`: Direct messaging tools for agents and human steersman.

---

## 4. Invariants & Non-Functional Requirements

- **Microsecond Fast:** Resolution checks the 3 directories without recursive filesystem walking.
- **Data Isolation:** Declarative and embedded definitions may be shared host/cave-wide, but all mutable operational state is stored in `.ccrystals/<id>/extensions/`.
- **Zero Core Bloat:** If a crystal does not use extensions, no extra directories or JSON bloat are created.
- **Strict Backward Compatibility:** Older crystals lacking `extensions/` remain 100% valid.
- **Cross-Platform MUnit Test Suite:** Verified across JVM, Native, and JS platforms.
