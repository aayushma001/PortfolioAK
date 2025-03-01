import React from "react";
import "./navbar.scss";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          AAYUSHMA
        </motion.span>
        <div className="social">
          <a href="https://github.com/aayushma001">
            <img src="/twitter-dark.svg" alt="" />
          </a>
          <a href="https://github.com/aayushma001">
            <img src="/github-dark.svg" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/aayushma-katuwal/">
            <img src="/linkedin-dark.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
