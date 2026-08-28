package ccrystal.cli

import ccrystal.core.store.FsCrystalStore
import java.nio.file.Paths

object Main:
  def main(args: Array[String]): Unit =
    val rootStore = Paths.get(".ccrystals")
    val store = FsCrystalStore(rootStore)
    val runner = Runner(store)

    if args.isEmpty then
      println("Usage: ccrystal <subcommand> [options]")
      System.exit(1)

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
