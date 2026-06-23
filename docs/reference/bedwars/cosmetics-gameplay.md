# BedWars Cosmetics: Gameplay

Reference data for the gameplay-facing BedWars cosmetic families: Projectile Trails, Victory Dances, Final Kill Effects, Death Cries, Bed Destroys, and Kill Messages. Each family is exported from `@breezil/hypixel-utils` as a `readonly` array.

## Shared types

Most families share the `BedWarsCosmetic` interface. Kill Messages use their own `BedWarsKillMessage` interface because each entry carries a list of message lines instead of a single description.

```ts
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
```

```ts
export type BedWarsKillMessageRarity =
  | "DEFAULT"
  | "COMMON"
  | "RARE"
  | "EPIC"
  | "LEGENDARY";

export interface BedWarsKillMessage {
  readonly name: string;
  readonly rarity: BedWarsKillMessageRarity;
  readonly cost: number | string;
  readonly messages: readonly string[];
}
```

Notes on the data:

- A numeric `cost` is a plain Bed Wars Token price. A string `cost` is the verbatim source (event shop, challenge, battle pass, bundle, Slumber Hotel, and so on).
- Kill Message lines preserve their placeholder tokens exactly: `<player1>` (the killer), `<player2>` (the victim), `<Color>` (the bed team colour), and `<#>` (a running count).

## Usage

```ts
import {
  BEDWARS_PROJECTILE_TRAILS,
  BEDWARS_VICTORY_DANCES,
  BEDWARS_FINAL_KILL_EFFECTS,
  BEDWARS_DEATH_CRIES,
  BEDWARS_BED_DESTROYS,
  BEDWARS_KILL_MESSAGES,
  type BedWarsCosmetic,
  type BedWarsKillMessage,
} from "@breezil/hypixel-utils";

// Every legendary projectile trail that costs plain tokens.
const legendaryTokenTrails = BEDWARS_PROJECTILE_TRAILS.filter(
  (trail) => trail.rarity === "LEGENDARY" && typeof trail.cost === "number",
);

// The first kill variant of the "Fire" kill message.
const fire = BEDWARS_KILL_MESSAGES.find((m) => m.name === "Fire");
console.log(fire?.messages[0]); // "<player2> was struck down by <player1>."
```

## Projectile Trails

Exported as `BEDWARS_PROJECTILE_TRAILS: readonly BedWarsCosmetic[]`. 64 entries.

| Name                 | Rarity    | Cost                                          |
| -------------------- | --------- | --------------------------------------------- |
| Slime                | COMMON    | 5000                                          |
| Ender                | COMMON    | 5000                                          |
| Lava                 | COMMON    | 5000                                          |
| Potion               | COMMON    | 5000                                          |
| Water                | COMMON    | 5000                                          |
| Black Smoke          | COMMON    | 5000                                          |
| White Smoke          | COMMON    | 5000                                          |
| Notes                | RARE      | 10000                                         |
| Blue Dust            | RARE      | 10000                                         |
| Red Dust             | RARE      | 10000                                         |
| Purple Dust          | RARE      | 10000                                         |
| Cursed Flames        | RARE      | Halloween Event Shop                          |
| Spider's Silk        | RARE      | Halloween Event Shop                          |
| Lunar Dust           | RARE      | 10000                                         |
| The End              | RARE      | "Swordless" Bed Wars Challenge                |
| Roses                | RARE      | Summer Event Shop                             |
| Fire                 | EPIC      | 25000                                         |
| Magic                | EPIC      | 25000                                         |
| Green Star           | EPIC      | 25000                                         |
| Angry Villager       | EPIC      | 25000                                         |
| Firework             | EPIC      | 25000                                         |
| Bone                 | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Pumpkin Pie          | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Flame Rings          | EPIC      | Summer Event Shop                             |
| Howling Wind         | EPIC      | Halloween Event Shop                          |
| Wisp Whirlwind       | EPIC      | Halloween Event Shop                          |
| Hoops                | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Candy Basket         | EPIC      | Halloween Event Shop                          |
| Snowball Rain        | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Hanukkah             | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Rainy                | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Spring Ribbons       | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Rocket               | EPIC      | 25000                                         |
| Let There Be Leather | EPIC      | 25000                                         |
| Ice Cold             | EPIC      | Battle Pass: Season 1                         |
| Portal               | EPIC      | "Standing Tall" Bed Wars Challenge            |
| Slumber              | EPIC      | 25000                                         |
| Meteor Blaze         | EPIC      | 25000                                         |
| Hearts               | LEGENDARY | 100000                                        |
| Bloody               | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Rainbow              | LEGENDARY | 100000                                        |
| Bee                  | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Random               | LEGENDARY | 100000                                        |
| Jack O' Lantern      | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Icicle               | LEGENDARY | Holidays Event Shop                           |
| Fireball             | LEGENDARY | 100000                                        |
| Sparkler             | LEGENDARY | Summer Event Shop                             |
| Fanged               | LEGENDARY | 100000                                        |
| DNA                  | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Wingman              | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Twisted              | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Trick or Treat       | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Pumpkin Volley       | LEGENDARY | Halloween Event Shop                          |
| Magic Wind           | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Merry                | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Tinsel               | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Present              | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Peep!                | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Twin Dragon          | LEGENDARY | 100000                                        |
| Cheese               | LEGENDARY | 100000                                        |
| Fire Spiral          | LEGENDARY | "Can't Touch This" Bed Wars Challenge         |
| Bite                 | LEGENDARY | "Selfish" Bed Wars Challenge                  |
| Stormy               | LEGENDARY | Summer Event Shop                             |
| Twirling Snowflakes  | LEGENDARY | Holidays Event Shop                           |

