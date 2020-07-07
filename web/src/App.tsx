import "./main.css";
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

import { NavItemList } from "./NavItems";

import { EmptyStory, CreateInformation } from "./components/createStory";
import {
  Template,
  CreateStoryTemplate,
  QuestionScene,
  Game,
} from "./components";
import { DataContext } from "./context";
import { dummyStory1, dummyStory2 } from "./data";
import { SceneType } from "./types/scene";
import { Game as GameType } from "./types/game";
import { NotFound } from "./components/reusables";

const App: React.FC = () => {
  const initialStories = [dummyStory1, dummyStory2];
  const [stories, setStories] = useState(initialStories);

  const defaultGame: GameType = {
    story: dummyStory1,
    currentScene: 0,
    rewardCoins: 100,
  };
  const [game, setGame] = useState<GameType>(defaultGame);

  const NavTemplate = () => {
    return (
      <Template navItemList={NavItemList}>
        <Switch>
          {NavItemList.map(({ route, component }, index) => (
            <Route key={index} exact path={route} component={() => component} />
          ))}
          <Redirect to={"/"} />
        </Switch>
      </Template>
    );
  };

  const CreateStoryTemplateRouter: React.FC<RouteComponentProps<{
    id: string;
  }>> = ({
    match: {
      params: { id },
    },
  }) => {
    const story = stories.find(({ id: storyId }) => Number(id) === storyId);
    if (!story) return <NotFound />;
    const { scenes } = story;

    return (
      <CreateStoryTemplate story={story}>
        <Switch>
          <Route exact path={`/createStory/:id`} component={EmptyStory} />
          {scenes.map((scene, index) => (
            <Route
              key={index}
              exact
              path={`/createStory/:id/${index}`}
              component={(props: RouteComponentProps<{ id: string }>) =>
                scene.type === SceneType.INFORMATION ? (
                  <CreateInformation {...props} scene={scene} />
                ) : (
                  <QuestionScene {...props} />
                )
              }
            />
          ))}
          <Redirect to={`/createStory/:id`} />
        </Switch>
      </CreateStoryTemplate>
    );
  };

  return (
    <DataContext.Provider
      value={{
        storyHandler: { stories, setStories },
        gameHandler: { game, setGame },
      }}
    >
      <Router>
        <Switch>
          <Route
            path="/createStory/:id"
            component={CreateStoryTemplateRouter}
          />
          <Route path={"/game"} component={Game} />
          <Route path="/" component={NavTemplate} />
          <Route path="*" exact component={() => <NotFound />} />
        </Switch>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
