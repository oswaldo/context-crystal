package ccrystal.core.agent

import io.circe.parser.*
import munit.FunSuite

class HarnessConfigPatcherSuite extends FunSuite:

  test("patchJson initializes empty file with standard MCP configuration") {
    val result = HarnessConfigPatcher.patchJson("", AgentHarness.Cursor)
    assert(result.isRight, "Expected successful patch on empty input")
    val patch = result.toOption.get
    assertEquals(patch.modified, true)

    val parsed = parse(patch.patchedContent).toOption.get
    val cursorMcp = parsed.hcursor
      .downField("mcpServers")
      .downField("context-crystal")

    assertEquals(
      cursorMcp.downField("command").as[String].toOption,
      Some("ccrystal"),
    )
    assertEquals(
      cursorMcp.downField("args").as[List[String]].toOption,
      Some(List("mcp")),
    )
  }

  test("patchJson preserves existing servers when adding context-crystal") {
    val existing =
      """{
        |  "mcpServers": {
        |    "sqlite": {
        |      "command": "uvx",
        |      "args": ["mcp-server-sqlite", "--db-path", "test.db"]
        |    }
        |  }
        |}""".stripMargin

    val result = HarnessConfigPatcher.patchJson(existing, AgentHarness.ClaudeCode)
    assert(result.isRight, "Patch should succeed")
    val patch = result.toOption.get
    assertEquals(patch.modified, true)

    val parsed  = parse(patch.patchedContent).toOption.get
    val servers = parsed.hcursor.downField("mcpServers")

    // Existing server preserved
    assertEquals(
      servers.downField("sqlite").downField("command").as[String].toOption,
      Some("uvx"),
    )
    // context-crystal added
    assertEquals(
      servers.downField("context-crystal").downField("command").as[String].toOption,
      Some("ccrystal"),
    )
  }

  test("patchJson is idempotent when already configured") {
    val existing =
      """{
        |  "mcpServers": {
        |    "context-crystal": {
        |      "command": "ccrystal",
        |      "args": ["mcp"]
        |    }
        |  }
        |}""".stripMargin

    val result = HarnessConfigPatcher.patchJson(existing, AgentHarness.Windsurf, force = false)
    assert(result.isRight, "Patch should succeed")
    val patch = result.toOption.get
    assertEquals(patch.modified, false)
  }

  test("patchJson updates configuration when force is true") {
    val existing =
      """{
        |  "mcpServers": {
        |    "context-crystal": {
        |      "command": "old-ccrystal",
        |      "args": ["old-mcp"]
        |    }
        |  }
        |}""".stripMargin

    val result = HarnessConfigPatcher.patchJson(existing, AgentHarness.ClaudeDesktop, force = true)
    assert(result.isRight, "Patch should succeed with force")
    val patch = result.toOption.get
    assertEquals(patch.modified, true)

    val parsed = parse(patch.patchedContent).toOption.get
    val cc     = parsed.hcursor.downField("mcpServers").downField("context-crystal")
    assertEquals(cc.downField("command").as[String].toOption, Some("ccrystal"))
    assertEquals(cc.downField("args").as[List[String]].toOption, Some(List("mcp")))
  }

  test("patchJson correctly handles Zed settings.json context_servers") {
    val existing =
      """{
        |  "theme": "One Dark",
        |  "buffer_font_size": 14
        |}""".stripMargin

    val result = HarnessConfigPatcher.patchJson(existing, AgentHarness.Zed)
    assert(result.isRight, "Patch should succeed for Zed")
    val patch = result.toOption.get
    assertEquals(patch.modified, true)

    val parsed = parse(patch.patchedContent).toOption.get
    assertEquals(parsed.hcursor.downField("theme").as[String].toOption, Some("One Dark"))
    assertEquals(parsed.hcursor.downField("buffer_font_size").as[Int].toOption, Some(14))

    val zedServer = parsed.hcursor
      .downField("context_servers")
      .downField("context-crystal")
    assertEquals(zedServer.downField("command").as[String].toOption, Some("ccrystal"))
    assertEquals(zedServer.downField("args").as[List[String]].toOption, Some(List("mcp")))
  }

  test("patchJson fails gracefully on malformed JSON") {
    val invalid = "{ not a valid json: 123"
    val result  = HarnessConfigPatcher.patchJson(invalid, AgentHarness.Cursor)
    assert(result.isLeft, "Malformed JSON must return Left")
    result.left.foreach { err =>
      assert(err.isInstanceOf[PatchError.MalformedJson], "Error should be MalformedJson")
    }
  }

  test("backupPath and rollbackInstruction format correctly") {
    val target      = "/home/testuser/.cursor/mcp.json"
    val expectedBak = "/home/testuser/.cursor/mcp.json.ccrystal.bak"
    assertEquals(HarnessConfigPatcher.backupPath(target), expectedBak)
    assertEquals(
      HarnessConfigPatcher.rollbackInstruction(target, expectedBak),
      "To revert: mv '/home/testuser/.cursor/mcp.json.ccrystal.bak' '/home/testuser/.cursor/mcp.json'",
    )
  }

  test("patchJson strips leading comments (JSONC)") {
    val jsonc =
      """// Zed Settings
        |{
        |  // Theme setting
        |  "theme": "One Dark"
        |}""".stripMargin

    val result = HarnessConfigPatcher.patchJson(jsonc, AgentHarness.Zed)
    assert(result.isRight, "Patch should succeed for JSON with comments")
    val patch = result.toOption.get
    assertEquals(patch.modified, true)
    val parsed = parse(patch.patchedContent).toOption.get
    assertEquals(parsed.hcursor.downField("theme").as[String].toOption, Some("One Dark"))
  }
