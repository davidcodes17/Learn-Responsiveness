import { Box, Flex, IconButton, Text } from "@chakra-ui/react";
import React from "react";
import Logo from "../components/Logo";
import { Music } from "iconsax-react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <Flex
      justifyContent={"center"}
      as={motion.div}
      initial={{ opacity: 0, translateY: -30 }}
      transition={{ duration: 10, delay: 0.5 }}
      whileInView={{ opacity: 1, translateY: 0 }}
    >
      <Box textAlign={"center"}>
        <IconButton
          icon={<Music variant="Bold" color="tomato" size={70} />}
          bg={"none"}
          _hover={"none"}
        />
        <Text fontSize={{ lg: 60, md: 20, sm: 20, base: 40 }} py={5}>
          DC Studios
        </Text>
        <Text fontSize={{ lg: 30, md: 20, sm: 20, base: 10 }}>
          &copy; All Rights Reserved @davidcodes
        </Text>
      </Box>
    </Flex>
  );
};

export default Footer;
