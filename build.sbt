import sbtcrossproject.CrossPlugin.autoImport.{crossProject, CrossType}

val scala3Version = "3.3.4"
val circeVersion  = "0.14.10"
val munitVersion  = "1.0.4"

ThisBuild / scalaVersion := scala3Version
ThisBuild / organization := "org.contextcrystal"
ThisBuild / version      := "0.1.0-SNAPSHOT"

lazy val root = project.in(file("."))
  .aggregate(core.jvm, core.native, core.js)
  .settings(
    name := "context-crystal-root",
    publish / skip := true
  )

lazy val core = crossProject(JVMPlatform, NativePlatform, JSPlatform)
  .crossType(CrossType.Full)
  .in(file("core"))
  .settings(
    name := "ccrystal-core",
    libraryDependencies ++= Seq(
      "io.circe" %%% "circe-core"    % circeVersion,
      "io.circe" %%% "circe-generic" % circeVersion,
      "io.circe" %%% "circe-parser"  % circeVersion,
      "org.scalameta" %%% "munit"    % munitVersion % Test
    ),
    testFrameworks += new TestFramework("munit.Framework"),
    scalacOptions ++= Seq(
      "-deprecation",
      "-feature",
      "-unchecked",
      "-language:strictEquality"
    )
  )
  .jvmSettings(
    // JVM specific configuration
  )
  .nativeSettings(
    // Scala Native 0.5+ configuration
  )
  .jsSettings(
    // Scala.js configuration
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) }
  )
