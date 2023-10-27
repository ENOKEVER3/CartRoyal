import ActionMenu from "@/components/ActionMenu";
import Logo from "@/components/Logo";
import SearchWidget from "@/components/SearchWidget";
import { Flex, Link } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const Header = () => {
  return (
    <Flex
      as="header"
      className="header"
      justify={"space-between"}
      px={10}
      py={5}
      gap={30}
      align={"center"}
      w={"full"}
    >
      <Link as={NextLink} href="/">
        <Logo />
      </Link>
      <SearchWidget />
      <ActionMenu />
    </Flex>
  );
};

export default Header;
