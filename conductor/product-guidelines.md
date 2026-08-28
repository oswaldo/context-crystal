# Product Guidelines: Context Crystal

## 1. Tone & Voice

Context Crystal adopts a dual-tier communication strategy tailored to audience context:

- **Public-Facing & Developer Materials (`README`, CLI Help, Quickstarts, Guides):**
  - **Tone:** Direct, developer-first, concise, pragmatic, and approachable.
  - **Goal:** Drive rapid understanding, friction-free onboarding, and clear advocacy for decoupling context from sessions.
- **Specification & Technical Documents (`spec/`, RFCs, Architecture Docs):**
  - **Tone:** Formal, precise, rigorous, RFC-grade technical prose (using clear RFC 2119 requirement levels: MUST, SHOULD, MAY).
  - **Goal:** Ensure unambiguous schema definitions, strict interoperability across implementations, and verifiable compliance.

---

## 2. User Experience Principles

### A. CLI & TUI (`cli/`, `tui/`)
- **Zero Friction & Instant Startup:** Fast launch times (leveraging Scala Native where appropriate), minimal memory footprint.
- **Composable & Unix-Philosophy Aligned:** Pure stdin/stdout piping support, predictable exit codes, structured JSON output flags, and ANSI-aware formatting.
- **Keyboard-Centric Navigation:** Intuitive vim-like / terminal keybindings for tree/lattice traversal, diffing, and inspecting state transitions.
- **Non-Destructive Actions:** Immutable operations by default; transformations produce new crystal facets or branches without silently overwriting history.

### B. Agent & Assistant Integrations (`skills/`)
- **Zero Learning Curve:** Seamless integration with coding agents (Antigravity, Claude Code, Cursor) via declarative agent skills and slash commands.
- **Token-Efficient Payloads:** Compact schema summaries and selective hydration so agents only load necessary context subtrees without blowing up token budgets.
- **Transparent Provenance:** Automatically capture entity masks, harness metadata, and tool actions without burdening the human operator with manual tracking.

### C. Enterprise Web UI (`web/`)
- **Data Sovereignty & Local First:** Self-hostable, air-gapped capable, with strict ownership over context data.
- **Interactive Lattice Visualizations:** Visual exploration of context state DAGs, branching dendrites, and milestone completions.
- **Auditability & Provenance Inspection:** First-class visual diffs between human edits and AI-generated state transitions, with clear entity/mask attribution.
- **Role-Based Access & Sharing:** Granular sharing of context crystals across teams with clear read/append access boundaries.

---

## 3. Engineering & Design Standards

- **Immutability First:** Data structures must be immutable by default; state transitions are explicit nodes in a DAG.
- **Cross-Platform Consistency:** Core behavior and schema validation must produce identical outcomes across Scala Native, JVM, and JS runtimes.
- **Fail Fast & Descriptive Errors:** Schema validation failures must pinpoint exact JSON paths and reason codes.
