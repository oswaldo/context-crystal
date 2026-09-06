package ccrystal.cli

import ccrystal.core.store.FsCrystalStore
import java.nio.file.Paths
import scala.io.Source

object Main:
  def main(args: Array[String]): Unit =
    val rootStore = Paths.get(".ccrystals")
    val store     = FsCrystalStore(rootStore)
    val runner    = Runner(store)

    if args.isEmpty then
      println(
        """Context Crystal: Zero-overhead context & DAG lifecycle engine
          |
          |Usage:
          |  ccrystal <subcommand> [options]
          |  ccrystal "<cmd1>; <cmd2>; ..."
          |  ccrystal --batch <script-file>
          |
          |Run 'ccrystal --help' for a full list of available subcommands and options.
          |""".stripMargin.trim,
      )
      System.exit(0)

    if args.length == 1 && args(0).contains(";") then
      // Chained execution
      BatchExecutor.executeChain(args(0), runner) match
        case Right(outputs) =>
          outputs.foreach(println)
          System.exit(0)
        case Left(err) =>
          System.err.println(s"Batch execution error: $err")
          System.exit(1)
    else if args(0) == "--batch" then
      val scriptContent =
        if args.length > 1 then Source.fromFile(args(1)).mkString
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
      CommandParser.parseWithHelp(args.toList) match
        case Right(cmd) =>
          runner.run(cmd) match
            case Right(output) =>
              println(output)
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
