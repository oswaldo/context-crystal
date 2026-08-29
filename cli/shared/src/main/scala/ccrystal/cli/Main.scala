package ccrystal.cli

import ccrystal.core.store.FsCrystalStore
import java.nio.file.Paths
import scala.io.Source

object Main:
  def main(args: Array[String]): Unit =
    val rootStore = Paths.get(".ccrystals")
    val store = FsCrystalStore(rootStore)
    val runner = Runner(store)

    if args.isEmpty then
      println("Usage: ccrystal <subcommand> [options]")
      println("       ccrystal --batch <script-file>")
      println("       ccrystal \"<cmd1>; <cmd2>; <cmd3>\"")
      System.exit(1)

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
      val scriptContent = if args.length > 1 then
        Source.fromFile(args(1)).mkString
      else
        Source.stdin.mkString

      val chain = scriptContent.linesIterator.map(_.trim).filterNot(l => l.isEmpty || l.startsWith("#")).mkString("; ")
      BatchExecutor.executeChain(chain, runner) match
        case Right(outputs) =>
          outputs.foreach(println)
          System.exit(0)
        case Left(err) =>
          System.err.println(s"Batch execution error: $err")
          System.exit(1)
    else
      CommandParser.parse(args.toList) match
        case Right(cmd) =>
          runner.run(cmd) match
            case Right(output) =>
              println(output)
              System.exit(0)
            case Left(err) =>
              System.err.println(s"Error: $err")
              System.exit(1)
        case Left(parseErr) =>
          System.err.println(s"Command parse error: $parseErr")
          System.exit(1)
