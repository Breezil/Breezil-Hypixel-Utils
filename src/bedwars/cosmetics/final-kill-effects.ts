/**
 * Bed Wars Final Kill Effects cosmetics reference data.
 *
 * A complete, faithful catalogue of every Bed Wars Final Kill Effect, including
 * its in-game description, rarity, and cost. The `cost` field is a plain number
 * when the item is purchasable for a token amount, otherwise it is the verbatim
 * source string (event shops, challenges, bundles, special availability, etc.).
 */

import { BedWarsCosmetic } from "./types";

export const BEDWARS_FINAL_KILL_EFFECTS: readonly BedWarsCosmetic[] = [
  {
    name: "Squid Missile",
    description: "Killing an enemy will spawn a fellow companion.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Firework",
    description: "Killing an enemy will launch fireworks.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Lightning Strike",
    description: "Killing an enemy will wake up Thor.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "TNT",
    description: "Killing an enemy will make them disappear into TNT.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Heart Aura",
    description: "Killing an enemy will spawn lots of love.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Burning Shoes",
    description: "Killing an enemy will set your feet on fire.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Cookie Fountain",
    description: "Killing an enemy will let cookies sprinkle out of you.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Campfire",
    description: "Killing an enemy will place down a campfire.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Wing Gusts",
    description: "Scatter your enemies to the wind!",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Head Rocket",
    description: "Killing an enemy will launch their head up in the skies.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Easter Egg Theft",
    description: "Killing an enemy will make them drop easter eggs.",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Magnolia",
    description: "They're only around for a short time but they're beautiful!",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Black Mark",
    description:
      "Killing an enemy will make them poof out of the realm existence.",
    rarity: "RARE",
    cost: "30,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Last Candle",
    description: "Killing an enemy will spawn a torch in their place.",
    rarity: "RARE",
    cost: "30,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Fire Breath",
    description: "Killing an enemy will spawn a fire breath effect.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Its Raining Gold",
    description: "Killing an enemy will rain gold upon you.",
    rarity: "RARE",
    cost: '"Minimum Wage" Bed Wars Challenge',
  },
  {
    name: "Blood Explosion",
    description: "Killing an enemy will make them explode in blood.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Rekt",
    description:
      "Killing an enemy will drop a hologram remebering your victory.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Piñata",
    description: "Killing an enemy will make them explode like a Piñata.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Experience Orb",
    description:
      "Killing an enemy will make it rain experience on top of their corpse.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Smiley",
    description: "Killing an enemy will show your smiley in the air.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Raining Easter Eggs",
    description: "It's raining Easter Eggs!",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Hatching Eggs",
    description: "Hatching eggs are falling from the sky!",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Lantern Spiral",
    description:
      "Create a fabulous display of lanterns spiraling into the sky.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Blood Bats",
    description: "Spawn some blood hungry bats.",
    rarity: "EPIC",
    cost: "Halloween Event Shop",
  },
  {
    name: "Skeletal Remains",
    description: "Turn your victim into a pile of bones!",
    rarity: "EPIC",
    cost: "Halloween Event Shop",
  },
  {
    name: "Bunny Explosion",
    description: "Killing an enemy will spawn easter bunnies around them.",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Chicken Tower",
    description:
      "Killing an enemy will spawn chicken that will stack up to a tower.",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Rain on my Parade",
    description: "Who doesn't love a good rain shower?",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Kill Counter",
    description:
      "Killing an enemy drops a hologram showing your total number of final kills.",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Haunted",
    description:
      "Killing an enemy will cause their soul to separate from their body and fly around!",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Pumpkin Rocket",
    description: "Launch pumpkins into the sky from where your victim died!",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Jack O' Twister",
    description: "Send your victims into a twist.",
    rarity: "EPIC",
    cost: "Halloween Event Shop",
  },
  {
    name: "Snow Globe",
    description:
      "Killing an enemy will spawn a musical snow globe that will play 1 of 6 Festive jingles.",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Gift Explosion",
    description: "Make your enemies burst into holiday gift!",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Holiday Fireworks",
    description: "Launches holiday-colored fireworks into the sky!",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Spirit",
    description: "Killing an enemy will spawn the Spirit kill effect.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Beef Everywhere",
    description: "Explosion of beef!",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Anvil Smash",
    description: "An anvil will smash into the ground when you kill a player.",
    rarity: "EPIC",
    cost: '"Weighted Items" Bed Wars Challenge',
  },
  {
    name: "Crackling Ice",
    description: "Smash ice upon your enemies.",
    rarity: "EPIC",
    cost: "Holidays Event Shop",
  },
  {
    name: "Present Rain",
    description: "Spawn a present and get some gifts with every kill!",
    rarity: "EPIC",
    cost: "Holidays Event Shop",
  },
  {
    name: "Pedestal",
    description:
      "Drops one of your highest rarity featured Figurines where you killed your opponent!",
    rarity: "EPIC",
    cost: "Slumber Hotel",
  },
  {
    name: "Balloons",
    description: "Unleash a parade of colorful balloons!",
    rarity: "EPIC",
    cost: "Ticket Machine",
  },
  {
    name: "Heart Beat",
    description: "Your Heart is racing after that battle.",
    rarity: "EPIC",
    cost: "Slumber Hotel",
  },
  {
    name: "Tornado",
    description: "Killing an enemy will summon a vortex!",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Rising Dragon",
    description: "A fiery dragon rises from the ashes of your battles.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Ring of Fire",
    description: "Find the fire within and send it forth.",
    rarity: "LEGENDARY",
    cost: "Summer Event Shop",
  },
  {
    name: "Dracula's Flight",
    description:
      "Have a swarm of bats lift your enemy's corpse up into the sky.",
    rarity: "LEGENDARY",
    cost: "Halloween Event Shop",
  },
  {
    name: "Bee Abduction",
    description: "Where are they taking them??",
    rarity: "LEGENDARY",
    cost: "Easter Event Shop",
  },
  {
    name: "Lit",
    description: "Killing an enemy will set their body on fire.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Final Smash",
    description: "Killing an enemy will smash them out of the world.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Rainbow",
    description: "Whoa, that's a full rainbow all the way!",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Petal Gust",
    description: "Create a gust of petals around your foe!",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Batcrux",
    description: "Killing an enemy splits their soul into 7 Batcruxes.",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Soul Ripper",
    description:
      "Killing an enemy rips their soul of their body, leaving them lingering a few more seconds in the common world.",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Shattered",
    description: "Shatter your enemies to dust!",
    rarity: "LEGENDARY",
    cost: "Not currently available!",
  },
  {
    name: "Pumpkin Popper",
    description:
      "Killing a player will cause Pumpkins to explode from their body.",
    rarity: "LEGENDARY",
    cost: "Halloween Bundle",
  },
  {
    name: "Afterlife",
    description: "Watch your victim's souls go up into the afterlife.",
    rarity: "LEGENDARY",
    cost: "Halloween Event Shop",
  },
  {
    name: "Snowplosion",
    description:
      "Killing an enemy will make them explode into snowballs, splattering snow everywhere.",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Holiday Tree",
    description: "Killing an enemy will place down a holiday tree.",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Pig Smash",
    description: "A pig will smash into the ground on your kills.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Cow Rocket",
    description: "Killing an enemy will launch a cow over the moon.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Guardian Rocket",
    description: "Killing an enemy will spawn some angry Guardians.",
    rarity: "LEGENDARY",
    cost: '"Can\'t Touch This" Bed Wars Challenge',
  },
  {
    name: "Shock Wave",
    description: "Send a shock wave through your opponent's body.",
    rarity: "LEGENDARY",
    cost: "Summer Event Shop",
  },
  {
    name: "Frozen in Time",
    description: "Freeze your victim in time.",
    rarity: "LEGENDARY",
    cost: "Holidays Event Shop",
  },
  {
    name: "Team Destroy",
    description: "Explode your victim into a ball of their team's color.",
    rarity: "LEGENDARY",
    cost: "Slumber Hotel",
  },
  {
    name: "Golem Yeet",
    description: "YEEEEET your enemies with the help of an Iron Golem!",
    rarity: "LEGENDARY",
    cost: "Slumber Hotel",
  },
] as const;

