# BedWars Shop and Upgrades

Reference data for the BedWars Item Shop and Upgrade Shop. All values are pure
data with no runtime, network, or side-effecting logic.

Each cost is split into two fields: `solo` is the Solo/Doubles price and `team`
is the 3v3v3v3 / 4v4v4v4 price. When a price is identical across modes, both
fields hold the same amount.

## Usage

```ts
import {
  BEDWARS_SHOP_ITEMS,
  BEDWARS_SHOP_UPGRADES,
  type BedWarsShopItem,
  type BedWarsUpgrade,
} from "@breezil/hypixel-utils";

// Find an item and read its team-mode cost
const tnt = BEDWARS_SHOP_ITEMS.find((item) => item.name === "TNT");
console.log(tnt?.solo.gold); // 4
console.log(tnt?.team.gold); // 8

// Read a specific upgrade tier
const armor = BEDWARS_SHOP_UPGRADES.find((u) => u.name === "Reinforced Armor");
console.log(armor?.tiers[3].team.diamond); // 30
```

## Interfaces

### BedWarsResourceCost

Resource cost for a single purchase, expressed per resource type.

```ts
export interface BedWarsResourceCost {
  readonly iron?: number;
  readonly gold?: number;
  readonly emerald?: number;
  readonly diamond?: number;
}
```

### BedWarsShopItem

A single Item Shop entry. `solo` is the Solo/Doubles price and `team` is the
3v3v3v3 / 4v4v4v4 price. Tiered tools (Axe/Pickaxe) are flattened into one entry
per tier, with the tier enchantment recorded in `enchantments`.

```ts
export interface BedWarsShopItem {
  readonly name: string;
  readonly quantity?: number;
  readonly enchantments?: string;
  readonly solo: BedWarsResourceCost;
  readonly team: BedWarsResourceCost;
}
```

### BedWarsUpgradeTier

A single tier within an Upgrade Shop track. `tier` is a short tier identifier
(e.g. "I", "1") and `label` is an optional descriptive label. `solo` is the
Solo/Doubles cost and `team` is the 3v3v3v3 / 4v4v4v4 cost.

```ts
export interface BedWarsUpgradeTier {
  readonly tier?: string;
  readonly label?: string;
  readonly solo: BedWarsResourceCost;
  readonly team: BedWarsResourceCost;
}
```

### BedWarsUpgrade

An Upgrade Shop track, composed of one or more purchasable tiers.

```ts
export interface BedWarsUpgrade {
  readonly name: string;
  readonly description?: string;
  readonly tiers: readonly BedWarsUpgradeTier[];
}
```

## BEDWARS_SHOP_ITEMS

```ts
export const BEDWARS_SHOP_ITEMS: readonly BedWarsShopItem[];
```

Every Item Shop entry. The "Solo/Doubles" and "3s/4s" columns give the full
cost for that mode. Rows where the two modes differ are flagged in the Notes
column.

