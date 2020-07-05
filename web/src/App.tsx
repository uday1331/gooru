import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  RouteComponentProps,
  Redirect,
} from "react-router-dom";

import { Template, Stories, CreateStoryTemplate, Track } from "./components";
import {
  MdDashboard,
  MdGamepad,
  MdAssessment,
  MdSettings,
} from "react-icons/md";
import { EmptyStory } from "./components/createStory";
import { DataContext } from "./context";
import { dummyStory1, dummyStory2 } from "./data";

const navItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
    component: <>Dashboard</>,
    route: "/employer/dashboard",
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
    component: <Stories />,
    route: "/employer/stories",
  },
  {
    name: "Track",
    logo: <MdAssessment size={30} />,
    component: <Track />,
    route: "/employer/track",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/employer/settings",
  },
];

const App: React.FC = () => {
  const initialStories = [dummyStory1, dummyStory2];
  const [stories, setStories] = useState(initialStories);

  const EmployerTemplate = () => {
    return (
      <Template navItemList={navItemList}>
        <Switch>
          {navItemList.map(({ route, component }, index) => (
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
    if (!story) return <div>Error 404 not found</div>;
    const { scenes } = story;

    return (
      <CreateStoryTemplate story={story}>
        <Switch>
          <Route exact path={`/createStory/${id}`} component={EmptyStory} />
          {scenes.map((scene, index) => (
            <Route
              key={index}
              exact
              path={`/createStory/${id}/${index}`}
              component={() => <>{index}</>}
            />
          ))}
          <Redirect to={`/createStory/${id}`} />
        </Switch>
      </CreateStoryTemplate>
    );
  };

  return (
    <DataContext.Provider value={{ storyHandler: { stories, setStories } }}>
      <Router>
        <Switch>
          <Route path="/employer" component={EmployerTemplate} />
          <Route
            path="/createStory/:id"
            component={CreateStoryTemplateRouter}
          />
        </Switch>
      </Router>
    </DataContext.Provider>
  );
};

export default App;
