import {
  Box,
  Button,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  IconButton,
  useBreakpointValue,
} from "@chakra-ui/react";
import { getAuth, signOut } from "firebase/auth";
import { FiMenu } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { ColorModeSwitcher } from "../ColorModeSwitcher";

export const Headers = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  const navigate = useNavigate();
  const handleNavigate = (url: string) =>{
    let currentUrl = window.location.href
    let newUrl = currentUrl.split("3000")[1]
    if (url != newUrl){
        navigate(url)
    }
  }
  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth);
    navigate("/login");
  };
  return (
    <Box as="section">
      <Box as="nav" bg="bg-surface" boxShadow="sm">
        <Container py={{ base: "4", lg: "5" }} minW={"2xl"}>
          <HStack spacing="10" justify="space-between">
            {isDesktop ? (
              <Flex justify="space-between" flex="1">
                <ColorModeSwitcher />
                <Button onClick={(e) => handleNavigate("/shop")}>Shop</Button>
                <Button onClick={() => handleNavigate("/shop/checkout")}>
                  Checkout
                </Button>
                <HStack spacing="3">
                  <Button onClick={() => handleSignOut()}>Sign Out</Button>
                </HStack>
              </Flex>
            ) : (
              <IconButton
                variant="ghost"
                icon={<FiMenu fontSize="1.25rem" />}
                aria-label="Open Menu"
              />
            )}
          </HStack>
        </Container>
      </Box>
    </Box>
  );
};
