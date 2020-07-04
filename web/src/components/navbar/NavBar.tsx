import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

import { NavItem } from "./NavItem";

export interface NavItemDetails {
  name: string;
  logo: React.ReactNode;
  route: string;
  component: React.ReactNode;
}

interface NavBarProps {
  navItemList: NavItemDetails[];
}

export const NavBar: React.FC<NavBarProps> = ({ navItemList }) => {
  return (
    <Flex
      pl={3}
      borderRight="1px solid"
      minHeight="100vh"
      direction="column"
      align="start"
    >
      <Heading size="sm">Gooru.</Heading>
      {navItemList.map((navItemDetails, index) => (
        <NavItem key={index} details={navItemDetails} />
      ))}
    </Flex>
  );
};
