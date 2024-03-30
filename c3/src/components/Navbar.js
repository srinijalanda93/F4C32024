import React from "react";
import "./nav.css";
import Group from "./Group.jpg";
const Navbar = () => {
  return (
    <nav className="navbar">
      <span>Travelmedia.in</span>
      <img className="nav-image" src={Group} alt="media" />
    </nav>
  );
};

export default Navbar;