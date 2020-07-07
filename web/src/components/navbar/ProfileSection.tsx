import React from "react";
import { PseudoBox, Avatar, Text, Flex, Box } from "@chakra-ui/core";
import { dummyUser1 } from "../../data/users";

export const ProfileSection: React.FC = () => (
  <Flex alignItems="center" px={6}>
    <Avatar src={dummyUser1.picture} size={"md"} mr={4} />
    <Box>
      <Text fontSize="xl">{dummyUser1.name}</Text>
      <Text fontSize="sm">{dummyUser1.position}</Text>
    </Box>
  </Flex>
);
