# wasm-demo

A performance demonstration calculating Pi using the Monte Carlo method. This project benchmarks the execution speed of WebAssembly (compiled from Rust) against native TypeScript running in the browser.

## Dependencies

To build and run this project, you will need the following toolchains installed:

- **Node.js & npm**: For the frontend Vite server and TypeScript dependencies.
- **Rust & Cargo**: For writing and compiling the backend logic ([Install rustup](https://rustup.rs/)).
- **wasm-pack**: For packaging the Rust code into a WebAssembly/npm module.
  ```bash
  cargo install wasm-pack
  ```

## How to Run the Project

1. **Install frontend dependencies:**

   ```bash
   npm install
   ```

2. **Run and build the project:**
   ```bash
   npm run dev
   ```
   this compiles the rust code to webassembly and runs vite

**Compile rust individually:**

```bash
  npm run build:hello
```

compiles the hello-wasm rust code into /wasm/hello-wasm/pkg

```bash
npm run build:benchmark
```

compiles the pi benchmark rust code into /wasm/pi-benchmark/pkg

```bash
npm run build:wasm
```

runs both commands above

## Sources Used for the Project

- [WebAssembly Official Documentation](https://webassembly.org/)
- [MDN Guide: Compiling from Rust to WebAssembly](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Rust_to_Wasm)
- [Estimating the Value of Pi using Monte Carlo (GeeksforGeeks)](https://www.geeksforgeeks.org/dsa/estimating-value-pi-using-monte-carlo/)

---

## Reference: How to make a new Wasm Rust project

If you want to create a new Rust-to-WebAssembly package from scratch, follow these steps:

1. **Initialize a new library crate:**
   Creates a base project with a `Cargo.toml` and `src/lib.rs`.

   ```bash
   cargo new --lib project_name
   ```

2. **Configure `Cargo.toml`:**
   Add the following lines to tell Rust to compile a dynamic library and include the bindings generator:

   ```toml
   [lib]
   crate-type = ["cdylib"]

   [dependencies]
   wasm-bindgen = "0.2"
   ```

3. **Write the Rust code:**
   In your `src/lib.rs`, include the prelude import:
   ```rust
   use wasm_bindgen::prelude::*;
   ```
   Then, add the `#[wasm_bindgen]` macro directly above any function you want to expose to TypeScript/JavaScript:
   ```rust
   #[wasm_bindgen]
   pub fn my_function() {
       // ...
   }
   ```
