import { Box, Center, Circle, Divider, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const Catalogue = () => {
  return (
    <Box p={10}>
      <Center flexDirection={"column"}>
        <Heading>All the Catalogue you love</Heading>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, vero!
        </Text>
      </Center>

      <Flex wrap={"wrap"} gap={10} justify={"center"} my={10}>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/1.png" />
        </Circle>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/2.png" />
        </Circle>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/3.png" />
        </Circle>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/4.png" />
        </Circle>
      </Flex>

      <Flex wrap={"wrap"} gap={10} justify={"center"} my={10}>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/5.png" />
        </Circle>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/6.png" />
        </Circle>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/7.png" />
        </Circle>
        <Circle p={8} bg={"#F9F9F9"}>
          <Image w={"100px"} src="/assets/catalogue/8.png" />
        </Circle>
      </Flex>

      <Divider my={15} />
      
    </Box>
  );
};

export default Catalogue;
