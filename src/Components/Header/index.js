import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";

const Header = () => {
  //   const navigate = useNavigate();
  const [show, setShow] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  return (
    <div style={{display:"flex"}}>
      <Profile />

      <div style={{ textAlign: "right" }} className={classes.header}>
        {show ? (
          <>
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleClick}
              className={classes.icon}
            />
          </>
        ) : (
          <>
            {" "}
            <FontAwesomeIcon
              icon={faXmark}
              onClick={handleClick}
              className={classes.icon}
            />
            <div className={classes.route}>
              <button>Experience</button>

              <button>My resume</button>

              <button>Contact Me</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
