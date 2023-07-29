import React from "react";
import Photo1 from "../../assets/me1.jpeg";

const Image1 = () => {
  return (
    <>
      <img
        src={Photo1}
        alt="My Photo"
        style={{ width: "250px", height: "250px", borderRadius: "5px", objectFit:"cover" }}
      />
    </>
  );
};

export default Image1;
