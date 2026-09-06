import sbtcrossproject.CrossPlugin.autoImport.{crossProject, CrossType}

val scala3Version   = "3.9.0"
val circeVersion    = "0.14.16"
val munitVersion    = "1.3.6"
val declineVersion  = "2.6.2"

ThisBuild / scalaVersion := scala3Version
ThisBuild / organization := "org.contextcrystal"
ThisBuild / version      := "0.1.0-SNAPSHOT"
ThisBuild / licenses     := List("MIT" -> new java.net.URI("https://opensource.org/licenses/MIT").toURL)
ThisBuild / homepage     := Some(new java.net.URI("https://github.com/oswaldo/context-crystal").toURL)

lazy val root = project.in(file("."))
  .aggregate(core.jvm, core.native, core.js, cli.jvm, cli.native)
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
  .jvmSettings()
  .nativeSettings()
  .jsSettings(
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) }
  )

lazy val cli = crossProject(JVMPlatform, NativePlatform)
  .crossType(CrossType.Full)
  .in(file("cli"))
  .dependsOn(core)
  .settings(
    name := "ccrystal-cli",
    libraryDependencies ++= Seq(
      "com.monovore"  %%% "decline" % declineVersion,
      "org.scalameta" %%% "munit"   % munitVersion % Test
    ),
    testFrameworks += new TestFramework("munit.Framework"),
    scalacOptions ++= Seq(
      "-deprecation",
      "-feature",
      "-unchecked",
      "-language:strictEquality"
    ),
    Compile / mainClass := Some("ccrystal.cli.Main")
  )
  .jvmSettings()
  .nativeSettings()

ThisBuild / semanticdbEnabled := true
ThisBuild / semanticdbVersion := scalafixSemanticdb.revision
