import { Box, Button, Divider, Text } from "@chakra-ui/react";
import { ProductCard } from "./CardProduct";
import { products } from "../data/dummyProduct";
import { ProductGrid } from "./ProductGrid";
import { FaStore } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export const Products = () => {
  const navigate = useNavigate();
  return (
    <Box
      maxW="7xl"
      mx="auto"
      px={{ base: "4", md: "8", lg: "12" }}
      py={{ base: "6", md: "8", lg: "12" }}
    >
      <ProductGrid>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
      <Box pb={"10px"}></Box>
      <Button
        maxW={"7xl"}
        mx="auto"
        minW={"100%"}
        colorScheme="whatsapp"
        onClick={() => navigate("/shop/checkout")}
      >
        <FaStore />
        <Text>Checkout</Text>
      </Button>
    </Box>
  );
};
