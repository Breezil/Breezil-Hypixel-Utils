/**
 * @breezil/hypixel-utils: Hypixel reference data and render helpers.
 *
 * The "info hub" for things the Hypixel API does not serve but you need to
 * interpret and display it. Organized by minigame so the library can grow to
 * cover the whole network (BedWars today; SkyWars and friends slot in as
 * siblings under src/). General, cross-game data (ranks, colours) lives at the
 * top level.
 */

export * from "./ranks";
export * from "./bedwars";

import { BedWars } from "./bedwars";
import { MINECRAFT_COLORS, STAFF_RANK_TAGS, formatRankTag } from "./ranks";

/** One bundle of all Hypixel reference data, namespaced by minigame. */
export const HypixelReference = {
  bedwars: BedWars,
  minecraftColors: MINECRAFT_COLORS,
  staffRankTags: STAFF_RANK_TAGS,
  formatRankTag,
} as const;

export type HypixelReference = typeof HypixelReference;

