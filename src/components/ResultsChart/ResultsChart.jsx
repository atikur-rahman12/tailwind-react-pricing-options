import React from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const ResultData = [
  {
    id: 1,
    name: "Rahim",
    physics: 85,
    chemistry: 78,
    math: 90,
    total: 253,
  },
  {
    id: 2,
    name: "Karim",
    physics: 65,
    chemistry: 70,
    math: 68,
    total: 203,
  },
  {
    id: 3,
    name: "Nusrat",
    physics: 92,
    chemistry: 88,
    math: 95,
    total: 275,
  },
  {
    id: 4,
    name: "Sadia",
    physics: 55,
    chemistry: 60,
    math: 58,
    total: 173,
  },
  {
    id: 5,
    name: "Tanvir",
    physics: 65,
    chemistry: 70,
    math: 68,
    total: 203,
  },
  {
    id: 6,
    name: "Imran",
    physics: 25,
    chemistry: 30,
    math: 28,
    total: 83,
  },
  {
    id: 7,
    name: "Farhana",
    physics: 78,
    chemistry: 82,
    math: 80,
    total: 240,
  },
  {
    id: 8,
    name: "Sabbir",
    physics: 60,
    chemistry: 55,
    math: 62,
    total: 177,
  },
];

const ResultsChart = () => {
  return (
    <div>
      <LineChart width={800} height={500} data={ResultData}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="physics" stroke="#8884d8" />
        <Line type="monotone" dataKey="chemistry" stroke="#82ca9d" />
        <Line type="monotone" dataKey="math" stroke="#ffc658" /> 
        <Line type="monotone" dataKey="total" stroke="red" />
      </LineChart>
    </div>
  );
};

export default ResultsChart;
