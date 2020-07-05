import { Employee } from "../types/employee";
import { dummyUser1, dummyUser2 } from "./users";
import { dummyProgress1, dummyProgress2 } from "./progress";

export const dummyEmployee1: Employee = {
  user: dummyUser1,
  trainingProgress: [dummyProgress1, dummyProgress2],
};

export const dummyEmployee2: Employee = {
  user: dummyUser2,
  trainingProgress: [dummyProgress1, dummyProgress2],
};
