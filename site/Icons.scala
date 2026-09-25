package ccrystal.site

import com.raquo.laminar.api.L.*

object Icons:
  def claude(size: Int = 18): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "currentColor",
      svg.className := "client-brand-svg claude-icon",
      svg.path(
        svg.d := "M13.5 2.5c-.3-.6-1.1-.8-1.7-.5l-1.3.8-1.3-.8c-.6-.3-1.4-.1-1.7.5l-1 1.7-1.8.4c-.7.1-1.2.7-1.1 1.4l.2 1.9-1.4 1.3c-.5.5-.6 1.3-.2 1.9l1 1.6-.6 1.8c-.2.7.1 1.4.7 1.7l1.7.8.4 1.8c.2.7.8 1.1 1.5 1l1.9-.3 1.3 1.4c.5.5 1.3.6 1.9.2l1.6-1 1.8.6c.7.2 1.4-.1 1.7-.7l.8-1.7 1.8-.4c.7-.2 1.1-.8 1-1.5l-.3-1.9 1.4-1.3c.5-.5.6-1.3.2-1.9l-1-1.6.6-1.8c.2-.7-.1-1.4-.7-1.7l-1.7-.8-.4-1.8c-.2-.7-.8-1.1-1.5-1l-1.9.3-1.3-1.4z M12 6.5a5.5 5.5 0 110 11 5.5 5.5 0 010-11z"
      )
    )

  def cursor(size: Int = 18): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "none",
      svg.stroke := "currentColor",
      svg.strokeWidth := "1.8",
      svg.strokeLineJoin := "round",
      svg.className := "client-brand-svg cursor-icon",
      svg.path(svg.d := "M12 2.5 L20.5 7.4 L12 12.3 L3.5 7.4 Z"),
      svg.path(svg.d := "M3.5 7.4 L3.5 16.6 L12 21.5 L12 12.3 Z"),
      svg.path(svg.d := "M20.5 7.4 L20.5 16.6 L12 21.5 L12 12.3 Z")
    )

  def zed(size: Int = 18): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "currentColor",
      svg.className := "client-brand-svg zed-icon",
      svg.path(svg.d := "M3.5 5.5h17v3.2L10.2 15.3H20.5v3.2H3.5v-3.2L13.8 8.7H3.5V5.5z")
    )

  def github(size: Int = 16): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "currentColor",
      svg.className := "github-svg-icon",
      svg.path(
        svg.d := "M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      )
    )

  def clock(size: Int = 28): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "none",
      svg.stroke := "currentColor",
      svg.strokeWidth := "2",
      svg.strokeLineCap := "round",
      svg.strokeLineJoin := "round",
      svg.className := "card-svg-icon amnesia-icon",
      svg.circle(svg.cx := "12", svg.cy := "12", svg.r := "9"),
      svg.polyline(svg.points := "12,7 12,12 15,14")
    )

  def debris(size: Int = 28): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "none",
      svg.stroke := "currentColor",
      svg.strokeWidth := "2",
      svg.strokeLineCap := "round",
      svg.strokeLineJoin := "round",
      svg.className := "card-svg-icon debris-icon",
      svg.path(svg.d := "M3 6h18"),
      svg.path(svg.d := "M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"),
      svg.path(svg.d := "M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"),
      svg.path(svg.d := "M10 11v6"),
      svg.path(svg.d := "M14 11v6")
    )

  def tokenBurn(size: Int = 28): SvgElement =
    svg.svg(
      svg.viewBox := "0 0 24 24",
      svg.width := s"${size}px",
      svg.height := s"${size}px",
      svg.fill := "none",
      svg.stroke := "currentColor",
      svg.strokeWidth := "2",
      svg.strokeLineCap := "round",
      svg.strokeLineJoin := "round",
      svg.className := "card-svg-icon burn-icon",
      svg.path(svg.d := "M12 2c0 4-4 6-4 10a4 4 0 008 0c0-4-4-6-4-10z"),
      svg.path(svg.d := "M12 14a2 2 0 00-2 2c0 1.1.9 2 2 2s2-.9 2-2a2 2 0 00-2-2z")
    )
