import React from "react";
import { Flex, Text, Button } from "@chakra-ui/core";

import { dummyStory1, dummyStory2 } from "../../../data";
import { Story } from "../../../types/story";

const listOfStories: Story[] = [dummyStory1, dummyStory2];

const StoriesHeading: React.FC = () => (
  <Flex direction="row" justify="space-between" w="100%">
    <Text fontSize="3xl" p={0}>
      Stories<span style={{ color: "red" }}>.</span>
    </Text>
    <Button backgroundColor="indigo" color="white" borderRadius={0}>
      Create story
    </Button>
  </Flex>
);

export const Stories: React.FC = () => {
  console.log({ listOfStories });
  return (
    <Flex py={3} px={5} width="100%">
      <StoriesHeading />
    </Flex>
  );
};
