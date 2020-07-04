import React from "react";
import { Grid } from "@chakra-ui/core";
import { MdDashboard, MdSettings, MdGamepad } from "react-icons/md";

import { NavBar } from "../navbar";

const navItemList = [
  {
    name: "Dashboard",
    logo: <MdDashboard size={30} />,
  },
  {
    name: "Stories",
    logo: <MdGamepad size={30} />,
  },
  {
    name: "Settings",
    logo: <MdSettings size={30} />,
  },
];

export const Employee: React.FC = () => {
  return (
    <Grid templateColumns="20% 80%">
      <NavBar navItemList={navItemList} />
    </Grid>
  );
};
