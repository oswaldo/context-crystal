package ccrystal.site

import com.raquo.laminar.api.L.{*, given}

object TabQuickstart:
  def render(): HtmlElement =
    div(
      className := "tab-content tab-quickstart",
      sectionTag(
        className := "quickstart-intro",
        h2("Installation & Developer Quickstart"),
        p("Install the native zero-dependency binary in seconds or build from source using Scala Native."),
      ),

      // 1-Line Installer Section
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "1"),
          div(
            h3("Fast Installation (Linux & macOS)"),
            p("Choose your preferred installation method: curl bootstrap, Homebrew, or Coursier (cs):"),
          ),
        ),
        div(
          className := "install-methods-grid",
          div(
            className := "install-method-box",
            h4("Option A: Single-Line Curl Installer (Recommended)"),
            p("Verifies architecture, extracts official tarball, validates SHA256 checksums, and installs into `~/.local/bin/ccrystal`:"),
            div(
              className := "code-snippet-box",
              pre(code("curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh")),
              button(
                typ := "button",
                className := "snippet-copy-btn",
                child.text <-- State.copiedSnippet.signal.map {
                  case Some("qs-curl") => "✓ Copied"
                  case _ => "Copy"
                },
                onClick --> { _ =>
                  State.copyToClipboard("qs-curl", "curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh")
                },
              ),
            ),
          ),
          div(
            className := "install-method-box",
            h4("Option B: Homebrew (macOS & Linux)"),
            p("Install and manage updates via Homebrew package manager:"),
            div(
              className := "code-snippet-box",
              pre(code("brew install oswaldo/context-crystal/ccrystal")),
              button(
                typ := "button",
                className := "snippet-copy-btn",
                child.text <-- State.copiedSnippet.signal.map {
                  case Some("qs-brew") => "✓ Copied"
                  case _ => "Copy"
                },
                onClick --> { _ =>
                  State.copyToClipboard("qs-brew", "brew install oswaldo/context-crystal/ccrystal")
                },
              ),
            ),
          ),
          div(
            className := "install-method-box",
            h4("Option C: Coursier (Universal / Contrib Catalog)"),
            p("Install binary globally via official Coursier contrib channel:"),
            div(
              className := "code-snippet-box",
              pre(code("cs install --contrib ccrystal")),
              button(
                typ := "button",
                className := "snippet-copy-btn",
                child.text <-- State.copiedSnippet.signal.map {
                  case Some("qs-cs") => "✓ Copied"
                  case _ => "Copy"
                },
                onClick --> { _ =>
                  State.copyToClipboard("qs-cs", "cs install --contrib ccrystal")
                },
              ),
            ),
          ),
        ),
      ),

      // Pre-compiled Binaries Table
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "2"),
          div(
            h3("Direct Distribution Packages (GitHub Releases)"),
            p("Every release is packaged as an optimized `.tar.gz` bundle with Thin LTO, stripped binary, and SHA256SUMS integrity verification:"),
          ),
        ),
        div(
          className := "table-wrapper",
          table(
            className := "binary-table",
            thead(
              tr(
                th("Platform / Architecture"),
                th("Distribution Package"),
                th("Linking & Optimizations"),
                th("Download"),
              ),
            ),
            tbody(
              tr(
                td(strong("Linux x86_64")),
                td(code("ccrystal-v{version}-linux-x86_64.tar.gz")),
                td("Thin LTO, Immix GC, Static POSIX"),
                td(a(href := "https://github.com/oswaldo/context-crystal/releases/latest", target := "_blank", className := "btn-download", "Download ↗")),
              ),
              tr(
                td(strong("Linux aarch64 (ARM64)")),
                td(code("ccrystal-v{version}-linux-aarch64.tar.gz")),
                td("Thin LTO, Immix GC, ARM64 POSIX"),
                td(a(href := "https://github.com/oswaldo/context-crystal/releases/latest", target := "_blank", className := "btn-download", "Download ↗")),
              ),
              tr(
                td(strong("macOS Apple Silicon (aarch64)")),
                td(code("ccrystal-v{version}-macos-aarch64.tar.gz")),
                td("Thin LTO, Immix GC, Native M-series (macOS 14, 15, 26)"),
                td(a(href := "https://github.com/oswaldo/context-crystal/releases/latest", target := "_blank", className := "btn-download", "Download ↗")),
              ),
              tr(
                td(strong("macOS Intel (x86_64)")),
                td(code("ccrystal-v{version}-macos-x86_64.tar.gz")),
                td("Thin LTO, Immix GC, Intel 64-bit POSIX"),
                td(a(href := "https://github.com/oswaldo/context-crystal/releases/latest", target := "_blank", className := "btn-download", "Download ↗")),
              ),
              tr(
                td(strong("Windows (WSL2 Tier 2)")),
                td(code("ccrystal-v{version}-linux-x86_64.tar.gz")),
                td("WSL2 / Ubuntu Linux Subsystem"),
                td(a(href := "https://github.com/oswaldo/context-crystal/releases/latest", target := "_blank", className := "btn-download", "Download ↗")),
              ),
              tr(
                td(strong("Integrity Verification")),
                td(code("SHA256SUMS")),
                td("Cryptographic SHA-256 Digest for all assets"),
                td(a(href := "https://github.com/oswaldo/context-crystal/releases/latest", target := "_blank", className := "btn-download", "Verify ↗")),
              ),
            ),
          ),
        ),
      ),

      // Building From Source Section
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "3"),
          div(
            h3("Compile From Source (Scala Native 3.9 LTS)"),
            p("Requirements: JDK 21+, sbt 1.10+, and Clang/LLVM:"),
          ),
        ),
        div(
          className := "code-snippet-box",
          pre(
            code(
              """# Clone repository
git clone https://github.com/oswaldo/context-crystal.git && cd context-crystal

# Compile & link release native binary with Thin LTO
sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'

# Install binary into user PATH (portable across Linux GNU & macOS BSD)
mkdir -p ~/.local/bin && rm -f ~/.local/bin/ccrystal && cp ./cli/native/target/scala-3.9.0/ccrystal-cli ~/.local/bin/ccrystal && chmod +x ~/.local/bin/ccrystal && strip ~/.local/bin/ccrystal"""
            ),
          ),
          button(
            typ := "button",
            className := "snippet-copy-btn",
            child.text <-- State.copiedSnippet.signal.map {
              case Some("qs-build") => "✓ Copied"
              case _ => "Copy"
            },
            onClick --> { _ =>
              State.copyToClipboard("qs-build", "sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'")
            },
          ),
        ),
      ),

      // First 5 Minutes CLI Tour
      sectionTag(
        className := "qs-card",
        div(
          className := "qs-card-header",
          span(className := "qs-step-number", "4"),
          div(
            h3("First 5 Minutes: The Core Workflow"),
            p("Verified terminal sequence to initialize, hydrate, and maintain zero debris:"),
          ),
        ),
        div(
          className := "terminal-steps-flow",
          div(
            className := "terminal-step-item",
            div(className := "step-label", "1. Initialize Crystal with Atomic Tasks:"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal init my-track -g \"Implement OAuth2 JWT Service\" -t \"Write JWT parser\" -t \"Setup revocation list\"")),
            ),
          ),
          div(
            className := "terminal-step-item",
            div(className := "step-label", "2. Hydrate Living Context Beam for Agent Prompts:"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal hydrate my-track --tail 5")),
            ),
          ),
          div(
            className := "terminal-step-item",
            div(className := "step-label", "3. Acquire Transient Resource Lease (Guaranteed Debris Elimination):"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal transient lease my-track -t git_worktree -p ./worktrees/oauth -d \"Track spike worktree\" --policy revert_on_conclusion")),
            ),
          ),
          div(
            className := "terminal-step-item",
            div(className := "step-label", "4. Mark Acceptance Criterion Complete:"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal task done my-track -t task-1")),
            ),
          ),
          div(
            className := "terminal-step-item",
            div(className := "step-label", "5. Atomic Multi-Command Batching:"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal batch \"task done my-track -t task-2; transient clean my-track -l lease-1; node add my-track -k checkpoint -s 'Completed OAuth2 milestone' --fidelity inferred\"")),
            ),
          ),
          div(
            className := "terminal-step-item",
            div(className := "step-label", "6. Deterministic Zero-LLM Melting (Sub-DAG Squashing):"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal melt my-track --from init-node --to milestone-1 -s \"Scaffolding & DB schema finalized\"")),
            ),
          ),
          div(
            className := "terminal-step-item",
            div(className := "step-label", "7. Conclude, Triage & Cold Storage Archiving:"),
            div(
              className := "code-snippet-box mini",
              pre(code("ccrystal batch \"conclude my-track -s success -r 'Shipped to production'; archive my-track\"")),
            ),
          ),
        ),
      ),
    )
