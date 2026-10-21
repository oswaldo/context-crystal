# CEP-0002: Media & Multi-Modal Asset Provenance Extension Standard

- **Author(s):** Oswaldo Dantas <oswaldodantas@proton.me>
- **AI Runtime / Co-Pilot (Optional):** Antigravity CLI / gemini-3.8-flash
- **Status:** Accepted
- **Type:** Extension Track
- **Created:** 2026-10-05
- **Target Version:** v1.3.0
- **Discussions-To:** `.ccrystals/crystal-enhancement-proposal-process-and-media-extension`
- **Reference Architecture:** Automated Multi-Modal Video & Motion Identity Pipeline

---

## 1. Abstract

This specification defines the **Media & Multi-Modal Asset Provenance Extension** for Context Crystal.

It introduces a standardized, non-intrusive metadata schema and tool integration protocol for tracking, inspecting, and reviewing rich media assets (video master cuts, audio stems, color-grading 3D LUTs, motion graphics templates, and high-resolution inspection stills) directly connected to Context Crystal DAG nodes—without storing heavy binaries in Git or bloating the core Scala Native engine.

---

## 2. Motivation & Problem Statement

In automated multi-modal pipelines (such as headless video studios, automated post-production pipelines, and generative media synthesis):

1. **Visual Evaluation Gap:** Autonomous agents generate dozens of intermediate media cuts, motion graphics tests, and inspection stills. While the agent records text checkpoints in `crystal.json`, there is no standardized way to attach visual inspection evidence (e.g., verifying that a lower third does not occlude the host, or that a 2.0s un-blur transition renders smoothly).
2. **Binary Git Bloat Trap:** Video files (`.mp4`, `.mov`) and frame collections (`.jpg`, `.png`) can easily balloon into hundreds of megabytes. Committing them into Git destroys repository agility, balloons clone sizes, and violates repository hygiene invariants.
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
  "uri": "media/cuts/widescreen_16x9/demo_cyan_hybrid_editorial.mp4",
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
}
```

### Supported Media Types

- `video_master`: Finished timeline cut or experimental master.
- `inspection_still`: Static verification frame extracted at a precise timestamp.
- `audio_stem`: Isolated vocal track, ambient audio, or synthetic voiceover.
- `lut_profile`: 3D Color LUT (`.cube`) for optical calibration.
- `motion_template`: Declarative or scripted animation definition. Prioritizes declarative web-native motion engines (such as [Hyperframes](https://github.com/heygen-com/hyperframes) HTML/CSS compositions, Remotion) rendering transparent alpha overlays over procedural canvas/filtergraph scripts.
- `subtitle_track`: Synchronized subtitle / caption track (`.srt`, `.vtt`, `.ass`, `.ttml`).
- `thumbnail`: Safe-zone billboard, poster, or cover art still.

### Progressive Disclosure & Minimalist Workflows

All fields within `metadata.media` (except `type`) are strictly optional and adhere to **Progressive Disclosure**:

- **Casual / Minimalist Workflows:** A creator assembling a quick social clip or family video can simply tag an artifact with `{"type": "video_master"}`. Zero additional fields or schema ceremony are demanded.
- **Advanced Studio / Cinema Workflows:** As technical rigor demands, attributes such as `fps`, `codec`, `color_profile`, `loudness_lufs`, `language`, `languages`, `inspection_frames`, and cryptographic hashes (`sha256`) can be introduced progressively without schema validation friction.

### Declarative Motion Architecture (Hyperframes) vs. Procedural Scripting

To prevent humans and AI entities from constantly reinventing the wheel—such as writing hundreds of lines of imperative, brittle Python PIL canvas scripts or labyrinthine FFmpeg filtergraphs for text layouts and easing curves—this specification establishes a **declarative-first motion hierarchy**:

1. **Declarative Web-Native Engine (Hyperframes / HTML/CSS):** For lower thirds, kinetic HUDs, title sequences, infographics, and typography, agents should utilize declarative frameworks like **Hyperframes**. Styling is handled by standard modern CSS (supporting `backdrop-filter` glassmorphism, subpixel cubic easing, and flexbox/grid layout), with rendering outputting transparent alpha WebM (VP9) or ProRes 4444 passes.
2. **Deterministic Composition:** The resulting transparent animation pass is composited directly over base footage via hardware-accelerated encoders (NVENC/FFmpeg), and recorded as an input/output DAG lineage artifact in Context Crystal. Procedural pixel-drawing scripts should be reserved strictly as a last resort.

### Native Multi-Asset Composition via DAG Lineage

The `media` extension deliberately avoids reinventing multi-track timeline hierarchies inside individual artifact schemas. Instead, multi-asset composition (camera takes, vocal stems, background score, motion templates) is modeled naturally using Context Crystal's native DAG node properties (`inputArtifactIds` and `outputArtifactIds`):

```text
[Input: cam_a.mp4 + vocal_stem.wav + music.mp3 + script.txt]
                         │
                         ▼
             [Node: assemble_master_cut]
                         │
                         ▼
   [Output: master_16x9.mp4 + inspection_frames]
