import React from "react";
import classes from "./Profile.module.css";
import logo from "../../assets/Icons/logo.png";

const Profile = () => {
  return (
    <div>
      <img src={logo} alt="logo" className={classes.sign} />
    </div>
  );
};

export default Profile;
