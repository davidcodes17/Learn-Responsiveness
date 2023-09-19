import { Box, Heading, Image } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Dash = () => {
  return (
    <Box>
      <Heading py={3} fontSize={{ lg: 60, md: 50, sm: 30, base: 20 }}>
        Check Out Our Dashboard
      </Heading>
      <Image
        as={motion.img}
        initial={{ translateX: -300, opacity: 0 }}
        transition={{ duration: 4, delay: 0}}
        whileInView={{ translateX: 0, opacity: 1 }}
        src="sec.jpg"
        borderRadius={10}
      />
    </Box>
  );
};

export default Dash;
