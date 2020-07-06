import React, { useContext } from "react";
import { DataContext } from "../../../context";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Carousel } from "./Carousel";
import { InformationScene } from "./InformationScene";
import { SceneType } from "../../../types/scene";

export const Game: React.FC = () => {
  const {
    gameHandler: { game, setGame },
  } = useContext(DataContext);

  if (!game) return <>loading</>;

  const { story, currentScene, rewardCoins } = game;
  const { title, scenes } = story;

  const onBackClick = () => console.log("back!");
  const onNextClick = () => console.log("next!");

  const thisScene = story.scenes[currentScene];

  const showNext = true;

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

      {thisScene.type === SceneType.INFORMATION ? (
        <InformationScene
          scene={thisScene}
          showNext={showNext}
          onBackClick={onBackClick}
          onNextClick={onNextClick}
        />
      ) : (
        <>question scene</>
      )}

      <Box borderTop={"1px"} borderColor={"gray.600"}>
        <Carousel scenes={scenes} />
      </Box>
    </Flex>
  );
};
