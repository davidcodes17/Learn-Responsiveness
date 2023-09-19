import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import MusicCard from "../components/MusicCard";
import { motion } from "framer-motion";

const Music = () => {
  return (
    <Box py={20}>
        <Heading textAlign={'center'} fontSize={{lg : 60, md : 50, sm: 30, base : 25}}>Popular Tracks</Heading>
      <Flex
        py={10}
        gap={10}
        className="loops"
        justifyContent={"center"}
        as={motion.div}
      >
        {/* <MusicCard time={100} /> */}
        {/* <MusicCard time={130} /> */}
        <MusicCard time={160} />
      </Flex>
    </Box>
  );
};

export default Music;
