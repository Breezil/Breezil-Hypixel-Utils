/**
 * BedWars prestige reference data.
 *
 * The 101 Hypixel BedWars prestiges, levels 1 to 10000, one per 100 levels,
 * each with the colours of its default level tag: the bracket, every digit by
 * its position from the left, the star, and the closing bracket.
 *
 * Since Bed Wars 1.11 (May 2026) players can pick another unlocked scheme,
 * star, bracket shape or style in the Prestige Customizer, so a tag seen in
 * chat need not match the default. `bedWarsStarTag` builds either: the
 * default, or the look the API says a player picked. Colours follow Statsify's in-game-verified table and real chat
 * logs; where Statsify and the fandom wiki disagree, Statsify's screenshot-
 * backed fixes win.
 */

/** A prestige and its default tag, shown at the prestige's own level. */
export interface BedWarsPrestige {
  readonly level: number;
  readonly name: string;
  /** The scheme's cosmetic id, as `active_prestige_scheme` holds it, such as `prestige_scheme_gold_prime`. */
  readonly schemeId: string;
  readonly colorCode: string;
}

/** The colours of a prestige's default tag. */
interface PrestigeScheme {
  readonly level: number;
  readonly name: string;
  /** The opening bracket's colour. */
  readonly lead: string;
  /** One colour for every digit, or a colour per digit position from the left. */
  readonly digits: string | readonly string[];
  readonly star: string;
  /** The closing bracket's colour. */
  readonly trail: string;
}

