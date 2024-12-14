// src/HomePage.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import Link for navigation
import '../../style/HomePage.css'; // Import CSS for styling

function HomePage() {
  const navigate = useNavigate();
  const handleStudentClick = () => {
    navigate('/student-form'); // Navigate to student form on button click
  };


  return (
    <div className="page-container">
      {/* Student Button on the left side */}
      <div className="left-side">
        
        <button className="student-btn" onClick={handleStudentClick}>
        Student
      </button>
        
      </div>

      {/* Upload Project Button on the right side */}
      <div className="right-side">
        <button className="upload-btn">
          <i className="fa fa-upload"></i> Upload Project
        </button>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <p>&copy; 2024 Your Platform Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;


