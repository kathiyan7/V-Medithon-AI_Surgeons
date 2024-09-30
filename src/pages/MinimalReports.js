import React from 'react';
import './MinimalReports.css'; // Import your custom styles

function MinimalInfo() {
  return (
    <div className="minimal-info">
      <h2 className="minimal-info-title">Patient Summary</h2>
      <div className="report-cards">
        <div className="report-card">
          <h3>Body Temperature</h3>
          <p>98.6°F</p>
        </div>
        <div className="report-card">
          <h3>Heart Rate</h3>
          <p>72 bpm</p>
        </div>
        <div className="report-card">
          <h3>Oxygen Level</h3>
          <p>95%</p>
        </div>
        <div className="report-card">
          <h3>Blood Pressure</h3>
          <p>120/80 mmHg</p>
        </div>
      </div>
    </div>
  );
}

export default MinimalInfo;
