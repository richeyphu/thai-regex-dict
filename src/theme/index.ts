import { extendTheme, theme as base, type ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
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
