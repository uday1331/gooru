import { User } from "./user";
import { Progress } from "./progress";

export interface Employee {
  user: User;
  trainingProgress: Progress[];
}
