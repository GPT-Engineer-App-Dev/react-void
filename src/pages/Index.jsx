import { Container, Text, VStack, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h1" size="2xl" mb={4} textAlign="center">
            Welcome to My App!
          </Heading>
          <Text fontSize="lg" textAlign="center">
            This is the starting point of your new journey.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;