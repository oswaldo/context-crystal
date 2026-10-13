# Context Crystal Sample Runner Extension

The `sample_runner` extension demonstrates the reference contract for drop-in executable extensions in Context Crystal.

## 1. Overview & Capabilities

- **Substrate**: Declarative drop-in executable.
- **Entrypoint**: `run.sh` (or any compiled binary / script in Rust, Go, C, C++, Scala, Python, Node, etc.).
- **Host Environment Boundaries**:
  - `CCRYSTAL_BIN`: Path to host binary (`ccrystal`).
  - `CCRYSTAL_CAVE_ROOT`: Root path of the `.ccrystals/` cave.
  - `CCRYSTAL_CRYSTAL_ID`: Active crystal context identifier.
  - `CCRYSTAL_EXT_DIR`: Package root of the extension.
  - `CCRYSTAL_STATE_DIR`: Isolated state directory for private data.

## 2. Invocations

```bash
# Execute extension via CLI
ccrystal ext run sample_runner --crystal <crystal-id> -- --arg1 val1

# Inspect extension companion skill
ccrystal ext skill sample_runner
```

## 3. MCP Dynamic Dispatch

```json
{
  "extension_id": "sample_runner",
  "crystal_id": "<crystal-id>",
  "action": "run",
  "payload": {
    "arg1": "val1"
  }
}
```
