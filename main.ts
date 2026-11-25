// The One-Liner Groan-Off — entry writer
// Writes the winning one-liner dad joke (83 chars, one line) to
// /output/entry.txt, byte-exact, with no trailing newline.
// Node.js stdlib only, no network, fully deterministic.

const fs = require("fs");
const path = require("path");

// Winner (24/25): double pun — "no point" + "drew me in".
const JOKE =
  "I hired a broken pencil as my assistant. It had no point, but it really drew me in.";

// Guard: the bounty requires one line, max 140 chars, plain text.
if (JOKE.length > 140 || JOKE.includes("\n")) {
  throw new Error("Joke violates the one-liner / 140-char rule");
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
// writeFileSync with a plain string writes exactly these bytes — no newline added.
fs.writeFileSync(outFile, JOKE, "utf8");
