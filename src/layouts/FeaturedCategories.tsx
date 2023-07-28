import { Box, Flex, Heading, Image } from '@chakra-ui/react'
import React from 'react'

const FeaturedCategories = () => {
  return (
    <Box p={10} mb={20}>
        <Box px={200}>
        <Flex justifyContent={'space-around'} pb={7}>
        <Heading>Featured Categories</Heading>
        </Flex>
        <Flex gap={2} alignItems={'center'}>
            <Box width={300} borderRadius={10} bg={'darkorange'} height={300}></Box>
            <Box>
            <Box my={1} width={200} borderRadius={10} bg={'darkorange'} height={150}></Box>
            <Box width={200} borderRadius={10} bg={'darkorange'} height={150}></Box>
            </Box>
            <Box>
            <Box my={1} width={200} borderRadius={10} bg={'darkorange'} height={150}></Box>
            <Box width={200} borderRadius={10} bg={'darkorange'} height={150}></Box>
            </Box>
            <Box>
            <Box my={1} width={200} borderRadius={10} bg={'darkorange'} height={150}></Box>
            <Box width={200} borderRadius={10} bg={'darkorange'} height={150}></Box>
            </Box>
        </Flex>
    </Box>
    </Box>
  )
}

export default FeaturedCategories