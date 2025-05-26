import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "center",  // ✅ Center links
      alignItems: "center",
      backgroundColor: "#ffa800",
      padding: "10px 0",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    }}>
      <h1 style={{ marginRight: "auto", marginLeft: "20px" }}>Admin Dashboard</h1>
      <div style={{ display: "flex", gap: "20px", marginRight: "20px" }}>
        <Link to="/" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>🏠 Home</Link>
        <Link to="/survey" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>📊 Survey</Link>
        <Link to="/psychologists" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>👩‍⚕️ Psychologists</Link>
        <Link to="/investors" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>💰 Investors</Link>
        <Link to="/collaborations" style={{ textDecoration: "none", color: "black", fontWeight: "bold" }}>🤝 Collaborations</Link>
      </div>
    </nav>
  );
};

export default Navbar;
