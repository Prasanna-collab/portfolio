import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for additional animation
import Loading from "../../assets/loading.png";

const Projects = () => {
  const containerVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "reverse",
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] }}
      className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-5 md:px-10 py-14 2xl:container mx-auto leading-normal"
    >
      <h3 className="text-2xl font-bold mb-6">Projects</h3>
      <p className="text-base md:text-center leading-normal mb-6">
        Dive into my latest ventures where creativity meets technology! Stay
        tuned as we unveil some extraordinary <br />
        projects that push the boundaries of innovation and design.
      </p>

      <motion.div
        className="flex justify-center w-96 h-96 mx-auto"
        whileHover="hover" // Hover effect on the div
        variants={containerVariants}
      >
        <img
          src={Loading}
          alt="Projects-Loading"
          className="w-96 h-96 object-cover animate-pulse"
        />
      </motion.div>
    </motion.div>
  );
};

export default Projects;
