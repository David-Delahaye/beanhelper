import React, { useState } from "react";
import {
  Flex,
  Center,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
} from "@chakra-ui/react";
import ColourPicker from "./ColourPicker";

const sampleBean = { height: 200, colour: "#FF0000", width: 100 };

export default function BeanCreator() {
  const [creatorBean, setCreatorBean] = useState(sampleBean);

  const handleChange = (newColour) => {
    setCreatorBean({ ...creatorBean, colour: newColour });
  };
  return (
    <Flex justifyContent="center" alignItems="center">
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
  );
}
