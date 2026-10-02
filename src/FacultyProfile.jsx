import React, { useState } from "react";

function FacultyProfile({ onBack }) {
  const [isEditing, setIsEditing] = useState(false);

  const [profile, setProfile] = useState({
    name: "Demo Faculty",
    facultyId: "FAC-DEMO-001",
    department: "CSE – AI & DS",
    designation: "Assistant Professor",
    email: "faculty@shec.ac.in",
    phone: "XXXXXX7890",
    qualification: "M.Tech",
    experience: "Demo Profile",
    joiningDate: "Not Updated",
    academicYear: "2026–27",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setIsEditing(false);
    alert("Faculty profile updated successfully.");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "30px",
        background: "#f7f5fa",
        color: "#302a3a",
      }}
    >

      {/* HEADER */}

      <div style={{ marginBottom: "25px" }}>

        <button
          onClick={onBack}
          style={{
            border: "none",
            background: "transparent",
            color: "#6847c7",
            cursor: "pointer",
            fontWeight: "600",
            marginBottom: "8px",
          }}
        >
          ← Back to Dashboard
        </button>

        <h1 style={{ margin: "0 0 6px" }}>
          My Profile
        </h1>

        <p
          style={{
            margin: 0,
            color: "#817b88",
            fontSize: "13px",
          }}
        >
          View and manage your faculty profile information.
        </p>

      </div>

      {/* PROFILE TOP CARD */}

      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e8e3ee",
          borderRadius: "18px",
          padding: "25px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
          boxShadow:
            "0 7px 25px rgba(50,40,70,.05)",
        }}
      >

        <div
          style={{
            width: "75px",
            height: "75px",
            borderRadius: "20px",
            background:
              "linear-gradient(135deg,#6847c7,#9276dc)",
            color: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "25px",
            fontWeight: "800",
          }}
        >
          DF
        </div>

        <div style={{ flex: 1 }}>

          <h2
            style={{
              margin: "0 0 5px",
              fontSize: "20px",
            }}
          >
            {profile.name}
          </h2>

          <p
            style={{
              margin: "0 0 5px",
              color: "#756e80",
              fontSize: "12px",
            }}
          >
            {profile.designation} · {profile.department}
          </p>

          <span
            style={{
              display: "inline-block",
              padding: "5px 9px",
              borderRadius: "10px",
              background: "#f0ebff",
              color: "#6847c7",
              fontSize: "9px",
              fontWeight: "700",
            }}
          >
            {profile.facultyId}
          </span>

        </div>

        {!isEditing ? (
          <button
            onClick={() => setIsEditing(true)}
            style={primaryButton}
          >
            Edit Profile
          </button>
        ) : (
          <div
            style={{
              display: "flex",
              gap: "8px",
            }}
          >
            <button
              onClick={handleSave}
              style={primaryButton}
            >
              Save
            </button>

            <button
              onClick={() => setIsEditing(false)}
              style={secondaryButton}
            >
              Cancel
            </button>
          </div>
        )}

      </div>

      {/* PROFILE INFORMATION */}

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit,minmax(320px,1fr))",
          gap: "20px",
        }}
      >

        {/* PERSONAL INFORMATION */}

        <div style={cardStyle}>

          <h2 style={sectionTitle}>
            Personal Information
          </h2>

          <div style={fieldGrid}>

            <ProfileField
              label="Full Name"
              name="name"
              value={profile.name}
              editing={isEditing}
              onChange={handleChange}
            />

            <ProfileField
              label="Email"
              name="email"
              value={profile.email}
              editing={isEditing}
              onChange={handleChange}
            />

            <ProfileField
              label="Phone Number"
              name="phone"
              value={profile.phone}
              editing={isEditing}
              onChange={handleChange}
            />

            <ProfileField
              label="Qualification"
              name="qualification"
              value={profile.qualification}
              editing={isEditing}
              onChange={handleChange}
            />

          </div>

        </div>

        {/* PROFESSIONAL INFORMATION */}

        <div style={cardStyle}>

          <h2 style={sectionTitle}>
            Professional Information
          </h2>

          <div style={fieldGrid}>

            <ProfileField
              label="Faculty ID"
              value={profile.facultyId}
              editing={false}
            />

            <ProfileField
              label="Designation"
              value={profile.designation}
              editing={false}
            />

            <ProfileField
              label="Department"
              value={profile.department}
              editing={false}
            />

            <ProfileField
              label="Academic Year"
              value={profile.academicYear}
              editing={false}
            />

          </div>

        </div>

        {/* ACCOUNT INFORMATION */}

        <div style={cardStyle}>

          <h2 style={sectionTitle}>
            Account Information
          </h2>

          <div style={accountRow}>
            <span>Account Status</span>

            <strong
              style={{
                color: "#3d8b61",
                background: "#edf8f1",
                padding: "5px 9px",
                borderRadius: "10px",
                fontSize: "10px",
              }}
            >
              Active
            </strong>
          </div>

          <div style={accountRow}>
            <span>Portal Access</span>
            <strong>Faculty Portal</strong>
          </div>

          <div style={accountRow}>
            <span>Faculty ID</span>
            <strong>{profile.facultyId}</strong>
          </div>

          <div style={accountRow}>
            <span>Academic Year</span>
            <strong>{profile.academicYear}</strong>
          </div>

        </div>

        {/* SECURITY */}

        <div style={cardStyle}>

          <h2 style={sectionTitle}>
            Security
          </h2>

          <div
            style={{
              padding: "15px",
              background: "#f7f4ff",
              borderRadius: "12px",
              marginBottom: "12px",
            }}
          >
            <strong
              style={{
                display: "block",
                fontSize: "12px",
                color: "#514a60",
                marginBottom: "5px",
              }}
            >
              Password
            </strong>

            <span
              style={{
                color: "#8a8392",
                fontSize: "11px",
              }}
            >
              Password is securely protected.
            </span>
          </div>

          <button
            onClick={() =>
              alert(
                "Password change will be connected with secure backend authentication."
              )
            }
            style={{
              width: "100%",
              border: "1px solid #ddd7e5",
              background: "#ffffff",
              color: "#6847c7",
              padding: "11px",
              borderRadius: "9px",
              cursor: "pointer",
              fontWeight: "600",
              fontSize: "11px",
            }}
          >
            Change Password
          </button>

        </div>

      </div>

      {/* INFORMATION NOTE */}

      <div
        style={{
          marginTop: "20px",
          padding: "16px",
          borderRadius: "13px",
          background: "#f2effb",
          border: "1px solid #e4ddf5",
          display: "flex",
          gap: "10px",
        }}
      >

        <span>ℹ️</span>

        <p
          style={{
            margin: 0,
            color: "#756d83",
            fontSize: "11px",
            lineHeight: "1.6",
          }}
        >
          Faculty ID, department and designation are managed by
          authorized college administration. Actual faculty
          information will be connected to the backend database
          during final integration.
        </p>

      </div>

    </div>
  );
}

