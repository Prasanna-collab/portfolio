import React, { useContext, useEffect } from "react";
import classes from "./Body.module.css";
import SocialMedia from "../Social Media";
import { contextData } from "../../ContextProvider/ContextProvider";
import MyCarousel from "../MyCarousel/index.js";
import Skills from "../Skills";
import Emoji from "react-emoji";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import Click from "../../assets/Icons/clickme.png";
import Tools from "../Tools";
import Projects from "../Projects";

const Body = () => {
  const navigate = useNavigate();
  const { data, setData } = useContext(contextData);

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth <= 500) {
        setData((prev) => ({ ...prev, margin: "50px" }));
      }
    };

    // window.addEventListener("resize", updateMargin);
    updateMargin();

    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, [data.width]);
  const handleGoProjects = (event) => {
    event.preventDefault();
    navigate("/my-projects");
  };
  return (
    <div className={classes.mother} style={{ marginTop: data.margin }}>
      <div className={classes.flex2}>
        <div className={classes.flex3}>
          <div className={classes.heading}>
            <h1>
              Hello, World{" ! "}
              {/* {Emoji.emojify(":smiley:")} */}
            </h1>
            <h1>I am <span style={{color:"#dc3545"}}>Prasanna</span>R</h1>
            <h2>
              Software Developer{" "}
              <Link to={"my-projects"}>
                <img
                  src={Click}
                  alt="click-me"
                  style={{ width: "50px", height: "50px" }}
                />
              </Link>
            </h2>{" "}
            <div style={{ marginLeft: "" }}></div>
          </div>
          <div className={classes.work}>
            I like to craft and scalable front end products with great user
            experiences. Here, you'll find a collection of projects,
            experiences, and skills that define my proficiency in crafting
            innovative solutions.
          </div>

          <div className={classes.none}>
            <SocialMedia />
          </div>
        </div>
        <div>
          <MyCarousel />
        </div>
      </div>
      <div className={classes.projectskilltool}>
        <div className={classes["carousel-social"]}>
          <div>
            <Skills />
          </div>
          <div>
            <Tools />
          </div>
        </div>
        <div>
          <Projects />
        </div>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};
//
export default Body;
