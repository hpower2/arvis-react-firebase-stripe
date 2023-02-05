import {
  Box,
  CloseButton,
  Flex,
  Heading,
  HStack,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import { FaCross, FaEquals, FaTimes, FaXing } from "react-icons/fa";
import { FiXCircle } from "react-icons/fi";
import { useCart } from "react-use-cart";

export const MyCart = ({ myItem }: any) => {
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
  // console.log(myItem);
  return (
    <>
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align="center"
      >
        <Stack direction="row" spacing="5" width="full">
          <Image
            rounded="lg"
            width="120px"
            height="120px"
            fit="cover"
            alignSelf={"center"}
            src={myItem.imageUrl}
            alt={myItem.name}
            draggable="false"
            loading="lazy"
          />
          <Text fontWeight="medium" alignSelf={"center"}>{myItem.name}</Text>
        </Stack>

        {/* Desktop */}
        <Flex
          width="full"
          justify="space-between"
          display={{ base: "none", md: "flex" }}
        >
          <HStack>
            <Text>{myItem.currency}</Text>
            <Text>{myItem.price}</Text>
            <FaTimes />
            <Text>{myItem.quantity}</Text>
            <FaEquals />
            <Text>{myItem.currency}</Text>
            <Text>{myItem.itemTotal}</Text>
          </HStack>
          <CloseButton
            aria-label={`Delete ${myItem.name} from cart`}
            onClick={() => removeItem(myItem.id)}
          />
        </Flex>

        {/* Mobile */}
        <Flex
          mt="4"
          align="center"
          width="full"
          justify="space-between"
          display={{ base: "flex", md: "none" }}
        >
          <Link fontSize="sm" textDecor="underline">
            Delete
          </Link>
          <HStack>
            <Text>{myItem.currency}</Text>
            <Text>{myItem.price}</Text>
            <FaTimes />
            <Text>{myItem.quantity}</Text>
            <FaEquals />
            <Text>{myItem.currency}</Text>
            <Text>{myItem.itemTotal}</Text>
          </HStack>
        </Flex>
      </Flex>
    </>
  );
};
