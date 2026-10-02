import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminReports({ onBack }) {
  const [reportType, setReportType] = useState("Overview");
  const [year, setYear] = useState("2026–27");
  const [department, setDepartment] = useState("All Departments");

  const departments = [
    {
      name: "CSE – AI",
      students: 86,
      faculty: 7,
      attendance: 87,
      result: 89,
    },
    {
      name: "CSE – AI & DS",
      students: 104,
      faculty: 9,
      attendance: 86,
      result: 91,
    },
    {
      name: "CSE – AI & ML",
      students: 82,
      faculty: 7,
      attendance: 84,
      result: 88,
    },
    {
      name: "CSE General",
      students: 96,
      faculty: 8,
      attendance: 85,
      result: 87,
    },
    {
      name: "ECE",
      students: 78,
      faculty: 6,
      attendance: 83,
      result: 86,
    },
    {
      name: "MBA",
      students: 74,
      faculty: 7,
      attendance: 88,
      result: 90,
    },
    {
      name: "MCA",
      students: 64,
      faculty: 5,
      attendance: 89,
      result: 92,
    },
  ];

  const attendanceData = [
    {
      branch: "CSE – AI",
      percentage: 87,
      good: 68,
      attention: 12,
      low: 6,
    },
    {
      branch: "CSE – AI & DS",
      percentage: 86,
      good: 81,
      attention: 15,
      low: 8,
    },
    {
      branch: "CSE – AI & ML",
      percentage: 84,
      good: 60,
      attention: 14,
      low: 8,
    },
    {
      branch: "CSE General",
      percentage: 85,
      good: 71,
      attention: 16,
      low: 9,
    },
    {
      branch: "ECE",
      percentage: 83,
      good: 52,
      attention: 16,
      low: 10,
    },
    {
      branch: "MBA",
      percentage: 88,
      good: 62,
      attention: 8,
      low: 4,
    },
    {
      branch: "MCA",
      percentage: 89,
      good: 54,
      attention: 7,
      low: 3,
    },
  ];

  const scholarshipData = [
    {
      name: "PM Vidyalaxmi",
      applications: 18,
      approved: 10,
      processing: 6,
      rejected: 2,
    },
    {
      name: "NSP Scholarship",
      applications: 32,
      approved: 19,
      processing: 9,
      rejected: 4,
    },
    {
      name: "ONGC Scholarship",
      applications: 14,
      approved: 7,
      processing: 5,
      rejected: 2,
    },
    {
      name: "Institutional",
      applications: 26,
      approved: 18,
      processing: 5,
      rejected: 3,
    },
  ];

  const requestData = [
    {
      type: "Leave Request",
      total: 42,
      approved: 31,
      pending: 8,
      rejected: 3,
    },
    {
      type: "Permission Request",
      total: 28,
      approved: 21,
      pending: 5,
      rejected: 2,
    },
    {
      type: "Bonafide Certificate",
      total: 36,
      approved: 29,
      pending: 6,
      rejected: 1,
    },
    {
      type: "Study Certificate",
      total: 18,
      approved: 15,
      pending: 2,
      rejected: 1,
    },
    {
      type: "Fee / Bank Letter",
      total: 24,
      approved: 19,
      pending: 4,
      rejected: 1,
    },
  ];

  const selectedDepartments = useMemo(() => {
    if (department === "All Departments") {
      return departments;
    }

    return departments.filter(
      (item) => item.name === department
    );
  }, [department]);

  const totalStudents = selectedDepartments.reduce(
    (sum, item) => sum + item.students,
    0
  );

  const totalFaculty = selectedDepartments.reduce(
    (sum, item) => sum + item.faculty,
    0
  );

  const averageAttendance =
    selectedDepartments.length > 0
      ? Math.round(
          selectedDepartments.reduce(
            (sum, item) => sum + item.attendance,
            0
          ) / selectedDepartments.length
        )
      : 0;

  const averageResult =
    selectedDepartments.length > 0
      ? Math.round(
          selectedDepartments.reduce(
            (sum, item) => sum + item.result,
            0
          ) / selectedDepartments.length
        )
      : 0;

  const handlePrint = () => {
    window.print();
  };

  const handleExport = () => {
    alert(
      "Export feature will be connected to backend-generated CSV/PDF reports in the final version."
    );
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

          <h1>Reports & Analytics</h1>

          <p>
            View academic, attendance, scholarship,
            request and institutional reports.
          </p>

        </div>

        <div className="admin-header-actions">

          <button
            className="admin-secondary-btn"
            onClick={handlePrint}
          >
            🖨 Print
          </button>

          <button
            className="admin-primary-btn"
            onClick={handleExport}
          >
            ↓ Export Report
          </button>

        </div>

      </div>

      {/* DEMO NOTICE */}

      <div className="admin-demo-banner">
        <strong>Development Data:</strong> Analytics shown
        here are sample figures for portal development.
        Final reports must use authorized institutional
        records from the backend.
      </div>

      {/* FILTERS */}

      <div className="admin-filter-card report-filter-card">

        <div className="admin-filter-item">

          <label>Report Type</label>

          <select
            value={reportType}
            onChange={(e) =>
              setReportType(e.target.value)
            }
          >
            <option>Overview</option>
            <option>Academic Performance</option>
            <option>Attendance</option>
            <option>Scholarships</option>
            <option>Requests</option>
            <option>Hostel</option>
            <option>Events</option>
          </select>

        </div>

        <div className="admin-filter-item">

          <label>Academic Year</label>

          <select
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
          >
            <option>2026–27</option>
            <option>2025–26</option>
          </select>

        </div>

        <div className="admin-filter-item">

          <label>Department</label>

          <select
            value={department}
            onChange={(e) =>
              setDepartment(e.target.value)
            }
          >
            <option>All Departments</option>

            {departments.map((item) => (
              <option
                key={item.name}
                value={item.name}
              >
                {item.name}
              </option>
            ))}

          </select>

        </div>

      </div>

      {/* MAIN STATISTICS */}

      {reportType === "Overview" && (
        <>

          <div className="admin-stats-grid report-stats">

            <div className="admin-stat-card">

              <div className="admin-stat-icon purple">
                👩‍🎓
              </div>

              <div>
                <span>Total Students</span>
                <strong>{totalStudents}</strong>
                <small>
                  {year}
                </small>
              </div>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-icon blue">
                👩‍🏫
              </div>

              <div>
                <span>Total Faculty</span>
                <strong>{totalFaculty}</strong>
                <small>
                  Teaching staff
                </small>
              </div>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-icon green">
                ✓
              </div>

              <div>
                <span>Average Attendance</span>
                <strong>
                  {averageAttendance}%
                </strong>
                <small>
                  Department average
                </small>
              </div>

            </div>

            <div className="admin-stat-card">

              <div className="admin-stat-icon orange">
                📈
              </div>

              <div>
                <span>Average Result</span>
                <strong>
                  {averageResult}%
                </strong>
                <small>
                  Academic performance
                </small>
              </div>

            </div>

          </div>

          {/* DEPARTMENT REPORT */}

          <div className="admin-panel">

            <div className="admin-panel-header">

              <div>
                <h2>Department Overview</h2>
                <p>
                  Student strength, attendance and academic
                  performance by department.
                </p>
              </div>

            </div>

            <div className="admin-table-wrapper">

              <table className="admin-table report-table">

                <thead>

                  <tr>
                    <th>Department</th>
                    <th>Students</th>
                    <th>Faculty</th>
                    <th>Attendance</th>
                    <th>Result</th>
                    <th>Academic Status</th>
                  </tr>

                </thead>

                <tbody>

                  {selectedDepartments.map(
                    (item) => (

                      <tr key={item.name}>

                        <td>
                          <strong>
                            {item.name}
                          </strong>
                        </td>

                        <td>
                          {item.students}
                        </td>

                        <td>
                          {item.faculty}
                        </td>

                        <td>

                          <div className="report-progress-cell">

                            <strong>
                              {item.attendance}%
                            </strong>

                            <div className="report-progress">
                              <div
                                style={{
                                  width: `${item.attendance}%`,
                                }}
                              />
                            </div>

                          </div>

                        </td>

                        <td>

                          <span className="report-result-badge">
                            {item.result}%
                          </span>

                        </td>

                        <td>

                          <span
                            className={`report-status ${
                              item.result >= 90
                                ? "excellent"
                                : item.result >= 85
                                ? "good"
                                : "attention"
                            }`}
                          >
                            {item.result >= 90
                              ? "Excellent"
                              : item.result >= 85
                              ? "Good"
                              : "Needs Attention"}
                          </span>

                        </td>

                      </tr>

                    )
                  )}

                </tbody>

              </table>

            </div>

          </div>

        </>
      )}

      {/* ACADEMIC REPORT */}

      {reportType === "Academic Performance" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Academic Performance Report</h2>
              <p>
                Department-level academic performance summary.
              </p>
            </div>

          </div>

          <div className="report-card-grid">

            {selectedDepartments.map((item) => (

              <div
                className="analytics-card"
                key={item.name}
              >

                <div className="analytics-card-top">

                  <div className="analytics-icon">
                    📚
                  </div>

                  <span>
                    {item.name}
                  </span>

                </div>

                <div className="analytics-big-number">
                  {item.result}%
                </div>

                <p>
                  Average academic result
                </p>

                <div className="report-progress large">
                  <div
                    style={{
                      width: `${item.result}%`,
                    }}
                  />
                </div>

                <div className="analytics-footer">
                  <span>
                    Students: {item.students}
                  </span>

                  <span>
                    Faculty: {item.faculty}
                  </span>
                </div>

              </div>

            ))}

          </div>

        </div>
      )}

      {/* ATTENDANCE REPORT */}

      {reportType === "Attendance" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Attendance Analytics</h2>
              <p>
                Department-wise attendance summary.
              </p>
            </div>

          </div>

          <div className="attendance-report-grid">

            {attendanceData.map((item) => (

              <div
                className="attendance-report-card"
                key={item.branch}
              >

                <div className="attendance-report-header">

                  <strong>
                    {item.branch}
                  </strong>

                  <span>
                    {item.percentage}%
                  </span>

                </div>

                <div className="report-progress large">
                  <div
                    style={{
                      width: `${item.percentage}%`,
                    }}
                  />
                </div>

                <div className="attendance-breakdown">

                  <div>
                    <span>Good</span>
                    <strong className="good-text">
                      {item.good}
                    </strong>
                  </div>

                  <div>
                    <span>Attention</span>
                    <strong className="warning-text">
                      {item.attention}
                    </strong>
                  </div>

                  <div>
                    <span>Low</span>
                    <strong className="danger-text">
                      {item.low}
                    </strong>
                  </div>

                </div>

              </div>

            ))}

          </div>

          <div className="report-info-box">
            <strong>Attendance rule configuration</strong>

            <p>
              Attendance thresholds and condonation rules
              should be configured according to the current
              applicable academic regulations and institutional
              policy before production use.
            </p>
          </div>

        </div>
      )}

      {/* SCHOLARSHIP REPORT */}

      {reportType === "Scholarships" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Scholarship Report</h2>
              <p>
                Application and approval statistics.
              </p>
            </div>

          </div>

          <div className="admin-table-wrapper">

            <table className="admin-table">

              <thead>

                <tr>
                  <th>Scholarship</th>
                  <th>Applications</th>
                  <th>Approved</th>
                  <th>Processing</th>
                  <th>Rejected</th>
                </tr>

              </thead>

              <tbody>

                {scholarshipData.map((item) => (

                  <tr key={item.name}>

                    <td>
                      <strong>
                        {item.name}
                      </strong>
                    </td>

                    <td>
                      {item.applications}
                    </td>

                    <td>
                      <span className="report-number green">
                        {item.approved}
                      </span>
                    </td>

                    <td>
                      <span className="report-number orange">
                        {item.processing}
                      </span>
                    </td>

                    <td>
                      <span className="report-number red">
                        {item.rejected}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

      {/* REQUEST REPORT */}

      {reportType === "Requests" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Requests & Certificates Report</h2>
              <p>
                Student service request statistics.
              </p>
            </div>

          </div>

          <div className="admin-table-wrapper">

            <table className="admin-table">

              <thead>

                <tr>
                  <th>Request Type</th>
                  <th>Total</th>
                  <th>Approved</th>
                  <th>Pending</th>
                  <th>Rejected</th>
                </tr>

              </thead>

              <tbody>

                {requestData.map((item) => (

                  <tr key={item.type}>

                    <td>
                      <strong>
                        {item.type}
                      </strong>
                    </td>

                    <td>
                      {item.total}
                    </td>

                    <td>
                      <span className="report-number green">
                        {item.approved}
                      </span>
                    </td>

                    <td>
                      <span className="report-number orange">
                        {item.pending}
                      </span>
                    </td>

                    <td>
                      <span className="report-number red">
                        {item.rejected}
                      </span>
                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>

        </div>
      )}

      {/* HOSTEL REPORT */}

      {reportType === "Hostel" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Hostel Analytics</h2>
              <p>
                Hostel accommodation summary.
              </p>
            </div>

          </div>

          <div className="report-card-grid">

            <div className="analytics-card">

              <div className="analytics-icon">
                🏠
              </div>

              <div className="analytics-big-number">
                42
              </div>

              <p>Total Rooms</p>

            </div>

            <div className="analytics-card">

              <div className="analytics-icon">
                🛏️
              </div>

              <div className="analytics-big-number">
                26
              </div>

              <p>Occupied Beds</p>

            </div>

            <div className="analytics-card">

              <div className="analytics-icon">
                ✓
              </div>

              <div className="analytics-big-number">
                16
              </div>

              <p>Vacant Beds</p>

            </div>

            <div className="analytics-card">

              <div className="analytics-icon">
                🛠️
              </div>

              <div className="analytics-big-number">
                3
              </div>

              <p>Open Complaints</p>

            </div>

          </div>

          <div className="report-info-box">
            <strong>Hostel report</strong>

            <p>
              These values are development/sample values.
              Production reports should be generated from
              authorized hostel records.
            </p>
          </div>

        </div>
      )}

      {/* EVENTS REPORT */}

      {reportType === "Events" && (
        <div className="admin-panel">

          <div className="admin-panel-header">

            <div>
              <h2>Events & Workshops Report</h2>
              <p>
                Institutional event activity summary.
              </p>
            </div>

          </div>

          <div className="report-card-grid">

            <div className="analytics-card">
              <div className="analytics-icon">
                🎓
              </div>

              <div className="analytics-big-number">
                12
              </div>

              <p>Total Events</p>
            </div>

            <div className="analytics-card">
              <div className="analytics-icon">
                🧑‍💻
              </div>

              <div className="analytics-big-number">
                5
              </div>

              <p>Workshops</p>
            </div>

            <div className="analytics-card">
              <div className="analytics-icon">
                🏆
              </div>

              <div className="analytics-big-number">
                2
              </div>

              <p>Hackathons</p>
            </div>

            <div className="analytics-card">
              <div className="analytics-icon">
                👩‍🎓
              </div>

              <div className="analytics-big-number">
                420
              </div>

              <p>Registrations</p>
            </div>

          </div>

        </div>
      )}

      {/* FOOTER */}

      <div className="admin-report-footer">
        <span>
          Report Period: <strong>{year}</strong>
        </span>

        <span>
          Department: <strong>{department}</strong>
        </span>

        <span>
          Generated from SHEC CampusHub
        </span>
      </div>

    </div>
  );
}

export default AdminReports;