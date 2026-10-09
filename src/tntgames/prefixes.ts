/**
 * TNT Games wins prefixes.
 *
 * In a TNT Games game Hypixel puts the player's wins in that game before their
 * name, as in `[2200]`, in a colour the player picks from the ones they have
 * unlocked. The API keeps the pick per game as `prefix_<game>`, such as
 * `prefix_tntag: "gold"`.
 */

import { MINECRAFT_COLORS } from "../ranks";

/** The colour a prefix is drawn in when the player has not picked one. */
const DEFAULT_PREFIX_COLOR = "§7";

/**
 * A wins prefix as Hypixel draws it, such as `§6[2200]`.
 *
 * `color` is the API's `prefix_<game>` value, such as `"gold"` or
 * `"dark_green"`; an empty or unknown one draws in the default gray.
 */
export function tntGamesPrefixTag(wins: number, color?: string | null): string {
  const code =
    MINECRAFT_COLORS[(color ?? "").toUpperCase()] ?? DEFAULT_PREFIX_COLOR;
  return `${code}[${Math.max(0, Math.floor(wins))}]`;
}

