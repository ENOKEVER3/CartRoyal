import {
  Box,
  Button,
  Center,
  Circle,
  Flex,
  Heading,
  Icon,
  IconButton,
  Image,
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { Heart, HeartAdd, HeartCircle, Truck } from "iconsax-react";
import React from "react";

const ProductCard = () => {
  return (
    <Box>
      <Flex h="200px" pos={"relative"} my={2}>
        <Image
          w={"full"}
          objectFit={"cover"}
          h="full"
          borderRadius={"md"}
          src="/assets/catalogue/img.jpg"
        />
        <Circle
          cursor={"pointer"}
          pos={"absolute"}
          bg={"blackAlpha.700"}
          m={2}
          size={"40px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Icon as={Heart} color={"#fff"} variant="Bulk" />
        </Circle>
      </Flex>
      <Box>
        <Heading fontSize={"medium"}>
          Lorem ipsum dolor sit amet consectetur.
        </Heading>
        <Flex my={2} gap={5}>
          <Text className="price">
            <Text as="span" display={"block"} fontWeight={"bold"}>
              $59,99.99
            </Text>
          </Text>
          <Text>Free Shiping</Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProductCard;
