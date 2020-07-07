import React, { FC, useCallback, useState } from "react";
import { ResourceType, Scene } from "../../types/scene";
import { Box, Flex, SimpleGrid, Text } from "@chakra-ui/core";
import { Check } from "react-feather";
import { SvgImage } from "../reusables";

interface QuestionScene {
  scene: Scene;
}

export const QuestionScene: FC<QuestionScene> = ({ scene }) => {
  const { title, resource, question, options } = scene;

  const [height, setHeight] = useState<number>(489);
  const box = useCallback(
    node => node && setHeight(node.getBoundingClientRect().height),
    []
  );

  const [selectedOption, setSelectedOption] = useState<number>(-1);

  return (
    <Flex
      h={"100%"}
      mt={4}
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Text fontSize={"xl"} fontWeight={"bold"} color={"revolver.500"} my={2}>
        {title}
      </Text>
      <Flex
        ref={box}
        height={"100%"}
        width={"100%"}
        position={"relative"}
        direction={"column"}
        justifyContent={"flex-end"}
      >
        {resource?.type === ResourceType.IMAGE && (
          <SvgImage
            id={"scene"}
            image={resource.url}
            style={{
              height,
              width: "100%",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        )}
        <Box
          zIndex={10}
          backgroundColor={"revolver.500"}
          style={{ opacity: "80%" }}
          color={"white"}
          px={8}
          py={4}
        >
          <Text fontSize={"lg"} fontWeight={"bold"}>
            {question}
          </Text>
          <SimpleGrid columns={2} my={4} spacing={4}>
            {options?.map(({ id, option }, index) => (
              <Flex
                key={index}
                alignItems={"center"}
                w={"fit-content"}
                cursor={"pointer"}
                onClick={() => setSelectedOption(id)}
              >
                <Flex
                  h={"20px"}
                  w={"20px"}
                  backgroundColor={"white"}
                  color={"amaranth.500"}
                  borderRadius={"6px"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  mr={2}
                >
                  {selectedOption === id && <Check size={"16px"} />}
                </Flex>
                <Text>{option}</Text>
              </Flex>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
    </Flex>
  );
};
