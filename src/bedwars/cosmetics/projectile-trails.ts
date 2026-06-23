/**
 * BedWars Projectile Trails cosmetics. Each entry pairs a trail name with its
 * rarity and how it is obtained (a Bed Wars Token price as a number, or a source
 * string for event shops, challenges, battle passes, and limited-time prices).
 */

import { BedWarsCosmetic } from "./types";

export const BEDWARS_PROJECTILE_TRAILS: readonly BedWarsCosmetic[] = [
  { name: "Slime", rarity: "COMMON", cost: 5000 },
  { name: "Ender", rarity: "COMMON", cost: 5000 },
  { name: "Lava", rarity: "COMMON", cost: 5000 },
  { name: "Potion", rarity: "COMMON", cost: 5000 },
  { name: "Water", rarity: "COMMON", cost: 5000 },
  { name: "Black Smoke", rarity: "COMMON", cost: 5000 },
  { name: "White Smoke", rarity: "COMMON", cost: 5000 },
  { name: "Notes", rarity: "RARE", cost: 10000 },
  { name: "Blue Dust", rarity: "RARE", cost: 10000 },
  { name: "Red Dust", rarity: "RARE", cost: 10000 },
  { name: "Purple Dust", rarity: "RARE", cost: 10000 },
  { name: "Cursed Flames", rarity: "RARE", cost: "Halloween Event Shop" },
  { name: "Spider's Silk", rarity: "RARE", cost: "Halloween Event Shop" },
  { name: "Lunar Dust", rarity: "RARE", cost: 10000 },
  { name: "The End", rarity: "RARE", cost: '"Swordless" Bed Wars Challenge' },
  { name: "Roses", rarity: "RARE", cost: "Summer Event Shop" },
  { name: "Fire", rarity: "EPIC", cost: 25000 },
  { name: "Magic", rarity: "EPIC", cost: 25000 },
  { name: "Green Star", rarity: "EPIC", cost: 25000 },
  { name: "Angry Villager", rarity: "EPIC", cost: 25000 },
  { name: "Firework", rarity: "EPIC", cost: 25000 },
  {
    name: "Bone",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Pumpkin Pie",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Flame Rings", rarity: "EPIC", cost: "Summer Event Shop" },
  { name: "Howling Wind", rarity: "EPIC", cost: "Halloween Event Shop" },
  { name: "Wisp Whirlwind", rarity: "EPIC", cost: "Halloween Event Shop" },
  {
    name: "Hoops",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Candy Basket", rarity: "EPIC", cost: "Halloween Event Shop" },
  {
    name: "Snowball Rain",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Hanukkah",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Rainy",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Spring Ribbons",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  { name: "Rocket", rarity: "EPIC", cost: 25000 },
  { name: "Let There Be Leather", rarity: "EPIC", cost: 25000 },
  { name: "Ice Cold", rarity: "EPIC", cost: "Battle Pass: Season 1" },
  {
    name: "Portal",
    rarity: "EPIC",
    cost: '"Standing Tall" Bed Wars Challenge',
  },
  { name: "Slumber", rarity: "EPIC", cost: 25000 },
  { name: "Meteor Blaze", rarity: "EPIC", cost: 25000 },
  { name: "Hearts", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "Bloody",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Rainbow", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "Bee",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  { name: "Random", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "Jack O' Lantern",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Icicle", rarity: "LEGENDARY", cost: "Holidays Event Shop" },
  { name: "Fireball", rarity: "LEGENDARY", cost: 100000 },
  { name: "Sparkler", rarity: "LEGENDARY", cost: "Summer Event Shop" },
  { name: "Fanged", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "DNA",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Wingman",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Twisted",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Trick or Treat",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Pumpkin Volley", rarity: "LEGENDARY", cost: "Halloween Event Shop" },
  {
    name: "Magic Wind",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Merry",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Tinsel",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Present",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Peep!",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  { name: "Twin Dragon", rarity: "LEGENDARY", cost: 100000 },
  { name: "Cheese", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "Fire Spiral",
    rarity: "LEGENDARY",
    cost: '"Can\'t Touch This" Bed Wars Challenge',
  },
  { name: "Bite", rarity: "LEGENDARY", cost: '"Selfish" Bed Wars Challenge' },
  { name: "Stormy", rarity: "LEGENDARY", cost: "Summer Event Shop" },
  {
    name: "Twirling Snowflakes",
    rarity: "LEGENDARY",
    cost: "Holidays Event Shop",
  },
];

