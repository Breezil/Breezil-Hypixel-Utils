/**
 * Current BedWars XP gain values for the various sources of experience.
 *
 * Pure reference data: each entry pairs an XP source with the amount of XP
 * it currently awards. No runtime or network logic.
 */

export interface BedWarsXpSource {
  readonly source: string;
  readonly xp: number;
}

export const BEDWARS_XP_SOURCES: readonly BedWarsXpSource[] = [
  { source: "Solo/Doubles win", xp: 100 },
  { source: "3v3v3v3/4v4v4v4 win", xp: 50 },
  { source: "4v4/Dreams win", xp: 25 },
  { source: "Minute of playtime", xp: 15 },
  { source: "First kill on each player", xp: 5 },
  { source: "Final kill", xp: 10 },
  { source: "Breaking a bed", xp: 15 },
  { source: "Diamond from diamond generator", xp: 2 },
  { source: "Emerald from emerald generator", xp: 3 },
] as const;

