import React from "react";
import { Flex, Heading } from "@chakra-ui/core";

import { NavItemDetails } from "./NavBar";

interface NavItemProps {
  details: NavItemDetails;
}

export const NavItem: React.FC<NavItemProps> = ({
  details: { logo, name },
}) => {
  return (
    <Flex direction="row" justify="start" align="center" m={0} w="100%">
      {logo}
      <Heading size="sm" mx={2}>
        {name}
      </Heading>
    </Flex>
  );
};
