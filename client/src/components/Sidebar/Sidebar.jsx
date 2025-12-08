import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { SidebarData } from "./SidebarData";
import "./Sidebar.scss";
import SocialIcons from "../SocialIcons/SocialIcons";
import Navbar from "../NavLink/NavLink";

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation(); // To highlight active route

  return (
    <aside className={open ? "sidebar open" : "sidebar"}>
      {/* Toggle Button */}
      <button className="toggle-btn" onClick={() => setOpen(!open)}>
        {open ? <X size={26} /> : <Menu size={26} />}
      </button>

      {/* Sidebar Menu */}
      <nav className="sidebar-menu">
        {SidebarData.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={
              location.pathname === item.path ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="icon">{item.icon}</span>
            <span className="title">{item.title}</span>
          </NavLink>
        ))}
      </nav>
      
      <SocialIcons />
    </aside>
  );
};

export default Sidebar;
