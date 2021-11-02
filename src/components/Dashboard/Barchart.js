import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label,
  ResponsiveContainer
} from "recharts";
import Title from './Title';


const data = [
  {
    name: "Jan",
    Beazley: 5200,
    "Industry average": 4300,
    amt: 2400
  },
  {
    name: "Feb",
    Beazley: 3500,
    "Industry average": 1398,
    amt: 2210
  },
  {
    name: "Mar",
    Beazley: 2000,
    "Industry average": 4800,
    amt: 2290
  },
  {
    name: "Apr",
    Beazley: 2780,
    "Industry average": 3908,
    amt: 2000
  },
  {
    name: "May",
    Beazley: 1890,
    "Industry average": 4800,
    amt: 2181
  },
  {
    name: "Jun",
    Beazley: 2390,
    "Industry average": 2800,
    amt: 2500
  },
  {
    name: "Jul",
    Beazley: 1490,
    "Industry average": 4300,
    amt: 2100
  }
];

export default function Barchart() {
  return (
    <React.Fragment>
    <Title>Industry comparison</Title>
    <ResponsiveContainer width="100%" height="100%">
    <BarChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis>
        <Label angle={270}
              position="left"
            >
              kgCO2e
            </Label>
        </YAxis>
      <Tooltip />
      <Legend />
      <Bar dataKey="Beazley" fill="#8884d8" />
      <Bar dataKey="Industry average" fill="#82ca9d" />
    </BarChart>
    </ResponsiveContainer>
    </React.Fragment>
  );
}
