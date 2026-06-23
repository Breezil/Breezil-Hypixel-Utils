/**
 * BedWars Item Shop and Upgrade Shop reference data.
 *
 * Models every purchasable Item Shop entry and every Upgrade Shop track,
 * with mode-specific pricing where it differs between Solo/Doubles and the
 * 3v3v3v3 / 4v4v4v4 team modes. When a price is identical across modes,
 * the solo and team values are set to the same amount.
 *
 * Pure data only: no runtime, network, or side-effecting logic.
 */

/** Resource cost for a single purchase, expressed per resource type. */
export interface BedWarsResourceCost {
  readonly iron?: number;
  readonly gold?: number;
  readonly emerald?: number;
  readonly diamond?: number;
}

/**
 * A single Item Shop entry.
 *
 * `solo` is the Solo/Doubles price and `team` is the 3v3v3v3 / 4v4v4v4 price.
 * Tiered tools (Axe/Pickaxe) are flattened into one entry per tier, with the
 * tier enchantment recorded in `enchantments`.
 */
export interface BedWarsShopItem {
  readonly name: string;
  readonly quantity?: number;
  readonly enchantments?: string;
  readonly solo: BedWarsResourceCost;
  readonly team: BedWarsResourceCost;
}

/** All BedWars Item Shop entries. */
export const BEDWARS_SHOP_ITEMS: readonly BedWarsShopItem[] = [
  { name: "Wool", quantity: 16, solo: { iron: 4 }, team: { iron: 4 } },
  {
    name: "Hardened Clay",
    quantity: 16,
    solo: { iron: 12 },
    team: { iron: 12 },
  },
  { name: "Wood", quantity: 16, solo: { gold: 4 }, team: { gold: 4 } },
  {
    name: "Blast Proof Glass",
    quantity: 4,
    solo: { iron: 12 },
    team: { iron: 12 },
  },
  { name: "Endstone", quantity: 12, solo: { iron: 24 }, team: { iron: 24 } },
  { name: "Ladders", quantity: 8, solo: { iron: 4 }, team: { iron: 4 } },
  { name: "Obsidian", quantity: 4, solo: { emerald: 4 }, team: { emerald: 4 } },
  { name: "Stone Sword", solo: { iron: 10 }, team: { iron: 10 } },
  { name: "Iron Sword", solo: { gold: 7 }, team: { gold: 7 } },
  { name: "Diamond Sword", solo: { emerald: 4 }, team: { emerald: 3 } },
  {
    name: "Knockback Stick",
    enchantments: "Knockback I",
    solo: { gold: 5 },
    team: { gold: 5 },
  },
  {
    name: "Permanent Chainmail Armor (Leggings + Boots)",
    solo: { iron: 24 },
    team: { iron: 24 },
  },
  { name: "Permanent Iron Armor", solo: { gold: 12 }, team: { gold: 12 } },
  {
    name: "Permanent Diamond Armor",
    solo: { emerald: 6 },
    team: { emerald: 6 },
  },
  { name: "Permanent Shears", solo: { iron: 20 }, team: { iron: 20 } },
  {
    name: "Wooden Axe",
    enchantments: "Efficiency I",
    solo: { iron: 10 },
    team: { iron: 10 },
  },
  {
    name: "Stone Axe",
    enchantments: "Efficiency I",
    solo: { iron: 10 },
    team: { iron: 10 },
  },
  {
    name: "Iron Axe",
    enchantments: "Efficiency II",
    solo: { gold: 3 },
    team: { gold: 3 },
  },
  {
    name: "Diamond Axe",
    enchantments: "Efficiency III",
    solo: { gold: 6 },
    team: { gold: 6 },
  },
  {
    name: "Wooden Pickaxe",
    enchantments: "Efficiency I",
    solo: { iron: 10 },
    team: { iron: 10 },
  },
  {
    name: "Iron Pickaxe",
    enchantments: "Efficiency II",
    solo: { iron: 10 },
    team: { iron: 10 },
  },
  {
    name: "Golden Pickaxe",
    enchantments: "Efficiency III, Sharpness II",
    solo: { gold: 3 },
    team: { gold: 3 },
  },
  {
    name: "Diamond Pickaxe",
    enchantments: "Efficiency III",
    solo: { gold: 6 },
    team: { gold: 6 },
  },
  { name: "Bow", solo: { gold: 12 }, team: { gold: 12 } },
  {
    name: "Bow",
    enchantments: "Power I",
    solo: { gold: 20 },
    team: { gold: 20 },
  },
  {
    name: "Bow",
    enchantments: "Power I, Punch I",
    solo: { emerald: 6 },
    team: { emerald: 6 },
  },
  { name: "Arrows", quantity: 6, solo: { gold: 2 }, team: { gold: 2 } },
  {
    name: "Speed II Potion (45 seconds)",
    solo: { emerald: 1 },
    team: { emerald: 1 },
  },
  {
    name: "Jump Boost V Potion (45 seconds)",
    solo: { emerald: 1 },
    team: { emerald: 1 },
  },
  {
    name: "Invisibility Potion (30 seconds)",
    solo: { emerald: 2 },
    team: { emerald: 2 },
  },
  { name: "Golden Apple", solo: { gold: 3 }, team: { gold: 3 } },
  {
    name: "Bed Bug (Silverfish Snowball)",
    solo: { iron: 24 },
    team: { iron: 24 },
  },
  {
    name: "Dream Defender (Iron Golem)",
    solo: { iron: 120 },
    team: { iron: 120 },
  },
  { name: "Fireball", solo: { iron: 40 }, team: { iron: 40 } },
  { name: "TNT", solo: { gold: 4 }, team: { gold: 8 } },
  { name: "Ender Pearl", solo: { emerald: 4 }, team: { emerald: 4 } },
  { name: "Water Bucket", solo: { gold: 2 }, team: { gold: 3 } },
  { name: "Bridge Egg", solo: { emerald: 1 }, team: { emerald: 1 } },
  { name: "Magic Milk", solo: { gold: 4 }, team: { gold: 4 } },
  { name: "Sponge", quantity: 4, solo: { gold: 2 }, team: { gold: 3 } },
  { name: "Compact Pop-up Tower", solo: { iron: 24 }, team: { iron: 24 } },
];

