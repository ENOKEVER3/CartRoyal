import Logo from "@/components/Logo";
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
} from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const LocaleMenu = () => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton>
        <Flex alignItems={"center"} gap={1}>
          <Image w="23px" src="/assets/flags/nigeria.png" />
          <Text fontSize={"13px"}>NG</Text>
        </Flex>
      </MenuButton>
      <MenuList minWidth="150px">
        <MenuOptionGroup defaultValue="ng" title="Country" type="radio">
          <MenuItemOption value="ng">
            <Flex alignItems={"center"} gap={5}>
              <Image w="20px" src="/assets/flags/nigeria.png" />
              <Text fontSize={"13px"}>NG</Text>
            </Flex>
          </MenuItemOption>
          <MenuItemOption value="fr">
            <Flex alignItems={"center"} gap={5}>
              <Image w="20px" src="/assets/flags/france.png" />
              <Text fontSize={"13px"}>FR</Text>
            </Flex>
          </MenuItemOption>
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  );
};

const TopNav = () => {
  return (
    <Flex className="top-nav" px={6} fontSize={"13px"} py={2} bg="#eee" color={"#111"}>
      <Box flex={1} visibility={{lg :"visible", md : "visible",sm : 'hidden', base : 'hidden' }}><Logo /></Box>

      <Flex justifySelf={"flex-end"} as={"nav"} align={"center"} gap={6}>
        <LocaleMenu />
        <Link color={"inherit"} fontSize={"inherit"} as={NextLink} href="auth/sellers/seller_login">
          Become a seller
        </Link>
        <Link color={"inherit"} fontSize={"inherit"} as={NextLink} href="auth/login">
          Sign In
        </Link>
        <Link color={"inherit"} fontSize={"inherit"} as={NextLink} href="auth/signup">
          SignUp
        </Link>
      </Flex>
    </Flex>
  );
};

export default TopNav;
