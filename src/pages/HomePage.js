import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function HomePage() {
    // const navigate = useNavigate();

    // const handleLogin = () => {
    //     navigate('/ProfilePage');
    // }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-custom">
        <a className="navbar-brand" href="/">Health Monitor</a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/profile">Profile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/hospital-locator">Hospital Locator</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/minimal-reports">Minimal Reports</Link></li>
          </ul>
        </div>
      </nav>

      <div className="report-container">
        <div className="report-card">
          <div className="icon">🌡️</div>
          <h3>Body Temperature</h3>
          <Link to="/report/temperature" className="btn btn-custom">View Report</Link>
        </div>

        <div className="report-card">
          <div className="icon">💓⏱️</div>
          <h3>Heart Rate</h3>
          <Link to="/report/heart-rate" className="btn btn-custom">View Report</Link>
        </div>

        <div className="report-card">
          <div className="icon">༄༄</div>
          <h3>Oxygen Rate</h3>
          <Link to="/report/oxygen" className="btn btn-custom">View Report</Link>
        </div>

        <div className="report-card">
          <div className="icon">🩸📈</div>
          <h3>Blood Pressure</h3>
          <Link to="/report/blood-pressure" className="btn btn-custom">View Report</Link>
        </div>

        <div className="report-card">
          <div className="icon">📍🌐</div>
          <h3>GPS</h3>
          <Link to="/report/gps" className="btn btn-custom">View Report</Link>
        </div>

        <div className="report-card">
          <div className="icon">📈</div>
          <h3>Gyroscope</h3>
          <Link to="/report/gyroscope" className="btn btn-custom">View Report</Link>
        </div>
      </div>

      <footer className="footer">
        <p>© 2024 Health Monitor. All Rights Reserved.</p>
        <p><a href="/privacy">Privacy Policy</a></p>
      </footer>
    </div>
  );
}

export default HomePage;
