import React, { useContext, useEffect } from "react";
import classes from "./Body.module.css";
import SocialMedia from "../Social Media";
import { contextData } from "../../ContextProvider/ContextProvider";
const Body = () => {
  const { data, setData } = useContext(contextData);

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth <= 500) {
        setData((prev) => ({ ...prev, margin: "100px" }));
      }
    };

    // window.addEventListener("resize", updateMargin);
    updateMargin();

    console.log(data);
    console.log(process.env)
    // return () => {
    //   window.removeEventListener("resize", updateMargin);
    // };
  }, [data.width]);
  return (
    <div className={classes.mother} style={{ marginTop: data.margin }}>
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
//
export default Body;
