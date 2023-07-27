import React from "react";
import Photo1 from "../../assets/me1.jpeg";

const Image1 = () => {
  return (
    <>
      <img
        src={Photo1}
        alt="My Photo"
        style={{ width: "200px", height: "200px", borderRadius: "5px" }}
      />
    </>
  );
};

export default Image1;
