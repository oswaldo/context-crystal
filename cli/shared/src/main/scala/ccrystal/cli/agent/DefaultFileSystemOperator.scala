package ccrystal.cli.agent

import ccrystal.core.agent.FileSystemOperator
import java.nio.charset.StandardCharsets
import java.nio.file.{Files, Paths, StandardCopyOption}

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
      Files.createDirectories(Paths.get(path))
      Right(())
    catch case e: Throwable => Left(s"Failed to create directory '$path': ${e.getMessage}")

  override def writeFile(path: String, content: String): Either[String, Unit] =
    try
      Files.write(Paths.get(path), content.getBytes(StandardCharsets.UTF_8))
      Right(())
    catch case e: Throwable => Left(s"Failed to write file '$path': ${e.getMessage}")

  override def copyFile(source: String, destination: String): Either[String, Unit] =
    try
      Files.copy(Paths.get(source), Paths.get(destination), StandardCopyOption.REPLACE_EXISTING)
      Right(())
    catch
      case e: Throwable =>
        Left(s"Failed to copy file from '$source' to '$destination': ${e.getMessage}")

  override def atomicWrite(path: String, content: String): Either[String, Unit] =
    try
      val targetPath = Paths.get(path)
      val tempPath   = Paths.get(s"$path.tmp-${System.currentTimeMillis()}")
      Files.write(tempPath, content.getBytes(StandardCharsets.UTF_8))
      Files.move(tempPath, targetPath, StandardCopyOption.REPLACE_EXISTING)
      Right(())
    catch case e: Throwable => Left(s"Failed to write file atomically to '$path': ${e.getMessage}")
