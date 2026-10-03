# Specification: Standardized Modern Platform Runtimes (Scala Toolkit, os-lib & java.time Migration)

- **Track ID:** `standardized_modern_platform_runtimes_20261003`
- **Type:** Architecture Modernization / Platform Tech Debt Resolution
- **Status:** Draft (Awaiting User Review)

---

## 1. Overview & Architectural Motivation

Context Crystal was designed from inception as a zero-reflection, pure functional, high-performance context lifecycle engine cross-compiled across Scala Native (LLVM), JVM, and JS targets.

During earlier bootstrap tracks, two areas required bespoke shims due to platform differences:
1. **Temporal Calculations & Date Handling:** Because Scala Native's baseline `javalib` lacks `java.time`, an in-house `CivilDate` Gregorian epoch-math object (`daysSince1970`, `epochMillis`, `formatIso`, etc.) was introduced to parse and compute ISO-8601 timestamps without adding heavy dependencies.
2. **Filesystem & Process Execution:** Storage implementations in `FsCrystalStore`, agent file operators (`DefaultFileSystemOperator`), and process execution (`ProcessPlatform.scala` using POSIX FFI `fork`/`execvp`/`waitpid` on Native vs. `java.lang.ProcessBuilder` on JVM) relied on raw `java.nio.file` and custom shims.

With the official **Scala Toolkit** (`org.scala-lang::toolkit` and `com.lihaoyi::os-lib`) and the production-proven `io.github.cquiroz::scala-java-time` library:
- Standard `java.time` (`Instant`, `LocalDate`, `ZoneOffset`, `DateTimeFormatter`) can be adopted natively across JVM, Scala Native, and Scala.js.
- Ergonomic, battery-included filesystem and process execution (`os-lib`) can unify POSIX operations, atomic swaps, and external tool execution across JVM and Native without custom platform shims.

This track eliminates temporary shims, modernizes the runtime infrastructure, simplifies code across `core` and `cli`, and establishes a clean, robust baseline prior to the `v1.2.0` release.

---

## 2. Architectural Decisions & Scope

### 2.1 Dependencies & Target Matrix
- **`scala-java-time` (`io.github.cquiroz::scala-java-time`):**
  - Added to `core` across all three cross-project platforms: JVM, Native, and JS (`"io.github.cquiroz" %%% "scala-java-time" % "2.6.0"`).
  - Note: `com.monovore::decline` already pulls `scala-java-time` transitively on Native; making it explicit in `core` standardizes temporal classes everywhere.
- **`os-lib` (`com.lihaoyi::os-lib`):**
  - Added to `core/jvm-native` and `cli` (`"com.lihaoyi" %%% "os-lib" % "0.11.4"` or latest compatible).
  - Preserved boundary: `core/shared/` remains pure domain models and codecs (compatible with Scala.js). `os-lib` is used in filesystem and CLI execution layers.
- **Elimination of `CivilDate`:**
  - Delete `CivilDate` in `SearchModels.scala`. Replace all usages in `SearchEngine`, `TemporalParser`, `CaveStatsEngine`, and `FsCrystalStore` with standard `java.time.Instant`, `java.time.LocalDate`, and `java.time.temporal.ChronoUnit`.

### 2.2 Standard ISO-8601 Temporal Format Invariant
- All timestamps recorded in crystals, DAG nodes (`createdAt`), transient leases (`createdAt`, `expiresAt`), lessons learned (`createdAt`), and lattice bonds (`createdAt`) continue to serialize and deserialize as ISO-8601 UTC strings (`2026-10-03T21:15:30Z`) via `DateTimeFormatter.ISO_INSTANT`.
- Zero schema breakage: 100% backward and forward compatibility with existing crystals and JSON Schema v1.1.

### 2.3 Filesystem & Atomic Swaps with `os-lib`
- Modernize `FsCrystalStore`:
  - Replace `java.nio.file.Path` with `os.Path`.
  - Replace `java.nio.file.Files.write` and staging with `os.write.over` / `os.move` atomic swaps (`atomic_move = true`).
  - Replace custom recursive deletion and copy with `os.remove.all` and `os.copy.into`.
  - Ephemeral mutex `.lock` files: use `os.exists`, `os.write`, and `os.remove` with clean PID tracking.
