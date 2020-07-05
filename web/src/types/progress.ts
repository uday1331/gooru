import { Story } from "./story";
import { User } from "./user";

export interface Progress {
  assignee: User;
  story: Story;
  pausedScene: number;
}
