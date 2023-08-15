import {
  Flex,
  Checkbox,
  Avatar,
  Divider,
  Heading,
  Icon,
  Box,
  Text,
  Image,
  Textarea,
} from "@chakra-ui/react";
import { Trash } from "iconsax-react";
import React from "react";

const CartItem = ({ checkout = false }: { checkout?: boolean }) => {
  return (
    <Box bg="#fff" my={5} borderRadius={10} py={5} px={10}>
      <Flex gap={5} justify={"space-between"} align={"center"}>
        <Flex align={"center"} gap={5}>
          {!checkout && <Checkbox />}
          <Avatar size="sm" />
          <Text display={["none","block"]} fontSize={"2xl"}>Funiture Store (4)</Text>
        </Flex>

        {!checkout && <Icon as={Trash} />}
      </Flex>
      <Divider mt={3} />

      <Flex  gap={8} justify={"space-between"} py={4}>
        <Flex  gap={5} align={"center"}>
          {!checkout && <Checkbox />}
          <Image
            w="100px"
            h="100px"
            objectFit={"cover"}
            src="/assets/catalogue/img.jpg"
          />
          <Box>
            <Heading fontSize={"large"}>
              Lorem ipsum dolor sit amet cons
            </Heading>
            <Text my={2}>Lorem ipsum dolor sit.</Text>
          </Box>
        </Flex>
        <Flex align={"center"} gap={10}>
          <Heading fontSize={"large"}>$56,999.99</Heading>
          {!checkout && <Icon as={Trash} />}
        </Flex>
      </Flex>

      {checkout && (
        <>
          <Divider my={4} />
          <Flex>
            <Textarea
              placeholder="Note for Shiper ( Optional )"
              w="max-content"
              p={5}
            />
          </Flex>
        </>
      )}
    </Box>
  );
};

export default CartItem;
