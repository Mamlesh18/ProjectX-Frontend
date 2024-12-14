import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserDashboard from "./components/student/UserDashboard";
import ProjectList from "./components/client/ProjectList";
import ProjectUpload from "./components/client/Projectupload";
import LoginPage from "./components/auth/Loginpage";
function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<UserDashboard />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/project" element={<ProjectList />} />
          <Route path="/pro" element={<ProjectUpload />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
