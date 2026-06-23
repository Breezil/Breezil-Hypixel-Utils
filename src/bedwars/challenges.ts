/**
 * BedWars challenges reference data for @breezil/hypixel-utils.
 *
 * Each challenge lists its name, the numbered rules that apply during the
 * challenge, and the cosmetic reward(s) granted for completing it. This is
 * pure reference data with no runtime or network logic.
 */

export interface BedWarsChallenge {
  readonly name: string;
  readonly rules: readonly string[];
  readonly rewards: readonly string[];
}

export const BEDWARS_CHALLENGES: readonly BedWarsChallenge[] = [
  {
    name: "Renegade",
    rules: [
      "Team upgrades and traps are disabled",
      "You cannot pick up diamonds",
    ],
    rewards: ["Cat Death Cry"],
  },
  {
    name: "Warmonger",
    rules: ["You cannot purchase nor use any utilities to aid you in battle"],
    rewards: ["Warrior Shopkeeper Skin"],
  },
  {
    name: "Selfish",
    rules: [
      "You are too selfish to drop any items to other players",
      "Your team chest and Ender Chest are locked",
    ],
    rewards: ["Bite Projectile Trail"],
  },
  {
    name: "Minimum Wage",
    rules: ["Your island resource generator is 2x slower"],
    rewards: ["Its Raining Gold Final Kill Effect"],
  },
  {
    name: "Assassin",
    rules: [
      "You can only break the bed of your assigned target",
      "No other beds can be broken until you eliminate your target's entire team",
      "After successfully eliminating your target team, a new target will be assigned",
    ],
    rewards: ["Assassin Island Topper"],
  },
  {
    name: "Regular Shopper",
    rules: [
      "Any purchased item upgrade will be removed upon death",
      "Any purchased tool upgrade will be reset upon death",
    ],
    rewards: ["Shopping Cart Island Topper"],
  },
  {
    name: "Invisible Shop",
    rules: [
      "Every item slot in the Item Shop and Team Upgrades is randomized and hidden",
      "The locations of each item will remain the same throughout the game",
    ],
    rewards: ["Invisible Villager Island Topper"],
  },
  {
    name: "Collector",
    rules: [
      "Collect all wool colors and return them to your shop keeper",
      "You must win the game after all team members return all wool colors",
    ],
    rewards: ["Collector's Chest Island Topper"],
  },
  {
    name: "Woodworker",
    rules: [
      "You can only purchase and pick up items made of wood",
      "You cannot use your Ender Chest, it isn't made of wood!",
    ],
    rewards: ["Lumberjack Shopkeeper Skin"],
  },
  {
    name: "Bridging for Dummies",
    rules: [
      "You cannot purchase any blocks other than sponge",
      "You cannot pick up any blocks",
    ],
    rewards: ["Bridging for Dummies Kill Messages"],
  },
  {
    name: "Toxic Rain",
    rules: [
      "There will be toxic rain throughout the game",
      "Standing in the rain drains items from your inventory",
      "The longer you are in the rain, the faster items drain",
    ],
    rewards: ["Toxic Rain Island Topper"],
  },
  {
    name: "Defuser",
    rules: [
      "Every enemy team's bed needs to be defused before being able to break it",
      "Once you defuse an enemy's bed defense, it will stay defused for 2 minutes",
    ],
    rewards: ["Defuser Shopkeeper Skin"],
  },
  {
    name: "Lazy Miner",
    rules: [
      "You gain permanent Mining Fatigue throughout the game",
      "If you activate a Mining Fatigue Trap, you receive a greater Mining Fatigue effect",
      "TNT and fireballs are disabled",
    ],
    rewards: ["Lazy Miner Island Topper"],
  },
  {
    name: "Ultimate UHC",
    rules: [
      "Natural health regeneration is disabled",
      "Golden Apples do not provide health",
    ],
    rewards: ["Heartbleed Island Topper"],
  },
  {
    name: "Sleight of Hand",
    rules: ["You only have 1 available hotbar slot to use"],
    rewards: ["Magic Bunny Island Topper"],
  },
  {
    name: "Weighted Items",
    rules: [
      "Each item has a unique weight to them",
      "Carrying heavy items will make you move slower",
    ],
    rewards: ["Anvil Smash Final Kill Effect"],
  },
  {
    name: "Social Distancing",
    rules: [
      "You can only use Knockback Sticks and Punch Bows to attack players",
    ],
    rewards: ["Social Distance Kill Messages"],
  },
  {
    name: "Swordless",
    rules: [
      "You cannot purchase any swords from the shop",
      "You cannot pick up any swords",
      "Using axes or pickaxes will only deal 1 damage to players",
    ],
    rewards: ["The End Projectile Trail"],
  },
  {
    name: "Marksman",
    rules: [
      "You cannot hit any players with melee weapons, including your fist",
      "You can only attack players using a bow",
    ],
    rewards: ["Ballista Island Topper"],
  },
  {
    name: "Patriot",
    rules: [
      "You can only walk on blocks your team has placed",
      "You cannot pick up any items from enemy players",
      "You do not receive any items from killing a player",
      "You can only pick up resources from your own generator",
      "If you walk on blocks placed by an enemy team, the challenge will be failed",
    ],
    rewards: ["Patriotic Eagle Shopkeeper Skin"],
  },
  {
    name: "Stamina",
    rules: [
      "Any action in the game such as running or breaking blocks consumes stamina",
      "If you don't have enough stamina, you won't be able to sprint or break blocks",
      "Your stamina is represented by your hunger bar",
      "Golden Apples double your stamina recharge rate for 10 seconds",
    ],
    rewards: ["Cake Walk Victory Dance"],
  },
  {
    name: "Old Man",
    rules: [
      "You cannot sprint during the whole game",
      "If you sprint, the challenge will be failed",
    ],
    rewards: ["Old Man Kill Messages"],
  },
  {
    name: "Capped Resources",
    rules: [
      "All shop items have a limited purchase cap for your entire team",
      "You cannot pick up any items from enemy players",
      "You can only pick up resources from your own generator",
    ],
    rewards: ["Merchant Shopkeeper Skin"],
  },
  {
    name: "Red Light Green Light",
    rules: [
      "At random intervals the stop light will switch between red and green",
      "If you move when the light is red, you fail the challenge",
    ],
    rewards: ["Traffic Light Island Topper"],
  },
  {
    name: "Slow Reflexes",
    rules: ["You can only hit enemies once every 2 seconds"],
    rewards: ["Guardian Death Cry"],
  },
  {
    name: "Pacifist",
    rules: [
      "You cannot hit any players with melee weapons, including your fist",
      "You cannot use any bows to deal damage",
      "You can only use Utilities to deal damage",
    ],
    rewards: ["Aura Victory Dance"],
  },
  {
    name: "Master Assassin",
    rules: [
      "You can only break the bed of your assigned target",
      "You can only damage players of your target team",
      "No other beds can be broken until you eliminate your target's entire team",
      "After successfully eliminating your target team, a new target will be assigned",
    ],
    rewards: ["Assassin's Blade Island Topper"],
  },
  {
    name: "Standing Tall",
    rules: [
      "You cannot sneak during the challenge",
      "If you crouch, the challenge will be failed",
    ],
    rewards: ["Portal Projectile Trail"],
  },
  {
    name: "Protect the President",
    rules: [
      "One player on the team is selected as the President",
      "Only the President has the authority to break enemy beds",
      "If the President dies, you fail the challenge",
    ],
    rewards: [
      "President Sloth Shopkeeper Skin",
      "Presidential Goons Island Topper",
    ],
  },
  {
    name: "Can't Touch This",
    rules: [
      "You must not take any damage for the whole game",
      "If you take any damage or fall into the void, the challenge will be failed",
      "Your team must break at least 1 bed to complete the challenge",
    ],
    rewards: [
      "Elder Guardian Victory Dance",
      "Guardian Rocket Final Kill Effect",
      "Fire Spiral Projectile Trail",
    ],
  },
];

