# BedWars Challenges, Quests, and Achievements

Reference data for BedWars progression: completable challenges with their rules and rewards, daily and weekly quests, in-game challenges, and the full achievement listings. All of the exports on this page are pure data with no runtime or network logic.

## Usage

```ts
import {
  BEDWARS_CHALLENGES,
  BEDWARS_QUESTS,
  BEDWARS_IN_GAME_CHALLENGES,
  BEDWARS_CHALLENGE_ACHIEVEMENTS,
  BEDWARS_TIERED_ACHIEVEMENTS,
  BEDWARS_LEGACY_TIERED_ACHIEVEMENTS,
} from "@breezil/hypixel-utils";

// Find a challenge by name
const renegade = BEDWARS_CHALLENGES.find((c) => c.name === "Renegade");
console.log(renegade?.rules);

// Sum the Hypixel Experience from all daily quests
const dailyXp = BEDWARS_QUESTS.filter((q) => q.type === "Daily").reduce(
  (sum, q) => sum + q.rewards.hypixelExperience,
  0,
);
```

## Challenges

### Type

```ts
export interface BedWarsChallenge {
  readonly name: string;
  readonly rules: readonly string[];
  readonly rewards: readonly string[];
}

export const BEDWARS_CHALLENGES: readonly BedWarsChallenge[];
```

Each challenge lists its name, the numbered rules that apply during the challenge, and the cosmetic reward(s) granted for completing it.

### Full challenge list

There are 30 challenges.

#### Renegade

Rewards: Cat Death Cry

Rules:

1. Team upgrades and traps are disabled
2. You cannot pick up diamonds

#### Warmonger

Rewards: Warrior Shopkeeper Skin

Rules:

1. You cannot purchase nor use any utilities to aid you in battle

#### Selfish

Rewards: Bite Projectile Trail

Rules:

1. You are too selfish to drop any items to other players
2. Your team chest and Ender Chest are locked

#### Minimum Wage

Rewards: Its Raining Gold Final Kill Effect

Rules:

1. Your island resource generator is 2x slower

#### Assassin

Rewards: Assassin Island Topper

Rules:

1. You can only break the bed of your assigned target
2. No other beds can be broken until you eliminate your target's entire team
3. After successfully eliminating your target team, a new target will be assigned

#### Regular Shopper

Rewards: Shopping Cart Island Topper

Rules:

1. Any purchased item upgrade will be removed upon death
2. Any purchased tool upgrade will be reset upon death

#### Invisible Shop

Rewards: Invisible Villager Island Topper

Rules:

1. Every item slot in the Item Shop and Team Upgrades is randomized and hidden
2. The locations of each item will remain the same throughout the game

#### Collector

Rewards: Collector's Chest Island Topper

Rules:

1. Collect all wool colors and return them to your shop keeper
2. You must win the game after all team members return all wool colors

#### Woodworker

Rewards: Lumberjack Shopkeeper Skin

Rules:

1. You can only purchase and pick up items made of wood
2. You cannot use your Ender Chest, it isn't made of wood!

#### Bridging for Dummies

Rewards: Bridging for Dummies Kill Messages

Rules:

1. You cannot purchase any blocks other than sponge
2. You cannot pick up any blocks

#### Toxic Rain

Rewards: Toxic Rain Island Topper

Rules:

1. There will be toxic rain throughout the game
2. Standing in the rain drains items from your inventory
3. The longer you are in the rain, the faster items drain

#### Defuser

Rewards: Defuser Shopkeeper Skin

Rules:

1. Every enemy team's bed needs to be defused before being able to break it
2. Once you defuse an enemy's bed defense, it will stay defused for 2 minutes

#### Lazy Miner

Rewards: Lazy Miner Island Topper

Rules:

1. You gain permanent Mining Fatigue throughout the game
2. If you activate a Mining Fatigue Trap, you receive a greater Mining Fatigue effect
3. TNT and fireballs are disabled

#### Ultimate UHC

Rewards: Heartbleed Island Topper

Rules:

1. Natural health regeneration is disabled
2. Golden Apples do not provide health

#### Sleight of Hand

Rewards: Magic Bunny Island Topper

Rules:

1. You only have 1 available hotbar slot to use

#### Weighted Items

Rewards: Anvil Smash Final Kill Effect

Rules:

1. Each item has a unique weight to them
2. Carrying heavy items will make you move slower

#### Social Distancing

Rewards: Social Distance Kill Messages

Rules:

1. You can only use Knockback Sticks and Punch Bows to attack players

