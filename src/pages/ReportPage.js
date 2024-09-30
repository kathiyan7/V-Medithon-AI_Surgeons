import React from 'react';
import { useParams } from 'react-router-dom';
import { Line, Pie, Bar } from 'react-chartjs-2';
import { Box, Typography, Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';

// Register the necessary scales and components for charts
ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, ArcElement, Title, Tooltip, Legend);

// Mock data for different types of charts
const getChartData = (type) => {
  switch (type) {
    case 'heart-rate':
      return {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: 'Heart Rate',
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
            borderColor: '#42a5f5',
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          }
        ]
      };

    case 'oxygen':
    case 'gps':
      return {
        labels: ['Normal', 'Critical'],
        datasets: [
          {
            label: `${type.charAt(0).toUpperCase() + type.slice(1)} Rate`,
            data: [Math.random() * 70, Math.random() * 30],
            backgroundColor: ['#66bb6a', '#ef5350'],
          }
        ]
      };

    case 'blood-pressure':
      return {
        labels: Array.from({ length: 12 }, (_, i) => `Month ${i + 1}`),
        datasets: [
          {
            label: 'Blood Pressure',
            data: Array.from({ length: 12 }, () => Math.floor(Math.random() * 100)),
            backgroundColor: '#42a5f5',
          }
        ]
      };

    default:
      return {
        labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
        datasets: [
          {
            label: `${type.charAt(0).toUpperCase() + type.slice(1)} Data`,
            data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 100)),
            borderColor: '#42a5f5',
            backgroundColor: 'rgba(66, 165, 245, 0.5)',
          }
        ]
      };
  }
};

// Mock data for Body Temperature Table
const bodyTemperatureData = [
  { day: 1, temperature: '98.6°F' },
  { day: 2, temperature: '99.1°F' },
  { day: 3, temperature: '97.9°F' },
  // Add more mock data here
];

const ReportPage = () => {
  const { type } = useParams();

  // Render Body Temperature as a Table
  const renderBodyTemperatureTable = () => (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Day</TableCell>
          <TableCell>Body Temperature</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {bodyTemperatureData.map((data, index) => (
          <TableRow key={index}>
            <TableCell>{data.day}</TableCell>
            <TableCell>{data.temperature}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );

  // Render Different Charts Based on Type
  const renderChart = () => {
    const chartData = getChartData(type);

    switch (type) {
      case 'heart-rate':
      case 'gyroscope':
        return <Line data={chartData} />;
      case 'oxygen':
      case 'gps':
        return <Pie data={chartData} />;
      case 'blood-pressure':
        return <Bar data={chartData} />;
      default:
        return renderBodyTemperatureTable();
    }
  };

  return (
    <Box sx={{ p: 5, backgroundColor: '#fff', minHeight: '100vh' }}>
      <Typography variant="h3">{`${type.charAt(0).toUpperCase() + type.slice(1)} Report`}</Typography>
      <Button sx={{ mb: 2 }} variant="contained">1 Month</Button>
      <Button sx={{ mb: 2, ml: 2 }} variant="contained">1 Year</Button>
      <Box sx={{ mt: 5 }}>
        {renderChart()}
      </Box>
    </Box>
  );
};

export default ReportPage;
