import CategoryItemsCard from "@/components/CategoryItemsCard";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

const CategoryItems = ({ heading, items }: { heading: string; items: any }) => {
  return (
    <>
      <Box w={"full"} borderRadius={"md"} bgColor={"#eee"} p={2} my={5}>
        <Heading w={"full"} textAlign={"center"}>
          {heading}
        </Heading>
        <Flex
          gap={2}
          alignItems={"center"}
          justifyContent={"space-around"}
          w={"full"}
        >
          {items.map(({ title }: { title: string }) => (
            <CategoryItemsCard key={title} title={title} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default CategoryItems;
