package ccrystal.cli

import java.nio.file.{Path, Paths}

object StoreResolver:

  def extractStoreArg(args: collection.Seq[String]): (Option[String], List[String]) =
    @scala.annotation.tailrec
    def loop(
        remaining: List[String],
        accStore: Option[String],
        accRest: List[String],
    ): (Option[String], List[String]) =
      remaining match
        case Nil =>
          (accStore, accRest.reverse)
        case "--store" :: storePath :: tail if !storePath.startsWith("--") =>
          loop(tail, Some(storePath), accRest)
        case "--store" :: tail =>
          loop(tail, accStore, accRest)
        case head :: tail =>
          loop(tail, accStore, head :: accRest)

    loop(args.toList, None, Nil)

  def resolveStorePath(
      cliStoreOpt: Option[String],
      envMap: Map[String, String],
      workingDir: os.Path,
  ): os.Path =
    // 1. Explicit CLI argument
    cliStoreOpt.filter(_.trim.nonEmpty) match
      case Some(cliPath) =>
        os.Path(cliPath, workingDir)
      case None =>
        // 2. Environment variable
        envMap.get("CCRYSTAL_STORE").filter(_.trim.nonEmpty) match
          case Some(envPath) =>
            os.Path(envPath, workingDir)
          case None =>
            // 3. Workspace pointer file (.ccrystal-store)
            val pointerFile = workingDir / ".ccrystal-store"
            if os.isFile(pointerFile) then
              val lineOpt =
                try
                  val content = os.read(pointerFile)
                  content.linesIterator.map(_.trim).find(_.nonEmpty)
                catch case _: Throwable => None

              lineOpt match
                case Some(line) =>
                  os.Path(line, workingDir)
                case None =>
                  workingDir / ".ccrystals"
            else
              // 4. Default fallback
              workingDir / ".ccrystals"

  def resolveStorePath(
      cliStoreOpt: Option[String],
      envMap: Map[String, String] = sys.env,
      workingDir: Path = Paths.get("."),
  ): Path =
    val workOs = os.Path(workingDir.toAbsolutePath.normalize())
    resolveStorePath(cliStoreOpt, envMap, workOs).toNIO
