# Implementation Plan: Interactive Showcase Demo Tab: Context Preservation vs. Agent Amnesia

## Phase 1: Interactive Demo Engine & Models

- [x] Task: Model & Simulation Timeline Definition
  - [x] Define `DemoEvent` and simulation frames for both branches (With CC vs. Without CC).
  - [x] Define reactive simulation state (playback status, elapsed time, playback speed, active events).
- [x] Task: Navigation & Route Integration
  - [x] Add `Demo` tab to `Model.scala` and `Main.scala`.
  - [x] Verify tab switching and reactive mounting.

## Phase 2: TabDemo Component & Responsive Terminal UI

- [x] Task: Implement `TabDemo.scala`
  - [x] Build toolbar with Play / Pause, Reset, 1x/2x Speed buttons and current simulation time indicator.
  - [x] Build dual terminal panes with macOS-style window controls, badges, and synchronized logs.
  - [x] Build animated progress bars reflecting task progression, stall, regression, and completion.
- [x] Task: CSS Styling & Animations
  - [x] Add terminal styles, progress bar styling (cyan/green vs amber/red slip), message bubbles, and responsive breakpoints in `styles.css`.

## Phase 3: Build, Local Preview Server & Verification

- [x] Task: Static JS Bundle Compilation & Asset Cache Busting
  - [x] Compile with `scala-cli package site --js-mode release -o main.js --force`.
  - [x] Update `index.html` cache busting if necessary.
- [x] Task: Local Server Execution & User Inspection
  - [x] Start preview server and present result to user.
