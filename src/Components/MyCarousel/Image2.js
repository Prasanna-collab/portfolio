import React from "react";
import Photo2 from "../../assets/me2.jpeg";

const Image2 = () => {
  return (
    <>
      <img
        src={Photo2}
        alt="My Photo"
        style={{ width: "250px", height: "250px", borderRadius:"5px",objectFit:"cover" }}
      />
    </>
  );
};

export default Image2;
