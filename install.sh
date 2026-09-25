#!/bin/sh
# Install script for Context Crystal (ccrystal)
# Usage: curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh
# Options:
#   --to <dir>       Target installation directory (default: ~/.local/bin)
#   --version <ver>  Target release version (default: latest)
#   --help, -h       Show usage information

set -e

# Configuration
REPO="oswaldo/context-crystal"
INSTALL_DIR="${CCRYSTAL_INSTALL_DIR:-$HOME/.local/bin}"
VERSION="${CCRYSTAL_VERSION:-}"
BINARY_NAME="ccrystal"

info() {
    printf '\033[0;32m==>\033[0m %s\n' "$1"
}

warn() {
    printf '\033[1;33mWarning:\033[0m %s\n' "$1"
}

error() {
    printf '\033[0;31mError:\033[0m %s\n' "$1" >&2
    exit 1
}

usage() {
    cat << EOF
Context Crystal Installer

Usage:
  install.sh [options]
  curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh -s -- [options]

Options:
  -t, --to <dir>       Target installation directory (default: ~/.local/bin)
  -v, --version <ver>  Target release version (default: latest release)
  -h, --help           Display this help message and exit

Environment Variables:
  CCRYSTAL_INSTALL_DIR Custom install directory
  CCRYSTAL_VERSION     Custom release version
  CCRYSTAL_BASE_URL    Custom download base URL (testing / mirrors)
EOF
}

# Parse command-line arguments
parse_args() {
    while [ "$#" -gt 0 ]; do
        case "$1" in
            -t|--to)
                if [ -n "$2" ]; then
                    INSTALL_DIR="$2"
                    shift 2
                else
                    error "--to requires a directory argument"
                fi
                ;;
            -v|--version)
                if [ -n "$2" ]; then
                    VERSION="$2"
                    shift 2
                else
                    error "--version requires a version argument"
                fi
                ;;
            -h|--help)
                usage
                exit 0
                ;;
            *)
                error "Unknown argument: $1 (see --help for usage)"
                ;;
        esac
    done
}

detect_os() {
    case "$(uname -s)" in
        Darwin*) echo "macos" ;;
        Linux*)  echo "linux" ;;
        *) error "Unsupported operating system: $(uname -s)" ;;
    esac
}

detect_arch() {
    case "$(uname -m)" in
        x86_64|amd64) echo "x86_64" ;;
        aarch64|arm64) echo "aarch64" ;;
        *) error "Unsupported architecture: $(uname -m)" ;;
    esac
}

get_latest_version() {
    if command -v curl >/dev/null 2>&1; then
        latest=$(curl -fsSL "https://api.github.com/repos/$REPO/releases/latest" 2>/dev/null | \
            grep '"tag_name":' | \
            head -n 1 | \
            sed -E 's/.*"([^"]+)".*/\1/')
        if [ -n "$latest" ]; then
            echo "$latest"
        else
            error "Failed to resolve latest release version from GitHub API. Please specify --version explicitly."
        fi
    else
        error "curl is required but not installed"
    fi
}

calculate_sha256() {
    file="$1"
    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum "$file" | awk '{print $1}'
    elif command -v shasum >/dev/null 2>&1; then
        shasum -a 256 "$file" | awk '{print $1}'
    elif command -v openssl >/dev/null 2>&1; then
        openssl dgst -sha256 "$file" | awk '{print $NF}'
    else
        error "No SHA256 tool found (sha256sum, shasum, or openssl required)"
    fi
}

