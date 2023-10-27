import { Box, Flex, Image, Link, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";

const StoreCard = ({ title, img }: { title: string; img?: string }) => {
  return (
    <Link as={NextLink} href={`/stores/${title}`}>
      <Box role="group" cursor={"pointer"}>
        <Flex h="125px" w={"200px"} pos={"relative"} my={2}>
          <Image
            src={img ? img : "/assets/catalogue/img.jpg"}
            w={"full"}
            h="full"
            objectFit={"cover"}
            borderRadius={"md"}
            _groupHover={{
              scale: 1.1,
            }}
          />
          <Box
            pos={"absolute"}
            borderRadius={"md"}
            h={"full"}
            w={"full"}
            backdropBlur={"8px"}
            backgroundColor={"rgba(0, 0, 0, 0.2)"}
            _hover={{
              backgroundColor: "rgba(0, 0, 0, 0.4)",
            }}
          >
            <Text
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"center"}
              textTransform={"capitalize"}
              h={"full"}
              w={"full"}
              fontWeight={600}
              color={"#fdfdfd"}
            >
              {title ? title : "Official Store"}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Link>
  );
};

export default StoreCard;
