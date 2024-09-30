import React from 'react';
import { useParams } from 'react-router-dom';
import { Line } from 'react-chartjs-2';
import { Box, Typography, Button } from '@mui/material';
import {Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend} from 'chart.js';
  
  // Register the necessary scales
  ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend);
  
  // Now you can use `category` and `linear` scales in your charts
  

const getChartData = (type) => {
  // Mock data for the chart
  const data = {
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
  return data;
};

const ReportPage = () => {
  const { type } = useParams();
  const chartData = getChartData(type);

  return (
    <Box sx={{ p: 5, backgroundColor: '#fff', minHeight: '100vh' }}>
      <Typography variant="h3">{`${type.charAt(0).toUpperCase() + type.slice(1)} Report`}</Typography>
      <Button sx={{ mb: 2 }} variant="contained">1 Month</Button>
      <Button sx={{ mb: 2, ml: 2 }} variant="contained">1 Year</Button>
      <Box sx={{ mt: 5 }}>
        <Line data={chartData} />
      </Box>
    </Box>
  );
};

export default ReportPage;
