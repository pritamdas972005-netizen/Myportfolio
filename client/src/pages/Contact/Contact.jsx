import React, { useState } from "react";
import axios from "axios";
import "./Contact.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({ type: "", msg: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: "loading", msg: "Sending..." });

    try {
      const res = await axios.post("http://localhost:5000/api/contact", formData);

      if (res.data.success) {
        setStatus({ type: "success", msg: "Message sent successfully!" });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      setStatus({ type: "error", msg: "Failed to send message!" });
    }
  };

  return (
    <section className="contact-section dark-contact fade-up">
      <h2 className="contact-title neon-title">Contact Me</h2>

      <form className="contact-form dark-glass glow-border" onSubmit={handleSubmit}>
        
        <div className="input-group">
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
          />
          <label>Your Name</label>
        </div>

        <div className="input-group">
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <label>Your Email</label>
        </div>

        <div className="input-group textarea-group">
          <textarea
            name="message"
            required
            rows="5"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <label>Write your message...</label>
        </div>

        <button type="submit" className="btn neon-btn ripple">Send Message</button>

        {status.msg && (
          <p className={`status ${status.type}`}>{status.msg}</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
