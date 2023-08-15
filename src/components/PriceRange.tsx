import { Box, Flex, Input } from '@chakra-ui/react'
import React from 'react'

const PriceRange = () => {
  return (
    <Box mb={5}>
        <Flex className='price-ranger' bg={""}>
            <Box type="range" as="input" style={{transform:"rotate(180deg)"}} min={100}  max={999999} />

            <Box type="range" as="input" style={{
                transform:"translateX(-6px)"
            }}  min={100} max={999999}  />
        </Flex>
    </Box>
  )
}

export default PriceRange