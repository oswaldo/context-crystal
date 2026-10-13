#!/usr/bin/env sh
# ==============================================================================
# Context Crystal - Sample Drop-in Executable Extension
#
# This reference script demonstrates how external executables (compiled binaries
# in Rust, Go, C, C++, Scala Native, or scripts in Python, Node, Shell, etc. —
# mentioning these languages and platforms as illustrative examples, but not limited to)
# receive and leverage Context Crystal's host environment variables and arguments.
#
# Injected Environment Variables:
#   CCRYSTAL_BIN        - Path to the host ccrystal binary (for callbacks)
#   CCRYSTAL_CAVE_ROOT  - Root of the active crystal cave (.ccrystals/)
#   CCRYSTAL_CRYSTAL_ID - Active crystal boundary identifier
#   CCRYSTAL_EXT_DIR    - Absolute path to this extension package
#   CCRYSTAL_STATE_DIR  - Private, crystal-isolated state directory
# ==============================================================================
set -eu

echo "=== Sample Drop-In Extension Runner ==="
echo "Host Binary:   ${CCRYSTAL_BIN:-ccrystal}"
echo "Cave Root:     ${CCRYSTAL_CAVE_ROOT:-unknown}"
echo "Crystal ID:    ${CCRYSTAL_CRYSTAL_ID:-none}"
echo "Extension Dir: ${CCRYSTAL_EXT_DIR:-unknown}"
echo "State Dir:     ${CCRYSTAL_STATE_DIR:-unknown}"
echo "Arguments:     $*"
echo "Status:        Execution successful."
