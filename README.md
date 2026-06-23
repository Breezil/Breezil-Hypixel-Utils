<div align="center">

<img src="docs/logo.png" alt="Breezil-Hypixel-Utils logo" width="120" />

# Breezil-Hypixel-Utils

**The Hypixel info hub: static reference data and render helpers for the things the API does not serve. Organized by minigame, fully typed, no network.**

[![npm](https://img.shields.io/npm/v/@breezil/hypixel-utils?style=flat-square&logo=npm)](https://www.npmjs.com/package/@breezil/hypixel-utils)
[![Docs](https://img.shields.io/github/actions/workflow/status/Breezil/Breezil-Hypixel-Utils/docs.yml?branch=main&style=flat-square&label=docs)](https://breezil.github.io/Breezil-Hypixel-Utils/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue?style=flat-square)](LICENSE)
[![Discord](https://img.shields.io/discord/1460052855389159527?style=flat-square&logo=discord&logoColor=white&label=discord)](https://discord.gg/7SxbNMYQNa)

[Documentation](https://breezil.github.io/Breezil-Hypixel-Utils/)
&nbsp;&nbsp;|&nbsp;&nbsp;
[Report a bug](https://github.com/Breezil/Breezil-Hypixel-Utils/issues/new?labels=bug)
&nbsp;&nbsp;|&nbsp;&nbsp;
[Request a feature](https://github.com/Breezil/Breezil-Hypixel-Utils/issues/new?labels=enhancement)
&nbsp;&nbsp;|&nbsp;&nbsp;
[Join the Discord](https://discord.gg/7SxbNMYQNa)

</div>

---

## About

Breezil-Hypixel-Utils is a fully open-source TypeScript library: a static "info hub" for Hypixel. It bundles the reference data and render helpers you need to interpret and display Hypixel data the public API does not serve, things like ranks and colours, BedWars teams, prestiges and coloured star tags, shop prices, map build heights, the event timeline, XP gains, challenges, quests, achievements, and every cosmetic family.

It is pure: no network, no config, no side effects. It powers [`@breezil/hypixel-api`](https://github.com/Breezil/Breezil-Hypixel-Api) and works just as well standalone. The library is partitioned by minigame so it can grow to cover the whole network (BedWars today; more games slot in as siblings).

This README is a summary. The **[full reference lives in the docs](https://breezil.github.io/Breezil-Hypixel-Utils/)**, where every export, type, and data table is documented in detail.

> Part of [**Breezil**](https://github.com/Breezil), an open-source org building clean,
> well-documented projects, tools, and bots. No closed blobs, no sketchy builds. Every line
> is here to read.

> **Using a third-party API or platform?** Breezil-Hypixel-Utils follows the terms of service of
> anything it integrates with. We do not ship anything designed to abuse a platform or get
> accounts banned.

## Install

```bash
npm install @breezil/hypixel-utils
```

Requires Node.js `>=20`.

## Quick Start

Import what you need by name, or reach everything through the `HypixelReference` aggregate (namespaced by minigame).

```ts
import {
  formatRankTag,
  bedWarsStarTag,
  bedWarsMapHeight,
  HypixelReference,
} from "@breezil/hypixel-utils";

formatRankTag({ newPackageRank: "MVP_PLUS", rankPlusColor: "RED" }); // "§b[MVP§c+§b]"
bedWarsStarTag(1234); // "§7[§e1234§6✪§7]"
bedWarsMapHeight("Gateway"); // 129 (case-insensitive)

HypixelReference.bedwars.prestiges.length; // 101
HypixelReference.bedwars.cosmetics.sprays.length; // 147
HypixelReference.minecraftColors.RED; // "§c"
```

## What's inside

A brief pass over everything. See the [docs](https://breezil.github.io/Breezil-Hypixel-Utils/) for the complete tables and signatures.

| Area                     | What you get                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **General**              | Minecraft colour codes, staff rank tags, and `formatRankTag` to build a player's coloured rank. [Docs](https://breezil.github.io/Breezil-Hypixel-Utils/reference/ranks)                                                                                                                                                                                                       |
| **BedWars: Prestiges**   | All 101 prestiges (level 1 to 10000) with names and colour codes, plus `bedWarsStarTag` and `bedWarsPrestigeName`. [Docs](https://breezil.github.io/Breezil-Hypixel-Utils/reference/bedwars/prestiges)                                                                                                                                                                        |
| **BedWars: Shop**        | Every item-shop price and team-upgrade cost, with Solo/Doubles vs 3s/4s differences. [Docs](https://breezil.github.io/Breezil-Hypixel-Utils/reference/bedwars/shop)                                                                                                                                                                                                           |
| **BedWars: Game**        | The 8 teams, the full map list, per-map build heights, the event timeline, current XP gains, and dream modes. [Docs](https://breezil.github.io/Breezil-Hypixel-Utils/reference/bedwars/game)                                                                                                                                                                                  |
| **BedWars: Progression** | Challenges, daily/weekly quests, and the full achievement set. [Docs](https://breezil.github.io/Breezil-Hypixel-Utils/reference/bedwars/progression)                                                                                                                                                                                                                          |
| **BedWars: Cosmetics**   | Projectile trails, victory dances, final kill effects, sprays, island toppers, glyphs, shopkeeper skins, kill messages, death cries, bed destroys, wood skins, and figurines. [Gameplay](https://breezil.github.io/Breezil-Hypixel-Utils/reference/bedwars/cosmetics-gameplay) / [Visual](https://breezil.github.io/Breezil-Hypixel-Utils/reference/bedwars/cosmetics-visual) |

Every dataset is exported by name (for example `BEDWARS_PRESTIGES`, `BEDWARS_SHOP_ITEMS`, `BEDWARS_SPRAYS`) and is also reachable through `HypixelReference.bedwars` (or the `BedWars` export).

## Documentation

The complete reference lives at **[breezil.github.io/Breezil-Hypixel-Utils](https://breezil.github.io/Breezil-Hypixel-Utils/)**: every export, its TypeScript type, and the full data tables, organized by minigame.

## Tech Stack

| Layer       | Choice     |
| ----------- | ---------- |
| Language    | TypeScript |
| Build       | `tsc -b`   |
| Package mgr | npm        |

## Project Structure

```text
Breezil-Hypixel-Utils/
├─ src/
│  ├─ index.ts            # Entry point + HypixelReference aggregate
│  ├─ ranks.ts            # General: Minecraft colours, staff tags, formatRankTag
│  └─ bedwars/            # Everything BedWars, one file per dataset
│     ├─ index.ts         # BedWars barrel + BedWars aggregate
│     ├─ prestiges.ts  shop.ts  maps.ts  events.ts  xp.ts
│     ├─ modes.ts  challenges.ts  quests.ts  achievements.ts  teams.ts
│     └─ cosmetics/       # One file per cosmetic family
├─ docs/                  # VitePress docs site
└─ package.json
```

## Releases and Deployment

The docs site auto-deploys to GitHub Pages on every push to `main`. The npm package is published when a GitHub Release is published (Trusted Publishing, with provenance). Releases follow [Semantic Versioning](https://semver.org).

## Roadmap

- [ ] Add more Hypixel minigames as sibling sections (SkyWars, Duels, and beyond)
- [ ] Expand cross-game reference data the API does not serve

Want something added? [Open a feature request](https://github.com/Breezil/Breezil-Hypixel-Utils/issues/new?labels=enhancement).

## Contributing

Contributions are welcome and genuinely appreciated, first timers included. 💙

1. Fork the repo and create your branch: `git checkout -b feat/my-feature`
2. Make your changes, keeping data accurate and faithful to the source
3. Run `npm run build` to keep the types green
4. Commit using [Conventional Commits](https://www.conventionalcommits.org): `feat: add skywars reference`
5. Open a Pull Request and describe what changed and why

New to the project? Look for issues labeled
[`good first issue`](https://github.com/Breezil/Breezil-Hypixel-Utils/labels/good%20first%20issue).
See the [Breezil contributing guide](https://github.com/Breezil/.github/blob/main/CONTRIBUTING.md) for the full guide.

## Code of Conduct

This project follows the Breezil [Code of Conduct](https://github.com/Breezil/.github/blob/main/CODE_OF_CONDUCT.md). By taking part you agree to uphold it. Be kind, be welcoming.

## License

Distributed under the **MIT License**. See [`LICENSE`](LICENSE) for the full text.

## Support and Community

- 💬 **Discord:** [Join the Breezil community](https://discord.gg/7SxbNMYQNa)
- 🐛 **Issues:** [github.com/Breezil/Breezil-Hypixel-Utils/issues](https://github.com/Breezil/Breezil-Hypixel-Utils/issues)
- 💡 **Discussions:** [github.com/Breezil/Breezil-Hypixel-Utils/discussions](https://github.com/Breezil/Breezil-Hypixel-Utils/discussions)

## Acknowledgements

- The [Hypixel API](https://api.hypixel.net) and community-documented reference data
- Everyone in the [Breezil Discord](https://discord.gg/7SxbNMYQNa)
- The [`@breezil/hypixel-api`](https://github.com/Breezil/Breezil-Hypixel-Api) project this hub feeds

---

<div align="center">
<sub>Built with 💙 by <a href="https://github.com/Breezil">Breezil</a>.</sub>
</div>

