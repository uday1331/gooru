import React from "react";
import { Grid, Flex } from "@chakra-ui/core";
import { ScenesSidebar } from "./ScenesSidebar";

interface Props {
  children: React.ReactNode;
  scenesList: any;
}

export const CreateStoryTemplate: React.FC<Props> = ({
  children,
  scenesList,
}) => {
  return (
    <Grid templateColumns="20% 80%">
      <ScenesSidebar scenesList={scenesList} />
      <Flex>{children}</Flex>
    </Grid>
  );
};