## Victory Dances

Exported as `BEDWARS_VICTORY_DANCES: readonly BedWarsCosmetic[]`. 49 entries. Every entry carries a `description`.

| Name               | Description                                                                                                                            | Rarity    | Cost                                          |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------- |
| Anvil Rain         | Anvils will rain from the sky.                                                                                                         | COMMON    | 5000                                          |
| Fireworks          | Celebrate with a splendid fireworks show!                                                                                              | COMMON    | 5000                                          |
| Cold Snap          | Chill an area around you to absolute zero.                                                                                             | COMMON    | 5000                                          |
| Yeehaw             | Ride a horse like it's 1876.                                                                                                           | COMMON    | 5000                                          |
| Meteor Shower      | A meteor shower will rain down from the sky.                                                                                           | RARE      | 10000                                         |
| Guardians          | Perform a Guardian summoning ritual.                                                                                                   | RARE      | 10000                                         |
| Night Shift        | Set it to day, set it to night, repeat, like a god.                                                                                    | RARE      | 10000                                         |
| Floating Lanterns  | Spawn floating lanterns to brighten up the night.                                                                                      | RARE      | 10000                                         |
| Raining Pigs       | The sky will rain with pigs.                                                                                                           | RARE      | 10000                                         |
| Festive Music      | Plays a short festive tune after you win!                                                                                              | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Another Dimension  | Spawns a portal to a new dimension! Maybe it's the next game..?                                                                        | RARE      | Battle Pass: Season 1                         |
| Aura               | Show off how strong your Aura is.                                                                                                      | RARE      | "Pacifist" Bed Wars Challenge                 |
| Winter Twister     | Become the storm by riding the Winter Twister!                                                                                         | RARE      | Holidays Event Shop                           |
| Special Fireworks  | Write your name in the sky!                                                                                                            | EPIC      | 25000                                         |
| Wither Rider       | Ride a Wither straight from the nether - click to shoot Wither Skulls.                                                                 | EPIC      | 25000                                         |
| Veggy SpringLazor  | Fire a huge Pumpkin Laser that destroys everything in its path! Watch out for the recoil.                                              | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Rabbit Meteors     | Rabbits fall from the sky and explode around you!                                                                                      | EPIC      | 25000                                         |
| Rainbow Dolly      | Spawn Dolly the sheep. When you hit Dolly, she clones herself.                                                                         | EPIC      | 25000                                         |
| Terror             | The fear doesn't actually creep in until you're alone in the dark and think of this victory dance.                                     | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Toy Stick          | This humble baton sold at "Sticks R Us" is actually a magic wand. Also, it blows up things.                                            | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Pumpkin Patch      | Spread pumpkins wherever you walk!                                                                                                     | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Easter Bunnies     | Spawns a bunch of easter bunnies laying eggs.                                                                                          | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Flower Bed         | Grow patches of beautiful flowers all around the map!                                                                                  | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Chinese Dragon     | Spawn a chinese dragon.                                                                                                                | EPIC      | 25000                                         |
| Cake Walk          | Its an all you can eat buffet, dig in!                                                                                                 | EPIC      | "Stamina" Bed Wars Challenge                  |
| Heat Wave          | Rumored to once have belonged to Helios this stick holds much mystical powers.                                                         | EPIC      | Summer Event Shop                             |
| Figurine Rain      | Your showcased Figurines rain from the sky!                                                                                            | EPIC      | Slumber Hotel                                 |
| Kart Away          | Flying minecarts?! Who knew!                                                                                                           | EPIC      | 25000                                         |
| Dragon Rider       | Ride a Dragon capable of destroying the map.                                                                                           | LEGENDARY | 100000                                        |
| Haunted            | It's spooky-time! This Victory Dance releases the souls of a bunch of poor players you killed in past games to celebrate your victory. | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Graveyard Rave     | The ghosts are dancing.                                                                                                                | LEGENDARY | Halloween Event Shop                          |
| Dragon Fire        | Rain fire down on your former enemies.                                                                                                 | LEGENDARY | 100000                                        |
| Rooted             | Spread your roots throughout the map.                                                                                                  | LEGENDARY | Easter Event Shop                             |
| Egg Meteors        | Eggs rain down around you, destroying the map!                                                                                         | LEGENDARY | Easter Event Shop                             |
| Twerk Apocalypse   | Spawn tons more of yourself and have them twerk.                                                                                       | LEGENDARY | 100000                                        |
| Ghast Rider        | Ride a ghast from hell the nether.                                                                                                     | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Abominable Snowman | Strike terror into the hearts of your enemies as the Abominable Snowman joins your side!                                               | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Infection          | Spawns villagers around you only for them all to be infected!                                                                          | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Pumpkin Bomber     | Right-click with a wand to spawn giant pumpkins that will destroy the map.                                                             | LEGENDARY | Halloween Event Shop                          |
| Chicken Rider      | Ride a flying chicken and shoot exploding eggs!                                                                                        | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Exploding Bunnies  | Bunnies that run around and explode!                                                                                                   | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Puppy Party        | Spawn a horde of wolves.                                                                                                               | LEGENDARY | 100000                                        |
| Snowed In          | School's out! Grab a cup of hot chocolate! You're snowed in!                                                                           | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| To Build a Snowman | Build snowmen around you that explode when spawned!                                                                                    | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Fanbase            | Your very own fanbase will spawn around you, and every single one of them wants your autograph on their forehead!                      | LEGENDARY | Battle Pass: Season 1                         |
| Elder Guardian     | Ride a flying elder guardian that destroys the map.                                                                                    | LEGENDARY | "Can't Touch This" Bed Wars Challenge         |
| Ice Bomber         | It's time to make a blizzard.                                                                                                          | LEGENDARY | Holidays Event Shop                           |
| Hurricane Hell     | The worst thing to happen to bedwars.                                                                                                  | LEGENDARY | 100000                                        |
| Dreamscape         | Put the whole map into a mythical dream-like state.                                                                                    | LEGENDARY | Slumber Hotel                                 |

