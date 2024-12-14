import React from "react";
import "../../style/Loginpage.css"; // Import CSS for styling

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-content">
        <h1>Welcome to Project Showcase</h1>
        <form>
          <div className="input-group">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input-group">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn-login">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