/* =========================
   PROFILE FIELD
========================= */

function ProfileField({
  label,
  name,
  value,
  editing,
  onChange,
}) {
  return (
    <div>

      <label
        style={{
          display: "block",
          marginBottom: "7px",
          color: "#817a8b",
          fontSize: "10px",
          fontWeight: "600",
        }}
      >
        {label}
      </label>

      {editing && onChange ? (
        <input
          name={name}
          value={value}
          onChange={onChange}
          style={{
            width: "100%",
            padding: "10px",
            border: "1px solid #ddd7e5",
            borderRadius: "9px",
            outline: "none",
            fontSize: "11px",
            color: "#403a49",
          }}
        />
      ) : (
        <div
          style={{
            padding: "10px",
            background: "#faf9fc",
            borderRadius: "9px",
            color: "#4b4554",
            fontSize: "11px",
          }}
        >
          {value}
        </div>
      )}

    </div>
  );
}

/* =========================
   STYLES
========================= */

const cardStyle = {
  background: "#ffffff",
  border: "1px solid #e8e3ee",
  borderRadius: "17px",
  padding: "22px",
  boxShadow: "0 7px 25px rgba(50,40,70,.04)",
};

const sectionTitle = {
  margin: "0 0 20px",
  fontSize: "15px",
  color: "#40394b",
};

const fieldGrid = {
  display: "grid",
  gridTemplateColumns:
    "repeat(auto-fit,minmax(130px,1fr))",
  gap: "17px",
};

const accountRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "15px",
  padding: "12px 0",
  borderBottom: "1px solid #f0edf3",
  color: "#817a88",
  fontSize: "11px",
};

const primaryButton = {
  border: "none",
  borderRadius: "9px",
  padding: "10px 15px",
  background: "#6847c7",
  color: "#ffffff",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "11px",
};

const secondaryButton = {
  border: "1px solid #ddd7e5",
  borderRadius: "9px",
  padding: "10px 15px",
  background: "#ffffff",
  color: "#5f5868",
  cursor: "pointer",
  fontWeight: "600",
  fontSize: "11px",
};

export default FacultyProfile;