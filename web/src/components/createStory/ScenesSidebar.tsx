import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/core";

interface ScenesSideBarProps {
  scenesList: any;
}

export const ScenesSidebar: React.FC<ScenesSideBarProps> = ({ scenesList }) => {
  return (
    <Flex
      borderRight="1px solid"
      minHeight="100vh"
      direction="column"
      align="start"
      p={3}
      pl={5}
      pr={5}
    >
      <Flex pb={4}>
        <Text fontSize="3xl" p={0}>
          Create<span style={{ color: "red" }}>.</span>
        </Text>
      </Flex>
      <Box width="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="lg">Scenes</Text>
          <Button
            backgroundColor="white"
            borderRadius="0"
            border={`1px solid black`}
          >
            Add
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};
