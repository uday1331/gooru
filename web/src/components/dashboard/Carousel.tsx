import React, { FC } from "react";
import { Story } from "../../types/story";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import { Box, Flex, Icon, PseudoBox } from "@chakra-ui/core";
import { StoryCard } from "./StoryCard";

interface CarouselProps {
  stories: Story[];
}

export const Carousel: FC<CarouselProps> = ({ stories }) => {
  return (
    <CarouselProvider
      naturalSlideHeight={100}
      naturalSlideWidth={1000}
      totalSlides={stories.length}
      visibleSlides={3}
      isIntrinsicHeight
    >
      <Box position={"relative"}>
        <Box w={"92%"} mx={"auto"}>
          <Slider>
            {stories.map((story, index) => (
              <Slide key={index} index={index}>
                <StoryCard story={story} />
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
