package ccrystal.cli

object BatchExecutor:

  def splitCommands(chain: String): List[List[String]] =
    val parts     = List.newBuilder[String]
    val sb        = new java.lang.StringBuilder()
    var inQuotes  = false
    var quoteChar = ' '
    var i         = 0

    while i < chain.length do
      val c = chain.charAt(i)
      if (c == '"' || c == '\'') && !inQuotes then
        inQuotes = true
        quoteChar = c
        sb.append(c)
      else if inQuotes && c == quoteChar then
        inQuotes = false
        sb.append(c)
      else if !inQuotes && c == ';' then
        val trimmed = sb.toString.trim
        if trimmed.nonEmpty then parts += trimmed
        sb.setLength(0)
      else sb.append(c)
      i += 1

    val lastTrimmed = sb.toString.trim
    if lastTrimmed.nonEmpty then parts += lastTrimmed

    parts.result().map(parseCommandLine)

  def parseCommandLine(line: String): List[String] =
    val tokens    = List.newBuilder[String]
    val sb        = new java.lang.StringBuilder()
    var inQuotes  = false
    var quoteChar = ' '
    var i         = 0

    while i < line.length do
      val c = line.charAt(i)
      if (c == '"' || c == '\'') && !inQuotes then
        inQuotes = true
        quoteChar = c
      else if inQuotes && c == quoteChar then inQuotes = false
      else if !inQuotes && Character.isWhitespace(c) then
        if sb.length() > 0 then
          tokens += sb.toString
          sb.setLength(0)
      else sb.append(c)
      i += 1

    if sb.length() > 0 then tokens += sb.toString

    tokens.result()

  def executeChain(chain: String, runner: Runner): Either[String, List[String]] =
    val commandArgsList = splitCommands(chain)
    val parsedCommands  = List.newBuilder[(Int, List[String], CliCommand)]

    var validationError: Option[String] = None
    var idx                             = 0

    while idx < commandArgsList.size && validationError.isEmpty do
      val args = commandArgsList(idx)
      CommandParser.parse(args) match
        case Right(cmd) =>
          cmd match
            case CliCommand.Delete(_, false) =>
              validationError = Some(
                s"Destructive command 'delete' in batch mode requires --force (-f) flag at command #${idx + 1} (${args.mkString(" ")})",
              )
            case CliCommand.Prune(_, _, _, false, false) =>
              validationError = Some(
                s"Destructive command 'prune' in batch mode requires --force (-f) or --dry-run flag at command #${idx + 1} (${args.mkString(" ")})",
              )
            case CliCommand.EntityDeregister(_, false) =>
              validationError = Some(
                s"Destructive command 'entity deregister' in batch mode requires --force (-f) flag at command #${idx + 1} (${args.mkString(" ")})",
              )
            case _ =>
              parsedCommands += ((idx, args, cmd))
        case Left(parseErr) =>
          validationError = Some(
            s"Syntax error at command #${idx + 1} (${args.mkString(" ")}): $parseErr",
          )
      idx += 1

    validationError match
      case Some(err) => Left(err)
      case None =>
        val commands                  = parsedCommands.result()
        val outputs                   = List.newBuilder[String]
        var execError: Option[String] = None
        var execIdx                   = 0

        while execIdx < commands.size && execError.isEmpty do
          val (cmdIdx, args, cmd) = commands(execIdx)
          runner.run(cmd) match
            case Right(out) => outputs += out
            case Left(err) =>
              execError = Some(s"Error at command #${cmdIdx + 1} (${args.mkString(" ")}): $err")
          execIdx += 1

        execError match
          case Some(err) => Left(err)
          case None      => Right(outputs.result())
