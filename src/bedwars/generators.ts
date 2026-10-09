/**
 * BedWars resource generators: how fast each tier spawns, when the tiers
 * upgrade, and how much a generator holds before it stops filling.
 */

import { BEDWARS_EVENTS } from "./events";

/** The two map generators every BedWars map has. */
export type BedWarsResource = "diamond" | "emerald";

/** One generator tier. */
export interface BedWarsGeneratorTier {
  /** How Hypixel writes the tier, as in "Diamond II". */
  readonly numeral: string;
  /** Seconds from game start when this tier begins. */
  readonly from: number;
  /** Seconds between spawns at this tier. */
  readonly interval: number;
}

const NUMERALS = ["I", "II", "III"] as const;

/** Seconds between spawns, tier by tier. */
const INTERVALS: Readonly<Record<BedWarsResource, readonly number[]>> = {
  diamond: [30, 24, 12],
  emerald: [56, 40, 28],
};

/** When a tier begins: the start for tier I, otherwise its upgrade event. */
function tierStart(resource: BedWarsResource, numeral: string): number {
  if (numeral === "I") return 0;
  const key = `${resource === "diamond" ? "Diamond" : "Emerald"} ${numeral}`;
  return BEDWARS_EVENTS.find((event) => event.key === key)?.time ?? 0;
}

/** Every generator tier, in order, per resource. */
export const BEDWARS_GENERATOR_TIERS: Readonly<
  Record<BedWarsResource, readonly BedWarsGeneratorTier[]>
> = {
  diamond: NUMERALS.map((numeral, index) => ({
    numeral,
    from: tierStart("diamond", numeral),
    interval: INTERVALS.diamond[index],
  })),
  emerald: NUMERALS.map((numeral, index) => ({
    numeral,
    from: tierStart("emerald", numeral),
    interval: INTERVALS.emerald[index],
  })),
};

/** The tier a resource's generators are at, given seconds since game start. */
export function bedWarsGeneratorTier(
  resource: BedWarsResource,
  elapsedSeconds: number,
): BedWarsGeneratorTier {
  const tiers = BEDWARS_GENERATOR_TIERS[resource];
  return (
    [...tiers].reverse().find((tier) => elapsedSeconds >= tier.from) ?? tiers[0]
  );
}

