# Implementation Plan: Public Documentation Portal & Launch Readiness

## Phase 1: Workspace & Orphan Worktree Topology Initialization

- [ ] Task: Create orphan branch `gh-pages` and attach isolated worktree at `../ccrystal-worktrees/context-crystal-gh-pages`
  - [ ] Add detached worktree: `git worktree add --detach ../ccrystal-worktrees/context-crystal-gh-pages`
  - [ ] Switch to orphan branch: `git checkout --orphan gh-pages && git rm -rf .`
  - [ ] Verify clean, decoupled working directory
- [ ] Task: Scaffold Scala CLI project structure and build configuration
  - [ ] Create `site/project.scala` configured for Scala 3.3 LTS, Scala.js ES module, and Laminar 17
  - [ ] Create `preview/project.scala` and `preview/PreviewServer.scala` with Cask preview server
  - [ ] Create base `index.html` and foundational `styles.css` with cybernetic palette
  - [ ] Verify build via `scala-cli package site --js-mode release -o main.js --force`
- [ ] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Core Portal UI Components & Cybernetic Modernist Design

- [ ] Task: Implement Layout, Header, Navigation Tabs, and Footer components in Laminar
  - [ ] Build reactive state store for active tab selection and mobile menu toggle
  - [ ] Implement responsive Header with project logo, status badge, and external GitHub link
  - [ ] Implement clean Footer with license and copyright attribution
- [ ] Task: Implement Tab 1 (Manifesto & Architecture: "Why Context Isn't a Vector Database")
  - [ ] Implement narrative section contrasting probabilistic vector search with deterministic DAG context
  - [ ] Implement interactive architecture diagram illustrating Cave, Crystals, DAG Nodes, and Entities
- [ ] Task: Implement Tab 2 (Live Interactive DAG & Context Beam Explorer component)
  - [ ] Build interactive state explorer allowing users to inspect a sample crystal lifecycle
  - [ ] Render living context beam hydration dynamically on state changes
- [ ] Task: Implement Tab 3 (Installation & Quickstart)
  - [ ] Implement single-line curl installer snippet with one-click copy button
  - [ ] Document verified manual binary downloads for Linux and macOS targets
  - [ ] Document local source build commands (`sbt`)
  - [ ] Document "First 5 Minutes" verified CLI walkthrough
- [ ] Task: Implement Tab 4 (Native Model Context Protocol Reference)
  - [ ] Document all 11 native MCP tools with descriptions, arguments, and return types
  - [ ] Provide ready-to-use JSON configs for Claude Desktop, Cursor, and Zed
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Machine-Readable Agent Ingestion (`llms.txt`, `llms-full.txt`) & SEO Metadata

- [ ] Task: Generate canonical `/llms.txt` and `/llms-full.txt` at site root
  - [ ] Draft concise `/llms.txt` optimized for LLM crawler context windows
  - [ ] Draft comprehensive `/llms-full.txt` detailing CLI flags, MCP schemas, and entity conventions
- [ ] Task: Configure SEO metadata, OpenGraph tags, favicons, and robots.txt
  - [ ] Add semantic OpenGraph meta tags, twitter cards, and viewport settings to `index.html`
  - [ ] Add `robots.txt` allowing indexing of documentation and `llms.txt`
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Build Optimization, Verification & Roadmap Recording

- [ ] Task: Compile release JS bundle and verify local preview
  - [ ] Compile optimized `main.js` via Scala CLI release packaging
  - [ ] Verify clean rendering, responsive design, and zero browser console errors
- [ ] Task: Record post-MLP roadmap item in `conductor/next-steps.md`
  - [ ] Formally document deferred search engine evaluation (Pagefind WASM / Laika) without public "Coming Soon" badges
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
