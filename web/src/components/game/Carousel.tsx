import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Flex, Icon, PseudoBox, Text } from "@chakra-ui/core";
import { ResourceType, Scene } from "../../types/scene";
import { SvgImage } from "../reusables";

interface CarouselProps {
  scenes: Scene[];
}

export const Carousel: React.FC<CarouselProps> = ({ scenes }) => {
  const totalSlides = scenes.length;

  return (
    <CarouselProvider
      naturalSlideHeight={75}
      naturalSlideWidth={100}
      totalSlides={totalSlides}
      visibleSlides={5}
      isIntrinsicHeight
    >
      <Box position={"relative"}>
        <Box w={"88%"} mx={"auto"}>
          <Slider>
            {scenes.map(({ title, resource }, index) => (
              <Slide key={index} index={index}>
                <Flex
                  h={"100px"}
                  w={"130px"}
                  my={4}
                  mx={"auto"}
                  py={4}
                  alignItems={"center"}
                  position={"relative"}
                >
                  <Box
                    zIndex={10}
                    w={"100%"}
                    backgroundColor={"white"}
                    overflow={"hidden"}
                  >
                    <Text
                      fontWeight={"bold"}
                      fontSize={"sm"}
                      textAlign={"center"}
                    >
                      {title}
                    </Text>
                  </Box>
                  {resource?.type === ResourceType.IMAGE && (
                    <SvgImage
                      id={`${index}-carousel`}
                      image={resource.url}
                      style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        borderRadius: "12px",
                      }}
                    />
                  )}
                </Flex>
              </Slide>
            ))}
          </Slider>
        </Box>

        <Box
          w={"100%"}
          position={"absolute"}
          top={"50%"}
          transform={"translateY(-50%)"}
        >
          <Flex alignItems={"center"} justifyContent={"space-between"} px={"2"}>
            <PseudoBox
              _hover={{ color: "amaranth.400" }}
              color={"amaranth.500"}
            >
              <ButtonBack>
                <Icon name={"chevron-left"} size={"40px"} />
              </ButtonBack>
            </PseudoBox>
            <PseudoBox
              _hover={{ color: "amaranth.400" }}
              color={"amaranth.500"}
            >
              <ButtonNext>
                <Icon name={"chevron-right"} size={"40px"} />
              </ButtonNext>
            </PseudoBox>
          </Flex>
        </Box>
      </Box>
    </CarouselProvider>
  );
};
