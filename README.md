# Context Crystal — GitHub Pages & Public Launch Portal

This worktree contains the source code for the Context Crystal public web portal and documentation showcase. It is managed in the independent `gh-pages` orphan branch, completely decoupled from the application source code in `main`.

## Development

### Prerequisites

- [Scala CLI](https://scala-cli.virtuslab.org/) must be installed.

### Building the Website

To compile the Scala.js code into the static release bundle:

```bash
scala-cli package site --js-mode release -o main.js --force
```

### Local Preview

To preview the portal locally with the lightweight Cask server:

```bash
scala-cli run preview
```

Then open `http://localhost:8080` in your browser.
