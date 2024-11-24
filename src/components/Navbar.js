import React from "react";
import "./Navbar.css";

function Navbar({ setActiveSection }) {
  return (
    <nav className="navbar">
      <ul>
        <li onClick={() => setActiveSection("home")}>Home</li>
        <li onClick={() => setActiveSection("products")}>Products</li>
        <li onClick={() => setActiveSection("contact")}>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
