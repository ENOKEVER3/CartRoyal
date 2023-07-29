import constants from "@/config/app";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { HambergerMenu as Menu } from "iconsax-react";
import React from "react";

const CategoryNav = () => {
  return (
    <Flex className="category-nav" borderTop={"1px solid #ddd"} p={3} align={"center"} justify={"center"} gap={10}>
      <Icon cursor={"pointer"} fontSize={25} as={Menu} />
      <Flex gap={10}>
        {constants.categories.map((cat, i) => (
          <Link fontSize={12} href="" key={i}>
            {cat}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoryNav;
