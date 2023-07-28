import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { AddCircle } from 'iconsax-react'
import React from 'react'

const MoneyBack = () => {
  return (
    <Flex bg={'#ff6b51a5'} px={240} py={'100px'} pos={'relative'} alignItems={'center'}>
        <Box>
        <Heading>Money Back Gurantee</Heading>
        <Text py={3}>Recieve you item as described</Text>
        <Text>Or your Money Back</Text>
        <Button my={3} leftIcon={<AddCircle />}>List an Item</Button>
    </Box>
        <Image src='/assets/catalogue/elements.png' width={'40%'} pos={'absolute'} right={'200px'} top={10} /> 
    </Flex>
  )
}

export default MoneyBack