import React from "react";
import classes from "./Skills.module.css";

const Skills = () => {
  return (
    <>
      <div>
        <h3 className={classes.heading}>SKILLS</h3>
        <div className={classes.mother}>
          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Software Skills</h5>
            </button>
            <div className={classes.skillnames}>
              <div className={classes.name}>DataStructures & Algorithms</div>
              <div className={classes.name}>Software Engineering</div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Language</h5>
            </button>
            <div className={classes.skillnames}>
              <div className={classes.name}>JavaScript</div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>JavaScript Frameworks</h5>
            </button>{" "}
            <div className={classes.skillnames}>
              <div className={classes.name}>React</div>
              <div className={classes.name}>Node Js</div>
              <div className={classes.name}>Express Js</div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Styles</h5>
            </button>
            <div className={classes.skillnames}>
              <div className={classes.name}>CSS</div>
              <div className={classes.name}>Tailwind CSS</div>
              <div className={classes.name}>Bootstrap</div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Database</h5>
            </button>
            <div className={classes.skillnames}>
              <div className={classes.name}>SQL-MySQL</div>
              <div className={classes.name}>NoSQL-Mongo DB</div>
            </div>
          </div>

          <div className={classes.children}>
            <button className={classes.mybtn}>
              <h5>Cloud</h5>
            </button>
            <div className={classes.skillnames}>
              <div className={classes.name}>Netlify</div>
              <div className={classes.name}>Render</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
