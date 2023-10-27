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

const CategoryItemsCard = ({ title }: { title: string }) => {
  return (
    <Flex
      h="225px"
      w={"full"}
      pos={"relative"}
      my={2}
      role="group"
      cursor={"pointer"}
    >
      <Image
        src="/assets/catalogue/img.jpg"
        w={"full"}
        h="full"
        objectFit={"cover"}
        borderRadius={"md"}
        _groupHover={{
          scale: 1.1,
        }}
      />
      <Box
        pos={"absolute"}
        bottom={0}
        borderBottomRadius={"md"}
        h={"fit-content"}
        w={"full"}
        p={2}
        backdropBlur={"8px"}
        backgroundColor={"rgba(0, 0, 0, 0.2)"}
        _hover={{
          backgroundColor: "rgba(0, 0, 0, 0.4)",
        }}
      >
        <Text
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          textAlign={"center"}
          h={"fit-content"}
          w={"full"}
          fontWeight={600}
          color={"#fdfdfd"}
        >
          {title}
        </Text>
      </Box>
    </Flex>
  );
};

export default CategoryItemsCard;
