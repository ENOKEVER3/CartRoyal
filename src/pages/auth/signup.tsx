import Logo from "@/components/Logo";
import TopNav from "@/layouts/TopNav";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const signup = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Sign Up </title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopNav />
      <Flex justifyContent={"center"} mt={"40px"} px={20}>
        <Box
          border={"4px solid #FBB03B"}
          p={{ lg: 10, md: 10, sm: 7, base: 5 }}
          borderRadius={15}
        >
          <Heading fontSize={30}>Hello User</Heading>
          <Text width={300} fontSize={12}>
            Welcome to Cart Royal
          </Text>

          <FormControl pt={4} isRequired>
            <FormLabel>Username</FormLabel>
            <Input placeholder="Cart Royal User" width={300} />
          </FormControl>
          <FormControl pt={4} isRequired>
            <FormLabel>Email</FormLabel>
            <Input placeholder="you@gmail.com" width={300} />
          </FormControl>
          <FormControl pt={4}>
            <Text>Password</Text>
            <Input
              type={"password"}
              placeholder="Shh... It's Secret"
              width={300}
            />
          </FormControl>

          <Flex justifyContent={"space-between"} gap={2} py={3}>
            <Button width={"full"} bg={"#C32E33"} color={"#fff"}>
              Sign Up
            </Button>
            {/* <Button
            width={'full'}
            bg={"linear-gradient(45deg, #C32E33,#C32E33)"}
            color={"#fff"}
          >
            SignUp
          </Button> */}
          </Flex>
          <Flex justifyContent={"center"}>
            <Text as={Link} href="/auth/login" textAlign={"center"}>
              Already have an account? Login
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Flex
        gap={4}
        alignItems={"center"}
        justifyContent={"center"}
        fontSize={14}
        color={"rgb(69, 69, 69)"}
        pt={8}
      >
        <Text>All Rights Reserved</Text>
        <Text>|</Text>
        <Logo />
      </Flex>
    </>
  );
};

export default signup;
