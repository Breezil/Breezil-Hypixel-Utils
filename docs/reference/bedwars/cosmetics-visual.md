# BedWars Cosmetics: Visual

This page is the complete reference for the visual BedWars cosmetic families exported by `@breezil/hypixel-utils`: sprays, island toppers, glyphs, shopkeeper skins, wood skins, and figurines.

Every family is an array of the shared `BedWarsCosmetic` type. Each entry records a `name`, a `rarity` (`"COMMON"`, `"RARE"`, `"EPIC"`, or `"LEGENDARY"`), and a `cost`. The `cost` is a plain number when the item is bought for a fixed Bed Wars Token amount, or a source string when it comes from an event shop, rank, challenge, battle pass, the Slumber Hotel, the Ticket Machine, the Tournament Hall, a bundle, a quest, or is otherwise special. An empty string means no cost is shown (typically the default item).

For the full definition of `BedWarsCosmetic` and the other gameplay-oriented cosmetic data, see the BedWars cosmetics gameplay reference page.

## Usage

```ts
import {
  BEDWARS_SPRAYS,
  BEDWARS_ISLAND_TOPPERS,
  BEDWARS_GLYPHS,
  BEDWARS_SHOPKEEPER_SKINS,
  BEDWARS_WOOD_SKINS,
  BEDWARS_FIGURINES,
} from "@breezil/hypixel-utils";

// Find all legendary sprays bought with tokens
const legendaryTokenSprays = BEDWARS_SPRAYS.filter(
  (c) => c.rarity === "LEGENDARY" && typeof c.cost === "number",
);

// Look up a single figurine by name
const cerberus = BEDWARS_FIGURINES.find((c) => c.name === "Cerberus");
```

## Sprays

Exported as `BEDWARS_SPRAYS` (147 entries).

