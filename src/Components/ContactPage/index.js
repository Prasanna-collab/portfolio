import React, { useContext } from "react";
import classes from "./ContactPage.module.css";
import { contextData } from "../../ContextProvider/ContextProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import pointer from "../../assets/Icons/redo-arrow.png";
import email from "../../assets/Icons/paper-plane.png";
import phone from "../../assets/Icons/phone.png";
import Footer from "../Footer";

const ContactPage = () => {
  const { data } = useContext(contextData);
  const githubUrl = process.env.REACT_APP_GITHUB_URL;
  const instagramUrl = process.env.REACT_APP_INSTA_URL;
  const linkedInUrl = process.env.REACT_APP_LINKEDIN_URL;
  // console.log(githubUrl,instagramUrl, linkedInUrl);
  return (
    <div style={{ marginTop: data.margin, color: "#fbeaeb" }}>
      <h3 className={classes.heading}>GET IN TOUCH ?</h3>
      <h3 style={{ borderTop: "1px solid white", width: "70px" }}></h3>
      <div className={classes.overall}>
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

        <div className={classes.card}>
          <div className={classes.child}>
            <img
              src={email}
              alt="arrow-down"
              style={{ width: "30px", height: "30px" }}
            />
            <h4>raprasannaanbu@gmail.com</h4>
          </div>
          <div className={classes.child}>
            <img
              src={phone}
              alt="arrow-down"
              style={{ width: "30px", height: "30px" }}
            />
            <h4>+91 6380719807</h4>
          </div>
        </div>
        <div style={{ margin: "auto" }}>
          <form
            method="POST"
            action="mailto: raprasannaanbu@gmail.com"
            encType="multipart/form-data"
          >
            <input type="Submit" value="Mail me ?" />
            {/* <img
          src={pointer}
          alt="arrow-down"
          style={{ width: "50px", height: "50px" }}
        /> */}
          </form>
        </div>
      </div>
      <div
        style={{ position: "fixed", bottom: "0px", left: "0px", right: "0px" }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
