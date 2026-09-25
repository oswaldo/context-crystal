#!/bin/sh
# Integration test suite for Context Crystal install.sh
set -e

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
INSTALL_SCRIPT="$REPO_ROOT/install.sh"

FAILED=0
PASSED=0

pass() {
    printf '\033[0;32m✓ PASS:\033[0m %s\n' "$1"
    PASSED=$((PASSED + 1))
}

fail() {
    printf '\033[0;31m✗ FAIL:\033[0m %s\n' "$1" >&2
    FAILED=$((FAILED + 1))
}

assert_exit_code() {
    expected="$1"
    actual="$2"
    desc="$3"
    if [ "$actual" -eq "$expected" ]; then
        pass "$desc (exit code $actual)"
    else
        fail "$desc (expected exit code $expected, got $actual)"
    fi
}

TEST_TEMP_DIR=$(mktemp -d /tmp/ccrystal_install_test_XXXXXX)
trap 'rm -rf "$TEST_TEMP_DIR"' EXIT INT TERM

# Test 1: Help flag
echo "==> Running Test 1: --help argument"
HELP_OUTPUT=$("$INSTALL_SCRIPT" --help 2>&1) || true
if echo "$HELP_OUTPUT" | grep -q -- "--to" && echo "$HELP_OUTPUT" | grep -q -- "--version"; then
    pass "--help describes --to and --version options"
else
    fail "--help output does not document --to or --version: $HELP_OUTPUT"
fi

# Set up mock release environment
MOCK_RELEASE_DIR="$TEST_TEMP_DIR/mock_release"
MOCK_INSTALL_DIR="$TEST_TEMP_DIR/bin"
mkdir -p "$MOCK_RELEASE_DIR" "$MOCK_INSTALL_DIR"

# Detect host OS and ARCH according to install.sh logic
OS=$(uname -s | tr '[:upper:]' '[:lower:]')
ARCH=$(uname -m)
case "$ARCH" in
    x86_64|amd64) ARCH="x86_64" ;;
    aarch64|arm64) ARCH="aarch64" ;;
esac

MOCK_VERSION="v9.9.9"
ARCHIVE_NAME="ccrystal-${MOCK_VERSION}-${OS}-${ARCH}.tar.gz"

# Create mock ccrystal payload
STAGE_DIR="$TEST_TEMP_DIR/stage"
mkdir -p "$STAGE_DIR"
cat << 'EOF' > "$STAGE_DIR/ccrystal"
#!/bin/sh
if [ "$1" = "--version" ]; then
    echo "ccrystal 9.9.9-test"
    exit 0
fi
if [ "$1" = "--help" ]; then
    echo "Context Crystal Test CLI"
    exit 0
fi
echo "Running ccrystal test mock"
EOF
chmod +x "$STAGE_DIR/ccrystal"
echo "Dummy LICENSE" > "$STAGE_DIR/LICENSE"
echo "Dummy README" > "$STAGE_DIR/README.md"

tar -czf "$MOCK_RELEASE_DIR/$ARCHIVE_NAME" -C "$STAGE_DIR" ccrystal LICENSE README.md

# Generate SHA256SUMS
(
    cd "$MOCK_RELEASE_DIR"
    if command -v sha256sum >/dev/null 2>&1; then
        sha256sum "$ARCHIVE_NAME" > SHA256SUMS
    elif command -v shasum >/dev/null 2>&1; then
        shasum -a 256 "$ARCHIVE_NAME" > SHA256SUMS
    fi
)

# Test 2: Valid installation from archive with SHA256 checksum verification
echo "==> Running Test 2: Valid archive installation with checksum verification"
EXIT_CODE=0
CCRYSTAL_BASE_URL="file://$MOCK_RELEASE_DIR" \
    "$INSTALL_SCRIPT" --to "$MOCK_INSTALL_DIR" --version "$MOCK_VERSION" > "$TEST_TEMP_DIR/test2.log" 2>&1 || EXIT_CODE=$?

assert_exit_code 0 "$EXIT_CODE" "Installer succeeds with valid checksum archive"
if [ -x "$MOCK_INSTALL_DIR/ccrystal" ]; then
    pass "Binary was installed to $MOCK_INSTALL_DIR/ccrystal and is executable"
else
    fail "Binary not found or not executable at $MOCK_INSTALL_DIR/ccrystal"
fi

OUTPUT=$("$MOCK_INSTALL_DIR/ccrystal" --version)
if [ "$OUTPUT" = "ccrystal 9.9.9-test" ]; then
    pass "Installed binary executed correctly: $OUTPUT"
else
    fail "Installed binary unexpected output: $OUTPUT"
fi

# Test 3: Checksum mismatch rejection
echo "==> Running Test 3: Checksum mismatch rejection"
CORRUPT_DIR="$TEST_TEMP_DIR/corrupt_release"
CORRUPT_INSTALL_DIR="$TEST_TEMP_DIR/corrupt_bin"
mkdir -p "$CORRUPT_DIR" "$CORRUPT_INSTALL_DIR"
cp "$MOCK_RELEASE_DIR/$ARCHIVE_NAME" "$CORRUPT_DIR/"
echo "0000000000000000000000000000000000000000000000000000000000000000  $ARCHIVE_NAME" > "$CORRUPT_DIR/SHA256SUMS"

EXIT_CODE=0
CCRYSTAL_BASE_URL="file://$CORRUPT_DIR" \
    "$INSTALL_SCRIPT" --to "$CORRUPT_INSTALL_DIR" --version "$MOCK_VERSION" > "$TEST_TEMP_DIR/test3.log" 2>&1 || EXIT_CODE=$?

if [ "$EXIT_CODE" -ne 0 ]; then
    pass "Installer rejected archive with invalid checksum (exit code $EXIT_CODE)"
else
    fail "Installer should have failed on checksum mismatch, but exited 0"
fi

if [ ! -f "$CORRUPT_INSTALL_DIR/ccrystal" ]; then
    pass "Corrupted binary was not placed in destination"
else
    fail "Corrupted binary was unexpectedly placed in destination"
fi

# Summary
echo ""
echo "================================="
echo "Test Summary: $PASSED passed, $FAILED failed"
echo "================================="

if [ "$FAILED" -gt 0 ]; then
    exit 1
fi
exit 0
