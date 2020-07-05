import React, { useContext, useState } from "react";
import { UseDisclosureReturn } from "@chakra-ui/core/dist/useDisclosure";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Box,
  Flex,
} from "@chakra-ui/core";
import { IoMdInformationCircle } from "react-icons/io";
import { MdQuestionAnswer } from "react-icons/md";

import { BigButton } from "../reusables";
import { SceneType } from "../../types/scene";
import { DataContext } from "../../context";
import { Story } from "../../types/story";

interface Props {
  disclosure: UseDisclosureReturn;
  story: Story;
}

export const CreateScenePopup: React.FC<Props> = ({
  disclosure: { isOpen, onClose },
  story,
}) => {
  const [title, setTitle] = useState("");
  const {
    storyHandler: { stories, setStories },
  } = useContext(DataContext);

  const createNewScene = (type: SceneType) => {
    const currentStory = story;
    setStories([
      ...stories.filter(story => story.id !== currentStory.id),
      {
        ...currentStory,
        scenes: [
          ...currentStory.scenes,
          {
            title,
            type: type,
          },
        ],
      },
    ]);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={8}>
        <ModalHeader>New Scene.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input
            placeholder="insightful title"
            borderRadius="0"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setTitle(event.target.value)
            }
          />
          <Box textAlign="center" pt={8}>
            Scene Type
            <Flex pt={4} justifyContent="center">
              <BigButton
                icon={IoMdInformationCircle}
                text="Information"
                onClick={() => {
                  createNewScene(SceneType.INFORMATION);
                }}
              />
              <BigButton
                icon={MdQuestionAnswer}
                text="Question"
                onClick={() => {
                  createNewScene(SceneType.QUESTION);
                }}
              />
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
