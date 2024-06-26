import React from "react";
import classes from "./Certifications.module.css";
// import next from "../../assets/Icons/next.png";
import Next from "../Utilities/NextButton/Next";
import { Link } from "react-router-dom";

const Certifications = () => {
  return (
    <div>
      <h3 className={classes.heading} style={{borderBottom: "1px solid white"}}>Certifications </h3>
      <div className={classes.grid}>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#202124" }}>HTML, CSS, JavaScript</span>

          <Link to="https://alison.com/certification/check/$2y$10$s03cZnCXmHVh6iojj9olYuzPqaFuTT6zPS31mFGyMPfQmOcqMUmVe">
            <Next />
          </Link>
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#202124" }}>React Js</span>

          <Link to="https://www.udemy.com/certificate/UC-8bb7b0eb-bee0-4870-9017-d160d04d6270/">
            {" "}
            <Next />
          </Link>
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#202124" }}>Node Js, Mongo DB</span>

          <Link to="https://www.udemy.com/certificate/UC-180b21a6-6349-4c3f-a77c-49b6b9e4960d/">
            <Next />
          </Link>
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#202124" }}>Tailwind CSS</span>

          <Link to=" https://www.udemy.com/certificate/UC-21bd232c-959e-4431-88ac-0ba2b1354cf0/">
            <Next />
          </Link>
        </div>
        <div className={classes["grid-item"]}>
          <span style={{ color: "#202124" }}>Basics of Web</span>

          <Link to="https://www.udemy.com/certificate/UC-21bd232c-959e-4431-88ac-0ba2b1354cf0/">
            <Next />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
