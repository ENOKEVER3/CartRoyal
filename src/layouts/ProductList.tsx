import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ProductList = ({title}:{title:string}) => {
  return (
   <Flex px={30}>

    <Box w={"400px"}>
        <Heading fontSize={"1.6rem"}>Categories</Heading>
    </Box>

    <Box>
        <Heading fontSize={"1.6rem"}>{title} Store</Heading>
    </Box>

   </Flex>
  )
}

export default ProductList