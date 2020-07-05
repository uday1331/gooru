import React, { useContext } from "react";
import { DataContext } from "../../../context";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Carousel } from "./Carousel";

export const Game: React.FC = () => {
  const {
    gameHandler: { game, setGame },
  } = useContext(DataContext);

  if (!game) return <>loading</>;

  const { story, currentScene, rewardCoins } = game;
  const { title, scenes } = story;

  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      h={"screen"}
      w={"100%"}
    >
      <Box py={3} px={5}>
        <Text fontSize={"3xl"}>{title}</Text>
      </Box>
      <Box borderTop={"1px"} borderColor={"gray.600"}>
        <Carousel scenes={scenes} />
      </Box>
    </Flex>
  );
};
