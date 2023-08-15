import { Flex, Link, Text } from '@chakra-ui/react'
import React from 'react'

const Pagination = () => {
  return (
   <Flex my={4} justify={"space-between"} align={"center"}>
    {/* <Flex gap={5}>
        <Text>Show</Text>
        <Text>15</Text>
        <Text>25</Text>
        <Text>48</Text>
        <Text>96</Text>
    </Flex> */}




    <Flex gap={5}>
        <Text><Link href=''>Previous</Link></Text>
        <Text><Link href=''>1</Link></Text>
        <Text><Link href=''>2</Link></Text>
        <Text>...</Text>
        <Text><Link href=''>23</Link></Text>
        <Text><Link href=''>24</Link></Text>
        <Text><Link href=''>Next</Link></Text>
    </Flex>
   </Flex>
  )
}

export default Pagination