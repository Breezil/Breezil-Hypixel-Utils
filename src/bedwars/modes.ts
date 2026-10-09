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

/** The submode keys per-mode stats are filed under. */
export type BedWarsSubmodeKey =
  | "solo"
  | "doubles"
  | "threes"
  | "fours"
  | "fourVsFour"
  | "castle";

/** A standard BedWars mode as Hypixel's location reports it. */
export interface BedWarsMode {
  /** The part of the location mode that names it, as in `BEDWARS_EIGHT_ONE`. */
  readonly id: string;
  /** Where its stats are filed. */
  readonly key: BedWarsSubmodeKey;
  readonly teams: number;
  readonly teamSize: number;
  /** How many of each generator the maps have. */
  readonly generators: Readonly<Record<"diamond" | "emerald", number>>;
  /**
   * How much one generator holds before it stops filling. At the cap a spawn
   * takes one and puts one back, so the pile dips to one below for a moment.
   */
  readonly itemCaps: Readonly<Record<"diamond" | "emerald", number>>;
}

const SMALL_CAPS = { diamond: 4, emerald: 2 } as const;
const LARGE_CAPS = { diamond: 8, emerald: 6 } as const;

/** The standard BedWars modes. */
export const BEDWARS_MODES: readonly BedWarsMode[] = [
  {
    id: "EIGHT_ONE",
    key: "solo",
    teams: 8,
    teamSize: 1,
    generators: { diamond: 4, emerald: 4 },
    itemCaps: SMALL_CAPS,
  },
  {
    id: "EIGHT_TWO",
    key: "doubles",
    teams: 8,
    teamSize: 2,
    generators: { diamond: 4, emerald: 4 },
    itemCaps: SMALL_CAPS,
  },
  {
    id: "FOUR_THREE",
    key: "threes",
    teams: 4,
    teamSize: 3,
    generators: { diamond: 4, emerald: 2 },
    itemCaps: LARGE_CAPS,
  },
  {
    id: "FOUR_FOUR",
    key: "fours",
    teams: 4,
    teamSize: 4,
    generators: { diamond: 4, emerald: 2 },
    itemCaps: LARGE_CAPS,
  },
  {
    id: "TWO_FOUR",
    key: "fourVsFour",
    teams: 2,
    teamSize: 4,
    generators: { diamond: 4, emerald: 2 },
    itemCaps: LARGE_CAPS,
  },
  {
    id: "CASTLE",
    key: "castle",
    teams: 2,
    teamSize: 40,
    generators: { diamond: 4, emerald: 2 },
    itemCaps: LARGE_CAPS,
  },
];

/**
 * The standard mode a Hypixel location mode is played in, or null when it is
 * not one. Variants such as `BEDWARS_EIGHT_TWO_RUSH` resolve to their base.
 */
export function bedWarsModeOf(
  locationMode: string | null | undefined,
): BedWarsMode | null {
  const mode = (locationMode ?? "").toUpperCase();
  if (!mode.startsWith("BEDWARS")) return null;
  return BEDWARS_MODES.find((entry) => mode.includes(entry.id)) ?? null;
}
