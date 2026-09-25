#!/bin/sh
# Helper to update Formula/ccrystal.rb with version and SHA256 checksums from a manifest

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
FORMULA_FILE="$REPO_ROOT/Formula/ccrystal.rb"

VERSION="${1:-}"
CHECKSUMS_FILE="${2:-$REPO_ROOT/dist/SHA256SUMS}"

info() {
    printf '\033[0;32m==>\033[0m %s\n' "$1"
}

error() {
    printf '\033[0;31mError:\033[0m %s\n' "$1" >&2
    exit 1
}

if [ -z "$VERSION" ]; then
    error "Usage: $0 <version> [path-to-SHA256SUMS]"
fi

# Strip leading 'v' if present for formula version field
RAW_VERSION=$(echo "$VERSION" | sed 's/^v//')

if [ ! -f "$CHECKSUMS_FILE" ]; then
    error "Checksums file not found at $CHECKSUMS_FILE"
fi

get_hash() {
    target="$1"
    grep "ccrystal-.*-${target}\.tar\.gz" "$CHECKSUMS_FILE" | awk '{print $1}' | head -n 1
}

MAC_ARM=$(get_hash "macos-aarch64")
MAC_INTEL=$(get_hash "macos-x86_64")
LINUX_ARM=$(get_hash "linux-aarch64")
LINUX_INTEL=$(get_hash "linux-x86_64")

# Fallbacks for missing targets in single-platform local testing
MAC_ARM="${MAC_ARM:-0000000000000000000000000000000000000000000000000000000000000000}"
MAC_INTEL="${MAC_INTEL:-0000000000000000000000000000000000000000000000000000000000000000}"
LINUX_ARM="${LINUX_ARM:-0000000000000000000000000000000000000000000000000000000000000000}"
LINUX_INTEL="${LINUX_INTEL:-0000000000000000000000000000000000000000000000000000000000000000}"

info "Updating $FORMULA_FILE for version $RAW_VERSION..."

cat << EOF > "$FORMULA_FILE"
class Ccrystal < Formula
  desc "Deterministic context preservation, DAG provenance, and runtime orchestration"
  homepage "https://github.com/oswaldo/context-crystal"
  version "$RAW_VERSION"
  license "Apache-2.0"

  on_macos do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-aarch64.tar.gz"
      sha256 "$MAC_ARM"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-macos-x86_64.tar.gz"
      sha256 "$MAC_INTEL"
    end
  end

  on_linux do
    if Hardware::CPU.arm?
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-aarch64.tar.gz"
      sha256 "$LINUX_ARM"
    else
      url "https://github.com/oswaldo/context-crystal/releases/download/v#{version}/ccrystal-v#{version}-linux-x86_64.tar.gz"
      sha256 "$LINUX_INTEL"
    end
  end

  def install
    bin.install "ccrystal"
  end

  test do
    assert_match "Context Crystal CLI", shell_output("#{bin}/ccrystal --help")
  end
end
EOF

if command -v ruby >/dev/null 2>&1; then
    ruby -c "$FORMULA_FILE" >/dev/null 2>&1
    info "Ruby syntax validation passed for $FORMULA_FILE"
fi

info "Formula update complete."
