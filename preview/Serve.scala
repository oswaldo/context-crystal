package ccrystal.preview

import cask.model.Response

case class MinimalRoutes()(implicit cc: castor.Context, log: cask.Logger) extends cask.Routes:
  @cask.get("/")
  def root(): Response[String] =
    cask.Redirect("/index.html")

  @cask.staticFiles("/index.html")
  def index() = "index.html"

  @cask.staticFiles("/main.js")
  def mainJs() = "main.js"

  @cask.staticFiles("/styles.css")
  def styles() = "styles.css"

  @cask.staticFiles("/llms.txt")
  def llms() = "llms.txt"

  @cask.staticFiles("/llms-full.txt")
  def llmsFull() = "llms-full.txt"

  @cask.staticFiles("/robots.txt")
  def robots() = "robots.txt"

  initialize()

object Serve extends cask.Main:
  val allRoutes = Seq(MinimalRoutes())
  println("Server started at http://localhost:8080")
  println("Press Ctrl+C to stop")
end Serve
