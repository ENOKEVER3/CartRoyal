import { Flex, Icon, Input } from '@chakra-ui/react'
import { Lock, User } from 'iconsax-react'
import React from 'react'

function PasswordIconSide() {
    return (
        <Flex alignItems={'center'} my={2} border={'1.4px solid #ddd'} px={3} py={1} borderRadius={10}>
            <Lock size={30} variant='Bold' color='#ddd' />
            <Input border={0} placeholder="Shhh... It's Secret..." />
        </Flex>
    )
}

export default PasswordIconSide