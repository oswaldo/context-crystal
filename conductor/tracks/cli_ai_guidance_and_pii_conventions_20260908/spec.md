# Specification: CLI AI Guidance, PII Protection & Entity Conventions

## Overview

Context Crystal records conversational workflows, tasks, and lineage into version-controlled files under `.ccrystals/`. In collaborative and open-source environments, these files are published to remote git repositories.

Currently, CLI commands (such as `ccrystal init` and `ccrystal entity register`) lack explicit guidance regarding Personally Identifiable Information (PII), identity conventions, and dual human/AI operation. When autonomous agents initialize crystals without specialized skill files loaded, they may default to extracting full legal names from `git config` or the OS environment (e.g., `"John Doe Júnior"`). This leads to:
1. **Unintended PII Exposure:** Personal names permanently recorded into version-controlled crystal files and Cave registries.
2. **Slug Mangling:** Accents and punctuation in full names are converted into awkward underscores (e.g., `usr_john_doe_j_nior`).
3. **Ambiguity Between Handle and Display Name:** Over-specifying display names when a clean, uniform handle suffices, especially for solo developers.

This track introduces **Dual-Audience CLI Guidance (`--for-ai`)**, **PII Protection Warnings**, and **Canonical Entity Conventions** directly into the Context Crystal CLI.

---

## Functional Requirements

### 1. Dual-Audience Root Guidance (`--for-ai`)

- **Global Flag:** Support `--for-ai` as a top-level CLI flag (`ccrystal --for-ai`).
- **Default (Human) Root Banner & `--help`:**
  - Emits clean, human-oriented usage instructions.
  - Appends a concise discriminator note:
    ```text
    Note: This guidance is intended for human operators. If you are an AI assistant
    or autonomous agent, run 'ccrystal --for-ai' for automated protocol invariants,
    PII safety rules, and entity conventions.
    ```
- **Agent Guidance Mode (`ccrystal --for-ai`):**
  - Outputs a high-signal, token-optimized guide for LLMs and autonomous agents covering:
    1. **PII Protection & Privacy Invariant:** Never record full personal names, personal email addresses, or private credentials into `.ccrystals/`. Never scrape `git config user.name` without explicit user consent.
    2. **Canonical Entity Conventions:**
       - **Humans (`usr`):** `usr_<firstname>[-discriminator]` (e.g., `usr_john`) or role handle (`usr_maintainer`, `usr_lead`). Avoid full legal names, accents, and special characters. Display name is optional and defaults to the handle.
       - **Agents (`agt`):** `agt_<agentname>` (e.g., `agt_antigravity`, `agt_claude_code`).
       - **Models (`mdl`):** `mdl_<modelname>` (e.g., `mdl_gemini_3_flash`).
       - **Tools (`tool`):** `tool_<toolname>` (e.g., `tool_bash_runner`).
       - **System (`sys`):** `sys_<subsystem>` (e.g., `sys_git_sync`).
    3. **Operator Preference & Memory Invariant:** Check persistent memory (e.g., Engram project memory, `AGENTS.md`) for the user's preferred entity handle and privacy stance. If not set, ask once and suggest persisting the preference so future sessions run without repeated prompts.
    4. **Execution Best Practices:** Prefer native MCP tools (`crystal_init`, `crystal_batch`) when executing as an MCP client; use atomic chained batch commands (`ccrystal batch`) to minimize turn roundtrips.

### 2. PII & Entity Guidance in Command Help

- **`ccrystal init --help`:**
  - Update `--author` option description:
    `Author entity handle/name (e.g. 'john' or role alias; prefer simple handle or role to avoid committing PII to public repositories).`
  - Clarify that the handle automatically determines the entity ID (`usr_<handle>`) and default display name.
- **`ccrystal entity --help` & Subcommands:**
  - Update `ccrystal entity register` option descriptions to advise clean, slug-friendly handles without punctuation or diacritics.
  - Introduce `ccrystal entity conventions` (or `--conventions` flag on `ccrystal entity list`) that prints a quick reference table of entity prefixes and naming rules.

### 3. Entity Slug & Name Sanitization Improvements

- Ensure slug generation cleanly handles accented characters and edge cases gracefully where possible (or rejects malformed handles with helpful hints pointing to `ccrystal entity conventions`).

---

## Non-Functional Requirements

- **Pure Functional & Zero Reflection:** Deterministic immutable data structures, pure functions returning `Either[String, A]`.
- **Zero Warnings:** Zero compilation warnings or lint violations under Scala 3.9.0.
- **Cross-Platform:** JVM and Native compatibility across `core` and `cli`.
- **Token Efficiency:** `--for-ai` output must be dense, structured markdown optimized for LLM system prompt / tool discovery injection without wasted boilerplate.
- **TDD:** Comprehensive unit tests in `CommandParserSuite` and `RunnerSuite`.

---

## Out of Scope

- Remote network authentication or external identity providers (OAuth/OIDC).
- Retroactive automatic rewrites of existing git commit history.
