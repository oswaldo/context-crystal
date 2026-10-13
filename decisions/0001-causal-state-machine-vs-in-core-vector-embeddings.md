# 1. Causal State Machine vs. In-Core Vector Embeddings

Date: 2026-10-13

## Status

Accepted

## Context

In the landscape of AI-assisted software development, tools frequently conflate **context** with **associative memory**—attempting to simulate cognitive recall through vector databases, embeddings, and Retrieval-Augmented Generation (RAG).

Context Crystal was designed with a fundamentally different premise ([conductor/product.md](conductor/product.md#L21), [docs/for_devs.md](docs/for_devs.md#L19)): engineering does not require a probabilistic memory simulator; it requires an **objective navigational map and compass**:

1. **Where have we been:** A tamper-evident, directed acyclic graph (DAG) of verified milestones, executed tools, decisions, and resolved friction.
2. **Where are we going:** A nucleus goal with unambiguous acceptance criteria and active transient resource leases.

As caves grow across dozens or hundreds of sessions, the question arose whether Context Crystal should incorporate an internal vector store to power semantic similarity search across historical crystals and DAG nodes.

We evaluated the architectural impact against the project's invariants:

- **Multi-Platform Runtime Footprint:** Context Crystal cross-compiles to **Scala Native**, **JVM**, and **Scala.js**. A core vector store would introduce heavy C/C++ runtime bindings (FAISS, ONNX, or SQLite-vec extensions), significantly complicating native compilation across Linux x86_64, aarch64, and macOS Apple Silicon.
- **Zero-LLM Housekeeping & Sub-Millisecond Speed:** The engine delivers sub-10ms CLI cold starts and operates with **0 LLM tokens consumed for context management**. Running local embedding models or calling remote embedding APIs violates this zero-cost, offline-first invariant.
- **Causality vs. Probabilistic Recall:** Vector databases retrieve ungrounded, top-$k$ text fragments sorted by cosine similarity, discarding causal provenance, parent-child transitions, and active lease statuses.
- **Cave Scale:** Typical software repositories contain tens to hundreds of crystals. The multi-dimensional `CrystalFilter` (supporting lexical tokens, goal status, temporal ranges, active leases, open tasks, and authors) executes in microseconds without indexing lag or probabilistic hallucinations.

## Decision

We **reject the integration of in-core vector stores, embedding models, or RAG retrieval into Context Crystal's core data structures and primary CLI**.

Specifically:

1. **The Core Remains Strictly Deterministic:** `core` and `cli` will maintain a pure, zero-reflection, functional state machine backed by deterministic JSON schemas, POSIX atomic file swaps, and lexical/temporal indexing.
2. **Separation of Concerns (Context vs. Memory):** Context Crystal manages **causal state and navigational tracking**. Associative cognitive memory is explicitly delegated to dedicated companion systems (such as Engram or external memory sidecars).
3. **Semantic Discovery Belongs in Extensions/Sidecars:** If semantic similarity across historical crystals is ever introduced (e.g. to bridge vocabulary mismatches when proposing lattice bonds, or to proactively recall lessons learned), it MUST be implemented as an **out-of-core companion extension** (e.g. via the Modular Spec Extension architecture, exporting `.ccrystals/<id>/extensions/embeddings.json` or CLI export hooks), never as a mandatory dependency of `core`.

## Consequences

### Positive

- **Guaranteed Portability & Performance:** Keeps native CLI binary footprint minimal, preserves sub-10ms cold starts, and ensures effortless cross-compilation across Linux, macOS, JVM, and Scala.js without native C-binding fragility.
- **Zero Token Cost for State Management:** Context management remains 100% offline, deterministic, and free of embedding API fees or model latency.
- **High-Fidelity Causal Integrity:** AI entities and human steersmen navigate unambiguous state transitions and active leases rather than fuzzy, out-of-order text fragments.
- **Clear Architectural Identity:** Solidifies Context Crystal's positioning as an objective navigational standard (akin to OpenTimelineIO) rather than an anthropomorphic agent memory.

### Negative / Trade-offs

- **Vocabulary Sensitivity in Discovery:** Finding prior crystals with disparate terminology (e.g., searching for "reconnection backoff" when a past crystal was titled "Netty channel recovery") requires lexical keyword awareness or manual lattice bond inspection.
- **No In-Core Semantic Chunking:** Hydrating very large artifacts (e.g., multi-megabyte terminal outputs) must rely on topological beam shaping (`--from`, `--to`, `--tail`) rather than automated embedding-based chunk retrieval.
