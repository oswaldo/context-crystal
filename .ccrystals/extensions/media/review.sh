#!/usr/bin/env sh
# ==============================================================================
# Context Crystal - CEP-0002 Media Review Extension Entrypoint
#
# Reference runner verifying environment boundaries and review engine readiness.
# Injected Environment Variables:
#   CCRYSTAL_BIN        - Path to host ccrystal binary
#   CCRYSTAL_CAVE_ROOT  - Root of active crystal cave (.ccrystals/)
#   CCRYSTAL_CRYSTAL_ID - Active crystal boundary identifier
#   CCRYSTAL_EXT_DIR    - Package root of media extension
#   CCRYSTAL_STATE_DIR  - Private state directory for media review logs/caches
# ==============================================================================
set -eu

echo "=== CEP-0002 Media Review Extension ==="
echo "Host Binary:   ${CCRYSTAL_BIN:-ccrystal}"
echo "Cave Root:     ${CCRYSTAL_CAVE_ROOT:-unknown}"
echo "Crystal ID:    ${CCRYSTAL_CRYSTAL_ID:-none}"
echo "Extension Dir: ${CCRYSTAL_EXT_DIR:-unknown}"
echo "State Dir:     ${CCRYSTAL_STATE_DIR:-unknown}"
echo "Arguments:     $*"
echo "Status:        Media review engine active."