```

---

## 4. Review Server Protocol Integration

The specification defines an open API contract for companion review servers (e.g. a lightweight local review daemon `review_server.py`):

1. **Endpoint `GET /api/media/crystal`:**
   Returns all media artifacts associated with active or concluded crystals in the cave.
2. **Byte-Range Streaming (HTTP 206):**
   Mandatory support for Partial Content byte ranges, allowing smooth scrubbing on Apple Safari (iOS/macOS) and Google Chrome (Android/Desktop).
3. **Lightbox Still Gallery:**
   Automatic grouping of `inspection_frames` by timestamp to allow 1-click side-by-side visual diffing across style iterations.
4. **Origin-Agnostic Asset Resolution:**
   Companion review servers resolve `review_path` relative to their active origin (`http://${HOST}:${PORT}${review_path}`), preventing broken links when DHCP leases or network interfaces change.

---

## 5. Architectural Invariant Compliance

- **Zero Core Overhead:** Implemented strictly via standard `metadata` fields in `crystal.json`. Requires zero modifications to core Scala Native code or binary size.
- **Lean Git Invariant:** Raw `.mp4` and high-res `.jpg` frames remain in gitignored work directories (`work/frames/`, `cuts/`). Only the structured metadata, lineage bonds, and review URIs are recorded in Context Crystal.
- **Cross-Cave Bond Portability:** Crystals in production client repositories can bond directly to specifications and standards in external or upstream tool repositories.
- **Open-World Extensibility:** The `media` namespace operates under an open-world assumption. Creators, studios, and AI agents are free to attach complementary sibling metadata (e.g. `metadata.cinema` for camera/lens settings, `metadata.gear` for physical camera leases, or `metadata.prompt` for generative workflows). Context Crystal preserves and passes through all unrecognized fields without blocking execution or raising schema errors.

---

## 6. Case Study: Automated Video Motion & Identity Pipeline

The following case study illustrates the practical workflow and architecture of an automated video production pipeline employing this extension:

- **Iterative Style Exploration:** An automated workflow renders 3 visual archetypes and evaluates 2 distinct motion models (Kinetic Slide vs. Parallax Drift).
- **Inspection Stills Gallery:** As cuts render, 35 progressive inspection stills are cataloged at key timestamps (`0.35s`, `7.0s`) to visually verify lower-third clearance, title contrast, and transitions without opening an NLE timeline.
- **Local Review Daemon:** A lightweight local daemon serves byte-range video streaming (`/media/cuts/...`) directly to mobile devices on the local network for sofa/field review before final publication.
- **Durable Provenance:** Context Crystal tracks each creative iteration and prompt in its DAG, linking the final approved video cut to the exact parameters and inspection frames that verified it.

---

## 7. Backwards Compatibility & Migration

Because this specification operates strictly inside the optional `metadata.media` container of artifacts, it is **100% backwards compatible**:

- Existing crystals continue to parse, validate, and serialize identically.
- Core CLI tools, existing MCP servers, and non-media agents safely pass through or ignore the `media` namespace without side effects.
- Zero database migrations, schema bumps, or conversion scripts are required.

---

## 8. Reference Implementation & Future Tooling

The metadata schema defined in this proposal is immediately functional using standard `ccrystal` artifact commands (`ccrystal artifact add --metadata '{"media": ...}'`) and native MCP tools (`crystal_artifact`).

Formal implementation of the companion review protocol (Section 4) is designated for a dedicated companion utility track (e.g. an open-source, ultra-light review server daemon) upon acceptance of this CEP. This keeps core `ccrystal` completely free of media playback, decoding, or web streaming dependencies while ensuring full ecosystem interoperability.

---

## 9. Prior Art & Alternatives Considered

1. **Git LFS (Large File Storage):**
   - *Evaluated:* Tracking `.mp4` master cuts and high-res stills via Git LFS pointers.
   - *Rejected:* Introduces massive repository clone bloat, remote bandwidth costs, and breaks repo agility. CEP-0002 keeps heavy files local and gitignored, recording only lightweight URIs and SHA-256 hashes in the DAG.
2. **Proprietary SaaS Review Services (e.g. Frame.io):**
   - *Evaluated:* Uploading WIP cuts to cloud review services for mobile inspection.
   - *Rejected:* Cloud vendor lock-in, slow upload times, and ongoing subscription overhead. CEP-0002 favors local-first, zero-cloud byte-range streaming over home/studio Wi-Fi.
3. **Embedding Video Decoders into Core `ccrystal`:**
   - *Evaluated:* Adding native media inspection subcommands to the Scala Native CLI.
   - *Rejected:* Direct violation of the Lean Core Invariant. Core Context Crystal remains pure functional, microsecond-fast, and completely domain-agnostic.
