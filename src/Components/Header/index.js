import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { contextData } from "../../ContextProvider/ContextProvider";
import Logo from "../../assets/Icons/logo.png"; // Assuming you have a Logo component

const Header = () => {
  const { setData } = useContext(contextData);
  const [show, setShow] = useState(false); // Default to false to hide the menu initially
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 500);

  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 500);
      setData((prev) => ({
        ...prev,
        width,
        height: window.innerHeight,
      }));
    };

    window.addEventListener("resize", updateDimensions);
    updateDimensions();

    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, [setData]);

  const handleClick = () => {
    setShow((prev) => !prev); 
  };

  const handleResume = (event) => {
    event.preventDefault();
    window.open(
      "https://drive.google.com/file/d/1I-9opHjCCQFkSN9ZPVaAQp8J8OHm45AW/view?usp=drivesdk",
      "_blank"
    );
  };

  return (
    <header className=" sticky top-0 bg-gray-800 text-white shadow-md flex items-center p-2 z-20">
      <div className="flex items-center justify-between w-full max-w-screen-xl mx-auto">
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="Prasanna Developer" className="w-12 h-12 rounded-xl" />
        </Link>
        <div className="flex items-center justify-stretch gap-4">
          {isMobile && (
            <FontAwesomeIcon
              icon={faBars}
              onClick={handleClick}
              className="text-3xl cursor-pointer"
            />
          )}
          {isMobile && show && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-90 flex flex-col items-center justify-center gap-4 p-6 z-30">
              <Link
                to="/"
                className="text-base font-semibold text-red-500 opacity-full shadow-lg"
                onClick={handleClick}
              >
                Home
              </Link>
              <Link
                to="my-experience"
                className="text-base font-semibold text-red-500 opacity-full shadow-lg"
                onClick={handleClick}
              >
                Experience
              </Link>
              <button
                onClick={handleResume}
                className="text-base font-semibold text-red-500 opacity-full shadow-lg"
              >
                My Resume
              </button>
              <Link
                to="contact-me"
                className="text-base font-semibold text-red-500 opacity-full shadow-lg"
                onClick={handleClick}
              >
                Contact Me
              </Link>
            </div>
          )}
          {!isMobile && (
            <div className="flex gap-4">
              <Link
                to="/"
                className="text-base font-semibold hover:text-gray-400"
              >
                Home
              </Link>
              <Link
                to="my-experience"
                className="text-base font-semibold hover:text-gray-400"
              >
                Experience
              </Link>
              <button
                onClick={handleResume}
                className="text-base font-semibold hover:text-gray-400"
              >
                My Resume
              </button>
              <Link
                to="contact-me"
                className="text-base font-semibold hover:text-gray-400"
              >
                Contact Me
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
