package ccrystal.cli.agent

import ccrystal.cli.*
import ccrystal.core.agent.*
import munit.FunSuite

class AgentCommandSuite extends FunSuite:

  test("CommandParser parses 'agent doctor' command"):
    val parsed = CommandParser.parse(List("agent", "doctor"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.AgentDoctorCmd(json, verbose) =>
        assertEquals(json, false)
        assertEquals(verbose, false)
      case other => fail(s"Unexpected command: $other")
    }

  test("CommandParser parses 'agent doctor --json --verbose'"):
    val parsed = CommandParser.parse(List("agent", "doctor", "--json", "--verbose"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.AgentDoctorCmd(json, verbose) =>
        assertEquals(json, true)
        assertEquals(verbose, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("CommandParser parses 'agent install --target cursor --dry-run --force'"):
    val parsed =
      CommandParser.parse(List("agent", "install", "--target", "cursor", "--dry-run", "--force"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.AgentInstallCmd(target, dryRun, force) =>
        assertEquals(target, Some("cursor"))
        assertEquals(dryRun, true)
        assertEquals(force, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("AgentDoctorRenderer formats report cleanly in text mode"):
    val report = DoctorReport(
      binary = BinaryStatus(true, Some("/usr/bin/ccrystal"), true),
      store = StoreStatus("/path/.ccrystals", true, true),
      harnesses = List(
        HarnessDiagnosis(
          AgentHarness.GoogleAntigravity,
          "/antigravity/path",
          HarnessStatus.Configured,
          None,
        ),
        HarnessDiagnosis(
          AgentHarness.Cursor,
          "/cursor/mcp.json",
          HarnessStatus.MissingConfig,
          Some("No entry"),
        ),
        HarnessDiagnosis(AgentHarness.Zed, "/zed/settings.json", HarnessStatus.NotInstalled, None),
      ),
    )

    val rendered = AgentDoctorRenderer.renderText(report, verbose = false)
    assert(rendered.contains("Context Crystal: Agent Doctor"), "Header should be present")
    assert(rendered.contains("[OK]"), "Status OK should be present")
    assert(rendered.contains("[MISSING]"), "Status MISSING should be present")
    assert(rendered.contains("[NOT INSTALLED]"), "Status NOT INSTALLED should be present")
    assert(
      rendered.contains("Summary: 1 configured, 1 missing configuration, 1 not installed."),
      "Summary should be present",
    )

  test("AgentDoctorRenderer displays Golden Triad Matrix (MCP + Skill) and actionable skill tip"):
    val report = DoctorReport(
      binary = BinaryStatus(true, Some("/usr/bin/ccrystal"), true),
      store = StoreStatus("/path/.ccrystals", true, true),
      harnesses = List(
        HarnessDiagnosis(
          AgentHarness.GoogleAntigravity,
          "/home/u/.gemini/antigravity-cli/mcp/context-crystal",
          HarnessStatus.Configured,
          None,
          skillStatus = SkillStatus.Missing,
          skillPath = Some("/home/u/.gemini/antigravity-cli/skills/context-crystal/SKILL.md"),
        ),
        HarnessDiagnosis(
          AgentHarness.Cursor,
          "/home/u/.cursor/mcp.json",
          HarnessStatus.Configured,
          None,
          skillStatus = SkillStatus.Equipped,
          skillPath = Some("/home/u/.cursor/rules/context-crystal.mdc"),
        ),
      ),
    )

    val rendered = AgentDoctorRenderer.renderText(report, verbose = false)
    assert(rendered.contains("MCP"), "Matrix header should mention MCP")
    assert(rendered.contains("Skill"), "Matrix header should mention Skill")
    assert(rendered.contains("Google Antigravity"), "Harness should be listed")
    assert(rendered.contains("Tip:"), "Tip should be displayed for missing skill")
    assert(
      rendered.contains(
        "Run 'ccrystal agent install' to safely auto-configure detected harnesses and deploy skills",
      ),
      "Actionable installation advice should mention skills",
    )

  test("AgentInstallerRenderer renders install receipts with backup and rollback"):
    val summary = InstallSummary(
      receipts = List(
        HarnessInstallReceipt(
          AgentHarness.Cursor,
          "/path/.cursor/mcp.json",
          InstallActionKind.Updated,
          Some("/path/.cursor/mcp.json.ccrystal.bak"),
          Some("To revert: mv '/path/.cursor/mcp.json.ccrystal.bak' '/path/.cursor/mcp.json'"),
        ),
        HarnessInstallReceipt(
          AgentHarness.Zed,
          "/path/.config/zed/settings.json",
          InstallActionKind.Unchanged,
          None,
          None,
        ),
        HarnessInstallReceipt(
          AgentHarness.Windsurf,
          "/path/.codeium/windsurf/mcp_config.json",
          InstallActionKind.SkippedNotInstalled,
          None,
          None,
        ),
      ),
      dryRun = false,
    )

    val rendered = AgentInstallerRenderer.renderText(summary)
    assert(rendered.contains("Context Crystal: Agent Install"), "Header should be present")
    assert(rendered.contains("[UPDATED]"), "Action UPDATED should be present")
    assert(
      rendered.contains("Backup created: /path/.cursor/mcp.json.ccrystal.bak"),
      "Backup should be mentioned",
    )
    assert(rendered.contains("To revert:"), "Rollback instructions must be clearly present")
    assert(rendered.contains("[UNCHANGED]"), "Action UNCHANGED should be present")
    assert(rendered.contains("[SKIPPED]"), "Action SKIPPED should be present")
    assert(
      rendered.contains("Summary: 1 updated, 1 unchanged, 1 skipped."),
      "Summary line must be present",
    )
