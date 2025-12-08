import React from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.scss";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* Brand Name */}
        <h2 className="nav-logo">MyPortfolio</h2>

        {/* Desktop Menu */}
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/blogs">Blogs</Link>
          <Link to="/contact">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="mobile-menu-icon" onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {open && (
        <div className="mobile-nav">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setOpen(false)}>About</Link>
          <Link to="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link to="/blogs" onClick={() => setOpen(false)}>Blogs</Link>
          <Link to="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
