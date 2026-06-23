/**
 * BedWars death cries cosmetics: the sound played when a player dies. Each entry
 * lists its name, rarity, and cost (a plain Bed Wars Token amount as a number,
 * or a source string when it is not a simple token purchase).
 */

import { BedWarsCosmetic } from "./types";

export const BEDWARS_DEATH_CRIES: readonly BedWarsCosmetic[] = [
  { name: "Bazinga", rarity: "COMMON", cost: 5000 },
  { name: "Deflated Toy", rarity: "COMMON", cost: 5000 },
  { name: "Enderman", rarity: "COMMON", cost: 5000 },
  { name: "Dinosaur", rarity: "COMMON", cost: 5000 },
  { name: "Robot Mouse", rarity: "COMMON", cost: 5000 },
  { name: "Pig", rarity: "COMMON", cost: 5000 },
  { name: "Grumpy Villager", rarity: "COMMON", cost: 5000 },
  { name: "Sad Puppy", rarity: "COMMON", cost: 5000 },
  { name: "Monster Burp", rarity: "COMMON", cost: 5000 },
  { name: "Fireball", rarity: "COMMON", cost: 5000 },
  { name: "Dry Bones", rarity: "COMMON", cost: 5000 },
  { name: "Ding", rarity: "RARE", cost: 10000 },
  { name: "Splash", rarity: "RARE", cost: 10000 },
  { name: "Bat", rarity: "RARE", cost: 10000 },
  { name: "Plop", rarity: "RARE", cost: 10000 },
  {
    name: "Gone",
    rarity: "RARE",
    cost: "30,000 (Holidays only)/Holidays Event Shop",
  },
  { name: "Burp", rarity: "RARE", cost: "Battle Pass: Season 1" },
  { name: "Scurry", rarity: "RARE", cost: 10000 },
  {
    name: "Squeal",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  { name: "Doused Lantern", rarity: "RARE", cost: 10000 },
  { name: "Cat", rarity: "RARE", cost: '"Renegade" Bed Wars Challenge' },
  { name: "Aww", rarity: "EPIC", cost: 25000 },
  { name: "Energy", rarity: "EPIC", cost: 25000 },
  { name: "Grumble", rarity: "EPIC", cost: 25000 },
  { name: "Howl", rarity: "EPIC", cost: 25000 },
  {
    name: "Sniff",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Squeak",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  { name: "Firework", rarity: "EPIC", cost: 25000 },
  { name: "Dragon Roar", rarity: "EPIC", cost: 25000 },
  { name: "Sad Moo", rarity: "EPIC", cost: 25000 },
  {
    name: "Ghost's Cry",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Arcade",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Miracle",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  { name: "Rage", rarity: "LEGENDARY", cost: "Battle Pass: Season 1" },
  {
    name: "Dark Portal",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Haunted Curse",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Guardian",
    rarity: "LEGENDARY",
    cost: '"Slow Reflexes" Bed Wars Challenge',
  },
];

