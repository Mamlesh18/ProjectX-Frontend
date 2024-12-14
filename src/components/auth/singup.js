import React, { useState } from 'react';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';


const OTPVerification = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();


  const handleSendOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/send_otp', {
        email: email
      });
      if (response.status === 200) {
        setOtpSent(true);
      }
    } catch (error) {
        
      setErrorMessage("Error sending OTP. Please try again.");
    }
  };

  const handleVerifyOtp = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verify_otp', {
        otp: otp
      });
      if (response.status === 200) {
        setOtpVerified(true);
      }
    } catch (error) {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  const handleSubmitCredentials = async () => {
    try {
      const response = await axios.post('http://localhost:5000/auth', {
        email: email,
        username: username,
        password: password
      });
      if (response.status === 200) {
        alert("Credentials saved successfully!");
        navigate('/login'); 

      }
    } catch (error) {
        console.error("Error saving credentials:", error);
    }
  };

  return (
    <div>
      <h1>OTP Authentication</h1>
      <div>
        {!otpSent && (
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button onClick={handleSendOtp}>Send OTP</button>
          </div>
        )}
        {otpSent && !otpVerified && (
          <div>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify OTP</button>
          </div>
        )}
        {otpVerified && (
          <div>
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <NavLink to="/login">            <button onClick={handleSubmitCredentials}>Submit</button>
            </NavLink>
          </div>
        )}
      </div>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
};

export default OTPVerification;