const PRESTIGE_SCHEMES: readonly PrestigeScheme[] = [
  {
    level: 1,
    name: "Stone",
    lead: "§7",
    digits: "§7",
    star: "§7",
    trail: "§7",
  },
  {
    level: 100,
    name: "Iron",
    lead: "§f",
    digits: "§f",
    star: "§f",
    trail: "§f",
  },
  {
    level: 200,
    name: "Gold",
    lead: "§6",
    digits: "§6",
    star: "§6",
    trail: "§6",
  },
  {
    level: 300,
    name: "Diamond",
    lead: "§b",
    digits: "§b",
    star: "§b",
    trail: "§b",
  },
  {
    level: 400,
    name: "Emerald",
    lead: "§2",
    digits: "§2",
    star: "§2",
    trail: "§2",
  },
  {
    level: 500,
    name: "Sapphire",
    lead: "§3",
    digits: "§3",
    star: "§3",
    trail: "§3",
  },
  {
    level: 600,
    name: "Ruby",
    lead: "§4",
    digits: "§4",
    star: "§4",
    trail: "§4",
  },
  {
    level: 700,
    name: "Crystal",
    lead: "§d",
    digits: "§d",
    star: "§d",
    trail: "§d",
  },
  {
    level: 800,
    name: "Opal",
    lead: "§9",
    digits: "§9",
    star: "§9",
    trail: "§9",
  },
  {
    level: 900,
    name: "Amethyst",
    lead: "§5",
    digits: "§5",
    star: "§5",
    trail: "§5",
  },
  {
    level: 1000,
    name: "Rainbow",
    lead: "§c",
    digits: ["§6", "§e", "§a", "§b"],
    star: "§d",
    trail: "§5",
  },
  {
    level: 1100,
    name: "Iron Prime",
    lead: "§7",
    digits: ["§f", "§f", "§f", "§f"],
    star: "§7",
    trail: "§7",
  },
  {
    level: 1200,
    name: "Gold Prime",
    lead: "§7",
    digits: ["§e", "§e", "§e", "§e"],
    star: "§6",
    trail: "§7",
  },
  {
    level: 1300,
    name: "Diamond Prime",
    lead: "§7",
    digits: ["§b", "§b", "§b", "§b"],
    star: "§3",
    trail: "§7",
  },
  {
    level: 1400,
    name: "Emerald Prime",
    lead: "§7",
    digits: ["§a", "§a", "§a", "§a"],
    star: "§2",
    trail: "§7",
  },
  {
    level: 1500,
    name: "Sapphire Prime",
    lead: "§7",
    digits: ["§3", "§3", "§3", "§3"],
    star: "§9",
    trail: "§7",
  },
  {
    level: 1600,
    name: "Ruby Prime",
    lead: "§7",
    digits: ["§c", "§c", "§c", "§c"],
    star: "§4",
    trail: "§7",
  },
  {
    level: 1700,
    name: "Crystal Prime",
    lead: "§7",
    digits: ["§d", "§d", "§d", "§d"],
    star: "§5",
    trail: "§7",
  },
  {
    level: 1800,
    name: "Opal Prime",
    lead: "§7",
    digits: ["§9", "§9", "§9", "§9"],
    star: "§1",
    trail: "§7",
  },
  {
    level: 1900,
    name: "Amethyst Prime",
    lead: "§7",
    digits: ["§5", "§5", "§5", "§5"],
    star: "§8",
    trail: "§7",
  },
  {
    level: 2000,
    name: "Mirror",
    lead: "§8",
    digits: ["§7", "§f", "§f", "§7"],
    star: "§7",
    trail: "§8",
  },
  {
    level: 2100,
    name: "Light",
    lead: "§f",
    digits: ["§f", "§e", "§e", "§6"],
    star: "§6",
    trail: "§6",
  },
  {
    level: 2200,
    name: "Dawn",
    lead: "§6",
    digits: ["§6", "§f", "§f", "§b"],
    star: "§3",
    trail: "§3",
  },
  {
    level: 2300,
    name: "Dusk",
    lead: "§5",
    digits: ["§5", "§d", "§d", "§6"],
    star: "§e",
    trail: "§e",
  },
  {
    level: 2400,
    name: "Air",
    lead: "§b",
    digits: ["§b", "§f", "§f", "§7"],
    star: "§7",
    trail: "§8",
  },
  {
    level: 2500,
    name: "Wind",
    lead: "§f",
    digits: ["§f", "§a", "§a", "§2"],
    star: "§2",
    trail: "§2",
  },
  {
    level: 2600,
    name: "Nebula",
    lead: "§4",
    digits: ["§4", "§c", "§c", "§d"],
    star: "§d",
    trail: "§5",
  },
  {
    level: 2700,
    name: "Thunder",
    lead: "§e",
    digits: ["§e", "§f", "§f", "§8"],
    star: "§8",
    trail: "§8",
  },
  {
    level: 2800,
    name: "Earth",
    lead: "§a",
    digits: ["§a", "§2", "§2", "§6"],
    star: "§6",
    trail: "§e",
  },
  {
    level: 2900,
    name: "Water",
    lead: "§b",
    digits: ["§b", "§3", "§3", "§9"],
    star: "§9",
    trail: "§1",
  },
  {
    level: 3000,
    name: "Fire",
    lead: "§e",
    digits: ["§e", "§6", "§6", "§c"],
    star: "§c",
    trail: "§4",
  },
  {
    level: 3100,
    name: "Sunrise",
    lead: "§9",
    digits: ["§9", "§3", "§3", "§6"],
    star: "§6",
    trail: "§e",
  },
  {
    level: 3200,
    name: "Eclipse",
    lead: "§c",
    digits: ["§4", "§7", "§7", "§4"],
    star: "§c",
    trail: "§c",
  },
  {
    level: 3300,
    name: "Gamma",
    lead: "§9",
    digits: ["§9", "§9", "§d", "§c"],
    star: "§c",
    trail: "§4",
  },
  {
    level: 3400,
    name: "Majestic",
    lead: "§2",
    digits: ["§a", "§d", "§d", "§5"],
    star: "§5",
    trail: "§2",
  },
  {
    level: 3500,
    name: "Andesine",
    lead: "§c",
    digits: ["§c", "§4", "§4", "§2"],
    star: "§a",
    trail: "§a",
  },
  {
    level: 3600,
    name: "Marine",
    lead: "§a",
    digits: ["§a", "§a", "§b", "§9"],
    star: "§9",
    trail: "§1",
  },
  {
    level: 3700,
    name: "Element",
    lead: "§4",
    digits: ["§4", "§c", "§c", "§b"],
    star: "§3",
    trail: "§3",
  },
  {
    level: 3800,
    name: "Galaxy",
    lead: "§1",
    digits: ["§1", "§9", "§5", "§5"],
    star: "§d",
    trail: "§1",
  },
  {
    level: 3900,
    name: "Atomic",
    lead: "§c",
    digits: ["§c", "§a", "§a", "§3"],
    star: "§9",
    trail: "§9",
  },
  {
    level: 4000,
    name: "Sunset",
    lead: "§5",
    digits: ["§5", "§c", "§c", "§6"],
    star: "§6",
    trail: "§e",
  },
  {
    level: 4100,
    name: "Time",
    lead: "§e",
    digits: ["§e", "§6", "§c", "§d"],
    star: "§d",
    trail: "§5",
  },
  {
    level: 4200,
    name: "Winter",
    lead: "§1",
    digits: ["§9", "§3", "§b", "§f"],
    star: "§7",
    trail: "§7",
  },
  {
    level: 4300,
    name: "Obsidian",
    lead: "§0",
    digits: ["§5", "§8", "§8", "§5"],
    star: "§5",
    trail: "§0",
  },
  {
    level: 4400,
    name: "Spring",
    lead: "§2",
    digits: ["§2", "§a", "§e", "§6"],
    star: "§5",
    trail: "§d",
  },
  {
    level: 4500,
    name: "Ice",
    lead: "§f",
    digits: ["§f", "§b", "§b", "§3"],
    star: "§3",
    trail: "§3",
  },
  {
    level: 4600,
    name: "Summer",
    lead: "§3",
    digits: ["§b", "§e", "§e", "§6"],
    star: "§d",
    trail: "§5",
  },
  {
    level: 4700,
    name: "Spinel",
    lead: "§f",
    digits: ["§4", "§c", "§c", "§9"],
    star: "§1",
    trail: "§9",
  },
  {
    level: 4800,
    name: "Autumn",
    lead: "§5",
    digits: ["§5", "§c", "§6", "§e"],
    star: "§b",
    trail: "§3",
  },
  {
    level: 4900,
    name: "Mystic",
    lead: "§2",
    digits: ["§a", "§f", "§f", "§a"],
    star: "§a",
    trail: "§2",
  },
  {
    level: 5000,
    name: "Eternal",
    lead: "§4",
    digits: ["§4", "§5", "§9", "§9"],
    star: "§1",
    trail: "§0",
  },
  {
    level: 5100,
    name: "Burnout",
    lead: "§4",
    digits: ["§c", "§c", "§6", "§e"],
    star: "§f",
    trail: "§4",
  },
  {
    level: 5200,
    name: "Cooldown",
    lead: "§1",
    digits: ["§9", "§3", "§b", "§f"],
    star: "§e",
    trail: "§1",
  },
  {
    level: 5300,
    name: "Obliteration",
    lead: "§5",
    digits: ["§d", "§e", "§f", "§e"],
    star: "§d",
    trail: "§5",
  },
  {
    level: 5400,
    name: "Ender",
    lead: "§3",
    digits: ["§a", "§2", "§8", "§2"],
    star: "§a",
    trail: "§3",
  },
  {
    level: 5500,
    name: "Brust",
    lead: "§2",
    digits: ["§a", "§e", "§f", "§b"],
    star: "§d",
    trail: "§5",
  },
  {
    level: 5600,
    name: "Comical",
    lead: "§4",
    digits: ["§c", "§e", "§f", "§e"],
    star: "§c",
    trail: "§4",
  },
  {
    level: 5700,
    name: "Lusterlost",
    lead: "§4",
    digits: ["§6", "§2", "§3", "§9"],
    star: "§5",
    trail: "§8",
  },
  {
    level: 5800,
    name: "Maelstrom",
    lead: "§5",
    digits: ["§c", "§6", "§f", "§b"],
    star: "§3",
    trail: "§9",
  },
  {
    level: 5900,
    name: "Time Undone",
    lead: "§7",
    digits: ["§0", "§8", "§7", "§f"],
    star: "§f",
    trail: "§7",
  },
  {
    level: 6000,
    name: "Umbrella",
    lead: "§c",
    digits: ["§f", "§f", "§f", "§f"],
    star: "§c",
    trail: "§f",
  },
  {
    level: 6100,
    name: "Luminous",
    lead: "§6",
    digits: ["§e", "§f", "§f", "§f"],
    star: "§b",
    trail: "§3",
  },
  {
    level: 6200,
    name: "Tortilla",
    lead: "§e",
    digits: ["§f", "§e", "§6", "§6"],
    star: "§f",
    trail: "§e",
  },
  {
    level: 6300,
    name: "Corn",
    lead: "§a",
    digits: ["§e", "§e", "§e", "§e"],
    star: "§a",
    trail: "§2",
  },
  {
    level: 6400,
    name: "Bittersweet",
    lead: "§b",
    digits: ["§b", "§c", "§c", "§c"],
    star: "§a",
    trail: "§a",
  },
  {
    level: 6500,
    name: "Sweetsour",
    lead: "§3",
    digits: ["§3", "§a", "§a", "§f"],
    star: "§a",
    trail: "§3",
  },
  {
    level: 6600,
    name: "Pop",
    lead: "§9",
    digits: ["§d", "§d", "§d", "§d"],
    star: "§b",
    trail: "§9",
  },
  {
    level: 6700,
    name: "Bubblegum",
    lead: "§5",
    digits: ["§d", "§d", "§d", "§d"],
    star: "§f",
    trail: "§5",
  },
  {
    level: 6800,
    name: "Contrast",
    lead: "§0",
    digits: ["§6", "§6", "§e", "§e"],
    star: "§f",
    trail: "§f",
  },
  {
    level: 6900,
    name: "Blended",
    lead: "§a",
    digits: ["§a", "§a", "§a", "§2"],
    star: "§2",
    trail: "§8",
  },
  {
    level: 7000,
    name: "Allay",
    lead: "§3",
    digits: ["§b", "§b", "§b", "§b"],
    star: "§f",
    trail: "§3",
  },
  {
    level: 7100,
    name: "Blaze",
    lead: "§4",
    digits: ["§c", "§6", "§e", "§c"],
    star: "§6",
    trail: "§e",
  },
  {
    level: 7200,
    name: "Creeper",
    lead: "§2",
    digits: ["§a", "§f", "§2", "§a"],
    star: "§f",
    trail: "§8",
  },
  {
    level: 7300,
    name: "Drowned",
    lead: "§2",
    digits: ["§3", "§3", "§b", "§b"],
    star: "§a",
    trail: "§2",
  },
  {
    level: 7400,
    name: "Enderman",
    lead: "§8",
    digits: ["§8", "§8", "§8", "§8"],
    star: "§d",
    trail: "§8",
  },
  {
    level: 7500,
    name: "Frog",
    lead: "§6",
    digits: ["§6", "§2", "§2", "§f"],
    star: "§f",
    trail: "§f",
  },
  {
    level: 7600,
    name: "Ghast",
    lead: "§f",
    digits: ["§f", "§f", "§7", "§7"],
    star: "§c",
    trail: "§8",
  },
  {
    level: 7700,
    name: "Hoglin",
    lead: "§d",
    digits: ["§c", "§c", "§c", "§c"],
    star: "§6",
    trail: "§d",
  },
  {
    level: 7800,
    name: "Iron Golem",
    lead: "§8",
    digits: ["§7", "§f", "§f", "§f"],
    star: "§e",
    trail: "§8",
  },
  {
    level: 7900,
    name: "Jerry",
    lead: "§6",
    digits: ["§f", "§2", "§6", "§2"],
    star: "§f",
    trail: "§6",
  },
  {
    level: 8000,
    name: "Kringle",
    lead: "§2",
    digits: ["§a", "§a", "§a", "§c"],
    star: "§4",
    trail: "§2",
  },
  {
    level: 8100,
    name: "Liquid",
    lead: "§8",
    digits: ["§7", "§f", "§b", "§3"],
    star: "§9",
    trail: "§1",
  },
  {
    level: 8200,
    name: "Mint",
    lead: "§f",
    digits: ["§f", "§f", "§f", "§f"],
    star: "§a",
    trail: "§f",
  },
  {
    level: 8300,
    name: "Neglected",
    lead: "§8",
    digits: ["§8", "§4", "§4", "§c"],
    star: "§c",
    trail: "§8",
  },
  {
    level: 8400,
    name: "Onion",
    lead: "§f",
    digits: ["§d", "§d", "§d", "§a"],
    star: "§a",
    trail: "§f",
  },
  {
    level: 8500,
    name: "Poser",
    lead: "§3",
    digits: ["§6", "§6", "§6", "§6"],
    star: "§e",
    trail: "§3",
  },
  {
    level: 8600,
    name: "Quartz",
    lead: "§d",
    digits: ["§f", "§f", "§f", "§f"],
    star: "§e",
    trail: "§d",
  },
  {
    level: 8700,
    name: "Rich",
    lead: "§8",
    digits: ["§6", "§6", "§6", "§6"],
    star: "§6",
    trail: "§8",
  },
  {
    level: 8800,
    name: "Sanguine",
    lead: "§4",
    digits: ["§4", "§4", "§c", "§c"],
    star: "§f",
    trail: "§f",
  },
  {
    level: 8900,
    name: "Titanic",
    lead: "§9",
    digits: ["§b", "§b", "§b", "§3"],
    star: "§3",
    trail: "§9",
  },
  {
    level: 9000,
    name: "Unorthodox",
    lead: "§d",
    digits: ["§d", "§d", "§d", "§d"],
    star: "§5",
    trail: "§8",
  },
  {
    level: 9100,
    name: "Volcanic",
    lead: "§0",
    digits: ["§c", "§6", "§6", "§c"],
    star: "§c",
    trail: "§4",
  },
  {
    level: 9200,
    name: "Weeping Cherry",
    lead: "§2",
    digits: ["§d", "§d", "§d", "§d"],
    star: "§a",
    trail: "§2",
  },
  {
    level: 9300,
    name: "X-Ray",
    lead: "§f",
    digits: ["§8", "§8", "§8", "§8"],
    star: "§f",
    trail: "§f",
  },
  {
    level: 9400,
    name: "Yearn",
    lead: "§e",
    digits: ["§6", "§4", "§8", "§8"],
    star: "§8",
    trail: "§8",
  },
  {
    level: 9500,
    name: "Zebra",
    lead: "§0",
    digits: ["§0", "§8", "§8", "§7"],
    star: "§7",
    trail: "§f",
  },
  {
    level: 9600,
    name: "Caution",
    lead: "§e",
    digits: ["§e", "§e", "§0", "§0"],
    star: "§e",
    trail: "§0",
  },
  {
    level: 9700,
    name: "Indescribable",
    lead: "§d",
    digits: ["§d", "§d", "§e", "§e"],
    star: "§b",
    trail: "§e",
  },
  {
    level: 9800,
    name: "Forgotten",
    lead: "§0",
    digits: ["§8", "§8", "§8", "§8"],
    star: "§8",
    trail: "§0",
  },
  {
    level: 9900,
    name: "Fuse",
    lead: "§8",
    digits: ["§7", "§f", "§f", "§f"],
    star: "§e",
    trail: "§f",
  },
  {
    level: 10000,
    name: "Prestigious",
    lead: "§9",
    digits: ["§b", "§f", "§f", "§f", "§f"],
    star: "§c",
    trail: "§4",
  },
];

