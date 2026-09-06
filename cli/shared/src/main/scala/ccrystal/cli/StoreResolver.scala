package ccrystal.cli

import java.nio.file.{Files, Path, Paths}

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
      envMap: Map[String, String] = sys.env,
      workingDir: Path = Paths.get("."),
  ): Path =
    // 1. Explicit CLI argument
    cliStoreOpt.filter(_.trim.nonEmpty) match
      case Some(cliPath) =>
        Paths.get(cliPath)
      case None =>
        // 2. Environment variable
        envMap.get("CCRYSTAL_STORE").filter(_.trim.nonEmpty) match
          case Some(envPath) =>
            Paths.get(envPath)
          case None =>
            // 3. Workspace pointer file (.ccrystal-store)
            val pointerFile = workingDir.resolve(".ccrystal-store")
            if Files.isRegularFile(pointerFile) then
              val lineOpt =
                try
                  val content = new String(Files.readAllBytes(pointerFile), "UTF-8")
                  content.linesIterator.map(_.trim).find(_.nonEmpty)
                catch case _: Throwable => None

              lineOpt match
                case Some(line) =>
                  val p = Paths.get(line)
                  if p.isAbsolute then p else workingDir.resolve(p).normalize()
                case None =>
                  workingDir.resolve(".ccrystals")
            else
              // 4. Default fallback
              workingDir.resolve(".ccrystals")
