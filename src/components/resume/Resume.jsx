import React from "react";
import "./resume.css";
import {motion} from "framer-motion";

const SkillList = ({ src, skill }) => {
  return (
    <span>
      <img src={src} alt="checkmark" />
      <p>{skill}</p>
    </span>
  );
};

const Resume = () => {
  return (
    <section id="skills" className="container">
      <h1 className="sectionTitle">Skills</h1>
      <motion.div className="skillList" whileHover={{ color: "orange" }}>
        <SkillList src="./checkmark-dark.svg" skill="Python" />
        <SkillList src="./checkmark-dark.svg" skill="PostgreSQL" />
        <SkillList src="./checkmark-dark.svg" skill="C & C++" />
        <SkillList src="./checkmark-dark.svg" skill="Pandas" />
        <SkillList src="./checkmark-dark.svg" skill="Matplotlib" />
      </motion.div>
      <hr />
      <motion.div className="skillList" whileHover={{ color: "orange" }}>
        <SkillList src="./checkmark-dark.svg" skill="Numpy" />
        <SkillList src="./checkmark-dark.svg" skill="HTML" />
        <SkillList src="./checkmark-dark.svg" skill="CSS" />
        <SkillList src="./checkmark-dark.svg" skill="Javascript" />
      </motion.div>
      <hr />
      <motion.div className="skillList" whileHover={{ color: "orange" }}>
        <SkillList src="./checkmark-dark.svg" skill="React" />
        <SkillList src="./checkmark-dark.svg" skill="Power BI" />
        <SkillList src="./checkmark-dark.svg" skill="Git" />
        <SkillList src="./checkmark-dark.svg" skill="Firebase" />
        <SkillList
          src="./checkmark-dark.svg"
          skill="Data Structure & Algorithm"
        />
      </motion.div>
      <div class="wrapnew">
        <a href="./CV.pdf" download>
          <button class="hover">Resume</button>
        </a>
        <img src="./hero-img.png" alt="Profile Image"></img>
      </div>

      <div class="copyright">
        <p>© 2025 All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Resume;
