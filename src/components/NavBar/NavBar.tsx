import React from "react";
import {
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/react";
import * as Icon from "react-feather";

import { AboutModal } from "@components";

type Props = {};

const NavBar = (props: Props) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Flex position="fixed" top={5} right={5}>
      <HStack spacing={0}>
        {/* <IconButton
          aria-label="GitHub"
          icon={<Icon.GitHub />}
          onClick={() => {
            window.open("https://github.com/richeyphu/thai-regex-dict");
          }}
          variant="ghost"
        /> */}
        <IconButton
          aria-label="Change Theme"
          icon={colorMode === "dark" ? <Icon.Sun /> : <Icon.Moon />}
          onClick={toggleColorMode}
          variant="ghost"
        />
        <IconButton
          aria-label="About"
          icon={<Icon.HelpCircle />}
          onClick={onOpen}
          variant="ghost"
        />
      </HStack>
      <AboutModal onClose={onClose} isOpen={isOpen} />
    </Flex>
  );
};

export default NavBar;
