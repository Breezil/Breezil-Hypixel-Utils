/**
 * BedWars Dream mode definitions for the Hypixel network.
 *
 * Dream modes are rotating, limited-time BedWars variants. Each entry pairs a
 * stable snake_case identifier with its display name. Pure reference data, no
 * runtime or network logic.
 */

export interface BedWarsDreamMode {
  readonly id: string;
  readonly name: string;
}

export const BEDWARS_DREAM_MODES: readonly BedWarsDreamMode[] = [
  { id: "rush_v2", name: "Rush v2" },
  { id: "ultimate_v2", name: "Ultimate v2" },
  { id: "40v40_castle_v2", name: "40v40 Castle v2" },
  { id: "voidless", name: "Voidless" },
  { id: "armed", name: "Armed" },
  { id: "lucky_blocks_v2", name: "Lucky Blocks v2" },
  { id: "swappage", name: "Swappage" },
  { id: "one_block", name: "One Block" },
] as const;

