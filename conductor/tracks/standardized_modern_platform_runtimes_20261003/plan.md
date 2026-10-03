# Implementation Plan: Standardized Modern Platform Runtimes (Scala Toolkit, os-lib & java.time Migration)

## Phase 1: Build Dependencies & Temporal Modernization (java.time / scala-java-time)

- [x] Task: Add `scala-java-time` dependency to `core` cross-project in `build.sbt` (07b730b)
  - [x] Add `"io.github.cquiroz" %%% "scala-java-time" % "2.6.0"` to `core` libraryDependencies
  - [x] Verify clean compilation across `coreJVM`, `coreNative`, and `coreJS`
- [x] Task: Modernize `SearchModels.scala` and `TemporalParser`
  - [x] Refactor `TemporalParser` to use `java.time.Instant`, `java.time.LocalDate`, and `java.time.ZoneOffset.UTC`
  - [x] Refactor `SearchEngine` to use standard `java.time.Instant` comparison (`isBefore`, `isAfter`)
  - [x] Remove bespoke `CivilDate` calendar arithmetic object (`daysSince1970`, `epochMillis`, `parseIsoToEpochMillis`, `formatIso`, `nowIso`)
- [x] Task: Modernize `CaveStatsEngine.scala` and `FsCrystalStore.scala`
  - [x] Update `CaveStatsEngine` to compute day spans using `java.time.temporal.ChronoUnit.DAYS.between`
  - [x] Update `FsCrystalStore` to generate standard ISO-8601 timestamps using `java.time.Instant.now().toString`
- [x] Task: Update unit tests in `core`
  - [x] Update `CrystalFilterSuite.scala` with `java.time.Instant` test cases
  - [x] Update `CaveStatsEngineSuite.scala` and `FsCrystalStoreLatticeSuite.scala`
  - [x] Verify `coreJVM/test`, `coreNative/test`, and `coreJS/test`
- [x] Task: Phase 1 Verification & Checkpoint (Refer to workflow.md)

## Phase 2: Filesystem & Process Modernization with os-lib in core/jvm-native

- [ ] Task: Add `os-lib` dependency to `core/jvm-native` in `build.sbt`
  - [ ] Add `"com.lihaoyi" %%% "os-lib" % "0.11.4"` to JVM and Native settings (preserving JS isolation)
- [ ] Task: Refactor `FsCrystalStore.scala` with `os-lib`
  - [ ] Convert `java.nio.file.Path` to `os.Path`
  - [ ] Replace file I/O with `os.read`, `os.write.over`, `os.list`, `os.remove.all`, and `os.copy.into`
  - [ ] Simplify atomic inode replacement using `os.move(..., replaceExisting = true, atomicMove = true)`
  - [ ] Refactor `.lock` mutex handling with `os.exists`, `os.write`, and `os.remove`
- [ ] Task: Unify Subprocess Execution
  - [ ] Modernize `ProcessPlatform.scala` using `os.proc` where applicable
- [ ] Task: Verify storage test matrix
  - [ ] Run `FsCrystalStoreSuite`, `FsCrystalStoreLatticeSuite`, `FsCrystalStoreDeletionSuite`, `FsCrystalStoreArchivingSuite`, `FsCrystalStorePruneSuite`
- [ ] Task: Phase 2 Verification & Checkpoint (Refer to workflow.md)

## Phase 3: Filesystem Modernization in cli & Agent Operations

- [ ] Task: Add `os-lib` to `cli` and refactor agent file operations
  - [ ] Add `"com.lihaoyi" %%% "os-lib" % "0.11.4"` to `cli` in `build.sbt`
  - [ ] Refactor `DefaultFileSystemOperator.scala` to use `os.Path`, `os.write.over`, `os.copy`, and `os.remove`
  - [ ] Refactor `StoreResolver.scala` to use `os.Path` and `os.exists`
- [ ] Task: Verify CLI test suites
  - [ ] Run `AgentInstallerSuite`, `AgentDoctorSuite`, `HarnessConfigPatcherSuite`, `StoreResolverSuite`
  - [ ] Run `CommandParserSuite`, `RunnerSuite`, and `McpEndToEndSessionSuite`
- [ ] Task: Phase 3 Verification & Checkpoint (Refer to workflow.md)

## Phase 4: Full Multi-Platform Verification, Linting & Documentation

- [ ] Task: Run full cross-platform test matrix
  - [ ] Execute `sbt test` across Native, JVM, and JS targets
- [ ] Task: Format and lint code
  - [ ] Run `sbt "scalafmtCheckAll; scalafixAll --check"`
  - [ ] Run markdown linting (`npx markdownlint-cli ...`)
  - [ ] Run shellcheck (`npx shellcheck ...`)
- [ ] Task: Update Tech Stack & Documentation
  - [ ] Update `conductor/tech-stack.md` documenting `scala-java-time` and `os-lib`
  - [ ] Synchronize `README.md` and `skills/context-crystal/SKILL.md` if any references to legacy date math exist
- [ ] Task: Phase 4 Verification & Checkpoint (Refer to workflow.md)
