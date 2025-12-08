import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home-section">
      <div className="home-content">
        {/* Title */}
        <h1 className="home-title">Hi, I'm Pritam Das</h1>
        <p className="home-subtitle">
          A passionate MERN Stack Developer creating modern & responsive web apps.
        </p>

        {/* Buttons */}
        <div className="home-buttons">
          <a href="#contact" className="btn hire-btn">
            Hire Me
          </a>
          <a href="/cv.pdf" target="_blank" className="btn cv-btn">
            Download CV
          </a>
        </div>

        {/* Tech Icons */}
        <div className="tech-icons">
          <FaReact size={40} className="icon react" />
          <FaNodeJs size={40} className="icon node" />
          <SiMongodb size={40} className="icon mongo" />
        </div>
      </div>
    </section>
  );
};

export default Home;
