import React from "react";
import Photo2 from "../../assets/me2.jpeg";

const Image2 = () => {
  return (
    <>
      <img
        src={Photo2}
        alt="My Photo"
        style={{ width: "200px", height: "200px", borderRadius:"5px" }}
      />
    </>
  );
};

export default Image2;
