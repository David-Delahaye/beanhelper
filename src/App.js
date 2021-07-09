//import db from "./firebase.config";
//import firebase from "firebase";
import React from "react";
import { ChakraProvider, extendTheme, Heading, Flex } from "@chakra-ui/react";

import Shell from "./Components/DashboardShell";
//import BeanCreator from "./Components/BeanCreator";
import Carousel from "./Components/Carousel";
import "./style.css";
const theme = extendTheme({
  colors: {
    brand: {
      100: "#EBFFF5",
      200: "#C9FFE4",
      // ...
      900: "#00E87F",
    },
    pink: {
      900: "#E600B4",
    },
    red: {
      900: "#E6001B",
    },
  },
  fonts: {
    heading: `'Righteous', cursive`,
    body: `'Righteous', cursive;`,
  },
  styles: {
    global: {
      em: {
        background:
          "linear-gradient(0deg, rgba(0, 232, 127) 0%, rgba(0, 232, 127,1) 41%, rgba(255,0,255,0) 41%)",
        padding: "0px 0.5em 0em 0.1em",
        "box-decoration-break": "clone",
        "-webkit-box-decoration-break": "clone",
      },
    },
  },
});

function App() {
  //const [currentBean, setCurrentBean] = useState();

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
          <Flex
            justifyContent="space-between"
            height="100%"
            alignItems="center"
          >
            <Heading fontSize="64px" width="40%">
              Bean <em>Yourself</em>, you great <em>ugly</em> ghoul man
            </Heading>
            <Carousel />
          </Flex>
        </Shell>
      </div>
    </ChakraProvider>
  );
}

export default App;
