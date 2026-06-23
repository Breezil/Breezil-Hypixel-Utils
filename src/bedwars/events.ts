/**
 * The BedWars game event timeline (diamond/emerald generator upgrades, bed
 * destruction, sudden death, game end) with each event's time from game start.
 */

/** A scheduled BedWars game event. */
export interface BedWarsEvent {
  /** Stable key, e.g. "Diamond II". */
  readonly key: string;
  /** Fully section-sign coloured display name, e.g. "§bDiamond II". */
  readonly name: string;
  /** Seconds from game start when the event fires. */
  readonly time: number;
}

/** The BedWars game event timeline, in order, with each event's time from start (seconds). */
export const BEDWARS_EVENTS: readonly BedWarsEvent[] = [
  { key: "Diamond II", name: "§bDiamond II", time: 6 * 60 },
  { key: "Emerald II", name: "§aEmerald II", time: 12 * 60 },
  { key: "Diamond III", name: "§bDiamond III", time: 18 * 60 },
  { key: "Emerald III", name: "§aEmerald III", time: 24 * 60 },
  { key: "Bed Destruction", name: "§c§lBed Destruction", time: 30 * 60 },
  { key: "Sudden Death", name: "§5§lSudden Death", time: 40 * 60 },
  { key: "Game End", name: "§d§lGame End", time: 50 * 60 },
];

/** The next upcoming event given seconds elapsed since game start, or null once the game has ended. */
export function bedWarsNextEvent(elapsedSeconds: number): BedWarsEvent | null {
  for (const event of BEDWARS_EVENTS) {
    if (event.time > elapsedSeconds) return event;
  }
  return null;
}

