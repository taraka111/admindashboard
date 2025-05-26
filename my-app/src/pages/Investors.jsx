import React, { useState } from "react";
import "../styles/Investors.css"; // Import CSS


const Investors = () => {
  const [investors] = useState([
    { id: 1, name: "John Doe", amount: "$5,000" },
    { id: 2, name: "Jane Smith", amount: "$10,000" },
  ]);

  return (
    <div className="investors-container">
      <h1 className="investors-title">💰 Investors</h1>
      <div className="investors-list">
        {investors.map((inv) => (
          <div key={inv.id} className="investor-card">
            <h3>{inv.name}</h3>
            <p>Investment: <span>{inv.amount}</span></p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Investors;
