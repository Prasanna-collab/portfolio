import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
  const githubUrl = process.env.REACT_APP_GITHUB_URL;
  const instagramUrl = process.env.REACT_APP_INSTA_URL;
  const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL;
  console.log(githubUrl, instagramUrl, linkedInUrl);
  return (
    <div className={classes.container}>
      <a href={githubUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href={instagramUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href={linkedInUrl} target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

export default SocialMedia;
