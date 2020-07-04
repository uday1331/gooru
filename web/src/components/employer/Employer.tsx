import React from "react";
import { Grid, Flex } from "@chakra-ui/core";
import {
  MdDashboard,
  MdSettings,
  MdAssessment,
  MdGamepad,
} from "react-icons/md";
import { Route } from "react-router-dom";

import { NavBar } from "../navbar";

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
    component: <>Stories</>,
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

export const Employer: React.FC = () => {
  return (
    <Grid templateColumns="20% 80%">
      <NavBar navItemList={navItemList} />
      <Flex>
        {navItemList.map(({ route, component }, index) => (
          <Route key={index} path={route}>
            {component}
          </Route>
        ))}
      </Flex>
    </Grid>
  );
};
