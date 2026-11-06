# wasm-demo

A demo of a calculation of PI using the Monte Carlo method. The project compares the code running on rust compiled with wasm and ts.

## dependencies

## How to run the project

## Sources used for the project

[wasm documentation](https://webassembly.org/)
[rust with wasm exemple](https://developer.mozilla.org/en-US/docs/WebAssembly/Guides/Rust_to_Wasm)
[monte carlo exemple method](https://www.geeksforgeeks.org/dsa/estimating-value-pi-using-monte-carlo/)

## How to make a new wasm rust project:

- cargo new --lib [project_name]
  -> creates a base project in /[project_name] with a Cargo.toml and src/lib.rs

- cargo install wasm-pack
  -> installs wasm-pack on your machine

- Add in Cargo.toml:
  [lib]
  crate-type = ["cdylib"]

  [dependencies]
  wasm-bindgen = "0.2"

- include
  use wasm_bindgen::prelude::\*;
  in your rust file
- use #[wasm_bindgen]
  from the import on top of the function that you want to compile to wasm (and ts/js)
