import React from "react";
import { Grid, Text, Flex } from "@chakra-ui/core";
import { ScenesSidebar } from "./ScenesSidebar";

import { Story } from "../../types/story";

interface Props {
  children: React.ReactNode;
  story: Story;
}

export const CreateStoryTemplate: React.FC<Props> = ({ children, story }) => {
  return (
    <Grid templateColumns="20% 80%">
      <ScenesSidebar story={story} />
      <Grid templateRows="10% 90%" p={3} pl={5}>
        <Text fontSize="3xl" p={0}>
          {story.title}
          <span style={{ color: "red" }}>.</span>
        </Text>
        <Flex
          border="1px solid #111D5E"
          align="center"
          justify="center"
          height="100%"
        >
          {children}
        </Flex>
      </Grid>
    </Grid>
  );
};
