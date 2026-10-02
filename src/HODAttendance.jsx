import React, { useMemo, useState } from "react";
import "./HODPages.css";

function HODAttendance({ onBack }) {
  const [branch, setBranch] = useState("All");
  const [year, setYear] = useState("2nd Year");
  const [semester, setSemester] = useState("2-1");
  const [section, setSection] = useState("All");
  const [date, setDate] = useState("2026-10-01");

  // DEMO DATA
  const attendanceData = [
    {
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 6,
      present: 86,
      status: "Good",
    },
    {
      branch: "CSE – AI & ML",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 6,
      present: 79,
      status: "Good",
    },
    {
      branch: "CSE – AI",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 6,
      present: 74,
      status: "Review",
    },
    {
      branch: "CSE General",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 6,
      present: 82,
      status: "Good",
    },
    {
      branch: "ECE",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 6,
      present: 88,
      status: "Good",
    },
    {
      branch: "MBA",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 5,
      present: 76,
      status: "Review",
    },
    {
      branch: "MCA",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      classes: 5,
      present: 91,
      status: "Good",
    },
  ];

  const filteredData = useMemo(() => {
    return attendanceData.filter((item) => {
      return (
        (branch === "All" || item.branch === branch) &&
        (year === "All" || item.year === year) &&
        (semester === "All" || item.semester === semester) &&
        (section === "All" || item.section === section)
      );
    });
  }, [branch, year, semester, section]);

  const averageAttendance =
    filteredData.length > 0
      ? Math.round(
          filteredData.reduce((sum, item) => sum + item.present, 0) /
            filteredData.length
        )
      : 0;

  const reviewCount = filteredData.filter(
    (item) => item.status === "Review"
  ).length;

  const totalClasses = filteredData.reduce(
    (sum, item) => sum + item.classes,
    0
  );

  const getAttendanceClass = (value) => {
    if (value >= 85) return "attendance-good";
    if (value >= 75) return "attendance-medium";
    return "attendance-low";
  };

  return (
    <div className="hod-page">
      <div className="hod-page-header">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back to HOD Dashboard
          </button>

          <h1>Attendance Monitoring</h1>
          <p>
            Monitor department-wise attendance and identify classes that need
            attention.
          </p>
        </div>

        <div className="hod-demo-badge">DEMO DATA</div>
      </div>

      {/* FILTERS */}
      <div className="hod-filter-card">
        <div className="hod-filter-group">
          <label>Branch</label>
          <select value={branch} onChange={(e) => setBranch(e.target.value)}>
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
          <select value={year} onChange={(e) => setYear(e.target.value)}>
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

        <div className="hod-filter-group">
          <label>Section</label>
          <select value={section} onChange={(e) => setSection(e.target.value)}>
            <option>All</option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>
        </div>

        <div className="hod-filter-group">
          <label>Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* SUMMARY */}
      <div className="hod-summary-grid">
        <div className="hod-summary-card">
          <span className="hod-summary-icon">📚</span>
          <div>
            <p>Total Classes</p>
            <h2>{totalClasses}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">📊</span>
          <div>
            <p>Average Attendance</p>
            <h2>{averageAttendance}%</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">⚠️</span>
          <div>
            <p>Needs Review</p>
            <h2>{reviewCount}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">🏫</span>
          <div>
            <p>Sections Monitored</p>
            <h2>{filteredData.length}</h2>
          </div>
        </div>
      </div>

      {/* ATTENDANCE TABLE */}
      <div className="hod-table-card">
        <div className="hod-table-header">
          <div>
            <h2>Department Attendance</h2>
            <p>
              Attendance overview for{" "}
              <strong>{date}</strong>
            </p>
          </div>

          <button
            className="hod-secondary-btn"
            onClick={() =>
              alert(
                "Attendance report export will be connected to the backend later."
              )
            }
          >
            Export Report
          </button>
        </div>

        <div className="hod-table-wrapper">
          <table className="hod-table">
            <thead>
              <tr>
                <th>Branch</th>
                <th>Year</th>
                <th>Semester</th>
                <th>Section</th>
                <th>Classes</th>
                <th>Attendance</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <strong>{item.branch}</strong>
                    </td>
                    <td>{item.year}</td>
                    <td>{item.semester}</td>
                    <td>{item.section}</td>
                    <td>{item.classes}</td>

                    <td>
                      <div className="hod-attendance-cell">
                        <span>{item.present}%</span>

                        <div className="hod-progress">
                          <div
                            className={getAttendanceClass(item.present)}
                            style={{ width: `${item.present}%` }}
                          ></div>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span
                        className={
                          item.status === "Good"
                            ? "hod-status active"
                            : "hod-status pending"
                        }
                      >
                        {item.status}
                      </span>
                    </td>

                    <td>
                      <button
                        className="hod-view-btn"
                        onClick={() =>
                          alert(
                            `${item.branch} - Section ${item.section}\nAttendance: ${item.present}%\nDetailed attendance will be connected to backend later.`
                          )
                        }
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="8" className="hod-empty-state">
                    No attendance records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* THRESHOLD INFORMATION */}
      <div className="hod-info-card">
        <div className="hod-info-icon">ℹ️</div>

        <div>
          <h3>Attendance Review Threshold</h3>

          <p>
            The current demo uses <strong>75%</strong> as a configurable
            review threshold. The final attendance and condonation rules
            should be configured according to the college's authorized
            academic policy and the applicable current JNTUK regulations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HODAttendance;