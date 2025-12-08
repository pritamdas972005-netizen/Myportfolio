import React from "react";
import "./Projects.scss";
import protfolio from "./protfolio.jpeg";

 // Replace with your portfolio image

const Projects = () => {
  return (
    <section className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="projects-grid">
          {/* Single Project */}
          <div className="project-card">
            <div className="project-image">
              <img src={protfolio} alt="My Portfolio" />
            </div>
            <div className="project-info">
              <h3>My Portfolio</h3>
              <p>
                A responsive MERN stack portfolio website with modern design, animations, and interactive components to showcase my projects and skills.
              </p>
              <a
                href="https://your-portfolio-link.com" // Replace with your live portfolio link
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
