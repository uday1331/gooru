import React, { FC } from "react";
import { Scene } from "../../types/scene";
import { Flex, Text } from "@chakra-ui/core";

interface QuestionScene {
  scene: Scene;
}

export const QuestionScene: FC<QuestionScene> = ({ scene }) => {
  const { title } = scene;

  return (
    <Flex
      h={"100%"}
      my={4}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text fontSize={"xl"} my={2}>
        {title}
      </Text>
    </Flex>
  );
};
