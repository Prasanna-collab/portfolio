import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import classes from "./Header.module.css";
import { Link} from "react-router-dom";
import Profile from "../Profile";
import { contextData } from "../../ContextProvider/ContextProvider";

const Header = () => {
  const {setData } = useContext(contextData);

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
    // eslint-disable-next-line
  }, [state.width]);

  const handleClick = (e) => {
    e.preventDefault();
    setShow((prev) => !prev);
  };

  const handleResume = (event) => {
    event.preventDefault();
    window.location.href =
      "https://drive.google.com/file/d/1gNmrWq9r1iRbzdsASjcZPk4-8vVHc-V-/view?usp=drive_link";
  };
  return (
    <div className={classes.mother}>
      {show ? <Profile /> : ""}
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
                  <Link to={"/"}>
                    <button>Home</button>
                  </Link>
                  <Link to={"my-experience"}>
                    <button>Experience</button>
                  </Link>

                  <button onClick={handleResume}>My resume</button>
                  <Link to={"contact-me"}>
                    <button>Contact Me</button>
                  </Link>
                </div>
              </>
            )}
          </div>
        </>
      ) : (
        <div>
          <div className={classes.route}>
            <Link to={"/"}>
              <button>Home</button>
            </Link>
            <Link to={"my-experience"}>
              <button>Experience</button>
            </Link>

            <button onClick={handleResume}>My resume</button>
            <Link to={"contact-me"}>
              <button>Contact Me</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
