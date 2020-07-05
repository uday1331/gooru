import React from "react";
import { Flex, Box, PseudoBox } from "@chakra-ui/core";
import { IconType } from "react-icons/lib/cjs";

interface BigButtonProps {
  icon: IconType;
  text: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const BigButton: React.FC<BigButtonProps> = ({
  icon,
  text,
  onClick,
  children,
}) => {
  return (
    <PseudoBox
      onClick={onClick}
      _hover={{
        backgroundColor: "indigo.400",
        color: "white",
        cursor: "pointer",
      }}
      ml={2}
      mr={2}
      minW={48}
    >
      <Flex
        padding="18px 24px"
        border="1px solid indigo"
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box as={icon} size={20} />
        {text}
      </Flex>
      {children}
    </PseudoBox>
  );
};
