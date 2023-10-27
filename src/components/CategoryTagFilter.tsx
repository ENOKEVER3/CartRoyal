import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from "@chakra-ui/react";
import React from "react";

const CategoryTagFilter = () => {
  return (
    <Flex align={"center"} w="full" justify={"space-between"}>
      <Flex gap={4} overflowX={"scroll"}>
        <Button>Free Items</Button>
        <Button>Free Shipping</Button>
      </Flex>

      <Box>
        <Menu closeOnSelect={false}>
          <MenuButton
            border={"1px solid gray"}
            p={3}
            py={2}
            cursor={"pointer"}
            borderRadius={10}
            as={Flex}
          >
            Sort By
          </MenuButton>
          <MenuList zIndex={10} minWidth="100px">
            <MenuOptionGroup
              color={"#111"}
              defaultValue="ng"
              title="Sorting"
              type="radio"
            >
              <MenuItemOption color={"#111"} value={"re"}>
                Relevant
              </MenuItemOption>
              <MenuItemOption color={"#111"} value={"rl"}>
                Recent Listing
              </MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default CategoryTagFilter;
