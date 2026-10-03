package ccrystal.core.agent

import io.circe.syntax.*
import munit.FunSuite

class AgentDoctorSuite extends FunSuite:

  class MockFileSystemInspector(
      files: Map[String, String] = Map.empty,
      directories: Set[String] = Set.empty,
      pathLookup: Map[String, String] = Map.empty,
      writablePaths: Set[String] = Set.empty,
  ) extends FileSystemInspector:
    def fileExists(path: String): Boolean              = files.contains(path)
    def directoryExists(path: String): Boolean         = directories.contains(path)
    def isWritable(path: String): Boolean              = writablePaths.contains(path)
    def isExecutable(path: String): Boolean            = true
    def readFile(path: String): Option[String]         = files.get(path)
    def findInPath(binaryName: String): Option[String] = pathLookup.get(binaryName)

  val env      = Map("HOME" -> "/home/testuser")
  val resolver = HarnessPathResolver(env, OsFamily.Linux)

  test("AgentDoctor evaluates healthy environment with configured harness") {
    val cursorPath = resolver.configPath(AgentHarness.Cursor)
    val validCursorConfig =
      """{
        |  "mcpServers": {
        |    "context-crystal": {
        |      "command": "ccrystal",
        |      "args": ["mcp"]
        |    }
        |  }
        |}""".stripMargin

    val inspector = MockFileSystemInspector(
      files = Map(cursorPath -> validCursorConfig),
      directories = Set("/home/testuser/.cursor", "/home/testuser/project/.ccrystals"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
      writablePaths = Set("/home/testuser/project/.ccrystals"),
    )

    val doctor = AgentDoctor(inspector, resolver)
    val report = doctor.diagnose("/home/testuser/project/.ccrystals")

    assertEquals(report.binary.inPath, true)
    assertEquals(report.binary.resolvedPath, Some("/usr/local/bin/ccrystal"))
    assertEquals(report.store.exists, true)
    assertEquals(report.store.writable, true)

    val cursorDiag = report.harnesses.find(_.harness == AgentHarness.Cursor).get
    assertEquals(cursorDiag.status, HarnessStatus.Configured)

    val zedDiag = report.harnesses.find(_.harness == AgentHarness.Zed).get
    assertEquals(zedDiag.status, HarnessStatus.NotInstalled)
  }

  test("AgentDoctor detects MissingConfig when harness dir exists but lacks ccrystal") {
    val claudePath  = resolver.configPath(AgentHarness.ClaudeCode)
    val emptyConfig = """{ "mcpServers": {} }"""

    val inspector = MockFileSystemInspector(
      files = Map(claudePath -> emptyConfig),
      directories = Set("/home/testuser"),
      pathLookup = Map("ccrystal" -> "/usr/local/bin/ccrystal"),
    )

    val doctor = AgentDoctor(inspector, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    val claudeDiag = report.harnesses.find(_.harness == AgentHarness.ClaudeCode).get
    assertEquals(claudeDiag.status, HarnessStatus.MissingConfig)
  }

  test("AgentDoctor detects Corrupted when JSON is malformed") {
    val windsurfPath = resolver.configPath(AgentHarness.Windsurf)
    val badJson      = "{ broken json"

    val inspector = MockFileSystemInspector(
      files = Map(windsurfPath -> badJson),
      directories = Set("/home/testuser/.codeium/windsurf"),
    )

    val doctor = AgentDoctor(inspector, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    val windsurfDiag = report.harnesses.find(_.harness == AgentHarness.Windsurf).get
    assertEquals(windsurfDiag.status, HarnessStatus.Corrupted)
  }

  test("DoctorReport JSON serialization round-trips correctly") {
    val report = DoctorReport(
      binary = BinaryStatus(true, Some("/usr/bin/ccrystal"), true),
      store = StoreStatus("/path/.ccrystals", true, true),
      harnesses = List(
        HarnessDiagnosis(
          AgentHarness.Cursor,
          "/path/.cursor/mcp.json",
          HarnessStatus.Configured,
          None,
        ),
        HarnessDiagnosis(
          AgentHarness.Zed,
          "/path/.config/zed/settings.json",
          HarnessStatus.MissingConfig,
          Some("No entry"),
        ),
      ),
    )

    val json    = report.asJson
    val decoded = json.as[DoctorReport]
    assertEquals(decoded, Right(report))
  }

  test("AgentDoctor handles JSON with comments (JSONC)") {
    val zedPath = resolver.configPath(AgentHarness.Zed)
    val jsoncConfig =
      """// Zed user settings
        |{
        |  "context_servers": {
        |    "context-crystal": {
        |      "command": "ccrystal",
        |      "args": ["mcp"]
        |    }
        |  }
        |}""".stripMargin

    val inspector = MockFileSystemInspector(
      files = Map(zedPath -> jsoncConfig),
      directories = Set("/home/testuser/.config/zed"),
    )

    val doctor = AgentDoctor(inspector, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    val zedDiag = report.harnesses.find(_.harness == AgentHarness.Zed).get
    assertEquals(zedDiag.status, HarnessStatus.Configured)
  }

  test("AgentDoctor diagnoses SkillStatus across harnesses") {
    val cursorMcpPath   = resolver.configPath(AgentHarness.Cursor)
    val cursorSkillPath = resolver.skillPath(AgentHarness.Cursor).get
    val claudeMcpPath   = resolver.configPath(AgentHarness.ClaudeCode)
    val claudeSkillPath = resolver.skillPath(AgentHarness.ClaudeCode).get

    val validMcpConfig =
      """{
        |  "mcpServers": {
        |    "context-crystal": { "command": "ccrystal", "args": ["mcp"] }
        |  }
        |}""".stripMargin

    val inspector = MockFileSystemInspector(
      files = Map(
        cursorMcpPath   -> validMcpConfig,
        cursorSkillPath -> CanonicalSkill.content,
        claudeMcpPath   -> validMcpConfig,
        // claudeSkillPath is missing!
      ),
      directories = Set(
        "/home/testuser/.cursor",
        "/home/testuser/.cursor/rules",
        "/home/testuser",
        "/home/testuser/.claude",
      ),
    )

    val doctor = AgentDoctor(inspector, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    val cursorDiag = report.harnesses.find(_.harness == AgentHarness.Cursor).get
    assertEquals(cursorDiag.status, HarnessStatus.Configured)
    assertEquals(cursorDiag.skillStatus, SkillStatus.Equipped)
    assertEquals(cursorDiag.skillPath, Some(cursorSkillPath))

    val claudeDiag = report.harnesses.find(_.harness == AgentHarness.ClaudeCode).get
    assertEquals(claudeDiag.status, HarnessStatus.Configured)
    assertEquals(claudeDiag.skillStatus, SkillStatus.Missing)
    assertEquals(claudeDiag.skillPath, Some(claudeSkillPath))

    val zedDiag = report.harnesses.find(_.harness == AgentHarness.Zed).get
    assertEquals(zedDiag.skillStatus, SkillStatus.NotSupported)
    assertEquals(zedDiag.skillPath, None)
  }

  test(
    "AgentDoctor detects Outdated SkillStatus when installed skill differs from canonical content",
  ) {
    val cursorMcpPath   = resolver.configPath(AgentHarness.Cursor)
    val cursorSkillPath = resolver.skillPath(AgentHarness.Cursor).get
    val oldSkillContent = "# Old 1.0.0 skill content\n"

    val validMcpConfig =
      """{
        |  "mcpServers": {
        |    "context-crystal": { "command": "ccrystal", "args": ["mcp"] }
        |  }
        |}""".stripMargin

    val inspector = MockFileSystemInspector(
      files = Map(
        cursorMcpPath   -> validMcpConfig,
        cursorSkillPath -> oldSkillContent,
      ),
      directories = Set(
        "/home/testuser/.cursor",
        "/home/testuser/.cursor/rules",
      ),
    )

    val doctor = AgentDoctor(inspector, resolver)
    val report = doctor.diagnose("/tmp/.ccrystals")

    val cursorDiag = report.harnesses.find(_.harness == AgentHarness.Cursor).get
    assertEquals(cursorDiag.status, HarnessStatus.Configured)
    assertEquals(cursorDiag.skillStatus, SkillStatus.Outdated)
    assertEquals(cursorDiag.skillPath, Some(cursorSkillPath))
  }