## Final Kill Effects

Exported as `BEDWARS_FINAL_KILL_EFFECTS: readonly BedWarsCosmetic[]`. 67 entries. Every entry carries a `description`.

| Name                | Description                                                                                                    | Rarity    | Cost                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------- | --------- | --------------------------------------------- |
| Squid Missile       | Killing an enemy will spawn a fellow companion.                                                                | COMMON    | 5000                                          |
| Firework            | Killing an enemy will launch fireworks.                                                                        | COMMON    | 5000                                          |
| Lightning Strike    | Killing an enemy will wake up Thor.                                                                            | COMMON    | 5000                                          |
| TNT                 | Killing an enemy will make them disappear into TNT.                                                            | COMMON    | 5000                                          |
| Heart Aura          | Killing an enemy will spawn lots of love.                                                                      | RARE      | 10000                                         |
| Burning Shoes       | Killing an enemy will set your feet on fire.                                                                   | RARE      | 10000                                         |
| Cookie Fountain     | Killing an enemy will let cookies sprinkle out of you.                                                         | RARE      | 10000                                         |
| Campfire            | Killing an enemy will place down a campfire.                                                                   | RARE      | 10000                                         |
| Wing Gusts          | Scatter your enemies to the wind!                                                                              | RARE      | 10000                                         |
| Head Rocket         | Killing an enemy will launch their head up in the skies.                                                       | RARE      | 10000                                         |
| Easter Egg Theft    | Killing an enemy will make them drop easter eggs.                                                              | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Magnolia            | They're only around for a short time but they're beautiful!                                                    | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Black Mark          | Killing an enemy will make them poof out of the realm existence.                                               | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Last Candle         | Killing an enemy will spawn a torch in their place.                                                            | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Fire Breath         | Killing an enemy will spawn a fire breath effect.                                                              | RARE      | 10000                                         |
| Its Raining Gold    | Killing an enemy will rain gold upon you.                                                                      | RARE      | "Minimum Wage" Bed Wars Challenge             |
| Blood Explosion     | Killing an enemy will make them explode in blood.                                                              | EPIC      | 25000                                         |
| Rekt                | Killing an enemy will drop a hologram remebering your victory.                                                 | EPIC      | 25000                                         |
| Piñata              | Killing an enemy will make them explode like a Piñata.                                                         | EPIC      | 25000                                         |
| Experience Orb      | Killing an enemy will make it rain experience on top of their corpse.                                          | EPIC      | 25000                                         |
| Smiley              | Killing an enemy will show your smiley in the air.                                                             | EPIC      | 25000                                         |
| Raining Easter Eggs | It's raining Easter Eggs!                                                                                      | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Hatching Eggs       | Hatching eggs are falling from the sky!                                                                        | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Lantern Spiral      | Create a fabulous display of lanterns spiraling into the sky.                                                  | EPIC      | 25000                                         |
| Blood Bats          | Spawn some blood hungry bats.                                                                                  | EPIC      | Halloween Event Shop                          |
| Skeletal Remains    | Turn your victim into a pile of bones!                                                                         | EPIC      | Halloween Event Shop                          |
| Bunny Explosion     | Killing an enemy will spawn easter bunnies around them.                                                        | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Chicken Tower       | Killing an enemy will spawn chicken that will stack up to a tower.                                             | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Rain on my Parade   | Who doesn't love a good rain shower?                                                                           | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Kill Counter        | Killing an enemy drops a hologram showing your total number of final kills.                                    | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Haunted             | Killing an enemy will cause their soul to separate from their body and fly around!                             | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Pumpkin Rocket      | Launch pumpkins into the sky from where your victim died!                                                      | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Jack O' Twister     | Send your victims into a twist.                                                                                | EPIC      | Halloween Event Shop                          |
| Snow Globe          | Killing an enemy will spawn a musical snow globe that will play 1 of 6 Festive jingles.                        | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Gift Explosion      | Make your enemies burst into holiday gift!                                                                     | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Holiday Fireworks   | Launches holiday-colored fireworks into the sky!                                                               | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Spirit              | Killing an enemy will spawn the Spirit kill effect.                                                            | EPIC      | 25000                                         |
| Beef Everywhere     | Explosion of beef!                                                                                             | EPIC      | 25000                                         |
| Anvil Smash         | An anvil will smash into the ground when you kill a player.                                                    | EPIC      | "Weighted Items" Bed Wars Challenge           |
| Crackling Ice       | Smash ice upon your enemies.                                                                                   | EPIC      | Holidays Event Shop                           |
| Present Rain        | Spawn a present and get some gifts with every kill!                                                            | EPIC      | Holidays Event Shop                           |
| Pedestal            | Drops one of your highest rarity featured Figurines where you killed your opponent!                            | EPIC      | Slumber Hotel                                 |
| Balloons            | Unleash a parade of colorful balloons!                                                                         | EPIC      | Ticket Machine                                |
| Heart Beat          | Your Heart is racing after that battle.                                                                        | EPIC      | Slumber Hotel                                 |
| Tornado             | Killing an enemy will summon a vortex!                                                                         | LEGENDARY | 100000                                        |
| Rising Dragon       | A fiery dragon rises from the ashes of your battles.                                                           | LEGENDARY | 100000                                        |
| Ring of Fire        | Find the fire within and send it forth.                                                                        | LEGENDARY | Summer Event Shop                             |
| Dracula's Flight    | Have a swarm of bats lift your enemy's corpse up into the sky.                                                 | LEGENDARY | Halloween Event Shop                          |
| Bee Abduction       | Where are they taking them??                                                                                   | LEGENDARY | Easter Event Shop                             |
| Lit                 | Killing an enemy will set their body on fire.                                                                  | LEGENDARY | 100000                                        |
| Final Smash         | Killing an enemy will smash them out of the world.                                                             | LEGENDARY | 100000                                        |
| Rainbow             | Whoa, that's a full rainbow all the way!                                                                       | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Petal Gust          | Create a gust of petals around your foe!                                                                       | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Batcrux             | Killing an enemy splits their soul into 7 Batcruxes.                                                           | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Soul Ripper         | Killing an enemy rips their soul of their body, leaving them lingering a few more seconds in the common world. | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Shattered           | Shatter your enemies to dust!                                                                                  | LEGENDARY | Not currently available!                      |
| Pumpkin Popper      | Killing a player will cause Pumpkins to explode from their body.                                               | LEGENDARY | Halloween Bundle                              |
| Afterlife           | Watch your victim's souls go up into the afterlife.                                                            | LEGENDARY | Halloween Event Shop                          |
| Snowplosion         | Killing an enemy will make them explode into snowballs, splattering snow everywhere.                           | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Holiday Tree        | Killing an enemy will place down a holiday tree.                                                               | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Pig Smash           | A pig will smash into the ground on your kills.                                                                | LEGENDARY | 100000                                        |
| Cow Rocket          | Killing an enemy will launch a cow over the moon.                                                              | LEGENDARY | 100000                                        |
| Guardian Rocket     | Killing an enemy will spawn some angry Guardians.                                                              | LEGENDARY | "Can't Touch This" Bed Wars Challenge         |
| Shock Wave          | Send a shock wave through your opponent's body.                                                                | LEGENDARY | Summer Event Shop                             |
| Frozen in Time      | Freeze your victim in time.                                                                                    | LEGENDARY | Holidays Event Shop                           |
| Team Destroy        | Explode your victim into a ball of their team's color.                                                         | LEGENDARY | Slumber Hotel                                 |
| Golem Yeet          | YEEEEET your enemies with the help of an Iron Golem!                                                           | LEGENDARY | Slumber Hotel                                 |

