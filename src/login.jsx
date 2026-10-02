import React, { useState } from "react";

function Login({ onBack, onLogin }) {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (rollNumber && password) {
      onLogin();
    } else {
      alert("Please enter Roll Number and Password");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="login-logo">SH</div>

        <h1>Student Login</h1>
        <p>SHEC CampusHub</p>

        <form onSubmit={handleLogin}>

          <label>Roll Number</label>
          <input
            type="text"
            placeholder="Enter your roll number"
            value={rollNumber}
            onChange={(e) => setRollNumber(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit" className="login-btn">
            Login
          </button>

        </form>

        <button className="back-btn" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="login-note">
          <strong>Demo Login</strong>
          <br />
          Use any Roll Number and Password for now.
        </div>

      </div>
    </div>
  );
}

export default Login;