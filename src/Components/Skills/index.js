import React from "react";
import classes from "./Skills.module.css";
import {motion} from "framer-motion";

const Skills = () => {
  return (
    <>
      <div>
        <h3 className={classes.heading} style={{borderBottom:"1px solid white"}}>SKILLS</h3>
        <div className={classes.mother}>
          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Software Skills</h5>
            </button>
            <div className={classes.skillnames}>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>DataStructures & Algorithms</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}} className={classes.name}>Software Engineering</motion.div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Language</h5>
            </button>
            <div className={classes.skillnames}>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}} className={classes.name}>JavaScript</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>C#</motion.div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Frameworks</h5>
            </button>{" "}
            <div className={classes.skillnames}>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>React</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>Node Js</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>Express Js</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>.Net Core 8</motion.div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Styles</h5>
            </button>
            <div className={classes.skillnames}>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>CSS</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>Tailwind CSS</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>Bootstrap</motion.div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Database</h5>
            </button>
            <div className={classes.skillnames}>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>SQL-MySQL</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>NoSQL-Mongo DB</motion.div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Cloud</h5>
            </button>
            <div className={classes.skillnames}>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>Netlify</motion.div>
              <motion.div whileHover={{scale:1.1}} transition={{bounce:0.5, type:"spring", duration:"0.2s"}}className={classes.name}>Render</motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
