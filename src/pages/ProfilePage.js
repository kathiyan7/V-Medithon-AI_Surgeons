import React from 'react';
import './ProfilePage.css';

function Profile() {
  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-details">
        <img src="./pp.jpg" alt="Kathiyan's image" />
        <div>
          <div className="detail-item">Name: Kathiyan T</div>
          <div className="detail-item">Age: 20</div>
          <div className="detail-item">Blood Group: B+</div>
          <div className="detail-item">Address: 123 Street, City</div>
          <div className="detail-item">Contact Number: 123-456-7890</div>
          <div className="detail-item">Caretaker Name: Kishore</div>
          <div className="detail-item">Caretaker Number: 098-765-4321</div>
          <div className="detail-item">Family Doctor: Dr.Lokesh Raj</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
