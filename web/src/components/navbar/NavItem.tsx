import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";

import { NavItemDetails } from "./NavBar";

interface NavItemProps {
  details: NavItemDetails;
}

export const NavItem: React.FC<NavItemProps> = ({
  details: { logo, name, route },
}) => {
  const { pathname } = useLocation();

  return (
    <Link to={route} style={{ width: "100%" }}>
      <Flex
        direction="row"
        justify="start"
        align="center"
        p={3}
        pl={5}
        backgroundColor={pathname === route ? "indigo" : "white"}
      >
        <Flex p={0} color={pathname === route ? "white" : "indigo"}>
          {logo}
        </Flex>
        <Text
          fontSize="md"
          mx={2}
          color={pathname === route ? "white" : "indigo"}
        >
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
