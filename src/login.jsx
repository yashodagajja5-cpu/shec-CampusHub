import React, { useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

function Login({ onBack, onLogin }) {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loginAttempt, setLoginAttempt] = useState(null);

  const student = useQuery(
    api.students.loginStudent,
    loginAttempt
      ? {
          rollNumber: loginAttempt.rollNumber,
          password: loginAttempt.password,
        }
      : "skip"
  );

  const handleLogin = (e) => {
    e.preventDefault();

    if (!rollNumber.trim() || !password) {
      alert("Please enter Roll Number and Password");
      return;
    }

    setLoginAttempt({
      rollNumber: rollNumber.trim(),
      password,
    });
  };

  React.useEffect(() => {
    if (!loginAttempt) return;

    if (student === undefined) {
      return;
    }

    if (!student) {
      alert("Invalid Roll Number or Password");
      setLoginAttempt(null);
      return;
    }

    setLoginAttempt(null);

    onLogin(student);
  }, [student, loginAttempt, onLogin]);

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
          Roll Number: DEMO2026AI001
          <br />
          Password: 123456
        </div>

      </div>
    </div>
  );
}

export default Login;
