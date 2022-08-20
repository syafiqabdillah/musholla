import { Flex, Button } from "@chakra-ui/react";
import React from "react";

import Content from "./Content";

function Navbar() {
  return (
    <Flex h="60px" position={"fixed"} top="0" w="full" p={3}>
      <Content justifyContent="flex-end" alignItems="center">
        <Button colorScheme={"facebook"}>Contribute</Button>
      </Content>
    </Flex>
  );
}

export default Navbar;
