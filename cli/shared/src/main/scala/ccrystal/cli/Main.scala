package ccrystal.cli

import ccrystal.core.store.FsCrystalStore
import java.nio.file.Paths
import scala.io.Source

object Main:
  def main(args: Array[String]): Unit =
    val (cliStoreOpt, remainingArgsList) = StoreResolver.extractStoreArg(args.toIndexedSeq)
    val remainingArgs                    = remainingArgsList.toArray
    val rootStore                        = StoreResolver.resolveStorePath(cliStoreOpt)
    val store                            = FsCrystalStore(rootStore)
    val runner                           = Runner(store)

    if remainingArgs.isEmpty then
      println(
        """Context Crystal: Zero-overhead context & DAG lifecycle engine
          |
          |Usage:
          |  ccrystal [options] <subcommand> [command-options]
          |  ccrystal [--store <path>] "<cmd1>; <cmd2>; ..."
          |  ccrystal [--store <path>] --batch <script-file>
          |
          |Global Options:
          |  --store <path>   Override context store directory (or set CCRYSTAL_STORE)
          |
          |Run 'ccrystal --help' for a full list of available subcommands and options.
          |""".stripMargin.trim,
      )
      System.exit(0)

    val isChained  = remainingArgs.length == 1 && remainingArgs(0).contains(";")
    val isBatchCmd = remainingArgs.length >= 2 && remainingArgs(0) == "batch"

    if isChained || isBatchCmd then
      val chain =
        if remainingArgs(0) == "batch" then remainingArgs.drop(1).mkString(" ")
        else remainingArgs(0)
      BatchExecutor.executeChain(chain, runner) match
        case Right(outputs) =>
          outputs.foreach(println)
          System.exit(0)
        case Left(err) =>
          System.err.println(s"Batch execution error: $err")
          System.exit(1)
    else if remainingArgs(0) == "--batch" then
      val scriptContent =
        if remainingArgs.length > 1 then Source.fromFile(remainingArgs(1)).mkString
        else Source.stdin.mkString

      val chain = scriptContent.linesIterator
        .map(_.trim)
        .filterNot(l => l.isEmpty || l.startsWith("#"))
        .mkString("; ")
      BatchExecutor.executeChain(chain, runner) match
        case Right(outputs) =>
          outputs.foreach(println)
          System.exit(0)
        case Left(err) =>
          System.err.println(s"Batch execution error: $err")
          System.exit(1)
    else
      CommandParser.parseWithHelp(remainingArgs.toList) match
        case Right(cmd) =>
          runner.run(cmd) match
            case Right(output) =>
              if output.nonEmpty then println(output)
              System.exit(0)
            case Left(err) =>
              System.err.println(s"Error: $err")
              System.exit(1)
        case Left(help) =>
          if help.errors.isEmpty then
            println(help)
            System.exit(0)
          else
            System.err.println(help)
            System.err.println(
              "\nRun 'ccrystal --help' for a full list of available subcommands and options.",
            )
            System.exit(1)
