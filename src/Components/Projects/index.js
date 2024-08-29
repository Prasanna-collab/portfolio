import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import Loading from "../../assets/loading2.png";
import Footer from "../Footer";

const Projects = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
        className=" h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-5 md:px-10 py-10 2xl:container mx-auto leading-normal"
      >
        <h3 className="text-2xl font-bold mb-6">Projects</h3>
        <p className="text-base leading-normal text-center mb-6">
          Dive into my latest ventures where creativity meets technology! Stay
          tuned as we unveil some extraordinary <br />
          projects that push the boundaries of innovation and design.
        </p>
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ y: -200 }}
            animate={{
              y: [100, 0],
              rotate: [0, 5, 10, -10, 5, 0], // Smoothly oscillating rotation for dynamic effect
              transition: {
                duration: 10,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            src={Loading}
            alt="Rocket Loading"
            className="w-64 h-64 md:w-72 md:h-72 object-contain"
          />
        </div>
      </motion.div>
      <div className="">
        <Footer />
      </div>
    </>
  );
};

export default Projects;
