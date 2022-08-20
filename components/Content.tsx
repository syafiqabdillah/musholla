import { Flex } from "@chakra-ui/react";
import React from "react";

function Content(props: any) {
  return (
    <Flex {...props} w="full" maxW="500px" mx="auto">
      {props.children}
    </Flex>
  );
}

export default Content;
