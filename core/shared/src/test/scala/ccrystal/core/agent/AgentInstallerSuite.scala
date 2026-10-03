package ccrystal.core.agent

import munit.FunSuite

class AgentInstallerSuite extends FunSuite:

  class MockFileSystemOperator(
      var files: Map[String, String] = Map.empty,
      var directories: Set[String] = Set.empty,
      var symlinks: Map[String, String] = Map.empty,
      pathLookup: Map[String, String] = Map.empty,
  ) extends FileSystemOperator:
    var onReadFile: (String, Int) => Unit = (_, _) => ()
    var readCount: Int                    = 0

    override def isSymlink(path: String): Boolean = symlinks.contains(path)
    def fileExists(path: String): Boolean         = files.contains(path) || symlinks.contains(path)
    def directoryExists(path: String): Boolean    = directories.contains(path)
    def isWritable(path: String): Boolean         = true
    def isExecutable(path: String): Boolean       = true
    def readFile(path: String): Option[String] =
      val res = files.get(path).orElse(symlinks.get(path).flatMap(files.get))
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
      readFile(source) match
        case Some(c) =>
          files = files + (destination -> c)
          Right(())
        case None => Left(s"Source file $source does not exist")

    def atomicWrite(path: String, content: String): Either[String, Unit] =
      writeFile(path, content)

    def createSymlink(source: String, destination: String): Either[String, Unit] =
      symlinks = symlinks + (destination -> source)
      Right(())

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

  test("AgentInstaller installs canonical skill by default alongside MCP config") {
    val antigravitySkillPath = resolver.skillPath(AgentHarness.GoogleAntigravity).get
    val antigravityMcpDir    = resolver.configPath(AgentHarness.GoogleAntigravity)
    val op = MockFileSystemOperator(
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = false,
      force = false,
      installSkill = true,
      symlinkSkill = false,
    )

    assertEquals(summary.dryRun, false)
    val receipt = summary.receipts.find(_.harness == AgentHarness.GoogleAntigravity).get
    assertEquals(receipt.action, InstallActionKind.Installed)
    assert(receipt.skillReceipt.isDefined, "Skill receipt must be present")
    val skillReceipt = receipt.skillReceipt.get
    assertEquals(skillReceipt.action, InstallActionKind.Installed)
    assertEquals(skillReceipt.isSymlink, false)
    assertEquals(skillReceipt.targetPath, antigravitySkillPath)

    assertEquals(op.fileExists(antigravitySkillPath), true)
    assertEquals(op.readFile(antigravitySkillPath), Some(CanonicalSkill.content))
  }

  test("AgentInstaller skips skill when installSkill is false (--no-skill)") {
    val antigravitySkillPath = resolver.skillPath(AgentHarness.GoogleAntigravity).get
    val op = MockFileSystemOperator(
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = false,
      force = false,
      installSkill = false,
    )

    val receipt = summary.receipts.find(_.harness == AgentHarness.GoogleAntigravity).get
    assertEquals(receipt.action, InstallActionKind.Installed)
    assertEquals(receipt.skillReceipt, None)
    assertEquals(op.fileExists(antigravitySkillPath), false)
  }

  test("AgentInstaller creates symlink when symlinkSkill is true") {
    val antigravitySkillPath = resolver.skillPath(AgentHarness.GoogleAntigravity).get
    val workspaceSkillPath   = resolver.workspaceSkillPath
    val op = MockFileSystemOperator(
      files = Map(workspaceSkillPath -> CanonicalSkill.content),
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = false,
      force = false,
      installSkill = true,
      symlinkSkill = true,
    )

    val receipt      = summary.receipts.find(_.harness == AgentHarness.GoogleAntigravity).get
    val skillReceipt = receipt.skillReceipt.get
    assertEquals(skillReceipt.action, InstallActionKind.Installed)
    assertEquals(skillReceipt.isSymlink, true)
    assertEquals(op.isSymlink(antigravitySkillPath), true)
    assertEquals(op.symlinks.get(antigravitySkillPath), Some(workspaceSkillPath))
    assertEquals(op.readFile(antigravitySkillPath), Some(CanonicalSkill.content))
  }

  test("AgentInstaller backs up existing skill file if content differs") {
    val antigravitySkillPath = resolver.skillPath(AgentHarness.GoogleAntigravity).get
    val oldSkillContent      = "# Old custom skill content\n"
    val expectedBak          = s"$antigravitySkillPath.ccrystal.bak"
    val op = MockFileSystemOperator(
      files = Map(antigravitySkillPath -> oldSkillContent),
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = false,
      force = false,
      installSkill = true,
    )

    val receipt      = summary.receipts.find(_.harness == AgentHarness.GoogleAntigravity).get
    val skillReceipt = receipt.skillReceipt.get
    assertEquals(skillReceipt.action, InstallActionKind.Updated)
    assertEquals(skillReceipt.backupPath, Some(expectedBak))
    assertEquals(op.readFile(expectedBak), Some(oldSkillContent))
    assertEquals(op.readFile(antigravitySkillPath), Some(CanonicalSkill.content))
  }

  test("AgentInstaller leaves skill unchanged if content already matches canonical skill") {
    val antigravitySkillPath = resolver.skillPath(AgentHarness.GoogleAntigravity).get
    val op = MockFileSystemOperator(
      files = Map(antigravitySkillPath -> CanonicalSkill.content),
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = false,
      force = false,
      installSkill = true,
    )

    val receipt      = summary.receipts.find(_.harness == AgentHarness.GoogleAntigravity).get
    val skillReceipt = receipt.skillReceipt.get
    assertEquals(skillReceipt.action, InstallActionKind.Unchanged)
    assertEquals(skillReceipt.backupPath, None)
  }

  test("AgentInstaller installs workspace skill when installWorkspaceSkill is true") {
    val workspaceSkillPath = resolver.workspaceSkillPath
    val op = MockFileSystemOperator(
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = false,
      force = false,
      installSkill = true,
      installWorkspaceSkill = true,
    )

    assert(summary.workspaceSkillReceipt.isDefined, "Workspace skill receipt must be present")
    val wsReceipt = summary.workspaceSkillReceipt.get
    assertEquals(wsReceipt.targetPath, workspaceSkillPath)
    assertEquals(wsReceipt.action, InstallActionKind.Installed)
    assertEquals(op.readFile(workspaceSkillPath), Some(CanonicalSkill.content))
  }

  test("AgentInstaller dry-run for skill does not write files or symlinks") {
    val antigravitySkillPath = resolver.skillPath(AgentHarness.GoogleAntigravity).get
    val op = MockFileSystemOperator(
      directories =
        Set("/home/testuser/.gemini/antigravity-cli", "/home/testuser/.gemini/antigravity-cli/mcp"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor    = AgentDoctor(op, resolver)
    val installer = AgentInstaller(op, resolver)

    val summary = installer.install(
      doctorReport = doctor.diagnose("/tmp/.ccrystals"),
      target = Some(AgentHarness.GoogleAntigravity),
      dryRun = true,
      force = false,
      installSkill = true,
    )

    assertEquals(summary.dryRun, true)
    val receipt      = summary.receipts.find(_.harness == AgentHarness.GoogleAntigravity).get
    val skillReceipt = receipt.skillReceipt.get
    assertEquals(skillReceipt.action, InstallActionKind.Installed)
    assertEquals(op.fileExists(antigravitySkillPath), false)
  }
