import React from "react";
import { Box, Heading, Flex, Text, Button, Link } from "@chakra-ui/react";

const OrderSummary = () => {
  return (
    <Box bg="#fff" className="order-summary" height={"max-content"} mt={5} p={"15px"} maxW="400px" w="full">
      <Heading py={5} fontSize={"2xl"} textAlign={"center"}>
        Order Summary
      </Heading>

      <Flex align={"center"} justify={"space-between"}>
        <Box>
            <Text><b>Total Price</b></Text>
            <Text>4 Items</Text>
        </Box>

        <Heading fontSize={"larger"}>$660,998</Heading>
      </Flex>




  <Link href="/cart/checkout">
  <Button w="full" my={5}>Proceed to Checkout</Button></Link>

    </Box>
  );
};

export default OrderSummary;
