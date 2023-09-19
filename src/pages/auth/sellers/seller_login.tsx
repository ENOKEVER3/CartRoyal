import InputIconSide from "@/components/InputIconSide";
import Logo from "@/components/Logo";
import PasswordIconSide from "@/components/PasswordIconSide";
import {
  Box,
  Button,
  Center,
  Flex,
  Image,
  Input,
  Link,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const seller_login = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Sellers Login </title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent={"center"} gap={40} p={20} alignItems={"center"}>
        <Image
        display={{lg : 'block', md : 'none', sm : 'none', base : 'none'}}
          src="/assets/lady.png"
          width={"40%"}
          transform={"translateY(-20px)"}
        />
        <Box
          // bgImage={"/assets/lady.png"}
          border={'1px solid #ddd'}
          bgSize={"cover"}
          borderRadius={20}
          bgPos={"center"}
          p={10}
          >
          <Box
            // bg={"#000000a1"}
            // p={10}
            // backdropFilter={"blur(20px)"}
            // borderRadius={20}
          >
            <Logo />
            <Text py={3} fontWeight={700} fontSize={30}>
              Welcome Back!
            </Text>
            <InputIconSide />
            <PasswordIconSide />
            <Link color={"linkedin.800"} fontWeight={600}>
              Forgotten Password?
            </Link>{" "}
            <br />
            <Button
              my={2}
              bg={"linear-gradient(45deg,#FF8C00,#C1272D)"}
              py={6}
              color={"#fff"}
              width={"full"}
            >
              Login
            </Button>
            <Center>
              <Text fontWeight={600} fontSize={12}>
                OR
              </Text>
            </Center>
            <Center>
              <Link color={"#FF8C00"} fontWeight={600} href="/auth/sellers/sellersinfo">
                Register to Sell on CartRoyal
              </Link>{" "}
            </Center>
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default seller_login;
