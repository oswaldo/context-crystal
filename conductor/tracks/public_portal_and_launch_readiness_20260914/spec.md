# Specification: Public Portal & Launch Readiness

**Track ID:** `public_portal_and_launch_readiness_20260914`  
**Type:** Feature / Launch Milestone  
**Architecture:** Pure Scala 3 & Scala.js + Laminar 17 on an isolated Git Orphan Branch (`gh-pages`)

---

## 1. Overview & Strategic Intent

Build the official public web portal and developer launchpad for **Context Crystal** to establish an authoritative, visually compelling, and technically grounded presence on GitHub Pages / Codeberg Pages.

### Foundational Invariants:
1. **Absolute Ground-Truth Fidelity (Zero Hallucinations):** Only document and showcase capabilities that are currently implemented, tested, and verified in the codebase.
   - *Supported & Factual:* Single-line curl installer (`install.sh`), pre-compiled Linux x86_64 and macOS (Apple Silicon / Intel) release binaries, 11 native MCP tools, deterministic DAG transitions, virtual & physical artifact ontology, zero-token CLI execution.
   - *Strictly Excluded:* Unbuilt package managers (no Homebrew formula claims until implemented), unbuilt features, and no placeholder "Coming Soon" badges on the public site.
2. **Strict Privacy Boundary for `tmp/`:** The `tmp/` directory is an uncommitted, private operator sandbox. None of its contents, file names, or strategic deliberation notes shall be cited, quoted, or referenced anywhere in public documentation or web pages.
3. **Decoupled Orphan Branch (`gh-pages`):** The portal lives on an independent Git orphan branch with no shared commit history with `main`, preventing accidental merges or asset contamination.

---

## 2. Technical Stack & Workspace Topology

- **Runtime & Compilation:** Scala CLI with Scala 3.3 LTS and Scala.js (`--platform scala-js`, `--js-module-kind es`).
- **UI Framework:** [Laminar 17](https://laminar.dev/) (pure functional, type-safe reactive UI).
- **Styling:** Custom cybernetic modernist aesthetic (deep slate background `#0b0f17`, crystal neon accents `#00f0ff` / `#39ff14` / `#f59e0b`, monospace code blocks, high readability, responsive).
- **Local Preview Server:** Lightweight Scala preview server using [Cask](https://com-lihaoyi.github.io/cask/) (adapted from sibling project `first`) or static HTTP server.
- **Git Worktree Path:** `/home/oswaldo/git/ccrystal-worktrees/context-crystal-gh-pages` tracking orphan branch `gh-pages`.
- **Target Output:** Static bundle (`index.html`, `main.js`, `styles.css`) deployed directly from the root of `gh-pages` to GitHub Pages.

---

## 3. Functional Requirements & Portal Sections

The portal is designed as a reactive Single-Page Application (SPA) with tabbed navigation:

### Tab 1: Manifesto & Architecture ("Why Context Isn't a Vector Database")
- **The Core Thesis:** Explains why probabilistic vector embeddings and LLM auto-summarization fail for long-running software engineering (hallucinations, loss of ground truth, token inflation).
- **The Context Crystal Solution:** Deterministic, sovereign DAG lifecycle; sub-5ms native execution with zero LLM token overhead; strict JSON-LD open standard (`spec/v1/context-crystal.json`).
- **Visual Architecture Diagram:** Visualizing the relationship between Cave, Crystals, DAG Nodes, Entities, Transient Leases, and Virtual/Physical Artifacts.

### Tab 2: Live Interactive DAG & Context Beam Explorer
- **Interactive In-Browser Demonstration:** An interactive Laminar component illustrating how Context Crystal operates.
- Users can toggle between sample crystal states (e.g., initial goal, active tasks, transient worktree leases, artifact preconditions) and see the hydrated prompt beam generated live in real time.

### Tab 3: Installation & Quickstart
- **Single-Line Installer:**
  ```bash
  curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh
  ```
- **Manual Binary Downloads:** Direct links to the GitHub Release assets for Linux x86_64, macOS aarch64, and macOS x86_64.
- **Local Source Build Instructions:** Clean prerequisites and sbt build flags (`sbt "cliNative/nativeLink"`).
- **First 5 Minutes with CLI:** Step-by-step verified terminal commands.

### Tab 4: Native Model Context Protocol (MCP) Reference
- **Complete Reference for 11 Native MCP Tools:**
  1. `crystal_init` (instantiate crystal with atomic acceptance criteria)
  2. `crystal_list` (query cave crystals with status filtering)
  3. `crystal_hydrate` (selective context beam shaping with `tail`, `from`, `to`, `summary_only`)
  4. `crystal_triage` (automated cave hygiene classification)
  5. `crystal_artifact` (manage virtual & physical artifacts across cave or crystal)
  6. `crystal_checkpoint` (append DAG checkpoint node)
  7. `crystal_task_transition` (transition acceptance criteria state)
  8. `crystal_transient_lease` (register temporary resource lease)
  9. `crystal_slice_fork` (cleave sub-DAG into child crystal)
  10. `crystal_delete` (cascade delete with impact preview)
  11. `crystal_batch` (atomic multi-command batch execution)
- **MCP Client Configuration Snippets:** Ready-to-use JSON configs for Claude Desktop, Cursor, and Zed.

### Tab 5: Agent Ingestion (`llms.txt` & `llms-full.txt`)
- Host canonical `/llms.txt` and `/llms-full.txt` at the site root.
- Provides a clean, condensed markdown summary of CLI flags, MCP schemas, and operational invariants so autonomous AI entities can ingest and use Context Crystal effortlessly.

---

## 4. Non-Functional Requirements & Hygiene

- **Performance:** Sub-100ms initial load; static asset bundle under 1MB; zero external tracking or bloated telemetry scripts.
- **Accessibility & Contrast:** WCAG AA compliant text contrast across dark mode palette.
- **Responsive Design:** Fluid layout across mobile, tablet, and desktop viewports.
- **Deferred Item Tracking:** Any long-term search features (e.g. Pagefind WASM) are formally noted in the internal roadmap (`conductor/next-steps.md`), with zero "Coming Soon" placeholders on the live site.

---

## 5. Out of Scope

- Integrating a client-side search engine in this MLP release (deferred to post-MLP roadmap).
- Claiming Homebrew or other unbuilt package managers (deferred to Track 13).
- Adding or publishing any materials from `tmp/`.
