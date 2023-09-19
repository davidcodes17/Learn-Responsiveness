import { Box, Button, Flex } from "@chakra-ui/react";
import {
  HambergerMenu,
  Music,
  Note,
  Note1,
  NoteFavorite,
  TriangleLogo,
} from "iconsax-react";
import React from "react";
import NavBar from "../components/NavBar";
import Logo from "../components/Logo";

const Header = () => {
  return (
    <Box
      className="header"
      margin={{
        lg: "0px 40px",
        md: "0px 10px",
        sm: "0px 10px",
        base: "0px 10px",
      }}
    >
      {/* <Box className="grad"></Box> */}
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Logo />
        <NavBar />
        <Button
          height={5}
          bg={"tomato"}
          _hover={"none"}
          color={"white"}
          px={5}
          py={5}
          borderRadius={20}
          fontSize={12}
          visibility={{ lg: "visible", md: "hidden", sm: "hidden", base: "hidden" }}
        >
          Download App
        </Button>
        <Box display={{ lg: "none", md: "block", sm: "block", base: "block" }}>
          <HambergerMenu />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
