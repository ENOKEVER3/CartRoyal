import { Box, Button, Flex, Heading, Link } from '@chakra-ui/react'
import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const Products = () => {
  return (
    <Box>
      <Flex justify={"space-around"}>
        <Box>
          <Heading>Recommended for you</Heading>
          <Link href='' fontSize={"12px"} textDecoration={"underline"}>Sell All</Link>
        </Box>

        <Flex gap={4}>
          <Button leftIcon={<FaArrowLeft />} />
          <Button leftIcon={<FaArrowRight />} />
        </Flex>
      </Flex>

    </Box>
  )
}

export default Products