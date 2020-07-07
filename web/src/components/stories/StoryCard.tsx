import React from "react";
import { Story } from "../../types/story";
import { Text, Grid, Flex, Avatar, AvatarGroup } from "@chakra-ui/core";
import moment from "moment";

interface StoryCardProps {
  story: Story;
}

interface BoxProps {
  title: string;
  children: React.ReactNode;
}

const BoxLayout: React.FC<BoxProps> = ({ title, children }) => (
  <Flex direction={"column"}>
    <Text>{title}</Text>
    {children}
  </Flex>
);

export const StoryCard = ({ story }: StoryCardProps) => {
  const { title, creator, assignees, scenes, lastUpdated } = story;

  return (
    <Grid
      border={"1px"}
      borderColor={"gray.300"}
      templateColumns={"repeat(8, minmax(0, 1fr))"}
      p={"2"}
      gap={"2"}
      alignItems={"center"}
    >
      <Grid column={"span 3"}>
        <Text fontSize={"2xl"}>{title}</Text>
      </Grid>
      <Grid column={"span 1"}>
        <BoxLayout title={"Created by"}>
          <Avatar src={creator.picture} name={creator.name} size={"sm"} />
        </BoxLayout>
      </Grid>
      <Grid column={"span 1"}>
        <BoxLayout title={"Assigned to"}>
          <AvatarGroup size="sm" max={3}>
            {assignees.map(({ name, picture }, index) => (
              <Avatar key={index} src={picture} name={name} />
            ))}
          </AvatarGroup>
        </BoxLayout>
      </Grid>
      <Grid column={"span 1"}>
        <BoxLayout title={"Scenes"}>
          <Text fontSize={"2xl"}>{scenes.length}</Text>
        </BoxLayout>
      </Grid>
      <Grid column={"span 2"}>
        <BoxLayout title={"Scenes"}>
          <Text fontSize={"2xl"}>{moment(lastUpdated).calendar()}</Text>
        </BoxLayout>
      </Grid>
    </Grid>
  );
};
