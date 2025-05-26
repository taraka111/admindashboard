import React, { useState } from "react";
import "../styles/Collaborations.css"; // Add styles if needed

const Collaborations = () => {
  const [collaborations] = useState([
    { id: 1, name: "Dr. Smith", specialty: "Cognitive Therapy", date: "2024-01-15" },
    { id: 2, name: "Dr. Jane Doe", specialty: "Behavioral Psychology", date: "2024-02-10" },
  ]);

  return (
    <div className="collaborations-container">
      <h1 className="title">Collaborations</h1>
      <p>Total Collaborations: {collaborations.length}</p>
      <table className="collaborations-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Specialty</th>
            <th>Collaboration Date</th>
          </tr>
        </thead>
        <tbody>
          {collaborations.map((collab) => (
            <tr key={collab.id}>
              <td>{collab.id}</td>
              <td>{collab.name}</td>
              <td>{collab.specialty}</td>
              <td>{collab.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Collaborations;
