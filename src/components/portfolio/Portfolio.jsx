import React, { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "KrimA Architecture Website",
    img: "https://architecturechat.com/wp-content/uploads/2019/01/mkpl.png",
    desc: "A modern and visually engaging architectural firm website designed with HTML and CSS, showcasing completed projects, team profiles, and sponsor details with a professional touch.",
  },
  {
    id: 2,
    title: "Hospital Management System",
    img: "https://i.ytimg.com/vi/HrWJzzfU9Z0/maxresdefault.jpg",
    desc: "A comprehensive web-based system designed to streamline hospital operations by managing patient records, appointments, and administrative workflows efficiently.",
  },
  {
    id: 3,
    title:
      "Efficient Terrestrial & Space Data Relay System for Climate Monitoring",
    img: "https://pub.mdpi-res.com/aerospace/aerospace-09-00317/article_deploy/html/images/aerospace-09-00317-g001.png?1655107487",
    desc: "A technical analysis of advanced algorithms and optimized data relay systems for improved climate monitoring, leveraging both terrestrial and space-based networks.",
  },
  {
    id: 4,
    title: "Namaste Nepal – Cultural & Community Engagement",
    img: "https://basecampadventure.com/wp-content/uploads/2018/07/Nepal-Heritage-Tour-IV.jpg",
    desc: "A platform celebrating Nepalese culture, heritage, and community engagement through events, digital storytelling, and interactive initiatives that promote national identity and unity.",
  },
  {
    id: 5,
    title: "Diabetes Prediction using Machine Learning",
    img: "https://cdn.analyticsvidhya.com/wp-content/uploads/2022/01/Diabetes-Prediction-Using-Machine-Learning.webp",
    desc: "Predicting diabetes using Logistic Regression and SVM with feature selection, engineering, and model evaluation.",
  },
  {
    id: 6,
    title: "Sales Prediction using Regression Models",
    img: "https://www.mdpi.com/data/data-04-00015/article_deploy/html/images/data-04-00015-g001.png",
    desc: "Forecasting sales based on TV ads using Linear Regression and SVR, with a Streamlit-based prediction app.",
  },
  {
    id: 7,
    title: "Employee Attrition Analysis using Classification Models",
    img: "https://pub.mdpi-res.com/applsci/applsci-12-06424/article_deploy/html/images/applsci-12-06424-g005.png?1656065250",
    desc: "Predicting employee attrition using Logistic Regression and SVM while handling missing data and comparing models.",
  },
  {
    id: 8,
    title: "Water Quality Prediction using Machine Learning",
    img: "https://sensorex.com/wp-content/uploads/2020/05/ecology-trash-picking-up-garbage.jpg",
    desc: "Classifying water potability using Logistic Regression and SVM with preprocessing and evaluation metrics analysis.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);
  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
