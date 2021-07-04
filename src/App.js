import db from "./firebase.config";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import {
  ChakraProvider,
  Flex,
  Divider,
  Box,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import ColourPicker from "./Components/ColourPicker";

const sampleBean = { height: 200, colour: "#FF0000", width: 100 };

function App() {
  const [currentBean, setCurrentBean] = useState();
  const [creatorBean, setCreatorBean] = useState(sampleBean);

  // const [number, setNumber] = useState(0);

  // const setRandomNumber = () => {
  //   const randomNumber = firebase.functions().httpsCallable("randomNumber");
  //   randomNumber().then((randomNum) => {
  //     console.log(randomNum.data);
  //     setNumber(randomNum.data);
  //   });
  // };

  const handleChange = (newColour) => {
    setCreatorBean({ ...creatorBean, colour: newColour });
  };

  useEffect(async () => {
    const beanRef = db.collection("Beans").doc("bqi9s2KigtR1QbUgsiS1");
    const bean = await beanRef.get();
    if (!bean.exists) {
      console.log("No such document!");
    } else {
      setCurrentBean(bean.data());
    }
  }, []);

  console.log(currentBean);

  if (currentBean === undefined) {
    return "";
  }

  return (
    <ChakraProvider resetCSS>
      <div className="App">
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100vw"
          height="100vh"
        >
          <Center w="300px" h="300px">
            <div
              className="bean"
              style={{
                background: creatorBean.colour,
                width: creatorBean.width,
                height: creatorBean.height,
                borderRadius: "500px",
              }}
            ></div>
            <Slider
              aria-label="slider-ex-3"
              value={creatorBean.height}
              onChange={(e) => {
                setCreatorBean({ ...creatorBean, height: e });
              }}
              orientation="vertical"
              minH="32"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>

            <Slider
              aria-label="slider-ex-3"
              value={creatorBean.width}
              onChange={(e) => {
                setCreatorBean({ ...creatorBean, width: e });
              }}
              orientation="vertical"
              minH="32"
            >
              <SliderTrack>
                <SliderFilledTrack />
              </SliderTrack>
              <SliderThumb />
            </Slider>
            <ColourPicker
              defaultColor={creatorBean.colour}
              handleChange={handleChange}
            />
          </Center>
        </Flex>
      </div>
    </ChakraProvider>
  );
}

export default App;
