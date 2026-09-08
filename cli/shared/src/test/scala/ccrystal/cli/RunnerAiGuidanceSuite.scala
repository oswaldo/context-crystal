package ccrystal.cli

import munit.FunSuite
import ccrystal.core.model.*

class RunnerAiGuidanceSuite extends FunSuite:

  test("Runner.run(CliCommand.ForAi) emits structured, token-efficient agent guidance"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)

    val result = runner.run(CliCommand.ForAi)
    assert(result.isRight, "runner.run(ForAi) should succeed")
    val text = result.toOption.get

    // 1. PII Protection & Privacy
    assert(
      text.contains("Personally Identifiable Information") || text.contains("PII"),
      "Must mention PII protection",
    )
    assert(
      text.contains("git config"),
      "Must warn against scraping git config user.name without consent",
    )

    // 2. Canonical Entity Conventions
    assert(text.contains("usr_"), "Must prescribe usr_ prefix for humans")
    assert(text.contains("agt_"), "Must prescribe agt_ prefix for agents")
    assert(text.contains("mdl_"), "Must prescribe mdl_ prefix for models")
    assert(text.contains("tool_"), "Must prescribe tool_ prefix for tools")
    assert(text.contains("sys_"), "Must prescribe sys_ prefix for system")

    // 3. Operator Preference & Persistent Memory
    assert(
      text.contains("memory") || text.contains("preference"),
      "Must instruct checking operator memory/preferences",
    )

    // 4. Operational Best Practices
    assert(text.contains("batch") || text.contains("MCP"), "Must recommend MCP/batching execution")

    // 5. Discriminator Footer
    assert(
      text.contains("meant for non-humans") && text.contains("ccrystal --help"),
      "Must contain footer pointing humans to --help",
    )

  test("Runner.run(CliCommand.EntityConventions) emits conventions table and PII recommendations"):
    val store  = new InMemoryCrystalStore()
    val runner = new Runner(store)

    val res = runner.run(CliCommand.EntityConventions)
    assert(res.isRight, "runner.run(EntityConventions) should succeed")
    val text = res.toOption.get

    assert(text.contains("usr_"), "Must contain usr_ prefix")
    assert(text.contains("agt_"), "Must contain agt_ prefix")
    assert(text.contains("mdl_"), "Must contain mdl_ prefix")
    assert(text.contains("tool_"), "Must contain tool_ prefix")
    assert(text.contains("sys_"), "Must contain sys_ prefix")
    assert(
      text.contains("PII") || text.contains("Personally Identifiable Information"),
      "Must contain PII guidance",
    )
    assert(text.contains("john"), "Must include synthetic example handle")
