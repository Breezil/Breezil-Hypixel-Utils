# BedWars Teams, Maps, Events, XP, and Modes

Pure reference data for Hypixel BedWars: the teams, the map list and per-map build-height limits, the game event timeline, XP gain values, and Dream mode definitions. All exports come from `@breezil/hypixel-utils`.

## Teams

The 8 BedWars teams, keyed by the scoreboard-team letter Hypixel uses.

```ts
interface BedWarsTeam {
  /** The scoreboard-team letter Hypixel uses (R/B/G/Y/A/W/P/S). */
  readonly letter: string;
  readonly name: string;
  /** Section-sign colour code for the team. */
  readonly color: string;
}

const BEDWARS_TEAMS: Readonly<Record<string, BedWarsTeam>>;
```

### Usage

```ts
import { BEDWARS_TEAMS } from "@breezil/hypixel-utils";

BEDWARS_TEAMS.R; // { letter: "R", name: "Red", color: "§c" }
```

### All teams

| Letter | Name   | Colour code |
| ------ | ------ | ----------- |
| R      | Red    | `§c`        |
| B      | Blue   | `§9`        |
| G      | Green  | `§a`        |
| Y      | Yellow | `§e`        |
| A      | Aqua   | `§b`        |
| W      | White  | `§f`        |
| P      | Pink   | `§d`        |
| S      | Gray   | `§7`        |

## Maps and build heights

`BEDWARS_MAP_HEIGHTS` maps each map's internal id (lowercase) to its build-height limit, the highest Y coordinate on which you can place blocks. `BEDWARS_MAPS` is the sorted list of every map id, derived from the heights table so the two never drift apart. Use `bedWarsMapHeight` to look up a map's limit and `isBedWarsMap` to test whether an id is a known map; both trim whitespace and are case-insensitive, and `bedWarsMapHeight` returns `null` for unknown maps.

```ts
const BEDWARS_MAPS: readonly string[];
const BEDWARS_MAP_HEIGHTS: Readonly<Record<string, number>>;

function bedWarsMapHeight(map: string): number | null;
function isBedWarsMap(map: string): boolean;
```

### Usage

```ts
import {
  BEDWARS_MAPS,
  bedWarsMapHeight,
  isBedWarsMap,
} from "@breezil/hypixel-utils";

BEDWARS_MAPS.length; // 203 (every map id, sorted)
bedWarsMapHeight("Lighthouse"); // 111 (case-insensitive, trimmed)
bedWarsMapHeight("unknown_map"); // null
isBedWarsMap("GATEWAY"); // true
```

### All map heights

