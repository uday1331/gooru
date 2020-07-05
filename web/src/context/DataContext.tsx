import { createContext } from "react";
import { Story } from "../types/story";

interface StoryHandler {
  stories: Story[];
  setStories: (stories: Story[]) => void;
}

interface IContext {
  storyHandler: StoryHandler;
}

export const DataContext = createContext<IContext>({
  storyHandler: {
    stories: [],
    setStories: () => {},
  },
});
