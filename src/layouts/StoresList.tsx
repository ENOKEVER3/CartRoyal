import {
  Box,
  Checkbox,
  Circle,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Heart } from "iconsax-react";
import React from "react";
import Footer from "./Footer";
import StoreCard from "@/components/StoreCard";

const StoresList = () => {
  return (
    <>
      <Box gap={10} mt={5}>
        <Heading fontSize={20} fontWeight={500}>
          Official Stores
        </Heading>
        <Flex wrap={"wrap"} gap={2} justify={"space-between"}>
          <StoreCard title="Samsung" />
          <StoreCard title="Adidas" />
          <StoreCard title="Apple" />
          <StoreCard title="Xiaomi" />
          <StoreCard title="Denim" />
          <StoreCard title="Nike" />
          <StoreCard title="Infinix" />
          <StoreCard title="Nivea" />
          <StoreCard title="Rolex" />
          <StoreCard title="Toyota" />
          <StoreCard title="KIA" />
          <StoreCard title="Samsung" />
        </Flex>
      </Box>
    </>
  );
};

export default StoresList;