| Name                             | Rarity    | Cost                                          |
| -------------------------------- | --------- | --------------------------------------------- |
| Hypixel Logo                     | COMMON    | (none)                                        |
| Creeper                          | COMMON    | 5000                                          |
| Thanks                           | COMMON    | 5000                                          |
| Diamond                          | COMMON    | 5000                                          |
| Invisibility Potion              | COMMON    | 5000                                          |
| Disco Pumpkin                    | COMMON    | 15,000 (Halloween only)/Halloween Event Shop  |
| Reveillon                        | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Christmas Tree                   | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Careful Santa                    | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Easter Eggs                      | COMMON    | 15,000 (Easter only)/Easter Event Shop        |
| Bunny GG                         | COMMON    | 15,000 (Easter only)/Easter Event Shop        |
| Fireworks                        | COMMON    | 5000                                          |
| Year of the Dog                  | COMMON    | 5000                                          |
| Year of the Pig                  | COMMON    | 5000                                          |
| Lantern                          | COMMON    | 5000                                          |
| Year of the Rat                  | COMMON    | 5000                                          |
| Year of the Ox                   | COMMON    | 5000                                          |
| Lion Dancer                      | COMMON    | 5000                                          |
| Year of the Tiger                | COMMON    | 5000                                          |
| Year of the Rabbit               | COMMON    | 5000                                          |
| Year of the Dragon               | COMMON    | 5000                                          |
| Year of the Snake                | COMMON    | 5000                                          |
| Bed Shield                       | RARE      | 10000                                         |
| GG WP                            | RARE      | 10000                                         |
| Sorry                            | RARE      | 10000                                         |
| Enderman                         | RARE      | 10000                                         |
| Golem Riding                     | RARE      | 10000                                         |
| Leaping Potion                   | RARE      | 10000                                         |
| Sir von Mewrtimer                | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Defenestration                   | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Boo!                             | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Perfect Sword Throw              | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| FaBOOlous                        | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Found U                          | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Snowball Fight                   | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Merry Base                       | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Surprise Snowball                | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Angry Turkey                     | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Santa Slips                      | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Easter Creeper                   | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| The Great Egg Hunt               | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Easter Basket                    | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Egg Hunt                         | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Rabbit Costume                   | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Dragon                           | RARE      | 10000                                         |
| Pig Peace                        | RARE      | 10000                                         |
| Angry Cow                        | RARE      | 10000                                         |
| Egg Gunner                       | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Egg Hit                          | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Rabbits in a Basket              | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Pumpkinz                         | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Sweets                           | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Snow Angel                       | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Good Fortune                     | RARE      | 10000                                         |
| Bunny Parkour                    | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Lucky Rabbit                     | RARE      | 10000                                         |
| Spooky Game Over                 | RARE      | Halloween Event Shop                          |
| Season's Greetings               | RARE      | Holidays Event Shop                           |
| Silent Night                     | RARE      | Holidays Event Shop                           |
| Ugly Bed Wars Sweater            | RARE      | Holidays Event Shop                           |
| Golem Picnic                     | RARE      | Easter Event Shop                             |
| Cooler Climates                  | RARE      | Summer Event Shop                             |
| Comfy Web                        | RARE      | Halloween Event Shop                          |
| Casual Christmas                 | RARE      | Holidays Event Shop                           |
| Family Photo (Christmas Edition) | RARE      | Holidays Event Shop                           |
| Flowers For You                  | RARE      | 10000                                         |
| Lazy Spring                      | RARE      | 10000                                         |
| Sand Castle                      | RARE      | 10000                                         |
| Bed Breaker                      | EPIC      | 25000                                         |
| I Love You                       | EPIC      | 25000                                         |
| Bye Bye                          | EPIC      | 25000                                         |
| TNT Drop                         | EPIC      | 25000                                         |
| Candy King                       | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Groovy the Ghost                 | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Starry Veggie                    | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Witch Bouillon                   | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Fake Vampire                     | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Scared                           | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Garlic                           | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Witch Please                     | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Mob Party                        | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Festive Harbinger                | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Sleep Well                       | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Snowball Spammer                 | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Puppy Surprise                   | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Sniper Snowball                  | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Wrong Eggs                       | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Egg Surprise                     | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Golden Egg                       | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Dogs of Wisdom                   | EPIC      | 25000                                         |
| Peaceful                         | EPIC      | 25000                                         |
| Smug Pig                         | EPIC      | 25000                                         |
| Earth Pig                        | EPIC      | 25000                                         |
| Rat Costume                      | EPIC      | 25000                                         |
| Rats 2020                        | EPIC      | 25000                                         |
| Curled Ox                        | EPIC      | 25000                                         |
| Cute Bunny                       | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Egg Time                         | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Distinguished Ghost              | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Spooky Skelington                | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Menorah                          | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Mistletoe                        | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Snow Jerry                       | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Sleeps and Treats                | EPIC      | 25000                                         |
| Easter Sweater                   | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Egg Decorations                  | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Lazy Bunnies                     | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Rabbit Celebration               | EPIC      | 25000                                         |
| Bunny Lantern                    | EPIC      | 25000                                         |
| Monster Under the Bed            | EPIC      | Halloween Event Shop                          |
| Party Crasher                    | EPIC      | Halloween Event Shop                          |
| Pumpkin Farm                     | EPIC      | Halloween Event Shop                          |
| Gingerbread Jerry                | EPIC      | Holidays Event Shop                           |
| One of Us                        | EPIC      | Easter Event Shop                             |
| Buff Chicken                     | EPIC      | Easter Event Shop                             |
| Ice Scream Cart                  | EPIC      | Summer Event Shop                             |
| Jerry Island Poster              | EPIC      | Summer Event Shop                             |
| Undead Lifesaving Association    | EPIC      | Summer Event Shop                             |
| Gothic Jerry                     | EPIC      | Halloween Event Shop                          |
| Haunted Conscience               | EPIC      | Halloween Event Shop                          |
| Angelic Jerry                    | EPIC      | Holidays Event Shop                           |
| Turkey Day                       | EPIC      | Holidays Event Shop                           |
| Bee That Chicken                 | EPIC      | 25000                                         |
| Painted Dragon Egg               | EPIC      | 25000                                         |
| Sea Bass                         | EPIC      | 25000                                         |
| Sloth Burn                       | EPIC      | 25000                                         |
| Surfs Up                         | EPIC      | 25000                                         |
| Carried                          | LEGENDARY | 100000                                        |
| Dragon Slayer                    | LEGENDARY | 100000                                        |
| Loot Chest                       | LEGENDARY | Currently unobtainable!                       |
| VIP                              | LEGENDARY | [VIP]                                         |
| VIP+                             | LEGENDARY | [VIP+]                                        |
| MVP                              | LEGENDARY | [MVP]                                         |
| MVP+                             | LEGENDARY | [MVP+]                                        |
| Doot Doot                        | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| GG WPumpkin                      | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Skeleton Says Hi                 | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Watcher                          | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Snowman Rampage                  | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Chocolate Feast                  | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Sweet Dreams                     | LEGENDARY | 100000                                        |
| Ox Costume                       | LEGENDARY | 100000                                        |
| Trick or Treat                   | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Candy Cane Sniper                | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Chickens                         | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| SaBEEtage                        | LEGENDARY | Easter Event Shop                             |
| Pumpkin Pals                     | LEGENDARY | Halloween Event Shop                          |

