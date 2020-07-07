import React, { FC } from "react";
import { ResourceType, Scene } from "../../types/scene";
import { Flex, Text } from "@chakra-ui/core";
import { SvgImage } from "../reusables/SvgImage";

interface InformationScene {
  scene: Scene;
}

export const InformationScene: FC<InformationScene> = ({ scene }) => {
  const { title, resource } = scene;

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

      {resource?.type === ResourceType.IMAGE && (
        <SvgImage
          id={`scene`}
          image={resource.url}
          style={{
            height: "450px",
            width: "80%",
            borderRadius: "10px",
          }}
        />
      )}
    </Flex>
  );
};
