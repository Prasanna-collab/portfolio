import React from "react";
import nextButton from "../../../assets/Icons/next.png";

const Next = () => {
  return (
    <div style={{color:"#053ba6", fontWeight:"200", fontSize:"small"}}>
      View Certificate{"  "}
      <img
        src={nextButton}
        alt="Next"
        style={{ width: "20px", height: "20px" }}
      />
    </div>
  );
};

export default Next;
