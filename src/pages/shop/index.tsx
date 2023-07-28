import Catalogue from "@/components/Catalogue";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import Products from "@/components/Products";
import SliderMenu from "@/components/SliderMenu";
import CategoryNav from "@/layouts/CategoryNav";
import FeaturedCategories from "@/layouts/FeaturedCategories";
import Footer from "@/layouts/Footer";
import Header from "@/layouts/Header";
import MoneyBack from "@/layouts/MoneyBack";
import NewlyListed from "@/layouts/NewlyListed";
import TopNav from "@/layouts/TopNav";
import { Box, Flex } from "@chakra-ui/react";
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
        <Flex p={5} justifyContent={'center'} alignItems={'center'}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </Flex>
        <Flex p={5} justifyContent={'center'} alignItems={'center'}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        </Flex>
        <FeaturedCategories />
        <MoneyBack />
        <NewlyListed />
        <Footer />
      </Box>
    </>
  );
};

export default index;
