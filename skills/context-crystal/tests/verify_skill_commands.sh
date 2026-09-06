#!/usr/bin/env bash
set -euo pipefail

echo "=== Context Crystal Skill Command Verification Suite ==="

# 1. Bootstrap check
if ! command -v ccrystal &> /dev/null; then
  echo "ccrystal not in PATH, checking ~/.local/bin/ccrystal..."
  if [ -x "$HOME/.local/bin/ccrystal" ]; then
    export PATH="$HOME/.local/bin:$PATH"
  else
    echo "ERROR: ccrystal binary not found!"
    exit 1
  fi
fi

echo "[1/4] Verified ccrystal binary: $(which ccrystal)"

# Setup isolated scratch directory for in-tree and out-of-tree testing
TMP_BASE="$(mktemp -d -t ccrystal-skill-test-XXXXXX)"
trap 'rm -rf "$TMP_BASE"' EXIT

INTREE_DIR="$TMP_BASE/repo-intree"
EXT_STORE="$TMP_BASE/external-context-store"

mkdir -p "$INTREE_DIR"
mkdir -p "$EXT_STORE"

echo "[2/4] Testing In-Tree Skill Commands & Batch Recipes in $INTREE_DIR..."
pushd "$INTREE_DIR" > /dev/null

# Recipe 1: Inception
ccrystal batch "init skill-demo -g 'Verification Goal' -i 'Ensure all skill recipes succeed' --created-at 2026-09-06T09:00:00Z; task add skill-demo -d 'Task 1'; task add skill-demo -d 'Task 2'"

# Check derived views
test -f .ccrystals/skill-demo/crystal.json
test -f .ccrystals/skill-demo/tasks.md

# Recipe 2: Milestone with explicit timestamp & transient lease
ccrystal batch "node add skill-demo -k tool_execution -s 'Completed task 1' --fidelity inferred --timestamp 2026-09-06T09:30:00Z; task done skill-demo -t task-1; transient lease skill-demo -t git_worktree -d 'Temp branch' --policy revert_on_conclusion --acquired-at 2026-09-06T09:35:00Z"

# Verify node timestamp in JSON
grep -q "2026-09-06T09:30:00Z" .ccrystals/skill-demo/crystal.json
grep -q "2026-09-06T09:35:00Z" .ccrystals/skill-demo/transient.json

# Recipe 3: Cleavage / Fork
ccrystal slice skill-demo --fork-to skill-fork --prune
test -f .ccrystals/skill-fork/crystal.json

# Recipe 4: Transient Clean & Lesson
ccrystal batch "transient clean skill-demo -l lease-1; lesson add skill-demo -f 'Spike failed' -r 'Wrong assumption' -a 'Refactored'"
grep -qi "cleaned" .ccrystals/skill-demo/transient.json
grep -q "Spike failed" .ccrystals/skill-demo/lessons-learned.md

# Cast / Hydrate test
CAST_OUTPUT=$(ccrystal hydrate skill-demo)
echo "$CAST_OUTPUT" | grep -q "Verification Goal"

popd > /dev/null

echo "[3/4] Testing Decoupled Out-of-Tree Store (CCRYSTAL_STORE)..."
CLEAN_REPO="$TMP_BASE/repo-clean"
mkdir -p "$CLEAN_REPO"
pushd "$CLEAN_REPO" > /dev/null

export CCRYSTAL_STORE="$EXT_STORE"
ccrystal batch "init ext-demo -g 'Clean Repo Goal'; task add ext-demo -d 'External Task'; task done ext-demo -t task-1"

# Assert external store received data
test -f "$EXT_STORE/ext-demo/crystal.json"
test -f "$EXT_STORE/ext-demo/tasks.md"

# Assert clean repo contains ZERO .ccrystals directory
if [ -d ".ccrystals" ]; then
  echo "ERROR: .ccrystals found in clean repository! Decoupled store failed."
  exit 1
fi

popd > /dev/null

echo "[4/4] PASS: All canonical skill commands, batch recipes, and decoupled store tests succeeded cleanly!"
