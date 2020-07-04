import { User } from "./user";
import { Scene } from "./scene";

export interface Story {
  title: string;
  creator: User;
  assigneeList: User[];
  scenes: Scene[];
  lastUpdated: Date;
}
