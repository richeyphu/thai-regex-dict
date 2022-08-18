import { useState, useEffect, SetStateAction } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import styles from "@styles/Home.module.css";

import {
  Button,
  Badge,
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
  SlideFade,
  useColorMode,
  useColorModeValue,
  useToast,
} from "@chakra-ui/react";

import { Search, GitHub } from "react-feather";
import CountUp from "react-countup";

import { ScrollButton, NavBar, KofiWidget } from "@components";
import { countSearch } from "@utils";
import ThaiWordlist from "@common/thaidict.json";

const Wordlist = Array.from(new Set(ThaiWordlist));

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");
  const [results, setResults] = useState<string[]>(null!);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formBackground = useColorModeValue("gray.100", "gray.700");
  const toast = useToast();

  useEffect(() => {
    search();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  const search = () => {
    setIsLoading(true);

    try {
      const regex: RegExp = RegExp(value);
      setResults(Wordlist.filter((word: string) => regex.test(word)));
      countSearch();
    } catch (e: any) {
      toast({
        title: e.name,
        description: e.message,
        status: "error",
        position: "bottom",
        isClosable: true,
      });
      // console.error(e);
    }

    setIsLoading(false);
  };

  const displayResults = () => {
    const len = results.length;
    const resultList = results
      .slice(0, len >= 1000 ? 1000 : len)
      .map((word: string) => <Text key={word}>{word}</Text>);
    return resultList;
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Thai Regex Dict | พจนานุกรมนิพจน์ปรกติ - Beta</title>
        <meta
          name="description"
          content="Thai Regex Dictionary - พจนานุกรมนิพจน์ปรกติ (ฺBeta)"
        />
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

      <SlideFade in={true} offsetY={250}>
        <Flex justifyContent="center">
          <Flex
            direction="column"
            background={formBackground}
            p={8}
            rounded={6}
            mt={16}
            minWidth={{ sm: "100%", md: "60%", lg: "50%", xl: "40%" }}
          >
            <Heading textAlign="center">Thai Regex Dict</Heading>
            <Text textAlign="center" mb={8}>
              พจนานุกรมนิพจน์ปรกติ <Badge colorScheme="purple">Beta</Badge>
            </Text>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <Search />
              </InputLeftElement>
              <Input
                placeholder="ค้นหา..."
                mb={1}
                type="search"
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
            {/* <Button colorScheme="teal" onClick={search} isLoading={isLoading}>
            Search
          </Button> */}
          </Flex>
        </Flex>
      </SlideFade>

      {!!value && !!results && (
        <VStack mt={14} mb={16} minHeight="65vh">
          <Heading mb={6} textAlign="center">
            {results.length > 0 ? (
              <>
                พบ{" "}
                <CountUp
                  end={results.length}
                  separator=","
                  duration={0.25}
                  enableScrollSpy={false}
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
              icon={<GitHub />}
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
