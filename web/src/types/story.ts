import { User } from "./user";
import { Scene } from "./scene";

export interface Story {
  name: string;
  creator: User;
  assigneeList: User[];
  scenes: Scene[];
  lastUpdated: string;
}
