import {
  AspectRatio,
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Skeleton,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import Auth from "../components/Auth";
import { Headers } from "../components/Headers";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMinus, FaPlus, FaStore } from "react-icons/fa";

const DetailProduct = ({ product }: any) => {
//   console.log(product);
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

  const currentItem = getItem(product.id);
  const navigate = useNavigate();
  const addToCart = () => {
    addItem(product);
  };
  return (
    <>
      <Headers />
      <Button onClick={() => navigate("/shop")} left="10%">
        <FaArrowLeft /> Kembali
      </Button>
      <Center px={"10%"}>
        <Stack spacing={{ base: "4", md: "5" }} direction="row">
          <Box position="relative" maxW={"md"} maxH={"md"} flex="1">
            <AspectRatio ratio={4 / 3}>
              <Image
                src={product?.imageUrl}
                alt={product?.name}
                draggable="false"
                fallback={<Skeleton />}
                borderRadius={{ base: "md", md: "xl" }}
              />
            </AspectRatio>
          </Box>
          <Stack flex="1">
            <HStack w={"full"}>
              <Heading>{product?.name}</Heading>
              <Tag size="md" variant="solid" colorScheme="teal">
                {product?.currency}
                {product?.price}
              </Tag>
            </HStack>
            <Text>{product?.description}</Text>
          </Stack>
        </Stack>
      </Center>
      <Center px={"10%"}>
        <Button colorScheme="blue" width="full" onClick={() => addToCart()}>
          Add to cart
        </Button>
      </Center>
      <Box pb={"10px"}></Box>
      <Box px="10%">
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
        <Box pb={"10px"}></Box>
        <Button maxW={"7xl"} mx="auto" minW={"100%"} colorScheme="whatsapp" onClick={()=> navigate("/shop/checkout")}>
          <FaStore />
          <Text>Checkout</Text>
        </Button>
      </Box>
    </>
  );
};

export default DetailProduct;
