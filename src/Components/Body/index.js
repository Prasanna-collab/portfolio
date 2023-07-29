import React, { useContext, useEffect } from "react";
import classes from "./Body.module.css";
import SocialMedia from "../Social Media";
import { contextData } from "../../ContextProvider/ContextProvider";
import MyCarousel from "../MyCarousel/index.js";
import Skills from "../Skills";
import Emoji from "react-emoji";
const Body = () => {
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
  return (
    <div className={classes.mother} style={{ marginTop: data.margin }}>
      <h1>Hello, World!{Emoji.emojify(":smiley:")}</h1>
      <h1> Welcome to my Portfolio</h1>
      <div className={classes.flex2}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div className={classes.heading}>
            <h1>I am Prasanna</h1>
            <h2>Software Developer {Emoji.emojify(":computer:")}</h2>
          </div>
          <div className={classes.work}>
            <>
              I like to craft and scalable front end products with great user
              experiences.Here, you'll find a collection of projects,
              experiences, and skills that define my proficiency in crafting
              innovative solutions.
            </>
          </div>
        </div>
        <div>
          <MyCarousel margin={data.margin} />
        </div>
      </div>

      <div className={classes["carousel-social"]}>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};
//
export default Body;
