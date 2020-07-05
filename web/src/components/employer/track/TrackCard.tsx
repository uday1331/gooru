import React, { useState } from "react";
import {
  Avatar,
  Box,
  Collapse,
  Flex,
  Grid,
  Icon,
  PseudoBox,
  Text,
} from "@chakra-ui/core";
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
  let storiesLeft = 0;

  const stories = trainingProgress.map(({ story, pausedScene, timeSpent }) => {
    totalNumberOfScenes += story.scenes.length;
    totalScenesPlayed += pausedScene;
    if (pausedScene !== story.scenes.length) storiesLeft += 1;
    return {
      story,
      pausedScene,
      timeSpent,
      progress: pausedScene / story.scenes.length,
    };
  });

  const overallProgress = totalScenesPlayed / totalNumberOfScenes;

  const [showCollapse, setShowCollapse] = useState<boolean>(false);

  return (
    <Box border={"1px"} borderColor={"gray.300"} p={"2"}>
      <Grid
        templateColumns={"repeat(8, minmax(0, 1fr))"}
        gap={"2"}
        alignItems={"center"}
        pb={"2"}
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
              <Text fontSize={"2xl"}>{storiesLeft}</Text>
            </BoxLayout>
          </Flex>
        </Grid>
      </Grid>

      <Collapse isOpen={showCollapse}>
        {stories.map(({ story, progress, timeSpent }, index) => (
          <Grid
            key={index}
            templateColumns={"repeat(8, minmax(0, 1fr))"}
            alignItems={"center"}
            gap={"2"}
            borderTop={"1px"}
            borderColor={"gray.300"}
            py={"4"}
          >
            <Grid column={"span 3"} px={"4"}>
              <Text fontSize={"xl"}>{story.title}</Text>
            </Grid>
            <Grid column={"span 3"}>
              <ProgressBar progress={progress} />
            </Grid>
            <Grid column={"span 2"}>
              <Flex justifyContent={"center"} w={"100%"}>
                <BoxLayout title={"Time spent"}>
                  <Text>{`${timeSpent} hours`}</Text>
                </BoxLayout>
              </Flex>
            </Grid>
          </Grid>
        ))}
      </Collapse>

      <PseudoBox _hover={{ cursor: "pointer" }}>
        <Flex
          justifyContent={"center"}
          w={"100%"}
          pt={"3"}
          pb={"1"}
          onClick={() => setShowCollapse(!showCollapse)}
        >
          <Icon
            name={showCollapse ? "chevron-up" : "chevron-down"}
            size="30px"
            color="valentine.500"
          />
        </Flex>
      </PseudoBox>
    </Box>
  );
};
