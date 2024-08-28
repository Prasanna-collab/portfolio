import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import SocialMedia from "../Social Media";
import { contextData } from "../../ContextProvider/ContextProvider";
import MyCarousel from "../MyCarousel/index.js";
import Skills from "../Skills";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Tools from "../Tools";
import FeaturedProjects from "../Projects/_components/FeaturedProjects.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Body = () => {
  const { data, setData } = useContext(contextData);

  useEffect(() => {
    const updateMargin = () => {
      if (window.innerWidth <= 500) {
        setData((prev) => ({ ...prev, margin: "50px" }));
      }
    };

    updateMargin();
    window.addEventListener("resize", updateMargin);

    return () => {
      window.removeEventListener("resize", updateMargin);
    };
  }, [setData]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        className={`mt-${data.margin} bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-5 md:px-10 py-10 2xl:container mx-auto leading-normal`}
      >
        <div
          className="flex flex-col justify-center items-center gap-10
         lg:flex-row-reverse lg:items-start lg:gap-20
          py-14 lg:py-20 text-white"
        >
          {/* Left Section */}
          <div className="flex flex-col items-start lg:items-start text-center lg:text-left w-full lg:w-2/3">
            <h1 className="text-4xl font-bold mb-4">
              Hello, World<span className="text-red-500">!</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-4">
              I am <span className="text-red-500">Prasanna</span> R
            </h2>
            <h3 className="text-xl font-medium mb-4">
              <Link to="my-projects">
                <motion.div
                  className="inline-block px-4 py-2 bg-red-500 text-white rounded-full text-center cursor-pointer hover:bg-red-600 transition-colors"
                  animate={{ y: [0, -15, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  Works
                  <FontAwesomeIcon
                    strokeWidth={0.5}
                    icon={faArrowRight}
                    className="ml-2"
                  />
                </motion.div>
              </Link>
            </h3>

            <p className="text-base text-left lg:text-lg mb-6">
              I specialize in crafting scalable full-stack solutions with
              exceptional user experiences. Here, you'll explore a curated
              selection of projects, skills, and insights that showcase my
              expertise in delivering innovative solutions.
            </p>
            <div className="hidden lg:flex">
              <SocialMedia />
            </div>
          </div>

          {/* Right Section - Carousel */}
          <div className="w-full lg:w-1/3 h-auto">
            <MyCarousel />
          </div>
        </div>

        {/* Skills and Tools Section */}
        <div className="flex flex-col-reverse lg:flex-row justify-start items-baseline gap-10 mt-10">
          <div className="flex flex-col gap-6 w-full">
            <Skills />
            <Tools />
          </div>
        </div>

        {/* Projects Section */}
        <div className="w-full mt-10">
          <FeaturedProjects />
        </div>
      </motion.div>

      {/* Footer */}
      <div className="relative w-full">
        <Footer />
      </div>
    </>
  );
};

export default Body;
