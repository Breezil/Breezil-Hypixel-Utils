# Getting Started

`@breezil/hypixel-utils` is a fully open-source TypeScript library: a static "info hub" for Hypixel. It bundles the reference data and small render helpers you need to interpret and display Hypixel data that the public API does not serve, like ranks and colours, every Hypixel game and its modes, BedWars prestiges and coloured star tags (including Prestige Customizer looks), generator tiers, shop prices, map build heights, the game event timeline, XP gains, challenges, quests, achievements, every cosmetic family, and TNT Games wins prefixes and maps.

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
HypixelReference.bedwars.starTag(8742); // "§8[§68742✭§8]"
HypixelReference.bedwars.cosmetics.sprays.length; // 147
HypixelReference.minecraftColors.RED; // "§c"
```

There is also a `BedWars` export (the same thing as `HypixelReference.bedwars`) if you only care about that game.

## How it is organized

The library is partitioned by minigame so it can grow to cover the whole network. Today that is BedWars and TNT Games; future games slot in as siblings.

- **General** (cross-game): ranks, staff tags, Minecraft colours, and every game with its modes. See [Ranks and Colours](/reference/ranks) and [Games](/reference/games).
- **BedWars**: [Prestiges](/reference/bedwars/prestiges), [Shop and Upgrades](/reference/bedwars/shop), [Maps, Events, XP, Modes](/reference/bedwars/game), [Challenges, Quests, Achievements](/reference/bedwars/progression), and cosmetics ([Gameplay](/reference/bedwars/cosmetics-gameplay), [Visual](/reference/bedwars/cosmetics-visual)).
- **TNT Games**: [Prefixes and Maps](/reference/tntgames).

Each reference page documents the exact exports, their TypeScript types, and the full data.

## The aggregate objects

Every key of the aggregates and the named export it points to.

`HypixelReference`:

| Key               | Export                                             |
| ----------------- | -------------------------------------------------- |
| `games`           | [`HYPIXEL_GAMES`](/reference/games#hypixel-games)  |
| `game`            | [`hypixelGame`](/reference/games#hypixelgame-type) |
| `bedwars`         | `BedWars` (below)                                  |
| `tntgames`        | `TNTGames` (below)                                 |
| `minecraftColors` | [`MINECRAFT_COLORS`](/reference/ranks)             |
| `staffRankTags`   | [`STAFF_RANK_TAGS`](/reference/ranks)              |
| `formatRankTag`   | [`formatRankTag`](/reference/ranks)                |

`BedWars` (also `HypixelReference.bedwars`):

| Key                                                              | Export                                                                                                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `teams`, `teamOrder`                                             | `BEDWARS_TEAMS`, `BEDWARS_TEAM_ORDER` ([Game](/reference/bedwars/game))                                                                                                                                                                                                                                                   |
| `maps`, `mapHeights`, `mapHeight`, `isMap`                       | `BEDWARS_MAPS`, `BEDWARS_MAP_HEIGHTS`, `bedWarsMapHeight`, `isBedWarsMap` ([Game](/reference/bedwars/game))                                                                                                                                                                                                               |
| `events`, `nextEvent`                                            | `BEDWARS_EVENTS`, `bedWarsNextEvent` ([Game](/reference/bedwars/game))                                                                                                                                                                                                                                                    |
| `modes`, `modeOf`, `dreamModes`                                  | `BEDWARS_MODES`, `bedWarsModeOf`, `BEDWARS_DREAM_MODES` ([Game](/reference/bedwars/game))                                                                                                                                                                                                                                 |
| `generatorTiers`, `generatorTier`                                | `BEDWARS_GENERATOR_TIERS`, `bedWarsGeneratorTier` ([Game](/reference/bedwars/game))                                                                                                                                                                                                                                       |
| `xpSources`                                                      | `BEDWARS_XP_SOURCES` ([Game](/reference/bedwars/game))                                                                                                                                                                                                                                                                    |
| `prestiges`, `prestigeName`                                      | `BEDWARS_PRESTIGES`, `bedWarsPrestigeName` ([Prestiges](/reference/bedwars/prestiges))                                                                                                                                                                                                                                    |
| `starTag`, `starSymbol`                                          | `bedWarsStarTag`, `bedWarsStarSymbol` ([Prestiges](/reference/bedwars/prestiges))                                                                                                                                                                                                                                         |
| `prestigeStars`, `prestigeBrackets`                              | `BEDWARS_PRESTIGE_STARS`, `BEDWARS_PRESTIGE_BRACKETS` ([Prestiges](/reference/bedwars/prestiges))                                                                                                                                                                                                                         |
| `shopItems`, `shopUpgrades`                                      | `BEDWARS_SHOP_ITEMS`, `BEDWARS_SHOP_UPGRADES` ([Shop](/reference/bedwars/shop))                                                                                                                                                                                                                                           |
| `challenges`, `inGameChallenges`, `quests`                       | `BEDWARS_CHALLENGES`, `BEDWARS_IN_GAME_CHALLENGES`, `BEDWARS_QUESTS` ([Progression](/reference/bedwars/progression))                                                                                                                                                                                                      |
| `achievements`, `tieredAchievements`, `legacyTieredAchievements` | `BEDWARS_CHALLENGE_ACHIEVEMENTS`, `BEDWARS_TIERED_ACHIEVEMENTS`, `BEDWARS_LEGACY_TIERED_ACHIEVEMENTS` ([Progression](/reference/bedwars/progression))                                                                                                                                                                     |
| `cosmetics.*`                                                    | `projectileTrails`, `victoryDances`, `finalKillEffects`, `sprays`, `islandToppers`, `deathCries`, `shopkeeperSkins`, `killMessages`, `glyphs`, `bedDestroys`, `woodSkins`, `figurines`: the matching `BEDWARS_*` lists ([Gameplay](/reference/bedwars/cosmetics-gameplay), [Visual](/reference/bedwars/cosmetics-visual)) |

`TNTGames` (also `HypixelReference.tntgames`): `prefixTag` is [`tntGamesPrefixTag`](/reference/tntgames) and `tagMaps` is [`TNT_TAG_MAPS`](/reference/tntgames).
