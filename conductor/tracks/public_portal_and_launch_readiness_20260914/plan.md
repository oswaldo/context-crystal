# Implementation Plan: Public Documentation Portal & Launch Readiness

## Phase 1: Workspace & Orphan Worktree Topology Initialization [checkpoint: e223b91]

- [x] Task: Create orphan branch `gh-pages` and attach isolated worktree at `~/git/context-crystal-gh-pages` [e223b91]
  - [x] Add detached worktree: `git worktree add --detach ~/git/context-crystal-gh-pages`
  - [x] Switch to orphan branch: `git checkout --orphan gh-pages && git rm -rf .`
  - [x] Verify clean, decoupled working directory
- [x] Task: Scaffold Scala CLI project structure and build configuration [e223b91]
  - [x] Create `site/project.scala` configured for Scala 3.3 LTS, Scala.js ES module, and Laminar 17
  - [x] Create `preview/project.scala` and `preview/PreviewServer.scala` with Cask preview server
  - [x] Create base `index.html` and foundational `styles.css` with cybernetic palette
  - [x] Verify build via `scala-cli package site --js-mode release -o main.js --force`
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md) [e223b91]

## Phase 2: Core Portal UI Components & Cybernetic Modernist Design [checkpoint: 029855d]

- [x] Task: Implement Layout, Header, Navigation Tabs, and Footer components in Laminar [029855d]
  - [x] Build reactive state store for active tab selection and mobile menu toggle
  - [x] Implement responsive Header with project logo, status badge, and external GitHub link
  - [x] Implement clean Footer with license and copyright attribution
- [x] Task: Implement Tab 1 (Manifesto & Architecture: "Why Context Isn't a Vector Database") [029855d]
  - [x] Implement narrative section contrasting probabilistic vector search with deterministic DAG context
  - [x] Implement interactive architecture diagram illustrating Cave, Crystals, DAG Nodes, and Entities
- [x] Task: Implement Tab 2 (Live Interactive DAG & Context Beam Explorer component) [029855d]
  - [x] Build interactive state explorer allowing users to inspect a sample crystal lifecycle
  - [x] Render living context beam hydration dynamically on state changes
- [x] Task: Implement Tab 3 (Installation & Quickstart) [029855d]
  - [x] Implement single-line curl installer snippet with one-click copy button
  - [x] Document verified manual binary downloads for Linux and macOS targets
  - [x] Document local source build commands (`sbt`)
  - [x] Document "First 5 Minutes" verified CLI walkthrough
- [x] Task: Implement Tab 4 (Native Model Context Protocol Reference) [029855d]
  - [x] Document all 11 native MCP tools with descriptions, arguments, and return types
  - [x] Provide ready-to-use JSON configs for Claude Desktop, Cursor, and Zed
- [x] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md) [029855d]

## Phase 3: Machine-Readable Agent Ingestion (`llms.txt`, `llms-full.txt`) & SEO Metadata [checkpoint: 029855d]

- [x] Task: Generate canonical `/llms.txt` and `/llms-full.txt` at site root [029855d]
  - [x] Draft concise `/llms.txt` optimized for LLM crawler context windows
  - [x] Draft comprehensive `/llms-full.txt` detailing CLI flags, MCP schemas, and entity conventions
- [x] Task: Configure SEO metadata, OpenGraph tags, favicons, and robots.txt [029855d]
  - [x] Add semantic OpenGraph meta tags, twitter cards, and viewport settings to `index.html`
  - [x] Add `robots.txt` allowing indexing of documentation and `llms.txt`
- [x] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md) [029855d]

## Phase 4: Build Optimization, Verification & Roadmap Recording [checkpoint: 029855d]

- [x] Task: Compile release JS bundle and verify local preview [029855d]
  - [x] Compile optimized `main.js` via Scala CLI release packaging
  - [x] Verify clean rendering, responsive design, and zero browser console errors
- [x] Task: Record post-MLP roadmap item in `conductor/next-steps.md` [029855d]
  - [x] Formally document deferred search engine evaluation (Pagefind WASM / Laika) without public "Coming Soon" badges
- [x] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md) [029855d]
