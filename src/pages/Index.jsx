import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg="gray.100" p={5}>
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg="teal.500" color="white">
          <Heading as="h1" size="2xl" mb={4} textAlign="center">
            Hello, World!
          </Heading>
          <Text fontSize="lg" textAlign="center">
            Welcome to your new React application.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;