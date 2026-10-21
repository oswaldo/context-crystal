# Context Crystal Media & Multi-Modal Provenance Extension (CEP-0002)

The `media` extension introduces standardized metadata schemas, visual inspection frame tracking, and local-first review integration for Context Crystal without bloating the core engine or storing heavy video/audio binaries in Git.

## 1. Concepts & Architecture

- **Substrate**: Declarative drop-in extension package.
- **Specification**: CEP-0002 Media & Multi-Modal Asset Provenance Extension Standard.
- **Scope**: Cave-wide or crystal-scoped.
- **Lean Git Invariant**: Heavy video cuts (`.mp4`, `.mov`) and image frames (`.png`, `.jpg`) remain in gitignored local directories or local storage volumes; only structured metadata, inspection frame markers, and cryptographic digests are recorded in Context Crystal.
- **Progressive Disclosure**:
  - *Minimalist*: Only `"type": "video_master"` is mandatory under the `metadata.media` dictionary.
  - *Advanced Studio*: Attributes such as `fps`, `codec`, `color_profile`, `size_bytes`, `sha256`, and `inspection_frames` can be added progressively.

## 2. Supported Media Types

- `video_master`: Finished editorial cut, rendered master, or motion graphic output.
- `inspection_still`: Static verification frame extracted at a precise timestamp.
- `audio_stem`: Isolated vocal dialogue, music bed, sound effects, or synthetic voiceover.
- `lut_profile`: 3D Color LUT (`.cube`) for color calibration.
- `motion_template`: Scripted animation definition or motion project file.

## 3. Metadata Structure Example

When registering a media artifact using `ccrystal artifact add` or MCP `crystal_artifact`:

```json
{
  "media": {
    "type": "video_master",
    "aspect_ratio": "16:9",
    "resolution": "1920x1080",
    "fps": 30.0,
    "duration_seconds": 18.02,
    "codec": "h264_nvenc",
    "color_profile": "bt709",
    "size_bytes": 21743512,
    "sha256": "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855",
    "review_path": "/media/cuts/widescreen_16x9/demo_cyan_hybrid_editorial.mp4",
    "inspection_frames": [
      {
        "name": "Hook Assembly",
        "timestamp_seconds": 0.35,
        "uri": "media/work/frames/cyan_hybrid_still_01_kinetic_hook.jpg"
      },
      {
        "name": "Parallax Kinetic HUD",
        "timestamp_seconds": 7.0,
        "uri": "media/work/frames/cyan_hybrid_still_03_parallax_hud.jpg"
      }
    ]
  }
}
```

## 4. CLI Invocations

```bash
# Register a media artifact
ccrystal artifact add \
  --crystal <crystal-id> \
  --name "demo_editorial.mp4" \
  --substrate physical \
  --role target \
  --uri "media/cuts/demo_editorial.mp4" \
  --media-type "video/mp4"

# Run the media review extension runner
ccrystal ext run media --crystal <crystal-id> -- --port 8080

# View media extension skill guide
ccrystal ext skill media
```

## 5. MCP Dynamic Dispatch

```json
{
  "extension_id": "media",
  "crystal_id": "<crystal-id>",
  "action": "run",
  "payload": {
    "action": "review",
    "port": 8080
  }
}
```
