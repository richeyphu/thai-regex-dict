import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
  initialColorMode: "dark",
  useSystemColorMode: true,
  fonts: {
    heading: `Noto Sans Thai, ${base.fonts?.heading}`,
    body: `Noto Sans Thai, ${base.fonts?.body}`,
  },
});

export default theme;
