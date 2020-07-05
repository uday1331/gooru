import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  RouteComponentProps,
  Switch,
} from "react-router-dom";

import { employeeNavItemList, employerNavItemList } from "./NavItems";

import { CreateStoryTemplate, Template } from "./components";
import { EmptyStory, CreateInformation } from "./components/createStory";
import { DataContext } from "./context";
import { dummyStory1, dummyStory2 } from "./data";
import { SceneType } from "./types/scene";
import { NotFound } from "./components/reusables/NotFound";
import { Game } from "./types/game";

const App: React.FC = () => {
  const initialStories = [dummyStory1, dummyStory2];
  const [stories, setStories] = useState(initialStories);

  const defaultGame: Game = {
    story: dummyStory1,
    currentScene: 0,
    rewardCoins: 100,
  };
  const [game, setGame] = useState<Game>(defaultGame);

  const EmployerTemplate = () => {
    return (
      <Template navItemList={employerNavItemList}>
        <Switch>
          {employerNavItemList.map(({ route, component }, index) => (
            <Route key={index} exact path={route} component={() => component} />
          ))}
        </Switch>
      </Template>
    );
  };

  const EmployeeTemplate = () => {
    return (
      <Template navItemList={employeeNavItemList}>
        <Switch>
          {employeeNavItemList.map(({ route, component }, index) => (
            <Route key={index} exact path={route} component={() => component} />
          ))}
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
                  <>{"Create <CreateQuestion> component later on"}</>
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
          <Route path="/employer" component={EmployerTemplate} />
          <Route path="/employee" component={EmployeeTemplate} />
          <Route
            path="/createStory/:id"
            component={CreateStoryTemplateRouter}
          />
          <Route path="*" exact component={() => <NotFound />} />
        </Switch>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
