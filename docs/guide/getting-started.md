# Getting Started

`@breezil/hypixel-utils` is a fully open-source TypeScript library: a static "info hub" for Hypixel. It bundles the reference data and small render helpers you need to interpret and display Hypixel data that the public API does not serve, like ranks and colours, BedWars prestiges and coloured star tags, shop prices, map build heights, the game event timeline, XP gains, challenges, quests, achievements, and every cosmetic family.

It is pure and makes no network calls. It works standalone whenever you need to turn raw Hypixel values into something readable.

## Install

```bash
npm install @breezil/hypixel-utils
```

It requires Node.js `>=20`.

## Two ways to use it

Everything is exported by name from the package root, and everything is also bundled into a single `HypixelReference` object that is namespaced by minigame. Use whichever fits.

```ts
// 1. Import exactly what you need, by name
import {
  formatRankTag,
  bedWarsStarTag,
  bedWarsMapHeight,
  BEDWARS_SHOP_ITEMS,
} from "@breezil/hypixel-utils";

const rank = formatRankTag({
  newPackageRank: "MVP_PLUS",
  rankPlusColor: "RED",
}); // "§b[MVP§c+§b]"
const star = bedWarsStarTag(1234); // "§7[§e1234§6✪§7]"
const height = bedWarsMapHeight("Gateway"); // 129 (case-insensitive)
```

```ts
// 2. Reach everything through the aggregate, namespaced by game
import { HypixelReference } from "@breezil/hypixel-utils";

HypixelReference.bedwars.prestiges.length; // 101
HypixelReference.bedwars.starTag(8742); // "§8[§68742✥§8]"
HypixelReference.bedwars.cosmetics.sprays.length; // 147
HypixelReference.minecraftColors.RED; // "§c"
```

There is also a `BedWars` export (the same thing as `HypixelReference.bedwars`) if you only care about that game.

## How it is organized

The library is partitioned by minigame so it can grow to cover the whole network. Today that is BedWars; future games slot in as siblings.

- **General** (cross-game): ranks, staff tags, Minecraft colours. See [Ranks and Colours](/reference/ranks).
- **BedWars**: [Prestiges](/reference/bedwars/prestiges), [Shop and Upgrades](/reference/bedwars/shop), [Maps, Events, XP, Modes](/reference/bedwars/game), [Challenges, Quests, Achievements](/reference/bedwars/progression), and cosmetics ([Gameplay](/reference/bedwars/cosmetics-gameplay), [Visual](/reference/bedwars/cosmetics-visual)).

Each reference page documents the exact exports, their TypeScript types, and the full data.

