import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import "../src/global.css";
import Header from "./layouts/Header";
import Hero from "./layouts/Hero";
import Music from "./layouts/Music";
import Dash from "./layouts/Dash";
import Community from "./layouts/Community";
import Footer from "./layouts/Footer";

const App = () => {
  return (
    <Box p={10}>
      <Header />
      <Hero />
      <Music />
      <Dash />
      <Community />
      <Footer />
    </Box>
  );
};

export default App;
