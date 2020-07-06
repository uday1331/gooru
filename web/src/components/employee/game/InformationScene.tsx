import React, { FC } from "react";
import { ResourceType, Scene } from "../../../types/scene";
import { Box, Flex, Text } from "@chakra-ui/core";
import { ScreenControl } from "./ScreenControl";
import { SvgImage } from "../../reusables/SvgImage";

interface InformationScene {
  showNext: boolean;
  onBackClick: () => void;
  onNextClick: () => void;
  scene: Scene;
}

export const InformationScene: FC<InformationScene> = ({
  scene,
  showNext,
  onBackClick,
  onNextClick,
}) => {
  const { title, resource } = scene;

  return (
    <Box h={"100%"}>
      <ScreenControl
        showNext={showNext}
        onBackClick={onBackClick}
        onNextClick={onNextClick}
      />
      <Flex
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
    </Box>
  );
};
