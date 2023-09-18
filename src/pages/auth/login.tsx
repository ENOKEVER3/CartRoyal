import React from 'react'
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
import Logo from '@/components/Logo';

const login = () => {
  return (
    <>
    <Head>
      <title>Royal Cart - Login </title>
      <meta name="description" content="......" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopNav />
    <Flex justifyContent={"center"} mt={"50px"}>
      <Box border={"4px solid #FBB03B"} p={{lg : 10, md : 10, sm : 7, base :5}} borderRadius={30}>
        <Heading fontSize={30}>Hello User</Heading>
        <Text width={300} fontSize={12}>
          Enter your details to get signed in to your account
        </Text>

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
          {/* <Button
           width={'full'}
           bg={"#FBB03B"} color={"#fff"}>
            Help?
          </Button> */}
          <Button
            width={'full'}
            bg={"linear-gradient(45deg, #C32E33,#C32E33)"}
            color={"#fff"}
          >
            Login
          </Button>
        </Flex>
        <Flex justifyContent={'center'}>
          <Text as={Link} href="/auth/signup" textAlign={"center"}>
            Don't have an account? SignUp
          </Text>
        </Flex>
      </Box>
    </Flex>

    <Flex gap={4} alignItems={'center'} justifyContent={'center'} fontSize={14} color={"rgb(69, 69, 69)"} pt={8}>
      <Text>All Rights Reserved</Text>
      <Text>|</Text>
      <Logo />
    </Flex>
  </>
  )
}

export default login