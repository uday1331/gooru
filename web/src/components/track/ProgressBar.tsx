import React from "react";
import { Box, Flex } from "@chakra-ui/core";

interface ProgressBarProps {
  progress: number; // between 0 and 1
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => (
  <Flex w={"100%"} h={"20px"}>
    <Box w={`${progress * 100}%`} h={"100%"} backgroundColor={"indigo.500"} />
    <Box flexGrow={1} h={"100%"} border={"2px"} borderColor={"indigo.500"} />
  </Flex>
);
