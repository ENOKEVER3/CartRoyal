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
  Link,
  Textarea,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import Navigation from "@/components/Navigation";
import { Edit, Home, ShoppingCart, Trash } from "iconsax-react";
import { FaSearch } from "react-icons/fa";
import CartItem from "@/components/CartItem";
import OrderSummary from "@/components/OrderSummary";

const checkout = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Checkout </title>
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

      <Flex gap={10} bg={"#eee"} p={10} justify={"space-around"} minH="100vh">
        <Box w="full">
          <Flex justify={"space-between"} w="full">
            <Flex align={"center"} gap={3}>
              <ShoppingCart size={30} />
              <Heading fontSize={"3xl"}>Checkout (12)</Heading>
            </Flex>
          </Flex>

          <Box my={3} p={4} w="full" bg={"#fff"}>
            <Flex align={"center"} justify={"space-between"} w="full">
                <Box>
                    <Heading py={3} fontSize={"2xl"}>DELIVERY ADDRESS</Heading>
                    <Flex my={2} gap={2}>
                        <Icon as={Home} />
                        <Box>
                          <Text>Home</Text>
                          <Text>07085218197</Text>
                          <Text>Lorem ipsum dolor sit amet</Text>
                        </Box>
                    </Flex>
                </Box>
                
                <Flex align={"center"} gap={2} as={Link}>
                    <Icon as={Edit} />
                    <Text>Change Your Delivery Address</Text>
                </Flex>
                

                <Textarea placeholder="Note for Shiper ( Optional )" w="max-content" p={5} />
            </Flex>
          </Box>

          {/* cart content */}

          <CartItem checkout />
        </Box>

        <OrderSummary />
      </Flex>
    </>
  );
};

export default checkout;
