import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <>
      <button
        onClick={(event) => {
          props.onClick(event);
        }}
      >
        {props.name}
      </button>
    </>
  );
};

export default Button;
