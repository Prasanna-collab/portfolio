import React from "react";
import Photo2 from "../../assets/me2.jpeg";
import './Image2.css'

const Image2 = () => {
  return (
    <>
      <img
        src={Photo2}
        className="image2"
        alt="My Photo"
      />
    </>
  );
};

export default Image2;
