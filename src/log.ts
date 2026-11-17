import { writeFileSync, appendFileSync } from "node:fs";

const LOG_FILE = "benchmark.log";

export function startLogging() {
  // Clear the log file at the start of each execution
  writeFileSync(LOG_FILE, "");

  const originalLog = console.log;
  console.log = (...args: unknown[]) => {
    const message = args.join(" ");
    originalLog(message);
    appendFileSync(LOG_FILE, message + "\n");
  };
}
