import React from "react";
import "./Blogs.scss";

const blogData = [
  {
    title: "How I Built My MERN Portfolio",
    desc: "A complete guide on building a professional portfolio using React, Node, Express, and MongoDB.",
    date: "Dec 2025",
  },
  {
    title: "Top 10 React Interview Questions",
    desc: "Most asked React interview questions with perfect answers.",
    date: "Nov 2025",
  },
  {
    title: "Mastering JavaScript in 30 Days",
    desc: "The ultimate roadmap to become strong in JavaScript.",
    date: "Oct 2025",
  },
];

const Blogs = () => {
  return (
    <section className="blogs-section fade-up">
      <h2 className="blogs-title neon-text">Latest Blogs</h2>

      <div className="blogs-grid">
        {blogData.map((blog, index) => (
          <div className="blog-card glow-card" key={index}>
            <div className="blog-header">
              <h3>{blog.title}</h3>
              <span className="blog-date">{blog.date}</span>
            </div>

            <p className="blog-desc">{blog.desc}</p>

            <button className="read-btn neon-btn">Read More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
