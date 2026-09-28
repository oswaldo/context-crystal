# Specification: Public AI Discoverability, MCP Registry Listings, and Ecosystem Distribution

## 1. Overview

Context Crystal is a sovereign, deterministic context and DAG lifecycle engine with a native Model Context Protocol (MCP) server. To enable autonomous AI coding agents and human developers to discover, configure, and install Context Crystal with zero friction, this track establishes public registry manifests, upstream catalog submissions, search engine indexing, package manager descriptors, and AI entity guidance on zero-token negative knowledge caching.

## 2. Goals & Acceptance Criteria

- **Task 1 (`task-1`):** Submit `ccrystal` to `punkpeye/awesome-mcp-servers` under the `Knowledge & Memory` category.
- **Task 2 (`task-2`):** Register the repository on Smithery.ai with a root `smithery.yaml` for 1-click agent installation.
- **Task 3 (`task-3`):** Register the repository on Glama.ai with root `glama.json` ownership claim verification.
- **Task 4 (`task-4`):** Submit documentation portal endpoints (`/llms.txt`, `/llms-full.txt`) to `llmstxt.site` and `krish-adi/llmstxt-site`.
- **Task 5 (`task-5`):** Submit application descriptor PR to `coursier/apps` (`apps-contrib/resources/ccrystal.json`) for global zero-config `cs install --contrib ccrystal`.
- **Guidance (`docs`):** Codify native zero-token negative knowledge and dead-end avoidance patterns using `lessonsLearned` in `docs/for_ais.md`, `skills/context-crystal/SKILL.md`, and `README.md`.

## 3. Architecture & Operational Invariants

- **Local In-Repo Manifests:** Root `smithery.yaml` and `glama.json` must adhere strictly to respective schemas and avoid hardcoded secrets or environment-specific paths.
- **Upstream PR Isolation:** External PRs must be staged from dedicated forks/branches with clean Conventional Commits.
- **Human Push & Publish Gate:** In compliance with repository rules, no public PRs or external claims are executed without prior human operator review and approval.
