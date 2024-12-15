import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./components/student/UserDashboard";
import ProjectList from "./components/client/ProjectList";
import ProjectUpload from "./components/client/Projectupload";
import Lender_Login from "./components/auth/login";
import OTPVerification from "./components/auth/singup";
import StudentForm from "./components/homepage/StudentForm";
import HomePage from "./components/homepage/Homepage";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/login" element={<Lender_Login />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/pro" element={<ProjectUpload />} />
          <Route path="/signup" element={<OTPVerification />} />
          <Route path="/signup" element={<OTPVerification />} />

          <Route path="/studentfrom" element={<StudentForm />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;