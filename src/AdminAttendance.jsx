import React, { useMemo, useState } from "react";
import "./AdminPages.css";

const initialAttendance = [
  {
    id: 1,
    name: "Yashii",
    roll: "DEMO2026AI001",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    present: 86,
    total: 100,
  },
  {
    id: 2,
    name: "Rihana",
    roll: "DEMO2026AI002",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    present: 94,
    total: 100,
  },
  {
    id: 3,
    name: "Hema",
    roll: "DEMO2026AI003",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    present: 78,
    total: 100,
  },
  {
    id: 4,
    name: "Mohitha",
    roll: "DEMO2026AI004",
    branch: "CSE – AI & DS",
    semester: "2-1",
    section: "A",
    present: 72,
    total: 100,
  },
  {
    id: 5,
    name: "Student Demo 05",
    roll: "DEMO2026AI005",
    branch: "CSE – AI",
    semester: "2-1",
    section: "A",
    present: 89,
    total: 100,
  },
  {
    id: 6,
    name: "Student Demo 06",
    roll: "DEMO2026ECE001",
    branch: "ECE",
    semester: "2-1",
    section: "A",
    present: 68,
    total: 100,
  },
  {
    id: 7,
    name: "Student Demo 07",
    roll: "DEMO2026ECE002",
    branch: "ECE",
    semester: "2-1",
    section: "A",
    present: 91,
    total: 100,
  },
];

