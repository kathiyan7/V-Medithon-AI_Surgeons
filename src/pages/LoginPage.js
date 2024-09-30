import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, TextField, Box, Typography } from '@mui/material';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === 'kathiyan1472@gmail.com' && password === 'password') {
      navigate('/home');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="login-container">
        <div className="login-container-1">
      <h2>Patient Health Login</h2>
      <input 
        type="email" 
        className="input-field" 
        placeholder="Enter your email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type="password" 
        className="input-field" 
        placeholder="Enter your password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button className="btn btn-custom" onClick={handleLogin}>
        Sign In
      </button>
      <a href="/forgot-password" className="forgot-link">Forgot Password?</a>
    </div>
    </div>
  );

};

export default LoginPage;
