import { Flex, Icon, Input } from '@chakra-ui/react'
import { User } from 'iconsax-react'
import React from 'react'

function InputIconSide() {
    return (
        <Flex alignItems={'center'} my={2} border={'1.4px solid #ddd'} px={3} py={1} borderRadius={10}>
            <User size={30} variant='Bold' color='#ddd' />
            <Input border={0} placeholder='cartroyalseller@gmail.com' />
        </Flex>
    )
}

export default InputIconSide