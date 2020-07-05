import React, { useContext } from "react";
import { DataContext } from "../../../context";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Carousel } from "./Carousel";
import { ScreenControl } from "./ScreenControl";

export const Game: React.FC = () => {
  const {
    gameHandler: { game, setGame },
  } = useContext(DataContext);

  if (!game) return <>loading</>;

  const { story, currentScene, rewardCoins } = game;
  const { title, scenes } = story;

  const onBackClick = () => console.log("back!");
  const onNextClick = () => console.log("next!");

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
      <Box h={"100%"}>
        <ScreenControl
          showNext={true}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
        />
      </Box>
      <Box borderTop={"1px"} borderColor={"gray.600"}>
        <Carousel scenes={scenes} />
      </Box>
    </Flex>
  );
};
