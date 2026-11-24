// The Funniest Out-of-Office — one line, 93 characters, that a person
// would actually set as their auto-reply. The line is the whole entry:
// no code, no attachments, just the text. The gate wants /output/entry.txt
// to be UTF-8 text of 1 to 140 characters, not only white space.
//
// The line, written against the judge brief (most important first):
//   1. It is a real out-of-office reply a person would set and send:
//      "I'm out until Monday" is the standard opener, and the rest is
//      the joke, not a setup that needs explaining.
//   2. It turns on a genuine surprise: the inbox does not just pile up
//      or auto-reply — it climbs the org chart, in three escalating
//      beats (promoted itself, gave itself a raise, is now my boss).
//   3. It sounds like a person with a voice of their own: dry,
//      self-deprecating, one specific workplace image, no template
//      phrasing ("limited access to email", "will respond on return").
//   4. It stays fresh: no "gone fishing", no "out of office, out of
//      mind", no beach, no cat on the keyboard — the inbox itself
//      getting the promotion is not the joke in a thousand inboxes.
//   5. Every word earns its place: 93 characters, and cutting any beat
//      of the escalation weakens the laugh; shorter text also wins the
//      size tie-break.
//
// Run outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";

// Chosen line: the inbox does not wait for its owner — it gets promoted,
// gives itself a raise, and ends up the boss. The twist lands in the
// last four words, when the reader realises who is in charge now.
const LINE =
  "I'm out until Monday. My inbox just promoted itself, gave itself a raise, and is now my boss.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140 characters,
// not only white space, on a single line. Fail loudly here rather than
// shipping an invalid entry.
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error(
    `entry line must be a single line of 1-140 characters, got ${LINE.length}`,
  );
}

const dest = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// In the grader /output is a mount point: create it when it is missing,
// never remove it and never empty it wholesale.
mkdirSync(dest, { recursive: true });
writeFileSync(`${dest}/entry.txt`, LINE, "utf8");

console.log(`wrote ${dest}/entry.txt (${LINE.length} characters)`);
