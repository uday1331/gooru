import React from "react";
import { Flex, PseudoBox, Text } from "@chakra-ui/core";
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
    <Link to={route}>
      <PseudoBox
        backgroundColor={pathname === route ? "white" : "inherit"}
        color={pathname === route ? "revolver.500" : "inherit"}
        borderRadius={"10%"}
        _hover={{
          backgroundColor: "voodoo.500",
          color: "white",
        }}
      >
        <Flex
          alignItems={"center"}
          p={3}
          color={"inherit"}
          backgroundColor={"inherit"}
        >
          <Flex p={0} color={"inherit"}>
            {logo}
          </Flex>
          <Text fontSize="md" mx={2}>
            {name}
          </Text>
        </Flex>
      </PseudoBox>
    </Link>
  );
};
