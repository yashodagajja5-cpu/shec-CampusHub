import React, { useState } from "react";
import "./HODPages.css";

function HODProfile({ onBack }) {
  const [editing, setEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Demo HOD",
    hodId: "HOD-DEMO-001",
    designation: "Head of Department",
    department: "All Departments",
    academicYear: "2026–27",
    email: "hod@shec.ac.in",
    phone: "98******22",
    office: "HOD Office",
    joiningYear: "2025",
  });

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const saveProfile = () => {
    setEditing(false);
    alert("Profile details updated successfully.");
  };

  return (
    <div className="hod-page">

      {/* TOP BAR */}
      <div className="hod-page-top">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back
          </button>

          <h1>My Profile</h1>
          <p>Manage HOD profile and account information</p>
        </div>

        {!editing ? (
          <button
            className="hod-primary-btn"
            onClick={() => setEditing(true)}
          >
            ✏️ Edit Profile
          </button>
        ) : (
          <div className="hod-top-actions">
            <button
              className="hod-secondary-btn"
              onClick={() => setEditing(false)}
            >
              Cancel
            </button>

            <button
              className="hod-primary-btn"
              onClick={saveProfile}
            >
              ✓ Save Changes
            </button>
          </div>
        )}
      </div>

      {/* PROFILE HEADER */}
      <div className="hod-profile-header">
        <div className="hod-profile-avatar">
          {profile.name.charAt(0)}
        </div>

        <div className="hod-profile-main">
          <h2>{profile.name}</h2>
          <p>{profile.designation}</p>
          <span>{profile.department}</span>
        </div>

        <div className="hod-profile-status">
          <span className="hod-status-badge active">
            ● Active
          </span>
          <small>Academic Year {profile.academicYear}</small>
        </div>
      </div>

      {/* BASIC INFORMATION */}
      <div className="hod-profile-grid">

        <div className="hod-profile-card">
          <div className="hod-card-title">
            <div>
              <h3>Personal Information</h3>
              <p>Basic profile details</p>
            </div>
            <span>👤</span>
          </div>

          <div className="hod-form-grid">

            <div className="hod-form-group">
              <label>Full Name</label>
              <input
                type="text"
                value={profile.name}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
              />
            </div>

            <div className="hod-form-group">
              <label>HOD ID</label>
              <input
                type="text"
                value={profile.hodId}
                disabled
              />
            </div>

            <div className="hod-form-group">
              <label>Designation</label>
              <input
                type="text"
                value={profile.designation}
                disabled
              />
            </div>

            <div className="hod-form-group">
              <label>Department</label>
              <input
                type="text"
                value={profile.department}
                disabled
              />
            </div>

          </div>
        </div>

        {/* CONTACT */}
        <div className="hod-profile-card">
          <div className="hod-card-title">
            <div>
              <h3>Contact Information</h3>
              <p>Communication details</p>
            </div>
            <span>📞</span>
          </div>

          <div className="hod-form-grid">

            <div className="hod-form-group">
              <label>Email Address</label>
              <input
                type="email"
                value={profile.email}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
              />
            </div>

            <div className="hod-form-group">
              <label>Phone Number</label>
              <input
                type="text"
                value={profile.phone}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("phone", e.target.value)
                }
              />
            </div>

            <div className="hod-form-group">
              <label>Office</label>
              <input
                type="text"
                value={profile.office}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("office", e.target.value)
                }
              />
            </div>

            <div className="hod-form-group">
              <label>Academic Year</label>
              <input
                type="text"
                value={profile.academicYear}
                disabled
              />
            </div>

          </div>
        </div>

      </div>

      {/* ACADEMIC & ACCOUNT */}
      <div className="hod-profile-grid">

        <div className="hod-profile-card">

          <div className="hod-card-title">
            <div>
              <h3>Academic Information</h3>
              <p>Official role information</p>
            </div>
            <span>🎓</span>
          </div>

          <div className="hod-info-list">

            <div className="hod-info-row">
              <span>Role</span>
              <strong>Head of Department</strong>
            </div>

            <div className="hod-info-row">
              <span>Department</span>
              <strong>All Departments</strong>
            </div>

            <div className="hod-info-row">
              <span>Academic Year</span>
              <strong>{profile.academicYear}</strong>
            </div>

            <div className="hod-info-row">
              <span>Joining Year</span>
              <strong>{profile.joiningYear}</strong>
            </div>

            <div className="hod-info-row">
              <span>Office</span>
              <strong>{profile.office}</strong>
            </div>

          </div>
        </div>

        {/* ACCOUNT */}
        <div className="hod-profile-card">

          <div className="hod-card-title">
            <div>
              <h3>Account & Security</h3>
              <p>Login and account settings</p>
            </div>
            <span>🔐</span>
          </div>

          <div className="hod-security-box">
            <div>
              <strong>HOD Login ID</strong>
              <p>{profile.hodId}</p>
            </div>

            <span className="hod-security-status">
              Active
            </span>
          </div>

          <div className="hod-security-box">
            <div>
              <strong>Password</strong>
              <p>••••••••••••</p>
            </div>

            <button
              className="hod-outline-btn"
              onClick={() =>
                alert("Password change module will be connected with the backend later.")
              }
            >
              Change Password
            </button>
          </div>

          <div className="hod-security-note">
            <strong>Security Note</strong>
            <p>
              Never share your HOD login credentials with other users.
              Actual authentication will be connected during backend integration.
            </p>
          </div>

        </div>

      </div>

      {/* PROFILE SUMMARY */}
      <div className="hod-profile-card hod-summary-profile">

        <div className="hod-card-title">
          <div>
            <h3>Profile Summary</h3>
            <p>Current HOD account overview</p>
          </div>
          <span>📋</span>
        </div>

        <div className="hod-profile-summary-grid">

          <div>
            <span>HOD ID</span>
            <strong>{profile.hodId}</strong>
          </div>

          <div>
            <span>Designation</span>
            <strong>{profile.designation}</strong>
          </div>

          <div>
            <span>Department</span>
            <strong>{profile.department}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong className="hod-green-text">
              Active
            </strong>
          </div>

        </div>

      </div>

      {/* DEMO NOTE */}
      <div className="hod-demo-note">
        <strong>Demo Mode</strong>
        <p>
          This profile currently uses demonstration data.
          In the final CampusHub system, profile information will be
          loaded securely from the college database.
        </p>
      </div>

    </div>
  );
}

export default HODProfile;