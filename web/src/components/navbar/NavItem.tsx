import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { Link, useLocation } from "react-router-dom";

import { NavItemDetails } from "../template/Template";

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
        color={pathname === route ? "white" : "indigo"}
      >
        <Flex p={0}>{logo}</Flex>
        <Text fontSize="md" mx={2}>
          {name}
        </Text>
      </Flex>
    </Link>
  );
};
