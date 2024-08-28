import React from "react";
import Logo from "../../assets/Icons/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-1 px-6 md:px-10 text-base">
      <div className="flex flex-col items-center justify-center ">
        <div className=" flex items-center justify-center ">
          <img
            src={Logo}
            alt="My Logo"
            className="w-8 h-8 rounded-full mr-3"
          />
          <p className="font-semibold">Prasanna R</p>
        </div>
        <div className="text-center">
          Copyright © 2024 Prasanna. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
