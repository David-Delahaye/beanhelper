import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Shell({ children }) {
  return (
    <Box bg="brand.200" width="100vw" height="100vh" pos="fixed">
      {children}
      <Flex m="8.3%" alignItems="center">
        <Heading fontSize="64px" lineHeight="79px" mr="8.3%">
          Bean
        </Heading>
        <Heading fontSize="36px" lineHeight="45px" mr="20px">
          Buy
        </Heading>
        <Heading fontSize="36px" lineHeight="45px" mr="20px">
          Make
        </Heading>
        <Heading fontSize="36px" lineHeight="45px" mr="20px">
          About
        </Heading>
        <Heading ml="auto">Search</Heading>
      </Flex>
      <Box
        position="absolute"
        width="25%"
        left="58.3%"
        top="0px"
        bg="brand.100"
        height="100vh"
      ></Box>
    </Box>
  );
}
