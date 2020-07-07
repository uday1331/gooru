import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";
import { guru } from "../../static";

import { NavItem } from "./NavItem";
import { NavItemDetails } from "../template/Template";

interface NavBarProps {
  navItemList: NavItemDetails[];
}

export const NavBar: React.FC<NavBarProps> = ({ navItemList }) => {
  return (
    <Flex minHeight="100vh" direction="column">
      <Flex
        w={"100%"}
        p={3}
        pl={5}
        backgroundColor={"amaranth.500"}
        borderTopRightRadius={20}
        alignItems={"center"}
      >
        <Flex
          alignItems={"center"}
          justifyContent={"center"}
          backgroundColor={"voodoo.500"}
          borderRadius={"50%"}
          p={3}
        >
          <img
            src={guru}
            alt={"guru-icon"}
            style={{ height: "42px", width: "auto" }}
          />
        </Flex>
        <Text fontSize={"3xl"} color={"white"} mx={4}>
          Guru
        </Text>
      </Flex>
      <Box
        flexGrow={1}
        w={"100%"}
        backgroundColor={"revolver.500"}
        color={"white"}
      >
        {navItemList.map((navItemDetails, index) => (
          <NavItem key={index} details={navItemDetails} />
        ))}
      </Box>
    </Flex>
  );
};
