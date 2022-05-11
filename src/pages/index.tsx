import { SetStateAction, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

import {
  Button,
  Flex,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  StackDivider,
  VStack,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";

import * as Icon from "react-feather";
import CountUp from "react-countup";

import { ScrollButton, NavBar, KofiWidget } from "../components";
import ThaiWordlist from "../common/thaidict.json";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { colorMode, toggleColorMode } = useColorMode();
  const formBackground = useColorModeValue("gray.100", "gray.700");

  const search = () => {
    setIsLoading(true);
    const regex: RegExp = RegExp(value);
    setResults(ThaiWordlist.filter((word: string) => regex.test(word)));
    setIsLoading(false);
    setTimeout(scrollDown, 500);

    // console.log(ThaiWordlist.filter((word: string) => word.match(regex)));
    // console.log(ThaiWordlist.filter((word: string) => word.includes(value)));
  };

  const displayResults = () => {
    document
      .getElementById("_results")
      ?.removeChild(document.getElementById("_results")!.firstChild!);
    const len = results.length;
    const resultList = results
      .slice(0, len >= 1000 ? 1000 : len)
      .map((word: string) => <Text key={word}>{word}</Text>);
    return resultList;
  };

  const scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.clientHeight * 0.95,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Thai Regex Dict | พจนานุกรมนิพจน์ปรกติ</title>
        <meta
          name="description"
          content="Thai Regex Dictionary - พจนานุกรมนิพจน์ปรกติ"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <KofiWidget />

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
          <Heading textAlign="center" mb={6}>
            Thai Regex Dict
          </Heading>
          <InputGroup>
            <InputLeftElement pointerEvents="none">
              <Icon.Search />
            </InputLeftElement>
            <Input
              placeholder="ค้นหา..."
              mb={3}
              type="text"
              value={value}
              onChange={(e: {
                currentTarget: { value: SetStateAction<string> };
              }) => {
                setValue(e.currentTarget.value);
              }}
              onKeyPress={(e: { key: string }) => {
                if (e.key === "Enter") {
                  search();
                }
              }}
            />
          </InputGroup>
          <Button
            mb={6}
            colorScheme="teal"
            onClick={search}
            isLoading={isLoading}
          >
            Search
          </Button>
          <Button onClick={toggleColorMode}>
            {colorMode === "dark" ? <Icon.Sun /> : <Icon.Moon />}
          </Button>
        </Flex>
      </Flex>

      {results.length > 0 && (
        <VStack mb={8} minHeight="65vh">
          <Heading mb={6} id="test">
            พบ{" "}
            <CountUp
              end={results.length}
              separator=","
              duration={2}
              enableScrollSpy={true}
            />{" "}
            คำ
          </Heading>
          <VStack spacing={2} divider={<StackDivider />}>
            {displayResults()}
          </VStack>
          <VStack spacing={6}>
            <ScrollButton />
            <IconButton
              aria-label="GitHub"
              icon={<Icon.GitHub />}
              onClick={() => {
                window.open("https://github.com/richeyphu/thai-regex-dict");
              }}
              variant="ghost"
            />
          </VStack>
        </VStack>
      )}
    </div>
  );
};

export default Home;
