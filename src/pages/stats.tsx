import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import {
  Flex,
  Heading,
  Text,
  VStack,
  Divider,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";
import axios from "axios";
import CountUp from "react-countup";
import * as Icon from "react-feather";

import { NavBar, KofiWidget } from "@components";

const Stats: NextPage = () => {
  const [visits, setVisits] = useState<number>(0);
  const [searches, setSearches] = useState<number>(0);

  useEffect(() => {
    axios
      .get("https://api.countapi.xyz/get/thai-regex-dict-web/visits")
      .then((res) => {
        setVisits(res.data.value);
      })
      .catch((err) => console.log(err));
    axios
      .get("https://api.countapi.xyz/get/thai-regex-dict-web/searchclicks")
      .then((res) => {
        setSearches(res.data.value);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Head>
        <title>Thai Regex Dict | พจนานุกรมนิพจน์ปรกติ - สถิติการใช้งาน</title>
        <meta
          name="description"
          content="สถิติการใช้งาน Thai Regex Dictionary - พจนานุกรมนิพจน์ปรกติ"
        />
        {/* <link rel="icon" href="/favicon.ico" /> */}
        <meta
          name="theme-color"
          content={useColorMode().colorMode === "dark" ? "#1a202c" : "#fff"}
        />
      </Head>

      <NavBar />
      <KofiWidget />

      <Flex height="100vh" alignItems="center" justifyContent="center">
        <VStack spacing={4}>
          <Heading>สถิติการใช้งาน</Heading>
          <Divider />
          <Text fontWeight="bold" fontSize="1.5rem">
            จำนวนเข้าชมเว็บ
          </Text>
          <Heading>
            <CountUp
              end={visits}
              separator=","
              duration={2}
              enableScrollSpy={false}
            />
          </Heading>
          <Text fontWeight="bold" fontSize="1.5rem">
            จำนวนครั้งค้นหา
          </Text>
          <Heading>
            <CountUp
              end={searches}
              separator=","
              duration={2}
              enableScrollSpy={false}
            />
          </Heading>
          <Divider />
          <IconButton
            aria-label="Home"
            icon={<Icon.Home />}
            onClick={() => {
              location.href = "/";
            }}
            variant="ghost"
          />
        </VStack>
      </Flex>
    </>
  );
};

export default Stats;
