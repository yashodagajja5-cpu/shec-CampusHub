import React, { useState } from "react";
import "./AdminPages.css";

function AdminProfile({ onBack }) {
  const [profile, setProfile] = useState({
    name: "System Admin",
    userId: "ADMIN-DEMO-001",
    email: "admin.demo@shec.ac.in",
    phone: "9848246222",
    designation: "System Administrator",
    department: "Administration",
  });

  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleChange = (field, value) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }));
    setSaved(false);
  };

  const saveProfile = () => {
    setEditing(false);
    setSaved(true);
  };

  return (
    <div className="admin-page">

      {/* HEADER */}

      <div className="admin-page-header">

        <div>
          <button
            className="admin-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <h1>Admin Profile</h1>

          <p>
            Manage administrator profile and account
            information.
          </p>
        </div>

        {!editing && (
          <button
            className="admin-primary-btn"
            onClick={() => setEditing(true)}
          >
            ✎ Edit Profile
          </button>
        )}

      </div>

      {/* DEMO NOTICE */}

      <div className="admin-demo-banner">
        <strong>Development Account:</strong>{" "}
        This profile currently uses sample administrator
        information. Production profile data will be
        connected to the secure backend.
      </div>

      {/* PROFILE */}

      <div className="admin-profile-layout">

        {/* LEFT CARD */}

        <div className="admin-profile-card">

          <div className="admin-profile-avatar">
            SA
          </div>

          <h2>{profile.name}</h2>

          <p>{profile.designation}</p>

          <span className="admin-profile-role">
            Administrator
          </span>

          <div className="admin-profile-divider" />

          <div className="admin-profile-mini-info">

            <div>
              <span>User ID</span>
              <strong>{profile.userId}</strong>
            </div>

            <div>
              <span>Department</span>
              <strong>{profile.department}</strong>
            </div>

            <div>
              <span>Account Status</span>
              <strong className="profile-active">
                ● Active
              </strong>
            </div>

          </div>

        </div>

        {/* RIGHT CARD */}

        <div className="admin-profile-details">

          <div className="admin-panel-header">

            <div>
              <h2>Personal Information</h2>

              <p>
                Administrator account details.
              </p>
            </div>

          </div>

          <div className="admin-profile-form">

            <div className="profile-field">

              <label>Full Name</label>

              {editing ? (
                <input
                  value={profile.name}
                  onChange={(e) =>
                    handleChange(
                      "name",
                      e.target.value
                    )
                  }
                />
              ) : (
                <div>{profile.name}</div>
              )}

            </div>

            <div className="profile-field">

              <label>User ID</label>

              <div className="profile-readonly">
                {profile.userId}
              </div>

            </div>

            <div className="profile-field">

              <label>Email Address</label>

              {editing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    handleChange(
                      "email",
                      e.target.value
                    )
                  }
                />
              ) : (
                <div>{profile.email}</div>
              )}

            </div>

            <div className="profile-field">

              <label>Phone Number</label>

              {editing ? (
                <input
                  value={profile.phone}
                  onChange={(e) =>
                    handleChange(
                      "phone",
                      e.target.value
                    )
                  }
                />
              ) : (
                <div>{profile.phone}</div>
              )}

            </div>

            <div className="profile-field">

              <label>Designation</label>

              {editing ? (
                <input
                  value={profile.designation}
                  onChange={(e) =>
                    handleChange(
                      "designation",
                      e.target.value
                    )
                  }
                />
              ) : (
                <div>{profile.designation}</div>
              )}

            </div>

            <div className="profile-field">

              <label>Department</label>

              <div className="profile-readonly">
                {profile.department}
              </div>

            </div>

          </div>

          {editing && (
            <div className="admin-profile-actions">

              <button
                className="admin-secondary-btn"
                onClick={() => setEditing(false)}
              >
                Cancel
              </button>

              <button
                className="admin-primary-btn"
                onClick={saveProfile}
              >
                Save Changes
              </button>

            </div>
          )}

          {saved && (
            <div className="profile-success">
              ✓ Profile changes saved successfully.
            </div>
          )}

        </div>

      </div>

      {/* ACCOUNT SECURITY */}

      <div className="admin-panel admin-security-panel">

        <div className="admin-panel-header">

          <div>
            <h2>Account & Security</h2>

            <p>
              Security controls for the administrator
              account.
            </p>
          </div>

        </div>

        <div className="security-options">

          <div className="security-option">

            <div className="security-option-icon">
              🔐
            </div>

            <div>
              <h3>Password</h3>
              <p>
                Change your administrator account password.
              </p>
            </div>

            <button
              className="admin-secondary-btn"
              onClick={() =>
                alert(
                  "Password change will be connected to the secure backend."
                )
              }
            >
              Change Password
            </button>

          </div>

          <div className="security-option">

            <div className="security-option-icon">
              🛡️
            </div>

            <div>
              <h3>Role & Access</h3>
              <p>
                Current role: Administrator. Access is
                controlled through role-based permissions.
              </p>
            </div>

            <span className="security-status">
              Protected
            </span>

          </div>

          <div className="security-option">

            <div className="security-option-icon">
              🕘
            </div>

            <div>
              <h3>Last Login</h3>
              <p>
                Last successful login for this demo
                account.
              </p>
            </div>

            <strong className="security-login">
              Today, 09:30 AM
            </strong>

          </div>

        </div>

      </div>

      {/* ADMIN RESPONSIBILITIES */}

      <div className="admin-panel">

        <div className="admin-panel-header">

          <div>
            <h2>Administrator Access</h2>

            <p>
              Main areas available to the administrator.
            </p>
          </div>

        </div>

        <div className="admin-access-grid">

          <div>
            <span>👥</span>
            <strong>User Management</strong>
            <p>Accounts and roles</p>
          </div>

          <div>
            <span>🎓</span>
            <strong>Academic Management</strong>
            <p>Students and faculty</p>
          </div>

          <div>
            <span>📢</span>
            <strong>Communication</strong>
            <p>Notices and events</p>
          </div>

          <div>
            <span>📊</span>
            <strong>Reports</strong>
            <p>Institution analytics</p>
          </div>

          <div>
            <span>🏠</span>
            <strong>Hostel</strong>
            <p>Rooms and residents</p>
          </div>

          <div>
            <span>🎓</span>
            <strong>Scholarships</strong>
            <p>Scholarship records</p>
          </div>

        </div>

      </div>

      <div className="admin-page-footer">
        <span>
          SHEC CampusHub • Administration Portal
        </span>

        <strong>
          Secure • Centralized • Role Based
        </strong>
      </div>

    </div>
  );
}

export default AdminProfile;