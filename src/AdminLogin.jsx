import React, { useState } from "react";
import "./AdminLogin.css";

function AdminLogin({ onBack, onLogin }) {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!userId || !password) {
      alert("Please enter Admin ID and Password.");
      return;
    }

    onLogin();
  };

  return (
    <div className="admin-login-page">

      <div className="admin-login-card">

        <div className="admin-login-logo">
          SH
        </div>

        <div className="admin-login-heading">
          <h1>Admin Login</h1>
          <p>SHEC CampusHub</p>
        </div>

        <div className="admin-login-role">
          ⚙️ Administration Portal
        </div>

        <form onSubmit={handleLogin}>

          <label>Admin ID</label>

          <input
            type="text"
            placeholder="Enter Admin ID"
            value={userId}
            onChange={(e) =>
              setUserId(e.target.value)
            }
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button
            type="submit"
            className="admin-login-btn"
          >
            Login to Admin Portal
          </button>

        </form>

        <button
          className="admin-login-back"
          onClick={onBack}
        >
          ← Back to Portal
        </button>

        <div className="admin-demo-login">

          <strong>Demo Admin Login</strong>

          <span>
            Admin ID: ADMIN-DEMO-001
          </span>

          <span>
            Password: admin123
          </span>

        </div>

      </div>

    </div>
  );
}

export default AdminLogin;