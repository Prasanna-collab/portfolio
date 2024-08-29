import Certifications from "../Cerftifications";
import Footer from "../Footer";
import { motion } from "framer-motion";
import BCT from "../../assets/BCT.png";
import I2G from "../../assets/I2G.png";
import Rela from "../../assets/Rela.png";
const experiences = [
  {
    title: "Software Engineer",
    company: "Bahwan CyberTek",
    date: "September 2024 - Present",
    type: "Full Time",
    logo: BCT,
  },
  {
    title: "Full Stack Developer",
    company: "I2Global Virtual Learning",
    date: "May 2024 - August 2024",
    type: "Full Time",
    logo: I2G,
  },
  {
    title: "Software Developer",
    company: "Rela Hospital",
    date: "February 2023 - April 2024",
    type: "Full Time",
    logo: Rela,
  },
];

const Experience = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.3, ease: [0, 0.71, 0.2, 1.01] },
        }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white px-5 md:px-10 py-10  2xl:container mx-auto leading-normal "
      >
        <h3 className="text-2xl font-bold mb-8">Experience</h3>
        <div className="flex flex-col gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="flex flex-col md:flex-row items-center justify-start bg-gray-900 rounded-lg p-6 max-w-3xl mx-auto shadow-lg hover:bg-gray-800 transition-transform duration-300 ease-in-out"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain bg-white rounded-full border-4 border-pink-300 mb-4 md:mb-0"
              />
              <div className="flex flex-col items-center md:items-start md:ml-6 text-center md:text-left">
                <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
                <h5 className="text-base font-medium text-gray-400 mb-1">
                  {exp.company}
                </h5>
                <p className="text-base text-gray-500">
                  {exp.date} * {exp.type}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 mb-24">
          <Certifications />
        </div>
      </motion.div>
      <div className="relative w-full">
        <Footer />
      </div>
    </>
  );
};

export default Experience;
