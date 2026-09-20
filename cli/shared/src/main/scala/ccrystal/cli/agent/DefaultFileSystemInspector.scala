package ccrystal.cli.agent

import ccrystal.core.agent.FileSystemInspector
import java.io.File
import java.nio.charset.StandardCharsets
import java.nio.file.{Files, Paths}

object DefaultFileSystemInspector extends FileSystemInspector:

  override def fileExists(path: String): Boolean =
    Files.isRegularFile(Paths.get(path))

  override def directoryExists(path: String): Boolean =
    Files.isDirectory(Paths.get(path))

  override def isWritable(path: String): Boolean =
    Files.isWritable(Paths.get(path))

  override def isExecutable(path: String): Boolean =
    Files.isExecutable(Paths.get(path))

  override def readFile(path: String): Option[String] =
    val p = Paths.get(path)
    if Files.isRegularFile(p) then
      try Some(new String(Files.readAllBytes(p), StandardCharsets.UTF_8))
      catch case _: Throwable => None
    else None

  override def findInPath(binaryName: String): Option[String] =
    val pathEnv   = sys.env.getOrElse("PATH", "")
    val separator = File.pathSeparator
    pathEnv
      .split(separator)
      .iterator
      .filter(_.trim.nonEmpty)
      .map(dir => Paths.get(dir).resolve(binaryName))
      .find(p => Files.isRegularFile(p) && Files.isExecutable(p))
      .map(_.toAbsolutePath.toString)
