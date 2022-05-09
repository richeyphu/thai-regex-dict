import { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import styles from "../styles/Home.module.css";

import { Button, Flex, Heading, Input, useColorMode, useColorModeValue } from "@chakra-ui/react";

import ThaiWordlist from "../common/thai-wordlist.json";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");

  const { toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const search = () => {
    const regex: RegExp = RegExp(value);
    console.log(ThaiWordlist.filter((word: string) => word.match(regex)));
    // console.log(ThaiWordlist.filter((word: string) => word.includes(value)));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Thai Regex Dict</title>
        <meta name="description" content="Thai Regex Dictionary | พจนานุกรมนิพจน์ปรกติ" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Thai Regex Dict</Heading>
          <Input
            placeholder="ค้นหา..."
            mb={3}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
          />
          <Button mb={6} colorScheme="teal" onClick={search}>
            Search
          </Button>
          <Button onClick={toggleColorMode}>Dark/Light</Button>
        </Flex>
      </Flex>

      {/* <main className={styles.main}>
        <h1 className={styles.title}>Thai Regex Dict</h1>

        <div>
          <input
            className={styles.description}
            type="text"
            value={value}
            onChange={(e) => {
              setValue(e.currentTarget.value);
            }}
            // onKeyUp={}
          ></input>
          <button className={styles.description} onClick={search}>
            Search
          </button>
        </div>
      </main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
