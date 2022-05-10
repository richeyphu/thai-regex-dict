import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import * as Icon from "react-feather";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    // <Button mt={6}>
    //   <Icon.ArrowUp
    //     onClick={scrollToTop}
    //     style={{ display: visible ? "inline" : "none" }}
    //   />
    // </Button>
    <IconButton
      aria-label="Search database"
      icon={<Icon.ArrowUp />}
      onClick={scrollToTop}
      mt={6}
    />
  );
};

export default ScrollButton;