| Map id           | Height |
| ---------------- | ------ |
| acropolis        | 101    |
| aetius           | 95     |
| airshow          | 101    |
| alaric           | 98     |
| amazon           | 94     |
| ambush           | 102    |
| antenna          | 89     |
| apollo           | 99     |
| aqil             | 91     |
| aquarium         | 110    |
| arcade           | 91     |
| archway          | 87     |
| arid             | 84     |
| artemis          | 97     |
| ashfire          | 106    |
| ashore           | 121    |
| babylon          | 108    |
| beeeee           | 102    |
| biohazard        | 96     |
| blitzen          | 111    |
| blizzard_bay     | 93     |
| bloom            | 100    |
| blossom          | 97     |
| boardwalk        | 98     |
| boletum          | 121    |
| bucket_bay       | 92     |
| build_site       | 97     |
| bunnywars        | 100    |
| burrow           | 101    |
| capture          | 121    |
| carapace         | 95     |
| carrot_patch     | 90     |
| casita           | 94     |
| cascade          | 88     |
| catalyst         | 102    |
| cauldron         | 100    |
| chained          | 90     |
| chalk_cliffs     | 108    |
| cliffside        | 101    |
| clutch           | 85     |
| coastal          | 90     |
| comet            | 116    |
| crimson          | 106    |
| crogorm          | 124    |
| crypt            | 96     |
| cryptic          | 105    |
| darkened         | 82     |
| daolong          | 91     |
| deadwood         | 84     |
| deposit          | 82     |
| dockyard         | 98     |
| dragon_light     | 96     |
| dragonstar       | 101    |
| dreamgrove       | 116    |
| duye             | 95     |
| eastwood         | 101    |
| easter_basket    | 94     |
| easter_garden    | 99     |
| egg_factory      | 93     |
| egg_hunt         | 101    |
| egg_run          | 99     |
| enchanted        | 101    |
| entangle         | 96     |
| extinction       | 96     |
| fang_outpost     | 100    |
| fireplace        | 96     |
| fort_doon        | 91     |
| foxtrots         | 95     |
| frost            | 122    |
| frosted          | 91     |
| fruitbrawl       | 101    |
| frogiton         | 91     |
| gardens          | 102    |
| gateway          | 129    |
| gelato           | 81     |
| ghoulish         | 87     |
| gingerbread      | 107    |
| gingerbread_town | 90     |
| glacier          | 106    |
| graveship        | 124    |
| grotto           | 101    |
| hanging_gardens  | 108    |
| harvest          | 84     |
| harvesting       | 96     |
| hell_temple      | 115    |
| highland_peaks   | 89     |
| haven            | 73     |
| hollow           | 89     |
| hollow_hills     | 103    |
| holmgang         | 98     |
| horizon          | 101    |
| impere           | 105    |
| infinite         | 89     |
| invasion         | 116    |
| ironclad         | 88     |
| ivory_castle     | 111    |
| jurassic         | 95     |
| katsu            | 97     |
| keep             | 62     |
| kubo             | 92     |
| lectus           | 90     |
| lighthouse       | 111    |
| lightstone       | 96     |
| lions_temple     | 104    |
| loft             | 83     |
| lost_temple      | 92     |
| lotice           | 91     |
| lotus            | 90     |
| lucky_rush       | 85     |
| lunarhouse       | 111    |
| meadow           | 81     |
| meso             | 96     |
| mirage           | 87     |
| montipora        | 98     |
| mortuus          | 91     |
| mosdalr          | 105    |
| mystery          | 93     |
| nebuc            | 106    |
| nostalgia        | 97     |
| nutcracker       | 99     |
| obelisk          | 114    |
| ominosity        | 124    |
| orbit            | 97     |
| orchestra        | 107    |
| orchid           | 87     |
| orientwood       | 101    |
| paladin          | 99     |
| paradox          | 85     |
| pavilion         | 98     |
| pernicious       | 91     |
| pharaoh          | 96     |
| picnic           | 121    |
| planet_98        | 106    |
| playground       | 101    |
| polygon          | 94     |
| pool_party       | 87     |
| pumpkin_bay      | 86     |
| raze             | 89     |
| relic            | 91     |
| rigged           | 95     |
| rise             | 96     |
| rooftop          | 92     |
| rooted           | 96     |
| salmon_bay       | 91     |
| sandcastle       | 102    |
| sanctuary        | 92     |
| sanctum          | 92     |
| santas_rush      | 93     |
| scareshow        | 101    |
| scorched_sands   | 93     |
| screamway        | 91     |
| seraph           | 95     |
| serenity         | 94     |
| shark_attack     | 95     |
| siege            | 109    |
| silver_birch     | 115    |
| sky_festival     | 95     |
| sky_rise         | 91     |
| slumber          | 94     |
| snails           | 91     |
| snowkeep         | 96     |
| snowy_square     | 96     |
| solace           | 101    |
| speedway         | 91     |
| springtide       | 87     |
| steampumpkin     | 100    |
| steampunk        | 100    |
| stilted          | 81     |
| stonekeep        | 96     |
| sunflower        | 96     |
| swashbuckle      | 86     |
| sweet_wonderland | 95     |
| symphonic        | 107    |
| temple           | 106    |
| tengshe          | 101    |
| terminal         | 88     |
| terraced         | 90     |
| tigris           | 107    |
| tinselbury       | 101    |
| toro             | 93     |
| treenan          | 121    |
| trick_or_yeet    | 95     |
| turtle_cove      | 99     |
| tuzi             | 92     |
| unchained        | 91     |
| unturned         | 93     |
| urban_plaza      | 84     |
| usagi            | 97     |
| varyth           | 105    |
| vigilante        | 88     |
| whiskers         | 88     |
| yandi            | 81     |
| yue              | 102    |
| zarzul           | 115    |
| zen_plaza        | 84     |
| lasagne          | 91     |
| manor_royale     | 94     |
| shipment         | 102    |
| shipwreck        | 59     |
| atlas_prime      | 96     |
| echo_ruins       | 99     |
| pantheon         | 98     |
| station          | 114    |

