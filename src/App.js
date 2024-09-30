// App.js (No <BrowserRouter> here if it's in index.js)
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ReportPage from './pages/ReportPage';
import ProfilePage from './pages/ProfilePage';
import HospitalLocator from './pages/HospitalLocator';
import MinimalReports from './pages/MinimalReports';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/report/:type" element={<ReportPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/hospital-locator" element={<HospitalLocator />} />
      <Route path="/minimal-reports" element={<MinimalReports />} />
    </Routes>
  );
}

export default App;
