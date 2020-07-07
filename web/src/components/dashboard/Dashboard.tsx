import React, { FC } from "react";
import { Box, PseudoBox, Text } from "@chakra-ui/core";
import { ActivityBox, ActivityBoxProps } from "./ActivityBox";
import { dummyUser1 } from "../../data/users";
import { dummyStory1 } from "../../data";
import moment from "moment";

export const Dashboard: FC = () => {
  const { picture, name } = dummyUser1;
  const { title: storyTitle } = dummyStory1;
  const activities: ActivityBoxProps[] = [
    "working",
    "completed",
    "created",
  ].map(activityType => ({
    picture,
    name,
    activityType,
    storyTitle,
    time: moment().subtract(1, "day").toDate(),
  }));

  return (
    <Box color={"revolver.500"} px={8} py={1}>
      <Text fontSize={"3xl"} fontWeight={"bold"} my={3}>
        Dashboard
        <Text display={"inline"} color={"amaranth.500"}>
          .
        </Text>
      </Text>

      <Box>
        <Box fontWeight={"600"}>
          <Text display={"inline"}>Recent Activities</Text>
          <PseudoBox
            display={"inline-block"}
            _hover={{ textDecoration: "underline", cursor: "pointer" }}
          >
            <Text mx={4} fontSize={"sm"} color={"camelot.400"}>
              see all
            </Text>
          </PseudoBox>
        </Box>

        <Box>
          {activities.map((props, index) => (
            <Box key={index} my={2}>
              <ActivityBox {...props} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};
