/**
 * BedWars wood skins cosmetics. Each entry replaces the wood blocks placed
 * during a game. The cost field keeps the source string verbatim (rank
 * requirements such as [VIP] or [MVP++], a tournament source, or an empty
 * string for the default).
 */

import { BedWarsCosmetic } from "./types";

export const BEDWARS_WOOD_SKINS: readonly BedWarsCosmetic[] = [
  { name: "Oak Plank", rarity: "COMMON", cost: "" },
  { name: "Spruce Plank", rarity: "RARE", cost: "[VIP]" },
  { name: "Birch Plank", rarity: "RARE", cost: "[VIP+]" },
  { name: "Jungle Plank", rarity: "EPIC", cost: "[MVP]" },
  { name: "Acacia Plank", rarity: "EPIC", cost: "[MVP+]" },
  { name: "Dark Oak Plank", rarity: "LEGENDARY", cost: "[MVP++]" },
  {
    name: "Oak Log",
    rarity: "LEGENDARY",
    cost: "Tournament Hall (100 Tributes)",
  },
  { name: "Spruce Log", rarity: "LEGENDARY", cost: "" },
  { name: "Birch Log", rarity: "LEGENDARY", cost: "" },
  { name: "Jungle Log", rarity: "LEGENDARY", cost: "" },
  { name: "Acacia Log", rarity: "LEGENDARY", cost: "" },
  { name: "Dark Oak Log", rarity: "LEGENDARY", cost: "" },
];

