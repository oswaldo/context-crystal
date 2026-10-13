package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.extension.*
import ccrystal.core.store.FsCrystalStore

class RunnerExtensionSuite extends FunSuite:

  def withTempStore(test: (FsCrystalStore, Runner, os.Path) => Unit): Unit =
    val tempCave = os.temp.dir(prefix = "ccrystal-runner-ext")
    try
      val store  = new FsCrystalStore(tempCave)
      val runner = new Runner(store)
      test(store, runner, tempCave)
    finally
      try os.remove.all(tempCave)
      catch case _: Throwable => ()

  test("Parses 'ext list' and 'extension list' commands"):
    val res1 = CommandParser.parse(List("ext", "list"))
    assert(res1.isRight, "ext list should parse")
    assertEquals(res1.toOption.get, CliCommand.ExtensionList(None, None, false))

    val res2 = CommandParser.parse(
      List("extension", "list", "--crystal", "c-1", "--scope", "cave", "--json"),
    )
    assert(res2.isRight, "extension list should parse")
    assertEquals(
      res2.toOption.get,
      CliCommand.ExtensionList(Some("c-1"), Some(ExtensionScope.Cave), true),
    )

  test("Parses 'ext enable' and 'ext disable'"):
    val enRes = CommandParser.parse(List("ext", "enable", "sample_runner", "--cave"))
    assert(enRes.isRight, "ext enable should parse")
    assertEquals(enRes.toOption.get, CliCommand.ExtensionEnable("sample_runner", None, cave = true))

    val disRes = CommandParser.parse(List("ext", "disable", "sample_runner", "--crystal", "c-1"))
    assert(disRes.isRight, "ext disable should parse")
    assertEquals(
      disRes.toOption.get,
      CliCommand.ExtensionDisable("sample_runner", Some("c-1"), cave = false),
    )

  test("Parses 'ext run' with arguments"):
    val runRes =
      CommandParser.parse(
        List("ext", "run", "sample_runner", "--crystal", "c-1", "--", "--port", "8080"),
      )
    assert(runRes.isRight, "ext run should parse")
    assertEquals(
      runRes.toOption.get,
      CliCommand.ExtensionRun("sample_runner", Some("c-1"), List("--port", "8080")),
    )

  test("Parses 'ext skill' command"):
    val skillRes = CommandParser.parse(List("ext", "skill", "sample_runner", "--crystal", "c-1"))
    assert(skillRes.isRight, "ext skill should parse")
    assertEquals(
      skillRes.toOption.get,
      CliCommand.ExtensionSkill("sample_runner", Some("c-1")),
    )

  test("Parses 'ext comms send' and 'ext comms list'"):
    val sendRes = CommandParser.parse(
      List(
        "ext",
        "comms",
        "send",
        "c-1",
        "--from",
        "usr_oswaldo",
        "--to",
        "agt_alice",
        "--to",
        "grp_team",
        "-s",
        "Greetings",
        "-b",
        "Hello team",
      ),
    )
    assert(sendRes.isRight, "comms send should parse")
    val sendCmd = sendRes.toOption.get.asInstanceOf[CliCommand.CommsSend]
    assertEquals(sendCmd.crystalId, "c-1")
    assertEquals(sendCmd.from, "usr_oswaldo")
    assertEquals(sendCmd.to, List("agt_alice", "grp_team"))
    assertEquals(sendCmd.subject, "Greetings")
    assertEquals(sendCmd.body, "Hello team")

    val listRes = CommandParser.parse(
      List("ext", "comms", "list", "c-1", "--inbox", "agt_alice", "--limit", "10"),
    )
    assert(listRes.isRight, "comms list should parse")
    assertEquals(
      listRes.toOption.get,
      CliCommand.CommsList("c-1", Some("agt_alice"), None, Some(10), false),
    )

    val sendDagRes = CommandParser.parse(
      List(
        "ext",
        "comms",
        "send",
        "c-1",
        "--from",
        "usr_oswaldo",
        "--to",
        "agt_alice",
        "-s",
        "Notice",
        "-b",
        "Important update",
        "--record-dag",
      ),
    )
    assert(sendDagRes.isRight, "comms send with --record-dag should parse")
    val sendDagCmd = sendDagRes.toOption.get.asInstanceOf[CliCommand.CommsSend]
    assertEquals(sendDagCmd.recordDag, true)

  test("Runner executes extension list, comms messaging, and extension runner"):
    withTempStore { (store, runner, tempCave) =>
      // 1. List extensions
      val listOutput = runner.run(CliCommand.ExtensionList(None, None, false))
      assert(listOutput.isRight, "ExtensionList should succeed")
      assert(listOutput.toOption.get.contains("comms"), "should display comms extension")

      // 2. Send comms message
      val sendOutput = runner.run(
        CliCommand.CommsSend(
          crystalId = "c-1",
          from = "usr_oswaldo",
          to = List("agt_alice"),
          subject = "Task Review",
          body = "Phase 3 implementation looks great",
          channel = "default",
          replyTo = None,
        ),
      )
      assert(sendOutput.isRight, "CommsSend should succeed")

      // 3. Read recipient inbox
      val inboxOutput = runner.run(
        CliCommand.CommsList(
          crystalId = "c-1",
          inboxRecipient = Some("agt_alice"),
          outboxSender = None,
          limit = None,
          jsonOutput = false,
        ),
      )
      assert(inboxOutput.isRight, "CommsList should succeed")
      assert(inboxOutput.toOption.get.contains("Task Review"), "inbox should contain sent message")

      // 3b. Initialize a crystal and send comms message with recordDag = true
      val initRes = runner.run(
        CliCommand.Init(
          name = "c-comms-dag",
          goalTitle = "Test Comms DAG Recording",
          intent = None,
        ),
      )
      assert(initRes.isRight, "Init should succeed")
      val crystalId = "c-comms-dag"
      val sendWithDag = runner.run(
        CliCommand.CommsSend(
          crystalId = crystalId,
          from = "usr_oswaldo",
          to = List("agt_alice"),
          subject = "Architecture Decision",
          body = "Use modular extensions for comms",
          channel = "general",
          replyTo = None,
          recordDag = true,
        ),
      )
      assert(sendWithDag.isRight, "CommsSend with recordDag should succeed")
      assert(
        sendWithDag.toOption.get.contains("recorded in DAG"),
        "response should indicate DAG recording",
      )

      val loaded = store.load(crystalId)
      assert(loaded.isRight, "crystal should load")
      val crystal  = loaded.toOption.get
      val lastNode = crystal.dag.nodes.lastOption
      assert(lastNode.isDefined, "crystal should have DAG nodes")
      assertEquals(lastNode.get.actorId, "usr_oswaldo")
      assertEquals(lastNode.get.kind, ccrystal.core.model.NodeKind.HumanPrompt)
      assert(
        lastNode.get.contentSummary.contains("Architecture Decision"),
        "node summary should include subject",
      )
      assertEquals(lastNode.get.metadata.get("extension"), Some("comms"))
      assert(
        lastNode.get.metadata.contains("comms_message_id"),
        "node metadata should contain comms_message_id",
      )

      // 4. Test ExtensionRun subprocess execution
      val sampleDir = tempCave / "extensions" / "sample_runner"
      os.makeDir.all(sampleDir)
      os.write(
        sampleDir / "extension.json",
        """{
          |  "id": "sample_runner",
          |  "name": "Sample Runner Extension",
          |  "version": "1.0.0",
          |  "substrate": "declarative",
          |  "scope": "cave",
          |  "enabled": true,
          |  "entrypoint": "run.sh"
          |}""".stripMargin,
      )
      val scriptFile = sampleDir / "run.sh"
      os.write(scriptFile, "#!/usr/bin/env sh\necho \"Executed with: $*\"\n")
      os.perms.set(scriptFile, "rwxr-xr-x")

      val runOutput =
        runner.run(CliCommand.ExtensionRun("sample_runner", Some("c-1"), List("--flag", "foo")))
      assert(runOutput.isRight, "ExtensionRun should succeed")
      assert(
        runOutput.toOption.get.contains("Executed with: --flag foo"),
        "subprocess output should match",
      )

      // 5. Test ExtensionSkill resolution
      val commsSkill = runner.run(CliCommand.ExtensionSkill("comms", None))
      assert(commsSkill.isRight, "comms skill should succeed")
      assert(commsSkill.toOption.get.contains("Crystal Comms"), "should return comms markdown")

      os.write(sampleDir / "SKILL.md", "# Sample Runner Skill\n\nInstructions for sample runner.")
      val sampleSkill = runner.run(CliCommand.ExtensionSkill("sample_runner", Some("c-1")))
      assert(sampleSkill.isRight, "sample_runner skill should succeed")
      assertEquals(
        sampleSkill.toOption.get,
        "# Sample Runner Skill\n\nInstructions for sample runner.",
      )
    }
