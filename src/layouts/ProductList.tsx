import BuyingGuide from "@/components/BuyingGuide";
import CategoryTagFilter from "@/components/CategoryTagFilter";
import Pagination from "@/components/Pagination";
import PriceRange from "@/components/PriceRange";
import ProductCard from "@/components/ProductCard";
import ProductFeatureMenu from "@/components/ProductFeatureMenu";
import constants from "@/config/app";
import {
  Box,
  Checkbox,
  Circle,
  Flex,
  Grid,
  Heading,
  Icon,
  Image,
  Input,
  Link,
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Heart } from "iconsax-react";
import React from "react";
import Footer from "./Footer";

const ProductList = ({ title }: { title: string }) => {
  return (
    <>
      <Flex px={30} gap={10} pb={10}>
        <Box w={"250px"} className="product_filter_lists_category">
          <ProductFeatureMenu title="Categories">
            <Box height={"200px"} overflowY={"auto"}>
              {constants.categories.map((cat) => (
                <Flex my={2} align={"center"} key={cat.label} gap={5}>
                  <Checkbox />
                  <Text fontSize={"16px"}>
                    {cat.label}{" "}
                    <Text
                      as={"span"}
                      fontSize={"12px"}
                      fontWeight={"bold"}
                      color={"#ddd"}
                    >
                      (2004)
                    </Text>{" "}
                  </Text>
                </Flex>
              ))}
            </Box>
          </ProductFeatureMenu>

          <ProductFeatureMenu title="Price">
            <Box>
              <PriceRange />
              <Flex align={"center"} gap={3} justify={"space-evenly"}>
                <Input type="number" placeholder="From" />
                <Text> - </Text>
                <Input type="number" placeholder="To" />
              </Flex>
              <Flex gap={3} my={3}>
                <Checkbox />
                <Text>Show Free Item Only</Text>
              </Flex>
            </Box>
          </ProductFeatureMenu>

          <ProductFeatureMenu title="Shipping">
            <Box>
              <Flex gap={10}>
                <Menu closeOnSelect={false}>
                  <MenuButton
                    border={"1.5px solid rgba(0,0,0,.2)"}
                    p={3}
                    py={2}
                    cursor={"pointer"}
                    borderRadius={10}
                    as={Flex}
                  >
                    Shipping Location
                  </MenuButton>
                  <MenuList zIndex={10} minWidth="100px">
                    <MenuOptionGroup
                      color={"#111"}
                      defaultValue="ng"
                      title="Shipping"
                      type="radio"
                    >
                      <MenuItemOption color={"#111"} value={"ng"}>
                        Nigeria
                      </MenuItemOption>
                    </MenuOptionGroup>
                  </MenuList>
                </Menu>
              </Flex>

              <Flex gap={3} my={3}>
                <Checkbox />
                <Text>Shipping Fee</Text>
              </Flex>

              <Flex gap={3} my={3}>
                <Checkbox />
                <Text>Free</Text>
              </Flex>
            </Box>
          </ProductFeatureMenu>

          <ProductFeatureMenu title="Conditions">
            <Flex gap={4} wrap={"wrap"}>
              <Flex gap={3}>
                <Checkbox />
                <Text>New</Text>
              </Flex>

              <Flex gap={3}>
                <Checkbox />
                <Text>Good</Text>
              </Flex>

              <Flex gap={3}>
                <Checkbox />
                <Text>Poor</Text>
              </Flex>
            </Flex>
          </ProductFeatureMenu>

          <ProductFeatureMenu title="Size">
            <Flex gap={4} wrap={"wrap"}>
              <Flex gap={3}>
                <Checkbox />
                <Text>Xl</Text>
              </Flex>

              <Flex gap={3}>
                <Checkbox />
                <Text>Sm</Text>
              </Flex>

              <Flex gap={3}>
                <Checkbox />
                <Text>Md</Text>
              </Flex>
            </Flex>
          </ProductFeatureMenu>
        </Box>

        <Box w={"full"}>
          <Box w="full">
            <Heading
              mb={3}
              fontSize={"2rem"}
              justifySelf={"flex-start"}
              textTransform={"capitalize"}
            >
              {title} Store{" "}
              <Text fontSize={"13px"} as="span">
                ( 1105,6667 Results )
              </Text>
            </Heading>
            <CategoryTagFilter />
          </Box>

          <Box my={5}>
            {/* main content here */}

            <Grid
              templateColumns={"repeat(auto-fit, minmax(200px,1fr))"}
              gap={10}
            >
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </Grid>
          </Box>
          <Pagination />
          <BuyingGuide />
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default ProductList;
