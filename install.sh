#!/bin/sh
# Install script for Context Crystal (ccrystal)
# Usage: curl -fsSL https://raw.githubusercontent.com/oswaldo/context-crystal/main/install.sh | sh

set -e

# Configuration
REPO="oswaldo/context-crystal"
INSTALL_DIR="${CCRYSTAL_INSTALL_DIR:-$HOME/.local/bin}"
BINARY_NAME="ccrystal"

# Colors for output (using printf with literal escapes)
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

# Detect OS
detect_os() {
    case "$(uname -s)" in
        Darwin*) echo "macos" ;;
        Linux*)  echo "linux" ;;
        *) error "Unsupported operating system: $(uname -s)" ;;
    esac
}

# Detect architecture
detect_arch() {
    case "$(uname -m)" in
        x86_64|amd64) echo "x86_64" ;;
        aarch64|arm64) echo "aarch64" ;;
        *) error "Unsupported architecture: $(uname -m)" ;;
    esac
}

# Get latest release version
get_latest_version() {
    if command -v curl >/dev/null 2>&1; then
        curl -fsSL "https://api.github.com/repos/$REPO/releases/latest" 2>/dev/null | \
            grep '"tag_name":' | \
            sed -E 's/.*"([^"]+)".*/\1/'
    else
        error "curl is required but not installed"
    fi
}

# Download and install
main() {
    info "Installing $BINARY_NAME..."

    OS=$(detect_os)
    ARCH=$(detect_arch)

    info "Detected platform: $OS-$ARCH"

    # Determine version
    VERSION="${CCRYSTAL_VERSION:-}"
    if [ -z "$VERSION" ]; then
        VERSION=$(get_latest_version)
    fi

    if [ -z "$VERSION" ]; then
        VERSION="latest"
        warn "Could not determine latest version from GitHub API, falling back to 'latest'"
    else
        info "Target version: $VERSION"
    fi

    # Construct download URL
    RELEASE_URL="https://github.com/$REPO/releases/download/$VERSION/$BINARY_NAME-$OS-$ARCH"

    # Create install directory
    mkdir -p "$INSTALL_DIR"

    # Download binary
    TEMP_FILE=$(mktemp)
    info "Downloading from $RELEASE_URL..."

    if ! curl -fsSL "$RELEASE_URL" -o "$TEMP_FILE"; then
        error "Failed to download $BINARY_NAME from $RELEASE_URL"
    fi

    # Make executable
    chmod +x "$TEMP_FILE"

    # Atomic inode replacement (prevents 'Text file busy' if running under active MCP server)
    rm -f "$INSTALL_DIR/$BINARY_NAME"
    cp "$TEMP_FILE" "$INSTALL_DIR/$BINARY_NAME"
    chmod +x "$INSTALL_DIR/$BINARY_NAME"
    rm -f "$TEMP_FILE"

    info "Installed $BINARY_NAME to $INSTALL_DIR/$BINARY_NAME"

    # Verify installation
    if "$INSTALL_DIR/$BINARY_NAME" --help >/dev/null 2>&1; then
        printf '\033[0;32m==>\033[0m \033[0;32m✓\033[0m Installation verified successfully!\n'
    else
        warn "Binary installed, but automated verification returned non-zero. Please check manually."
    fi

    # Check if install dir is in PATH
    case ":$PATH:" in
        *":$INSTALL_DIR:"*) ;;
        *)
            echo ""
            warn "$INSTALL_DIR is not in your PATH"
            echo "Add the following line to your ~/.bashrc, ~/.zshrc, or profile:"
            echo ""
            echo "  export PATH=\"\$PATH:$INSTALL_DIR\""
            echo ""
            ;;
    esac

    info "Run '$BINARY_NAME --help' to explore Context Crystal commands."
}

main "$@"
