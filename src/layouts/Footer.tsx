import DownloadSource from '@/components/DownloadSource'
import { Box, Button, Flex, HStack, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Call, House, Instagram, Message, Message2, MessageProgramming, Messages2 } from 'iconsax-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box bg={'blue.50'} p={20}  pos={"relative"}>
            <Flex className='cta' alignItems={'center'} justifyContent={'space-around'} >
                <Box py={30}>
                    <Heading fontSize={70}>Get the App</Heading>
                    <Text fontWeight={500}>Buy and Sell Anything</Text>
                    <Text fontWeight={500}>Posting of Sales is Completly Free</Text>
                    <DownloadSource />

                </Box>
                <Image className='cta-img' as={motion.img} maxW={"500px"} alignSelf={"flex-end"} pl={10} src='/assets/phones.png' />
            </Flex>

            <Box>
                <Flex className='footer' wrap={"wrap"} justify={"center"} py={10} gap={10}>
                    <Box >
                        <Text fontWeight={800} fontSize={20} py={3}>CONTACT US</Text>
                        <Button leftIcon={<House variant='Bold' />} fontWeight={300} textAlign={'left'} bg={'none'} fontSize={'10px !important'}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                            voluptatem porro perspiciatis, veniam consequatur.
                        </Button> <br />
                        <Button leftIcon={<Call variant='Bold' ></Call>} fontWeight={300} bg={'none'} fontSize={'10px !important'}>
                            Tel : +2349015061171
                        </Button> <br />
                        <Button leftIcon={<MessageProgramming variant='Bold' />} fontWeight={300} bg={'none'} fontSize={'10px !important'}>
                            Email : CartRoyal@gmail.com
                        </Button>
                    </Box>
                    <Box>
                        <Text fontWeight={800} fontSize={20} py={3}>SUPPORT</Text>
                        <Text fontSize={10}>How it Works</Text>
                        <Text fontSize={10}>Become a Seller</Text>
                        <Text fontSize={10}>Help Center / FAQs</Text>
                        <Text fontSize={10}>Gurantee for Buyers</Text>
                        <Text fontSize={10}>Feedback</Text>
                        <Text fontSize={10}>Operation Rules</Text>
                        <Text fontSize={10}>Conflict Resolution Policy</Text>

                    </Box>
                    <Box mx={20}>
                        <Text fontWeight={800} fontSize={20} py={3}>ABOUT CartRoyal</Text>
                        <Text fontSize={10}>About Us</Text>
                        <Text fontSize={10}>Contact US</Text>
                        <Text fontSize={10}>My Profile</Text>
                        <Text fontSize={10}>Favorites</Text>
                        <Text fontSize={10}>Messages</Text>

                    </Box>
                    <Box>
                        <Text fontWeight={800} fontSize={20} py={3}>FOLLOW US ON</Text>
                        <Flex gap={5}>
                            <IconButton bg={'none'} p={3} icon={<FaFacebook size={20} />} aria-label={''} />
                            <IconButton bg={'none'} p={3} icon={<FaInstagram size={20} />} aria-label={''} />
                            <IconButton bg={'none'} p={3} icon={<FaTwitter size={20} />} aria-label={''} />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <hr></hr>
            <HStack rowGap={150} fontSize={10} py={2}>
                <HStack py={5} flexWrap={"wrap"} rowGap={20}>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Service</Text>
                    <Text>Prohibited Items</Text>
                    <Text>Prohibited Conduct</Text>
                    <Text>Communication Policy</Text>
                    <Text>Safety Guidelines</Text>
                </HStack>
            </HStack>
            <hr></hr>
                <Text fontSize={"13px"} py={5}>2023 CartRoyal All Rigths Reserved</Text>
    
        </Box>
    )
}

export default Footer