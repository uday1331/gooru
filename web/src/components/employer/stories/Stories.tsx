import React, { useContext } from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/core";
import { MdArrowDropDown } from "react-icons/md";
import { useHistory } from "react-router-dom";

import { SearchBar } from "../../index";
import { StoryCard } from "./StoryCard.jsx";
import { DataContext } from "../../../context";
import { defaultStory } from "../../../data/stories";

const StoriesHeading: React.FC = () => {
  const history = useHistory();
  const {
    storyHandler: { stories, setStories },
  } = useContext(DataContext);
  return (
    <Flex direction="row" justify="space-between" w="100%">
      <Text fontSize="3xl" p={0}>
        Stories<span style={{ color: "red" }}>.</span>
      </Text>
      <Button
        variantColor="indigo"
        borderRadius={0}
        onClick={() => {
          setStories([...stories, defaultStory]);
          history.push(`/createStory/${stories.length}/0`);
        }}
      >
        Create story
      </Button>
    </Flex>
  );
};

const FilterBar: React.FC = () => (
  <Flex direction="row" justify="space-between" w="100%" mt={8}>
    <SearchBar placeholder="The story I made yesterday" />
    <Flex direction="row" align="center" cursor={"pointer"}>
      <Text color="indigo">Sort by </Text>
      <MdArrowDropDown />
    </Flex>
  </Flex>
);

export const Stories: React.FC = () => {
  const {
    storyHandler: { stories },
  } = useContext(DataContext);
  return (
    <Flex py={3} px={5} width="100%" direction="column">
      <StoriesHeading />
      <FilterBar />
      <Box>
        {stories.map((story, index) => (
          <Box key={index} my={3}>
            <StoryCard story={story} />
          </Box>
        ))}
      </Box>
    </Flex>
  );
};
