import { Box, Flex, Input } from "@chakra-ui/react";
import React from "react";

const PriceRange = ({ width }: { width?: any }) => {
  return (
    <Box mb={5} w={width ? width : "full"}>
      <Flex className="price-ranger" bg={""} w={"full"}>
        <Box
          type="range"
          as="input"
          w={"full"}
          style={{ transform: "rotate(180deg)" }}
          min={100}
          max={999999}
        />
        {/* 
        <Box
          type="range"
          as="input"
          style={{
            transform: "translateX(-6px)",
          }}
          min={100}
          max={9999999}
        /> */}
      </Flex>
    </Box>
  );
};

export default PriceRange;
