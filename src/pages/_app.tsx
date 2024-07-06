import "../styles/globals.css";
import type { AppProps } from "next/app";

import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
