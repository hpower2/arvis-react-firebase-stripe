import {
  Box,
  Button,
  ButtonGroup,
  Checkbox,
  Container,
  createIcon,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
  VisuallyHidden,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoogleIcon } from "../icon/google";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword} from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();
  const auth = getAuth();
  const [authing, setAuthing] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const signInWithGoogle = async () => {
    setAuthing(true);

    signInWithPopup(auth, new GoogleAuthProvider())
    .then(res => {
        // console.log(res.user.uid)
        navigate('/shop')
    })
    .catch((error) => {
        // console.log(error)
        setAuthing(false)
    })
  };
  const signInWithEmail = async () => {
    setAuthing(true);
    signInWithEmailAndPassword(auth, email, password)
    .then(res =>{
        // console.log(res.user.uid)
        navigate("/shop");
    })
    .catch((error) => {
        // console.log(error)
        setAuthing(false)
    })
  }
  return (
    <>
      <Container
        maxW="lg"
        py={{ base: "12", md: "24" }}
        px={{ base: "0", sm: "8" }}
      >
        <Stack spacing="8">
          <Box
            bg="primary.400"
            py={{ base: "0", sm: "8" }}
            px={{ base: "4", sm: "10" }}
            boxShadow={{ base: "none", sm: "md" }}
            borderRadius={{ base: "none", sm: "xl" }}
          >
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input
                    id="email"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="password">Password</FormLabel>
                  <Input
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />
                </FormControl>
              </Stack>
              <HStack justify="space-between">
                <Checkbox defaultChecked>Remember me</Checkbox>
                <Button variant="link" size="sm">
                  Forgot password?
                </Button>
              </HStack>
              <Stack spacing="6">
                <Button variant="outline" onClick={() => signInWithEmail()}>
                  Sign in
                </Button>
                <HStack>
                  <Divider />
                  <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                    or continue with
                  </Text>
                  <Divider />
                </HStack>
                <ButtonGroup variant="outline" spacing="4" width="full">
                  <Button width="full" onClick={() => signInWithGoogle()}>
                    <VisuallyHidden>Sign in with </VisuallyHidden>
                    {<GoogleIcon boxSize={"5"} />}
                  </Button>
                </ButtonGroup>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </>
  );
};
