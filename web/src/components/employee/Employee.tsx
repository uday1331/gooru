import React from "react";
import { Grid, Flex } from "@chakra-ui/core";
import { MdDashboard, MdSettings, MdGamepad } from "react-icons/md";
import { Route } from "react-router-dom";

import { NavBar } from "../navbar";

const navItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
    component: <>Dashboard</>,
    route: "/employee/dashboard",
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
    component: <>Stories</>,
    route: "/employee/stories",
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
    route: "/employee/settings",
  },
];

export const Employee: React.FC = () => {
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
