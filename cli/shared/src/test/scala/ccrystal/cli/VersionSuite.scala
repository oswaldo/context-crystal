package ccrystal.cli

import munit.FunSuite
import ccrystal.core.store.FsCrystalStore

class VersionSuite extends FunSuite:

  test("Parses '--version' flag"):
    val parsed = CommandParser.parse(List("--version"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Version(verbose) =>
        assertEquals(verbose, false)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses '-v' short flag"):
    val parsed = CommandParser.parse(List("-v"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Version(verbose) =>
        assertEquals(verbose, false)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses '--version --verbose' flag"):
    val parsed = CommandParser.parse(List("--version", "--verbose"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Version(verbose) =>
        assertEquals(verbose, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses '-v --verbose' flag"):
    val parsed = CommandParser.parse(List("-v", "--verbose"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Version(verbose) =>
        assertEquals(verbose, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'version' subcommand"):
    val parsed = CommandParser.parse(List("version"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Version(verbose) =>
        assertEquals(verbose, false)
      case other => fail(s"Unexpected command: $other")
    }

  test("Parses 'version --verbose' subcommand"):
    val parsed = CommandParser.parse(List("version", "--verbose"))
    assert(parsed.isRight)
    parsed.foreach {
      case CliCommand.Version(verbose) =>
        assertEquals(verbose, true)
      case other => fail(s"Unexpected command: $other")
    }

  test("Runner formats concise version output"):
    val store  = FsCrystalStore(os.temp.dir())
    val runner = Runner(store)
    val result = runner.run(CliCommand.Version(false))
    assert(result.isRight)
    assertEquals(result, Right(s"ccrystal ${ccrystal.BuildInfo.version}"))

  test("Runner formats verbose version output with build metadata"):
    val store  = FsCrystalStore(os.temp.dir())
    val runner = Runner(store)
    val result = runner.run(CliCommand.Version(true))
    assert(result.isRight)
    result.foreach { out =>
      assert(out.contains(s"ccrystal ${ccrystal.BuildInfo.version}"))
      assert(out.contains(s"Scala Version: ${ccrystal.BuildInfo.scalaVersion}"))
      assert(out.contains(s"SBT Version:   ${ccrystal.BuildInfo.sbtVersion}"))
      assert(out.contains(s"Git Commit:    ${ccrystal.BuildInfo.gitCommit}"))
    }