#### Swordless

Rewards: The End Projectile Trail

Rules:

1. You cannot purchase any swords from the shop
2. You cannot pick up any swords
3. Using axes or pickaxes will only deal 1 damage to players

#### Marksman

Rewards: Ballista Island Topper

Rules:

1. You cannot hit any players with melee weapons, including your fist
2. You can only attack players using a bow

#### Patriot

Rewards: Patriotic Eagle Shopkeeper Skin

Rules:

1. You can only walk on blocks your team has placed
2. You cannot pick up any items from enemy players
3. You do not receive any items from killing a player
4. You can only pick up resources from your own generator
5. If you walk on blocks placed by an enemy team, the challenge will be failed

#### Stamina

Rewards: Cake Walk Victory Dance

Rules:

1. Any action in the game such as running or breaking blocks consumes stamina
2. If you don't have enough stamina, you won't be able to sprint or break blocks
3. Your stamina is represented by your hunger bar
4. Golden Apples double your stamina recharge rate for 10 seconds

#### Old Man

Rewards: Old Man Kill Messages

Rules:

1. You cannot sprint during the whole game
2. If you sprint, the challenge will be failed

#### Capped Resources

Rewards: Merchant Shopkeeper Skin

Rules:

1. All shop items have a limited purchase cap for your entire team
2. You cannot pick up any items from enemy players
3. You can only pick up resources from your own generator

#### Red Light Green Light

Rewards: Traffic Light Island Topper

Rules:

1. At random intervals the stop light will switch between red and green
2. If you move when the light is red, you fail the challenge

#### Slow Reflexes

Rewards: Guardian Death Cry

Rules:

1. You can only hit enemies once every 2 seconds

#### Pacifist

Rewards: Aura Victory Dance

Rules:

1. You cannot hit any players with melee weapons, including your fist
2. You cannot use any bows to deal damage
3. You can only use Utilities to deal damage

#### Master Assassin

Rewards: Assassin's Blade Island Topper

Rules:

1. You can only break the bed of your assigned target
2. You can only damage players of your target team
3. No other beds can be broken until you eliminate your target's entire team
4. After successfully eliminating your target team, a new target will be assigned

#### Standing Tall

Rewards: Portal Projectile Trail

Rules:

1. You cannot sneak during the challenge
2. If you crouch, the challenge will be failed

#### Protect the President

Rewards: President Sloth Shopkeeper Skin, Presidential Goons Island Topper

Rules:

1. One player on the team is selected as the President
2. Only the President has the authority to break enemy beds
3. If the President dies, you fail the challenge

#### Can't Touch This

Rewards: Elder Guardian Victory Dance, Guardian Rocket Final Kill Effect, Fire Spiral Projectile Trail

Rules:

1. You must not take any damage for the whole game
2. If you take any damage or fall into the void, the challenge will be failed
3. Your team must break at least 1 bed to complete the challenge

## Quests

### Types

```ts
export interface BedWarsQuestRewards {
  readonly hypixelExperience: number;
  readonly bedwarsExperience: number;
  readonly bedwarsTokens: number;
}

export interface BedWarsQuest {
  readonly type: "Daily" | "Weekly";
  readonly title: string;
  readonly description: string;
  readonly rewards: BedWarsQuestRewards;
}

export const BEDWARS_QUESTS: readonly BedWarsQuest[];
```

### BEDWARS_QUESTS

#### Daily quests

| Title                | Description                       | Hypixel XP | BedWars XP | BedWars Tokens |
| -------------------- | --------------------------------- | ---------- | ---------- | -------------- |
| First Win of the Day | Win a game of Bed Wars            | 3850       | 250        | 250            |
| One More Game!       | Play 3 games of Bed Wars          | 3850       | 250        | 250            |
| Painsomnia           | Break 3 beds in Bed Wars          | 3850       | 250        | 250            |
| Head Hunter          | Final Kill 15 players in Bed Wars | 3850       | 250        | 250            |

#### Weekly quests

| Title             | Description                        | Hypixel XP | BedWars XP | BedWars Tokens |
| ----------------- | ---------------------------------- | ---------- | ---------- | -------------- |
| Bed Removal Co.   | Break 25 Beds in Bed Wars          | 7700       | 5000       | 5000           |
| Sleep Tight.      | Win 10 dream games in Bed Wars     | 7700       | 5000       | 5000           |
| Challenger        | Complete 5 Bed Wars Challenges     | 7700       | 5000       | 5000           |
| Finishing The Job | Final Kill 150 players in Bed Wars | 7700       | 5000       | 5000           |

