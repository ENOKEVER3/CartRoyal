import DownloadSource from '@/components/DownloadSource'
import { Box, Button, Flex, HStack, Heading, IconButton, Image, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { Call, House, Instagram, Message, Message2, MessageProgramming, Messages2 } from 'iconsax-react'
import React from 'react'
import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <Box bg={'blue.50'} px={100}  >
            <Flex alignItems={'flex-start'} justifyContent={'space-around'} >
                <Box pt={150}>
                    <Heading fontSize={70}>Get the App</Heading>
                    <Text fontWeight={500}>Buy and Sell Anything</Text>
                    <Text fontWeight={500}>Posting of Sales is Completly Free</Text>
                    <DownloadSource />

                </Box>
                <Image as={motion.img} pl={10} whileInView={{ y: -100, dur: 2 }} src='/assets/phones.png' />
            </Flex>

            <Box>
                <Flex py={10} gap={10}>
                    <Box lineHeight={'50px'}>
                        <Text fontWeight={800} fontSize={20} py={3}>CONTACT US</Text>
                        <Button leftIcon={<House variant='Bold' />} fontWeight={300} textAlign={'left'} bg={'none'} fontSize={'10px !important'}>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                            voluptatem porro perspiciatis, veniam consequatur.
                        </Button> <br />
                        <Button leftIcon={<Call variant='Bold' ></Call>} fontWeight={300} bg={'none'} fontSize={'10px !important'}>
                            Tel : +2349015061171
                        </Button> <br />
                        <Button leftIcon={<MessageProgramming variant='Bold' />} fontWeight={300} bg={'none'} fontSize={'10px !important'}>
                            Email : CartRoyale@gmail.com
                        </Button>
                    </Box>
                    <Box lineHeight={'50px'}>
                        <Text fontWeight={800} fontSize={20} py={3}>SUPPORT</Text>
                        <Text fontSize={10}>How it Works</Text>
                        <Text fontSize={10}>Become a Seller</Text>
                        <Text fontSize={10}>Help Center / FAQs</Text>
                        <Text fontSize={10}>Gurantee for Buyers</Text>
                        <Text fontSize={10}>Feedback</Text>
                        <Text fontSize={10}>Operation Rules</Text>
                        <Text fontSize={10}>Conflict Resolution Policy</Text>

                    </Box>
                    <Box lineHeight={'50px'} mx={20}>
                        <Text fontWeight={800} fontSize={20} py={3}>ABOUT CartRoyale</Text>
                        <Text fontSize={10}>About Us</Text>
                        <Text fontSize={10}>Contact US</Text>
                        <Text fontSize={10}>My Profile</Text>
                        <Text fontSize={10}>Favorites</Text>
                        <Text fontSize={10}>Messages</Text>

                    </Box>
                    <Box lineHeight={'50px'}>
                        <Text fontWeight={800} fontSize={20} py={3}>FOLLOW US ON</Text>
                        <Flex gap={5}>
                            <IconButton bg={'none'} icon={<FaFacebook size={40} />} aria-label={''} />
                            <IconButton bg={'none'} icon={<FaInstagram size={40} />} aria-label={''} />
                            <IconButton bg={'none'} icon={<FaTwitter size={40} />} aria-label={''} />
                        </Flex>
                    </Box>
                </Flex>
            </Box>
            <hr></hr>
            <HStack gap={150} fontSize={10} py={2}>
                <Text>2023 CartRoyale All Rigths Reserved</Text>
                <HStack gap={20}>
                    <Text>Privacy Policy</Text>
                    <Text>Terms of Service</Text>
                    <Text>Prohibited Items</Text>
                    <Text>Prohibited Conduct</Text>
                    <Text>Communication Policy</Text>
                    <Text>Safety Guidelines</Text>
                </HStack>
            </HStack>
            <hr></hr>
            <Box py={10}></Box>
        </Box>
    )
}

export default Footer