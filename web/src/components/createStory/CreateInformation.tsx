import React, { useContext } from "react";
import { Flex, Text } from "@chakra-ui/core";
import { MdImage, MdVideocam } from "react-icons/md";

import { Scene } from "../../types/scene";
import { DataContext } from "../../context";
import { BigButton } from "../reusables/BigButton";

interface CreateInformationProps {
  scene: Scene;
}

export const CreateInformation: React.FC<CreateInformationProps> = ({
  scene,
}) => {
  const {
    storyHandler: { stories, setStories },
  } = useContext(DataContext);

  return (
    <Flex direction="column" align="center">
      <Text fontSize="3xl">Looks pretty empty...</Text>
      <Text fontSize="3xl">Insert</Text>
      <Flex mt={3}>
        <BigButton text="Image" onClick={() => {}} icon={MdImage} />
        <BigButton text="Video" onClick={() => {}} icon={MdVideocam} />
      </Flex>
    </Flex>
  );
};
