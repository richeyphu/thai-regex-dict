import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  ...{
    fonts: {
      heading: `Noto Sans Thai, ${base.fonts?.heading}`,
      body: `Noto Sans Thai, ${base.fonts?.body}`,
    },
  },
});

export default theme;
