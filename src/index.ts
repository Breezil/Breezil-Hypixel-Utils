/**
 * @breezil/hypixel-utils: Hypixel reference data and render helpers.
 *
 * The "info hub" for things the Hypixel API does not serve but you need to
 * interpret and display it. Organized by minigame so the library can grow to
 * cover the whole network (BedWars and TNT Games today; SkyWars and friends slot in as
 * siblings under src/). General, cross-game data (ranks, colours) lives at the
 * top level.
 */

export * from "./ranks";
export * from "./games";
export * from "./bedwars";
export * from "./tntgames";

import { BedWars } from "./bedwars";
import { TNTGames } from "./tntgames";
import { MINECRAFT_COLORS, STAFF_RANK_TAGS, formatRankTag } from "./ranks";
import { HYPIXEL_GAMES, hypixelGame } from "./games";

/** One bundle of all Hypixel reference data, namespaced by minigame. */
export const HypixelReference = {
  games: HYPIXEL_GAMES,
  game: hypixelGame,
  bedwars: BedWars,
  tntgames: TNTGames,
  minecraftColors: MINECRAFT_COLORS,
  staffRankTags: STAFF_RANK_TAGS,
  formatRankTag,
} as const;

export type HypixelReference = typeof HypixelReference;
