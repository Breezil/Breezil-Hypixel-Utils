# BedWars Prestiges

Prestige reference data for Hypixel BedWars. This module exposes the complete set of 101 prestiges spanning star levels 1 to 10000 (one entry per 100 levels, plus the level 1 starter), along with helpers to resolve a prestige name for any star level and to build a fully coloured star tag for any star level.

## `BedWarsPrestige`

The shape of a single prestige entry.

```ts
interface BedWarsPrestige {
  readonly level: number;
  readonly name: string;
  readonly schemeId: string;
  readonly colorCode: string;
}
```

- `level`: the representative star level for the prestige (for example `1200`).
- `name`: the prestige name (for example `"Gold Prime"`).
- `schemeId`: the cosmetic id of the prestige's scheme, as the API's `active_prestige_scheme` holds it (for example `"prestige_scheme_gold_prime"`).
- `colorCode`: the exact section-sign coloured tag for that prestige's representative level (for example `§7[§e1200§6✪§7]`).

## `bedWarsPrestigeName(stars)`

Get the prestige name for a star level.

```ts
function bedWarsPrestigeName(stars: number): string;
```

The prestige bracket is `floor(stars / 100)`, clamped to the valid 0 to 100 range so that any star level resolves to a real prestige. Level 0 maps to `Stone`, and levels at or above 10000 map to `Prestigious`.

```ts
import { bedWarsPrestigeName } from "@breezil/hypixel-utils";

bedWarsPrestigeName(5); // "Stone"        (low bracket)
bedWarsPrestigeName(1234); // "Gold Prime"   (mid bracket)
bedWarsPrestigeName(9999); // "Fuse"         (high bracket)
bedWarsPrestigeName(10000); // "Prestigious"
bedWarsPrestigeName(0); // "Stone"        (clamped low)
bedWarsPrestigeName(99999); // "Prestigious"  (clamped high)
```

## `bedWarsStarSymbol(stars)`

The default star symbol Hypixel shows for a star level.

```ts
function bedWarsStarSymbol(stars: number): string;
```

Since the Dreamfeast update (May 2026) the default symbol changes every 1000 stars: `✫` below 1000, `✪` from 1000, `⚝` from 2000, `✥` from 3000 and `✭` from 4000 on. Players can now pick their own star tag, so this is the default, not necessarily what a given player shows.

```ts
import { bedWarsStarSymbol } from "@breezil/hypixel-utils";

bedWarsStarSymbol(999); // "✫"
bedWarsStarSymbol(1000); // "✪"
bedWarsStarSymbol(4500); // "✭"
```

## `bedWarsStarTag(stars, style?)`

Build the section-sign coloured star tag for **any** star level, in the default look or in the look a player picked in the Prestige Customizer.

```ts
function bedWarsStarTag(stars: number, style?: BedWarsTagStyle): string;

interface BedWarsTagStyle {
  readonly scheme?: string | null; // active_prestige_scheme
  readonly star?: string | null; // active_star
  readonly bracket?: string | null; // active_prestige_bracket
  readonly boldNumbers?: boolean; // dreamfeast.toggles.toggle_bold_numbers
}
```

Each prestige has a colour scheme: a colour for the opening bracket, one colour per digit position counted from the left, one for the star symbol and one for the closing bracket. The tag is laid out as

```
<open><digits><symbol><close>
```

with each character taking its scheme colour, and a colour code written only where the look changes from the character before. That is how Hypixel itself writes the tags, so the output matches what the game sends byte for byte, not just visually.

