import constants from '@/config/app'
import { Box, Checkbox, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const ProductList = ({title}:{title:string}) => {
  return (
   <Flex px={30}>

    <Box w={"200px"}>
        <Heading fontSize={"1.6rem"}>Categories</Heading>
        <Box my={6}  height={"200px"} overflowY={"auto"}>
         {constants.categories.map((cat)=>(
           <Flex my={2} align={"center"} key={cat.label} gap={5}>
           <Checkbox />
           <Text fontSize={"16px"}>{cat.label} <Text as={"span"} fontSize={"12px"} fontWeight={"bold"} color={"#ddd"}>(2004)</Text> </Text>
         </Flex>
         ))}
        </Box>

        <Box>
          <Flex align={"center"} justify={"space-between"} px={2}>
            <Heading fontSize={"1.52rem"}>Price</Heading>
            <Heading>-</Heading>
          </Flex>
         </Box>
    </Box>

    <Box>
        <Heading fontSize={"1.6rem"}>{title} Store</Heading>
    </Box>

   </Flex>
  )
}

export default ProductList