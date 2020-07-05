import React from "react";
import { InputGroup, InputAddon, Input } from "@chakra-ui/core";
import { MdSearch } from "react-icons/md";

interface SearchBarProps {
  placeholder: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => (
  <InputGroup size="md">
    <InputAddon rounded="0" children={<MdSearch />} />
    <Input rounded="0" placeholder={placeholder} width={300} />
  </InputGroup>
);
