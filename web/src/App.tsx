import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Template, Stories, CreateStoryTemplate } from "./components";
import {
  MdDashboard,
  MdGamepad,
  MdAssessment,
  MdSettings,
} from "react-icons/md";
import { EmptyStory } from "./components/createStory";

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
    component: <>Track</>,
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
  const EmployerTemplate = () => {
    return (
      <Template navItemList={navItemList}>
        <Switch>
          {navItemList.map(({ route, component }, index) => (
            <Route exact path={route} component={() => component} />
          ))}
        </Switch>
      </Template>
    );
  };

  const CreateStoryTemplateRouter = () => {
    return (
      <CreateStoryTemplate scenesList={["hello"]}>
        <Route exact path="/createStory" component={EmptyStory} />
      </CreateStoryTemplate>
    );
  };

  return (
    <Router>
      <Switch>
        <Route path="/employer" component={EmployerTemplate} />
        <Route path="/createStory" component={CreateStoryTemplateRouter} />
      </Switch>
    </Router>
  );
};

export default App;
