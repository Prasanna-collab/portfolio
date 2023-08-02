import React, { useContext } from "react";
import { contextData } from "../../ContextProvider/ContextProvider";

const Experience = () => {
  const { data } = useContext(contextData);
  return (
    <div style={{ marginTop: data.margin, color: "#fbeaeb" }}>
      Details will be added soon!
    </div>
  );
};

export default Experience;
