import React, { useState } from "react";
import "./HODPages.css";

function HODReports({ onBack }) {
  const [reportType, setReportType] = useState("Academic Overview");
  const [branch, setBranch] = useState("All");
  const [year, setYear] = useState("2nd Year");
  const [semester, setSemester] = useState("2-1");

  const attendanceData = [
    { branch: "CSE – AI & DS", attendance: 86, students: 32 },
    { branch: "CSE – AI & ML", attendance: 79, students: 30 },
    { branch: "CSE – AI", attendance: 74, students: 28 },
    { branch: "CSE General", attendance: 82, students: 31 },
    { branch: "ECE", attendance: 88, students: 30 },
    { branch: "MBA", attendance: 76, students: 35 },
    { branch: "MCA", attendance: 91, students: 29 },
  ];

  const filteredData =
    branch === "All"
      ? attendanceData
      : attendanceData.filter((item) => item.branch === branch);

  const averageAttendance =
    filteredData.length > 0
      ? Math.round(
          filteredData.reduce((sum, item) => sum + item.attendance, 0) /
            filteredData.length
        )
      : 0;

  const totalStudents = filteredData.reduce(
    (sum, item) => sum + item.students,
    0
  );

  const reviewBranches = filteredData.filter(
    (item) => item.attendance < 75
  ).length;

  const getBarClass = (value) => {
    if (value >= 85) return "report-bar-good";
    if (value >= 75) return "report-bar-medium";
    return "report-bar-low";
  };

  const handleGenerate = () => {
    alert(
      `${reportType} report generated in demo mode.\n\nBranch: ${branch}\nYear: ${year}\nSemester: ${semester}`
    );
  };

  const handleExport = () => {
    alert(
      "Report export will be connected to PDF/Excel generation during backend integration."
    );
  };

  return (
    <div className="hod-page">
      {/* HEADER */}
      <div className="hod-page-header">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back to HOD Dashboard
          </button>

          <h1>Reports & Analytics</h1>

          <p>
            Generate academic, attendance and department reports for
            authorized HOD review.
          </p>
        </div>

        <div className="hod-demo-badge">DEMO DATA</div>
      </div>

      {/* REPORT CONTROLS */}
      <div className="hod-report-control-card">
        <div className="hod-report-control-header">
          <div>
            <h2>Generate Report</h2>
            <p>Select the required academic filters.</p>
          </div>

          <button className="hod-primary-btn" onClick={handleGenerate}>
            Generate Report
          </button>
        </div>

        <div className="hod-report-filter-grid">
          <div className="hod-filter-group">
            <label>Report Type</label>

            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
            >
              <option>Academic Overview</option>
              <option>Attendance Report</option>
              <option>Subject Progress</option>
              <option>Faculty Allocation</option>
              <option>Department Summary</option>
            </select>
          </div>

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
              <option>1-1</option>
              <option>1-2</option>
              <option>2-1</option>
              <option>2-2</option>
            </select>
          </div>
        </div>
      </div>

      {/* REPORT SUMMARY */}
      <div className="hod-summary-grid">
        <div className="hod-summary-card">
          <span className="hod-summary-icon">👩‍🎓</span>

          <div>
            <p>Total Students</p>
            <h2>{totalStudents}</h2>
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
          <span className="hod-summary-icon">🏫</span>

          <div>
            <p>Branches</p>
            <h2>{filteredData.length}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">⚠️</span>

          <div>
            <p>Review Required</p>
            <h2>{reviewBranches}</h2>
          </div>
        </div>
      </div>

      {/* REPORT PREVIEW */}
      <div className="hod-report-card">
        <div className="hod-report-header">
          <div>
            <h2>{reportType}</h2>

            <p>
              {year} • Semester {semester} • {branch}
            </p>
          </div>

          <button className="hod-secondary-btn" onClick={handleExport}>
            Export Report
          </button>
        </div>

        <div className="hod-report-table-wrapper">
          <table className="hod-table">
            <thead>
              <tr>
                <th>Branch</th>
                <th>Students</th>
                <th>Attendance</th>
                <th>Progress</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredData.map((item) => (
                <tr key={item.branch}>
                  <td>
                    <strong>{item.branch}</strong>
                  </td>

                  <td>{item.students}</td>

                  <td>
                    <strong>{item.attendance}%</strong>
                  </td>

                  <td>
                    <div className="hod-report-progress">
                      <div
                        className={getBarClass(item.attendance)}
                        style={{ width: `${item.attendance}%` }}
                      />
                    </div>
                  </td>

                  <td>
                    <span
                      className={
                        item.attendance >= 75
                          ? "hod-status active"
                          : "hod-status pending"
                      }
                    >
                      {item.attendance >= 75
                        ? "On Track"
                        : "Review"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* QUICK REPORTS */}
      <div className="hod-section-title">
        <div>
          <h2>Quick Reports</h2>
          <p>Frequently used department reports.</p>
        </div>
      </div>

      <div className="hod-quick-reports">
        <div className="hod-quick-report-card">
          <span>📊</span>
          <h3>Attendance Report</h3>
          <p>Department-wise attendance summary.</p>

          <button
            className="hod-view-btn"
            onClick={() => setReportType("Attendance Report")}
          >
            Open
          </button>
        </div>

        <div className="hod-quick-report-card">
          <span>📚</span>
          <h3>Subject Progress</h3>
          <p>Track syllabus and class completion.</p>

          <button
            className="hod-view-btn"
            onClick={() => setReportType("Subject Progress")}
          >
            Open
          </button>
        </div>

        <div className="hod-quick-report-card">
          <span>👩‍🏫</span>
          <h3>Faculty Allocation</h3>
          <p>View faculty and subject assignments.</p>

          <button
            className="hod-view-btn"
            onClick={() => setReportType("Faculty Allocation")}
          >
            Open
          </button>
        </div>

        <div className="hod-quick-report-card">
          <span>🏢</span>
          <h3>Department Summary</h3>
          <p>Overall academic department overview.</p>

          <button
            className="hod-view-btn"
            onClick={() => setReportType("Department Summary")}
          >
            Open
          </button>
        </div>
      </div>

      {/* INFO */}
      <div className="hod-info-card">
        <div className="hod-info-icon">ℹ️</div>

        <div>
          <h3>Report Data</h3>

          <p>
            The figures shown here are development demo data. Final reports
            will be generated from authenticated academic records stored in
            the CampusHub backend. PDF, Excel and print formats can be added
            during final integration.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HODReports;