### In-game challenges

```ts
export interface BedWarsInGameChallenge {
  readonly title: string;
  readonly description: string;
  readonly hypixelExperience: number;
}

export const BEDWARS_IN_GAME_CHALLENGES: readonly BedWarsInGameChallenge[];
```

#### BEDWARS_IN_GAME_CHALLENGES

| Title     | Description                                           | Hypixel XP |
| --------- | ----------------------------------------------------- | ---------- |
| Defensive | Defend your bed against 5 attackers in a single game. | 3700       |
| Support   | Collect 10 diamonds from generators in a single game. | 3700       |
| Offensive | Destroy 2 beds in a single game.                      | 3700       |

## Achievements

### Types

```ts
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

export const BEDWARS_CHALLENGE_ACHIEVEMENTS: readonly BedWarsAchievement[];
export const BEDWARS_TIERED_ACHIEVEMENTS: readonly BedWarsTieredAchievement[];
export const BEDWARS_LEGACY_TIERED_ACHIEVEMENTS: readonly BedWarsTieredAchievement[];
```

### BEDWARS_CHALLENGE_ACHIEVEMENTS

One-time "Challenge" achievements. There are 52 entries.

| Name                            | Description                                                            | Points |
| ------------------------------- | ---------------------------------------------------------------------- | ------ |
| Alchemist                       | Buy 10 Potions in a game                                               | 5      |
| Already over?                   | Win a game within 10 minutes                                           | 10     |
| Bomber                          | Use 5 TNTs in a single game of Bed Wars                                | 10     |
| Builder                         | Place over 200 blocks in a game                                        | 5      |
| Can't Wake Up                   | Enter the Slumber Hotel temple                                         | 15     |
| Cutting It Close!               | Win a game with less than 30 seconds before bed destruction            | 15     |
| Diamond Hoarder                 | Collect at least 50 Diamonds from generators in a game                 | 10     |
| Distraction                     | Get a kill while you have your glyph active                            | 5      |
| Dragon Slayer                   | Kill an Ender Dragon                                                   | 15     |
| Emerald Hoarder                 | Collect at least 25 Emeralds from generators in a game                 | 10     |
| Fell Into a Deep Sleep          | Help John Indigos decipher the map                                     | 10     |
| First Blood                     | Be the first player to kill an enemy                                   | 5      |
| Forged in Fire                  | Obtain the mystery item from the Blacksmith's quest line               | 20     |
| Geared up!                      | Purchase the Diamond armor & sword                                     | 5      |
| Getting The Job Done Better     | Destroy all of the beds in a single game                               | 15     |
| Getting the job done            | Destroy half of the beds in one game                                   | 10     |
| Golem's Rose                    | Kill 5 enemy Golems in a single game                                   | 10     |
| Great lord of fire!             | Have 10 Fireballs in your inventory at the same time                   | 5      |
| I don't need a bed!             | Survive for 10 minutes without a bed                                   | 10     |
| Introduce Yourself              | Introduce yourself to the Slumber Hotel Receptionist                   | 5      |
| Iron Punch                      | Get a kill with an Iron Golem                                          | 5      |
| It's Dark Down There            | Fall into the void                                                     | 5      |
| Like a Ninja                    | Use Magic Milk to make a trap not activate                             | 10     |
| Merciless                       | Final Kill 5 enemies in one game                                       | 5      |
| Millionaires Club               | Unlock the Explorer's Wallet                                           | 10     |
| Minefield                       | Have 3 traps activated at once                                         | 10     |
| Mission Control                 | Use the Quick Communications menu to send a team message               | 5      |
| Out Of Stock                    | Purchase and max out all team upgrades in a single game                | 15     |
| Pointless Challenge             | Win a game without killing an enemy with a sword                       | 5      |
| Prime Marksmanship              | Land 5 consecutive shots with a bow                                    | 5      |
| Rejoining the Dream!            | Use the /rejoin command to warp back into a Bed Wars game              | 5      |
| Return to Spammer               | Get a kill by deflecting someone else's Fireball                       | 10     |
| Revenge                         | Final kill the player that destroyed your bed                          | 15     |
| Savvy Shopper                   | Change the Shopkeeper skin                                             | 5      |
| Shear Luck                      | Kill a player with shears!                                             | 5      |
| Showoff                         | Destroy a bed in style (Use a Bed Destroy cosmetic)                    | 5      |
| Sneaky Rusher                   | Destroy a bed while being invisible                                    | 5      |
| Speedy Bridger!                 | Be the first player to obtain an Emerald from the middle island        | 5      |
| Stay Away From Me!              | Knock 5 players into the void in a single game using a Knockback Stick | 10     |
| Strategist                      | Purchase the Reinforced Armor IV team upgrade                          | 10     |
| Super looter                    | Obtain at least 20 Gold Ingots from enemies in a game                  | 10     |
| Survivor                        | Win a game without dying                                               | 10     |
| Team Player                     | Place an Emerald in your team chest                                    | 5      |
| That's a First                  | Win your first game of Bed Wars                                        | 5      |
| The Future Is Now               | Punch a chest to deposit your held item                                | 5      |
| The Last Of Us                  | Win a game by being the last player alive on your team                 | 15     |
| The Man who Sold the Dreamscape | Meet the Owner of the Slumber Hotel                                    | 20     |
| The Sniper                      | Kill a player from at least 40 blocks away                             | 10     |
| The Ultimate Defense            | Place 8 Obsidian blocks around your bed                                | 5      |
| Waking Dreams                   | Assist the first three Slumber Hotel guests                            | 5      |
| You Can't Do That!              | Attempt to break your team's bed                                       | 5      |
| You Can't Trap Me!              | Destroy a bed within 10 seconds of activating the enemy trap           | 5      |

