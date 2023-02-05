import {
  AspectRatio,
  Box,
  Button,
  HStack,
  Image,
  Link,
  Skeleton,
  Stack,
  StackProps,
  Tag,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "react-use-cart";

export const ProductCard = (props: any) => {
  const { id, name, imageUrl, price, currency } = props.product;
  const navigate = useNavigate();
  const { addItem } = useCart();
  const {
    isEmpty,
    totalUniqueItems,
    totalItems,
    cartTotal,
    getItem,
    updateItemQuantity,
    removeItem,
    emptyCart,
    items,
  } = useCart();

  const currentItem = getItem(id);

  return (
    <Stack spacing={{ base: "4", md: "5" }}>
      <Box position="relative">
        <AspectRatio ratio={4 / 3}>
          <Image
            src={imageUrl}
            alt={name}
            draggable="false"
            fallback={<Skeleton />}
            borderRadius={{ base: "md", md: "xl" }}
          />
        </AspectRatio>
      </Box>
      <Stack>
        <HStack w={"full"}>
          <Text
            fontWeight="medium"
            color={useColorModeValue("gray.700", "gray.400")}
          >
            {name}
          </Text>
          <Tag size="md" variant="solid" colorScheme="teal">
            {currency}
            {price}
          </Tag>
        </HStack>
      </Stack>
      <HStack align="center">
        <Button
          colorScheme="blue"
          width="full"
          onClick={() => addItem(props.product)}
        >
          Add to cart
        </Button>
        <Button
          colorScheme={"teal"}
          onClick={() =>
            navigate(`/shop/${id}`, {
              state: { message: "Failed to submit form" },
            })
          }
        >
          Detail
        </Button>
      </HStack>
      {currentItem && (
        <HStack align="center">
          <Button
            colorScheme="blue"
            width="full"
            onClick={() =>
              updateItemQuantity(currentItem.id, currentItem.quantity - 1)
            }
          >
            <FaMinus />
          </Button>
          <Button
            colorScheme="blue"
            width="full"
            onClick={() =>
              updateItemQuantity(currentItem.id, currentItem.quantity + 1)
            }
          >
            <FaPlus />
          </Button>
          <Button colorScheme="blue" width="full" disabled>
            <Text>{currentItem.quantity}</Text>
          </Button>
        </HStack>
      )}
    </Stack>
  );
};