## Death Cries

Exported as `BEDWARS_DEATH_CRIES: readonly BedWarsCosmetic[]`. The sound played when a player dies. 37 entries.

| Name            | Rarity    | Cost                                          |
| --------------- | --------- | --------------------------------------------- |
| Bazinga         | COMMON    | 5000                                          |
| Deflated Toy    | COMMON    | 5000                                          |
| Enderman        | COMMON    | 5000                                          |
| Dinosaur        | COMMON    | 5000                                          |
| Robot Mouse     | COMMON    | 5000                                          |
| Pig             | COMMON    | 5000                                          |
| Grumpy Villager | COMMON    | 5000                                          |
| Sad Puppy       | COMMON    | 5000                                          |
| Monster Burp    | COMMON    | 5000                                          |
| Fireball        | COMMON    | 5000                                          |
| Dry Bones       | COMMON    | 5000                                          |
| Ding            | RARE      | 10000                                         |
| Splash          | RARE      | 10000                                         |
| Bat             | RARE      | 10000                                         |
| Plop            | RARE      | 10000                                         |
| Gone            | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Burp            | RARE      | Battle Pass: Season 1                         |
| Scurry          | RARE      | 10000                                         |
| Squeal          | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Doused Lantern  | RARE      | 10000                                         |
| Cat             | RARE      | "Renegade" Bed Wars Challenge                 |
| Aww             | EPIC      | 25000                                         |
| Energy          | EPIC      | 25000                                         |
| Grumble         | EPIC      | 25000                                         |
| Howl            | EPIC      | 25000                                         |
| Sniff           | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Squeak          | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Firework        | EPIC      | 25000                                         |
| Dragon Roar     | EPIC      | 25000                                         |
| Sad Moo         | EPIC      | 25000                                         |
| Ghost's Cry     | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Arcade          | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Miracle         | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Rage            | LEGENDARY | Battle Pass: Season 1                         |
| Dark Portal     | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Haunted Curse   | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Guardian        | LEGENDARY | "Slow Reflexes" Bed Wars Challenge            |

