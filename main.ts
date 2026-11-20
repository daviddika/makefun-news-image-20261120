// "The World in One Image — 20 November 2026" — make.fun news-image-20261120
// entry (Node 22, standard library only).
// The image is entry.png beside this file: a newspaper front page summing up
// Friday 20 November 2026 — the Trump–Putin–Xi "peace declaration" in
// Shenzhen, Russian ballistic missiles over Kyiv, Cyclone Akvan's landfall
// in Odisha, the widening Gulf war at sea, and COP31 closing in Antalya,
// plus a six-item "Also today" strip (Genoa drones, Pete Rose pardon,
// Nvidia probe, Van Gogh sale, Anthropic's debut week, Senegal boat sinking).
// The program copies it to /output/entry.png (or $MAKEFUN_OUTPUT_DIR when set).
// Deterministic, no network: it writes the same bytes on every run.
// Nothing is read except entry.png beside this file; nothing is fetched.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
