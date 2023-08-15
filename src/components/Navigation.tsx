import { Box, Flex, Link } from "@chakra-ui/react";
import { ArrowRight, Home3 } from "iconsax-react";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Navigation = ({ links }: { links: any[] }) => {
  return (
    <Box px={30} py={5}>
      <Flex gap={5} align={"center"}>
        <Link fontWeight={"bold"} href="/shop"><Home3 variant="Bulk" color="darkorange"/></Link>
        {links.map((link, i) => (
          <Flex key={i} align={"center"} gap={5}>
            <FaAngleRight />
            <Link textTransform={"capitalize"} href={link.href}>{link.label}</Link>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Navigation;