## Bed Destroys

Exported as `BEDWARS_BED_DESTROYS: readonly BedWarsCosmetic[]`. Effects played when you break an enemy bed. 22 entries. Every entry carries a `description`.

| Name              | Description                                                           | Rarity    | Cost                                         |
| ----------------- | --------------------------------------------------------------------- | --------- | -------------------------------------------- |
| Squid Missile     | Breaking a bed will spawn a fellow companion.                         | COMMON    | 5000                                         |
| Firework          | Breaking a bed will launch fireworks.                                 | COMMON    | 5000                                         |
| Lightning Strike  | Breaking a bed will wake up Thor.                                     | COMMON    | 5000                                         |
| Ghost             | Plays the Ghost Bed Destroy when you break a bed.                     | COMMON    | 15,000 (Halloween only)/Halloween Event Shop |
| Lava Explosion    | Breaking a bed will make it explode into lava.                        | RARE      | 10000                                        |
| Pig Missile       | Breaking a bed will spawn a fellow companion.                         | RARE      | 10000                                        |
| Glyph             | When you destroy a bed, display your selected Glyph above it.         | RARE      | 30,000 (Halloween only)/Halloween Event Shop |
| Tornado           | Breaking a bed will summon a vortex!                                  | EPIC      | 25000                                        |
| Thief             | Plays the Thief Bed Destroy when you break a bed.                     | EPIC      | 25000                                        |
| Pumpkin Explosion | Plays the Pumpkin Explosion Bed Destroy when you break a bed.         | EPIC      | 75,000 (Halloween only)/Halloween Event Shop |
| Present           | Plays the Present Bed Destroy when you break a bed.                   | EPIC      | Holiday Bundle                               |
| Eggsplosion       | Plays the Eggsplosion Bed Destroy when you break a bed.               | EPIC      | 75,000 (Easter only)/Easter Event Shop       |
| Blizzard          | Plays the Blizzard Bed Destroy when you break a bed.                  | EPIC      | 75,000 (Holidays only)/Holidays Event Shop   |
| Shattering Ice    | Nothing is better than a nice cool bed.                               | EPIC      | Holidays Event Shop                          |
| Bed Bugs          | Breaking a bed will release the bug within.                           | LEGENDARY | 100000                                       |
| Pigsplosion       | Breaking a bed will spawn a bunch of baby pigs.                       | LEGENDARY | 100000                                       |
| Fishy             | Breaking a bed will summon dehydrated fish looking for a nearby lake. | LEGENDARY | Battle Pass: Season 1                        |
| Lady Bug          | Plays the Lady Bug Bed Destroy when you break a bed.                  | LEGENDARY | 300,000 (Easter only)/Easter Event Shop      |
| Stormy            | Plays the Stormy Bed Destroy when you break a bed.                    | LEGENDARY | Summer Bundle                                |
| Egg Popper        | Breaking a bed will summon hatching eggs!                             | LEGENDARY | 300,000 (Easter only)/Easter Event Shop      |
| Burned Up         | Turn those beds into a pile of ash!                                   | LEGENDARY | Summer Event Shop                            |
| Water Spout       | Plays the Water Spout Bed Destroy when you break a bed.               | LEGENDARY | Summer Event Shop                            |

