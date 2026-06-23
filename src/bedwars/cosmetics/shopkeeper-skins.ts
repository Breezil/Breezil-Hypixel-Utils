import { BedWarsCosmetic } from "./types";

/**
 * Bed Wars shopkeeper skins.
 *
 * Plain Bed Wars Token costs are stored as numbers; all other acquisition
 * methods (event shops, challenges, Slumber Hotel, bundles, quests, the
 * Tournament Hall, and the unpriced default skin) are kept as their original
 * source strings.
 */
export const BEDWARS_SHOPKEEPER_SKINS: readonly BedWarsCosmetic[] = [
  { name: "Blacksmith", rarity: "COMMON", cost: "" },
  { name: "Skeleton", rarity: "COMMON", cost: 5000 },
  { name: "Zombie Pigman", rarity: "COMMON", cost: 5000 },
  { name: "Zombie", rarity: "COMMON", cost: 5000 },
  { name: "Villager Zombie", rarity: "COMMON", cost: 5000 },
  { name: "Wither Skeleton", rarity: "COMMON", cost: 5000 },
  { name: "Blaze", rarity: "COMMON", cost: 5000 },
  { name: "Bed Salesman", rarity: "COMMON", cost: 5000 },
  { name: "Holiday Bartender", rarity: "COMMON", cost: 5000 },
  { name: "Magic Vendor", rarity: "COMMON", cost: 5000 },
  { name: "Chen", rarity: "COMMON", cost: 5000 },
  { name: "Li", rarity: "COMMON", cost: 5000 },
  { name: "Xiu", rarity: "COMMON", cost: 5000 },
  { name: "Zhao", rarity: "COMMON", cost: 5000 },
  { name: "Stellar", rarity: "COMMON", cost: 5000 },
  { name: "Creeper", rarity: "RARE", cost: 10000 },
  { name: "Witch", rarity: "RARE", cost: 10000 },
  { name: "Bed Researcher", rarity: "RARE", cost: 10000 },
  { name: "King of Beds", rarity: "RARE", cost: 10000 },
  {
    name: "Snowman",
    rarity: "RARE",
    cost: "30,000 (Holidays only)/Holidays Event Shop",
  },
  { name: "Bao", rarity: "RARE", cost: 10000 },
  { name: "Wei", rarity: "RARE", cost: 10000 },
  {
    name: "Egg Delivery",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Killer",
    rarity: "RARE",
    cost: "30,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Cheesy", rarity: "RARE", cost: "Lunar New Year Quest" },
  {
    name: "Bunny Costume",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Present Man",
    rarity: "RARE",
    cost: "30,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Blue Sheep Pajamas",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Purple Pig Pajamas",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Red Frog Pajamas",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Green Cow Pajamas",
    rarity: "RARE",
    cost: "30,000 (Easter only)/Easter Event Shop",
  },
  { name: "Slumber Hotel Receptionist", rarity: "RARE", cost: "Slumber Hotel" },
  { name: "Frog Man", rarity: "RARE", cost: "Summer Event Shop" },
  { name: "Evil Eye", rarity: "EPIC", cost: 25000 },
  { name: "Ender Pulse", rarity: "EPIC", cost: 25000 },
  {
    name: "Santa",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Holiday Tree",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  { name: "Lucky Cat", rarity: "EPIC", cost: 25000 },
  { name: "Cute Puppy", rarity: "EPIC", cost: 25000 },
  {
    name: "Enderman",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Mr. Giftman",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  { name: "Mouse", rarity: "EPIC", cost: 25000 },
  {
    name: "Bunny in a Suit",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Skeletor",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Watcher",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Upside Down Snowman",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Penguin",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Aqua Duck Pajamas",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Pink Bunny Pajamas",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Pink Rabbit",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Blue Rabbit",
    rarity: "EPIC",
    cost: "75,000 (Easter only)/Easter Event Shop",
  },
  {
    name: "Ghost",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Scarecrow",
    rarity: "EPIC",
    cost: "75,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "Lumberjack",
    rarity: "EPIC",
    cost: '"Woodworker" Bed Wars Challenge',
  },
  { name: "Warrior", rarity: "EPIC", cost: '"Warmonger" Bed Wars Challenge' },
  {
    name: "Reindeer",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Grinch",
    rarity: "EPIC",
    cost: "75,000 (Holidays only)/Holidays Event Shop",
  },
  { name: "Bright Tiger", rarity: "EPIC", cost: 25000 },
  { name: "Man Wearing Suit", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Ratman", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Spaceman", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Hammer", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Heatwave", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "John Indigos", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Oasis Spirit", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Lester Brody", rarity: "EPIC", cost: "Slumber Hotel" },
  { name: "Bundled Snowman", rarity: "EPIC", cost: "Holidays Event Shop" },
  { name: "Dark Dragon", rarity: "EPIC", cost: "Summer Event Shop" },
  { name: "Ice Queen", rarity: "EPIC", cost: "Holidays Event Shop" },
  { name: "Astronaut", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "Toonywise",
    rarity: "LEGENDARY",
    cost: "300,000 (Halloween only)/Halloween Event Shop",
  },
  {
    name: "You!",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Quack",
    rarity: "LEGENDARY",
    cost: "300,000 (Easter only)/Easter Event Shop",
  },
  { name: "Wither", rarity: "LEGENDARY", cost: "Halloween Bundle" },
  {
    name: "Rudolph",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  {
    name: "Cluck Stack",
    rarity: "LEGENDARY",
    cost: "Tournament Hall (200 Tributes)",
  },
  { name: "Dragon", rarity: "LEGENDARY", cost: 100000 },
  { name: "Sacred Cattle", rarity: "LEGENDARY", cost: 100000 },
  {
    name: "Defuser",
    rarity: "LEGENDARY",
    cost: '"Defuser" Bed Wars Challenge',
  },
  {
    name: "Marksman",
    rarity: "LEGENDARY",
    cost: '"Marksman" Bed Wars Challenge',
  },
  {
    name: "President Sloth",
    rarity: "LEGENDARY",
    cost: '"Protect the President" Bed Wars Challenge',
  },
  {
    name: "Patriotic Eagle",
    rarity: "LEGENDARY",
    cost: '"Patriot" Bed Wars Challenge',
  },
  {
    name: "Merchant",
    rarity: "LEGENDARY",
    cost: '"Capped Resources" Bed Wars Challenge',
  },
  {
    name: "Elf with Snow Globe",
    rarity: "LEGENDARY",
    cost: "300,000 (Holidays only)/Holidays Event Shop",
  },
  { name: "Gold Tiger", rarity: "LEGENDARY", cost: 100000 },
  { name: "Wither Tower", rarity: "LEGENDARY", cost: "Slumber Hotel" },
];

