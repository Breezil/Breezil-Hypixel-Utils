/**
 * Bed Wars achievements reference data for Hypixel.
 *
 * Contains the one-time "Challenge" achievements, the repeatable tiered
 * achievements, and the legacy tiered achievements, transcribed from the
 * Hypixel Bed Wars achievement listings.
 */

export interface BedWarsAchievement {
  readonly name: string;
  readonly description: string;
  readonly points: number;
}

export interface BedWarsAchievementTier {
  readonly tier: string;
  readonly description: string;
  readonly points: number;
}

export interface BedWarsTieredAchievement {
  readonly name: string;
  readonly tiers: readonly BedWarsAchievementTier[];
}

/** One-time "Challenge" achievements. */
export const BEDWARS_CHALLENGE_ACHIEVEMENTS: readonly BedWarsAchievement[] = [
  { name: "Alchemist", description: "Buy 10 Potions in a game", points: 5 },
  {
    name: "Already over?",
    description: "Win a game within 10 minutes",
    points: 10,
  },
  {
    name: "Bomber",
    description: "Use 5 TNTs in a single game of Bed Wars",
    points: 10,
  },
  {
    name: "Builder",
    description: "Place over 200 blocks in a game",
    points: 5,
  },
  {
    name: "Can't Wake Up",
    description: "Enter the Slumber Hotel temple",
    points: 15,
  },
  {
    name: "Cutting It Close!",
    description: "Win a game with less than 30 seconds before bed destruction",
    points: 15,
  },
  {
    name: "Diamond Hoarder",
    description: "Collect at least 50 Diamonds from generators in a game",
    points: 10,
  },
  {
    name: "Distraction",
    description: "Get a kill while you have your glyph active",
    points: 5,
  },
  { name: "Dragon Slayer", description: "Kill an Ender Dragon", points: 15 },
  {
    name: "Emerald Hoarder",
    description: "Collect at least 25 Emeralds from generators in a game",
    points: 10,
  },
  {
    name: "Fell Into a Deep Sleep",
    description: "Help John Indigos decipher the map",
    points: 10,
  },
  {
    name: "First Blood",
    description: "Be the first player to kill an enemy",
    points: 5,
  },
  {
    name: "Forged in Fire",
    description: "Obtain the mystery item from the Blacksmith's quest line",
    points: 20,
  },
  {
    name: "Geared up!",
    description: "Purchase the Diamond armor & sword",
    points: 5,
  },
  {
    name: "Getting The Job Done Better",
    description: "Destroy all of the beds in a single game",
    points: 15,
  },
  {
    name: "Getting the job done",
    description: "Destroy half of the beds in one game",
    points: 10,
  },
  {
    name: "Golem's Rose",
    description: "Kill 5 enemy Golems in a single game",
    points: 10,
  },
  {
    name: "Great lord of fire!",
    description: "Have 10 Fireballs in your inventory at the same time",
    points: 5,
  },
  {
    name: "I don't need a bed!",
    description: "Survive for 10 minutes without a bed",
    points: 10,
  },
  {
    name: "Introduce Yourself",
    description: "Introduce yourself to the Slumber Hotel Receptionist",
    points: 5,
  },
  {
    name: "Iron Punch",
    description: "Get a kill with an Iron Golem",
    points: 5,
  },
  {
    name: "It's Dark Down There",
    description: "Fall into the void",
    points: 5,
  },
  {
    name: "Like a Ninja",
    description: "Use Magic Milk to make a trap not activate",
    points: 10,
  },
  {
    name: "Merciless",
    description: "Final Kill 5 enemies in one game",
    points: 5,
  },
  {
    name: "Millionaires Club",
    description: "Unlock the Explorer's Wallet",
    points: 10,
  },
  {
    name: "Minefield",
    description: "Have 3 traps activated at once",
    points: 10,
  },
  {
    name: "Mission Control",
    description: "Use the Quick Communications menu to send a team message",
    points: 5,
  },
  {
    name: "Out Of Stock",
    description: "Purchase and max out all team upgrades in a single game",
    points: 15,
  },
  {
    name: "Pointless Challenge",
    description: "Win a game without killing an enemy with a sword",
    points: 5,
  },
  {
    name: "Prime Marksmanship",
    description: "Land 5 consecutive shots with a bow",
    points: 5,
  },
  {
    name: "Rejoining the Dream!",
    description: "Use the /rejoin command to warp back into a Bed Wars game",
    points: 5,
  },
  {
    name: "Return to Spammer",
    description: "Get a kill by deflecting someone else's Fireball",
    points: 10,
  },
  {
    name: "Revenge",
    description: "Final kill the player that destroyed your bed",
    points: 15,
  },
  {
    name: "Savvy Shopper",
    description: "Change the Shopkeeper skin",
    points: 5,
  },
  { name: "Shear Luck", description: "Kill a player with shears!", points: 5 },
  {
    name: "Showoff",
    description: "Destroy a bed in style (Use a Bed Destroy cosmetic)",
    points: 5,
  },
  {
    name: "Sneaky Rusher",
    description: "Destroy a bed while being invisible",
    points: 5,
  },
  {
    name: "Speedy Bridger!",
    description:
      "Be the first player to obtain an Emerald from the middle island",
    points: 5,
  },
  {
    name: "Stay Away From Me!",
    description:
      "Knock 5 players into the void in a single game using a Knockback Stick",
    points: 10,
  },
  {
    name: "Strategist",
    description: "Purchase the Reinforced Armor IV team upgrade",
    points: 10,
  },
  {
    name: "Super looter",
    description: "Obtain at least 20 Gold Ingots from enemies in a game",
    points: 10,
  },
  { name: "Survivor", description: "Win a game without dying", points: 10 },
  {
    name: "Team Player",
    description: "Place an Emerald in your team chest",
    points: 5,
  },
  {
    name: "That's a First",
    description: "Win your first game of Bed Wars",
    points: 5,
  },
  {
    name: "The Future Is Now",
    description: "Punch a chest to deposit your held item",
    points: 5,
  },
  {
    name: "The Last Of Us",
    description: "Win a game by being the last player alive on your team",
    points: 15,
  },
  {
    name: "The Man who Sold the Dreamscape",
    description: "Meet the Owner of the Slumber Hotel",
    points: 20,
  },
  {
    name: "The Sniper",
    description: "Kill a player from at least 40 blocks away",
    points: 10,
  },
  {
    name: "The Ultimate Defense",
    description: "Place 8 Obsidian blocks around your bed",
    points: 5,
  },
  {
    name: "Waking Dreams",
    description: "Assist the first three Slumber Hotel guests",
    points: 5,
  },
  {
    name: "You Can't Do That!",
    description: "Attempt to break your team's bed",
    points: 5,
  },
  {
    name: "You Can't Trap Me!",
    description: "Destroy a bed within 10 seconds of activating the enemy trap",
    points: 5,
  },
] as const;

