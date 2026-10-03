package ccrystal.cli.agent

import ccrystal.core.agent.FileSystemOperator

object DefaultFileSystemOperator extends FileSystemOperator:

  override def fileExists(path: String): Boolean =
    DefaultFileSystemInspector.fileExists(path)

  override def directoryExists(path: String): Boolean =
    DefaultFileSystemInspector.directoryExists(path)

  override def isWritable(path: String): Boolean =
    DefaultFileSystemInspector.isWritable(path)

  override def isExecutable(path: String): Boolean =
    DefaultFileSystemInspector.isExecutable(path)

  override def readFile(path: String): Option[String] =
    DefaultFileSystemInspector.readFile(path)

  override def findInPath(binaryName: String): Option[String] =
    DefaultFileSystemInspector.findInPath(binaryName)

  override def createDirectories(path: String): Either[String, Unit] =
    try
      os.makeDir.all(os.Path(path, os.pwd))
      Right(())
    catch case e: Throwable => Left(s"Failed to create directory '$path': ${e.getMessage}")

  override def writeFile(path: String, content: String): Either[String, Unit] =
    try
      os.write.over(os.Path(path, os.pwd), content, createFolders = true)
      Right(())
    catch case e: Throwable => Left(s"Failed to write file '$path': ${e.getMessage}")

  override def copyFile(source: String, destination: String): Either[String, Unit] =
    try
      val src  = os.Path(source, os.pwd)
      val dest = os.Path(destination, os.pwd)
      os.copy.over(src, dest, createFolders = true)
      Right(())
    catch
      case e: Throwable =>
        Left(s"Failed to copy file from '$source' to '$destination': ${e.getMessage}")

  override def createSymlink(source: String, destination: String): Either[String, Unit] =
    try
      val src    = os.Path(source, os.pwd)
      val dest   = os.Path(destination, os.pwd)
      val parent = dest / os.up
      if !os.exists(parent) then os.makeDir.all(parent)
      if os.isLink(dest) || os.exists(dest) || os.isDir(dest) then os.remove(dest)
      os.symlink(dest, src)
      Right(())
    catch
      case e: Throwable =>
        val hint =
          if ccrystal.core.agent.OsFamily.current == ccrystal.core.agent.OsFamily.Windows then
            " Note: Symbolic links on Windows require Developer Mode or Administrator privileges; run without --symlink-skill to install by copy."
          else ""
        Left(s"Failed to create symlink from '$source' to '$destination': ${e.getMessage}.$hint")

  override def atomicWrite(path: String, content: String): Either[String, Unit] =
    try
      val target = os.Path(path, os.pwd)
      val parent = target / os.up
      if !os.exists(parent) then os.makeDir.all(parent)
      val temp = parent / s".${target.last}.tmp-${System.currentTimeMillis()}"
      try
        os.write.over(temp, content, createFolders = true)
        try os.move(temp, target, replaceExisting = true, atomicMove = true)
        catch case _: Throwable => os.move(temp, target, replaceExisting = true)
        Right(())
      catch
        case e: Throwable =>
          try os.remove(temp)
          catch case _: Throwable => ()
          throw e
    catch case e: Throwable => Left(s"Failed to write file atomically to '$path': ${e.getMessage}")
