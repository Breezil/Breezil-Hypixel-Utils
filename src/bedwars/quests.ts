/**
 * Bed Wars quests and in-game challenges reference data.
 *
 * Contains the daily and weekly Bed Wars quests with their rewards
 * (Hypixel Experience, Bed Wars Experience, Bed Wars Tokens), plus the
 * in-game challenges that award Hypixel Experience. Pure data, no runtime
 * or network logic.
 */

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

export const BEDWARS_QUESTS: readonly BedWarsQuest[] = [
  {
    type: "Daily",
    title: "First Win of the Day",
    description: "Win a game of Bed Wars",
    rewards: {
      hypixelExperience: 3850,
      bedwarsExperience: 250,
      bedwarsTokens: 250,
    },
  },
  {
    type: "Daily",
    title: "One More Game!",
    description: "Play 3 games of Bed Wars",
    rewards: {
      hypixelExperience: 3850,
      bedwarsExperience: 250,
      bedwarsTokens: 250,
    },
  },
  {
    type: "Daily",
    title: "Painsomnia",
    description: "Break 3 beds in Bed Wars",
    rewards: {
      hypixelExperience: 3850,
      bedwarsExperience: 250,
      bedwarsTokens: 250,
    },
  },
  {
    type: "Daily",
    title: "Head Hunter",
    description: "Final Kill 15 players in Bed Wars",
    rewards: {
      hypixelExperience: 3850,
      bedwarsExperience: 250,
      bedwarsTokens: 250,
    },
  },
  {
    type: "Weekly",
    title: "Bed Removal Co.",
    description: "Break 25 Beds in Bed Wars",
    rewards: {
      hypixelExperience: 7700,
      bedwarsExperience: 5000,
      bedwarsTokens: 5000,
    },
  },
  {
    type: "Weekly",
    title: "Sleep Tight.",
    description: "Win 10 dream games in Bed Wars",
    rewards: {
      hypixelExperience: 7700,
      bedwarsExperience: 5000,
      bedwarsTokens: 5000,
    },
  },
  {
    type: "Weekly",
    title: "Challenger",
    description: "Complete 5 Bed Wars Challenges",
    rewards: {
      hypixelExperience: 7700,
      bedwarsExperience: 5000,
      bedwarsTokens: 5000,
    },
  },
  {
    type: "Weekly",
    title: "Finishing The Job",
    description: "Final Kill 150 players in Bed Wars",
    rewards: {
      hypixelExperience: 7700,
      bedwarsExperience: 5000,
      bedwarsTokens: 5000,
    },
  },
] as const;

export interface BedWarsInGameChallenge {
  readonly title: string;
  readonly description: string;
  readonly hypixelExperience: number;
}

export const BEDWARS_IN_GAME_CHALLENGES: readonly BedWarsInGameChallenge[] = [
  {
    title: "Defensive",
    description: "Defend your bed against 5 attackers in a single game.",
    hypixelExperience: 3700,
  },
  {
    title: "Support",
    description: "Collect 10 diamonds from generators in a single game.",
    hypixelExperience: 3700,
  },
  {
    title: "Offensive",
    description: "Destroy 2 beds in a single game.",
    hypixelExperience: 3700,
  },
] as const;