### BEDWARS_TIERED_ACHIEVEMENTS

Repeatable tiered achievements. There are 7 achievements.

#### Bed Removal

| Tier | Description      | Points |
| ---- | ---------------- | ------ |
| I    | Destroy 10 Beds  | 5      |
| II   | Destroy 25 Beds  | 10     |
| III  | Destroy 100 Beds | 15     |
| IV   | Destroy 250 Beds | 20     |
| V    | Destroy 500 Beds | 25     |

#### Bed Wars Killer

| Tier | Description           | Points |
| ---- | --------------------- | ------ |
| I    | Get 25 final kills    | 5      |
| II   | Get 100 final kills   | 10     |
| III  | Get 250 final kills   | 15     |
| IV   | Get 500 final kills   | 20     |
| V    | Get 1,500 final kills | 25     |

#### Collectors Edition

| Tier | Description                       | Points |
| ---- | --------------------------------- | ------ |
| I    | Collect 25 wool from enemy teams  | 5      |
| II   | Collect 50 wool from enemy teams  | 10     |
| III  | Collect 100 wool from enemy teams | 15     |
| IV   | Collect 250 wool from enemy teams | 20     |
| V    | Collect 500 wool from enemy teams | 25     |

#### Dream Catcher

| Tier | Description                  | Points |
| ---- | ---------------------------- | ------ |
| I    | Obtain 25 Slumber Tickets    | 5      |
| II   | Obtain 100 Slumber Tickets   | 10     |
| III  | Obtain 500 Slumber Tickets   | 15     |
| IV   | Obtain 1,000 Slumber Tickets | 20     |

#### Road to Prestige

| Tier | Description              | Points |
| ---- | ------------------------ | ------ |
| I    | Reach 5 Bed Wars Level   | 5      |
| II   | Reach 25 Bed Wars Level  | 10     |
| III  | Reach 50 Bed Wars Level  | 15     |
| IV   | Reach 75 Bed Wars Level  | 20     |
| V    | Reach 100 Bed Wars Level | 25     |

#### True Challenger

| Tier | Description            | Points |
| ---- | ---------------------- | ------ |
| I    | Complete 1 Challenge   | 5      |
| II   | Complete 5 Challenges  | 10     |
| III  | Complete 10 Challenges | 15     |
| IV   | Complete 20 Challenges | 20     |
| V    | Complete 30 Challenges | 25     |

#### Victory Dancer

| Tier | Description     | Points |
| ---- | --------------- | ------ |
| I    | Win 25 games    | 5      |
| II   | Win 75 games    | 10     |
| III  | Win 200 games   | 15     |
| IV   | Win 500 games   | 20     |
| V    | Win 1,000 games | 25     |

### BEDWARS_LEGACY_TIERED_ACHIEVEMENTS

Legacy tiered achievements. There is 1 achievement.

#### Crate Looter

| Tier | Description          | Points |
| ---- | -------------------- | ------ |
| I    | Open 10 Loot Chests  | 5      |
| II   | Open 25 Loot Chests  | 10     |
| III  | Open 50 Loot Chests  | 15     |
| IV   | Open 100 Loot Chests | 20     |
| V    | Open 250 Loot Chests | 25     |

