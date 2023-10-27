import Catalogue from "@/components/Catalogue";
import Features from "@/components/Features";
import ProductCard from "@/components/ProductCard";
import ProductsHeader from "@/components/ProductsHeader";
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
import { Heading, Image, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const index = () => {
  return (
    <>
      <Head>
        <title>Cart-Royal Shop</title>
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

        {/* product lists start */}
        <Box p={15} maxW={"1400px"} m="auto">
          <ProductsHeader title="Recommended for you" />

          <Swiper
            className="swiper-menu"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              300:{
                width:300,
                slidesPerView:1.6
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1000: {
                width: 1000,
                slidesPerView: 4,
              },
              1400: {
                width: 1400,
                slidesPerView: 5,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </Box>
        {/* product lists start */}

        <FeaturedCategories />
        <MoneyBack />

        {/* product lists start */}
        <Box p={15} maxW={"1400px"} m="auto">
          <ProductsHeader title="Newly Listed" />

          <Swiper
            className="swiper-menu"
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            breakpoints={{
              // when window width is >= 640px
              300:{
                width:300,
                slidesPerView:1.6
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },
              // when window width is >= 768px
              768: {
                width: 768,
                slidesPerView: 3,
              },
              1000: {
                width: 1000,
                slidesPerView: 4,
              },

              1400: {
                width: 1400,
                slidesPerView: 5,
              },
            }}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>

            <SwiperSlide>
              <ProductCard />
            </SwiperSlide>
          </Swiper>
        </Box>
        {/* product lists start */}

        <Footer />
      </Box>
    </>
  );
};

export default index;
