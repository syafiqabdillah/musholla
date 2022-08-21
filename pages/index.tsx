import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { Flex } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import Result from "../components/Result";

const Home: NextPage = () => {
  return (
    <Flex flexDir="column" pt="80px" bg="gray.50">
      <Head>
        <title>Musholla in Places</title>
        <meta
          name="description"
          content="Find musholla everywhere you are going"
        />
        <link rel="canonical" href="/" />
      </Head>
      <Navbar />
      <Result />
    </Flex>
  );
};

export default Home;
