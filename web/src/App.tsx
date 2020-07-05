import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Template, Stories } from "./components";
import { CreateStory } from "./components/employer/stories/createStory";
import {
  MdDashboard,
  MdGamepad,
  MdAssessment,
  MdSettings,
} from "react-icons/md";

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

  return (
    <Router>
      <Switch>
        <Route path="/employer" component={EmployerTemplate} />
        <Route path="/createStory" component={CreateStory} />
      </Switch>
    </Router>
  );
};

export default App;
