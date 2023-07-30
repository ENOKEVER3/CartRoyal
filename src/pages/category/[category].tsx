import CategoryNav from "@/layouts/CategoryNav";
import Header from "@/layouts/Header";
import TopNav from "@/layouts/TopNav";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";
import Navigation from "@/components/Navigation";
import ProductList from "@/layouts/ProductList";

const Category = () => {
  const router = useRouter();
  const category = router.query.category as string;
  return (
    <>
      <Head>
        <title>Royal Cart - {category} </title>
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
              label: category,
              href: "/" + category,
            },
          ]}
        />

        <ProductList title={category} />
      </Box>
    </>
  );
};

export default Category;
