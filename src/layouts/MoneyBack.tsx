import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { AddCircle } from 'iconsax-react'
import React from 'react'

const MoneyBack = () => {
  return (
    <Flex className='money-back-cta' bg={'#FFF0E9'} p={20} pos={'relative'} alignItems={'center'}>
        <Box flex={1}>
        <Heading fontSize={"xxx-large"}>Money Back Gurantee</Heading>
        <Text py={3}>Recieve you item as described</Text>
        <Text>Or your Money Back</Text>
        <Button p={4} my={5} bg="#ff6b51a5" color={"#fff"} fontSize={"12px"} leftIcon={<AddCircle />}>List an Item</Button>
    </Box>
        <Image src='/assets/catalogue/elements.png' maxW={'500px'}/> 
    </Flex>
  )
}

export default MoneyBack