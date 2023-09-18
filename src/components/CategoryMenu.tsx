import { Flex, Link, Menu, MenuButton, MenuItemOption, MenuList, MenuOptionGroup } from '@chakra-ui/react';
import React from 'react'
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
  

export default CategoryMenu