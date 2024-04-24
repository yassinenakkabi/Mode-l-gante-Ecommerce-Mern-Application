import React from "react";
import "./Navbar.css";
import navlogo from "../Assets/logo.png";
import navprofileIcon from "../Assets/nav-profile.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={navlogo} alt="" />
      <p>ModeÉlégante | Panneau D'administration</p>
      <img src={navprofileIcon} className="nav-profile" alt="" />
    </div>
  );
};

export default Navbar;
