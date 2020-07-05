import { Story } from "../types/story";
import { dummyUser1, dummyUser2, dummyUser3 } from "./users";
import { dummyScene1 } from "./scenes";

const dummyStory1: Story = {
  title: "Resolving conflicts in the workplaces",
  creator: dummyUser1,
  assignees: Array(5).fill(dummyUser3),
  scenes: [dummyScene1],
  lastUpdated: new Date(),
};

const dummyStory2: Story = {
  title: "Introduction to compliance",
  creator: dummyUser2,
  assignees: Array(5).fill(dummyUser3),
  scenes: [dummyScene1],
  lastUpdated: new Date(),
};

const defaultStory: Story = {
  title: "New Story",
  creator: dummyUser1,
  assignees: [],
  scenes: [],
  lastUpdated: new Date(),
};

export { dummyStory1, dummyStory2, defaultStory };
