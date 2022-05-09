import { useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import * as Icon from "react-feather";

import ScrollButton from "../components/ScrollButton";
import ThaiWordlist from "../common/thaidict.json";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const search = () => {
    const regex: RegExp = RegExp(value);
    setResults(ThaiWordlist.filter((word: string) => regex.test(word)));

    // console.log(ThaiWordlist.filter((word: string) => word.match(regex)));
    // console.log(ThaiWordlist.filter((word: string) => word.includes(value)));
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Thai Regex Dict</title>
        <meta
          name="description"
          content="Thai Regex Dictionary | พจนานุกรมนิพจน์ปรกติ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading mb={6}>Thai Regex Dict</Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none" children={<Icon.Search />} />
            <Input
              placeholder="ค้นหา..."
              mb={3}
              type="text"
              value={value}
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
            />
          </InputGroup>
          <Button mb={6} colorScheme="teal" onClick={search}>
            Search
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "dark" ? <Icon.Sun /> : <Icon.Moon />}
          </Button>
        </Flex>
      </Flex>

      {results.length > 0 && (
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <Heading mb={6}>พบ {results.length} คำ</Heading>
          {results.map((result: string) => (
            <p>{result}</p>
          ))}
          <ScrollButton />
          <Flex justifyContent="center" mt={6}>
            <Icon.GitHub
              onClick={() => {
                window.open("https://github.com/richeyphu/thai-regex-dict");
              }}
            />
          </Flex>
        </div>
      )}
    </div>
  );
};

export default Home;