- Modernize `DefaultFileSystemOperator`:
  - Implement backup file rotation (`.ccrystal.bak`) and config atomic updates via `os.write` and `os.copy`.

### 2.4 Subprocess Execution Modernization
- Replace bespoke `ProcessPlatform.scala` (Native POSIX C-string FFI vs. JVM `ProcessBuilder`) with unified `os.proc` calls where appropriate (`os.proc(...).call(check = false)`).

---

## 3. Functional Requirements

### Phase 1: Temporal Architecture Modernization (`java.time` / `scala-java-time`)
- Add `scala-java-time` dependency to `core` cross-project in `build.sbt`.
- Replace `CivilDate` calendar arithmetic with standard `java.time` APIs:
  - `TemporalParser.parse`: parse ISO-8601 date, datetime, and relative expressions (`today`, `yesterday`, `7d`, `30d`) using `Instant`, `LocalDate`, `ZoneOffset.UTC`.
  - `SearchEngine`: filter timestamps with `Instant.isBefore`, `Instant.isAfter`.
  - `CaveStatsEngine`: compute temporal extents and age days using `ChronoUnit.DAYS.between`.
  - `FsCrystalStore`: generate timestamps using `Instant.now()`.
  - Codecs: Circe codecs validate and serialize `Instant` cleanly.
- Remove obsolete `CivilDate` object and update tests in `CrystalFilterSuite` and `CaveStatsEngineSuite`.

### Phase 2: Filesystem Modernization with `os-lib` in `core/jvm-native`
- Add `os-lib` dependency to `core/jvm-native` and `cli` in `build.sbt`.
- Refactor `FsCrystalStore`:
  - Store directory representations as `os.Path`.
  - Replace raw `Files` invocations with `os.read`, `os.write.over`, `os.list`, `os.remove.all`, `os.move`.
  - Simplify atomic inode swap logic using `os.move(..., replaceExisting = true, atomicMove = true)`.
  - Ephemeral `.lock` mutex file handling via `os.write` and `os.remove`.
- Refactor `ProcessPlatform` to use `os.proc` or unified process handling.
- Verify `FsCrystalStoreSuite`, `FsCrystalStoreLatticeSuite`, `FsCrystalStoreDeletionSuite`, `FsCrystalStoreArchivingSuite`, and `FsCrystalStorePruneSuite`.

### Phase 3: Filesystem Modernization in `cli` & Agent Operations
- Refactor `DefaultFileSystemOperator` in `ccrystal.cli.agent` using `os.Path` and `os-lib`.
- Refactor `StoreResolver` and file-based options parsing in `CommandParser` and `Runner`.
- Verify `AgentInstallerSuite`, `AgentDoctorSuite`, `HarnessConfigPatcherSuite`, and `CliFsDeletionIntegrationSuite`.

### Phase 4: Full Multi-Platform Verification & Performance Check
- Run full test matrix across Native, JVM, and JS (`sbt test`).
- Verify binary linking performance on Native (`sbt cliNative/nativeLink`).
- Verify code formatting and linting: `sbt "scalafmtCheckAll; scalafixAll --check"`.
- Verify markdown docs and installer scripts.

---

## 4. Non-Functional Requirements & Invariants

- **Zero Breaking Changes:** Existing `.ccrystals/` data directories, JSON crystal files, and CLI commands must continue to work without any migration or data modification.
- **Zero-Reflection / Pure Functional:** Code remains immutable, with type-safe error handling via `Either[String, A]`.
- **Fast Native Compilation:** Ensure `os-lib` and `scala-java-time` compile and link in development mode under 15 seconds and release mode with Thin LTO under 60 seconds.
- **Zero Warnings:** Clean compiler output across all platforms without deprecations or unused imports.

---

## 5. Out of Scope

- Introducing network-dependent libraries (e.g. `requests` or `sttp` from Scala Toolkit) at this stage (saved for future RemoteCrystalStore / Crystal Comms tracks).
- Modifying JSON Schema v1.1 or changing serialized field formats.
