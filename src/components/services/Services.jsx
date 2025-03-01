import React, { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      //   whileInView="animate"
      ref={ref}
      animate={isInView && "animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on creating high-quality, user-friendly &
          <br /> accessible web applications.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Creative</motion.b>{" "}
            Project
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>That Make an </motion.b>{" "}
            Impact
          </h1>
          <button>WHAT I DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Optimizing Predictive Models</h2>
          <p>
            Skilled in developing machine learning models for predictive
            analytics, data-driven decision-making, and real-world applications.
            This includes leveraging statistical techniques, data preprocessing,
            and advanced AI methodologies to enhance accuracy and efficiency in
            various domains.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Innovative Web & UI/UX Design</h2>
          <p>
            Experienced in building dynamic, responsive web applications and
            crafting visually appealing UI/UX designs for seamless user
            experiences. Specializing in front-end technologies, modern
            frameworks, and intuitive user flows to create engaging and
            user-friendly digital interfaces.
          </p>

          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Data Analytics & Visualization</h2>
          <p>
            Proficient in analyzing complex datasets using Python, Pandas, and
            Matplotlib to extract meaningful insights and trends. Capable of
            performing statistical analysis, building data-driven dashboards,
            and applying machine learning techniques to optimize decision-making
            processes.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          whileHover={{ background: "lightgray", color: "black" }}
          className="box"
        >
          <h2>Mastering the Art of Hosting</h2>
          <p>
            Extensive experience in hosting events, launching programs, and
            engaging diverse audiences while working with various companies.
            Skilled in public speaking, coordinating professional discussions,
            and fostering meaningful interactions to create impactful and
            memorable experiences.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
