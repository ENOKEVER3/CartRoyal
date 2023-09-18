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
import SearchWidget from '@/components/SearchWidget';
import CategoryMenu from '@/components/CategoryMenu';
import CategoryMenuFake from '@/components/CategoryMenuFake';
import Logo from '@/components/Logo';

const seller = () => {
  return (
    <>
    <Head>
      <title>Royal Cart - Seller </title>
      <meta name="description" content="......" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <TopNav />
    <Box>
        
    <Flex justifyContent={"center"} mt={"50px"}>
      <Box border={"4px solid #FBB03B"} p={{lg : 10, md : 10, sm : 7, base :5}} borderRadius={30}>
        <Heading fontSize={{lg : 30, md : 30, sm : 20, base : 20}}>Hello Seller</Heading>
        <Text width={300} fontSize={12}>
          Enter your appropriate details in this form
        </Text>

        <FormControl pt={4} isRequired>
          <FormLabel>Business Name</FormLabel>
          <Input placeholder="Cart Royal Business" width={'full'} />
        </FormControl>
        <FormControl pt={4} isRequired>
          <FormLabel>Categories</FormLabel>
          <Box width={'full'} border={'1px solid #ddd'} p={2} borderRadius={5}><CategoryMenuFake /></Box>
        </FormControl>
        
        <Flex justifyContent={"space-between"} gap={2} py={3}>
          <Button
            width={'full'}
            bg={"linear-gradient(45deg, #C32E33,#C32E33)"}
            color={"#fff"}
          >
            Next
          </Button>
        </Flex>
        <Flex justifyContent={'center'}>
          <Text as={Link} href="/shop" textAlign={"center"}>
            Back Home
          </Text>
        </Flex>
      </Box>
    </Flex>

    </Box>
    <Flex gap={4} alignItems={'center'} justifyContent={'center'} fontSize={14} color={"rgb(69, 69, 69)"} pt={8}>
      <Text>All Rights Reserved</Text>
      <Text>|</Text>
      <Logo />
    </Flex>
  </>
  )
}

export default seller