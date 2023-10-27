import constants from "@/config/app";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { HambergerMenu as Menu } from "iconsax-react";
import React from "react";

const CategoryNav = () => {
  return (
    <Flex
      className="category-nav"
      borderTop={"1px solid #ddd"}
      w="full"
      px={5}
      align={"center"}
      justify={"center"}
    >
      {/* <Icon cursor={"pointer"} fontSize={25} as={Menu} /> */}
      <Flex
        py={2}
        gap={5}
        position={"relative"}
        overflowX={"scroll"}
        w="full"
        maxW={"1200px"}
        align={"center"}
        justify={"space-between"}
        direction={"row"}
      >
        {constants.categories.map((cat, i) => (
          <Link
            whiteSpace={"nowrap"}
            w="fit-content"
            p={"2"}
            fontSize={12}
            fontWeight={"medium"}
            href={cat.href}
            key={i}
          >
            {cat.label}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoryNav;
