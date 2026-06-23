/**
 * All BedWars reference data and helpers. Each dataset lives in its own focused
 * file; this barrel re-exports them and also bundles them into a single `BedWars`
 * object for convenience.
 */

export * from "./teams";
export * from "./maps";
export * from "./events";
export * from "./prestiges";
export * from "./shop";
export * from "./modes";
export * from "./challenges";
export * from "./xp";
export * from "./quests";
export * from "./achievements";
export * from "./cosmetics";

import { BEDWARS_TEAMS } from "./teams";
import {
  BEDWARS_MAP_HEIGHTS,
  BEDWARS_MAPS,
  bedWarsMapHeight,
  isBedWarsMap,
} from "./maps";
import { BEDWARS_EVENTS, bedWarsNextEvent } from "./events";
import {
  BEDWARS_PRESTIGES,
  bedWarsPrestigeName,
  bedWarsStarTag,
} from "./prestiges";
import { BEDWARS_SHOP_ITEMS, BEDWARS_SHOP_UPGRADES } from "./shop";
import { BEDWARS_DREAM_MODES } from "./modes";
import { BEDWARS_CHALLENGES } from "./challenges";
import { BEDWARS_XP_SOURCES } from "./xp";
import { BEDWARS_QUESTS, BEDWARS_IN_GAME_CHALLENGES } from "./quests";
import {
  BEDWARS_CHALLENGE_ACHIEVEMENTS,
  BEDWARS_TIERED_ACHIEVEMENTS,
  BEDWARS_LEGACY_TIERED_ACHIEVEMENTS,
} from "./achievements";
import {
  BEDWARS_PROJECTILE_TRAILS,
  BEDWARS_VICTORY_DANCES,
  BEDWARS_FINAL_KILL_EFFECTS,
  BEDWARS_SPRAYS,
  BEDWARS_ISLAND_TOPPERS,
  BEDWARS_DEATH_CRIES,
  BEDWARS_SHOPKEEPER_SKINS,
  BEDWARS_KILL_MESSAGES,
  BEDWARS_GLYPHS,
  BEDWARS_BED_DESTROYS,
  BEDWARS_WOOD_SKINS,
  BEDWARS_FIGURINES,
} from "./cosmetics";

/** Every BedWars dataset and helper, bundled into one object. */
export const BedWars = {
  teams: BEDWARS_TEAMS,
  maps: BEDWARS_MAPS,
  mapHeights: BEDWARS_MAP_HEIGHTS,
  events: BEDWARS_EVENTS,
  prestiges: BEDWARS_PRESTIGES,
  shopItems: BEDWARS_SHOP_ITEMS,
  shopUpgrades: BEDWARS_SHOP_UPGRADES,
  dreamModes: BEDWARS_DREAM_MODES,
  challenges: BEDWARS_CHALLENGES,
  xpSources: BEDWARS_XP_SOURCES,
  quests: BEDWARS_QUESTS,
  inGameChallenges: BEDWARS_IN_GAME_CHALLENGES,
  achievements: BEDWARS_CHALLENGE_ACHIEVEMENTS,
  tieredAchievements: BEDWARS_TIERED_ACHIEVEMENTS,
  legacyTieredAchievements: BEDWARS_LEGACY_TIERED_ACHIEVEMENTS,
  cosmetics: {
    projectileTrails: BEDWARS_PROJECTILE_TRAILS,
    victoryDances: BEDWARS_VICTORY_DANCES,
    finalKillEffects: BEDWARS_FINAL_KILL_EFFECTS,
    sprays: BEDWARS_SPRAYS,
    islandToppers: BEDWARS_ISLAND_TOPPERS,
    deathCries: BEDWARS_DEATH_CRIES,
    shopkeeperSkins: BEDWARS_SHOPKEEPER_SKINS,
    killMessages: BEDWARS_KILL_MESSAGES,
    glyphs: BEDWARS_GLYPHS,
    bedDestroys: BEDWARS_BED_DESTROYS,
    woodSkins: BEDWARS_WOOD_SKINS,
    figurines: BEDWARS_FIGURINES,
  },
  prestigeName: bedWarsPrestigeName,
  starTag: bedWarsStarTag,
  mapHeight: bedWarsMapHeight,
  isMap: isBedWarsMap,
  nextEvent: bedWarsNextEvent,
} as const;

