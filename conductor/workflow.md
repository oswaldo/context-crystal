# Project Workflow

## Guiding Principles

1.  **The Plan is the Source of Truth:** All work must be tracked in `plan.md`
2.  **The Tech Stack is Deliberate:** Changes to the tech stack must be documented in `tech-stack.md` *before* implementation
3.  **Test-Driven Development:** Write unit tests before implementing functionality
4.  **High Code Coverage:** Aim for >80% code coverage for all modules
5.  **User Experience First:** Every decision should prioritize user experience and developer ergonomics
6.  **Non-Interactive & CI-Aware:** Prefer non-interactive commands. Use `CI=true` for watch-mode tools (tests, linters) to ensure single execution.

## Task Workflow

All tasks follow a strict lifecycle:

### Standard Task Workflow

1.  **Select Task:** Choose the next available task from `plan.md` in sequential order
2.  **Mark In Progress:** Before beginning work, edit `plan.md` and change the task from `[ ]` to `[~]`
3.  **Write Failing Tests (Red Phase):**
    - Create a new test file for the feature or bug fix.
    - Write one or more unit tests using MUnit that clearly define the expected behavior and acceptance criteria.
    - **CRITICAL:** Run the tests and confirm that they fail as expected. This is the "Red" phase of TDD. Do not proceed until you have failing tests.
4.  **Implement to Pass Tests (Green Phase):**
    - Write the minimum amount of application code necessary to make the failing tests pass.
    - Run the test suite again and confirm that all tests now pass. This is the "Green" phase.
5.  **Refactor (Optional but Recommended):**
    - With the safety of passing tests, refactor the implementation code and test code to improve clarity, remove duplication, and enhance performance without changing external behavior.
    - Rerun tests to ensure they still pass after refactoring.
6.  **Verify Coverage:** Run coverage reports using configured sbt coverage tools (target: >80% coverage for new code).
7.  **Document Deviations:** If implementation differs from tech stack:
    - **STOP** implementation
    - Update `tech-stack.md` with new design
    - Add dated note explaining the change
    - Resume implementation
8.  **Commit Code Changes:**
    - Stage all code changes related to the task.
    - Propose a clear, concise commit message following conventional commits e.g. `feat(core): Implement Envelope parser and schema validator`.
    - Perform the commit.
9.  **Attach Task Summary with Git Notes:**
    - **Step 9.1: Get Commit Hash:** Obtain the hash of the just-completed commit (`git log -1 --format="%H"`).
    - **Step 9.2: Draft Note Content:** Create a detailed summary for the completed task.
    - **Step 9.3: Attach Note:** Use `git notes add -m "<note content>" <commit_hash>`.
10. **Get and Record Task Commit SHA:**
    - **Step 10.1: Update Plan:** Read `plan.md`, find the line for the completed task, update its status from `[~]` to `[x]`, and append the first 7 characters of the commit hash.
    - **Step 10.2: Write Plan:** Write the updated content back to `plan.md`.
11. **Commit Plan Update:**
    - Stage the modified `plan.md` file.
    - Commit this change with message: `conductor(plan): Mark task '<TASK NAME>' as complete`.

### Phase Completion Verification and Checkpointing Protocol

**Trigger:** Executed immediately after completing the final task of a phase in `plan.md`.

1. **Announce Protocol Start:** Inform the user that the phase is complete and the verification/checkpointing protocol has begun.
2. **Ensure Test Coverage for Phase Changes:** Check all changed code files across the phase have corresponding MUnit test suites.
3. **Execute Automated Tests:** Run `sbt test` (or platform specific test commands) and verify all suites pass cleanly.
4. **Propose Actionable Verification Plan:** Provide step-by-step instructions for manual or CLI verification of phase capabilities.
5. **Await Explicit User Feedback:** Ask for user confirmation and pause for approval.
6. **Attach Auditable Verification Report:** Attach the full verification summary to the target commit using `git notes`.
7. **Record Phase Checkpoint SHA:** Update `plan.md` phase header with `[checkpoint: <sha>]` and commit the plan update.

## Development Commands

### Daily Development (sbt)

```bash
# Compile all modules
sbt compile

# Run all cross-platform unit tests
sbt test

# Run tests specifically for JVM, Native, or JS
sbt coreJVM/test
sbt coreNative/test
sbt coreJS/test

# Build Native CLI binary
sbt cliNative/nativeLink
```

## Quality Gates

Before marking any task complete, verify:
- [ ] All unit and cross-platform tests pass
- [ ] Code coverage meets requirements (>80%)
- [ ] Follows project's code style guidelines in `conductor/code_styleguides/`
- [ ] Pure functional idioms and immutability enforced
- [ ] No compilation warnings or fatal linters
- [ ] Public API methods and ADTs documented