## Island Toppers

Exported as `BEDWARS_ISLAND_TOPPERS` (161 entries).

| Name                     | Rarity    | Cost                                          |
| ------------------------ | --------- | --------------------------------------------- |
| Note                     | COMMON    | 5000                                          |
| Sheep                    | COMMON    | 5000                                          |
| Slime                    | COMMON    | 5000                                          |
| TNT                      | COMMON    | 5000                                          |
| Tree                     | COMMON    | 5000                                          |
| Flame                    | COMMON    | 5000                                          |
| Heart                    | COMMON    | 5000                                          |
| Candy Cane               | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Fancy Santa Hat          | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Bunch of Presents        | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Comet the Reindeer       | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Bunny                    | COMMON    | 15,000 (Easter only)/Easter Event Shop        |
| Firework Rocket          | COMMON    | 5000                                          |
| Fountain Firework        | COMMON    | 5000                                          |
| Mark of the Paw          | COMMON    | 5000                                          |
| Year of the Pig          | COMMON    | 5000                                          |
| Sword                    | RARE      | 10000                                         |
| Bomb                     | RARE      | 10000                                         |
| Gong                     | RARE      | 10000                                         |
| Smiley Face              | RARE      | 10000                                         |
| Rubix Cube               | RARE      | 10000                                         |
| Brick House              | RARE      | 10000                                         |
| Candle                   | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Ghost                    | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Sinister Pot             | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Thunder                  | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Gargoyle                 | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Suspicious Tree          | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Wicked Z-type            | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Boo!                     | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Gravestone               | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Witch's Potion           | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Spooky Lantern           | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Wingless Angel           | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Robin                    | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Basket                   | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Carrot                   | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Easter Bell              | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Yin and Yang             | RARE      | 10000                                         |
| Cherry Blossom           | RARE      | 10000                                         |
| Temple                   | RARE      | 10000                                         |
| Lantern                  | RARE      | 10000                                         |
| Candles                  | RARE      | 10000                                         |
| Firecracker              | RARE      | 10000                                         |
| Assassin                 | RARE      | "Assassin" Bed Wars Challenge                 |
| Shopping Cart            | RARE      | "Regular Shopper" Bed Wars Challenge          |
| Invisible Villager       | RARE      | "Invisible Shop" Bed Wars Challenge           |
| Snowflake                | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Leaf                     | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Sapling                  | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Surfboard                | RARE      | Summer Event Shop                             |
| Wave                     | RARE      | Summer Event Shop                             |
| Big Present              | RARE      | Holidays Event Shop                           |
| Gingerbread House        | RARE      | Holidays Event Shop                           |
| Stocking                 | RARE      | Holidays Event Shop                           |
| Pudding                  | RARE      | Holidays Event Shop                           |
| Tall Carrot              | RARE      | 10000                                         |
| Rain Cloud               | RARE      | Easter Event Shop                             |
| Sprout                   | RARE      | Easter Event Shop                             |
| Watermelon               | RARE      | Summer Event Shop                             |
| Spooky Hypixel           | RARE      | Halloween Event Shop                          |
| Pinecone                 | RARE      | Holidays Event Shop                           |
| Nest of Chicks           | RARE      | Easter Event Shop                             |
| Mister Egg               | RARE      | Easter Event Shop                             |
| Fishing Rod              | RARE      | Summer Event Shop                             |
| Bungalow                 | RARE      | Summer Event Shop                             |
| Owl                      | RARE      | Halloween Event Shop                          |
| Birdhouse                | RARE      | Easter Event Shop                             |
| Picnic Basket            | RARE      | Easter Event Shop                             |
| Watering Can             | RARE      | Easter Event Shop                             |
| Rainbow Sheep            | EPIC      | 25000                                         |
| Sunglasses               | EPIC      | 25000                                         |
| Treasure Chest           | EPIC      | 25000                                         |
| Fish Bowl                | EPIC      | 25000                                         |
| Sloth                    | EPIC      | 25000                                         |
| Monocle                  | EPIC      | 25000                                         |
| Clown                    | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Happy Pumpkin            | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Mini Herobrine's Mansion | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Candy Corn               | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Candy Basket             | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Frankenstein             | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Mummy                    | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Devil                    | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Witch's House            | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Magic Snowglobe          | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Bell                     | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Penguin                  | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Easter Egg               | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Rabbit Ears              | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Chocolate Egg            | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Sunflower                | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Temple Hut               | EPIC      | 25000                                         |
| Ox                       | EPIC      | 25000                                         |
| Red Envelope             | EPIC      | 25000                                         |
| Gapple                   | EPIC      | Battle Pass: Season 1                         |
| Skullsword               | EPIC      | Battle Pass: Season 1                         |
| Collector's Chest        | EPIC      | "Collector" Bed Wars Challenge                |
| Toxic Rain               | EPIC      | "Toxic Rain" Bed Wars Challenge               |
| Lazy Miner               | EPIC      | "Lazy Miner" Bed Wars Challenge               |
| Dreidel                  | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Gold Present             | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Penjing                  | EPIC      | 25000                                         |
| Tiger                    | EPIC      | 25000                                         |
| Ladybug                  | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Parasol                  | EPIC      | Summer Event Shop                             |
| Chocolate Bar            | EPIC      | Halloween Event Shop                          |
| Chimney                  | EPIC      | Holidays Event Shop                           |
| Small Rabbit             | EPIC      | 25000                                         |
| Cow                      | EPIC      | Easter Event Shop                             |
| Party Sloth              | EPIC      | Anniversary Bingo                             |
| Crab                     | EPIC      | Summer Event Shop                             |
| Eyeball                  | EPIC      | Halloween Event Shop                          |
| Snowy Cabin              | EPIC      | Holidays Event Shop                           |
| Panda                    | EPIC      | 25000                                         |
| Pagoda                   | EPIC      | 25000                                         |
| Coconut Drink            | EPIC      | Summer Event Shop                             |
| Cyclops                  | EPIC      | Halloween Event Shop                          |
| Witch                    | EPIC      | Halloween Event Shop                          |
| Hot Cocoa                | EPIC      | Holidays Event Shop                           |
| Roast Turkey             | EPIC      | Holidays Event Shop                           |
| Penguin Stack            | EPIC      | Holidays Event Shop                           |
| Snake                    | EPIC      | 25000                                         |
| Hermit Crab              | EPIC      | Summer Event Shop                             |
| Sailboat                 | EPIC      | Summer Event Shop                             |
| Chicken                  | LEGENDARY | 100000                                        |
| Top Hat                  | LEGENDARY | 100000                                        |
| Whale                    | LEGENDARY | 100000                                        |
| Fancy Helmet             | LEGENDARY | 100000                                        |
| Tournament Position      | LEGENDARY | Tournament Hall (50 Tributes)                 |
| Parchment the Skelly     | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Witch Hat                | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Skeleton Thumbs Up       | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Werewolf                 | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Reaper                   | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| L                        | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Humongous Christmas Tree | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Sleigh                   | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Snowman                  | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Hatching Egg             | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Tulips                   | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Lunar Dragon             | LEGENDARY | 100000                                        |
| Dragon Head              | LEGENDARY | 100000                                        |
| Champion's Chalice       | LEGENDARY | Battle Pass: Season 1                         |
| Heartbleed               | LEGENDARY | "Ultimate UHC" Bed Wars Challenge             |
| Magic Bunny              | LEGENDARY | "Sleight of Hand" Bed Wars Challenge          |
| Ballista                 | LEGENDARY | "Marksman" Bed Wars Challenge                 |
| Traffic Light            | LEGENDARY | "Red Light, Green Light" Bed Wars Challenge   |
| Assassin's Blade         | LEGENDARY | "Master Assassin" Bed Wars Challenge          |
| Presidential Goons       | LEGENDARY | "Protect The President" Bed Wars Challenge    |
| Nutcracker               | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Ramen                    | LEGENDARY | 100000                                        |
| Bee                      | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Bluebird                 | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Demon                    | LEGENDARY | Halloween Event Shop                          |
| Zombie Hand              | LEGENDARY | Halloween Event Shop                          |
| Large Rabbit             | LEGENDARY | 100000                                        |
| Hypixel Knight           | LEGENDARY | Anniversary Bingo                             |
| Sand Castle              | LEGENDARY | Summer Event Shop                             |
| Chocolate Bunny          | LEGENDARY | Easter Event Shop                             |
| Flamingo                 | LEGENDARY | Summer Event Shop                             |

