import { Story } from "./story";

export interface Game {
  story: Story;
  currentScene: number;
  rewardCoins: number;
}
