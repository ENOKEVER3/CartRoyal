import React from "react";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

const DownloadSource = () => {
  return (
    <Box my={5}>
      <Text fontSize={"11px"}>DOWNLOAD CART ROYAL SOON ON </Text>

      <Flex className="" justify={"flex-start"} wrap={"wrap"} gap={4} my={2}>
        <Image w="140px" src="/assets/google-play.png" />
        <Image w="140px" src="/assets/app-store.png" />
      </Flex>
    </Box>
  );
};

export default DownloadSource;