## Kill Messages

Exported as `BEDWARS_KILL_MESSAGES: readonly BedWarsKillMessage[]`. 31 entries. Each entry carries a `messages` array (kill variants plus the bed-break line). Placeholder tokens (`<player1>`, `<player2>`, `<Color>`, `<#>`) are preserved verbatim.

### Fire

- Rarity: COMMON
- Cost: 5000
- Messages:
  - `<player2> was struck down by <player1>.`
  - `<player2> was turned to dust <player1>.`
  - `<player2> was melted by <player1>.`
  - `<player2> was turned to ash by <player1>.`
  - `<player2> was fried by <player1>'s Golem.`
  - `<Color> Bed was incinerated by <player1>!`

### Western

- Rarity: COMMON
- Cost: 5000
- Messages:
  - `<player2> was filled full of lead by <player1>.`
  - `<player2> met their end by <player1>.`
  - `<player2> was killed with dynamite by <player1>.`
  - `<player2> lost a drinking contest with <player1>.`
  - `<player2> lost the draw to <player1>'s Golem.`
  - `<Color> Bed was iced by <player1>!`

### Honourable

- Rarity: COMMON
- Cost: 5000
- Messages:
  - `<player2> died in close combat to <player1>.`
  - `<player2> fought to the edge with <player1>.`
  - `<player2> fell to the great marksmanship of <player1>.`
  - `<player2> stumbled off a ledge with help by <player1>.`
  - `<player2> tangoed with <player1>'s Golem.`
  - `<Color> Bed had to raise the white flag to <player1>!`

### Multiverse

- Rarity: DEFAULT
- Cost: Slumber Hotel
- Messages:
  - `<player2> was distorted by <player1>.`
  - `<player2> was thrown into the singularity by <player1>.`
  - `<player2> was shot into another dimension by <player1>.`
  - `<player2> was thrown into a black hole by <player1>.`
  - `<player2> was launched into a wormhole by <player1>'s Golem.`
  - `<Color> Bed was sucked into a black hole by <player1>.`

### Limbo

- Rarity: DEFAULT
- Cost: Slumber Hotel
- Messages:
  - `<player2> was sent to limbo by <player1>.`
  - `<player2> was pushed into limbo by <player1>.`
  - `<player2> was shot into limbo by <player1>.`
  - `<player2> was pushed into limbo by <player1>.`
  - `<player2> was launched into limbo by <player1>'s Golem.`
  - `<Color> Bed was sent to limbo by <player1>.`

### Love

- Rarity: RARE
- Cost: 10000
- Messages:
  - `<player2> was given the cold shoulder by <player1>.`
  - `<player2> was hit off by a love bomb from <player1>.`
  - `<player2> was struck with Cupid's arrow by <player1>.`
  - `<player2> was out of the league of <player1>.`
  - `<player2> was no match for <player1>'s Golem.`
  - `<Color> Bed was dismantled by <player1>!`

### BBQ

- Rarity: RARE
- Cost: 10000
- Messages:
  - `<player2> was glazed in BBQ sauce by <player1>.`
  - `<player2> slipped in BBQ sauce off the edge spilled by <player1>.`
  - `<player2> was thrown chili powder at by <player1>.`
  - `<player2> was not spicy enough for <player1>.`
  - `<player2> was sliced up by <player1>'s Golem.`
  - `<Color> Bed was deep fried by <player1>!`

### Woof Woof

- Rarity: RARE
- Cost: 10000
- Messages:
  - `<player2> was bitten by <player1>.`
  - `<player2> howled into the void for <player1>.`
  - `<player2> caught the ball thrown by <player1>.`
  - `<player2> was distracted by a puppy placed by <player1>.`
  - `<player2> played too rough with <player1>'s Golem.`
  - `<Color> Bed was ripped apart by <player1>!`

### Santa's Workshop

- Rarity: RARE
- Cost: 30,000 (Holidays only)/Holidays Event Shop
- Messages:
  - `<player2> was wrapped into a gift by <player1>.`
  - `<player2> hit the hard-wood floor because of <player1>.`
  - `<player2> was put on the naughty list by <player1>.`
  - `<player2> was pushed down a slope by <player1>.`
  - `<player2> was turned to gingerbread by <player1>'s Golem.`
  - `<Color> Bed was traded in for milk and cookies by <player1>!`

### Primal

- Rarity: RARE
- Cost: 30,000 (Halloween only)/Halloween Event Shop
- Messages:
  - `<player2> was hunted down by <player1>.`
  - `<player2> stumbled on a trap set by <player1>.`
  - `<player2> got skewered by <player1>.`
  - `<player2> was thrown into a volcano by <player1>.`
  - `<player2> was mauled by <player1>'s Golem.`
  - `<Color> Bed was sacrificed by <player1>!`

### Oink

