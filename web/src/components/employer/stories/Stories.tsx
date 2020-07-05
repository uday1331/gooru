import React, { useContext } from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/core";
import { MdArrowDropDown } from "react-icons/md";

import { SearchBar } from "../../index";
import { StoryCard } from "./StoryCard.jsx";
import { Link } from "react-router-dom";
import { DataContext } from "../../../context";

const StoriesHeading: React.FC = () => {
  return (
    <Flex direction="row" justify="space-between" w="100%">
      <Text fontSize="3xl" p={0}>
        Stories<span style={{ color: "red" }}>.</span>
      </Text>
      <Link to="/createStory">
        <Button variantColor="indigo" borderRadius={0}>
          Create story
        </Button>
      </Link>
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
