import sbtcrossproject.CrossPlugin.autoImport.{crossProject, CrossType}

val scala3Version        = "3.9.0"
val circeVersion         = "0.14.16"
val munitVersion         = "1.3.6"
val declineVersion       = "2.6.2"
val scalaJavaTimeVersion = "2.6.0"

ThisBuild / scalaVersion := scala3Version
ThisBuild / organization := "io.github.oswaldo"
ThisBuild / licenses     := List("MIT" -> new java.net.URI("https://opensource.org/licenses/MIT").toURL)
ThisBuild / homepage     := Some(new java.net.URI("https://github.com/oswaldo/context-crystal").toURL)
ThisBuild / developers   := List(
  Developer(
    id = "oswaldo",
    name = "Oswaldo Dantas",
    email = "77538+oswaldo@users.noreply.github.com",
    url = new java.net.URI("https://github.com/oswaldo").toURL
  )
)
ThisBuild / scmInfo := Some(
  ScmInfo(
    new java.net.URI("https://github.com/oswaldo/context-crystal").toURL,
    "scm:git:git@github.com:oswaldo/context-crystal.git"
  )
)
ThisBuild / versionScheme := Some("early-semver")

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
      "io.circe"         %%% "circe-core"       % circeVersion,
      "io.circe"         %%% "circe-generic"    % circeVersion,
      "io.circe"         %%% "circe-parser"     % circeVersion,
      "io.github.cquiroz" %%% "scala-java-time" % scalaJavaTimeVersion,
      "org.scalameta"    %%% "munit"            % munitVersion % Test,
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
    Compile / unmanagedSourceDirectories += (ThisBuild / baseDirectory).value / "core" / "jvm-native" / "src" / "main" / "scala",
    Test / unmanagedSourceDirectories += (ThisBuild / baseDirectory).value / "core" / "jvm-native" / "src" / "test" / "scala"
  )
  .nativeSettings(
    Compile / unmanagedSourceDirectories += (ThisBuild / baseDirectory).value / "core" / "jvm-native" / "src" / "main" / "scala",
    Test / unmanagedSourceDirectories += (ThisBuild / baseDirectory).value / "core" / "jvm-native" / "src" / "test" / "scala",
    publish / skip := true
  )
  .jsSettings(
    scalaJSLinkerConfig ~= { _.withModuleKind(ModuleKind.CommonJSModule) },
    publish / skip := true
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
  .nativeSettings(
    publish / skip := true
  )

ThisBuild / semanticdbEnabled := true
ThisBuild / semanticdbVersion := scalafixSemanticdb.revision
