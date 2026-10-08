# Specification: Interactive Showcase Demo Tab: Context Preservation vs. Agent Amnesia

## 1. Overview & Business Rationale

When prospective users (human developers and autonomous AI orchestrators) visit the Context Crystal documentation portal, abstract architectural definitions ("deterministic DAG", "sovereign context") are powerful, but a concrete visual demonstration of the failure mode it prevents—**Agent Amnesia**—creates an immediate emotional and technical realization.

This track introduces an interactive, side-by-side terminal simulation tab (**Demo** / **Interactive Demo**) comparing:

1. **With Context Crystal (Deterministic DAG):** Smooth, predictable execution. The agent hydrates the context beam (`ccrystal cast` / `hydrate`), acknowledges previous constraints and invariants, updates task progress atomically, and completes the multi-step task cleanly without hesitation or amnesia.
2. **Without Context Crystal (Raw Chat History & Compaction):** Early progress followed by context window truncation/compaction. The agent hallucinates or repeats already-resolved questions, edits a prohibited file, triggers user frustration ("I told you 2 messages ago not to touch X!"), rolls back progress, and takes twice as long with degraded output.

## 2. User Experience & Interactive Capabilities

- **Split-Screen Side-by-Side Simulation:**
  - Modern IDE / terminal styling matching the Context Crystal dark modernist aesthetic.
  - Left pane: **With Context Crystal (Living Context Beam)**.
  - Right pane: **Without Context Crystal (Raw Chat Compaction)**.
  - Real-time progress bars atop both panes showing status, elapsed time, and task completion percentage.
  - Left progress bar transitions from glowing blue to vibrant green (`--accent-cyan` -> `--accent-green`).
  - Right progress bar advances, hits compaction point (~10s), stalls, flashes warning red (`--accent-amber` / `#ef4444`), slips backwards, and struggles before completion.
- **Interactive Playback Controls:**
  - **Play / Pause:** Starts or pauses playback across both synchronized panes.
  - **Reset / Replay:** Resets the simulation to the beginning (t = 0).
  - **Speed Toggle (1x / 2x):** Allows viewers to watch the full experience in ~15s / 30s or accelerated ~8s / 15s.
  - **Step / Jump by Phase:** (Optional click to phase).
- **Engaging Narrative Scenario:**
  - Realistic multi-step engineering task: *"Refactor Authentication Middleware to OAuth2 Bearer Tokens without touching legacy SessionStore"*.
  - Step 1: Analyze codebase & identify files.
  - Step 2: Implement JWT bearer verification.
  - Step 3: Enforce strict architectural invariant: *Never modify legacy SessionStore*.
  - Step 4 (The Compaction Turning Point):
    - With CC: Agent reads living context beam from crystal, notes invariant, keeps SessionStore untouched, finishes tests.
    - Without CC: Context window compactor runs. Raw transcript trimmed. Agent "forgets", refactors `SessionStore.scala`, triggers compile error or user wrath: *"Wait! I explicitly said NOT to touch SessionStore!"*, agent apologizes profusely, reverts changes, and wastes tokens.

## 3. Architecture & Implementation in Scala.js / Laminar

- **Component:** `TabDemo.scala` in `ccrystal.site`.
- **Navigation Integration:**
  - Add `case Demo extends Tab("demo", "Interactive Demo", "▶")` to `Model.scala`.
  - Add rendering case in `Main.scala`.
- **State Engine:**
  - Pure reactive state using Laminar `Var` and `Signal`.
  - Timer-based playback tick (`setInterval` / `setTimeout` wrapped safely in Scala.js).
  - Synchronized timeline events list with fractional timestamps (0.0 to 1.0 or seconds 0s to 30s).
- **Styling:**
  - Terminal windows with window controls (red/yellow/green dots), tab titles, monospace output, colored badges (info, warning, error, success, prompt).
  - Dynamic progress bars with smooth CSS transitions or percentage signals.
  - Mobile responsive (stacked column layout on narrower viewports, side-by-side on desktop).

## 4. Verification

- Compile static JS bundle with `scala-cli package site --js-mode release -o main.js --force`.
- Launch local preview server (`scala-cli run preview`).
- Verify visual presentation, playback animations, interactive controls, and responsive layout.