function AdminAttendance({ onBack }) {
  const [attendance] = useState(initialAttendance);

  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");
  const [semesterFilter, setSemesterFilter] = useState("All");
  const [sectionFilter, setSectionFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [selectedDate, setSelectedDate] = useState("2026-10-01");

  const getPercentage = (student) => {
    if (!student.total) return 0;

    return Math.round(
      (student.present / student.total) * 100
    );
  };

  const getStatus = (percentage) => {
    if (percentage < 75) return "Low";
    if (percentage < 85) return "Needs Attention";
    return "Good";
  };

  const filteredAttendance = useMemo(() => {
    return attendance.filter((student) => {
      const percentage = getPercentage(student);

      const matchesSearch =
        student.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        student.roll
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesBranch =
        branchFilter === "All" ||
        student.branch === branchFilter;

      const matchesSemester =
        semesterFilter === "All" ||
        student.semester === semesterFilter;

      const matchesSection =
        sectionFilter === "All" ||
        student.section === sectionFilter;

      const matchesStatus =
        statusFilter === "All" ||
        getStatus(percentage) === statusFilter;

      return (
        matchesSearch &&
        matchesBranch &&
        matchesSemester &&
        matchesSection &&
        matchesStatus
      );
    });
  }, [
    attendance,
    search,
    branchFilter,
    semesterFilter,
    sectionFilter,
    statusFilter,
  ]);

  const totalStudents = attendance.length;

  const averageAttendance =
    totalStudents > 0
      ? attendance.reduce(
          (sum, student) =>
            sum + getPercentage(student),
          0
        ) / totalStudents
      : 0;

  const lowAttendance = attendance.filter(
    (student) => getPercentage(student) < 75
  ).length;

  const goodAttendance = attendance.filter(
    (student) => getPercentage(student) >= 85
  ).length;

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

          <h1>Attendance Management</h1>

          <p>
            Monitor attendance across branches,
            semesters and sections.
          </p>

        </div>

        <div className="admin-date-box">

          <label>Attendance Date</label>

          <input
            type="date"
            value={selectedDate}
            onChange={(e) =>
              setSelectedDate(e.target.value)
            }
          />

        </div>

      </div>

      {/* DEMO NOTICE */}

      <div className="admin-demo-banner">

        <strong>Demo Data:</strong>{" "}
        Attendance records shown here are sample
        development records. Final attendance should
        be connected to authorized faculty/admin data.

      </div>

      {/* SUMMARY */}

      <div className="admin-summary-grid">

        <div className="admin-summary-card">

          <div className="admin-summary-icon purple">
            🎓
          </div>

          <div>
            <span>Total Students</span>
            <strong>{totalStudents}</strong>
            <small>Demo records</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon blue">
            📊
          </div>

          <div>
            <span>Average Attendance</span>
            <strong>
              {averageAttendance.toFixed(1)}%
            </strong>
            <small>Demo calculation</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon green">
            ✓
          </div>

          <div>
            <span>Good Attendance</span>
            <strong>{goodAttendance}</strong>
            <small>85% and above</small>
          </div>

        </div>

        <div className="admin-summary-card">

          <div className="admin-summary-icon orange">
            ⚠
          </div>

          <div>
            <span>Low Attendance</span>
            <strong>{lowAttendance}</strong>
            <small>Below 75%</small>
          </div>

        </div>

      </div>

      {/* FILTERS */}

      <div className="admin-content-card">

        <div className="admin-section-title">

          <div>

            <h2>Attendance Filters</h2>

            <p>
              Filter attendance records by academic
              information and attendance status.
            </p>

          </div>

        </div>

        <div className="admin-filter-row">

          <input
            className="admin-search"
            type="text"
            placeholder="Search student or roll number..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            value={branchFilter}
            onChange={(e) =>
              setBranchFilter(e.target.value)
            }
          >
            <option value="All">
              All Branches
            </option>
            <option>CSE – AI</option>
            <option>CSE – AI & DS</option>
            <option>CSE – AI & ML</option>
            <option>CSE General</option>
            <option>ECE</option>
            <option>MBA</option>
            <option>MCA</option>
          </select>

          <select
            value={semesterFilter}
            onChange={(e) =>
              setSemesterFilter(e.target.value)
            }
          >
            <option value="All">
              All Semesters
            </option>
            <option>1-1</option>
            <option>1-2</option>
            <option>2-1</option>
            <option>2-2</option>
            <option>3-1</option>
            <option>3-2</option>
            <option>4-1</option>
            <option>4-2</option>
          </select>

          <select
            value={sectionFilter}
            onChange={(e) =>
              setSectionFilter(e.target.value)
            }
          >
            <option value="All">
              All Sections
            </option>
            <option>A</option>
            <option>B</option>
            <option>C</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) =>
              setStatusFilter(e.target.value)
            }
          >
            <option value="All">
              All Status
            </option>
            <option>Good</option>
            <option>Needs Attention</option>
            <option>Low</option>
          </select>

        </div>

      </div>

      {/* ATTENDANCE TABLE */}

      <div className="admin-content-card">

        <div className="admin-card-header">

          <div>

            <h2>Student Attendance</h2>

            <p>
              Attendance for {selectedDate}
            </p>

          </div>

          <span className="admin-code-badge">
            {filteredAttendance.length} Records
          </span>

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>

              <tr>
                <th>Student</th>
                <th>Roll Number</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Section</th>
                <th>Present</th>
                <th>Absent</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>

            </thead>

            <tbody>

              {filteredAttendance.length > 0 ? (

                filteredAttendance.map((student) => {

                  const percentage =
                    getPercentage(student);

                  const absent =
                    student.total -
                    student.present;

                  const status =
                    getStatus(percentage);

                  return (
                    <tr key={student.id}>

                      <td>

                        <div className="admin-name-cell">

                          <div className="student-avatar">
                            {student.name
                              .charAt(0)
                              .toUpperCase()}
                          </div>

                          <div>

                            <strong>
                              {student.name}
                            </strong>

                            <span>
                              Student
                            </span>

                          </div>

                        </div>

                      </td>

                      <td>
                        <span className="admin-code-badge">
                          {student.roll}
                        </span>
                      </td>

                      <td>
                        {student.branch}
                      </td>

                      <td>
                        {student.semester}
                      </td>

                      <td>
                        {student.section}
                      </td>

                      <td>
                        <span className="attendance-present">
                          {student.present}
                        </span>
                      </td>

                      <td>
                        <span className="attendance-absent">
                          {absent}
                        </span>
                      </td>

                      <td>

                        <div className="attendance-percentage">

                          <strong>
                            {percentage}%
                          </strong>

                          <div className="attendance-bar">

                            <div
                              className="attendance-bar-fill"
                              style={{
                                width: `${percentage}%`,
                              }}
                            />

                          </div>

                        </div>

                      </td>

                      <td>

                        <span
                          className={`attendance-status ${
                            status
                              .toLowerCase()
                              .replaceAll(" ", "-")
                          }`}
                        >
                          {status}
                        </span>

                      </td>

                    </tr>
                  );
                })

              ) : (

                <tr>

                  <td
                    colSpan="9"
                    className="admin-empty"
                  >
                    No attendance records found.
                  </td>

                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="admin-table-footer">

          Showing {filteredAttendance.length} of{" "}
          {attendance.length} demo attendance records.

        </div>

      </div>

      {/* LOW ATTENDANCE INFORMATION */}

      <div className="admin-content-card attendance-info-card">

        <div className="attendance-info-icon">
          ⚠
        </div>

        <div>

          <h3>
            Low Attendance Monitoring
          </h3>

          <p>
            Students below the configured attendance
            threshold can be identified here for
            academic follow-up. The final threshold and
            condonation rules should be configured
            according to the institution's current
            academic regulations.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminAttendance;