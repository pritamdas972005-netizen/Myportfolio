import React from "react";
import "./About.scss";
import pritam45 from "./pritam45.jpg"; // Replace with your image path

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-subtitle">
          Hello! I'm <span className="name">Pritam Das</span>, a passionate MERN Stack Developer dedicated to creating modern and responsive web applications.
        </p>

        <div className="about-content">
          {/* Text Section */}
          <div className="about-text">
            <p>
              I specialize in building web applications using React, Node.js, Express, and MongoDB. I enjoy writing clean code, designing user-friendly interfaces, and solving real-world problems with technology.
            </p>
            <p>
              My goal is to continuously learn new technologies and create high-quality projects that make an impact.
            </p>
          </div>

          {/* Image Section */}
          <div className="about-image">
            <img src={pritam45} alt="Profile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
