import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <Box pt={{lg : "130px", md: "100px", sm  : "70px", base:"80px"}}>
      <Flex justifyContent={"center"} textAlign={"center"}>
        <Box>
          <Heading
            fontSize={{lg : 60, md : 50, sm: 30, base : 25}}
            fontWeight={800}
            as={motion.div}
            initial={{ opacity: 0, translateY: -30 }}
            transition={{ duration: 10, delay: 0.5 }}
            whileInView={{ opacity: 1, translateY: 0 }}
            //   exit={{opacity:1, translateY : 0}}
          >
            Create Quality Sound <br /> 🎙️With Speed⚡
          </Heading>
          <Text py={{lg : 5, md : 3, sm : 3,base : 2}} fontSize={{lg : 12, md : 10, sm : 8, base : 9}}>
            Building pleasent sound for professional and standard productions
          </Text>
          <Button
            height={5}
            bg={"tomato"}
            _hover={"none"}
            py={{lg: 6, md : 6,sm : 5, base: 4}}
            fontSize={10}
            px={{lg : 10, md : 8, sm : 8,base : 8}}
            borderRadius={40}
          >
            Get Started
          </Button>
          <Flex py={5} justifyContent={"center"}>
            <Image
              as={motion.img}
              initial={{ translateY: 300, opacity: 0 }}
              transition={{ duration: 4, delay: 0.2 }}
              whileInView={{ translateY: 0, opacity: 1 }}
              src="hero-img.jpg"
              borderRadius={10}
              width={{lg : "80%"}}
            />
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
};

export default Hero;
