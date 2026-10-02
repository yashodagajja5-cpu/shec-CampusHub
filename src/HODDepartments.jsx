import React, { useState } from "react";
import "./HODPages.css";

function HODDepartments({ onBack }) {
  const [search, setSearch] = useState("");

  const departments = [
    {
      name: "CSE – AI",
      fullName: "Computer Science & Engineering – Artificial Intelligence",
      students: 72,
      faculty: 4,
      sections: 2,
      attendance: 87,
      status: "Active",
    },
    {
      name: "CSE – AI & DS",
      fullName:
        "Computer Science & Engineering – Artificial Intelligence & Data Science",
      students: 68,
      faculty: 4,
      sections: 2,
      attendance: 86,
      status: "Active",
    },
    {
      name: "CSE – AI & ML",
      fullName:
        "Computer Science & Engineering – Artificial Intelligence & Machine Learning",
      students: 65,
      faculty: 4,
      sections: 2,
      attendance: 84,
      status: "Active",
    },
    {
      name: "CSE General",
      fullName: "Computer Science & Engineering",
      students: 70,
      faculty: 4,
      sections: 2,
      attendance: 88,
      status: "Active",
    },
    {
      name: "ECE",
      fullName: "Electronics & Communication Engineering",
      students: 58,
      faculty: 3,
      sections: 1,
      attendance: 85,
      status: "Active",
    },
    {
      name: "MBA",
      fullName: "Master of Business Administration",
      students: 82,
      faculty: 3,
      sections: 2,
      attendance: 89,
      status: "Active",
    },
    {
      name: "MCA",
      fullName: "Master of Computer Applications",
      students: 65,
      faculty: 2,
      sections: 2,
      attendance: 86,
      status: "Active",
    },
  ];

  const filteredDepartments = departments.filter((dept) =>
    `${dept.name} ${dept.fullName}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const totalStudents = departments.reduce(
    (sum, dept) => sum + dept.students,
    0
  );

  const totalFaculty = departments.reduce(
    (sum, dept) => sum + dept.faculty,
    0
  );

  return (
    <div className="hod-page">

      {/* HEADER */}

      <div className="hod-page-header">

        <div>
          <button
            className="hod-back-link"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <h1>Departments</h1>

          <p>
            View academic departments and their current overview.
          </p>
        </div>

      </div>

      {/* SUMMARY */}

      <div className="hod-summary-grid">

        <div className="hod-summary-card">
          <div className="hod-summary-icon">🏢</div>
          <div>
            <span>Total Departments</span>
            <strong>{departments.length}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">🎓</div>
          <div>
            <span>Total Students</span>
            <strong>{totalStudents}+</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">👩‍🏫</div>
          <div>
            <span>Total Faculty</span>
            <strong>{totalFaculty}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">📚</div>
          <div>
            <span>Academic Year</span>
            <strong>2026–27</strong>
          </div>
        </div>

      </div>

      {/* SEARCH */}

      <div className="hod-filter-card">

        <div>
          <h2>Department Directory</h2>
          <p>
            Search departments by name or program.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="hod-search-input"
        />

      </div>

      {/* DEPARTMENT CARDS */}

      <div className="hod-department-grid">

        {filteredDepartments.map((dept) => (

          <div
            className="hod-department-card"
            key={dept.name}
          >

            <div className="hod-dept-top">

              <div className="hod-dept-icon">
                🎓
              </div>

              <span className="hod-active-badge">
                {dept.status}
              </span>

            </div>

            <h2>{dept.name}</h2>

            <p className="hod-dept-full-name">
              {dept.fullName}
            </p>

            <div className="hod-dept-stats">

              <div>
                <span>Students</span>
                <strong>{dept.students}</strong>
              </div>

              <div>
                <span>Faculty</span>
                <strong>{dept.faculty}</strong>
              </div>

              <div>
                <span>Sections</span>
                <strong>{dept.sections}</strong>
              </div>

              <div>
                <span>Attendance</span>
                <strong>{dept.attendance}%</strong>
              </div>

            </div>

            <div className="hod-attendance-bar">

              <div className="hod-attendance-label">
                <span>Attendance</span>
                <strong>{dept.attendance}%</strong>
              </div>

              <div className="hod-progress-bg">
                <div
                  className="hod-progress-fill"
                  style={{
                    width: `${dept.attendance}%`,
                  }}
                ></div>
              </div>

            </div>

            <button
              className="hod-dept-view-btn"
              onClick={() =>
                alert(
                  `${dept.name} details will be connected to the backend database.`
                )
              }
            >
              View Department
            </button>

          </div>

        ))}

      </div>

      {filteredDepartments.length === 0 && (
        <div className="hod-empty-state">
          <div>🔎</div>
          <h3>No department found</h3>
          <p>
            Try searching with another department name.
          </p>
        </div>
      )}

      {/* NOTE */}

      <div className="hod-info-note">

        <span>ℹ️</span>

        <p>
          Department information shown here is demo data for the
          CampusHub interface. Final student, faculty, section and
          attendance counts should come from authorized college
          records.
        </p>

      </div>

    </div>
  );
}

export default HODDepartments;