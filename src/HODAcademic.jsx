import React, { useState } from "react";
import "./HODPages.css";

function HODAcademic({ onBack }) {
  const [branch, setBranch] = useState("All");
  const [year, setYear] = useState("All");

  const academicData = [
    {
      id: 1,
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 34,
      attendance: 86,
      status: "Active",
    },
    {
      id: 2,
      branch: "CSE – AI & DS",
      year: "2nd Year",
      semester: "2-1",
      section: "B",
      students: 34,
      attendance: 84,
      status: "Active",
    },
    {
      id: 3,
      branch: "CSE – AI",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 36,
      attendance: 87,
      status: "Active",
    },
    {
      id: 4,
      branch: "CSE – AI & ML",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 33,
      attendance: 84,
      status: "Active",
    },
    {
      id: 5,
      branch: "CSE General",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 35,
      attendance: 88,
      status: "Active",
    },
    {
      id: 6,
      branch: "ECE",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 30,
      attendance: 85,
      status: "Active",
    },
    {
      id: 7,
      branch: "MBA",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 41,
      attendance: 89,
      status: "Active",
    },
    {
      id: 8,
      branch: "MCA",
      year: "2nd Year",
      semester: "2-1",
      section: "A",
      students: 33,
      attendance: 86,
      status: "Active",
    },
  ];

  const filteredData = academicData.filter((item) => {
    const branchMatch =
      branch === "All" || item.branch === branch;

    const yearMatch =
      year === "All" || item.year === year;

    return branchMatch && yearMatch;
  });

  const totalStudents = filteredData.reduce(
    (sum, item) => sum + item.students,
    0
  );

  const averageAttendance =
    filteredData.length > 0
      ? Math.round(
          filteredData.reduce(
            (sum, item) => sum + item.attendance,
            0
          ) / filteredData.length
        )
      : 0;

  const lowAttendanceClasses = filteredData.filter(
    (item) => item.attendance < 75
  ).length;

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

          <h1>Academic Overview</h1>

          <p>
            Monitor student batches, sections and academic status.
          </p>
        </div>

      </div>

      {/* SUMMARY */}

      <div className="hod-summary-grid">

        <div className="hod-summary-card">
          <div className="hod-summary-icon">🎓</div>

          <div>
            <span>Students</span>
            <strong>{totalStudents}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">📚</div>

          <div>
            <span>Classes</span>
            <strong>{filteredData.length}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">📊</div>

          <div>
            <span>Avg. Attendance</span>
            <strong>{averageAttendance}%</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">⚠️</div>

          <div>
            <span>Attention Required</span>
            <strong>{lowAttendanceClasses}</strong>
          </div>
        </div>

      </div>

      {/* FILTERS */}

      <div className="hod-filter-card">

        <div>
          <h2>Academic Records</h2>

          <p>
            Filter academic information by branch and year.
          </p>
        </div>

        <div className="hod-filter-controls">

          <select
            className="hod-select-input"
            value={branch}
            onChange={(e) =>
              setBranch(e.target.value)
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
            className="hod-select-input"
            value={year}
            onChange={(e) =>
              setYear(e.target.value)
            }
          >
            <option value="All">
              All Years
            </option>

            <option>1st Year</option>
            <option>2nd Year</option>
          </select>

        </div>

      </div>

      {/* ACADEMIC TABLE */}

      <div className="hod-table-card">

        <div className="hod-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Branch</th>
                <th>Year</th>
                <th>Semester</th>
                <th>Section</th>
                <th>Students</th>
                <th>Attendance</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>

              {filteredData.map((item) => (

                <tr key={item.id}>

                  <td>
                    <strong>
                      {item.branch}
                    </strong>
                  </td>

                  <td>
                    {item.year}
                  </td>

                  <td>
                    {item.semester}
                  </td>

                  <td>
                    {item.section}
                  </td>

                  <td>
                    {item.students}
                  </td>

                  <td>

                    <div
                      style={{
                        minWidth: "100px",
                      }}
                    >

                      <div
                        style={{
                          display: "flex",
                          justifyContent:
                            "space-between",
                          marginBottom: "5px",
                          fontSize: "8px",
                        }}
                      >
                        <span>
                          Attendance
                        </span>

                        <strong>
                          {item.attendance}%
                        </strong>
                      </div>

                      <div
                        style={{
                          height: "5px",
                          borderRadius: "10px",
                          background: "#eeeaf3",
                          overflow: "hidden",
                        }}
                      >
                        <div
                          style={{
                            width: `${item.attendance}%`,
                            height: "100%",
                            borderRadius: "10px",
                            background:
                              item.attendance < 75
                                ? "#c66a76"
                                : "#7655cf",
                          }}
                        ></div>
                      </div>

                    </div>

                  </td>

                  <td>

                    <span className="hod-status active">
                      {item.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {filteredData.length === 0 && (
        <div className="hod-empty-state">

          <div>🔎</div>

          <h3>
            No academic records found
          </h3>

          <p>
            Try changing the selected filters.
          </p>

        </div>
      )}

      {/* ACADEMIC INFORMATION */}

      <div className="hod-info-note">

        <span>ℹ️</span>

        <p>
          Academic counts and attendance shown here are demo
          records for development. In the final system, these
          values will be retrieved from authorized college
          academic records.
        </p>

      </div>

    </div>
  );
}

export default HODAcademic;