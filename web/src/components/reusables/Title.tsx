import React, { FC } from "react";
import { Box, Text } from "@chakra-ui/core";

interface TitleProps {
  title: string;
  style?: object;
}

export const Title: FC<TitleProps> = ({ title, style }) => (
  <Box color={"revolver.500"} fontSize={"3xl"} fontWeight={"bold"} {...style}>
    <Text display={"inline-block"}>{title}</Text>
    <Text display={"inline-block"} color={"amaranth.500"}>
      .
    </Text>
  </Box>
);
