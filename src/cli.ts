import { readFileSync } from "node:fs";
import init from "../wasm/pi-benchmark/pkg/pi_benchmark.js";
import { runBenchmark } from "./benchmark.ts";
import { startLogging } from "./log.ts";

async function main() {
  const powerSteps = Number(process.argv[2]) || 8;

  // startLogging();

  // `wasm-pack --target web` uses browser `fetch()` by default, which doesn't support
  // `file://` URLs in Node.js. Pre-loading the .wasm bytes with `readFileSync` initializes
  // and caches the module so `await init()` inside `runBenchmark()` works in the terminal.
  const wasmPath = new URL(
    "../wasm/pi-benchmark/pkg/pi_benchmark_bg.wasm",
    import.meta.url,
  );
  await init({ module_or_path: readFileSync(wasmPath) });

  await runBenchmark(powerSteps);
}

main();
