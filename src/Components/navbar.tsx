import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav style={{ padding: "10px", background: "#282c34", color: "white" }}>
      <ul style={{ display: "flex", gap: "20px", listStyle: "none" }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link></li>
        <li><Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link></li>
        <li><Link to="/product" style={{ color: "white", textDecoration: "none" }}>Product</Link></li>
        <li><Link to="/services" style={{ color: "white", textDecoration: "none" }}>Services</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
