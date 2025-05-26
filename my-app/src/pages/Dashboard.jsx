import React, { useState } from "react";
import Navbar from "./Navbar"; // Import Navbar

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("home");

  const tabStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "20px",
  };

  const tabContentStyle = {
    marginTop: "20px",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#f9f9f9",
  };

  return (
    <div>
     

      

      <div style={tabContentStyle}>
        {activeTab === "home" && <h1>Welcome to the Admin Dashboard 🎯</h1>}

      </div>
    </div>
  );
};

export default Dashboard;
