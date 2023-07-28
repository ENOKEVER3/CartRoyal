import ProductCard from '@/components/ProductCard'
import { Box, Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { ArrowLeft, ArrowRight } from 'iconsax-react'
import React from 'react'

const NewlyListed = () => {
    return (
        <Flex justifyContent={'space-around'} py={20} my={100}>
            <Box>
                <Flex justifyContent={'space-between'}>
                    <Flex alignItems={'center'} gap={20}>
                        <Heading>Newly Listed</Heading>
                        <Text>See More</Text>
                    </Flex>
                    <Flex gap={4}>
                        <IconButton borderRadius={40} icon={<ArrowLeft />} aria-label={''}></IconButton>
                        <IconButton borderRadius={40} icon={<ArrowRight />} aria-label={''}></IconButton>
                    </Flex>
                </Flex>
                <Flex py={10}>
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </Flex>
            </Box>
        </Flex>
    )
}

export default NewlyListed