/** Repeatable tiered achievements. */
export const BEDWARS_TIERED_ACHIEVEMENTS: readonly BedWarsTieredAchievement[] =
  [
    {
      name: "Bed Removal",
      tiers: [
        { tier: "I", description: "Destroy 10 Beds", points: 5 },
        { tier: "II", description: "Destroy 25 Beds", points: 10 },
        { tier: "III", description: "Destroy 100 Beds", points: 15 },
        { tier: "IV", description: "Destroy 250 Beds", points: 20 },
        { tier: "V", description: "Destroy 500 Beds", points: 25 },
      ],
    },
    {
      name: "Bed Wars Killer",
      tiers: [
        { tier: "I", description: "Get 25 final kills", points: 5 },
        { tier: "II", description: "Get 100 final kills", points: 10 },
        { tier: "III", description: "Get 250 final kills", points: 15 },
        { tier: "IV", description: "Get 500 final kills", points: 20 },
        { tier: "V", description: "Get 1,500 final kills", points: 25 },
      ],
    },
    {
      name: "Collectors Edition",
      tiers: [
        {
          tier: "I",
          description: "Collect 25 wool from enemy teams",
          points: 5,
        },
        {
          tier: "II",
          description: "Collect 50 wool from enemy teams",
          points: 10,
        },
        {
          tier: "III",
          description: "Collect 100 wool from enemy teams",
          points: 15,
        },
        {
          tier: "IV",
          description: "Collect 250 wool from enemy teams",
          points: 20,
        },
        {
          tier: "V",
          description: "Collect 500 wool from enemy teams",
          points: 25,
        },
      ],
    },
    {
      name: "Dream Catcher",
      tiers: [
        { tier: "I", description: "Obtain 25 Slumber Tickets", points: 5 },
        { tier: "II", description: "Obtain 100 Slumber Tickets", points: 10 },
        { tier: "III", description: "Obtain 500 Slumber Tickets", points: 15 },
        { tier: "IV", description: "Obtain 1,000 Slumber Tickets", points: 20 },
      ],
    },
    {
      name: "Road to Prestige",
      tiers: [
        { tier: "I", description: "Reach 5 Bed Wars Level", points: 5 },
        { tier: "II", description: "Reach 25 Bed Wars Level", points: 10 },
        { tier: "III", description: "Reach 50 Bed Wars Level", points: 15 },
        { tier: "IV", description: "Reach 75 Bed Wars Level", points: 20 },
        { tier: "V", description: "Reach 100 Bed Wars Level", points: 25 },
      ],
    },
    {
      name: "True Challenger",
      tiers: [
        { tier: "I", description: "Complete 1 Challenge", points: 5 },
        { tier: "II", description: "Complete 5 Challenges", points: 10 },
        { tier: "III", description: "Complete 10 Challenges", points: 15 },
        { tier: "IV", description: "Complete 20 Challenges", points: 20 },
        { tier: "V", description: "Complete 30 Challenges", points: 25 },
      ],
    },
    {
      name: "Victory Dancer",
      tiers: [
        { tier: "I", description: "Win 25 games", points: 5 },
        { tier: "II", description: "Win 75 games", points: 10 },
        { tier: "III", description: "Win 200 games", points: 15 },
        { tier: "IV", description: "Win 500 games", points: 20 },
        { tier: "V", description: "Win 1,000 games", points: 25 },
      ],
    },
  ] as const;

/** Legacy tiered achievements. */
export const BEDWARS_LEGACY_TIERED_ACHIEVEMENTS: readonly BedWarsTieredAchievement[] =
  [
    {
      name: "Crate Looter",
      tiers: [
        { tier: "I", description: "Open 10 Loot Chests", points: 5 },
        { tier: "II", description: "Open 25 Loot Chests", points: 10 },
        { tier: "III", description: "Open 50 Loot Chests", points: 15 },
        { tier: "IV", description: "Open 100 Loot Chests", points: 20 },
        { tier: "V", description: "Open 250 Loot Chests", points: 25 },
      ],
    },
  ] as const;

