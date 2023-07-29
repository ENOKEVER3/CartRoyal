import { Box, Button, Center, Flex, Icon, IconButton, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Heart, HeartAdd, HeartCircle, Truck } from 'iconsax-react'
import React from 'react'

const ProductCard = () => {
    return (
        <Flex flexShrink={0} justifyContent={'space-around'} cursor={'pointer'} as={motion.div} whileHover={{ scale: 1}}>
            <Box position={'relative'} p={5} fontWeight={900}>
                <IconButton bg={'#000'} color={'#fff'} icon={<HeartAdd variant='Bold' />} position={'absolute'} left={'190px'} top={0} className='heart' borderRadius={40} aria-label={''} />
                <Image objectFit={"cover"} justifyContent={'center'} src='/assets/catalogue/img.jpg' width={'300px'} height={"200px"} borderRadius={20} />
                <Text color={"#000"} pt={2} fontWeight={900}>
                Male T-Shirt (XX-large) Online
                </Text>
                <Flex fontSize={15} gap={5} alignItems={'center'}>
                    <Text color={'red'} fontWeight={900}>$200</Text>
                    <Flex alignItems={'center'} gap={2}>
                        <Truck size={20} />
                        <Text pb={2} pt={2} color={"#000"} fontWeight={600} fontSize={15}>Free Shipping</Text>
                    </Flex>
                </Flex>

            </Box>
        </Flex>
    )
}

export default ProductCard