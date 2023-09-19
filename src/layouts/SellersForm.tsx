import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import { ArrowCircleRight2, ArrowRight, ArrowRight2 } from "iconsax-react";
import React from "react";

const SellersForm = () => {
  return (
    <Box pt={5}>
      <Text fontSize={'30px'}>New Seller Account</Text>
      <Flex gap={10} flexWrap={'wrap'}>
        <Box>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>Shop Name</FormLabel>
            <Input placeholder="Enter a Unique Business Name" />
          </Flex>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>
              Please select if you're an Individual or Business Entity/Company
            </FormLabel>
            <Select>
              <option value="">--Choose an Option--</option>
              <option value="">Individual</option>
              <option value="">Registered Business Name</option>
              <option value="">Company</option>
            </Select>
          </Flex>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>Account Manager First and Last Name </FormLabel>
            <Input placeholder="Your name or the name of the person in your team who will manage your account." />
          </Flex>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>Account manager phone number</FormLabel>
            <Input placeholder="When we need to contact you urgently." />
          </Flex>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>Additional phone number </FormLabel>
            <Input placeholder="Another number where we can reach you ?" />
          </Flex>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>Email Address</FormLabel>
            <Input type="email" placeholder="Your account will be linked to this email address." />
          </Flex>
          <Flex py={2} flexWrap={"wrap"}>
            <FormLabel>Password</FormLabel>
            <Input type="password" placeholder="At least 8 characters containing a capital letter, a lower letter and a numeric character" />
          </Flex>
          <Flex py={2} flexWrap={"wrap"} alignItems={'center'}>
            <FormLabel>E-Contract Cart Royal Nigeria:</FormLabel>
            <Checkbox>
              I have read and accepted theE-Contract Jumia Nigeria
            </Checkbox>
          </Flex>
          <Button rightIcon={<ArrowCircleRight2 size={20} />} width={'full'}>Next</Button>
        </Box>
        <Box p={5} border={'1px solid #ddd'} height={'fit-content'} borderRadius={20}>
        <Text fontSize={'25px'}>Smart Quality Control</Text>
        <Text>What should I use as First Name and Last Name?</Text>
        <Text>What email address is required during the registration?</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default SellersForm;
