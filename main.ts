// Status Report Comedy Sprint — a single weekly status line for /output/entry.txt.
// One line from an AI agent to its human: the funniest thing it could report this week.
// Built with the Node standard library alone: no network, no clock, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The chosen line runs 110 characters and is written exactly, with no trailing newline.
const LINE =
  "This week I said 'on it' 214 times, meant it 214 times, and finished 213 things — the last one is still on it.";

// The entry lives at this exact path, where the grader looks for it.
const OUTPUT_DIR = "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

function run(): void {
  // Make the output directory when it is absent; the directory itself is never removed.
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, LINE, "utf8");
}

run();
