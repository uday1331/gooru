import React from "react";
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

interface Props {
  disclosure: UseDisclosureReturn;
}

export const CreateScenePopup: React.FC<Props> = ({
  disclosure: { isOpen, onClose },
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={8}>
        <ModalHeader>New Scene.</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Input placeholder="insightful title" borderRadius="0" />
          <Box textAlign="center" pt={8}>
            Scene Type
            <Flex pt={4} justifyContent="center">
              <BigButton
                icon={IoMdInformationCircle}
                text="Information"
                onClick={() => {}}
              />
              <BigButton
                icon={MdQuestionAnswer}
                text="Question"
                onClick={() => {}}
              />
            </Flex>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
