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
      <MenuButton fontSize={"14px"} px={3} as={Flex}>
        Category
      </MenuButton>
      <MenuList zIndex={10} minWidth="100px">
        <MenuOptionGroup
          color={"#111"}
          defaultValue="ng"
          title="Category"
          type="radio"
        >
          {constants.categories.map((cat, i) => (
          <Link href={cat.href}>
            <MenuItemOption color={"#111"} key={i} value={cat.label}>
              {cat.label}
            </MenuItemOption></Link>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

const SearchWidget = () => {
return (
    <Flex className="search-widget"
      w="300px"
      gap={4}
      as="form"
      align="center"
      // px={3}
      // py={1}
      p={2}
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
