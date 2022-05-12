import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import theme from "../theme";

const url: string = "https://thai-regex-dict.vercel.app";
const title: string = "Thai Regex Dictionary | พจนานุกรมนิพจน์ปรกติ";
const description: string = "Thai Regex Dictionary - พจนานุกรมนิพจน์ปรกติ";
const imageUrl: string =
  "https://raw.githubusercontent.com/richeyphu/thai-regex-dict/main/public/img/cover.png";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="th">
        <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon.png"></link>
          {/* <meta name="theme-color" content="#fff" /> */}
          <meta property="og:url" content={url} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={imageUrl} />
        </Head>
        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
