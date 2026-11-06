import init, { add, hello } from "../wasm/hello-wasm/pkg";
import { runBenchmark } from "./benchmark";

async function runDemo() {
  console.log("*** Hellow WebAssembly ***");
  // Initialize the WebAssembly module (downloads and compiles the .wasm file)
  await init();

  const sum = add(32, 10);
  const greeting = hello();

  console.log(`Rust says: ${greeting}`);
  console.log(`Rust calculated: 10 + 32 = ${sum}`);

  document.body.innerHTML += `<p><strong>${greeting}</strong></p>`;
  document.body.innerHTML += `<p>10 + 32 = ${sum}</p>`;

  runBenchmark(9);
}

runDemo();
