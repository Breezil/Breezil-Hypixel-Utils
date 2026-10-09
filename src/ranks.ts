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
  MAYOR: "§d[MAYOR]",
};

/**
 * The rank fields a tag is built from, as Hypixel's raw player object names
 * them or as a parsed player (`@breezil/hypixel-parsers`) names them, so
 * either can be passed straight in.
 */
export interface RankTagSource {
  readonly rank?: unknown;
  readonly staffRank?: unknown;
  readonly prefix?: unknown;
  readonly newPackageRank?: unknown;
  readonly monthlyPackageRank?: unknown;
  readonly rankPlusColor?: unknown;
  readonly monthlyRankColor?: unknown;
  readonly cosmetics?: {
    readonly rankPlusColor?: unknown;
    readonly monthlyRankColor?: unknown;
  };
}

function text(value: unknown): string | undefined {
  return typeof value === "string" && value.length > 0 ? value : undefined;
}

/**
 * The fully §-coloured rank tag for a player (e.g. `§b[MVP§c+§b]`), or `"§7"`
 * for the default rank. Mirrors how Hypixel renders names: a custom prefix
 * first (such as an owner's), then a staff rank, then the bought rank with
 * its chosen `+` and MVP++ colours.
 */
export function formatRankTag(player: RankTagSource): string {
  const prefix = text(player.prefix);
  if (prefix !== undefined) {
    return prefix;
  }
  const rank = text(player.rank) ?? text(player.staffRank);
  if (
    rank !== undefined &&
    rank !== "NORMAL" &&
    STAFF_RANK_TAGS[rank] !== undefined
  ) {
    return STAFF_RANK_TAGS[rank];
  }
  const plusColor =
    MINECRAFT_COLORS[
      text(player.rankPlusColor) ?? text(player.cosmetics?.rankPlusColor) ?? ""
    ] ?? "§c";
  if (player.monthlyPackageRank === "SUPERSTAR") {
    const monthly =
      text(player.monthlyRankColor) ?? text(player.cosmetics?.monthlyRankColor);
    const c = monthly === "AQUA" ? "§b" : "§6";
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
