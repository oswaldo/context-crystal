package ccrystal.site

import com.raquo.laminar.api.L.{*, given}
import org.scalajs.dom

object Main:
  def main(args: Array[String]): Unit =
    lazy val appContainer = dom.document.querySelector("#app")
    renderOnDomContentLoaded(appContainer, appElement)

  def appElement: HtmlElement =
    div(
      className := "portal-root",
      h1("Context Crystal Launch Portal"),
    )
