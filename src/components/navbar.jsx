import React from "react";
import { NavLink } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = ({ clickIndex, setClickIndex }) => {
  const handleClick = () => {
    setClickIndex(!clickIndex);
  };

  return (
    <nav className="navbar">
      <div className="navbar-icon">
        <NavLink to="/" className="nav-link navbar-logo">
          KODIO
        </NavLink>
        <span>
          <NavLink to="/course" className="nav-link course-title">
            | React Beginer Course
          </NavLink>
        </span>
      </div>
      <div className="menu-icon" onClick={handleClick}>
        <i className={clickIndex ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
};

export default Navbar;
