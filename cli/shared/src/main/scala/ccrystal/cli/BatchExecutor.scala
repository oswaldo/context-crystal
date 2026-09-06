package ccrystal.cli

object BatchExecutor:

  def splitCommands(chain: String): List[List[String]] =
    val parts = chain.split(";").map(_.trim).filter(_.nonEmpty).toList
    parts.map(parseCommandLine)

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
    val outputs         = List.newBuilder[String]

    var error: Option[String] = None
    var idx                   = 0

    while idx < commandArgsList.size && error.isEmpty do
      val args = commandArgsList(idx)
      CommandParser.parse(args) match
        case Right(cmd) =>
          runner.run(cmd) match
            case Right(out) => outputs += out
            case Left(err) =>
              error = Some(s"Error at command #${idx + 1} (${args.mkString(" ")}): $err")
        case Left(parseErr) =>
          error = Some(s"Syntax error at command #${idx + 1} (${args.mkString(" ")}): $parseErr")
      idx += 1

    error match
      case Some(err) => Left(err)
      case None      => Right(outputs.result())
