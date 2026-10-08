# CEP-0002: Media & Multi-Modal Asset Provenance Extension Standard

- **Author(s):** Oswaldo Dantas <oswaldodantas@proton.me>
- **AI Runtime / Co-Pilot (Optional):** Antigravity CLI / gemini-3.8-flash
- **Status:** Draft
- **Type:** Extension Track
- **Created:** 2026-10-05
- **Target Version:** v0.4.0
- **Discussions-To:** `.ccrystals/crystal-enhancement-proposal-process-and-media-extension`
- **Reference Case Study:** [Elatus Studio Video Pipeline](file:///home/oswaldo/git/elatus/studio/)

---

## 1. Abstract

This specification defines the **Media & Multi-Modal Asset Provenance Extension** for Context Crystal.

It introduces a standardized, non-intrusive metadata schema and tool integration protocol for tracking, inspecting, and reviewing rich media assets (video master cuts, audio stems, color-grading 3D LUTs, motion graphics templates, and high-resolution inspection stills) directly connected to Context Crystal DAG nodes—without storing heavy binaries in Git or bloating the core Scala Native engine.

---

## 2. Motivation & Problem Statement

In automated multi-modal pipelines (such as the autonomous video studio in sibling repository `elatus`):

1. **Visual Evaluation Gap:** Autonomous agents generate dozens of intermediate media cuts, motion graphics tests, and inspection stills. While the agent records text checkpoints in `crystal.json`, there is no standardized way to attach visual inspection evidence (e.g., verifying that a lower third does not occlude the host, or that a 2.0s un-blur transition renders smoothly).
2. **Binary Git Bloat Trap:** Video files (`.mp4`, `.mov`) and frame collections (`.jpg`, `.png`) can easily balloon into hundreds of megabytes. Committing them into Git destroys repository agility and violates system dotfile invariants (ADR 0005).
3. **Cross-Device Review Friction:** Human directors often need to review renders on secondary mobile devices (MacBook Air, iPad, Android phone, Smart TV) over the local network. A standardized metadata schema allows lightweight review servers to discover and stream assets instantly via HTTP 206 Partial Content without proprietary clouds.

---

## 3. Extension Specification: The `media` Metadata Namespace

Under this specification, any Context Crystal `artifact` or `node` can include an optional `media` namespace in its `metadata` dictionary:

```json
{
  "id": "artifact-demo-cyan-hybrid-master",
  "name": "demo_cyan_hybrid_editorial.mp4",
  "substrate": "physical",
  "role": "target",
  "uri": "studio/projects/2026-10-05_structured_video_styles/cuts/widescreen_16x9/demo_cyan_hybrid_editorial.mp4",
  "metadata": {
    "media": {
      "type": "video_master",
      "aspect_ratio": "16:9",
      "resolution": "1920x1080",
      "fps": 30.0,
      "duration_seconds": 18.02,
      "codec": "h264_nvenc",
      "color_profile": "bt709",
      "size_bytes": 21743512,
      "review_url": "http://192.168.188.58:8080/media/cuts/widescreen_16x9/demo_cyan_hybrid_editorial.mp4",
      "inspection_frames": [
        {
          "name": "Hook Assembly",
          "timestamp_seconds": 0.35,
          "uri": "studio/projects/2026-10-05_structured_video_styles/work/frames/cyan_hybrid_still_01_kinetic_hook.jpg"
        },
        {
          "name": "Elatus Parallax HUD",
          "timestamp_seconds": 7.0,
          "uri": "studio/projects/2026-10-05_structured_video_styles/work/frames/cyan_hybrid_still_03_parallax_elatus.jpg"
        }
      ]
    }
  }
}
```

### Supported Media Types

- `video_master`: Finished timeline cut or experimental master.
- `inspection_still`: Static verification frame extracted at a precise timestamp.
- `audio_stem`: Isolated vocal track, ambient audio, or synthetic voiceover.
- `lut_profile`: 3D Color LUT (`.cube`) for optical calibration.
- `motion_template`: Scripted animation definition (FFmpeg filtergraph, PIL overlay generator, Motion template).

---

## 4. Review Server Protocol Integration

The specification defines an open API contract for companion review servers (e.g. `studio/scripts/review_server.py`):

1. **Endpoint `GET /api/media/crystal`:**
   Returns all media artifacts associated with active or concluded crystals in the cave.
2. **Byte-Range Streaming (HTTP 206):**
   Mandatory support for Partial Content byte ranges, allowing smooth scrubbing on Apple Safari (iOS/macOS) and Google Chrome (Android/Desktop).
3. **Lightbox Still Gallery:**
   Automatic grouping of `inspection_frames` by timestamp to allow 1-click side-by-side visual diffing across style iterations.

---

## 5. Architectural Invariant Compliance

- **Zero Core Overhead:** Implemented strictly via standard `metadata` fields in `crystal.json`. Requires zero modifications to core Scala Native code or binary size.
- **Lean Git Invariant:** Raw `.mp4` and high-res `.jpg` frames remain in gitignored work directories (`work/frames/`, `cuts/`). Only the structured metadata, lineage bonds, and review URIs are recorded in Context Crystal.
- **Cross-Cave Bond Portability:** Crystals in production repositories (`elatus`) can bond directly to specifications in tooling repositories (`context-crystal`).

---

## 6. Case Study: Elatus Studio Integration

This extension was conceived and validated during the **2026-10-05 Structured Video Motion Identity** session in `~/git/elatus`:

- 3 visual archetypes and 2 motion models (Kinetic Slide vs Parallax Drift) were rendered.
- 35 progressive inspection stills were cataloged.
- A local review daemon at `http://192.168.188.58:8080` served byte-range video streaming to mobile devices.
- Context Crystal DAG tracked node progression from `node-1` through `node-7`.