/**
 * The stars the Prestige Customizer offers, by Hypixel's cosmetic id. The
 * first five are the defaults the thousands unlock; the last three came with
 * the Dreamfeast. Ids are what `active_star` and the unlocked packages hold.
 */
export const BEDWARS_PRESTIGE_STARS: Readonly<Record<string, string>> = {
  star_black_open: "✫",
  star_white_circled: "✪",
  star_white_outlined: "⚝",
  star_four_clubs: "✥",
  star_black_outlined: "✭",
  star_four_pointed: "✦",
  star_pinwheel: "✯",
  star_hollow: "✰",
};

/** The default brackets, `[` and `]`. */
const SQUARE_BRACKETS: readonly [string, string] = ["[", "]"];

/**
 * The brackets the Prestige Customizer offers besides the default square
 * ones, by Hypixel's cosmetic id, as `active_prestige_bracket` holds them.
 */
export const BEDWARS_PRESTIGE_BRACKETS: Readonly<
  Record<string, readonly [string, string]>
> = {
  prestige_bracket_double_angle_quotation_mark: ["«", "»"],
};

/**
 * The star each thousand levels unlock, and the default tag shows: one new
 * star per thousand up to 4000.
 */
const STAR_SYMBOLS: readonly {
  readonly from: number;
  readonly symbol: string;
}[] = [
  { from: 4000, symbol: "✭" },
  { from: 3000, symbol: "✥" },
  { from: 2000, symbol: "⚝" },
  { from: 1000, symbol: "✪" },
  { from: 0, symbol: "✫" },
];

