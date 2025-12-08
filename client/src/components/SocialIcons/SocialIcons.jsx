import React from "react";
import { Linkedin, Github, Twitter, Instagram } from "lucide-react";
import "./SocialIcons.scss";

const socials = [
  { name: "LinkedIn", href: "#", icon: <Linkedin size={22} />, color: "#0A66C2" },
  { name: "GitHub", href: "#", icon: <Github size={22} />, color: "#171515" },
  { name: "Twitter", href: "#", icon: <Twitter size={22} />, color: "#1DA1F2" },
  { name: "Instagram", href: "#", icon: <Instagram size={22} />, color: "#E4405F" },
];

const SocialIcons = () => {
  return (
    <div className="social-icons">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          style={{ "--hover-color": item.color }}
          className="icon-box"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
};

export default SocialIcons;
