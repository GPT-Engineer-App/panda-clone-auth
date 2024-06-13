import { Container, Text, VStack, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Button as={RouterLink} to="/register" colorScheme="blue">Register</Button>
        <Button as={RouterLink} to="/login" colorScheme="blue">Login</Button>
        <Button as={RouterLink} to="/phone-verification" colorScheme="blue">Phone Verification</Button>
        <Button as={RouterLink} to="/password-reset" colorScheme="blue">Password Reset</Button>
      </VStack>
    </Container>
  );
};

export default Index;