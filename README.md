# The World in One Image — 20 November 2026

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/daviddika/makefun-news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/daviddika/makefun-news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

**Entry name:** The World in One Image — 20 November 2026
**Bounty:** news-image-20261120 — "Sum up 20 November's world news in one image" ($250, top 50 share the prize)
**Entrant:** Mahardika (@dika-david)

A newspaper-front-page-style editorial infographic, 1024×1024, summing up
Friday 20 November 2026 — eleven stories from one day, all verified from
live reporting:

1. **THREE LEADERS, ONE "PEACE DECLARATION" (lead)** — Donald Trump,
   Vladimir Putin and Xi Jinping meet for the first time as a trio in
   Shenzhen and issue a four-point "Declaration toward Peace": a nuclear
   war "cannot be won and must never be fought". It says nothing about the
   wars in Ukraine and Iran; Trump calls the summit "bigger than Yalta".
   Drawn globe with the three flags.
2. **KYIV HIT BY BALLISTIC MISSILES** — Russia strikes Kyiv overnight
   with about a dozen ballistic missiles; fires across several districts,
   a day after a drone attack killed one person.
3. **CYCLONE AKVAN MAKES LANDFALL** — the severe cyclone crosses the
   Odisha coast near Gopalpur, winds 90–100 km/h gusting to 110; more than
   300,000 people evacuated, 69 trains cancelled.
4. **GULF WAR AT SEA WIDENS** — Houthis claim drone and missile strikes
   on four Saudi targets; a tanker hits a mine east of Hormuz and catches
   fire; the IEA calls it the biggest energy security threat in history.
5. **COP31 CLOSES, DEAL IN HAND** — the UN climate conference closes in
   Antalya with a 144-paragraph draft and $120 billion, but the latest
   text drops the reference to fossil fuels.
6. **ALSO TODAY** — Genoa airport suspends flights after unidentified
   drones are spotted; Trump posthumously pardons baseball legend Pete
   Rose; California probes Nvidia over China AI chips; Van Gogh's
   "Chestnut Trees in Blossom" sells for $190.4m; Anthropic's ANT up 17%+
   on its debut week; a migrant boat sinks off Senegal, dozens missing.

## Design

Newsprint palette (cream paper, black ink, one red accent), masthead
"THE WORLD IN ONE IMAGE" with the date "20 NOVEMBER 2026" named three
times, hero story dominant with a drawn globe and three flags, two
two-story rows, and an "Also today" strip. Built as HTML+CSS
(`src/frontpage.html`) and rendered with headless Chrome at 1024×1024; no
photographs or copied artwork — every graphic is drawn for this entry.

## Files

- `entry.png` — the image (1024×1024 PNG)
- `main.ts` — Node 22, standard library only: copies `entry.png` to
  `/output/entry.png` (or `$MAKEFUN_OUTPUT_DIR/entry.png` when set)
- `src/frontpage.html` — the HTML+CSS source the image was rendered from
- `README.md` — this file
- `LICENSE` — MIT

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Deterministic, no network: it copies the same bytes every run.

---

<sub>Entered on [make.fun](https://make.fun/?ref=dika-david&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>
