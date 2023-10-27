import CategoryNav from "@/layouts/CategoryNav";
import Header from "@/layouts/Header";
import TopNav from "@/layouts/TopNav";
import { Box, Heading } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation";
import ProductList from "@/layouts/ProductList";
import Lists from "@/layouts/Lists";
import CategoryTagFilter from "@/components/CategoryTagFilter";

const Category = () => {
  const router = useRouter();
  const store = router.query.store as string;
  return (
    <>
      <Head>
        <title>Royal Cart - {store} </title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <TopNav />
        <Header />
        <CategoryNav />
        <Heading m={10}>{store} Official Store</Heading>

        <Box mx={10}>
          <CategoryTagFilter />
        </Box>

        <Box>
          <Lists title="Phones" />
          <Lists title="Tablets" />
          <Lists title="Laptops" />
          <Lists title="Vision Pros" />
          <Lists title="Assessories" />
          <ProductList />
        </Box>
      </Box>
    </>
  );
};

export default Category;
