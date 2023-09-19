import Logo from "@/components/Logo";
import Footer from "@/layouts/Footer";
import { Box, Button, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  Money,
  Money2,
  Money4,
  People,
  Task,
  Wallet,
  Wallet2,
} from "iconsax-react";
import Head from "next/head";
import React from "react";

const sellersinfo = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Seller Info </title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Flex
          justifyContent={"space-between"}
          p={5}
          alignItems={"center"}
          boxShadow={"1px 0px 10px #ddd"}
        >
          <Logo />
          <Heading
            display={{ lg: "block", md: "block", sm: "none", base: "none" }}
          >
            Sellers Info
          </Heading>
          <Link>Back to Home</Link>
        </Flex>
        <Box p={10}>
          <Text
            textAlign={"center"}
            pt={5}
            fontSize={{ lg: 20, md: 15, sm: 12, base: 12 }}
          >
            Sell on Cart Royal and reach for hundreds of thousands of Cart Royal{" "}
            <br />
            customers. We have the fastest growing customer base in Nigeria and{" "}
            <br />
            the best in class operations.
          </Text>

          <Heading textAlign={"center"} pt={20}>
            Core Goals
          </Heading>
          <Flex
            alignItems={"center"}
            justifyContent={"center"}
            gap={10}
            py={10}
            flexWrap={"wrap"}
          >
            <Flex
              flexWrap={"wrap"}
              gap={5}
              border={"1px solid #ddd"}
              alignItems={"center"}
              cursor={"pointer"}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              p={5}
              borderRadius={20}
            >
              <People size={60} variant="Bold" />
              <Text fontSize={14}>
                {" "}
                Cart Royal Nigeria markets your product to 3,000,000 million+
                visitors every month. Our bigger vendors sell more than 1000+
                items everyday.
              </Text>
            </Flex>
            <Flex
              flexWrap={"wrap"}
              gap={5}
              border={"1px solid #ddd"}
              alignItems={"center"}
              cursor={"pointer"}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              p={5}
              borderRadius={20}
            >
              <Task size={60} variant="Bold" />
              <Text fontSize={14}>
                {" "}
                List as many products as you have ready in stock. You control
                your price.
              </Text>
            </Flex>
            <Flex
              flexWrap={"wrap"}
              gap={5}
              border={"1px solid #ddd"}
              alignItems={"center"}
              cursor={"pointer"}
              as={motion.div}
              whileHover={{ scale: 1.1 }}
              p={5}
              borderRadius={20}
            >
              <Wallet2 size={60} variant="Bold" />
              <Text fontSize={14}>
                {" "}
                No Listing fees, no maintenance fees, just standard commissions,
                and fixed shipping fees.
              </Text>
            </Flex>
          </Flex>
          <Flex justifyContent={"center"}>
            <Flex
              borderRadius={10}
              border={"1px solid #ddd"}
              gap={10}
              p={5}
              flexWrap={"wrap"}
            >
              <Logo />
              <Button
                as={Link}
                href="auth/sellers/sellers_register"
                color={"#fff"}
                bg={"linear-gradient(45deg,#FF8C00,#C1272D)"}
              >
                Sell on CartRoyal
              </Button>
            </Flex>
          </Flex>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default sellersinfo;
