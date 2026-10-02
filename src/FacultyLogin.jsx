import React, { useState } from "react";
import "./FacultyLogin.css";

function FacultyLogin({ onBack, onLogin }) {
  const [facultyId, setFacultyId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!facultyId.trim() || !password.trim()) {
      alert("Please enter Faculty ID and Password.");
      return;
    }

    // Demo Faculty Login
    if (
      facultyId.trim() === "FAC-DEMO-001" &&
      password === "faculty123"
    ) {
      onLogin();
    } else {
      alert("Invalid Faculty ID or Password.");
    }
  };

  return (
    <div className="faculty-login-page">

      <div className="faculty-login-card">

        {/* LOGO */}

        <div className="faculty-login-logo">
          SH
        </div>

        <div className="faculty-login-heading">
          <h1>Faculty Login</h1>
          <p>SHEC CampusHub</p>
        </div>

        {/* FORM */}

        <form onSubmit={handleLogin}>

          <div className="faculty-login-field">

            <label>Faculty ID</label>

            <div className="faculty-input-wrapper">
              <span>👤</span>

              <input
                type="text"
                placeholder="Enter Faculty ID"
                value={facultyId}
                onChange={(e) =>
                  setFacultyId(e.target.value)
                }
              />
            </div>

          </div>

          <div className="faculty-login-field">

            <label>Password</label>

            <div className="faculty-input-wrapper">
              <span>🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

              <button
                type="button"
                className="password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>

          </div>

          <button
            type="submit"
            className="faculty-login-btn"
          >
            Login to Faculty Portal
          </button>

        </form>

        {/* BACK */}

        <button
          className="faculty-login-back"
          onClick={onBack}
        >
          ← Back
        </button>

        {/* DEMO DETAILS */}

        <div className="faculty-demo-box">

          <strong>Demo Faculty Login</strong>

          <p>
            Faculty ID:
            <span> FAC-DEMO-001</span>
          </p>

          <p>
            Password:
            <span> faculty123</span>
          </p>

        </div>

        <div className="faculty-login-footer">
          Sri Harshini College of Engineering and Technology for Women
        </div>

      </div>

    </div>
  );
}

export default FacultyLogin;