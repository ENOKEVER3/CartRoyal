import { Box, Button, Flex, Heading, IconButton, Link } from "@chakra-ui/react";
import { ArrowLeft, ArrowRight } from "iconsax-react";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProductsHeader = ({title}:{title:string}) => {
  return (
    <Box>
      <Flex justify={"space-between"} wrap={"wrap"}>
        <Box>
          <Heading>{title}</Heading>
          <Link href="" fontSize={"12px"} textDecoration={"underline"}>
            Sell All
          </Link>
        </Box>

        <Flex gap={4}>
          <IconButton
            borderRadius={40}
            icon={<ArrowLeft />}
            aria-label={""}
          ></IconButton>
          <IconButton
            borderRadius={40}
            icon={<ArrowRight />}
            aria-label={""}
          ></IconButton>
        </Flex> 
      </Flex>
    </Box>
  );
};

export default ProductsHeader;
