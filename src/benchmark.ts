import init, { rs_calculate_pi } from "../wasm/pi-benchmark/pkg";

export async function runBenchmark(powerSteps: number) {
  console.log("*** WebAssembly vs TypeScript Performance Benchmark ***");

  await init();

  for (let power = 1; power <= powerSteps; power++) {
    const sampleSize = Math.pow(10, power);

    console.log(
      `\n--- Running test with ${sampleSize.toLocaleString()} iterations ---`,
    );

    const tsStartTime = performance.now();
    const piFromTypeScript = calculatePiTypeScript(sampleSize);
    const timeTypeScriptMs = performance.now() - tsStartTime;

    const rustStartTime = performance.now();
    const piFromRust = rs_calculate_pi(sampleSize);
    const timeRustMs = performance.now() - rustStartTime;

    console.log(
      `TypeScript : Pi = ${piFromTypeScript} | Time = ${timeTypeScriptMs.toFixed(2)} ms`,
    );
    console.log(
      `Rust (Wasm): Pi = ${piFromRust} | Time = ${timeRustMs.toFixed(2)} ms`,
    );

    // Calculate the speedup ratio
    if (timeRustMs > 0) {
      const speedup = timeTypeScriptMs / timeRustMs;
      console.log(
        `Result     : WebAssembly was ${speedup.toFixed(2)}x faster!`,
      );
    }
  }
}

function calculatePiTypeScript(totalDotsToThrow: number): number {
  let dotsInsideCircle: number = 0;

  for (let i = 0; i < totalDotsToThrow; i++) {
    const randX: number = Math.random();
    const randY: number = Math.random();

    // Calculate distance from center (x^2 + y^2).
    // If it's <= 1.0, the point fell inside the circle.
    const distanceFromCenterSquared = randX * randX + randY * randY;

    if (distanceFromCenterSquared <= 1.0) {
      dotsInsideCircle += 1;
    }
  }

  // Pi is 4 * (points in circle / total points)
  const estimatedPi = (4.0 * dotsInsideCircle) / totalDotsToThrow;
  return estimatedPi;
}
