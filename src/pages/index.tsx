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
  Spacer,
  VStack,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import * as Icon from "react-feather";
import CountUp from "react-countup";

import { ScrollButton, NavBar, KofiWidget } from "../components";
import { countSearch } from "../utils";
import ThaiWordlist from "../common/thaidict.json";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<string[]>(null!);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formBackground = useColorModeValue("gray.100", "gray.700");
  const toast = useToast();

  const search = () => {
    setIsLoading(true);
    try {
      const regex: RegExp = RegExp(value);
      setResults(
        Array.from(new Set(ThaiWordlist)).filter((word: string) =>
          regex.test(word)
        )
      );
      countSearch();
      setTimeout(scrollDown, 500);
    } catch (e) {
      if (e instanceof Error) {
        toast({
          description: e.message,
          status: "error",
          position: "bottom",
          isClosable: true,
        });
      }
      // console.error(e);
    }
    setIsLoading(false);

    // console.log(ThaiWordlist.filter((word: string) => word.match(regex)));
    // console.log(ThaiWordlist.filter((word: string) => word.includes(value)));
  };

  const displayResults = () => {
    // document.getElementById("_results")?.removeChild(document.getElementById("_results")!.firstChild!);
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
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="theme-color"
          content={useColorMode().colorMode === "dark" ? "#1a202c" : "#fff"}
        />
        <script
          async
          src="https://api.countapi.xyz/hit/thai-regex-dict-web/visits"
        />
      </Head>

      <NavBar />
      <KofiWidget />

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <Flex
          direction="column"
          background={formBackground}
          p={12}
          rounded={6}
          minWidth={{ base: "30%" }}
        >
          <Heading textAlign="center">Thai Regex Dict</Heading>
          <Text textAlign="center" mb={8}>
            พจนานุกรมนิพจน์ปรกติ
          </Text>
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
          <Button colorScheme="teal" onClick={search} isLoading={isLoading}>
            Search
          </Button>
        </Flex>
      </Flex>

      {!!results && (
        <VStack mb={16} minHeight="65vh">
          <Heading mb={6} textAlign="center">
            {results.length > 0 ? (
              <>
                พบ{" "}
                <CountUp
                  end={results.length}
                  separator=","
                  duration={2}
                  enableScrollSpy={true}
                />{" "}
                คำ
              </>
            ) : (
              <>
                ไม่พบผลลัพธ์
                <Spacer mb={6} />
                {"｡ﾟ･ (>﹏<) ･ﾟ｡"}
              </>
            )}
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