| Item                                         | Qty | Enchantment                  | Solo/Doubles | 3s/4s     | Notes                     |
| -------------------------------------------- | --- | ---------------------------- | ------------ | --------- | ------------------------- |
| Wool                                         | 16  |                              | 4 iron       | 4 iron    |                           |
| Hardened Clay                                | 16  |                              | 12 iron      | 12 iron   |                           |
| Wood                                         | 16  |                              | 4 gold       | 4 gold    |                           |
| Blast Proof Glass                            | 4   |                              | 12 iron      | 12 iron   |                           |
| Endstone                                     | 12  |                              | 24 iron      | 24 iron   |                           |
| Ladders                                      | 8   |                              | 4 iron       | 4 iron    |                           |
| Obsidian                                     | 4   |                              | 4 emerald    | 4 emerald |                           |
| Stone Sword                                  |     |                              | 10 iron      | 10 iron   |                           |
| Iron Sword                                   |     |                              | 7 gold       | 7 gold    |                           |
| Diamond Sword                                |     |                              | 4 emerald    | 3 emerald | Differs: cheaper in 3s/4s |
| Knockback Stick                              |     | Knockback I                  | 5 gold       | 5 gold    |                           |
| Permanent Chainmail Armor (Leggings + Boots) |     |                              | 24 iron      | 24 iron   |                           |
| Permanent Iron Armor                         |     |                              | 12 gold      | 12 gold   |                           |
| Permanent Diamond Armor                      |     |                              | 6 emerald    | 6 emerald |                           |
| Permanent Shears                             |     |                              | 20 iron      | 20 iron   |                           |
| Wooden Axe                                   |     | Efficiency I                 | 10 iron      | 10 iron   |                           |
| Stone Axe                                    |     | Efficiency I                 | 10 iron      | 10 iron   |                           |
| Iron Axe                                     |     | Efficiency II                | 3 gold       | 3 gold    |                           |
| Diamond Axe                                  |     | Efficiency III               | 6 gold       | 6 gold    |                           |
| Wooden Pickaxe                               |     | Efficiency I                 | 10 iron      | 10 iron   |                           |
| Iron Pickaxe                                 |     | Efficiency II                | 10 iron      | 10 iron   |                           |
| Golden Pickaxe                               |     | Efficiency III, Sharpness II | 3 gold       | 3 gold    |                           |
| Diamond Pickaxe                              |     | Efficiency III               | 6 gold       | 6 gold    |                           |
| Bow                                          |     |                              | 12 gold      | 12 gold   |                           |
| Bow                                          |     | Power I                      | 20 gold      | 20 gold   |                           |
| Bow                                          |     | Power I, Punch I             | 6 emerald    | 6 emerald |                           |
| Arrows                                       | 6   |                              | 2 gold       | 2 gold    |                           |
| Speed II Potion (45 seconds)                 |     |                              | 1 emerald    | 1 emerald |                           |
| Jump Boost V Potion (45 seconds)             |     |                              | 1 emerald    | 1 emerald |                           |
| Invisibility Potion (30 seconds)             |     |                              | 2 emerald    | 2 emerald |                           |
| Golden Apple                                 |     |                              | 3 gold       | 3 gold    |                           |
| Bed Bug (Silverfish Snowball)                |     |                              | 24 iron      | 24 iron   |                           |
| Dream Defender (Iron Golem)                  |     |                              | 120 iron     | 120 iron  |                           |
| Fireball                                     |     |                              | 40 iron      | 40 iron   |                           |
| TNT                                          |     |                              | 4 gold       | 8 gold    | Differs: pricier in 3s/4s |
| Ender Pearl                                  |     |                              | 4 emerald    | 4 emerald |                           |
| Water Bucket                                 |     |                              | 2 gold       | 3 gold    | Differs: pricier in 3s/4s |
| Bridge Egg                                   |     |                              | 1 emerald    | 1 emerald |                           |
| Magic Milk                                   |     |                              | 4 gold       | 4 gold    |                           |
| Sponge                                       | 4   |                              | 2 gold       | 3 gold    | Differs: pricier in 3s/4s |
| Compact Pop-up Tower                         |     |                              | 24 iron      | 24 iron   |                           |

## BEDWARS_SHOP_UPGRADES

```ts
export const BEDWARS_SHOP_UPGRADES: readonly BedWarsUpgrade[];
```

Every Upgrade Shop track and each of its tiers. All upgrade costs are paid in
diamonds. The "Solo/Doubles" and "3s/4s" columns give the diamond cost for each
tier in that mode.

### Sharpened Swords

Sharpness I, applies to Swords and Axes.

| Tier     | Solo/Doubles | 3s/4s     |
| -------- | ------------ | --------- |
| (single) | 4 diamond    | 8 diamond |

### Reinforced Armor

Protection I-IV, all armor pieces.

| Tier | Solo/Doubles | 3s/4s      |
| ---- | ------------ | ---------- |
| I    | 2 diamond    | 5 diamond  |
| II   | 4 diamond    | 10 diamond |
| III  | 8 diamond    | 20 diamond |
| IV   | 16 diamond   | 30 diamond |

### Maniac Miner

Haste I-II.

| Tier | Solo/Doubles | 3s/4s     |
| ---- | ------------ | --------- |
| I    | 2 diamond    | 4 diamond |
| II   | 4 diamond    | 6 diamond |

### Forge

Affects resource generator.

| Tier    | Solo/Doubles | 3s/4s      |
| ------- | ------------ | ---------- |
| Iron    | 2 diamond    | 4 diamond  |
| Gold    | 4 diamond    | 8 diamond  |
| Emerald | 6 diamond    | 12 diamond |
| Molten  | 8 diamond    | 16 diamond |

### Heal Pool

Regeneration I at team island.

| Tier     | Solo/Doubles | 3s/4s     |
| -------- | ------------ | --------- |
| (single) | 1 diamond    | 3 diamond |

### Cushioned Boots

Feather Falling.

| Tier | Solo/Doubles | 3s/4s     |
| ---- | ------------ | --------- |
| I    | 1 diamond    | 2 diamond |
| II   | 2 diamond    | 4 diamond |

### Dragon Buff

Retired upgrade, no longer available.

| Tier     | Solo/Doubles | 3s/4s     |
| -------- | ------------ | --------- |
| (single) | 5 diamond    | 5 diamond |

### Traps

Reveal Trap, Miner Fatigue Trap, Blindness Trap, Counter-Offensive Trap.

| Tier | Solo/Doubles | 3s/4s     |
| ---- | ------------ | --------- |
| 1    | 1 diamond    | 1 diamond |
| 2    | 2 diamond    | 2 diamond |
| 3    | 4 diamond    | 4 diamond |

