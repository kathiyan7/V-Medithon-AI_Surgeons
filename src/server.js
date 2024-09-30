// server.js (Sample Express Backend)
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());

app.get('/patient-data', (req, res) => {
  const patientData = {
    heart_rate: 78,
    oxygen_level: 95,
    temperature: 36.5
  };
  res.json(patientData);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
