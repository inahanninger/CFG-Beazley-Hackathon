import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, Tooltip } from 'recharts';
import Title from './Title';

// Generate Sales Data
function createData(time, tCO2e) {
  return { time, tCO2e };
}

const data = [
  createData('2015', 3900),
  createData('2016', 2400),
  createData('2017', 2000),
  createData('2018', 1500),
  createData('2019', 800),
  createData('2020', 600),
  createData('2021', 300),

];

export default function Chart() {
  const theme = useTheme();

  return (
    <React.Fragment>
      <Title>Carbon Footprint History</Title>
      <ResponsiveContainer>
        <LineChart
          data={data}
          margin={{
            top: 16,
            right: 16,
            bottom: 0,
            left: 24,
          }}
        >
          <XAxis
            dataKey="time"
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            style={theme.typography.body2}
          >
            <Label
              angle={270}
              position="left"
              style={{
                textAnchor: 'middle',
                fill: theme.palette.text.primary,
                ...theme.typography.body1,
              }}
            >
              tonnes CO2e
            </Label>
          </YAxis>
          <Tooltip/>
          <Line
            isAnimationActive={false}
            type="monotone"
            dataKey="tCO2e"
            stroke={theme.palette.primary.main}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </React.Fragment>
  );
}
