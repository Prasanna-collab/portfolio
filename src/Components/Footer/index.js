import React, { useEffect, useState } from "react";
import classes from "./Footer.module.css";
import Logo from '../../assets/Icons/logo.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.profile}>
        <div className={classes.logo}></div>
        <div className={classes.name}>
          <img src={Logo} alt='My Logo' style={{width:"40px", height:"40px", borderRadius:"50%",}}/>
          {"   "}Prasanna R
        </div>
      </div>
      <div className={classes.terms}>
        Copyright © 2023 Prasanna. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
