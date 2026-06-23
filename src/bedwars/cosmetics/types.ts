/**
 * Shared types for BedWars cosmetics (projectile trails, victory dances, final
 * kill effects, sprays, island toppers, death cries, shopkeeper skins, glyphs,
 * bed destroys, wood skins, figurines). Each family exports a readonly array of
 * these entries.
 */

export type BedWarsRarity = "COMMON" | "RARE" | "EPIC" | "LEGENDARY";

/**
 * How a cosmetic is obtained: a Bed Wars Token price as a number, or a string
 * describing the source when it is not a plain token purchase (an event shop, a
 * challenge reward, a rank, the Slumber Hotel, a battle pass, and so on). Use an
 * empty string when the source is unknown or the item is a default.
 */
export type BedWarsCosmeticCost = number | string;

/** A single BedWars cosmetic. */
export interface BedWarsCosmetic {
  readonly name: string;
  readonly rarity: BedWarsRarity;
  readonly cost: BedWarsCosmeticCost;
  /** Present on families whose entries carry a description (dances, kill effects, bed destroys). */
  readonly description?: string;
}

