import React from "react";
import { Link } from "react-router-dom";
import Next from "../Utilities/NextButton/Next";
import { motion } from "framer-motion";

const certifications = [
  {
    title: "HTML, CSS, JavaScript",
    link: "https://alison.com/certification/check/$2y$10$s03cZnCXmHVh6iojj9olYuzPqaFuTT6zPS31mFGyMPfQmOcqMUmVe",
  },
  {
    title: "React Js",
    link: "https://www.udemy.com/certificate/UC-8bb7b0eb-bee0-4870-9017-d160d04d6270/",
  },
  {
    title: "Node Js, Mongo DB",
    link: "https://www.udemy.com/certificate/UC-180b21a6-6349-4c3f-a77c-49b6b9e4960d/",
  },
  {
    title: "Tailwind CSS",
    link: "https://www.udemy.com/certificate/UC-21bd232c-959e-4431-88ac-0ba2b1354cf0/",
  },
  {
    title: "Basics of Web",
    link: "https://www.udemy.com/certificate/UC-21bd232c-959e-4431-88ac-0ba2b1354cf0/",
  },
];

const Certifications = () => {
  return (
    <div className=" text-white my-6">
      <h3 className="text-2xl font-bold mb-8 pb-2">
        Certifications
      </h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 text-gray-200 rounded-lg shadow-lg p-6 flex flex-col items-center justify-between transition-transform transform hover:scale-105"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <span className="text-lg font-semibold mb-4">{cert.title}</span>
            <Link to={cert.link}>
              <Next />
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
