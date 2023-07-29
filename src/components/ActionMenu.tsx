import { Button, Flex, Icon } from '@chakra-ui/react'
import { HeartCircle, ShoppingBag } from 'iconsax-react'
import React from 'react'
import { FaBell, FaPlusCircle } from 'react-icons/fa'

const ActionMenu = () => {
  return (
    <Flex align={"center"} className='action-menu' gap={7}>
        <Icon fontSize={"20"} cursor={"pointer"} as={HeartCircle} />
        <Icon fontSize={"20"}  cursor={"pointer"}  as={FaBell} />
        <Icon fontSize={"20"}   cursor={"pointer"} as={ShoppingBag} />
        <Button bg="darkorange" fontSize={"14px"} leftIcon={<FaPlusCircle />}>List an Item</Button>
    </Flex>
  )
}

export default ActionMenu