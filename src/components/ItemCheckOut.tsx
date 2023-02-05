import {
  AspectRatio,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Auth from "../components/Auth";
import { Headers } from "../components/Headers";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Cart } from "../pages/checkout";
import { MyCart } from "./Cart";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
const Stripe = require("stripe");
const stripe = Stripe(
  "sk_test_51MY96BB4Oa3FgFcj1E1xCbvh1a2MZpzBPRdeEkL4cMlX2sY0OLFlgv5ZKbDUbbiT4IPx5u7suVMvbtQ1g31m5kdx00nCZhh6hF"
);

export const CheckoutProduct = () => {
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();
  const navigate = useNavigate();

//   console.log(items);

  const handleCart = async (item: any) => {
    let myItem: any = [];
    item.map((anyItem: any) => {
      myItem.push({
        price: anyItem.url,
        quantity: anyItem.quantity,
      });
    });
    // console.log(myItem);

    const session = await stripe.checkout.sessions.create({
      line_items: myItem,
      mode: "payment",
      success_url: "http://localhost:3000/",
      cancel_url: "http://localhost:3000/",
    });

    const myUrl = session.url;
    emptyCart();
    window.location.assign(myUrl);
  };

  if (isEmpty)
    return (
      <>
        <Heading>Your Cart is Empty</Heading>
      </>
    );

  return (
    <>
      <Box>
        <Box
          maxW={{ base: "3xl", lg: "7xl" }}
          mx="auto"
          px={{ base: "4", md: "8", lg: "12" }}
          py={{ base: "6", md: "8", lg: "12" }}
        >
          <Stack
            direction={{ base: "column", lg: "row" }}
            align={{ lg: "flex-start" }}
            spacing={{ base: "8", md: "16" }}
          >
            <Stack spacing={{ base: "8", md: "10" }} flex="2">
              <Heading fontSize="2xl" fontWeight="extrabold">
                Shopping Cart ({totalItems} items)
              </Heading>
              <Stack spacing="6">
                {items.map((item) => (
                  <MyCart key={item.id} myItem={item} />
                ))}
              </Stack>
            </Stack>
            <Flex direction="column" align="center" flex="1">
              <Stack
                spacing="8"
                borderWidth="1px"
                rounded="lg"
                padding="8"
                width="full"
              >
                <Heading size="md">Order Summary</Heading>

                <Stack spacing="6">
                  <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                      Total
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                      Rp. {cartTotal}
                    </Text>
                  </Flex>
                </Stack>
                <Button
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  rightIcon={<FaArrowRight />}
                  onClick={() => handleCart(items)}
                >
                  Checkout
                </Button>
                <Button
                  colorScheme="blue"
                  size="lg"
                  fontSize="md"
                  leftIcon={<FaArrowLeft />}
                  onClick={() => {
                    emptyCart();
                    navigate("/shop")
                }}
                >
                  Empty Cart
                </Button>
              </Stack>
              <HStack mt="6" fontWeight="semibold">
                <p>or</p>
                <Link onClick={()=> navigate("/shop")}>Continue shopping</Link>
              </HStack>
            </Flex>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
