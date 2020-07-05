import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, Flex, Icon, PseudoBox, Text } from "@chakra-ui/core";
import { Scene } from "../../../types/scene";

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
                  border={"2px"}
                  borderColor={"indigo.500"}
                  borderRadius={"6px"}
                  alignItems={"center"}
                  position={"relative"}
                >
                  <Box zIndex={10} w={"100%"} backgroundColor={"white"}>
                    <Text fontWeight={"bold"} textAlign={"center"}>
                      {title}
                    </Text>
                  </Box>
                  {resource && (
                    <img
                      src={resource.url}
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "auto",
                        top: 0,
                        left: 0,
                        overflow: "none",
                        opacity: "30%",
                      }}
                      alt={"screen"}
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
            <PseudoBox _hover={{ color: "indigo.400" }} color={"indigo.500"}>
              <ButtonBack>
                <Icon name={"chevron-left"} size={"30px"} />
              </ButtonBack>
            </PseudoBox>
            <PseudoBox _hover={{ color: "indigo.400" }} color={"indigo.500"}>
              <ButtonNext>
                <Icon name={"chevron-right"} size={"30px"} />
              </ButtonNext>
            </PseudoBox>
          </Flex>
        </Box>
      </Box>
    </CarouselProvider>
  );
};
