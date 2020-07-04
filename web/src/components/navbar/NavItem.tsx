import React from "react";
import { Flex, Heading } from "@chakra-ui/core";
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
    <Link to={route}>
      <Flex
        direction="row"
        justify="start"
        align="center"
        m={0}
        w="100%"
        backgroundColor={pathname === route ? "indigo" : "white"}
      >
        <Flex p={0} color={pathname === route ? "white" : "indigo"}>
          {logo}
        </Flex>
        <Heading
          size="sm"
          mx={2}
          color={pathname === route ? "white" : "indigo"}
        >
          {name}
        </Heading>
      </Flex>
    </Link>
  );
};
