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
