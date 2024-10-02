import React, { useEffect, useState } from 'react';
import './HospitalLocator.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap

function HospitalLocator() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [hospitals, setHospitals] = useState([]);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        latitude: position.coords.latitude,
                        longitude: position.coords.longitude,
                    });
                    fetchNearbyHospitals(position.coords.latitude, position.coords.longitude);
                },
                (error) => console.log(error),
                { enableHighAccuracy: true }
            );
        }
    }, []);

    const fetchNearbyHospitals = (lat, lng) => {
        // Mock data for nearby hospitals
        setHospitals([
            { name: 'City Hospital', distance: '1.2 km' },
            { name: 'MedLife Hospital', distance: '2.3 km' },
            { name: 'Care Plus Clinic', distance: '3.0 km' },
        ]);
    };

    return (
        <div className="hospital-locator">
            <div className="container">
                <h1 className="heading">Nearby Hospitals</h1>
                {location.latitude && location.longitude ? (
                    <div className="location-info">
                        <h2>Your Location:</h2>
                        <p>Latitude: {location.latitude}</p>
                        <p>Longitude: {location.longitude}</p>

                        <h2 className="hospital-heading">Hospitals:</h2>
                        <div className="hospital-list">
                            {hospitals.map((hospital, index) => (
                                <div key={index} className="hospital-card">
                                    <h3>{hospital.name}</h3>
                                    <p className="distance">{hospital.distance}</p>
                                    <button>Click here</button>
                                    {/* <a href="https://valid-link.com">Click here</a> */}
                                    {/* <a href="#" className="details-button btn btn-primary">View Details</a> */}
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    <p className="loading">Loading your location...</p>
                )}
            </div>
        </div>
    );
}

export default HospitalLocator;
