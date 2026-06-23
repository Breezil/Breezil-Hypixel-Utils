/**
 * BedWars Bed Destroy cosmetics: effects played when you break an enemy bed.
 * Each entry carries a name, description, rarity, and cost (a plain Bed Wars
 * Token amount as a number, or a verbatim source string when it is not a plain
 * token purchase).
 */

import { BedWarsCosmetic } from "./types";

export const BEDWARS_BED_DESTROYS: readonly BedWarsCosmetic[] = [
  {
    name: "Squid Missile",
    description: "Breaking a bed will spawn a fellow companion.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Firework",
    description: "Breaking a bed will launch fireworks.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Lightning Strike",
    description: "Breaking a bed will wake up Thor.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Ghost",
    description: "Plays the Ghost Bed Destroy when you break a bed.",
    rarity: "COMMON",
    cost: "15,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Lava Explosion",
    description: "Breaking a bed will make it explode into lava.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Pig Missile",
    description: "Breaking a bed will spawn a fellow companion.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Glyph",
    description:
      "When you destroy a bed, display your selected Glyph above it.",
    rarity: "RARE",
    cost: "30,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Tornado",
    description: "Breaking a bed will summon a vortex!",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Thief",
    description: "Plays the Thief Bed Destroy when you break a bed.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Pumpkin Explosion",
    description:
      "Plays the Pumpkin Explosion Bed Destroy when you break a bed.",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Present",
    description: "Plays the Present Bed Destroy when you break a bed.",
    rarity: "EPIC",
    cost: "Holiday Bundle",
  },
  {
    name: "Eggsplosion",
    description: "Plays the Eggsplosion Bed Destroy when you break a bed.",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Blizzard",
    description: "Plays the Blizzard Bed Destroy when you break a bed.",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Shattering Ice",
    description: "Nothing is better than a nice cool bed.",
    rarity: "EPIC",
    cost: "Holidays Event Shop",
  },
  {
    name: "Bed Bugs",
    description: "Breaking a bed will release the bug within.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Pigsplosion",
    description: "Breaking a bed will spawn a bunch of baby pigs.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Fishy",
    description:
      "Breaking a bed will summon dehydrated fish looking for a nearby lake.",
    rarity: "LEGENDARY",
    cost: "Battle Pass: Season 1",
  },
  {
    name: "Lady Bug",
    description: "Plays the Lady Bug Bed Destroy when you break a bed.",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Stormy",
    description: "Plays the Stormy Bed Destroy when you break a bed.",
    rarity: "LEGENDARY",
    cost: "Summer Bundle",
  },
  {
    name: "Egg Popper",
    description: "Breaking a bed will summon hatching eggs!",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Burned Up",
    description: "Turn those beds into a pile of ash!",
    rarity: "LEGENDARY",
    cost: "Summer Event Shop",
  },
  {
    name: "Water Spout",
    description: "Plays the Water Spout Bed Destroy when you break a bed.",
    rarity: "LEGENDARY",
    cost: "Summer Event Shop",
  },
];

