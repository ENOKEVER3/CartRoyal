import { Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'


const Features = () => {
  return (
    <Flex p={10} align={"center"} justify={"space-around"} maxW="900px" mx="auto" gap={30}>


    <Flex gap={1} direction={"column"} align={"center"} justify={"center"}>
        <Image src="/assets/review.png" />
        <Text fontSize={12}>No Fake Reviews</Text>
    </Flex>

    <Flex gap={1} direction={"column"} align={"center"} justify={"center"}>
        <Image src="/assets/refund.png" />
        <Text fontSize={12}>100% Money Protection</Text>
    </Flex>

    <Flex gap={1} direction={"column"} align={"center"} justify={"center"}>
        <Image src="/assets/quality.png" />
        <Text fontSize={12}>Efficient & Trusted Website</Text>
    </Flex>

    <Flex gap={1} direction={"column"} align={"center"} justify={"center"}>
        <Image src="/assets/saving.png" />
        <Text fontSize={12}>Buy Good Items, Cheap</Text>
    </Flex>

    </Flex>
  )
}

export default Features