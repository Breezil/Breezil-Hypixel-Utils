# Games

Every game Hypixel still runs, with its modes. All exports come from `@breezil/hypixel-utils`, and are bundled as `HypixelReference.games` and `HypixelReference.game`.

## `HYPIXEL_GAMES`

```ts
interface HypixelGameMode {
  readonly id: string; // the location's `mode`, as in "TNTAG"
  readonly name: string; // as in "TNT Tag"
}

interface HypixelGame {
  readonly type: string; // the location's `serverType`, as in "TNTGAMES"
  readonly name: string; // as in "The TNT Games"
  readonly legacy: boolean; // played from the Classic Games lobby
  readonly modes: readonly HypixelGameMode[];
}

const HYPIXEL_GAMES: readonly HypixelGame[];
```

Taken from Hypixel's own games resource (`/v2/resources/games`). Games Hypixel retired are left out. A game's `type` and a mode's `id` are what Hypixel reports in a player's location, so they can be compared with it directly. Mode ids are only unique within their game (Blitz and Smash Heroes both have `solo_normal`), so identify a mode by its game and id together. Hypixel's games list and its location reports do not always agree on a mode id's case.

## `hypixelGame(type)`

```ts
function hypixelGame(type: string | null | undefined): HypixelGame | null;
```

The game for a location's `serverType`, in any case, or `null` for one not listed.

```ts
import { hypixelGame } from "@breezil/hypixel-utils";

hypixelGame("tntgames")?.modes.find((mode) => mode.id === "TNTAG")?.name; // "TNT Tag"
```

