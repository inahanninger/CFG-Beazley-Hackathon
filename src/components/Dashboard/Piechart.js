// import "./styles.css";
import React from "react";
import { PieChart, Pie, Legend, ResponsiveContainer, Tooltip, Cell } from "recharts";
import Title from './Title';

const data01 = [
  { name: "Scope 1", value: 300 },
  { name: "Scope 2", value: 400 },
  { name: "Scope 3", value: 200 },
];

const data02 = [
  { name: "Buildings", value: 2400 },
  { name: "Transportation", value: 4567 },
  { name: "Supply Chain", value: 1398 },
  { name: "Operations", value: 9800 },
  { name: "Other", value: 3908 },
];

const COLORS1 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const COLORS2 = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#ba4ea8'];

let renderLabel = function(entry) {
  return entry.name;
}

export default function Piechart() {

  return (
    <React.Fragment>
    <Title>Emissions by source (kgCO2e)</Title>
    <ResponsiveContainer width="100%" height="100%">
    <PieChart width={780} height={490}>
      {/* <Pie
        dataKey="value"
        isAnimationActive={false}
        data={data01}
        cx="25%"
        cy="50%"
        outerRadius={80}
        fill="#8884d8"
        label={renderLabel}
      >
        {data01.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS1[index % COLORS1.length]} />
            ))}
      </Pie> */}
      <Pie
        dataKey="value"
        data={data02}
        cx="52%"
        cy="62%"
        innerRadius={40}
        outerRadius={80}
        fill="#82ca9d"
        label={renderLabel}
      >
        {data02.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS2[index % COLORS2.length]} />
            ))}
      </Pie>
      <Tooltip />
    </PieChart>
    </ResponsiveContainer>
    </React.Fragment>
  );
}
