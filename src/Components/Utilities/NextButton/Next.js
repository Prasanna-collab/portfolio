import React from "react";
import nextButton from "../../../assets/Icons/next.png";

const Next = () => {
  return (
    <div style={{ color: "#202124", fontWeight: "200", fontSize: "small" }}>
      View Certificate{"  "}
      <img
        src={nextButton}
        alt="Next"
        style={{ width: "10px", height: "10px" }}
      />
    </div>
  );
};

export default Next;
