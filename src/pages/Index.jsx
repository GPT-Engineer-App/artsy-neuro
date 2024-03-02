import { Box, Container, Heading, Text, Image, Input, Button, VStack, HStack, FormControl, FormLabel, FormHelperText, Divider, useColorModeValue } from "@chakra-ui/react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";

const Index = () => {
  const bg = useColorModeValue("gray.100", "gray.700");
  const textColor = useColorModeValue("gray.800", "white");

  return (
    <Container maxW="container.xl" p={4}>
      <VStack spacing={8} align="stretch">
        <Box bg={bg} p={5} borderRadius="md" boxShadow="md">
          <Heading as="h1" size="xl" textAlign="center" color={textColor}>
            The Nexus of Neuroscience and Substances
          </Heading>
          <Text fontSize="lg" mt={4}>
            Discover the groundbreaking intersection of neuroscience and pharmacology. Delve into the captivating world where substances unlock the mysteries of the human mind.
          </Text>
          <Image src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFiJTIwZXF1aXBtZW50fGVufDB8fHx8MTcwOTM3MzY5NXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Science Lab Equipment" borderRadius="lg" mt={4} />
        </Box>

        <Divider />

        <Box bg={bg} p={5} borderRadius="md" boxShadow="md">
          <Heading as="h2" size="lg" textAlign="center" color={textColor}>
            A Glimpse into the Future
          </Heading>
          <Text fontSize="md" mt={4}>
            The surge of interest in the therapeutic potential of substances is not unfounded. Recent studies suggest that specific compounds could revolutionize the way we approach mental health disorders and cognitive enhancement.
          </Text>
          <HStack spacing={4} mt={4}>
            <Image src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxuZXVyb3NjaWVuY2UlMjByZXNlYXJjaHxlbnwwfHx8fDE3MDkzNzM2OTV8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Neuroscience Research" borderRadius="lg" />
            <Image src="https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFpbiUyMG5ldXJvbnN8ZW58MHx8fHwxNzA5MzczNjk2fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Brain Neurons" borderRadius="lg" />
          </HStack>
          <Text fontSize="md" mt={4}>
            The possibilities are limitless. From treating intractable depression to enhancing synaptic plasticity, the implications for neuroscience are profound. Substances once thought to be merely recreational are showing promise as powerful tools for brain health and function.
          </Text>
        </Box>

        <Divider />

        <Box bg={bg} p={5} borderRadius="md" boxShadow="md">
          <Heading as="h3" size="md" textAlign="center" color={textColor}>
            Join Our Newsletter
          </Heading>
          <Text fontSize="sm" mt={4}>
            Stay at the forefront of neuroscience and pharmacology. Subscribe to our newsletter for the latest updates on how substances are shaping the future of cognitive science.
          </Text>
          <FormControl id="email" mt={4}>
            <FormLabel>Email address</FormLabel>
            <HStack>
              <Input type="email" placeholder="Enter your email" />
              <Button leftIcon={<FaPaperPlane />} colorScheme="blue">
                Subscribe
              </Button>
            </HStack>
            <FormHelperText>We'll never share your email. Promise.</FormHelperText>
          </FormControl>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
