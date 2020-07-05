import { Progress } from "../types/progress";
import { dummyStory1, dummyStory2 } from "./stories";

const dummyProgress1: Progress = {
  story: dummyStory1,
  pausedScene: 2,
  timeSpent: 2.3,
};

const dummyProgress2: Progress = {
  story: dummyStory2,
  pausedScene: 1,
  timeSpent: 1.8,
};

export { dummyProgress1, dummyProgress2 };