/**
 * A single tier within an Upgrade Shop track.
 *
 * `tier` is a short tier identifier (e.g. "I", "1") and `label` is an optional
 * descriptive label (e.g. the affected resource generator). `solo` is the
 * Solo/Doubles cost and `team` is the 3v3v3v3 / 4v4v4v4 cost.
 */
export interface BedWarsUpgradeTier {
  readonly tier?: string;
  readonly label?: string;
  readonly solo: BedWarsResourceCost;
  readonly team: BedWarsResourceCost;
}

/** An Upgrade Shop track, composed of one or more purchasable tiers. */
export interface BedWarsUpgrade {
  readonly name: string;
  readonly description?: string;
  readonly tiers: readonly BedWarsUpgradeTier[];
}

/** All BedWars Upgrade Shop tracks. */
export const BEDWARS_SHOP_UPGRADES: readonly BedWarsUpgrade[] = [
  {
    name: "Sharpened Swords",
    description: "Sharpness I, applies to Swords and Axes.",
    tiers: [{ solo: { diamond: 4 }, team: { diamond: 8 } }],
  },
  {
    name: "Reinforced Armor",
    description: "Protection I-IV, all armor pieces.",
    tiers: [
      { tier: "I", solo: { diamond: 2 }, team: { diamond: 5 } },
      { tier: "II", solo: { diamond: 4 }, team: { diamond: 10 } },
      { tier: "III", solo: { diamond: 8 }, team: { diamond: 20 } },
      { tier: "IV", solo: { diamond: 16 }, team: { diamond: 30 } },
    ],
  },
  {
    name: "Maniac Miner",
    description: "Haste I-II.",
    tiers: [
      { tier: "I", solo: { diamond: 2 }, team: { diamond: 4 } },
      { tier: "II", solo: { diamond: 4 }, team: { diamond: 6 } },
    ],
  },
  {
    name: "Forge",
    description: "Affects resource generator.",
    tiers: [
      { tier: "Iron", solo: { diamond: 2 }, team: { diamond: 4 } },
      { tier: "Gold", solo: { diamond: 4 }, team: { diamond: 8 } },
      { tier: "Emerald", solo: { diamond: 6 }, team: { diamond: 12 } },
      { tier: "Molten", solo: { diamond: 8 }, team: { diamond: 16 } },
    ],
  },
  {
    name: "Heal Pool",
    description: "Regeneration I at team island.",
    tiers: [{ solo: { diamond: 1 }, team: { diamond: 3 } }],
  },
  {
    name: "Cushioned Boots",
    description: "Feather Falling.",
    tiers: [
      { tier: "I", solo: { diamond: 1 }, team: { diamond: 2 } },
      { tier: "II", solo: { diamond: 2 }, team: { diamond: 4 } },
    ],
  },
  {
    name: "Dragon Buff",
    description: "Retired upgrade, no longer available.",
    tiers: [{ solo: { diamond: 5 }, team: { diamond: 5 } }],
  },
  {
    name: "Traps",
    description:
      "Reveal Trap, Miner Fatigue Trap, Blindness Trap, Counter-Offensive Trap.",
    tiers: [
      { tier: "1", solo: { diamond: 1 }, team: { diamond: 1 } },
      { tier: "2", solo: { diamond: 2 }, team: { diamond: 2 } },
      { tier: "3", solo: { diamond: 4 }, team: { diamond: 4 } },
    ],
  },
];

