# CEP-XXXX: <Title of Proposal>

- **Author(s):** <Full Name> <<email@domain.com>>
- **AI Runtime / Co-Pilot (Optional):** <e.g., Antigravity CLI / gemini-3.8-flash, Claude Code / sonnet-5.5>
- **Status:** Draft | Under Review | Accepted | Implemented | Active | Rejected | Withdrawn
- **Type:** Standards Track (Core) | Extension Track | Process Track
- **Created:** YYYY-MM-DD
- **Target Version:** <Target Context Crystal Release, e.g., v0.4.0>
- **Discussions-To:** <Issue / PR / Crystal Bond URI>

---

## 1. Abstract

A short (1-2 paragraph) technical summary of the proposed enhancement, feature, or domain extension standard.

---

## 2. Motivation & User Stories

- What problem does this solve?
- What limitations or friction in current workflows (human or agentic) necessitate this specification?
- Provide concrete user stories illustrating the need.

---

## 3. Architectural Tenets & Invariants

How does this proposal respect Context Crystal's foundational tenets?

- **Zero-Reflection / Lean Core Invariant:** Does this add overhead or complexity to the core Scala Native DAG engine? (If so, how is it justified or avoided?)
- **Zero Unprompted PII Invariant:** How does this proposal ensure personal data is never scraped or persisted without explicit consent?
- **Substrate Agnosticism:** Does this work across Native, JVM, and JS targets?

---

## 4. Technical Specification

Detailed design of the feature or extension:

- **Data Structures & JSON Schema:** Additions or schemas for `crystal.json`, `metadata`, or extension namespaces.
- **CLI Commands / MCP Tools:** New flags, subcommands, or tool signatures.
- **Workflow & Lifecycle:** Step-by-step lifecycle flow from creation to completion.

---

## 5. Extension Track Details (If Applicable)

If this is an **Extension Track** proposal:

- How does the extension namespace discover and integrate with `ccrystal`?
- What are the fallback behaviors when an external consumer or agent does not support the extension?
- Where are heavy assets or domain-specific physical artifacts stored to avoid polluting Git repositories?

---

## 6. Backwards Compatibility & Migration

- Are there any breaking changes to existing crystals or schemas?
- What is the migration path for older crystals?

---

## 7. Reference Implementation & Case Studies

- Link to reference code, PRs, worktrees, or sibling project implementations validating this specification in practice.

---

## 8. Prior Art & Alternatives Considered

- What alternative designs were evaluated?
- Why were they rejected in favor of this approach?
