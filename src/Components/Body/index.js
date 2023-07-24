import React from "react";
import classes from "./Body.module.css";
import SocialMedia from "../Social Media";

const Body = () => {
  return (
    <div>
      <div className={classes.heading}>
        <h1>Prasanna Rajendran</h1>
        <h2>Software Developer</h2>
      </div>
      <div className={classes.work}>
        <span>
          I like to craft and scalable front end products with great user
          experiences.
        </span>
      </div>
      <div>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Body;
