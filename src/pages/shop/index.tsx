import Catalogue from "@/components/Catalogue";
import Features from "@/components/Features";
import Products from "@/components/Products";
import SliderMenu from "@/components/SliderMenu";
import CategoryNav from "@/layouts/CategoryNav";
import Header from "@/layouts/Header";
import TopNav from "@/layouts/TopNav";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

const index = () => {
  return (
    <>
      <Head>
        <title>Royal Cart - Shop </title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <TopNav />
        <Header />
        <CategoryNav />
        <SliderMenu />
        <Features />
        <Catalogue />
        <Products />
      </Box>
    </>
  );
};

export default index;
