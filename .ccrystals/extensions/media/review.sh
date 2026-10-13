#!/usr/bin/env sh
set -eu

echo "=== CEP-0002 Media Review Extension ==="
echo "Cave Root: ${CCRYSTAL_CAVE_ROOT:-unknown}"
echo "Crystal ID: ${CCRYSTAL_CRYSTAL_ID:-none}"
echo "Extension Dir: ${CCRYSTAL_EXT_DIR:-unknown}"
echo "Arguments: $*"
echo "Status: Media review engine active."
