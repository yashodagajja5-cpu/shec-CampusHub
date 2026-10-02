import React, { useState } from "react";
import "./HODPages.css";

function HODSubjects({ onBack }) {
  const [branch, setBranch] = useState("All");
  const [year, setYear] = useState("2nd Year");
  const [semester, setSemester] = useState("2-1");

  const subjects = [
    {
      code: "ADS301",
      name: "Advanced Data Structures",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      faculty: "Demo Faculty",
      periods: 5,
      completed: 18,
      total: 25,
      room: "Room 201",
      status: "Active",
    },
    {
      code: "JAVA302",
      name: "Java Programming",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      faculty: "Demo Faculty",
      periods: 5,
      completed: 20,
      total: 25,
      room: "Room 201",
      status: "Active",
    },
    {
      code: "DBMS303",
      name: "Database Management Systems",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      faculty: "Demo Faculty",
      periods: 4,
      completed: 16,
      total: 20,
      room: "Room 202",
      status: "Active",
    },
    {
      code: "CN304",
      name: "Computer Networks",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      faculty: "Demo Faculty",
      periods: 4,
      completed: 14,
      total: 20,
      room: "Room 202",
      status: "Active",
    },
    {
      code: "AIML305",
      name: "Machine Learning",
      branch: "CSE – AI & ML",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      faculty: "Faculty Demo 02",
      periods: 5,
      completed: 17,
      total: 25,
      room: "Room 301",
      status: "Active",
    },
    {
      code: "ECE306",
      name: "Digital Electronics",
      branch: "ECE",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      faculty: "Faculty Demo 03",
      periods: 5,
      completed: 19,
      total: 25,
      room: "ECE Lab",
      status: "Active",
    },
  ];

  const filteredSubjects = subjects.filter((subject) => {
    return (
      (branch === "All" || subject.branch === branch) &&
      (year === "All" || subject.year === year) &&
      (semester === "All" || subject.semester === semester)
    );
  });

  const activeSubjects = filteredSubjects.filter(
    (subject) => subject.status === "Active"
  ).length;

  const totalPeriods = filteredSubjects.reduce(
    (sum, subject) => sum + subject.total,
    0
  );

  const completedPeriods = filteredSubjects.reduce(
    (sum, subject) => sum + subject.completed,
    0
  );

  return (
    <div className="hod-page">
      {/* HEADER */}
      <div className="hod-page-header">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back to HOD Dashboard
          </button>

          <h1>Subjects & Classes</h1>
          <p>
            Manage academic subjects, assigned faculty, sections and class
            progress.
          </p>
        </div>

        <div className="hod-demo-badge">DEMO DATA</div>
      </div>

      {/* FILTERS */}
      <div className="hod-filter-card">
        <div className="hod-filter-group">
          <label>Branch</label>

          <select
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
          >
            <option>All</option>
            <option>CSE – AI</option>
            <option>CSE – AI & DS</option>
            <option>CSE – AI & ML</option>
            <option>CSE General</option>
            <option>ECE</option>
            <option>MBA</option>
            <option>MCA</option>
          </select>
        </div>

        <div className="hod-filter-group">
          <label>Year</label>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option>All</option>
            <option>1st Year</option>
            <option>2nd Year</option>
          </select>
        </div>

        <div className="hod-filter-group">
          <label>Semester</label>

          <select
            value={semester}
            onChange={(e) => setSemester(e.target.value)}
          >
            <option>All</option>
            <option>1-1</option>
            <option>1-2</option>
            <option>2-1</option>
            <option>2-2</option>
          </select>
        </div>
      </div>

      {/* SUMMARY */}
      <div className="hod-summary-grid">
        <div className="hod-summary-card">
          <span className="hod-summary-icon">📚</span>

          <div>
            <p>Total Subjects</p>
            <h2>{filteredSubjects.length}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">✅</span>

          <div>
            <p>Active Subjects</p>
            <h2>{activeSubjects}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">🕒</span>

          <div>
            <p>Total Periods</p>
            <h2>{totalPeriods}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">📈</span>

          <div>
            <p>Completed</p>
            <h2>
              {completedPeriods}/{totalPeriods}
            </h2>
          </div>
        </div>
      </div>

      {/* SUBJECT CARDS */}
      <div className="hod-section-title">
        <div>
          <h2>Subject & Class Allocation</h2>
          <p>Faculty and class allocation for the selected academic setup.</p>
        </div>

        <button
          className="hod-primary-btn"
          onClick={() =>
            alert(
              "Add Subject form will be connected to the backend in the next integration phase."
            )
          }
        >
          + Add Subject
        </button>
      </div>

      <div className="hod-subject-grid">
        {filteredSubjects.length > 0 ? (
          filteredSubjects.map((subject) => {
            const progress = Math.round(
              (subject.completed / subject.total) * 100
            );

            return (
              <div className="hod-subject-card" key={subject.code}>
                <div className="hod-subject-top">
                  <div>
                    <span className="hod-subject-code">
                      {subject.code}
                    </span>

                    <h3>{subject.name}</h3>
                  </div>

                  <span className="hod-status active">
                    {subject.status}
                  </span>
                </div>

                <div className="hod-subject-details">
                  <div>
                    <span>Branch</span>
                    <strong>{subject.branch}</strong>
                  </div>

                  <div>
                    <span>Section</span>
                    <strong>{subject.section}</strong>
                  </div>

                  <div>
                    <span>Faculty</span>
                    <strong>{subject.faculty}</strong>
                  </div>

                  <div>
                    <span>Room</span>
                    <strong>{subject.room}</strong>
                  </div>
                </div>

                <div className="hod-class-progress">
                  <div className="hod-progress-heading">
                    <span>Class Progress</span>
                    <strong>{progress}%</strong>
                  </div>

                  <div className="hod-progress">
                    <div
                      className="attendance-good"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>

                  <p>
                    {subject.completed} of {subject.total} periods completed
                  </p>
                </div>

                <div className="hod-subject-footer">
                  <span>{subject.periods} periods / week</span>

                  <button
                    className="hod-view-btn"
                    onClick={() =>
                      alert(
                        `Subject: ${subject.name}\nFaculty: ${subject.faculty}\nRoom: ${subject.room}\nSection: ${subject.section}`
                      )
                    }
                  >
                    View Details
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="hod-empty-state">
            No subjects found for the selected filters.
          </div>
        )}
      </div>

      {/* INFORMATION */}
      <div className="hod-info-card">
        <div className="hod-info-icon">ℹ️</div>

        <div>
          <h3>Academic Configuration</h3>

          <p>
            Subject names, codes, credits, periods, faculty allocation,
            sections and rooms shown here are demo records. In the final
            system, these details will be maintained by authorized HOD/Admin
            users and linked to the academic database.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HODSubjects;