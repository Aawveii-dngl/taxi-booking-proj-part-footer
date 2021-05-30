import React from "react";
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

export default function Navbar() {
  return (
    <div>
      <NavLink className="nav" exact activeClassName="active" to="/">
        About
      </NavLink>
      <NavLink className="nav" exact activeClassName="active" to="/services">
        Services
      </NavLink>
      <NavLink className="nav" exact activeClassName="active" to="/contact">
        Contact Us
      </NavLink>
      <NavLink className="nav" exact activeClassName="active" to="/booking">
        Online Booking
      </NavLink>
    </div>
  );
}
