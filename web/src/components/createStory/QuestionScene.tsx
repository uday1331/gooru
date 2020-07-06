import React, { useContext, useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { DataContext } from "../../context";
import { Box, Flex, Input, Textarea, Grid, InputRightElement, Radio, InputGroup } from "@chakra-ui/core";
import { BigButton } from "../reusables";
import { MdImage } from "react-icons/md";

export const QuestionScene: React.FC<RouteComponentProps<{ id: string }>> = ({ match: { params: { id } } }) => {
  const { storyHandler: { stories, setStories } } = useContext(DataContext);
  const [image, setImage] = useState(null);

  return (
    <Box position="relative" h="100%" w="100%" backgroundImage={`url("${image}")`} backgroundSize="cover">
      {
        !image && 
          <Flex mt={8} justify="center" align="center">
            <BigButton icon={MdImage} text="Image" onClick={() => {}} />
          </Flex>
      }

      <Box background="rgba(150, 156, 184, 0.8)" position="absolute" bottom={0} w="100%" p={8}>
        <Textarea placeholder="How should you deal with an angry customer?" />
        <Grid templateColumns="50% 50%" mt={8}>
          <Box mr={2}>
            <InputGroup>
            <Input placeholder="fight them" mb={4} />
            <InputRightElement children={<Radio size="lg" variantColor="green" value="1"></Radio> } />
            </InputGroup>
            <InputGroup>
            <Input placeholder="fight them" />
            <InputRightElement children={<Radio size="lg" variantColor="green" value="2"></Radio> } />
            </InputGroup>
          </Box>
          <Box ml={2}>
          <InputGroup>
            <Input placeholder="fight them" mb={4} />
            <InputRightElement children={<Radio size="lg" variantColor="green" value="3"></Radio> } />
            </InputGroup>
            <InputGroup>
            <Input placeholder="fight them" />
            <InputRightElement children={<Radio size="lg" variantColor="green" value="4"></Radio> } />
            </InputGroup>
          </Box>
        </Grid>
      </Box>
    </Box>
  )
}