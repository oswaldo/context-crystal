# Implementation Plan: Public AI Discoverability, MCP Registry Listings, and Ecosystem Distribution

## Phase 1: Local In-Repo Manifests, Guidance & Validation

- [x] Task 1.1: Create and validate root `smithery.yaml` for Smithery.ai MCP server indexing.
- [x] Task 1.2: Create and validate root `glama.json` referencing `https://glama.ai/mcp/schemas/server.json`.
- [x] Task 1.3: Codify negative knowledge and dead-end avoidance invariant in `docs/for_ais.md`, `skills/context-crystal/SKILL.md`, and `README.md`.
- [x] Task 1.4: Run Markdown and repository linter checks across all manifests and documentation.

## Phase 2: Upstream PR Drafts & Packaging Artifacts

- [x] Task 2.1: Prepare `coursier/apps` application descriptor (`apps-contrib/resources/ccrystal.json`) using dynamic `${version}` resolution.
- [x] Task 2.2: Prepare `punkpeye/awesome-mcp-servers` pull request diff and entry under Knowledge & Memory.
- [x] Task 2.3: Prepare `llmstxt.site` and `krish-adi/llmstxt-site` submission payloads.

## Phase 3: Operator Review, Claims & Upstream Submissions (Gated)

- [ ] Task 3.1: Present all changes, diffs, and drafts to human steersman for review.
- [ ] Task 3.2: Verify Smithery and Glama indexing and claim ownership.
- [ ] Task 3.3: Submit upstream PRs (`coursier/apps`, `awesome-mcp-servers`, `llmstxt-site`) upon operator confirmation.
- [ ] Task 3.4: Transition crystal tasks and conclude `ai-ecosystem-discovery-and-mcp-registries`.
