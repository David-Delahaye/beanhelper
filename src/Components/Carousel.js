import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";

const sampleHorses = [
  {
    name: "bob",
    height: 200,
    width: 100,
    color: "red.900",
    text: "aaaaaaaaaaa",
  },
  {
    name: "bill",
    height: 250,
    width: 125,
    color: "pink.900",
    text: "bbbbbbbb",
  },
  {
    name: "ben",
    height: 100,
    width: 150,
    color: "brand.900",
    text: "cccccccc",
  },
  {
    name: "flowerpotman",
    height: 150,
    width: 150,
    color: "yellow.900",
    text: "ddddddddd",
  },
];

export default function Carousel() {
  const [horses, setHorses] = useState(sampleHorses);
  const [transition, setTransition] = useState(false);

  const moveLeft = () => {
    let newHorses = horses;
    let newHorse = horses[0];
    newHorses.shift();
    setHorses([...newHorses, newHorse]);
    handleTransitionAnimation();
  };

  const moveRight = () => {
    let newHorses = horses;
    let newHorse = horses[horses.length - 1];
    newHorses.pop();
    setHorses([newHorse, ...newHorses]);
    handleTransitionAnimation();
  };

  const handleTransitionAnimation = () => {
    setTransition(true);
    setTimeout(() => {
      setTransition(false);
    }, 150);
  };

  return (
    <Flex width="30%" right="15%" height="100vh" position="absolute">
      <Flex position="relative" overflowy="hidden" width="100%" height="100%">
        <Box
          position="absolute"
          right="55%"
          width="227px"
          height="158px"
          transition="0.15s ease-in-out"
          top={transition ? "48%" : "50%"}
          bg="white"
          transform={
            transition
              ? "translate(-50%, -50%) scale(0.1) rotateZ(10deg)"
              : "translate(-50%, -50%)"
          }
          opacity={transition ? "0.0" : "1"}
          boxShadow="11px 6px 34px -2px rgba(0, 0, 0, 0.25);"
          borderRadius="37px"
          p="20px"
        >
          <Flex
            w="100%"
            h="100%"
            flexDir="column"
            opacity={transition ? 0 : 1}
            transition="0.3s ease-in-out"
          >
            <Heading fontSize="24px ">{horses[1].name}</Heading>
            <Text fontSize="16px">{horses[1].text}</Text>
          </Flex>
        </Box>
        {horses.map((horse, i) => {
          return (
            <Box
              position="absolute"
              transition="0.3s ease-in-out"
              top={5 + i * 45 + "%"}
              left="50%"
              objectPosition="center"
              transform={
                i === 1
                  ? "translate(-50%, -50%) scale(1.2)"
                  : "translate(-50%, -50%) rotateZ(30deg)"
              }
              height={horse.height}
              width={horse.width}
              bg={horse.color}
              boxShadow="11px 6px 34px -2px rgba(0, 0, 0, 0.25);"
              borderRadius="500px"
            ></Box>
          );
        })}

        <Button
          _hover={{ background: "brand.200", transform: "scale(1.1)" }}
          _active={{
            boxShadow: "",
            transform: "scale(0.7)",
            background: "brand.200",
          }}
          _focus={{ boxShadow: "" }}
          style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
          backgroundColor="brand.900"
          transition="0.4s"
          height="40px"
          borderRadius="500px"
          position="absolute"
          top="200px"
          right="50px"
          width="fitcontent"
          mr="10px"
          zIndex="10000"
          onClick={() => moveLeft()}
        >
          UP
        </Button>
        <Button
          _hover={{ background: "brand.200", transform: "scale(1.1)" }}
          _active={{
            boxShadow: "",
            transform: "scale(0.7)",
            background: "brand.200",
          }}
          _focus={{ boxShadow: "" }}
          style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
          backgroundColor="brand.900"
          transition="0.4s"
          height="40px"
          borderRadius="500px"
          position="absolute"
          bottom="200px"
          right="50px"
          width="fitcontent"
          mr="10px"
          zIndex="10000"
          onClick={() => moveRight()}
        >
          DOWN
        </Button>
      </Flex>
    </Flex>
  );
}
