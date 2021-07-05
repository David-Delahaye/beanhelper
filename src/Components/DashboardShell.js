import { Box, Flex, Heading } from "@chakra-ui/react";

export default function Shell({ children }) {
  return (
    <Flex
      bg="brand.200"
      width="100vw"
      height="100vh"
      pos="fixed"
      p="120px"
      flexDir="column"
      justifyContent="center"
    >
      {/* header bar */}
      <Flex alignItems="center" mb="auto">
        <Heading fontSize="64px" lineHeight="79px" mr="120px">
          BEAN
        </Heading>
        <Heading fontSize="36px" lineHeight="45px" mr="20px">
          BUY
        </Heading>
        <Heading fontSize="36px" lineHeight="45px" mr="20px">
          MAKE
        </Heading>
        <Heading fontSize="36px" lineHeight="45px" mr="20px">
          ABOUT
        </Heading>
        <Heading ml="auto">Search</Heading>
      </Flex>

      {children}

      {/* footer bar */}
      <Flex alignItems="center" mt="auto">
        <Heading fontSize="24px" lineHeight="79px" mr="120px">
          Follow
        </Heading>
        <Heading fontSize="24px" lineHeight="45px" mr="120px">
          © Beanbuddies 2021
        </Heading>
      </Flex>
      {/* back stripe*/}
      <Box
        position="absolute"
        width="25%"
        left="58.3%"
        top="0px"
        bg="brand.100"
        height="100vh"
        zIndex="-1"
      ></Box>
    </Flex>
  );
}
