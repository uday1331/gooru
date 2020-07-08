import { Story } from "../types/story";
import { dummyUser1, dummyUser2, dummyUser3 } from "./users";
import {
  dummyScene1,
  dummyScene2,
  dummyScene3,
  dummyScene4,
  dummyScene5,
} from "./scenes";

const dummyStory1: Story = {
  id: 0,
  title: "Resolving conflicts in the workplaces",
  creator: dummyUser1,
  assignees: Array(5).fill(dummyUser3),
  scenes: [dummyScene1, dummyScene2, dummyScene3, dummyScene4, dummyScene5],
  lastUpdated: new Date(),
};

const dummyStory2: Story = {
  id: 1,
  title: "Introduction to compliance",
  creator: dummyUser2,
  assignees: Array(5).fill(dummyUser3),
  scenes: [dummyScene1, dummyScene2],
  lastUpdated: new Date(),
};

const defaultStory: Story = {
  id: 2,
  title: "New Story",
  creator: dummyUser1,
  assignees: [],
  scenes: [],
  lastUpdated: new Date(),
};

export { dummyStory1, dummyStory2, defaultStory };
