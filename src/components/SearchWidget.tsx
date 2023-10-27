import React from "react";
import {
  Box,
  Button,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuDivider,
  Image,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  Input,
  Icon,
} from "@chakra-ui/react";

import { FaSearch } from "react-icons/fa";
import constants from "@/config/app";
import CategoryMenu from "./CategoryMenu";

const SearchWidget = () => {
  return (
    <Flex
      className="search-widget"
      w="300px"
      gap={2}
      as="form"
      align="center"
      // px={3}
      // py={1}
      p={1}
      borderRadius={10}
      border="1px solid #ddd"
    >
      {/* <CategoryMenu /> */}
      <Input
        w={"full"}
        h={"8"}
        fontSize={"14px"}
        flex={1}
        border={"none"}
        bg="none"
        placeholder="Enter Keywords..."
      />
      <Button bg="darkorange" type="submit" h={"8"} w={"8"}>
        <Icon as={FaSearch} size={20} />
      </Button>
    </Flex>
  );
};

export default SearchWidget;
