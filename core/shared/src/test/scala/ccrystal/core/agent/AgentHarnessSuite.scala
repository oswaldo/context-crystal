package ccrystal.core.agent

import munit.FunSuite

class AgentHarnessSuite extends FunSuite:

  test("AgentHarness fromString resolves valid identifiers") {
    assertEquals(AgentHarness.fromString("antigravity"), Some(AgentHarness.GoogleAntigravity))
    assertEquals(AgentHarness.fromString("claude-code"), Some(AgentHarness.ClaudeCode))
    assertEquals(AgentHarness.fromString("claude-desktop"), Some(AgentHarness.ClaudeDesktop))
    assertEquals(AgentHarness.fromString("cursor"), Some(AgentHarness.Cursor))
    assertEquals(AgentHarness.fromString("windsurf"), Some(AgentHarness.Windsurf))
    assertEquals(AgentHarness.fromString("zed"), Some(AgentHarness.Zed))
    assertEquals(AgentHarness.fromString("unknown"), None)
  }

  test("OsFamily detection accurately classifies OS names") {
    assertEquals(OsFamily.detect("Linux"), OsFamily.Linux)
    assertEquals(OsFamily.detect("Mac OS X"), OsFamily.MacOS)
    assertEquals(OsFamily.detect("Darwin"), OsFamily.MacOS)
    assertEquals(OsFamily.detect("Windows 11"), OsFamily.Windows)
    assertEquals(OsFamily.detect("FreeBSD"), OsFamily.Unknown)
  }

  test("HarnessPathResolver resolves Linux paths correctly") {
    val env      = Map("HOME" -> "/home/testuser")
    val resolver = HarnessPathResolver(env, OsFamily.Linux)

    assertEquals(
      resolver.configPath(AgentHarness.GoogleAntigravity),
      "/home/testuser/.gemini/antigravity-cli/mcp/context-crystal",
    )
    assertEquals(
      resolver.configPath(AgentHarness.ClaudeCode),
      "/home/testuser/.claude.json",
    )
    assertEquals(
      resolver.configPath(AgentHarness.ClaudeDesktop),
      "/home/testuser/.config/Claude/claude_desktop_config.json",
    )
    assertEquals(
      resolver.configPath(AgentHarness.Cursor),
      "/home/testuser/.cursor/mcp.json",
    )
    assertEquals(
      resolver.configPath(AgentHarness.Windsurf),
      "/home/testuser/.codeium/windsurf/mcp_config.json",
    )
    assertEquals(
      resolver.configPath(AgentHarness.Zed),
      "/home/testuser/.config/zed/settings.json",
    )
  }

  test("HarnessPathResolver resolves macOS paths correctly") {
    val env      = Map("HOME" -> "/Users/testuser")
    val resolver = HarnessPathResolver(env, OsFamily.MacOS)

    assertEquals(
      resolver.configPath(AgentHarness.ClaudeDesktop),
      "/Users/testuser/Library/Application Support/Claude/claude_desktop_config.json",
    )
    assertEquals(
      resolver.configPath(AgentHarness.Cursor),
      "/Users/testuser/.cursor/mcp.json",
    )
    assertEquals(
      resolver.configPath(AgentHarness.Zed),
      "/Users/testuser/.config/zed/settings.json",
    )
  }
