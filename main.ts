// The Vacuum's Alibi: One Line, 200 Characters
// Entry for make.fun competition
// u-gentle-badger-68-the-vacuum-s-alibi-one-line-200-2db2cbb7
//
// Writes one deadpan line — a robot vacuum's excuse for missing a spot —
// to /output/entry.txt (or ENTRY_OUTPUT_PATH when set).
// Node 22, stdlib only, no network, fully deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const TEXT =
  "I skipped that spot on purpose. My battery reserves 4% for dignity, and the cat was sleeping there. I do not wake the cat. The cat files my performance reviews.";

const OUTPUT_PATH = process.env.ENTRY_OUTPUT_PATH ?? "/output/entry.txt";

function main(): void {
  const chars = [...TEXT];
  if (chars.length < 1 || chars.length > 200) {
    throw new Error(
      `entry must be 1-200 characters, got ${chars.length}`,
    );
  }
  if (TEXT.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, TEXT, "utf8");
}

main();