main() {
    parse_args "$@"

    info "Installing $BINARY_NAME..."

    OS=$(detect_os)
    ARCH=$(detect_arch)
    info "Detected platform: $OS-$ARCH"

    if [ -z "$VERSION" ]; then
        VERSION=$(get_latest_version)
    fi
    info "Target version: $VERSION"

    ARCHIVE_NAME="${BINARY_NAME}-${VERSION}-${OS}-${ARCH}.tar.gz"

    if [ -n "$CCRYSTAL_BASE_URL" ]; then
        BASE_DOWNLOAD_URL="$CCRYSTAL_BASE_URL"
    else
        BASE_DOWNLOAD_URL="https://github.com/$REPO/releases/download/$VERSION"
    fi

    ARCHIVE_URL="$BASE_DOWNLOAD_URL/$ARCHIVE_NAME"
    CHECKSUM_URL="$BASE_DOWNLOAD_URL/SHA256SUMS"

    TEMP_DIR=$(mktemp -d /tmp/ccrystal_install_XXXXXX)
    trap 'rm -rf "$TEMP_DIR"' EXIT INT TERM

    info "Downloading archive: $ARCHIVE_URL"
    ARCHIVE_PATH="$TEMP_DIR/$ARCHIVE_NAME"
    if ! curl -fsSL "$ARCHIVE_URL" -o "$ARCHIVE_PATH"; then
        error "Failed to download $ARCHIVE_NAME from $ARCHIVE_URL"
    fi

    info "Downloading integrity checksums: $CHECKSUM_URL"
    CHECKSUMS_PATH="$TEMP_DIR/SHA256SUMS"
    if ! curl -fsSL "$CHECKSUM_URL" -o "$CHECKSUMS_PATH"; then
        error "Failed to download SHA256SUMS manifest from $CHECKSUM_URL"
    fi

    info "Verifying cryptographic checksum..."
    EXPECTED_HASH=$(grep "$ARCHIVE_NAME" "$CHECKSUMS_PATH" | awk '{print $1}' | head -n 1)
    if [ -z "$EXPECTED_HASH" ]; then
        error "No checksum entry for $ARCHIVE_NAME found in SHA256SUMS"
    fi

    ACTUAL_HASH=$(calculate_sha256 "$ARCHIVE_PATH")
    if [ "$EXPECTED_HASH" != "$ACTUAL_HASH" ]; then
        error "SHA256 checksum mismatch for $ARCHIVE_NAME!\nExpected: $EXPECTED_HASH\nActual:   $ACTUAL_HASH"
    fi
    info "Checksum verified: $ACTUAL_HASH"

    info "Extracting archive..."
    EXTRACT_DIR="$TEMP_DIR/extracted"
    mkdir -p "$EXTRACT_DIR"
    tar -xzf "$ARCHIVE_PATH" -C "$EXTRACT_DIR"

    if [ ! -f "$EXTRACT_DIR/$BINARY_NAME" ]; then
        error "Extracted archive does not contain binary '$BINARY_NAME'"
    fi

    chmod +x "$EXTRACT_DIR/$BINARY_NAME"

    # Atomic inode replacement in target directory
    mkdir -p "$INSTALL_DIR"
    rm -f "$INSTALL_DIR/$BINARY_NAME"
    cp "$EXTRACT_DIR/$BINARY_NAME" "$INSTALL_DIR/$BINARY_NAME"
    chmod +x "$INSTALL_DIR/$BINARY_NAME"

    info "Installed $BINARY_NAME to $INSTALL_DIR/$BINARY_NAME"

    # Self-verification
    if "$INSTALL_DIR/$BINARY_NAME" --version >/dev/null 2>&1; then
        INSTALLED_VERSION=$("$INSTALL_DIR/$BINARY_NAME" --version 2>&1 | head -n 1)
        printf '\033[0;32m==>\033[0m \033[0;32m✓\033[0m Verification successful: %s\n' "$INSTALLED_VERSION"
    else
        warn "Binary installed, but '$BINARY_NAME --version' exited with a non-zero status. Verify dynamic linker libraries."
    fi

    # Check PATH
    case ":$PATH:" in
        *":$INSTALL_DIR:"*) ;;
        *)
            echo ""
            warn "$INSTALL_DIR is not currently in your PATH"
            echo "To use ccrystal from anywhere, add it to your shell configuration:"
            echo ""
            echo "  # For Bash (append to ~/.bashrc):"
            echo "  export PATH=\"\$PATH:$INSTALL_DIR\""
            echo ""
            echo "  # For Zsh (append to ~/.zshrc):"
            echo "  export PATH=\"\$PATH:$INSTALL_DIR\""
            echo ""
            echo "  # For Fish (run once):"
            echo "  fish_add_path $INSTALL_DIR"
            echo ""
            ;;
    esac

    info "Run '$BINARY_NAME --help' to explore Context Crystal."
}

main "$@"
