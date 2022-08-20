import { Flex, Text } from "@chakra-ui/react";
import React from "react";

import Musholla from "../types/musholla";

function Badge(props: { children: React.ReactNode }) {
  return (
    <Flex
      rounded="lg"
      color="white"
      bg="blue.500"
      py={1}
      px={2}
      justifyContent="center"
      alignItems="center"
    >
      {props.children}
    </Flex>
  );
}

function MushollaItem(props: { musholla: Musholla }) {
  let musholla = props.musholla;
  return (
    <Flex
      key={musholla._id}
      bg="white"
      p="3"
      w="full"
      color="blue.800"
      rounded="xl"
      flexDirection={"column"}
    >
      <Flex justifyContent={"space-between"} w="full">
        <Text>
          {musholla.place_name} - {musholla.area_name}
        </Text>
        <Text fontWeight={"bold"}>{musholla.location_name}</Text>
      </Flex>
      <Flex gap="1" mt="3" justifyContent={"flex-end"}>
        {musholla.men && <Badge>men</Badge>}
        {musholla.women && <Badge>women</Badge>}
        {musholla.sarung && <Badge>sarung</Badge>}
        {musholla.mukena && <Badge>mukena</Badge>}
        {musholla.jumatan && <Badge>jumatan</Badge>}
      </Flex>
    </Flex>
  );
}

export default MushollaItem;
