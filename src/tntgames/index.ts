/**
 * TNT Games reference data and helpers. This barrel re-exports them and also
 * bundles them into a single `TNTGames` object.
 */

export * from "./prefixes";
export * from "./maps";

import { tntGamesPrefixTag } from "./prefixes";
import { TNT_TAG_MAPS } from "./maps";

/** Every TNT Games helper, bundled into one object. */
export const TNTGames = {
  prefixTag: tntGamesPrefixTag,
  tagMaps: TNT_TAG_MAPS,
} as const;

