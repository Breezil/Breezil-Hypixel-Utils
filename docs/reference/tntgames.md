# TNT Games

Reference helpers for Hypixel's TNT Games. All exports come from `@breezil/hypixel-utils`, and are bundled as `HypixelReference.tntgames`.

## `tntGamesPrefixTag(wins, color?)`

The wins prefix Hypixel puts before a player's name in a TNT Games game, such as `§6[2200]`.

```ts
function tntGamesPrefixTag(wins: number, color?: string | null): string;
```

Each TNT game has its own prefix: the player's wins in that game, in brackets, in a colour the player picks from the ones they have unlocked. The API keeps the pick per game as `prefix_<game>` in the `TNTGames` stats, for example `prefix_tntag: "gold"`. Pass that value as `color`; an empty or unknown one draws in gray (`§7`).

```ts
import { tntGamesPrefixTag } from "@breezil/hypixel-utils";

tntGamesPrefixTag(2200, "gold"); // "§6[2200]"
tntGamesPrefixTag(454, "dark_green"); // "§2[454]"
tntGamesPrefixTag(3, ""); // "§7[3]"
```

The colour names are the ones in [`MINECRAFT_COLORS`](./ranks.md#minecraft-colors), in any case. The gray used when no colour is picked has not been confirmed in game.

## `TNT_TAG_MAPS`

```ts
const TNT_TAG_MAPS: readonly string[];
```

Every TNT Tag map in play, named as Hypixel reports it in a player's location (`map`), so it can be compared with it directly. Taken from the Hypixel wiki's TNT Tag maps category, without the maps the wiki marks permanently retired (Colony, Snakes and Ladders), and checked against the maps seen in real games. Bundled as `HypixelReference.tntgames.tagMaps`.

