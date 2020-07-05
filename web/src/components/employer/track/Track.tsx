import React from "react";
import { Box, Flex, Text } from "@chakra-ui/core";

import { dummyEmployee1, dummyEmployee2 } from "../../../data";
import { FilterBar } from "../../search-bar";
import { TrackCard } from "./TrackCard";
import { Employee } from "../../../types/employee";

const listOfEmployees: Employee[] = [dummyEmployee1, dummyEmployee2];

const StoriesHeading: React.FC = () => (
  <Flex direction="row" justify="space-between" w="100%">
    <Text fontSize="3xl" p={0}>
      Track<span style={{ color: "red" }}>.</span>
    </Text>
  </Flex>
);

export const Track: React.FC = () => {
  return (
    <Flex py={3} px={5} width="100%" direction="column">
      <StoriesHeading />
      <FilterBar searchBarPlaceholder={"The story I played yesterday"} />
      <Box>
        {listOfEmployees.map((employee, index) => (
          <Box key={index} my={3}>
            <TrackCard employee={employee} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
