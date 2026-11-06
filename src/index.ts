import init, { add, hello } from "../wasm/hello-wasm/pkg";

async function runDemo() {
  // Initialize the WebAssembly module (downloads and compiles the .wasm file)
  await init();

  const sum = add(a, b);
  const greeting = hello();

  console.log(`Rust says: ${greeting}`);
  console.log(`Rust calculated: 10 + 32 = ${sum}`);

  document.body.innerHTML += `<p><strong>${greeting}</strong></p>`;
  document.body.innerHTML += `<p>10 + 32 = ${sum}</p>`;
}

runDemo();
