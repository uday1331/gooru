import { createContext } from "react";
import { Story } from "../types/story";
import { Game } from "../types/game";

interface StoryHandler {
  stories: Story[];
  setStories: (stories: Story[]) => void;
}

interface GameHandler {
  game?: Game;
  setGame: (game: Game) => void;
}

interface IContext {
  storyHandler: StoryHandler;
  gameHandler: GameHandler;
}

export const DataContext = createContext<IContext>({
  storyHandler: {
    stories: [],
    setStories: () => {},
  },
  gameHandler: {
    game: undefined,
    setGame: () => {},
  },
});
