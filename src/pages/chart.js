const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [30, 50, 20, 60, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        type: 'category', // Use category for the x-axis
      },
      y: {
        beginAtZero: true,
        type: 'linear', // Use linear for the y-axis
      },
    },
  };
  