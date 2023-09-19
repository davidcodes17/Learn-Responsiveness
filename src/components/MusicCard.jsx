import { Box, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MusicCard = (props) => {
  return (
    <Box
      bg={"linear-gradient(45deg,tomato,#2A174E)"}
      p={10}
      as={motion.div}
      initial={{opacity : 0, translateY : props.time}}
      whileInView={{opacity :1, translateY : 0}}
      color={"#fff"}
      borderRadius={30}
    >
      <Text fontSize={{lg : 30, md : 20, sm : 20, base : 20}}>
        <span className="big">01</span>. Mans not Hot
      </Text>
      <Text fontSize={{lg : 12, md : 10, sm : 8, base : 9}}>Artist : Big Smoke</Text>
      <Text fontSize={{lg : 12, md : 10, sm : 8, base : 9}}>Producer : Don Jazzy</Text>
    </Box>
  );
};

export default MusicCard;
