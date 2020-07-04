import React from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/core";
import { MdArrowDropDown } from "react-icons/md";

import { dummyStory1, dummyStory2 } from "../../../data";
import { Story } from "../../../types/story";
import { SearchBar } from "../../index";
import { StoryCard } from "./StoryCard.jsx";

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

const FilterBar: React.FC = () => (
  <Flex direction="row" justify="space-between" w="100%" mt={8}>
    <SearchBar placeholder="The story I made yesterday" />
    <Flex direction="row" align="center">
      <Text color="indigo">Sort by </Text>
      <MdArrowDropDown />
    </Flex>
  </Flex>
);

export const Stories: React.FC = () => {
  console.log({ listOfStories });
  return (
    <Flex py={3} px={5} width="100%" direction="column">
      <StoriesHeading />
      <FilterBar />
      <Box>
        {listOfStories.map((story, index) => (
          <Box key={index}>
            <StoryCard story={story} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
