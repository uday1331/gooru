import React, { FC } from "react";
import { Story } from "../../types/story";
import { Avatar, Box, Flex, Text } from "@chakra-ui/core";
import { SvgImage } from "../reusables";
import { fixThings } from "../../static";
import { ThumbsUp } from "react-feather";

interface StoryProps {
  story: Story;
}

export const StoryCard: FC<StoryProps> = ({
  story: {
    id,
    creator: { picture, name },
  },
}) => {
  return (
    <Box w={"324px"} h={"211px"} borderRadius={10} position={"relative"}>
      <SvgImage
        id={id}
        image={fixThings}
        style={{
          width: "100%",
          height: "100%",
          opacity: "80%",
          borderRadius: "inherit",
        }}
      />

      <Flex
        position={"absolute"}
        top={0}
        left={0}
        h={"100%"}
        w={"100%"}
        px={2}
        py={2}
        direction={"column"}
        color={"white"}
        justifyContent={"space-between"}
      >
        <Box>
          <Text fontSize={"xl"} fontWeight={"bold"}>
            How to fix things
          </Text>
          <Text fontSize={"sm"} fontWeight={"bold"}>
            17 scenes﹒35 people enrolled
          </Text>
        </Box>
        <Flex
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={"sm"}
          fontWeight={"600"}
        >
          <Flex alignItems={"center"}>
            <Avatar src={picture} name={name} size={"sm"} />
            <Text mx={2}>{name}</Text>
          </Flex>
          <Flex alignItems={"center"}>
            <Text>256</Text>
            <ThumbsUp size={"20px"} />
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
