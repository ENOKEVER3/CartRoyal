import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import DownloadSource from "./DownloadSource";

const SliderMenu = () => {
  return (
    <Swiper
      className="swiper-menu"
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <Box  pos={"relative"} minH="80vh" bg="#C1272D" as={SwiperSlide}>
        <Image
          pos={"absolute"}
          right={"-40%"}
          src="/assets/gradient-mask.png"
        />
        <Flex className="top-slider" justify={"space-between"} align={"center"} p={20}>
          <Box>
            <Heading fontSize={"3.5rem"} py={4}>
              Buy and Sell
            </Heading>
            <Text maxW="300px">
              Receive the product as described or get a refund posting for sale
              is completely <b>FREE</b>
            </Text>
            <Button my={3} color={"#C1272D"} borderRadius={0} py={2} px={10}>
              <Text fontSize={"10px"}>READ MORE</Text>
            </Button>
            <DownloadSource />
          </Box>
          <Image position={"relative"} zIndex={1} p={0} my={10} src="/assets/phones.png" w="550px" />
        </Flex>
      
      </Box>
    </Swiper>
  );
};

export default SliderMenu;
