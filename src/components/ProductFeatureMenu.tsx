import { Box, Flex, Heading } from "@chakra-ui/react";
import { AddCircle, MinusCirlce } from "iconsax-react";
import React, { ReactNode, useState } from "react";

const ProductFeatureMenu = ({
  title,
  children,
  disabled = false
}: {
  title: string;
  children: ReactNode;
  disabled?:boolean,
}) => {
    const [isOpen, setOpen] = useState(false)
  return (
    <Box mb={3} pointerEvents={disabled ? "none":"all"} opacity={disabled ? .7 : 1}>
      <Flex cursor={"pointer"} onClick={()=>{
        setOpen(!isOpen)
      }} align={"center"} justify={"space-between"} py={2}>
        <Heading fontSize={"1.2rem"}>{title}</Heading>
        <Heading> {isOpen ? <MinusCirlce /> : <AddCircle />} </Heading>
      </Flex>

      {isOpen && children}
    </Box>
  );
};

export default ProductFeatureMenu;
