import Head from "next/head";
import { Box, Flex, Heading } from "@chakra-ui/react";
import TopNav from "@/layouts/TopNav";
import Header from "@/layouts/Header";
import CategoryNav from "@/layouts/CategoryNav";
import StoresList from "@/layouts/StoresList";
import Lists from "@/layouts/Lists";
import Advertisement from "@/layouts/Advertisement";
import Footer from "@/layouts/Footer";
import CategoryItems from "@/layouts/CategoryItems";

export default function Home() {
  const applicance_item = [
    { title: "Freezers" },
    { title: "Refrigerators" },
    { title: "Dish Washers" },
    { title: "Washing Machines" },
    { title: "Water Dispensers" },
    { title: "Air Conditioners" },
  ];
  const health_item = [
    { title: "Skin Care" },
    { title: "Hair clippers" },
    { title: "Oral Care" },
    { title: "Fragrance" },
    { title: "Make Up" },
    { title: "Wig" },
  ];
  const phone_item = [
    { title: "Android Phones" },
    { title: "iPhones" },
    { title: "Note Phones" },
    { title: "Fold Phones" },
    { title: "Android Tablets" },
    { title: "iPads" },
  ];

  return (
    <>
      <Head>
        <title>Cart-Royal Shop</title>
        <meta name="description" content="......" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box w={"full"} h={"full"} bgColor={"#FFF6E7"} scrollBehavior={"smooth"}>
        <TopNav />
        <Header />
        <CategoryNav />

        <Box mx={55} my={10}>
          <StoresList />
          <Lists title="Recommended for you" />
          <Lists title="Flash sale" />
          <Advertisement />
          <Lists title="Hottest deals" />
          <Lists title="Newly Listed" />

          <CategoryItems heading="Phones & Tablets" items={phone_item} />
          <CategoryItems heading="Health & Beauty" items={health_item} />
          <Lists title="Recently Viewed" />
          <CategoryItems heading="Appliances" items={applicance_item} />
          <Advertisement />
          <CategoryItems heading="Appliances" items={applicance_item} />
          <CategoryItems heading="Appliances" items={applicance_item} />
        </Box>

        <Footer />
      </Box>
    </>
  );
}
