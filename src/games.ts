/**
 * Hypixel games and their modes.
 *
 * Every game Hypixel still runs, with the modes it reports in a player's
 * location (`mode`), named as Hypixel names them. Taken from Hypixel's own
 * games resource (`/v2/resources/games`); games Hypixel retired are left out.
 */

/** One way to play a game, as in TNT Tag within The TNT Games. */
export interface HypixelGameMode {
  /** The id Hypixel reports as the location's `mode`, as in `TNTAG`. */
  readonly id: string;
  readonly name: string;
}

/** A Hypixel game, as in Bed Wars or The TNT Games. */
export interface HypixelGame {
  /** The id Hypixel reports as the location's `serverType`, as in `BEDWARS`. */
  readonly type: string;
  readonly name: string;
  /** Played from the Classic Games lobby. */
  readonly legacy: boolean;
  readonly modes: readonly HypixelGameMode[];
}

export const HYPIXEL_GAMES: readonly HypixelGame[] = [
  {
    type: "ARCADE",
    name: "Arcade",
    legacy: false,
    modes: [
      { id: "DAYONE", name: "Blocking Dead" },
      { id: "ONEINTHEQUIVER", name: "Bounty Hunters" },
      { id: "DEFENDER", name: "Creeper Defense" },
      { id: "DRAGONWARS2", name: "Dragon Wars" },
      { id: "ENDER", name: "Ender Spleef" },
      { id: "SOCCER", name: "Football" },
      { id: "STARWARS", name: "Galaxy Wars" },
      { id: "GRINCH_SIMULATOR_V2", name: "Grinch Simulator" },
      { id: "SIMON_SAYS", name: "Hypixel Says" },
      { id: "PARTY", name: "Party Games" },
      { id: "DRAW_THEIR_THING", name: "Pixel Painters" },
    ],
  },
  {
    type: "ARENA",
    name: "Arena Brawl",
    legacy: true,
    modes: [],
  },
  {
    type: "BEDWARS",
    name: "Bed Wars",
    legacy: false,
    modes: [
      { id: "BEDWARS_FOUR_THREE", name: "3v3v3v3" },
      { id: "BEDWARS_TWO_FOUR", name: "4v4" },
      { id: "BEDWARS_TWO_FOUR_TOURNEY", name: "4v4 (Tournament)" },
      { id: "BEDWARS_FOUR_FOUR", name: "4v4v4v4" },
      { id: "BEDWARS_FOUR_FOUR_TOURNEY", name: "4v4v4v4 (Tournament)" },
      { id: "BEDWARS_FOUR_FOUR_ARMED", name: "Armed 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_ARMED", name: "Armed Doubles" },
      { id: "BEDWARS_TWO_ONE_DUELS_RUSH", name: "Bed Rush Duel" },
      { id: "BEDWARS_TWO_ONE_DUELS", name: "Bed Wars Duel" },
      { id: "BEDWARS_CASTLE", name: "Castle" },
      { id: "BEDWARS_EIGHT_TWO", name: "Doubles" },
      { id: "BEDWARS_EIGHT_TWO_TOURNEY", name: "Doubles (Tournament)" },
      { id: "BEDWARS_FOUR_FOUR_LUCKY", name: "Lucky 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_LUCKY", name: "Lucky Doubles" },
      { id: "BEDWARS_EIGHT_ONE_ONEBLOCK", name: "One Block" },
      { id: "BEDWARS_PRACTICE", name: "Practice" },
      { id: "BEDWARS_FOUR_FOUR_RUSH", name: "Rush 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_RUSH", name: "Rush Doubles" },
      { id: "BEDWARS_EIGHT_ONE_RUSH", name: "Rush Solo" },
      { id: "BEDWARS_EIGHT_ONE", name: "Solo" },
      { id: "BEDWARS_FOUR_FOUR_SWAP", name: "Swappage 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_SWAP", name: "Swappage Doubles" },
      { id: "BEDWARS_FOUR_FOUR_ULTIMATE", name: "Ultimate 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_ULTIMATE", name: "Ultimate Doubles" },
      { id: "BEDWARS_EIGHT_ONE_ULTIMATE", name: "Ultimate Solo" },
      { id: "BEDWARS_FOUR_FOUR_UNDERWORLD", name: "Underworld 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_UNDERWORLD", name: "Underworld Doubles" },
      { id: "BEDWARS_FOUR_FOUR_VOIDLESS", name: "Voidless 4v4v4v4" },
      { id: "BEDWARS_EIGHT_TWO_VOIDLESS", name: "Voidless Doubles" },
    ],
  },
  {
    type: "SURVIVAL_GAMES",
    name: "Blitz Survival Games",
    legacy: false,
    modes: [
      { id: "solo_normal", name: "Solo" },
      { id: "teams_normal", name: "Teams" },
      { id: "teams_tourney", name: "Teams (Tournament)" },
    ],
  },
  {
    type: "BUILD_BATTLE",
    name: "Build Battle",
    legacy: false,
    modes: [
      { id: "BUILD_BATTLE_CHRISTMAS", name: "Christmas" },
      { id: "BUILD_BATTLE_GUESS_THE_BUILD", name: "Guess The Build" },
      { id: "BUILD_BATTLE_HALLOWEEN", name: "Halloween Hyper" },
      { id: "BUILD_BATTLE_CHRISTMAS_NEW_SOLO", name: "Holiday Solo" },
      { id: "BUILD_BATTLE_CHRISTMAS_NEW_TEAMS", name: "Holiday Teams" },
      { id: "BUILD_BATTLE_SOLO_PRO", name: "Pro" },
      { id: "BUILD_BATTLE_SOLO_NORMAL", name: "Solo" },
      { id: "BUILD_BATTLE_SOLO_NORMAL_LATEST", name: "Solo (1.14+)" },
      { id: "BUILD_BATTLE_SPEED_BUILDERS", name: "Speed Builders" },
      { id: "BUILD_BATTLE_TEAMS_NORMAL", name: "Teams" },
    ],
  },
  {
    type: "LEGACY",
    name: "Classic Games",
    legacy: false,
    modes: [],
  },
  {
    type: "MCGO",
    name: "Cops and Crims",
    legacy: false,
    modes: [{ id: "DEFUSAL_TOURNEY", name: "Defusal (Tournament)" }],
  },
  {
    type: "DUELS",
    name: "Duels",
    legacy: false,
    modes: [
      { id: "DUELS_BLITZ_DUEL", name: "Blitz Duel" },
      { id: "DUELS_BOW_DUEL", name: "Bow Duel" },
      { id: "DUELS_BOWSPLEEF_DUEL", name: "Bow Spleef Duel" },
      { id: "DUELS_BOXING_DUEL", name: "Boxing Duel" },
      { id: "DUELS_BRIDGE_THREES", name: "Bridge 3v3" },
      { id: "DUELS_CAPTURE_THREES", name: "Bridge CTF 3v3" },
      { id: "DUELS_CLASSIC_DOUBLES", name: "Classic Doubles" },
      { id: "DUELS_CLASSIC_DUEL", name: "Classic Duel" },
      { id: "DUELS_COMBO_DUEL", name: "Combo Duel" },
      { id: "DUELS_DUEL_ARENA", name: "Duel Arena" },
      { id: "DUELS_MW_DOUBLES", name: "Mega Walls Doubles" },
      { id: "DUELS_MW_DUEL", name: "Mega Walls Duel" },
      { id: "DUELS_MW_FOUR", name: "Mega Walls Teams" },
      { id: "DUELS_POTION_DUEL", name: "NoDebuff Duel" },
      { id: "DUELS_OP_DOUBLES", name: "OP Doubles" },
      { id: "DUELS_OP_DUEL", name: "OP Duel" },
      { id: "DUELS_PARKOUR_EIGHT", name: "Parkour" },
      { id: "DUELS_QUAKE_DUEL", name: "Quakecraft Duel" },
      { id: "DUELS_SW_TOURNAMENT", name: "SkyWars Championship" },
      { id: "DUELS_SW_DOUBLES", name: "SkyWars Doubles" },
      { id: "DUELS_SW_DUEL", name: "SkyWars Duel" },
      { id: "DUELS_SW_FOUR", name: "SkyWars Teams" },
      { id: "DUELS_SPLEEF_DUEL", name: "Spleef Duel" },
      { id: "DUELS_SUMO_TOURNAMENT", name: "Sumo Championship" },
      { id: "DUELS_SUMO_DUEL", name: "Sumo Duel" },
      { id: "DUELS_BRIDGE_2V2V2V2", name: "The Bridge 2v2v2v2" },
      { id: "DUELS_BRIDGE_3V3V3V3", name: "The Bridge 3v3v3v3" },
      { id: "DUELS_BRIDGE_TOURNAMENT", name: "The Bridge Championship" },
      { id: "DUELS_BRIDGE_DOUBLES", name: "The Bridge Doubles" },
      { id: "DUELS_BRIDGE_DUEL", name: "The Bridge Duel" },
      { id: "DUELS_BRIDGE_FOUR", name: "The Bridge Teams" },
      { id: "DUELS_UHC_TOURNAMENT", name: "UHC Championship" },
      { id: "DUELS_UHC_MEETUP", name: "UHC Deathmatch" },
      { id: "DUELS_UHC_DOUBLES", name: "UHC Doubles" },
      { id: "DUELS_UHC_DUEL", name: "UHC Duel" },
      { id: "DUELS_UHC_FOUR", name: "UHC Teams" },
    ],
  },
  {
    type: "HOUSING",
    name: "Housing",
    legacy: false,
    modes: [],
  },
  {
    type: "WALLS3",
    name: "Mega Walls",
    legacy: false,
    modes: [],
  },
  {
    type: "MURDER_MYSTERY",
    name: "Murder Mystery",
    legacy: false,
    modes: [
      { id: "MURDER_ASSASSINS", name: "Assassins" },
      { id: "MURDER_CLASSIC", name: "Classic" },
      { id: "MURDER_DOUBLE_UP", name: "Double Up" },
      { id: "MURDER_INFECTION", name: "Infection" },
    ],
  },
  {
    type: "PAINTBALL",
    name: "Paintball",
    legacy: true,
    modes: [],
  },
  {
    type: "PIT",
    name: "Pit",
    legacy: false,
    modes: [],
  },
  {
    type: "PROTOTYPE",
    name: "Prototype",
    legacy: false,
    modes: [
      { id: "RAVENGARD_DUNGEON_TRIO", name: "Ravengard Dungeon Trios" },
      { id: "RAVENGARD_HUB", name: "Ravengard Hub" },
      { id: "RAVENGARD_TUTORIAL", name: "Ravengard Tutorial" },
    ],
  },
  {
    type: "QUAKECRAFT",
    name: "Quakecraft",
    legacy: true,
    modes: [
      { id: "solo", name: "Solo" },
      { id: "solo_tourney", name: "Solo (Tournament)" },
      { id: "teams", name: "Teams" },
    ],
  },
  {
    type: "REPLAY",
    name: "Replay",
    legacy: false,
    modes: [],
  },
  {
    type: "SKYBLOCK",
    name: "SkyBlock",
    legacy: false,
    modes: [
      { id: "fishing_1", name: "Backwater Bayou" },
      { id: "combat_2", name: "Blazing Fortress" },
      { id: "crismon_isle", name: "Crimson Isle" },
      { id: "crystal_hollows", name: "Crystal Hollows" },
      { id: "dark_auction", name: "Dark Auction" },
      { id: "mining_2", name: "Deep Caverns" },
      { id: "dungeon", name: "Dungeons" },
      { id: "mining_3", name: "Dwarven Mines" },
      { id: "foraging_2", name: "Galatea" },
      { id: "mining_1", name: "Gold Mine" },
      { id: "hub", name: "Hub" },
      { id: "winter", name: "Jerry's Workshop" },
      { id: "instanced", name: "Kuudra's Hollow" },
      { id: "dynamic", name: "Private Island" },
      { id: "combat_1", name: "Spider's Den" },
      { id: "combat_3", name: "The End" },
      { id: "farming_1", name: "The Farming Islands" },
      { id: "garden", name: "The Garden" },
      { id: "foraging_1", name: "The Park" },
    ],
  },
  {
    type: "SKYWARS",
    name: "SkyWars",
    legacy: false,
    modes: [
      { id: "teams_insane_tourney", name: "Doubles Insane (Tournament)" },
      { id: "teams_normal_tourney", name: "Doubles Normal (Tournament)" },
      { id: "mega_normal", name: "Mega" },
      { id: "mega_doubles", name: "Mega Doubles" },
      { id: "ranked_normal", name: "Ranked" },
      { id: "solo_crazyinsane", name: "Solo Crazy Insane (Tournament)" },
      { id: "solo_insane_hunters_vs_beasts", name: "Solo Hunters vs Beasts" },
      { id: "solo_insane", name: "Solo Insane" },
      { id: "solo_insane_lucky", name: "Solo Lucky Block" },
      { id: "solo_normal", name: "Solo Normal" },
      { id: "solo_insane_rush", name: "Solo Rush" },
      { id: "solo_insane_slime", name: "Solo Slime" },
      { id: "solo_insane_tnt_madness", name: "Solo TNT Madness" },
      { id: "teams_insane", name: "Teams Insane" },
      { id: "teams_insane_lucky", name: "Teams Lucky Block" },
      { id: "teams_normal", name: "Teams Normal" },
      { id: "teams_insane_rush", name: "Teams Rush" },
      { id: "teams_insane_slime", name: "Teams Slime" },
      { id: "teams_insane_tnt_madness", name: "Teams TNT Madness" },
    ],
  },
  {
    type: "SUPER_SMASH",
    name: "Smash Heroes",
    legacy: false,
    modes: [
      { id: "1v1_normal", name: "1v1" },
      { id: "2v2_normal", name: "2v2" },
      { id: "friends_normal", name: "Friends" },
      { id: "solo_normal", name: "Solo" },
      { id: "teams_normal", name: "Teams" },
    ],
  },
  {
    type: "SMP",
    name: "SMP",
    legacy: false,
    modes: [],
  },
  {
    type: "SPEED_UHC",
    name: "Speed UHC",
    legacy: false,
    modes: [],
  },
  {
    type: "TNTGAMES",
    name: "The TNT Games",
    legacy: false,
    modes: [
      { id: "BOWSPLEEF", name: "Bow Spleef" },
      { id: "PVPRUN", name: "PVP Run" },
      { id: "TEAMS_NORMAL", name: "Teams Mode" },
      { id: "TNTRUN", name: "TNT Run" },
      { id: "TNTRUN_TOURNEY", name: "TNT Run Tourney" },
      { id: "TNTAG", name: "TNT Tag" },
      { id: "CAPTURE", name: "Wizards" },
    ],
  },
  {
    type: "GINGERBREAD",
    name: "Turbo Kart Racers",
    legacy: false,
    modes: [],
  },
  {
    type: "UHC",
    name: "UHC Champions",
    legacy: false,
    modes: [],
  },
  {
    type: "VAMPIREZ",
    name: "VampireZ",
    legacy: true,
    modes: [],
  },
  {
    type: "WALLS",
    name: "Walls",
    legacy: true,
    modes: [],
  },
  {
    type: "BATTLEGROUND",
    name: "Warlords",
    legacy: false,
    modes: [
      { id: "ctf_mini", name: "Capture the Flag" },
      { id: "DOM", name: "Domination" },
      { id: "TDM", name: "Team Deathmatch" },
    ],
  },
  {
    type: "WOOL_GAMES",
    name: "Wool Games",
    legacy: false,
    modes: [
      { id: "capture_the_wool_two_twenty", name: "Capture the Wool" },
      { id: "sheep_wars_two_six", name: "Sheep Wars" },
      { id: "wool_wars_two_four", name: "Wool Wars" },
      { id: "wool_wars_two_four_tourney", name: "Wool Wars (Tournament)" },
    ],
  },
];

/** A game by the `serverType` Hypixel reports, or null for one not listed. */
export function hypixelGame(
  type: string | null | undefined,
): HypixelGame | null {
  const wanted = (type ?? "").toUpperCase();
  return HYPIXEL_GAMES.find((game) => game.type === wanted) ?? null;
}

