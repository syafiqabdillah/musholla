import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Result from "../components/Result";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Musholla in Places</title>
        <meta
          name="description"
          content="Find musholla everywhere you are going"
        />
        <link rel="canonical" href="/" />
      </Head>
      <Navbar />
      <Search />
      <Result />
    </div>
  );
};

export default Home;
