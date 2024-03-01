import React, { useContext } from "react";
import { contextData } from "../../ContextProvider/ContextProvider";
import classes from "./Experience.module.css";
import rela from "../../assets/Icons/logo_in-01.png";
import Certifications from "../Cerftifications";
import Footer from "../Footer";

const Experience = () => {
  const { data } = useContext(contextData);
  return (
    <div style={{ marginTop: data.margin, color: "#fbeaeb" }}>
      <h3 style={{ color: "#faeaeb",borderBottom: "1px solid white" }} className={classes.heading}>
        Experience
      </h3>
       {/* <span style={{ width: "70px" }}></span> */}
      <div className={classes.column}>
        <div className={classes.myexp}>
          <div className={classes.logo}>
            <img
              src={rela}
              alt="rela-hospital"
              style={{
                width: "100%",
                height: "auto",
                borderRadius: "20px",
              }}
            />
          </div>
          <div className={classes.experience}>
            <div className={classes.role}>
              <h4 style={{ color: "#202124" }}>Software Developer</h4>
              <h4 style={{ color: "#202124" }}>Rela Hospital</h4>
              <h6>October 2022 - Present * Full Time</h6>
            </div>
            {/* <div className={classes.role}>
              <h4 style={{ color: "#053ba6" }}>Software Developer Trainee</h4>
              <h4 style={{ color: "#053ba6" }}>Rela Hospital</h4>
              <h6>October 2022 - January 2023 * Full Time</h6>
            </div> */}
          </div>
        </div>
      </div>
      <div className={classes.certifications} style={{ marginBottom: "150px" }}>
        <div>
          <Certifications />
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "0px",
          left: "0px",
          right: "0px",
          // marginTop: "20px",
        }}
      >
        <Footer />
      </div>
    </div>
  );
};

export default Experience;
