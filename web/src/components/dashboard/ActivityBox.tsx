import React, { FC } from "react";
import { Avatar, Text, Flex } from "@chakra-ui/core";
import moment from "moment";

export interface ActivityBoxProps {
  picture: string;
  name: string;
  activityType: string;
  storyTitle: string;
  time: Date;
}

export const ActivityBox: FC<ActivityBoxProps> = ({
  picture,
  name,
  activityType,
  storyTitle,
  time,
}) => {
  let text;

  switch (activityType) {
    case "working":
      text = "started working on a story";
      break;
    case "created":
      text = "created a new story";
      break;
    case "completed":
      text = "completed a story";
      break;
    default:
      console.log("should not be logged");
  }

  return (
    <Flex alignItems={"center"}>
      <Avatar src={picture} name={name} size={"sm"} mr={2} />
      <Text fontWeight={"bold"} mx={1}>{`${name}`}</Text>
      <Text mx={1}>{`${text} `}</Text>
      <Text fontWeight={"bold"} mx={1}>{`${storyTitle} `}</Text>
      <Text fontSize={"sm"} color={"gray.500"} mx={1}>
        {moment(time).calendar()}
      </Text>
    </Flex>
  );
};
