import React, { useState } from "react";
import { createContext } from "react";

export const contextData = createContext({});
const ContextProvider = (props) => {
  const [data, setData] = useState({
    margin: "100px",
    height: "",
    width: "",
  });
  return (
    <div>
      <contextData.Provider value={{ data, setData }}>
        {props.children}
      </contextData.Provider>
    </div>
  );
};

export default ContextProvider;
