# Plan: macOS Onboarding & Portability Improvements

## Phase 1: Documentation & Portability Alignment

- [x] Task 1.1: Update `README.md` with unified bleeding-edge Coursier setup and portable install command <!-- id: 1.1 -->
- [x] Task 1.2: Update `AGENTS.md` with portable atomic inode replacement command and invariant note <!-- id: 1.2 -->
- [x] Task 1.3: Update `conductor/tracks.md` registry with this track <!-- id: 1.3 -->

## Phase 2: Verification, Linting & Retrospective Gate

- [x] Task 2.1: Run markdownlint across updated documentation and ensure zero warnings <!-- id: 2.1 -->
- [x] Task 2.2: Run `sbt "scalafmtCheckAll; coreJVM/test; cliJVM/test"` to ensure zero regressions <!-- id: 2.2 -->
- [x] Task 2.3: Cave hygiene, operational retrospective, and Context Crystal milestone completion <!-- id: 2.3 -->

## Phase 3: Worktree Verification & PR Hand-Off Gate

- [x] Task 3.1: Commit changes atomically with Conventional Commits <!-- id: 3.1 -->
- [ ] Task 3.2: Prepare push command and direct Codeberg Pull Request link for operator hand-off <!-- id: 3.2 -->
