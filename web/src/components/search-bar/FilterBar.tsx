import React from "react";
import { Flex, Text } from "@chakra-ui/core";
import { SearchBar } from "./SearchBar";
import { MdArrowDropDown } from "react-icons/all";

interface FilterBarProps {
  searchBarPlaceholder: string;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  searchBarPlaceholder,
}) => (
  <Flex direction="row" justify="space-between" w="100%" mt={8}>
    <SearchBar placeholder={searchBarPlaceholder} />
    <Flex direction="row" align="center" cursor={"pointer"}>
      <Text color="indigo">Sort by </Text>
      <MdArrowDropDown />
    </Flex>
  </Flex>
);
