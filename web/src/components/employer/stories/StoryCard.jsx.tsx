import React from "react";
import { Story } from "../../../types/story";
import { Box, Grid } from "@chakra-ui/core";

interface StoryCardProps {
  story: Story;
}

export const StoryCard = ({ story }: StoryCardProps) => {
  const { title, creator, assignees, scenes, lastUpdated } = story;

  return (
    <Grid
      border={"1px"}
      borderColor={"gray.300"}
      templateColumns={"repeat(8, minmax(0, 1fr))"}
    >
      <Grid column={"span 3"}>something</Grid>
      <Grid column={"span 1"}>something</Grid>
      <Grid column={"span 1"}>something</Grid>
      <Grid column={"span 1"}>something</Grid>
      <Grid column={"span 2"}>something</Grid>
    </Grid>
  );
};