/** The star a level's default tag shows. */
export function bedWarsStarSymbol(stars: number): string {
  return STAR_SYMBOLS.find((entry) => stars >= entry.from)?.symbol ?? "✫";
}

/** The prestige bracket for a level, clamped to the 101 that exist. */
function prestigeBracket(stars: number): number {
  return Math.min(100, Math.max(0, Math.floor(stars / 100)));
}

/** Get the prestige name for a star level. */
export function bedWarsPrestigeName(stars: number): string {
  return PRESTIGE_SCHEMES[prestigeBracket(stars)].name;
}

/** The cosmetic id Hypixel gives a prestige's scheme, as in `prestige_scheme_time_undone`. */
function schemeId(name: string): string {
  return `prestige_scheme_${name.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`;
}

const SCHEMES_BY_ID: ReadonlyMap<string, PrestigeScheme> = new Map(
  PRESTIGE_SCHEMES.map((scheme) => [schemeId(scheme.name), scheme]),
);

/**
 * What a player picked in the Prestige Customizer, as the Hypixel API reports
 * it. Every part is optional; a part left out, or one the player set to a
 * random pick (`random_cosmetic`, `random_favorite_cosmetic`), or one this
 * package does not know, shows the default for the level.
 */
export interface BedWarsTagStyle {
  /** `active_prestige_scheme`, as in `prestige_scheme_drowned`. */
  readonly scheme?: string | null;
  /** `active_star`, as in `star_four_pointed`. */
  readonly star?: string | null;
  /** `active_prestige_bracket`, as in `prestige_bracket_double_angle_quotation_mark`. */
  readonly bracket?: string | null;
  /** The Bold Numbers formatting toggle. */
  readonly boldNumbers?: boolean;
}