## Events

The game event timeline covers diamond and emerald generator upgrades, bed destruction, sudden death, and game end. Each event carries a stable `key`, a fully section-sign coloured display `name`, and the `time` in seconds from game start. Use `bedWarsNextEvent` to find the next upcoming event given the seconds elapsed since the game started; it returns `null` once the game has ended.

```ts
interface BedWarsEvent {
  readonly key: string;
  readonly name: string;
  readonly time: number;
}

function bedWarsNextEvent(elapsedSeconds: number): BedWarsEvent | null;

const BEDWARS_EVENTS: readonly BedWarsEvent[];
```

### Usage

```ts
import { bedWarsNextEvent, BEDWARS_EVENTS } from "@breezil/hypixel-utils";

bedWarsNextEvent(300); // { key: "Diamond II", name: "§bDiamond II", time: 360 }
bedWarsNextEvent(60 * 60); // null (game has ended)

BEDWARS_EVENTS.length; // 7
```

### All events

| Key             | Name                  | Time (s) |
| --------------- | --------------------- | -------- |
| Diamond II      | `§bDiamond II`        | 360      |
| Emerald II      | `§aEmerald II`        | 720      |
| Diamond III     | `§bDiamond III`       | 1080     |
| Emerald III     | `§aEmerald III`       | 1440     |
| Bed Destruction | `§c§lBed Destruction` | 1800     |
| Sudden Death    | `§5§lSudden Death`    | 2400     |
| Game End        | `§d§lGame End`        | 3000     |

## XP

The `BEDWARS_XP_SOURCES` table pairs each source of experience with the amount of XP it currently awards. Pure reference data, no runtime or network logic.

```ts
interface BedWarsXpSource {
  readonly source: string;
  readonly xp: number;
}

const BEDWARS_XP_SOURCES: readonly BedWarsXpSource[];
```

### Usage

```ts
import { BEDWARS_XP_SOURCES } from "@breezil/hypixel-utils";

const finalKill = BEDWARS_XP_SOURCES.find((s) => s.source === "Final kill");
finalKill?.xp; // 10
```

### All XP sources

| Source                         | XP  |
| ------------------------------ | --- |
| Solo/Doubles win               | 100 |
| 3v3v3v3/4v4v4v4 win            | 50  |
| 4v4/Dreams win                 | 25  |
| Minute of playtime             | 15  |
| First kill on each player      | 5   |
| Final kill                     | 10  |
| Breaking a bed                 | 15  |
| Diamond from diamond generator | 2   |
| Emerald from emerald generator | 3   |

## Dream modes

Dream modes are rotating, limited-time BedWars variants. The `BEDWARS_DREAM_MODES` table pairs a stable snake_case `id` with its display `name`. Pure reference data, no runtime or network logic.

```ts
interface BedWarsDreamMode {
  readonly id: string;
  readonly name: string;
}

const BEDWARS_DREAM_MODES: readonly BedWarsDreamMode[];
```

### Usage

```ts
import { BEDWARS_DREAM_MODES } from "@breezil/hypixel-utils";

const mode = BEDWARS_DREAM_MODES.find((m) => m.id === "voidless");
mode?.name; // "Voidless"
```

### All Dream modes

| Id              | Name            |
| --------------- | --------------- |
| rush_v2         | Rush v2         |
| ultimate_v2     | Ultimate v2     |
| 40v40_castle_v2 | 40v40 Castle v2 |
| voidless        | Voidless        |
| armed           | Armed           |
| lucky_blocks_v2 | Lucky Blocks v2 |
| swappage        | Swappage        |
| one_block       | One Block       |

