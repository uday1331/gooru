import React from "react";
import { Text, Grid, Flex, Avatar, Box } from "@chakra-ui/core";
import { Employee } from "../../../types/employee";
import { ProgressBar } from "./ProgressBar";

interface TrackCardProps {
  employee: Employee;
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

export const TrackCard = ({ employee }: TrackCardProps) => {
  const {
    user: { name, picture, position },
    trainingProgress,
  } = employee;

  let totalNumberOfScenes = 0;
  let totalScenesPlayed = 0;

  const stories = trainingProgress.map(({ story, pausedScene }) => {
    totalNumberOfScenes += story.scenes.length;
    totalScenesPlayed += pausedScene;
    return { progress: pausedScene / story.scenes.length };
  });

  const overallProgress = totalScenesPlayed / totalNumberOfScenes;

  return (
    <Box border={"1px"} borderColor={"gray.300"} p={"2"}>
      <Grid
        templateColumns={"repeat(8, minmax(0, 1fr))"}
        gap={"2"}
        alignItems={"center"}
      >
        <Grid column={"span 3"}>
          <Flex alignItems={"center"} mx={"2"}>
            <Avatar src={picture} name={name} size={"sm"} />
            <Box mx={"4"}>
              <Text>{name}</Text>
              <Text fontSize={"sm"}>{position}</Text>
            </Box>
          </Flex>
        </Grid>
        <Grid column={"span 3"}>
          <ProgressBar progress={overallProgress} />
        </Grid>

        <Grid column={"span 2"}>
          <Flex justifyContent={"center"} w={"100%"}>
            <BoxLayout title={"Stories left"}>
              <Text fontSize={"2xl"}>3</Text>
            </BoxLayout>
          </Flex>
        </Grid>
      </Grid>
    </Box>
  );
};
