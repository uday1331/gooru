import React from "react";
import { Box, Flex, Icon, PseudoBox, Text } from "@chakra-ui/core";

interface ScreenControlProps {
  showBack: boolean;
  showNext: boolean;
  onBackClick: () => void;
  onNextClick: () => void;
}

export const ScreenControl: React.FC<ScreenControlProps> = ({
  showBack,
  showNext,
  onBackClick,
  onNextClick,
}) => (
  <Flex w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
    {showBack ? (
      <PseudoBox
        _hover={{ color: "indigo.400", cursor: "pointer" }}
        onClick={() => onBackClick()}
      >
        <Flex alignItems={"center"}>
          <Icon name={"chevron-left"} size={"32px"} />
          <Text>Back</Text>
        </Flex>
      </PseudoBox>
    ) : (
      <Box />
    )}
    {showNext && (
      <PseudoBox
        _hover={{ color: "indigo.400", cursor: "pointer" }}
        onClick={() => onNextClick()}
      >
        <Flex alignItems={"center"}>
          <Text>Next</Text>
          <Icon name={"chevron-right"} size={"32px"} />
        </Flex>
      </PseudoBox>
    )}
  </Flex>
);
