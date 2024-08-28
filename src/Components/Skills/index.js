import React from "react";
import { motion } from "framer-motion";

const skillsData = [
  {
    category: "Software Skills",
    skills: ["DataStructures & Algorithms", "Software Engineering"],
  },
  {
    category: "Language",
    skills: ["JavaScript", "C#", "TypeScript"],
  },
  {
    category: "Libraries & Frameworks",
    skills: ["Next Js", "React Js", "Node Js", "Express Js", ".Net Core 8"],
  },
  {
    category: "Styles",
    skills: [
      "CSS",
      "Tailwind CSS",
      "Bootstrap",
      "Material UI",
      "SASS",
      "Styled Components",
    ],
  },
  {
    category: "Database",
    skills: ["MS SQL Server", "Mongo DB"],
  },
  {
    category: "Cloud",
    skills: ["AWS", "Firebase"],
  },
];

const Skills = () => {
  return (
    <div>
      <h3 className="text-white text-2xl font-bold mb-2">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl"
          >
            <h5 className="text-lg text-white mb-4">{category.category}</h5>
            <div className="flex flex-wrap gap-2 justify-center">
              {category.skills.map((skill, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="px-4 py-2 text-sm bg-white text-black rounded-full shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
