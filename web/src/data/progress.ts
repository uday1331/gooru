import { Progress } from "../types/progress";
import { dummyUser3 } from "./users";
import { dummyStory1, dummyStory2 } from "./stories";

export const dummyProgress1: Progress = {
  story: dummyStory1,
  pausedScene: 1,
};

export const dummyProgress2: Progress = {
  story: dummyStory2,
  pausedScene: 1,
};
