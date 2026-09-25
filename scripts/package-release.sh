#!/bin/sh
# Local dry-run release packager for Context Crystal
# Compiles optimized Thin LTO binary, packages .tar.gz archive, and generates SHA256SUMS.

set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

VERSION="${1:-v0.1.0-dev}"
DIST_DIR="$REPO_ROOT/dist"

info() {
    printf '\033[0;32m==>\033[0m %s\n' "$1"
}

error() {
    printf '\033[0;31mError:\033[0m %s\n' "$1" >&2
    exit 1
}

# Detect host OS
detect_os() {
    case "$(uname -s)" in
        Darwin*) echo "macos" ;;
        Linux*)  echo "linux" ;;
        *) error "Unsupported OS: $(uname -s)" ;;
    esac
}

# Detect host Arch
detect_arch() {
    case "$(uname -m)" in
        x86_64|amd64) echo "x86_64" ;;
        aarch64|arm64) echo "aarch64" ;;
        *) error "Unsupported architecture: $(uname -m)" ;;
    esac
}

OS=$(detect_os)
ARCH=$(detect_arch)
TARGET="${OS}-${ARCH}"
ARCHIVE_NAME="ccrystal-${VERSION}-${TARGET}.tar.gz"

info "Packaging Context Crystal release $VERSION for $TARGET..."

cd "$REPO_ROOT"

info "Compiling native binary in ReleaseFast mode with Thin LTO..."
sbt 'set cli.native / nativeConfig ~= { _.withMode(scala.scalanative.build.Mode.releaseFast).withLTO(scala.scalanative.build.LTO.thin) }; cliNative/nativeLink'

BIN_SOURCE="$REPO_ROOT/cli/native/target/scala-3.9.0/ccrystal-cli"
if [ ! -f "$BIN_SOURCE" ]; then
    error "Compiled binary not found at $BIN_SOURCE"
fi

info "Stripping binary symbols..."
strip "$BIN_SOURCE"

info "Assembling release stage..."
STAGE_DIR="$REPO_ROOT/target/stage-${TARGET}"
rm -rf "$STAGE_DIR"
mkdir -p "$STAGE_DIR"

cp "$BIN_SOURCE" "$STAGE_DIR/ccrystal"
cp "$REPO_ROOT/LICENSE" "$STAGE_DIR/"
cp "$REPO_ROOT/README.md" "$STAGE_DIR/"
chmod +x "$STAGE_DIR/ccrystal"

mkdir -p "$DIST_DIR"
ARCHIVE_PATH="$DIST_DIR/$ARCHIVE_NAME"

info "Creating archive: $ARCHIVE_PATH..."
tar -czf "$ARCHIVE_PATH" -C "$STAGE_DIR" ccrystal LICENSE README.md

info "Computing SHA256 checksum..."
cd "$DIST_DIR"
if command -v sha256sum >/dev/null 2>&1; then
    sha256sum "$ARCHIVE_NAME" > "${ARCHIVE_NAME}.sha256"
elif command -v shasum >/dev/null 2>&1; then
    shasum -a 256 "$ARCHIVE_NAME" > "${ARCHIVE_NAME}.sha256"
fi

# Update consolidated SHA256SUMS
cat "${ARCHIVE_NAME}.sha256" >> SHA256SUMS
sort -u SHA256SUMS -o SHA256SUMS

info "Package created successfully in dist/:"
ls -lh "$ARCHIVE_PATH"
echo ""
info "SHA256 checksum:"
grep "$ARCHIVE_NAME" SHA256SUMS
echo ""
info "To test installation locally with install.sh, run:"
echo "  CCRYSTAL_BASE_URL=\"file://$DIST_DIR\" ./install.sh --version \"$VERSION\" --to /tmp/test-install"
