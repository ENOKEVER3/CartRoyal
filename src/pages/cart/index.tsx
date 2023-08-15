import CategoryNav from "@/layouts/CategoryNav";
import Header from "@/layouts/Header";
import TopNav from "@/layouts/TopNav";
import {
  Avatar,
  Box,
  Checkbox,
  Divider,
  Flex,
  Heading,
  Icon,
  Input,
  Image,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navigation from "@/components/Navigation";
import { ShoppingCart, Trash } from "iconsax-react";
import { FaSearch } from "react-icons/fa";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";

const index = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Shopping Cart </title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <TopNav />
        <Header />
        <CategoryNav />
        <Navigation
          links={[
            {
              label: "Shopping Cart",
              href: "/cart",
            },
          ]}
        />
      </Box>
      <Flex className="cart-container" gap={10} bg={"#eee"} p={10} justify={"space-around"} minH="100vh">
        <Box w="full">

          <Flex wrap={"wrap"} gap={4} justify={"space-between"} w="full">

            <Flex align={"center"} gap={3}>
              <ShoppingCart size={30} />
              <Heading fontSize={"3xl"}>Shopping Cart (12)</Heading>
            </Flex>

            <Flex
              borderRadius={8}
              gap={2}
              justify={"space-between"}
              px={5}
              bg="#fff"
              align={"center"}
            >
              <Input
                border={"none"}
                flex={1}
                px={1}
                fontSize={"14px"}
                placeholder="Enter Shop Name or Item ..."
              />
              <FaSearch />
            </Flex>
          </Flex>

          {/* cart content */}

          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </Box>

        <OrderSummary />
      </Flex>
    </>
  );
};

export default index;
