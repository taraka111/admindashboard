import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css"; // Import CSS

const Home = () => {
  const [accessKey, setAccessKey] = useState("");
  const navigate = useNavigate();
  const correctKey = "SECRET123"; // Store securely in backend

  const handleLogin = () => {
    if (accessKey === correctKey) {
      navigate("/dashboard");
    } else {
      alert("Invalid Access Key");
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">🔐 Enter Access Key</h1>
      <input
        type="password"
        className="home-input"
        placeholder="Access Key"
        onChange={(e) => setAccessKey(e.target.value)}
      />
      <button className="home-button" onClick={handleLogin}>
        Enter 🚀
      </button>
    </div>
  );
};

export default Home;