- Rarity: RARE
- Cost: 10000
- Messages:
  - `<player2> was oinked by <player1>.`
  - `<player2> slipped into void for <player1>.`
  - `<player2> got attacked by a carrot from <player1>.`
  - `<player2> was distracted by a piglet from <player1>.`
  - `<player2> was oinked by <player1>'s Golem.`
  - `<Color> Bed was gulped by <player1>!`

### Squeak

- Rarity: RARE
- Cost: 10000
- Messages:
  - `<player2> was chewed up by <player1>.`
  - `<player2> was scared into the void by <player1>.`
  - `<player2> stepped in a mouse trap placed by <player1>.`
  - `<player2> was distracted by a rat dragging pizza from <player1>.`
  - `<player2> squeaked around with <player1>'s Golem.`
  - `<Color> Bed was squeaked apart by <player1>!`

### Buzz

- Rarity: RARE
- Cost: 30,000 (Easter only)/Easter Event Shop
- Messages:
  - `<player2> was buzzed to death by <player1>.`
  - `<player2> was bzzz'd into the void by <player1>.`
  - `<player2> was startled by <player1>.`
  - `<player2> was stung off the edge by <player1>.`
  - `<player2> was bee'd by <player1>'s Golem.`
  - `<Color> Bed was stung by <player1>!`

### Ox'd

- Rarity: RARE
- Cost: 10000
- Messages:
  - `<player2> was trampled by <player1>.`
  - `<player2> was back kicked into the void by <player1>.`
  - `<player2> was impaled from a distance by <player1>.`
  - `<player2> was headbutted off a cliff by <player1>.`
  - `<player2> was trampled by <player1>'s Golem.`
  - `<Color> Bed was impaled by <player1>!`

### Pirate

- Rarity: EPIC
- Cost: 25000
- Messages:
  - `<player2> be sent to Davy Jones' locker by <player1>.`
  - `<player2> be cannonballed to death by <player1>.`
  - `<player2> be shot and killed by <player1>.`
  - `<player2> be killed with magic by <player1>.`
  - `<player2> be killed with metal by <player1>'s Golem.`
  - `<Color> Bed be shot with cannon by <player1>!`

### Literally Spooky

- Rarity: EPIC
- Cost: 75,000 (Halloween only)/Halloween Event Shop
- Messages:
  - `<player2> was spooked by <player1>.`
  - `<player2> was spooked off the map by <player1>.`
  - `<player2> was remotely spooked by <player1>.`
  - `<player2> was totally spooked by <player1>.`
  - `<player2> was spooked by <player1>'s Golem.`
  - `<Color> Bed was spooked by <player1>!`

### Memed

- Rarity: EPIC
- Cost: 75,000 (Holidays only)/Holidays Event Shop
- Messages:
  - `<player2> got rekt by <player1>.`
  - `<player2> took the L to <player1>.`
  - `<player2> got smacked by <player1>.`
  - `<player2> got roasted by <player1>.`
  - `<player2> got bamboozled by <player1>'s Golem.`
  - `<Color> Bed got memed by <player1>!`

### Dramatic

- Rarity: EPIC
- Cost: 75,000 (Halloween only)/Halloween Event Shop
- Messages:
  - `<player2> was tragically backstabbed by <player1>.`
  - `<player2> was heartlessly let go by <player1>.`
  - `<player2>'s heart was pierced by <player1>.`
  - `<player2> was delivered into nothingness by <player1>.`
  - `<player2> was dismembered by <player1>'s Golem.`
  - `<Color> Bed was dreadfully corrupted by <player1>!`

### Noble

- Rarity: EPIC
- Cost: Battle Pass: Season 1
- Messages:
  - `<player2> was crushed by <player1>.`
  - `<player2> was <player1>'s final #<#>.`
  - `<player2> was dominated by <player1>.`
  - `<player2> was assassinated by <player1>.`
  - `<player2> was thrown off their high horse by <player1>.`
  - `<player2> was degraded by <player1>'s Golem.`
  - `<Color> Bed was bed #<#> destroyed by <player1>!`

### Snow Storm

- Rarity: EPIC
- Cost: 75,000 (Holidays only)/Holidays Event Shop
- Messages:
  - `<player2> was locked outside during a snow storm by <player1>.`
  - `<player2> was pushed into a snowbank by <player1>.`
  - `<player2> was hit with a snowball from <player1>.`
  - `<player2> was shoved down an icy slope by <player1>.`
  - `<player2> got snowed in by <player1>'s Golem.`
  - `<Color> Bed was made into a snowman by <player1>!`

### Eggy

- Rarity: EPIC
- Cost: 75,000 (Easter only)/Easter Event Shop
- Messages:
  - `<player2> was painted pretty by <player1>.`
  - `<player2> was deviled into the void by <player1>.`
  - `<player2> slipped into a pan placed by <player1>.`
  - `<player2> was flipped off the edge by <player1>.`
  - `<player2> was made sunny side up by <player1>'s Golem.`
  - `<Color> Bed was scrambled by <player1>!`

