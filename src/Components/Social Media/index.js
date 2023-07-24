import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialMedia.module.css";
import { Link } from "react-router-dom";

const SocialMedia = () => {
  return (
    <div className={classes.container}>
      <>
        <a href={"https://github.com/Prasanna-collab"} target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </>
      <>
        <a href={"https://www.instagram.com/p_r_a_s_a_n__n_a/"} target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </>
      <>
        <a href={"https://www.linkedin.com/in/prasanna-rajendran/"} target="_blank">
          {" "}
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </>
    </div>
  );
};

export default SocialMedia;
