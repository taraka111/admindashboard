import React, { useState } from "react";
import Navbar from "./Navbar";
import "../styles/Psychologists.css"; // Import CSS

const Psychologists = () => {
  const [requests, setRequests] = useState([
    { id: 1, name: "Dr. Smith", status: "Pending" },
    { id: 2, name: "Dr. Jane", status: "Pending" },
  ]);

  const handleStatus = (id, status) => {
    setRequests(requests.map(req => (req.id === id ? { ...req, status } : req)));
  };

  return (
    <div className="psychologists-container">
      <h1 className="psychologists-title">🧠 Psychologists Collaboration Requests</h1>
      <div className="requests-list">
        {requests.map((req) => (
          <div key={req.id} className={`request-card ${req.status.toLowerCase()}`}>
            <h3>{req.name}</h3>
            <p>Status: <span>{req.status}</span></p>
            <div className="buttons">
              <button className="accept-btn" onClick={() => handleStatus(req.id, "Accepted")}>
                ✅ Accept
              </button>
              <button className="reject-btn" onClick={() => handleStatus(req.id, "Rejected")}>
                ❌ Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Psychologists;
