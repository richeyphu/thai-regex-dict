import React, { useState } from "react";
import { IconButton } from "@chakra-ui/react";
import { ArrowUp } from "react-feather";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
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
    <>
      {visible && (
        <IconButton
          aria-label="Scroll to top"
          icon={<ArrowUp />}
          onClick={scrollToTop}
          mt={6}
        />
      )}
    </>
  );
};

export default ScrollButton;
