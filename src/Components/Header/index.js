import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { useNavigate } from "react-router-dom";
import Profile from "../Profile";
import { contextData } from "../../ContextProvider/ContextProvider";

const Header = () => {
  const { data, setData } = useContext(contextData);

  const [show, setShow] = useState(true);
  const [state, setState] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const updateDimensions = () => {
      setState({ height: window.innerHeight, width: window.innerWidth });
      setData((prev) => ({
        ...prev,
        height: window.innerHeight,
        width: window.innerWidth,
      }));
      // console.log(state);
    };
    //event listener for updating windows dimensions on resize;
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    if (state.width <= 500) {
      setShow(true);
    } else if (state.width > 500) {
      setShow(true);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [state.width]);

  const handleClick = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  return (
    <div className={classes.mother}>
      {/* <Profile /> */}
      {state.width <= 500 ? (
        <>
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
        </>
      ) : (
        <div>
          <div className={classes.route}>
            <button>Experience</button>

            <button>My resume</button>

            <button>Contact Me</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
