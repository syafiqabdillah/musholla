import { Flex, Heading, CircularProgress, Button } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import Musholla from "../types/musholla";
import { API_URL } from "../utils/constants";
import MushollaItem from "./MushollaItem";

function MushollaList(props: {
  listMusholla: Musholla[];
  q: string | undefined;
}) {
  if (props.listMusholla.length === 0) {
    return (
      <Flex
        textAlign="center"
        fontSize="sm"
        flexDir={"column"}
        alignItems="center"
      >
        Tidak menemukan musholla dengan kata kunci ini
        <Button mt="6" w="max-content" colorScheme={"facebook"}>
          Kontribusi
        </Button>
      </Flex>
    );
  }
  return (
    <>
      <Heading as="h1" fontSize={25} textAlign="center">
        Musholla di {props.q ? `"${props.q}"` : "..."}
      </Heading>
      <Flex flexDir="column" gap="3" mt="12" w="full" mb="200px">
        {props.listMusholla.map((musholla, index) => (
          <MushollaItem musholla={musholla} key={musholla._id} />
        ))}
      </Flex>
    </>
  );
}

function Result() {
  const [listMusholla, setListMusholla] = useState<Musholla[]>([]);
  const [loadingListMusholla, setLoadingListMusholla] = useState(false);
  const [firstLoad, setFirstLoad] = useState(true);

  const router = useRouter();
  const q = router.query.q?.toString();

  async function fetchListMusholla() {
    if (q && !loadingListMusholla) {
      setLoadingListMusholla(true);
      try {
        const resp = await axios.get(`${API_URL}/musholla/search?q=${q}`);
        setListMusholla(resp.data);
      } catch (err: any) {
        console.log(err.toString());
      } finally {
        setLoadingListMusholla(false);
        setFirstLoad(false);
      }
    }
  }

  useEffect(() => {
    fetchListMusholla();
  }, [router]);

  return (
    <Flex
      minH="100vh"
      bg="blue.800"
      justifyContent="flex-start"
      alignItems="center"
      flexDir="column"
      color="white"
      p={6}
      pt="30%"
    >
      <Flex flexDir="column" w="full" maxW="500px" mx="auto">
        {loadingListMusholla ? (
          <Flex w="full" mt="6" justifyContent="center">
            <CircularProgress isIndeterminate color="blue.300" />
          </Flex>
        ) : firstLoad ? (
          <Flex>yaho</Flex>
        ) : (
          <MushollaList q={q} listMusholla={listMusholla} />
        )}
      </Flex>
    </Flex>
  );
}

export default Result;
