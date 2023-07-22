import React from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 6800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 2300,
    amt: 2100,
  },
   {
    name: 'Page H',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page I',
    uv: 2000,
    pv: 5800,
    amt: 2290,
  },
  {
    name: 'Page J',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page K',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page L',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BigBar = () => {

  
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
       width={300} 
       height={300}
        data={data}
        margin={{
         
          right: 30,
          
          
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <XAxis  />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8"   />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BigBar;
