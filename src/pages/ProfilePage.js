import React from 'react';
import './ProfilePage.css';

function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <img src="profile-picture.jpg" alt="User" />
        <div>
          <div className="detail-item">Name: John Doe</div>
          <div className="detail-item">Age: 45</div>
          <div className="detail-item">Blood Group: O+</div>
          <div className="detail-item">Address: 123 Street, City</div>
          <div className="detail-item">Contact Number: 123-456-7890</div>
          <div className="detail-item">Caretaker Name: Jane Doe</div>
          <div className="detail-item">Caretaker Number: 098-765-4321</div>
          <div className="detail-item">Family Doctor: Dr. Smith</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
