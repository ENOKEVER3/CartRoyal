import Logo from "@/components/Logo";
import Footer from "@/layouts/Footer";
import SellersForm from "@/layouts/SellersForm";
import { Box, Flex, Heading, Link } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const sellers_register = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Seller Form </title>
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
            Sellers Form
          </Heading>
          <Link>Back to Home</Link>
        </Flex>
        <Box p={'45px'}>
          <Heading fontSize={20} fontWeight={500}>
            Register and start selling today - Create Your Own Seller Account!
          </Heading>
          <SellersForm />
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default sellers_register;
