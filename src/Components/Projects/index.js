import React, { useContext } from "react";
import "./Projects.module.css";
import { contextData } from "../../ContextProvider/ContextProvider";


const Projects = () => {
  const { data } = useContext(contextData);
  return (
    <div style={{ marginTop: data.margin, color:"#fbeaeb"}}>Projects Will Be Added Here Soon!</div>
  );
};

export default Projects;
