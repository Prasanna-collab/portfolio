import React from "react";
import classes from "./Certifications.module.css";
// import next from "../../assets/Icons/next.png";
import Next from "../Utilities/NextButton/Next";

const Certifications = () => {
  return (
    <div>
      <h3 className={classes.heading}>Certifications </h3>
      <h3 style={{ borderTop: "1px solid white", width: "70px" }}></h3>
      <div className={classes.grid}>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#053ba6" }}>HTML, CSS, JavaScript</span>
          <Next />
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#053ba6" }}>React Js</span>
          <Next />
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#053ba6" }}>Node Js, Mongo DB</span>
          <Next />
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#053ba6" }}>Tailwind CSS</span>
          <Next />
        </div>
      </div>
      
    </div>
  );
};

export default Certifications;
