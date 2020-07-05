import React from "react";
import { Grid, Flex } from "@chakra-ui/core";
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
      <Flex>{children}</Flex>
    </Grid>
  );
};
