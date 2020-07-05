import React from "react";
import { Flex, Text } from "@chakra-ui/core";

export const ScenesSidebar = () => {
  return (
    <Flex
      borderRight="1px solid"
      minHeight="100vh"
      direction="column"
      align="start"
    >
      <Flex p={3} pl={5}>
        <Text fontSize="3xl" p={0}>
          Create<span style={{ color: "red" }}>.</span>
        </Text>
      </Flex>
    </Flex>
  );
};
