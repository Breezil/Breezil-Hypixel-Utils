/**
 * Hypixel rank reference - names, §-colours, and the fully-coloured rank tag.
 */

/** Minecraft colour name → §-code. */
export const MINECRAFT_COLORS: Readonly<Record<string, string>> = {
  BLACK: "§0",
  DARK_BLUE: "§1",
  DARK_GREEN: "§2",
  DARK_AQUA: "§3",
  DARK_RED: "§4",
  DARK_PURPLE: "§5",
  GOLD: "§6",
  GRAY: "§7",
  DARK_GRAY: "§8",
  BLUE: "§9",
  GREEN: "§a",
  AQUA: "§b",
  RED: "§c",
  LIGHT_PURPLE: "§d",
  YELLOW: "§e",
  WHITE: "§f",
};

/** Staff/special rank → its fully-coloured tag. */
export const STAFF_RANK_TAGS: Readonly<Record<string, string>> = {
  YOUTUBER: "§c[§fYOUTUBE§c]",
  GAME_MASTER: "§2[GM]",
  ADMIN: "§c[ADMIN]",
  MODERATOR: "§2[MOD]",
  HELPER: "§9[HELPER]",
};

/**
 * The fully §-coloured rank tag for a raw Hypixel player object (e.g.
 * `§b[MVP§c+§b]`), or `"§7"` for the default rank. Mirrors how Hypixel renders
 * names, honouring `rankPlusColor` / `monthlyRankColor`.
 */
export function formatRankTag(player: Record<string, unknown>): string {
  const plusColor = MINECRAFT_COLORS[String(player.rankPlusColor)] ?? "§c";
  const rank = typeof player.rank === "string" ? player.rank : undefined;
  if (
    rank !== undefined &&
    rank !== "NORMAL" &&
    STAFF_RANK_TAGS[rank] !== undefined
  ) {
    return STAFF_RANK_TAGS[rank];
  }
  if (player.monthlyPackageRank === "SUPERSTAR") {
    const c = player.monthlyRankColor === "AQUA" ? "§b" : "§6";
    return `${c}[MVP${plusColor}++${c}]`;
  }
  switch (player.newPackageRank) {
    case "MVP_PLUS":
      return `§b[MVP${plusColor}+§b]`;
    case "MVP":
      return "§b[MVP]";
    case "VIP_PLUS":
      return "§a[VIP§6+§a]";
    case "VIP":
      return "§a[VIP]";
    default:
      return "§7";
  }
}