## Glyphs

Exported as `BEDWARS_GLYPHS` (114 entries).

| Name                | Rarity    | Cost                                          |
| ------------------- | --------- | --------------------------------------------- |
| Iron                | COMMON    | 5000                                          |
| Gold                | COMMON    | 5000                                          |
| Diamond             | COMMON    | 5000                                          |
| Emerald             | COMMON    | 5000                                          |
| Thumbs Down         | COMMON    | 5000                                          |
| Thumbs Up           | COMMON    | 5000                                          |
| Hi                  | COMMON    | 5000                                          |
| Storm               | COMMON    | 5000                                          |
| Sword               | COMMON    | 5000                                          |
| Yes                 | COMMON    | 5000                                          |
| Burn                | COMMON    | 5000                                          |
| Daisy               | COMMON    | 5000                                          |
| No                  | COMMON    | 5000                                          |
| Bronze Shield       | COMMON    | 5000                                          |
| Silver Shield       | COMMON    | 5000                                          |
| Gold Shield         | COMMON    | 5000                                          |
| Star                | COMMON    | 5000                                          |
| Candy Cane          | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Christmas Tree      | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Gift                | COMMON    | 15,000 (Holidays only)/Holidays Event Shop    |
| Bunny               | COMMON    | 15,000 (Easter only)/Easter Event Shop        |
| Big Smile           | COMMON    | 15,000 (Easter only)/Easter Event Shop        |
| Chick               | COMMON    | 15,000 (Easter only)/Easter Event Shop        |
| Celebration Popper  | COMMON    | 5000                                          |
| Lantern             | COMMON    | 5000                                          |
| Pig                 | COMMON    | 5000                                          |
| Squeak              | COMMON    | 5000                                          |
| Lion Dancer         | COMMON    | 5000                                          |
| Bed                 | RARE      | 10000                                         |
| GG                  | RARE      | 10000                                         |
| Smiley Face         | RARE      | 10000                                         |
| Spectrum            | RARE      | 10000                                         |
| Lol                 | RARE      | 10000                                         |
| TNT                 | RARE      | 10000                                         |
| Ghostly Ghost       | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Hall-o-ween         | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Spider              | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Evil Pumpkin        | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Cute Pumpkin        | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Grave               | RARE      | Halloween Event Shop                          |
| Super Snow Golem    | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Gingerbread Man     | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Holly               | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Bauble              | RARE      | Holidays Event Shop                           |
| Pilgrim Hat         | RARE      | Holidays Event Shop                           |
| Quack               | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Bloom               | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Bunny Guy           | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Party               | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Hot Cross Bun       | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Easter Flower       | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Carrot              | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Blossom             | RARE      | 10000                                         |
| Orange              | RARE      | 10000                                         |
| Earth               | RARE      | 10000                                         |
| Sparkle             | RARE      | 10000                                         |
| Lunar Gold          | RARE      | 10000                                         |
| Lucky Rabbit        | RARE      | 10000                                         |
| Coconut             | RARE      | Summer Event Shop                             |
| Flame               | RARE      | Summer Event Shop                             |
| Shell               | RARE      | Summer Event Shop                             |
| Heart               | EPIC      | 25000                                         |
| Angry Face          | EPIC      | 25000                                         |
| Creeper Scream      | EPIC      | 25000                                         |
| Skull               | EPIC      | 25000                                         |
| Shock Face          | EPIC      | 25000                                         |
| Winky Face          | EPIC      | 25000                                         |
| Scream Face         | EPIC      | 25000                                         |
| Bat                 | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Candy               | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Eyeball             | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Witch Hat           | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Candy Corn          | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Black Cat           | EPIC      | Halloween Event Shop                          |
| Cauldron            | EPIC      | Halloween Event Shop                          |
| Hype the Elf        | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Santa Hat           | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Dreidel             | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Menorah             | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Snowflake           | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Festive Bell        | EPIC      | Holidays Event Shop                           |
| Easter Egg          | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Chocolate Egg       | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Egg Basket          | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Rabbit              | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Dog                 | EPIC      | 25000                                         |
| Dragon              | EPIC      | 25000                                         |
| Rose                | EPIC      | 25000                                         |
| Mouse               | EPIC      | 25000                                         |
| Fai Chun            | EPIC      | 25000                                         |
| Red Envelope        | EPIC      | 25000                                         |
| Strawberry          | EPIC      | Summer Event Shop                             |
| Palm Tree           | EPIC      | Summer Event Shop                             |
| HOT                 | EPIC      | Summer Event Shop                             |
| Umbrella            | EPIC      | Summer Event Shop                             |
| Cry Face            | LEGENDARY | 100000                                        |
| #1                  | LEGENDARY | 100000                                        |
| RIP                 | LEGENDARY | 100000                                        |
| Chicken             | LEGENDARY | 100000                                        |
| Rainbow             | LEGENDARY | 100000                                        |
| Evil Kitty          | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Very Evil Pumpkin   | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Cute Ghost          | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| Reindeer            | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Stocking            | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Wreath              | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Chocolate           | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| This is Fine        | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Egg with Bow        | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Sunflower           | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Chinese Firecracker | LEGENDARY | 100000                                        |
| Moon                | LEGENDARY | 100000                                        |
| Tiger               | LEGENDARY | 100000                                        |
| Player Face         | LEGENDARY | Slumber Hotel                                 |

