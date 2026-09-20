package ccrystal.core.agent

import munit.FunSuite

class AgentInstallerSuite extends FunSuite:

  class MockFileSystemOperator(
      var files: Map[String, String] = Map.empty,
      var directories: Set[String] = Set.empty,
      pathLookup: Map[String, String] = Map.empty,
  ) extends FileSystemOperator:
    var onReadFile: (String, Int) => Unit = (_, _) => ()
    var readCount: Int                    = 0

    def fileExists(path: String): Boolean      = files.contains(path)
    def directoryExists(path: String): Boolean = directories.contains(path)
    def isWritable(path: String): Boolean      = true
    def isExecutable(path: String): Boolean    = true
    def readFile(path: String): Option[String] =
      val res = files.get(path)
      readCount += 1
      onReadFile(path, readCount)
      res
    def findInPath(binaryName: String): Option[String] = pathLookup.get(binaryName)

    def createDirectories(path: String): Either[String, Unit] =
      directories = directories + path
      Right(())

    def writeFile(path: String, content: String): Either[String, Unit] =
      files = files + (path -> content)
      Right(())

    def copyFile(source: String, destination: String): Either[String, Unit] =
      files.get(source) match
        case Some(c) =>
          files = files + (destination -> c)
          Right(())
        case None => Left(s"Source file $source does not exist")

    def atomicWrite(path: String, content: String): Either[String, Unit] =
      writeFile(path, content)

  val env      = Map("HOME" -> "/home/testuser")
  val resolver = HarnessPathResolver(env, OsFamily.Linux)

  test("AgentInstaller dry-run does not write to filesystem") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val op = MockFileSystemOperator(
      directories = Set("/home/testuser/.cursor"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.Cursor),
      dryRun = true,
      force = false,
    )

    assertEquals(summary.dryRun, true)
    assertEquals(summary.modifiedCount, 1)
    assertEquals(op.fileExists(cursorPath), false)
  }

  test("AgentInstaller creates backup before modifying existing config") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val originalConfig =
      """{
        |  "mcpServers": {
        |    "sqlite": { "command": "uvx", "args": ["sqlite"] }
        |  }
        |}""".stripMargin

    val op = MockFileSystemOperator(
      files = Map(cursorPath -> originalConfig),
      directories = Set("/home/testuser/.cursor"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.Cursor),
      dryRun = false,
      force = false,
    )

    assertEquals(summary.dryRun, false)
    assertEquals(summary.modifiedCount, 1)

    val receipt     = summary.receipts.find(_.harness == AgentHarness.Cursor).get
    val expectedBak = s"$cursorPath.ccrystal.bak"
    assertEquals(receipt.backupPath, Some(expectedBak))
    assert(receipt.rollbackInstruction.isDefined, "Rollback instruction must be provided")

    // Verify backup content matches original exactly
    assertEquals(op.readFile(expectedBak), Some(originalConfig))

    // Verify patched file contains both sqlite and context-crystal
    val patched = op.readFile(cursorPath).get
    assert(patched.contains("sqlite"), "Original server must be preserved")
    assert(patched.contains("context-crystal"), "context-crystal must be added")
  }

  test("AgentInstaller reports Unchanged when already configured without force") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val configuredConfig =
      """{
        |  "mcpServers": {
        |    "context-crystal": {
        |      "command": "ccrystal",
        |      "args": ["mcp"]
        |    }
        |  }
        |}""".stripMargin

    val op = MockFileSystemOperator(
      files = Map(cursorPath -> configuredConfig),
      directories = Set("/home/testuser/.cursor"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.Cursor),
      dryRun = false,
      force = false,
    )

    assertEquals(summary.modifiedCount, 0)
    val receipt = summary.receipts.find(_.harness == AgentHarness.Cursor).get
    assertEquals(receipt.action, InstallActionKind.Unchanged)
  }

  test("AgentInstaller detects concurrent file modification and aborts without overwriting") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val originalConfig =
      """{
        |  "mcpServers": {
        |    "sqlite": { "command": "uvx", "args": ["sqlite"] }
        |  }
        |}""".stripMargin

    val driftedConfig =
      """{
        |  "mcpServers": {
        |    "postgres": { "command": "npx", "args": ["postgres"] }
        |  }
        |}""".stripMargin

    val op = MockFileSystemOperator(
      files = Map(cursorPath -> originalConfig),
      directories = Set("/home/testuser/.cursor"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor = AgentDoctor(op, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    // Simulate concurrent modification during execution (after initial read inside installSingle)
    op.readCount = 0
    op.onReadFile = (path, count) => {
      if path == cursorPath && count == 1 then
        op.files = op.files.updated(cursorPath, driftedConfig)
    }

    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = report,
      target = Some(AgentHarness.Cursor),
      dryRun = false,
      force = false,
    )

    assertEquals(summary.modifiedCount, 0)
    val receipt = summary.receipts.find(_.harness == AgentHarness.Cursor).get
    receipt.action match
      case InstallActionKind.Failed(reason) =>
        assert(
          reason.contains("Concurrent modification detected"),
          s"Expected concurrent modification failure, got: $reason",
        )
      case other =>
        fail(s"Expected InstallActionKind.Failed but got: $other")

    // Assert external drifted file was NOT overwritten
    assertEquals(op.readFile(cursorPath), Some(driftedConfig))

    // Assert backup file was NOT created or clobbered
    val expectedBak = s"$cursorPath.ccrystal.bak"
    assertEquals(op.fileExists(expectedBak), false)
  }

  test("AgentInstaller detects concurrent file deletion and aborts safely") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val originalConfig =
      """{
        |  "mcpServers": {
        |    "sqlite": { "command": "uvx", "args": ["sqlite"] }
        |  }
        |}""".stripMargin

    val op = MockFileSystemOperator(
      files = Map(cursorPath -> originalConfig),
      directories = Set("/home/testuser/.cursor"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor = AgentDoctor(op, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    // Simulate concurrent deletion during execution (after initial read inside installSingle)
    op.readCount = 0
    op.onReadFile = (path, count) => {
      if path == cursorPath && count == 1 then op.files = op.files - cursorPath
    }

    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = report,
      target = Some(AgentHarness.Cursor),
      dryRun = false,
      force = false,
    )

    assertEquals(summary.modifiedCount, 0)
    val receipt = summary.receipts.find(_.harness == AgentHarness.Cursor).get
    receipt.action match
      case InstallActionKind.Failed(reason) =>
        assert(
          reason.contains("Concurrent modification detected"),
          s"Expected concurrent modification failure, got: $reason",
        )
      case other =>
        fail(s"Expected InstallActionKind.Failed but got: $other")

    assertEquals(op.fileExists(cursorPath), false)
    val expectedBak = s"$cursorPath.ccrystal.bak"
    assertEquals(op.fileExists(expectedBak), false)
  }

  test("AgentInstaller detects concurrent file creation and aborts safely") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val externalCreatedConfig =
      """{
        |  "mcpServers": {
        |    "external": { "command": "echo", "args": ["hi"] }
        |  }
        |}""".stripMargin

    val op = MockFileSystemOperator(
      files = Map.empty,
      directories = Set("/home/testuser/.cursor"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor = AgentDoctor(op, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    // Simulate concurrent creation during execution (after initial missing read)
    op.readCount = 0
    op.onReadFile = (path, count) => {
      if path == cursorPath && count == 1 then
        op.files = op.files.updated(cursorPath, externalCreatedConfig)
    }

    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = report,
      target = Some(AgentHarness.Cursor),
      dryRun = false,
      force = false,
    )

    assertEquals(summary.modifiedCount, 0)
    val receipt = summary.receipts.find(_.harness == AgentHarness.Cursor).get
    receipt.action match
      case InstallActionKind.Failed(reason) =>
        assert(
          reason.contains("Concurrent modification detected"),
          s"Expected concurrent modification failure, got: $reason",
        )
      case other =>
        fail(s"Expected InstallActionKind.Failed but got: $other")

    // Ensure the external created file was not clobbered
    assertEquals(op.readFile(cursorPath), Some(externalCreatedConfig))
    val expectedBak = s"$cursorPath.ccrystal.bak"
    assertEquals(op.fileExists(expectedBak), false)
  }
