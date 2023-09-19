import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Community = () => {
  return (
    <Box py={{ lg: 60, base: "80px" }} textAlign={"center"}>
      <Heading
        as={motion.div}
        initial={{ opacity: 0, translateY: -30 }}
        transition={{ duration: 10, delay: 1 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        fontSize={{ lg: 60, md: 50, sm: 30, base: 25 }}
      >
        Join our Community
      </Heading>
      <Text
        py={{ lg: 5, md: 3, sm: 3, base: 2 }}
        fontSize={{ lg: 12, md: 10, sm: 8, base: 8 }}
      >
        Building pleasent sound for professional and standard productions
      </Text>
      <Flex py={3} justifyContent={"center"}>
        <Input
          placeholder="you@gmail.com"
          border={"1.4px solid tomato"}
          width={400}
          textAlign={"center"}
        />
      </Flex>
      <Button
        height={5}
        bg={"tomato"}
        _hover={"none"}
        py={{ lg: 6, md: 6, sm: 5, base: 6 }}
        fontSize={13}
        px={{ lg: 10, md: 8, sm: 8, base: 8 }}
        borderRadius={10}
      >
        Join
      </Button>
    </Box>
  );
};

export default Community;
