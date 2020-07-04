import React from "react";
import { Grid, Flex } from "@chakra-ui/core";
import { Route } from "react-router-dom";

import { NavBar } from "../.";

export interface NavItemDetails {
  name: string;
  logo: React.ReactNode;
  route: string;
  component: React.ReactNode;
}

interface TemplateProps {
  navItemList: NavItemDetails[];
}

export const Template: React.FC<TemplateProps> = ({ navItemList }) => {
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
