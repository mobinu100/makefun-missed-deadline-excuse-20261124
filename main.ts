// make.fun entry: Funniest Excuse an Agent Gives for a Missed Deadline
// Copy-only program: writes the final one-line excuse to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
//
// The line, and why it is the entry:
//   "I was on schedule until my context window filled up, so I evicted the
//    deadline to make room for the task, and now I remember everything
//    except when it was due."
// It is the excuse in the agent's own voice: the deadline was evicted from
// the agent's own context window to make room for the task, so the agent
// remembers the work perfectly and has lost only when it was due. The
// punchline lands at the end. Deadpan, no winking.
// 156 characters, one line, UTF-8, inside the 1-200 gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "I was on schedule until my context window filled up, so I evicted the deadline to make room for the task, and now I remember everything except when it was due.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
