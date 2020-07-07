import React, { FC } from "react";
import { Text } from "@chakra-ui/core";

interface TitleProps {
  title: string;
  style?: object;
}

export const Title: FC<TitleProps> = ({ title, style }) => (
  <Text color={"revolver.500"} fontSize={"3xl"} fontWeight={"bold"} {...style}>
    {title}
    <Text display={"inline"} color={"amaranth.500"}>
      .
    </Text>
  </Text>
);
