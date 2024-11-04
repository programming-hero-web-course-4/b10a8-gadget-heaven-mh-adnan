/* eslint-disable no-unused-vars */
// src/Pages/Statistics.jsx
import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { useLoaderData } from 'react-router-dom';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6699'];

const Statistics = () => {
  // Load the data from the loader
  const data = useLoaderData();

  // Count product types
  const productCounts = data.reduce((acc, item) => {
    if (item.category) {
      acc[item.category] = (acc[item.category] || 0) + 1;
    }
    return acc;
  }, {});

  // Convert the counts into an array for Recharts
  const chartData = Object.keys(productCounts).map((key) => ({
    name: key,
    value: productCounts[key],
  }));

  // Pie chart data
  const pieData = chartData.map((item) => ({
    name: item.name,
    value: item.value,
  }));

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md ml-24">
      <h2 className="text-3xl font-bold text-center mb-6">Product Statistics</h2>
      
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex-1 mr-4">
          <h3 className="text-xl font-semibold mb-2">Product Count by Category</h3>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="flex-1 ml-96">
          <h3 className="text-xl font-semibold mb-2">Product Distribution</h3>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 transition duration-200"
          onClick={() => alert('Feature to filter data coming soon!')}
        >
          Filter Data
        </button>
      </div>
    </div>
  );
};

export default Statistics;
