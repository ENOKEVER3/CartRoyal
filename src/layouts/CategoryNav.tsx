import constants from "@/config/app";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { HambergerMenu as Menu } from "iconsax-react";
import React from "react";

const CategoryNav = () => {
  return (
    <Flex className="category-nav" borderTop={"1px solid #ddd"} px={5} py={3} align={"center"} justify={"center"} gap={10}>
      <Icon cursor={"pointer"} fontSize={25} as={Menu} />
      <Flex py={3} gap={10} position={"relative"} overflowX={"scroll"} w="full" maxW={"1100px"} align={"center"}>
        {constants.categories.map((cat, i) => (
          <Link whiteSpace={"nowrap"} display={"inline-block"} w="full" fontSize={12} href={cat.href} key={i}>
            {cat.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoryNav;
