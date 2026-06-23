import { BedWarsCosmetic } from "./types";

/**
 * Bed Wars Victory Dance cosmetics.
 *
 * A faithful, complete reference list of every Bed Wars Victory Dance, including
 * its in-game description, rarity, and cost. The `cost` field is a plain numeric
 * token amount when the dance is purchasable for a simple token price; otherwise
 * it is the source string verbatim (event shops, challenges, battle passes, etc.).
 */
export const BEDWARS_VICTORY_DANCES: readonly BedWarsCosmetic[] = [
  {
    name: "Anvil Rain",
    description: "Anvils will rain from the sky.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Fireworks",
    description: "Celebrate with a splendid fireworks show!",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Cold Snap",
    description: "Chill an area around you to absolute zero.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Yeehaw",
    description: "Ride a horse like it's 1876.",
    rarity: "COMMON",
    cost: 5000,
  },
  {
    name: "Meteor Shower",
    description: "A meteor shower will rain down from the sky.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Guardians",
    description: "Perform a Guardian summoning ritual.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Night Shift",
    description: "Set it to day, set it to night, repeat, like a god.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Floating Lanterns",
    description: "Spawn floating lanterns to brighten up the night.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Raining Pigs",
    description: "The sky will rain with pigs.",
    rarity: "RARE",
    cost: 10000,
  },
  {
    name: "Festive Music",
    description: "Plays a short festive tune after you win!",
    rarity: "RARE",
    cost: "30,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Another Dimension",
    description:
      "Spawns a portal to a new dimension! Maybe it's the next game..?",
    rarity: "RARE",
    cost: "Battle Pass: Season 1",
  },
  {
    name: "Aura",
    description: "Show off how strong your Aura is.",
    rarity: "RARE",
    cost: '"Pacifist" Bed Wars Challenge',
  },
  {
    name: "Winter Twister",
    description: "Become the storm by riding the Winter Twister!",
    rarity: "RARE",
    cost: "Holidays Event Shop",
  },
  {
    name: "Special Fireworks",
    description: "Write your name in the sky!",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Wither Rider",
    description:
      "Ride a Wither straight from the nether - click to shoot Wither Skulls.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Veggy SpringLazor",
    description:
      "Fire a huge Pumpkin Laser that destroys everything in its path! Watch out for the recoil.",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Rabbit Meteors",
    description: "Rabbits fall from the sky and explode around you!",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Rainbow Dolly",
    description:
      "Spawn Dolly the sheep. When you hit Dolly, she clones herself.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Terror",
    description:
      "The fear doesn't actually creep in until you're alone in the dark and think of this victory dance.",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Toy Stick",
    description:
      'This humble baton sold at "Sticks R Us" is actually a magic wand. Also, it blows up things.',
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Pumpkin Patch",
    description: "Spread pumpkins wherever you walk!",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Easter Bunnies",
    description: "Spawns a bunch of easter bunnies laying eggs.",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Flower Bed",
    description: "Grow patches of beautiful flowers all around the map!",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Chinese Dragon",
    description: "Spawn a chinese dragon.",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Cake Walk",
    description: "Its an all you can eat buffet, dig in!",
    rarity: "EPIC",
    cost: '"Stamina" Bed Wars Challenge',
  },
  {
    name: "Heat Wave",
    description:
      "Rumored to once have belonged to Helios this stick holds much mystical powers.",
    rarity: "EPIC",
    cost: "Summer Event Shop",
  },
  {
    name: "Figurine Rain",
    description: "Your showcased Figurines rain from the sky!",
    rarity: "EPIC",
    cost: "Slumber Hotel",
  },
  {
    name: "Kart Away",
    description: "Flying minecarts?! Who knew!",
    rarity: "EPIC",
    cost: 25000,
  },
  {
    name: "Dragon Rider",
    description: "Ride a Dragon capable of destroying the map.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Haunted",
    description:
      "It's spooky-time! This Victory Dance releases the souls of a bunch of poor players you killed in past games to celebrate your victory.",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Graveyard Rave",
    description: "The ghosts are dancing.",
    rarity: "LEGENDARY",
    cost: "Halloween Event Shop",
  },
  {
    name: "Dragon Fire",
    description: "Rain fire down on your former enemies.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Rooted",
    description: "Spread your roots throughout the map.",
    rarity: "LEGENDARY",
    cost: "Easter Event Shop",
  },
  {
    name: "Egg Meteors",
    description: "Eggs rain down around you, destroying the map!",
    rarity: "LEGENDARY",
    cost: "Easter Event Shop",
  },
  {
    name: "Twerk Apocalypse",
    description: "Spawn tons more of yourself and have them twerk.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Ghast Rider",
    description: "Ride a ghast from hell the nether.",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Abominable Snowman",
    description:
      "Strike terror into the hearts of your enemies as the Abominable Snowman joins your side!",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Infection",
    description:
      "Spawns villagers around you only for them all to be infected!",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Pumpkin Bomber",
    description:
      "Right-click with a wand to spawn giant pumpkins that will destroy the map.",
    rarity: "LEGENDARY",
    cost: "Halloween Event Shop",
  },
  {
    name: "Chicken Rider",
    description: "Ride a flying chicken and shoot exploding eggs!",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Exploding Bunnies",
    description: "Bunnies that run around and explode!",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Puppy Party",
    description: "Spawn a horde of wolves.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Snowed In",
    description: "School's out! Grab a cup of hot chocolate! You're snowed in!",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "To Build a Snowman",
    description: "Build snowmen around you that explode when spawned!",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Fanbase",
    description:
      "Your very own fanbase will spawn around you, and every single one of them wants your autograph on their forehead!",
    rarity: "LEGENDARY",
    cost: "Battle Pass: Season 1",
  },
  {
    name: "Elder Guardian",
    description: "Ride a flying elder guardian that destroys the map.",
    rarity: "LEGENDARY",
    cost: '"Can\'t Touch This" Bed Wars Challenge',
  },
  {
    name: "Ice Bomber",
    description: "It's time to make a blizzard.",
    rarity: "LEGENDARY",
    cost: "Holidays Event Shop",
  },
  {
    name: "Hurricane Hell",
    description: "The worst thing to happen to bedwars.",
    rarity: "LEGENDARY",
    cost: 100000,
  },
  {
    name: "Dreamscape",
    description: "Put the whole map into a mythical dream-like state.",
    rarity: "LEGENDARY",
    cost: "Slumber Hotel",
  },
] as const;