/** One run of the tag: its colour, whether it is bold, and its text. */
type TagPart = readonly [color: string, bold: boolean, text: string];

/**
 * Writes the parts the way Hypixel does: a code only where the look changes.
 * A colour code also ends bold, so leaving bold always rewrites the colour,
 * and entering it writes the colour and then `§l`.
 */
function writeTag(parts: readonly TagPart[]): string {
  let color = "";
  let bold = false;
  let tag = "";
  for (const [partColor, partBold, text] of parts) {
    if (partColor !== color || partBold !== bold) {
      tag += partBold ? `${partColor}§l` : partColor;
      color = partColor;
      bold = partBold;
    }
    tag += text;
  }
  return tag;
}

/**
 * The coloured tag for any star level, such as `§6[2§f21§b4§3⚝]`, in the
 * default look or in the look a player picked.
 *
 * Digits take the scheme's colours by position from the left, whatever the
 * scheme's own level, so a 4121 player wearing the Time scheme gets Time's
 * colours on 4121.
 */
export function bedWarsStarTag(
  stars: number,
  style: BedWarsTagStyle = {},
): string {
  const level = Math.max(0, Math.floor(stars));
  const scheme =
    SCHEMES_BY_ID.get(style.scheme ?? "") ??
    PRESTIGE_SCHEMES[prestigeBracket(level)];
  const symbol =
    BEDWARS_PRESTIGE_STARS[style.star ?? ""] ?? bedWarsStarSymbol(level);
  const [open, close] =
    BEDWARS_PRESTIGE_BRACKETS[style.bracket ?? ""] ?? SQUARE_BRACKETS;
  const bold = style.boldNumbers === true;
  const digitColor = (index: number): string =>
    typeof scheme.digits === "string"
      ? scheme.digits
      : (scheme.digits[index] ?? scheme.digits[scheme.digits.length - 1]);
  return writeTag([
    [scheme.lead, false, open],
    ...[...String(level)].map(
      (digit, index): TagPart => [digitColor(index), bold, digit],
    ),
    [scheme.star, false, symbol],
    [scheme.trail, false, close],
  ]);
}

/** Every prestige, with its default tag at its own level and its scheme's cosmetic id. */
export const BEDWARS_PRESTIGES: readonly BedWarsPrestige[] =
  PRESTIGE_SCHEMES.map((scheme) => ({
    level: scheme.level,
    name: scheme.name,
    schemeId: schemeId(scheme.name),
    colorCode: bedWarsStarTag(scheme.level),
  }));
