import React, { useState } from "react";
import "./HODLogin.css";

function HODLogin({ onBack, onLogin }) {
  const [hodId, setHodId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!hodId || !password) {
      alert("Please enter HOD ID and Password.");
      return;
    }

    onLogin();
  };

  return (
    <div className="hod-login-page">

      <div className="hod-login-left">
        <div className="hod-brand">
          <div className="hod-brand-logo">SH</div>

          <div>
            <h2>SHEC CampusHub</h2>
            <p>Sri Harshini College of Engineering and Technology for Women</p>
          </div>
        </div>

        <div className="hod-welcome">
          <span className="hod-small-label">HOD PORTAL</span>

          <h1>
            Academic Management
            <br />
            <span>Made Simple.</span>
          </h1>

          <p>
            Manage departments, faculty, academics, attendance,
            timetables, notices, requests and reports from one
            centralized HOD portal.
          </p>

          <div className="hod-login-features">
            <div>
              <span>✓</span>
              Department Management
            </div>

            <div>
              <span>✓</span>
              Faculty & Academic Management
            </div>

            <div>
              <span>✓</span>
              Attendance & Reports
            </div>

            <div>
              <span>✓</span>
              Requests & Approvals
            </div>
          </div>
        </div>

        <div className="hod-login-footer">
          © 2026 SHEC CampusHub
        </div>
      </div>

      <div className="hod-login-right">

        <div className="hod-login-card">

          <button
            className="hod-login-back"
            onClick={onBack}
          >
            ← Back
          </button>

          <div className="hod-login-icon">
            🎓
          </div>

          <h1>HOD Login</h1>

          <p className="hod-login-subtitle">
            Sign in to access the HOD Portal
          </p>

          <form onSubmit={handleLogin}>

            <div className="hod-login-field">
              <label>HOD ID</label>

              <div className="hod-input-wrapper">
                <span>👤</span>

                <input
                  type="text"
                  placeholder="Enter your HOD ID"
                  value={hodId}
                  onChange={(e) => setHodId(e.target.value)}
                />
              </div>
            </div>

            <div className="hod-login-field">
              <label>Password</label>

              <div className="hod-input-wrapper">
                <span>🔒</span>

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <button
                  type="button"
                  className="hod-show-password"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="hod-login-options">
              <label>
                <input type="checkbox" />
                Remember me
              </label>

              <button
                type="button"
                onClick={() =>
                  alert(
                    "Please contact the college administration to reset your HOD password."
                  )
                }
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="hod-login-submit"
            >
              Login to HOD Portal →
            </button>

          </form>

          <div className="hod-demo-login">

            <strong>Demo Login</strong>

            <div className="hod-demo-row">
              <span>HOD ID</span>
              <code>HOD-DEMO-001</code>
            </div>

            <div className="hod-demo-row">
              <span>Password</span>
              <code>hod123</code>
            </div>

          </div>

          <p className="hod-login-security">
            🔐 Secure college administration portal
          </p>

        </div>

      </div>

    </div>
  );
}

export default HODLogin;