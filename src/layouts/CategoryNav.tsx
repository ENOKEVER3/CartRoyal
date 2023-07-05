import constants from "@/config/app";
import { Flex, Icon, Link } from "@chakra-ui/react";
import { Menu } from "iconsax-react";
import React from "react";

const CategoryNav = () => {
  return (
    <Flex borderTop={"1px solid #ddd"} p={2} align={"center"} justify={"center"} gap={10}>
      <Icon cursor={"pointer"} fontSize={20} as={Menu} />
      <Flex gap={10}>
        {constants.categories.map((cat, i) => (
          <Link fontSize={14} href="" key={i}>
            {cat}
          </Link>
        ))}
      </Flex>
    </Flex>
  );
};

export default CategoryNav;