## Shopkeeper Skins

Exported as `BEDWARS_SHOPKEEPER_SKINS` (86 entries).

| Name                       | Rarity    | Cost                                          |
| -------------------------- | --------- | --------------------------------------------- |
| Blacksmith                 | COMMON    | (none)                                        |
| Skeleton                   | COMMON    | 5000                                          |
| Zombie Pigman              | COMMON    | 5000                                          |
| Zombie                     | COMMON    | 5000                                          |
| Villager Zombie            | COMMON    | 5000                                          |
| Wither Skeleton            | COMMON    | 5000                                          |
| Blaze                      | COMMON    | 5000                                          |
| Bed Salesman               | COMMON    | 5000                                          |
| Holiday Bartender          | COMMON    | 5000                                          |
| Magic Vendor               | COMMON    | 5000                                          |
| Chen                       | COMMON    | 5000                                          |
| Li                         | COMMON    | 5000                                          |
| Xiu                        | COMMON    | 5000                                          |
| Zhao                       | COMMON    | 5000                                          |
| Stellar                    | COMMON    | 5000                                          |
| Creeper                    | RARE      | 10000                                         |
| Witch                      | RARE      | 10000                                         |
| Bed Researcher             | RARE      | 10000                                         |
| King of Beds               | RARE      | 10000                                         |
| Snowman                    | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Bao                        | RARE      | 10000                                         |
| Wei                        | RARE      | 10000                                         |
| Egg Delivery               | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Killer                     | RARE      | 30,000 (Halloween only)/Halloween Event Shop  |
| Cheesy                     | RARE      | Lunar New Year Quest                          |
| Bunny Costume              | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Present Man                | RARE      | 30,000 (Holidays only)/Holidays Event Shop    |
| Blue Sheep Pajamas         | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Purple Pig Pajamas         | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Red Frog Pajamas           | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Green Cow Pajamas          | RARE      | 30,000 (Easter only)/Easter Event Shop        |
| Slumber Hotel Receptionist | RARE      | Slumber Hotel                                 |
| Frog Man                   | RARE      | Summer Event Shop                             |
| Evil Eye                   | EPIC      | 25000                                         |
| Ender Pulse                | EPIC      | 25000                                         |
| Santa                      | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Holiday Tree               | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Lucky Cat                  | EPIC      | 25000                                         |
| Cute Puppy                 | EPIC      | 25000                                         |
| Enderman                   | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Mr. Giftman                | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Mouse                      | EPIC      | 25000                                         |
| Bunny in a Suit            | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Skeletor                   | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Watcher                    | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Upside Down Snowman        | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Penguin                    | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Aqua Duck Pajamas          | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Pink Bunny Pajamas         | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Pink Rabbit                | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Blue Rabbit                | EPIC      | 75,000 (Easter only)/Easter Event Shop        |
| Ghost                      | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Scarecrow                  | EPIC      | 75,000 (Halloween only)/Halloween Event Shop  |
| Lumberjack                 | EPIC      | "Woodworker" Bed Wars Challenge               |
| Warrior                    | EPIC      | "Warmonger" Bed Wars Challenge                |
| Reindeer                   | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Grinch                     | EPIC      | 75,000 (Holidays only)/Holidays Event Shop    |
| Bright Tiger               | EPIC      | 25000                                         |
| Man Wearing Suit           | EPIC      | Slumber Hotel                                 |
| Ratman                     | EPIC      | Slumber Hotel                                 |
| Spaceman                   | EPIC      | Slumber Hotel                                 |
| Hammer                     | EPIC      | Slumber Hotel                                 |
| Heatwave                   | EPIC      | Slumber Hotel                                 |
| John Indigos               | EPIC      | Slumber Hotel                                 |
| Oasis Spirit               | EPIC      | Slumber Hotel                                 |
| Lester Brody               | EPIC      | Slumber Hotel                                 |
| Bundled Snowman            | EPIC      | Holidays Event Shop                           |
| Dark Dragon                | EPIC      | Summer Event Shop                             |
| Ice Queen                  | EPIC      | Holidays Event Shop                           |
| Astronaut                  | LEGENDARY | 100000                                        |
| Toonywise                  | LEGENDARY | 300,000 (Halloween only)/Halloween Event Shop |
| You!                       | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Quack                      | LEGENDARY | 300,000 (Easter only)/Easter Event Shop       |
| Wither                     | LEGENDARY | Halloween Bundle                              |
| Rudolph                    | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Cluck Stack                | LEGENDARY | Tournament Hall (200 Tributes)                |
| Dragon                     | LEGENDARY | 100000                                        |
| Sacred Cattle              | LEGENDARY | 100000                                        |
| Defuser                    | LEGENDARY | "Defuser" Bed Wars Challenge                  |
| Marksman                   | LEGENDARY | "Marksman" Bed Wars Challenge                 |
| President Sloth            | LEGENDARY | "Protect the President" Bed Wars Challenge    |
| Patriotic Eagle            | LEGENDARY | "Patriot" Bed Wars Challenge                  |
| Merchant                   | LEGENDARY | "Capped Resources" Bed Wars Challenge         |
| Elf with Snow Globe        | LEGENDARY | 300,000 (Holidays only)/Holidays Event Shop   |
| Gold Tiger                 | LEGENDARY | 100000                                        |
| Wither Tower               | LEGENDARY | Slumber Hotel                                 |