Without a `style`, the scheme is the one for the level, the star is [`bedWarsStarSymbol(stars)`](#bedwarsstarsymbol-stars) and the brackets are `[` and `]`. With a `style`, each part the player picked replaces its default:

- `scheme`: the scheme's colours go onto the player's own digits by position, whatever level the scheme belongs to. A 4121 player wearing the Time scheme gets Time's colours on 4121.
- `star` and `bracket`: looked up in [`BEDWARS_PRESTIGE_STARS`](#bedwars-prestige-stars) and [`BEDWARS_PRESTIGE_BRACKETS`](#bedwars-prestige-brackets).
- `boldNumbers`: every digit colour code is followed by `§l`. A colour code is also what ends bold, so the star's colour is always written after bold digits, even when it is the same colour.

A part left out, set to a random pick (`random_cosmetic`, `random_favorite_cosmetic`, which Hypixel rolls every game), `prestige_scheme_none`, or an id this package does not know, keeps the default for that part.

```ts
import { bedWarsStarTag } from "@breezil/hypixel-utils";

bedWarsStarTag(7); // "§7[7✫]"
bedWarsStarTag(1234); // "§7[§e1234§6✪§7]"
bedWarsStarTag(2214); // "§6[2§f21§b4§3⚝]"
bedWarsStarTag(4147, {
  scheme: "prestige_scheme_time",
  star: "star_four_pointed",
}); // "§e[4§61§c4§d7✦§5]"
bedWarsStarTag(4121, {
  scheme: "prestige_scheme_mirror",
  star: "star_black_outlined",
  bracket: "prestige_bracket_double_angle_quotation_mark",
  boldNumbers: true,
}); // "§8«§7§l4§f§l12§7§l1§7✭§8»"
```

The customized examples are real tags taken from the game, checked against what the API reported those players had picked.

## `BEDWARS_PRESTIGE_STARS`

The stars the Prestige Customizer offers, by cosmetic id, as `active_star` and the player's unlocked `packages` hold them.

```ts
const BEDWARS_PRESTIGE_STARS: Readonly<Record<string, string>>;
```

| Id                    | Star | Unlocked by       |
| --------------------- | ---- | ----------------- |
| `star_black_open`     | ✫    | Default (level 0) |
| `star_white_circled`  | ✪    | Level 1000        |
| `star_white_outlined` | ⚝    | Level 2000        |
| `star_four_clubs`     | ✥    | Level 3000        |
| `star_black_outlined` | ✭    | Level 4000        |
| `star_four_pointed`   | ✦    | Bed Wars 1.11     |
| `star_pinwheel`       | ✯    | Bed Wars 1.11     |
| `star_hollow`         | ✰    | Bed Wars 1.11     |

✦ and ✰ are confirmed from tags seen in the game. ✯ is the Unicode PINWHEEL STAR, the character the id names, and has not been seen in the game yet.

## `BEDWARS_PRESTIGE_BRACKETS`

The brackets the Prestige Customizer offers besides the default `[` `]`, by cosmetic id, as `active_prestige_bracket` holds them.

```ts
const BEDWARS_PRESTIGE_BRACKETS: Readonly<
  Record<string, readonly [string, string]>
>;
```

| Id                                             | Brackets |
| ---------------------------------------------- | -------- |
| `prestige_bracket_double_angle_quotation_mark` | « »      |

The Dreamfeast added three brackets; only this one has been seen so far. The other two, and the Underlined Prestige and Strikethrough Brackets formatting options, render as the default until they are confirmed from the game.

## `BEDWARS_PRESTIGES`

The complete table of all 101 prestiges.

```ts
const BEDWARS_PRESTIGES: readonly BedWarsPrestige[];
```

Index 0 is the `Stone` (level 1) entry, index 1 is bracket 1 (level 100), and so on up to index 100 (level 10000). Each `colorCode` is `bedWarsStarTag(level)` for that row's level. Each star tag below renders in its real Minecraft colours; hover a tag to see its raw section-sign code.

| Level | Name           | Star tag                |
| ----- | -------------- | ----------------------- |
| 1     | Stone          | `§7[1✫]`                |
| 100   | Iron           | `§f[100✫]`              |
| 200   | Gold           | `§6[200✫]`              |
| 300   | Diamond        | `§b[300✫]`              |
| 400   | Emerald        | `§2[400✫]`              |
| 500   | Sapphire       | `§3[500✫]`              |
| 600   | Ruby           | `§4[600✫]`              |
| 700   | Crystal        | `§d[700✫]`              |
| 800   | Opal           | `§9[800✫]`              |
| 900   | Amethyst       | `§5[900✫]`              |
| 1000  | Rainbow        | `§c[§61§e0§a0§b0§d✪§5]` |
| 1100  | Iron Prime     | `§7[§f1100§7✪]`         |
| 1200  | Gold Prime     | `§7[§e1200§6✪§7]`       |
| 1300  | Diamond Prime  | `§7[§b1300§3✪§7]`       |
| 1400  | Emerald Prime  | `§7[§a1400§2✪§7]`       |
| 1500  | Sapphire Prime | `§7[§31500§9✪§7]`       |
| 1600  | Ruby Prime     | `§7[§c1600§4✪§7]`       |
| 1700  | Crystal Prime  | `§7[§d1700§5✪§7]`       |
| 1800  | Opal Prime     | `§7[§91800§1✪§7]`       |
| 1900  | Amethyst Prime | `§7[§51900§8✪§7]`       |
| 2000  | Mirror         | `§8[§72§f00§70⚝§8]`     |
| 2100  | Light          | `§f[2§e10§60⚝]`         |
| 2200  | Dawn           | `§6[2§f20§b0§3⚝]`       |
| 2300  | Dusk           | `§5[2§d30§60§e⚝]`       |
| 2400  | Air            | `§b[2§f40§70⚝§8]`       |
| 2500  | Wind           | `§f[2§a50§20⚝]`         |
| 2600  | Nebula         | `§4[2§c60§d0⚝§5]`       |
| 2700  | Thunder        | `§e[2§f70§80⚝]`         |
| 2800  | Earth          | `§a[2§280§60⚝§e]`       |
| 2900  | Water          | `§b[2§390§90⚝§1]`       |
| 3000  | Fire           | `§e[3§600§c0✥§4]`       |
| 3100  | Sunrise        | `§9[3§310§60✥§e]`       |
| 3200  | Eclipse        | `§c[§43§720§40§c✥]`     |
| 3300  | Gamma          | `§9[33§d0§c0✥§4]`       |
| 3400  | Majestic       | `§2[§a3§d40§50✥§2]`     |
| 3500  | Andesine       | `§c[3§450§20§a✥]`       |
| 3600  | Marine         | `§a[36§b0§90✥§1]`       |
| 3700  | Element        | `§4[3§c70§b0§3✥]`       |
| 3800  | Galaxy         | `§1[3§98§500§d✥§1]`     |
| 3900  | Atomic         | `§c[3§a90§30§9✥]`       |
| 4000  | Sunset         | `§5[4§c00§60✭§e]`       |
| 4100  | Time           | `§e[4§61§c0§d0✭§5]`     |
| 4200  | Winter         | `§1[§94§32§b0§f0§7✭]`   |
| 4300  | Obsidian       | `§0[§54§830§50✭§0]`     |
| 4400  | Spring         | `§2[4§a4§e0§60§5✭§d]`   |
| 4500  | Ice            | `§f[4§b50§30✭]`         |
| 4600  | Summer         | `§3[§b4§e60§60§d✭§5]`   |
| 4700  | Spinel         | `§f[§44§c70§90§1✭§9]`   |
| 4800  | Autumn         | `§5[4§c8§60§e0§b✭§3]`   |
| 4900  | Mystic         | `§2[§a4§f90§a0✭§2]`     |
| 5000  | Eternal        | `§4[5§50§900§1✭§0]`     |
| 5100  | Burnout        | `§4[§c51§60§e0§f✭§4]`   |
| 5200  | Cooldown       | `§1[§95§32§b0§f0§e✭§1]` |
| 5300  | Obliteration   | `§5[§d5§e3§f0§e0§d✭§5]` |
| 5400  | Ender          | `§3[§a5§24§80§20§a✭§3]` |
| 5500  | Brust          | `§2[§a5§e5§f0§b0§d✭§5]` |
| 5600  | Comical        | `§4[§c5§e6§f0§e0§c✭§4]` |
| 5700  | Lusterlost     | `§4[§65§27§30§90§5✭§8]` |
| 5800  | Maelstrom      | `§5[§c5§68§f0§b0§3✭§9]` |
| 5900  | Time Undone    | `§7[§05§89§70§f0✭§7]`   |
| 6000  | Umbrella       | `§c[§f6000§c✭§f]`       |
| 6100  | Luminous       | `§6[§e6§f100§b✭§3]`     |
| 6200  | Tortilla       | `§e[§f6§e2§600§f✭§e]`   |
| 6300  | Corn           | `§a[§e6300§a✭§2]`       |
| 6400  | Bittersweet    | `§b[6§c400§a✭]`         |
| 6500  | Sweetsour      | `§3[6§a50§f0§a✭§3]`     |
| 6600  | Pop            | `§9[§d6600§b✭§9]`       |
| 6700  | Bubblegum      | `§5[§d6700§f✭§5]`       |
| 6800  | Contrast       | `§0[§668§e00§f✭]`       |
| 6900  | Blended        | `§a[690§20✭§8]`         |
| 7000  | Allay          | `§3[§b7000§f✭§3]`       |
| 7100  | Blaze          | `§4[§c7§61§e0§c0§6✭§e]` |
| 7200  | Creeper        | `§2[§a7§f2§20§a0§f✭§8]` |
| 7300  | Drowned        | `§2[§373§b00§a✭§2]`     |
| 7400  | Enderman       | `§8[7400§d✭§8]`         |
| 7500  | Frog           | `§6[7§250§f0✭]`         |
| 7600  | Ghast          | `§f[76§700§c✭§8]`       |
| 7700  | Hoglin         | `§d[§c7700§6✭§d]`       |
| 7800  | Iron Golem     | `§8[§77§f800§e✭§8]`     |
| 7900  | Jerry          | `§6[§f7§29§60§20§f✭§6]` |
| 8000  | Kringle        | `§2[§a800§c0§4✭§2]`     |
| 8100  | Liquid         | `§8[§78§f1§b0§30§9✭§1]` |
| 8200  | Mint           | `§f[8200§a✭§f]`         |
| 8300  | Neglected      | `§8[8§430§c0✭§8]`       |
| 8400  | Onion          | `§f[§d840§a0✭§f]`       |
| 8500  | Poser          | `§3[§68500§e✭§3]`       |
| 8600  | Quartz         | `§d[§f8600§e✭§d]`       |
| 8700  | Rich           | `§8[§68700✭§8]`         |
| 8800  | Sanguine       | `§4[88§c00§f✭]`         |
| 8900  | Titanic        | `§9[§b890§30✭§9]`       |
| 9000  | Unorthodox     | `§d[9000§5✭§8]`         |
| 9100  | Volcanic       | `§0[§c9§610§c0✭§4]`     |
| 9200  | Weeping Cherry | `§2[§d9200§a✭§2]`       |
| 9300  | X-Ray          | `§f[§89300§f✭]`         |
| 9400  | Yearn          | `§e[§69§44§800✭]`       |
| 9500  | Zebra          | `§0[9§850§70✭§f]`       |
| 9600  | Caution        | `§e[96§000§e✭§0]`       |
| 9700  | Indescribable  | `§d[97§e00§b✭§e]`       |
| 9800  | Forgotten      | `§0[§89800✭§0]`         |
| 9900  | Fuse           | `§8[§79§f900§e✭§f]`     |
| 10000 | Prestigious    | `§9[§b1§f0000§c✭§4]`    |
