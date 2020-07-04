import { User } from "./user";
import { Scene } from "./scene";

export interface Story {
  title: string;
  creator: User;
  assignees: User[];
  scenes: Scene[];
  lastUpdated: Date;
}
