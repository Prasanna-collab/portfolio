import React, { useEffect, useState } from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the entire document, including content that may not be visible due to scrolling
      const fullHeight = document.documentElement.scrollHeight;

      // Get the current scroll position of the user
      const scrolledHeight = window.scrollY + window.innerHeight;

      // Check if the user has reached the bottom of the page
      if (scrolledHeight >= fullHeight) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the scroll event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.scrollY]);

  return showFooter ? (
    <div className={classes.footer}>
      <div className={classes.profile}>
        <div className={classes.logo}></div>
        <div className={classes.name}>Prasanna R</div>
      </div>
      <div className={classes.terms}>
        Copyright © 2023 Prasanna. All Rights Reserved.
      </div>
    </div>
  ) : null;
};

export default Footer;
