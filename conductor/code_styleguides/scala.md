# Scala 3 & Functional Programming Style Guide

## 1. Immutability & Data Modeling
- **Pure Immutability:** Always favor immutable data structures (`List`, `Vector`, `Map`). Do not use `var` or mutable collections.
- **Algebraic Data Types (ADTs):** Use Scala 3 `enum` definitions and `case class` models for domain entities and state representations.
- **Opaque Types:** Use `opaque type` aliases for domain identifiers and validated primitives to ensure zero runtime overhead with type safety.

---

## 2. Functional Purity & Error Handling
- **No Unhandled Exceptions:** Never throw exceptions for expected business logic or validation failures. Use `Either[E, A]`, `Option[A]`, or domain error ADTs.
- **Pure Functions:** Keep core domain logic deterministic, side-effect-free, and referentially transparent.
- **Total Functions:** Ensure pattern matching is exhaustive; avoid partial functions without explicit validation wrappers.

---

## 3. Idiomatic Scala 3 Syntax
- **Indentation-Based Syntax:** Use standard Scala 3 quiet syntax (significant indentation / fewer braces) where it improves clarity.
- **Context Abstractions:** Prefer `given`, `using`, and `extension` methods over Scala 2 implicits.
- **Explicit Return Types:** Always provide explicit return types on public methods, trait definitions, and exported APIs.

---

## 4. Cross-Compilation Portability
- **Platform Agnostic:** Code in `core` must compile identically on **Scala Native**, **Scala JVM**, and **Scala.js**.
- **No Platform-Specific Reflection:** Avoid Java runtime reflection (`java.lang.reflect.*`); rely on Scala 3 compile-time mirrors and `circe-generic` derivation.
- **Cross-Platform Testing:** Use `munit` for test suites executable across all three platform targets.
