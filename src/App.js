import db from "./firebase.config";
import React, { useState, useEffect } from "react";
import firebase from "firebase";
import { ChakraProvider, extendTheme, Heading, Flex } from "@chakra-ui/react";

import Shell from "./Components/DashboardShell";
import BeanCreator from "./Components/BeanCreator";

const theme = extendTheme({
  colors: {
    brand: {
      100: "#DBFDDA",
      200: "#CAFEC9",
      // ...
      900: "#00E809",
    },
  },
  fonts: {
    heading: `'Righteous', cursive`,
    body: `'Righteous', cursive;`,
  },
});

function App() {
  const [currentBean, setCurrentBean] = useState();

  // useEffect(async () => {
  //   const beanRef = db.collection("Beans").doc("bqi9s2KigtR1QbUgsiS1");
  //   const bean = await beanRef.get();
  //   if (!bean.exists) {
  //     console.log("No such document!");
  //   } else {
  //     setCurrentBean(bean.data());
  //   }
  // }, []);

  // console.log(currentBean);

  // if (currentBean === undefined) {
  //   return "";
  // }

  return (
    <ChakraProvider resetCSS theme={theme}>
      <div className="App">
        <Shell>
          <Flex justifyContent="space-between">
            <Heading>Bean Yourself</Heading>
            <BeanCreator />
          </Flex>
        </Shell>
      </div>
    </ChakraProvider>
  );
}

export default App;
