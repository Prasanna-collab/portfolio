import React, { useContext } from "react";
import classes from "./Projects.module.css";
import { contextData } from "../../ContextProvider/ContextProvider";

const Projects = () => {
  const { data } = useContext(contextData);
  return (
    <div
      style={{ marginTop: data.margin, color: "#fbeaeb" }}
      className={classes.mother}
    >
      <h3 className={classes.heading}>PROJECTS</h3>

      <div style={{ marginLeft: "10px" }}>
        <h5>Projects Will Be Added Here Soon!</h5>{" "}
      </div>
    </div>
  );
};

export default Projects;
