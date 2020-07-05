import { Story } from "./story";

export interface Progress {
  story: Story;
  pausedScene: number;
  timeSpent: number; // in hours
}
