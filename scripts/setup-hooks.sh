#!/bin/sh
# Context Crystal Git Hooks Setup Script
# Configures core.hooksPath to point to .githooks/ for zero push-fail quality assurance.

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

info() {
    printf '\033[0;32m==>\033[0m %s\n' "$1"
}

info "Configuring Context Crystal git hooks..."

cd "$REPO_ROOT"

if [ ! -d ".githooks" ]; then
    printf '\033[0;31mError:\033[0m .githooks directory not found at %s/.githooks\n' "$REPO_ROOT" >&2
    exit 1
fi

chmod +x .githooks/*

git config core.hooksPath .githooks

CURRENT_HOOKS_PATH="$(git config core.hooksPath)"

info "Git hooks successfully configured!"
printf '  core.hooksPath = \033[1;34m%s\033[0m\n' "$CURRENT_HOOKS_PATH"
printf '  Active guards:   \033[0;36mpre-commit\033[0m, \033[0;36mpre-push\033[0m\n'
