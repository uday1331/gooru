import React from "react";
import { Flex, Text } from "@chakra-ui/core";

export const NotFound: React.FC = () => {
  return (
    <Flex h="100vh" w="100vw" align="center" justify="center">
      <Text fontSize="3xl">Error 404 not found</Text>
    </Flex>
  );
};
