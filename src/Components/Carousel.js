import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Carousel({}) {
  return (
    <Flex width="30%" right="15%" height="100vh" position="absolute">
      <Flex position="relative" overflow="hidden" width="100%" height="100%">
        <Box
          position="absolute"
          top="5%"
          left="50%"
          objectPosition="center"
          transform="translate(-50%, -50%) rotateZ(30deg)"
          height="300px"
          width="150px"
          bg="pink.900"
          boxShadow="11px 6px 34px -2px rgba(0, 0, 0, 0.25);"
          borderRadius="500px"
        ></Box>

        <Box
          position="absolute"
          top="50%"
          left="50%"
          objectPosition="center"
          transform="translate(-50%, -50%) scale(1.4)"
          height="300px"
          width="150px"
          bg="brand.900"
          boxShadow="11px 6px 34px -2px rgba(0, 0, 0, 0.25);"
          borderRadius="500px"
        ></Box>

        <Box
          position="absolute"
          top="95%"
          left="50%"
          objectPosition="center"
          transform="translate(-50%, -50%) rotateZ(30deg)"
          height="300px"
          width="150px"
          bg="red.900"
          boxShadow="11px 6px 34px -2px rgba(0, 0, 0, 0.25);"
          borderRadius="500px"
        ></Box>
      </Flex>
    </Flex>
  );
}