### Celebratory

- Rarity: EPIC
- Cost: 75,000 (Holidays only)/Holidays Event Shop
- Messages:
  - `<player2> was whacked with a party balloon by <player1>.`
  - `<player2> was popped into the void by <player1>.`
  - `<player2> was shot with a roman candle by <player1>.`
  - `<player2> was launched like a firework by <player1>.`
  - `<player2> was lit up by <player1>'s Golem.`
  - `<Color> Bed exploded from a firework by <player1>!`

### Wrapped Up

- Rarity: EPIC
- Cost: 75,000 (Holidays only)/Holidays Event Shop
- Messages:
  - `<player2> was wrapped up by <player1>.`
  - `<player2> was tied into a bow by <player1>.`
  - `<player2> was glued up by <player1>.`
  - `<player2> tripped over a present placed by <player1>.`
  - `<player2> was taped together by <player1>'s Golem.`
  - `<Color> Bed was stuffed with tissue paper by <player1>!`

### To The Moon

- Rarity: EPIC
- Cost: 25000
- Messages:
  - `<player2> was crushed into moon dust by <player1>.`
  - `<player2> was sent the wrong way by <player1>.`
  - `<player2> was hit by an asteroid from <player1>.`
  - `<player2> was blasted to the moon by <player1>.`
  - `<player2> was blown up by <player1>'s Golem.`
  - `<Color> Bed was blasted to dust by <player1>!`

### Festive

- Rarity: EPIC
- Cost: 75,000 (Holidays only)/Holidays Event Shop
- Messages:
  - `<player2> was smothered in holiday cheer by <player1>.`
  - `<player2> was banished into the ether by <player1>'s holiday spirit.`
  - `<player2> was sniped by a missile of festivity by <player1>.`
  - `<player2> was pushed by <player1>'s holiday spirit.`
  - `<player2> was sung holiday tunes to by <player1>'s Golem.`
  - `<Color> Bed was melted by <player1>'s holiday spirit!`

### Roar

- Rarity: EPIC
- Cost: 25000
- Messages:
  - `<player2> was ripped to shreds by <player1>.`
  - `<player2> was charged by <player1>.`
  - `<player2> was pounced on by <player1>.`
  - `<player2> was ripped and thrown by <player1>.`
  - `<player2> was ripped to shreds by <player1>'s Golem.`
  - `<Color> Bed was ripped to shreds by <player1>!`

### Triumph

- Rarity: LEGENDARY
- Cost: 300,000 (Halloween only)/Halloween Event Shop
- Messages:
  - `<player2> was bested by <player1>.`
  - `<player2> was <player1>'s final #<#>.`
  - `<player2> was knocked into the void by <player1>.`
  - `<player2> was shot by <player1>.`
  - `<player2> was knocked off an edge by <player1>.`
  - `<player2> was bested by <player1>'s Golem.`
  - `<Color> Bed was bed #<#> destroyed by <player1>!`

### Glorious

- Rarity: LEGENDARY
- Cost: Tournament Hall (50 Tributes)
- Messages:
  - `<player2> was stomped by <player1>.`
  - `<player2> was <player1>'s final #<#>.`
  - `<player2> was thrown down a pit by <player1>.`
  - `<player2> was shot by <player1>.`
  - `<player2> was thrown to the ground by <player1>.`
  - `<player2> was outclassed by <player1>'s Golem.`
  - `<Color> Bed was bed #<#> destroyed by <player1>!`

### Bridging for Dummies

- Rarity: LEGENDARY
- Cost: "Bridging for Dummies" Bed Wars Challenge
- Messages:
  - `<player2> had a small brain moment while fighting <player1>.`
  - `<player2> was not able to block clutch against <player1>.`
  - `<player2> got 360 no-scoped by <player1>.`
  - `<player2> forgot how many blocks they had left while fighting <player1>.`
  - `<player2> got absolutely destroyed by <player1>'s Golem.`
  - `<Color> Bed has left the game after seeing <player1>!`

### Social Distance

- Rarity: LEGENDARY
- Cost: "Social Distancing" Bed Wars Challenge
- Messages:
  - `<player2> was too shy to meet <player1>.`
  - `<player2> didn't distance themselves properly from <player1>.`
  - `<player2> was coughed at by <player1>.`
  - `<player2> tripped while trying to run away from <player1>.`
  - `<player2> got too close to <player1>'s Golem.`
  - `<Color> Bed was contaminated by <player1>!`

### Old Man

- Rarity: LEGENDARY
- Cost: "Old Man" Bed Wars Challenge
- Messages:
  - `<player2> was yelled at by <player1>.`
  - `<player2> was thrown off the lawn by <player1>.`
  - `<player2> was accidentally spit on by <player1>.`
  - `<player2> slipped on the fake teeth of <player1>.`
  - `<player2> was chased away by <player1>'s Golem.`
  - `<Color> Bed was sold in a garage sale by <player1>!`

