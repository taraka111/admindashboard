import React from "react";

import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell } from "recharts";

const surveyData = [
  { name: "Option A", votes: 400 },
  { name: "Option B", votes: 300 },
  { name: "Option C", votes: 200 },
  { name: "Option D", votes: 100 },
];

const pieData = [
  { name: "Positive", value: 60 },
  { name: "Neutral", value: 25 },
  { name: "Negative", value: 15 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Survey = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "50px",
    marginTop: "20px",
  };

  return (
    <div>
      <h2 style={{ textAlign: "center", marginTop: "20px" }}>📊 Survey Analysis</h2>
      
      <div style={containerStyle}>
        {/* Bar Chart */}
        <BarChart width={400} height={300} data={surveyData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="votes" fill="#8884d8" />
        </BarChart>

        {/* Pie Chart */}
        <PieChart width={300} height={300}>
          <Pie data={pieData} cx="50%" cy="50%" outerRadius={80} fill="#8884d8" dataKey="value">
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </div>
    </div>
  );
};

export default Survey;
