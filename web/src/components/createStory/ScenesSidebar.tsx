import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/core";
import { MdQuestionAnswer, MdInfo } from "react-icons/md";

import { NavItem } from "../navbar";
import { Story } from "../../types/story";
import { SceneType } from "../../types/scene";

interface ScenesSideBarProps {
  story: Story;
}

export const ScenesSidebar: React.FC<ScenesSideBarProps> = ({ story }) => {
  const { id: storyId, scenes: scenesList } = story;

  return (
    <Flex
      borderRight="1px solid"
      minHeight="100vh"
      direction="column"
      align="start"
      py={3}
    >
      <Flex pb={4} px={6}>
        <Text fontSize="3xl" p={0}>
          Create<span style={{ color: "red" }}>.</span>
        </Text>
      </Flex>
      <Box width="100%" px={6}>
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
      <Flex direction="column" width="100%" py={3}>
        {scenesList.map(({ title, type }, index) => (
          <Box key={index}>
            <NavItem
              details={{
                name: title,
                logo:
                  type === SceneType.QUESTION ? (
                    <MdQuestionAnswer size={30} />
                  ) : (
                    <MdInfo size={30} />
                  ),
                route: `/createStory/${storyId}/${index}`,
              }}
            />
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};
