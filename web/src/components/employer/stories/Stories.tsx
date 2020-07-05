import React, { useContext } from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/core";
import { useHistory } from "react-router-dom";

import { FilterBar } from "../../search-bar";
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
          const newStory = { ...defaultStory, id: stories.length };
          setStories([...stories, newStory]);
          history.push(`/createStory/${stories.length}/0`);
        }}
      >
        Create story
      </Button>
    </Flex>
  );
};

export const Stories: React.FC = () => {
  const {
    storyHandler: { stories },
  } = useContext(DataContext);
  return (
    <Flex py={3} px={5} width="100%" direction="column">
      <StoriesHeading />
      <FilterBar searchBarPlaceholder={"The story I made yesterday"} />
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
