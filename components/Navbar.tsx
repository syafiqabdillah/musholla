import { Flex, Button } from "@chakra-ui/react";
import React from "react";

import Search from "./Search";

function Navbar() {
  return (
    <Flex
      position={"fixed"}
      h="80px"
      bg="white"
      top="0"
      w="full"
      p={3}
      shadow="md"
      zIndex={10}
    >
      <Flex
        w="full"
        maxW="500px"
        mx={"auto"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Search />
        <Button colorScheme={"facebook"}>Contribute</Button>
      </Flex>
    </Flex>
  );
}

export default Navbar;
