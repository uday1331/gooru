import React, { useContext, useState } from "react";
import { DataContext } from "../../context";
import { Box, Flex, Text } from "@chakra-ui/core";
import { Carousel } from "./Carousel";
import { InformationScene } from "./InformationScene";
import { SceneType } from "../../types/scene";
import { ScreenControl } from "./ScreenControl";
import { QuestionScene } from "./QuestionScene";
import { Title } from "../reusables";
import { coin } from "../../static";

export const Game: React.FC = () => {
  const {
    gameHandler: { game, setGame },
  } = useContext(DataContext);

  const [thisSceneNumber, setThisSceneNumber] = useState<number>(
    game?.currentScene || 0
  );

  if (!game) return <>loading</>;

  const { story, currentScene, rewardCoins } = game;
  const { title, scenes } = story;

  const onBackClick = () => setThisSceneNumber(thisSceneNumber - 1);
  const onNextClick = () => {
    if (thisSceneNumber === currentScene)
      setGame({ ...game, currentScene: currentScene + 1 });
    else setThisSceneNumber(thisSceneNumber + 1);
  };

  const thisScene = story.scenes[thisSceneNumber];

  const showBack = thisSceneNumber > 0;

  const showNext =
    currentScene > thisSceneNumber || thisScene.type === SceneType.INFORMATION;

  return (
    <Flex
      direction={"column"}
      justifyContent={"space-between"}
      h={"100vh"}
      w={"100%"}
    >
      <Flex
        w={"100%"}
        py={3}
        px={5}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Title title={title} />
        <Box fontWeight={"600"}>
          <Flex alignItems={"center"} justifyContent={"center"} w={"100%"}>
            <Text fontSize={"lg"} mr={1}>{`${rewardCoins}`}</Text>
            <img
              src={coin}
              alt={"coin"}
              style={{ height: "20px", width: "auto" }}
            />
          </Flex>
          <Text fontSize={"sm"}>available in this story</Text>
        </Box>
      </Flex>

      <ScreenControl
        showBack={showBack}
        showNext={showNext}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />

      {thisScene.type === SceneType.INFORMATION ? (
        <InformationScene scene={thisScene} />
      ) : (
        <QuestionScene scene={thisScene} />
      )}

      <Box borderTop={"1px"} backgroundColor={"revolver.500"}>
        <Carousel scenes={scenes} />
      </Box>
    </Flex>
  );
};
