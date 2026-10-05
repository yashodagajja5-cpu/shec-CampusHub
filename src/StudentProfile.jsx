```jsx
import React, { useState } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import "./StudentProfile.css";

function StudentProfile({ onBack }) {
  const [editing, setEditing] = useState(false);

  const studentData = useQuery(
    api.students.getStudentByRollNumber,
    {
      rollNumber: "DEMO2026AI001",
    }
  );

  const updateStudent = useMutation(
    api.students.updateStudent
  );

  const [student, setStudent] = useState(null);

  React.useEffect(() => {
    if (studentData) {
      setStudent({
        name: studentData.name || "",
        rollNumber: studentData.rollNumber || "",
        branch: studentData.branch || "",
        year: studentData.year || "",
        semester: studentData.semester || "",
        section: studentData.section || "",
        academicYear: studentData.academicYear || "",
        email: studentData.email || "",
        phone: studentData.phone || "XXXXXXXXXX",
        admissionYear: "2025",
        bloodGroup: "Not Updated",
        address: "Not Updated",
      });
    }
  }, [studentData]);

  const handleChange = (field, value) => {
    setStudent({
      ...student,
      [field]: value,
    });
  };

  const handleSave = async () => {
    if (!studentData || !student) {
      return;
    }

    try {
      await updateStudent({
        studentId: studentData._id,
        name: student.name,
        email: student.email,
        phone: student.phone,
      });

      setEditing(false);
      alert("Profile updated successfully!");
    } catch (error) {
      console.error("Profile update error:", error);
      alert("Unable to update profile. Please try again.");
    }
  };

  if (!student) {
    return (
      <div className="student-profile-page">
        <header className="profile-page-header">
          <button
            className="profile-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <div>
            <h1>Student Profile</h1>
            <p>View and manage your student information</p>
          </div>
        </header>

        <main className="profile-container">
          <section className="profile-section">
            <div className="profile-section-heading">
              <h2>Loading Profile...</h2>
              <p>Please wait while your student information is loaded.</p>
            </div>
          </section>
        </main>
      </div>
    );
  }

  return (
    <div className="student-profile-page">

      <header className="profile-page-header">

        <button
          className="profile-back-btn"
          onClick={onBack}
        >
          ← Back to Dashboard
        </button>

        <div>
          <h1>Student Profile</h1>
          <p>View and manage your student information</p>
        </div>

      </header>

      <main className="profile-container">

        {/* PROFILE TOP CARD */}

        <section className="profile-main-card">

          <div className="large-profile-circle">
            {student.name.charAt(0)}
          </div>

          <div className="profile-main-info">

            <h2>{student.name}</h2>

            <p>{student.rollNumber}</p>

            <span>
              {student.branch} • {student.year}
            </span>

          </div>

          <button
            className="edit-profile-btn"
            onClick={() => {
              if (editing) {
                handleSave();
              } else {
                setEditing(true);
              }
            }}
          >
            {editing ? "Save Profile" : "Edit Profile"}
          </button>

        </section>

        {/* ACADEMIC INFORMATION */}

        <section className="profile-section">

          <div className="profile-section-heading">
            <h2>Academic Information</h2>
            <p>Your current academic details</p>
          </div>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Roll Number</label>
              <input
                value={student.rollNumber}
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Branch</label>
              <input
                value={student.branch}
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Year</label>
              <input
                value={student.year}
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Semester</label>
              <input
                value={student.semester}
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Section</label>
              <input
                value={student.section}
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Academic Year</label>
              <input
                value={student.academicYear}
                disabled
              />
            </div>

            <div className="profile-field">
              <label>Admission Year</label>
              <input
                value={student.admissionYear}
                disabled
              />
            </div>

          </div>

        </section>

        {/* PERSONAL INFORMATION */}

        <section className="profile-section">

          <div className="profile-section-heading">
            <h2>Personal Information</h2>
            <p>Your basic contact details</p>
          </div>

          <div className="profile-grid">

            <div className="profile-field">
              <label>Full Name</label>

              <input
                value={student.name}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("name", e.target.value)
                }
              />
            </div>

            <div className="profile-field">
              <label>Email</label>

              <input
                value={student.email}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("email", e.target.value)
                }
              />
            </div>

            <div className="profile-field">
              <label>Phone Number</label>

              <input
                value={student.phone}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("phone", e.target.value)
                }
              />
            </div>

            <div className="profile-field">
              <label>Blood Group</label>

              <input
                value={student.bloodGroup}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("bloodGroup", e.target.value)
                }
              />
            </div>

            <div className="profile-field full-width">
              <label>Address</label>

              <textarea
                rows="4"
                value={student.address}
                disabled={!editing}
                onChange={(e) =>
                  handleChange("address", e.target.value)
                }
              />
            </div>

          </div>

        </section>

        {/* ACCOUNT INFORMATION */}

        <section className="profile-section">

          <div className="profile-section-heading">
            <h2>Account Information</h2>
            <p>CampusHub login information</p>
          </div>

          <div className="account-info">

            <div>
              <span>Login ID</span>
              <strong>{student.rollNumber}</strong>
            </div>

            <div>
              <span>Account Type</span>
              <strong>Student</strong>
            </div>

            <div>
              <span>Portal</span>
              <strong>SHEC CampusHub</strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default StudentProfile;
```
