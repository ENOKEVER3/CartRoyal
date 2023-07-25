import ActionMenu from '@/components/ActionMenu'
import Logo from '@/components/Logo'
import SearchWidget from '@/components/SearchWidget'
import { Flex } from '@chakra-ui/react'
import React from 'react'

const Header = () => {
  return (
   <Flex as="header" justify={"center"} px={10} py={5} gap={20} align={"center"}>
    <Logo />
    <SearchWidget />
    <ActionMenu />
   </Flex>
  )
}

export default Header