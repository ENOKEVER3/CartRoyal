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

const CategoryMenu = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton fontSize={"14px"} as={Flex}>
        Category
      </MenuButton>
      <MenuList minWidth="150px">
        <MenuOptionGroup
          color={"#111"}
          defaultValue="ng"
          title="Category"
          type="radio"
        >
          {constants.categories.map((cat, i) => (
            <MenuItemOption color={"#111"} key={i} value={cat}>
              {cat}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

const SearchWidget = () => {
return (
    <Flex
      w="400px"
      gap={4}
      as="form"
      align="center"
      px={3}
      py={1}
      borderRadius={10}
      border="1px solid #ddd"
    >
      <CategoryMenu />
      <Input
        w={"full"}
        fontSize={"14px"}
        flex={1}
        border={"none"}
        bg="none"
        placeholder="Enter Keywords..."
      />
      <Button bg="darkorange" type="submit">
        <Icon as={FaSearch} />{" "}
      </Button>
    </Flex>
  );
};

export default SearchWidget;
