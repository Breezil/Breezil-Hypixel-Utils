/**
 * BedWars teams: the 8 in-game teams keyed by the scoreboard letter Hypixel uses.
 */

export interface BedWarsTeam {
  /** The scoreboard-team letter Hypixel uses (R/B/G/Y/A/W/P/S). */
  readonly letter: string;
  readonly name: string;
  /** Section-sign colour code for the team. */
  readonly color: string;
}

/** The 8 BedWars teams, keyed by their scoreboard letter. */
export const BEDWARS_TEAMS: Readonly<Record<string, BedWarsTeam>> = {
  R: { letter: "R", name: "Red", color: "§c" },
  B: { letter: "B", name: "Blue", color: "§9" },
  G: { letter: "G", name: "Green", color: "§a" },
  Y: { letter: "Y", name: "Yellow", color: "§e" },
  A: { letter: "A", name: "Aqua", color: "§b" },
  W: { letter: "W", name: "White", color: "§f" },
  P: { letter: "P", name: "Pink", color: "§d" },
  S: { letter: "S", name: "Gray", color: "§7" },
};

