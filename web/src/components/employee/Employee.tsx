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
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
    component: <>Stories</>,
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
    component: <>Settings</>,
  },
];

export const Employee: React.FC = () => {
  return (
    <Grid templateColumns="20% 80%">
      <NavBar navItemList={navItemList} />
      <Flex>
        {navItemList.map(({ name, component }, index) => (
          <Route key={index} path={`/employee/${name.toLowerCase()}`}>
            {component}
          </Route>
        ))}
      </Flex>
    </Grid>
  );
};
