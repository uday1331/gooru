import { Story } from "../types/story";
import { dummyUser1, dummyUser2, dummyUser3 } from "./users";
import {
  dummyScene1,
  dummyScene2,
  dummyScene3,
  dummyScene4,
  dummyScene5,
  dummyScene6,
} from "./scenes";

const dummyStory1: Story = {
  name: "Resolving conflicts in the workplaces",
  creator: dummyUser1,
  assigneeList: [dummyUser3],
  scenes: [dummyScene1, dummyScene2, dummyScene3, dummyScene4, dummyScene5],
  lastUpdated: "3 hours ago",
};

const dummyStory2: Story = {
  name: "Introduction to compliance",
  creator: dummyUser2,
  assigneeList: [dummyUser3],
  scenes: [dummyScene1, dummyScene2, dummyScene3, dummyScene4, dummyScene6],
  lastUpdated: "1 day ago",
};

export { dummyStory1, dummyStory2 };