## Wood Skins

Exported as `BEDWARS_WOOD_SKINS` (12 entries).

| Name           | Rarity    | Cost                           |
| -------------- | --------- | ------------------------------ |
| Oak Plank      | COMMON    | (none)                         |
| Spruce Plank   | RARE      | [VIP]                          |
| Birch Plank    | RARE      | [VIP+]                         |
| Jungle Plank   | EPIC      | [MVP]                          |
| Acacia Plank   | EPIC      | [MVP+]                         |
| Dark Oak Plank | LEGENDARY | [MVP++]                        |
| Oak Log        | LEGENDARY | Tournament Hall (100 Tributes) |
| Spruce Log     | LEGENDARY | (none)                         |
| Birch Log      | LEGENDARY | (none)                         |
| Jungle Log     | LEGENDARY | (none)                         |
| Acacia Log     | LEGENDARY | (none)                         |
| Dark Oak Log   | LEGENDARY | (none)                         |

## Figurines

Exported as `BEDWARS_FIGURINES` (52 entries).

| Name               | Rarity    | Cost           |
| ------------------ | --------- | -------------- |
| Sky Island         | COMMON    | Ticket Machine |
| Grass Block        | COMMON    | Ticket Machine |
| Nether Portal      | COMMON    | Ticket Machine |
| Fireballs          | COMMON    | Ticket Machine |
| Sniper             | COMMON    | Ticket Machine |
| Diamonds           | COMMON    | Ticket Machine |
| Diamond Hoe        | COMMON    | Ticket Machine |
| Groopo             | COMMON    | Ticket Machine |
| Missing Bed        | COMMON    | Ticket Machine |
| Alchemy            | COMMON    | Ticket Machine |
| Shears             | COMMON    | Ticket Machine |
| Alex               | COMMON    | Ticket Machine |
| Crossed Swords     | COMMON    | Ticket Machine |
| Zombie             | COMMON    | Ticket Machine |
| Creeper            | COMMON    | Ticket Machine |
| Guardian           | COMMON    | Ticket Machine |
| Fishing Rod        | COMMON    | Ticket Machine |
| Housing            | COMMON    | Ticket Machine |
| Ender Pearl        | COMMON    | Ticket Machine |
| The Pit            | COMMON    | Ticket Machine |
| Golden Apple       | COMMON    | Ticket Machine |
| Bridge Egg         | COMMON    | Ticket Machine |
| Dante              | COMMON    | Ticket Machine |
| Hypixel Server     | COMMON    | Ticket Machine |
| The Delivery Man   | COMMON    | Ticket Machine |
| Hot Air Balloon    | COMMON    | Ticket Machine |
| Steve              | COMMON    | Ticket Machine |
| Sheep              | COMMON    | Ticket Machine |
| Don Espresso       | COMMON    | Slumber Hotel  |
| Sandman            | COMMON    | Slumber Hotel  |
| Tic Tac Toe        | RARE      | Ticket Machine |
| Bed Defense        | RARE      | Ticket Machine |
| Top Killer         | RARE      | Ticket Machine |
| Iron Punch         | RARE      | Ticket Machine |
| Iron Rose          | RARE      | Ticket Machine |
| Emeralds           | RARE      | Ticket Machine |
| TNT                | RARE      | Ticket Machine |
| Hypixel            | RARE      | Ticket Machine |
| Enderman           | RARE      | Ticket Machine |
| Rezzus             | RARE      | Ticket Machine |
| Blitz Star         | RARE      | Slumber Hotel  |
| Hammer vs Heatwave | RARE      | Slumber Hotel  |
| Ratman in the City | RARE      | Slumber Hotel  |
| Magma Boss         | LEGENDARY | Ticket Machine |
| Cerberus           | LEGENDARY | Ticket Machine |
| Legacy Statues     | LEGENDARY | Ticket Machine |
| Bed Destroyer      | LEGENDARY | Ticket Machine |
| Knockback          | LEGENDARY | Ticket Machine |
| Dragon Slayer      | LEGENDARY | Ticket Machine |
| Build Battle       | LEGENDARY | Ticket Machine |
| Kart Racing        | LEGENDARY | Slumber Hotel  |
| Executives Meeting | LEGENDARY | Slumber Hotel  |

