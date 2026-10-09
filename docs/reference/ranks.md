# Ranks and Colours

Utilities for working with Hypixel rank names, Minecraft section-sign (`§`) colour codes, and the fully coloured rank tag that Hypixel renders next to player names.

```ts
import {
  formatRankTag,
  MINECRAFT_COLORS,
  STAFF_RANK_TAGS,
} from "@breezil/hypixel-utils";
```

## `formatRankTag(player)`

Builds the fully `§`-coloured rank tag for a Hypixel player (for example `§b[MVP§c+§b]`), or returns `"§7"` for the default rank. It mirrors how Hypixel renders names. It accepts the raw `player` object from the Hypixel API as well as an already-parsed player whose colours sit under `cosmetics`.

### Signature

```ts
function formatRankTag(player: RankTagSource): string;

interface RankTagSource {
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
```

Every field is optional and anything that is not a non-empty string is ignored, so a raw API object can be passed straight in.

### What it does

The function resolves the tag in the following order of precedence:

1. **Custom prefix.** If `player.prefix` is set (Hypixel gives some players, such as the owner, a hand-made prefix), it is returned as is.
2. **Staff / special ranks.** If `player.rank` (or, failing that, `player.staffRank`) is a string other than `"NORMAL"` and matches a key in [`STAFF_RANK_TAGS`](#staff-rank-tags), the matching coloured tag is returned directly.
3. **Plus colour resolution.** It looks up `player.rankPlusColor` (or `player.cosmetics.rankPlusColor`) in [`MINECRAFT_COLORS`](#minecraft-colors). If the value is missing or unknown, it falls back to `§c` (red).
4. **SUPERSTAR (MVP++).** If `player.monthlyPackageRank === "SUPERSTAR"`, it returns the `MVP++` tag. The bracket/base colour is `§b` (aqua) when the monthly rank colour (`player.monthlyRankColor` or `player.cosmetics.monthlyRankColor`) is `"AQUA"`, otherwise `§6` (gold). The `++` is coloured with the resolved plus colour.
5. **Package ranks.** Otherwise it switches on `player.newPackageRank`:
   - `MVP_PLUS` returns `§b[MVP§c+§b]`, where the `+` takes the resolved plus colour (red by default)
   - `MVP` returns `§b[MVP]`
   - `VIP_PLUS` returns `§a[VIP§6+§a]`
   - `VIP` returns `§a[VIP]`
   - any other value (the default) returns `§7`

### Examples

```ts
import { formatRankTag } from "@breezil/hypixel-utils";

// MVP+ with a red plus
formatRankTag({ newPackageRank: "MVP_PLUS", rankPlusColor: "RED" });
// => "§b[MVP§c+§b]"

// MVP+ with no rankPlusColor (falls back to §c red)
formatRankTag({ newPackageRank: "MVP_PLUS" });
// => "§b[MVP§c+§b]"

// SUPERSTAR (MVP++) with default gold base and a red ++
formatRankTag({ monthlyPackageRank: "SUPERSTAR", rankPlusColor: "RED" });
// => "§6[MVP§c++§6]"

// SUPERSTAR (MVP++) with AQUA monthly colour
formatRankTag({
  monthlyPackageRank: "SUPERSTAR",
  monthlyRankColor: "AQUA",
  rankPlusColor: "GOLD",
});
// => "§b[MVP§6++§b]"

// Staff rank takes precedence over package ranks
formatRankTag({ rank: "ADMIN" });
// => "§c[ADMIN]"

// Plain MVP
formatRankTag({ newPackageRank: "MVP" });
// => "§b[MVP]"

// VIP+
formatRankTag({ newPackageRank: "VIP_PLUS" });
// => "§a[VIP§6+§a]"

// VIP
formatRankTag({ newPackageRank: "VIP" });
// => "§a[VIP]"

// Default / no rank
formatRankTag({});
// => "§7"

// A custom prefix wins over everything
formatRankTag({ prefix: "§c[OWNER]", rank: "ADMIN" });
// => "§c[OWNER]"

// A parsed player with its colours under cosmetics
formatRankTag({
  newPackageRank: "MVP_PLUS",
  cosmetics: { rankPlusColor: "GOLD" },
});
// => "§b[MVP§6+§b]"

// rank "NORMAL" is ignored, so package rank is used
formatRankTag({ rank: "NORMAL", newPackageRank: "MVP" });
// => "§b[MVP]"
```

## `MINECRAFT_COLORS`

A read-only map of Minecraft colour names to their `§`-code. Used by [`formatRankTag`](#formatranktag-player) to resolve `rankPlusColor`.

### Signature

```ts
const MINECRAFT_COLORS: Readonly<Record<string, string>>;
```

### Values

| Colour name    | `§`-code |
| -------------- | -------- |
| `BLACK`        | `§0`     |
| `DARK_BLUE`    | `§1`     |
| `DARK_GREEN`   | `§2`     |
| `DARK_AQUA`    | `§3`     |
| `DARK_RED`     | `§4`     |
| `DARK_PURPLE`  | `§5`     |
| `GOLD`         | `§6`     |
| `GRAY`         | `§7`     |
| `DARK_GRAY`    | `§8`     |
| `BLUE`         | `§9`     |
| `GREEN`        | `§a`     |
| `AQUA`         | `§b`     |
| `RED`          | `§c`     |
| `LIGHT_PURPLE` | `§d`     |
| `YELLOW`       | `§e`     |
| `WHITE`        | `§f`     |

### Example

```ts
import { MINECRAFT_COLORS } from "@breezil/hypixel-utils";

MINECRAFT_COLORS.RED; // => "§c"
MINECRAFT_COLORS.GOLD; // => "§6"
```

## `STAFF_RANK_TAGS`

A read-only map of staff and special rank names to their fully coloured tag. Used by [`formatRankTag`](#formatranktag-player) when the player's `rank` (or `staffRank`) field matches one of these keys.

### Signature

```ts
const STAFF_RANK_TAGS: Readonly<Record<string, string>>;
```

### Values

| Rank          | Coloured tag      |
| ------------- | ----------------- |
| `YOUTUBER`    | `§c[§fYOUTUBE§c]` |
| `GAME_MASTER` | `§2[GM]`          |
| `ADMIN`       | `§c[ADMIN]`       |
| `MODERATOR`   | `§2[MOD]`         |
| `HELPER`      | `§9[HELPER]`      |
| `MAYOR`       | `§d[MAYOR]`       |

### Example

```ts
import { STAFF_RANK_TAGS } from "@breezil/hypixel-utils";

STAFF_RANK_TAGS.YOUTUBER; // => "§c[§fYOUTUBE§c]"
STAFF_RANK_TAGS.ADMIN; // => "§c[ADMIN]"
```
