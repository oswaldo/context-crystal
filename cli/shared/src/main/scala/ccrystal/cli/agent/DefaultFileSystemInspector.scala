package ccrystal.cli.agent

import ccrystal.core.agent.FileSystemInspector
import java.io.File

object DefaultFileSystemInspector extends FileSystemInspector:

  override def fileExists(path: String): Boolean =
    try
      val p = os.Path(path, os.pwd)
      os.isFile(p)
    catch case _: Throwable => false

  override def directoryExists(path: String): Boolean =
    try
      val p = os.Path(path, os.pwd)
      os.isDir(p)
    catch case _: Throwable => false

  override def isWritable(path: String): Boolean =
    try
      val p = os.Path(path, os.pwd)
      p.toIO.canWrite
    catch case _: Throwable => false

  override def isExecutable(path: String): Boolean =
    try
      val p = os.Path(path, os.pwd)
      p.toIO.canExecute
    catch case _: Throwable => false

  override def readFile(path: String): Option[String] =
    try
      val p = os.Path(path, os.pwd)
      if os.isFile(p) then Some(os.read(p))
      else None
    catch case _: Throwable => None

  override def findInPath(binaryName: String): Option[String] =
    val pathEnv   = sys.env.getOrElse("PATH", "")
    val separator = File.pathSeparator
    pathEnv
      .split(separator)
      .iterator
      .filter(_.trim.nonEmpty)
      .map(dir => os.Path(dir, os.pwd) / binaryName)
      .find(p => os.isFile(p) && p.toIO.canExecute)
      .map(_.toString)

  override def isSymlink(path: String): Boolean =
    try
      val p = os.Path(path, os.pwd)
      os.isLink(p)
    catch case _: Throwable => false
