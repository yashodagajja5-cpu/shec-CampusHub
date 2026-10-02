import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminStudents({ onBack }) {
  const [search, setSearch] = useState("");
  const [branch, setBranch] = useState("All");
  const [year, setYear] = useState("All");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Yashii",
      roll: "DEMO2026AI001",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      section: "A",
      phone: "98XXXXXX21",
      email: "student@shec.ac.in",
      attendance: 86,
      status: "Active",
    },
    {
      id: 2,
      name: "Rihana",
      roll: "DEMO2026AI002",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      section: "A",
      phone: "98XXXXXX45",
      email: "rihana@shec.ac.in",
      attendance: 91,
      status: "Active",
    },
    {
      id: 3,
      name: "Hema",
      roll: "DEMO2026AI003",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      section: "A",
      phone: "98XXXXXX67",
      email: "hema@shec.ac.in",
      attendance: 82,
      status: "Active",
    },
    {
      id: 4,
      name: "Mohitha",
      roll: "DEMO2026AI004",
      branch: "CSE – AI",
      year: "2nd Year",
      section: "A",
      phone: "98XXXXXX82",
      email: "mohitha@shec.ac.in",
      attendance: 78,
      status: "Active",
    },
    {
      id: 5,
      name: "Manu",
      roll: "DEMO2026AI005",
      branch: "CSE General",
      year: "2nd Year",
      section: "A",
      phone: "98XXXXXX34",
      email: "manu@shec.ac.in",
      attendance: 88,
      status: "Active",
    },
    {
      id: 6,
      name: "Sravya",
      roll: "DEMO2026AI006",
      branch: "ECE",
      year: "2nd Year",
      section: "A",
      phone: "98XXXXXX56",
      email: "sravya@shec.ac.in",
      attendance: 74,
      status: "Inactive",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    roll: "",
    branch: "CSE – AI & DS",
    year: "2nd Year",
    section: "A",
    phone: "",
    email: "",
  });

  const filteredStudents = useMemo(() => {
    return students.filter((student) => {
      const matchesSearch =
        student.name.toLowerCase().includes(search.toLowerCase()) ||
        student.roll.toLowerCase().includes(search.toLowerCase()) ||
        student.email.toLowerCase().includes(search.toLowerCase());

      const matchesBranch =
        branch === "All" || student.branch === branch;

      const matchesYear =
        year === "All" || student.year === year;

      const matchesStatus =
        status === "All" || student.status === status;

      return (
        matchesSearch &&
        matchesBranch &&
        matchesYear &&
        matchesStatus
      );
    });
  }, [students, search, branch, year, status]);

  const activeCount = students.filter(
    (student) => student.status === "Active"
  ).length;

  const inactiveCount = students.filter(
    (student) => student.status === "Inactive"
  ).length;

  const averageAttendance =
    students.length === 0
      ? 0
      : Math.round(
          students.reduce(
            (sum, student) => sum + student.attendance,
            0
          ) / students.length
        );

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addStudent = (e) => {
    e.preventDefault();

    if (!form.name || !form.roll || !form.email) {
      alert("Please fill Name, Roll Number and Email.");
      return;
    }

    const newStudent = {
      id: Date.now(),
      ...form,
      phone: form.phone || "Not updated",
      attendance: 0,
      status: "Active",
    };

    setStudents([newStudent, ...students]);

    setForm({
      name: "",
      roll: "",
      branch: "CSE – AI & DS",
      year: "2nd Year",
      section: "A",
      phone: "",
      email: "",
    });

    setShowForm(false);
    alert("Student added successfully.");
  };

  const toggleStatus = (id) => {
    setStudents(
      students.map((student) =>
        student.id === id
          ? {
              ...student,
              status:
                student.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : student
      )
    );
  };

  const deleteStudent = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this student from the demo list?"
    );

    if (!confirmed) return;

    setStudents(
      students.filter((student) => student.id !== id)
    );
  };

  const editStudent = (student) => {
    alert(
      `Edit Student\n\nName: ${student.name}\nRoll Number: ${student.roll}\n\nFull editing will be connected to the backend in the integration phase.`
    );
  };

  return (
    <div className="admin-page">

      {/* HEADER */}

      <div className="admin-module-header">

        <div>
          <button
            className="admin-back-btn"
            onClick={onBack}
          >
            ← Back to Dashboard
          </button>

          <span className="admin-module-label">
            ADMINISTRATION • STUDENT MANAGEMENT
          </span>

          <h1>Student Management</h1>

          <p>
            Add, search, manage and monitor student records
            across all departments.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Student
        </button>

      </div>

      {/* SUMMARY */}

      <div className="admin-module-stats">

        <div className="admin-module-stat purple">
          <span>♙</span>
          <div>
            <small>Total Students</small>
            <strong>{students.length}</strong>
          </div>
        </div>

        <div className="admin-module-stat green">
          <span>✓</span>
          <div>
            <small>Active Students</small>
            <strong>{activeCount}</strong>
          </div>
        </div>

        <div className="admin-module-stat orange">
          <span>!</span>
          <div>
            <small>Inactive Students</small>
            <strong>{inactiveCount}</strong>
          </div>
        </div>

        <div className="admin-module-stat blue">
          <span>%</span>
          <div>
            <small>Average Attendance</small>
            <strong>{averageAttendance}%</strong>
          </div>
        </div>

      </div>

      {/* ADD FORM */}

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-form-title">
            <div>
              <h2>Add New Student</h2>
              <p>
                Enter the student's basic academic and
                contact information.
              </p>
            </div>

            <button
              className="admin-close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>
          </div>

          <form onSubmit={addStudent}>

            <div className="admin-form-grid">

              <div>
                <label>Student Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter student name"
                />
              </div>

              <div>
                <label>Roll Number *</label>
                <input
                  name="roll"
                  value={form.roll}
                  onChange={handleChange}
                  placeholder="Enter roll number"
                />
              </div>

              <div>
                <label>Branch</label>
                <select
                  name="branch"
                  value={form.branch}
                  onChange={handleChange}
                >
                  <option>CSE – AI</option>
                  <option>CSE – AI & DS</option>
                  <option>CSE – AI & ML</option>
                  <option>CSE General</option>
                  <option>ECE</option>
                  <option>MBA</option>
                  <option>MCA</option>
                </select>
              </div>

              <div>
                <label>Year</label>
                <select
                  name="year"
                  value={form.year}
                  onChange={handleChange}
                >
                  <option>1st Year</option>
                  <option>2nd Year</option>
                  <option>3rd Year</option>
                  <option>4th Year</option>
                </select>
              </div>

              <div>
                <label>Section</label>
                <select
                  name="section"
                  value={form.section}
                  onChange={handleChange}
                >
                  <option>A</option>
                  <option>B</option>
                  <option>C</option>
                  <option>D</option>
                </select>
              </div>

              <div>
                <label>Phone</label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                />
              </div>

              <div className="admin-form-full">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="student@shec.ac.in"
                />
              </div>

            </div>

            <div className="admin-form-actions">

              <button
                type="button"
                className="admin-secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="admin-primary-btn"
              >
                Save Student
              </button>

            </div>

          </form>

        </div>
      )}

      {/* FILTERS */}

      <div className="admin-filter-card">

        <div className="admin-search-box">
          <span>⌕</span>
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, roll number or email..."
          />
        </div>

        <select
          value={branch}
          onChange={(e) => setBranch(e.target.value)}
        >
          <option value="All">All Branches</option>
          <option>CSE – AI</option>
          <option>CSE – AI & DS</option>
          <option>CSE – AI & ML</option>
          <option>CSE General</option>
          <option>ECE</option>
          <option>MBA</option>
          <option>MCA</option>
        </select>

        <select
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          <option value="All">All Years</option>
          <option>1st Year</option>
          <option>2nd Year</option>
          <option>3rd Year</option>
          <option>4th Year</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="All">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

      </div>

      {/* TABLE */}

      <div className="admin-student-table-card">

        <div className="admin-table-header">

          <div>
            <h2>Student Records</h2>
            <p>
              Showing {filteredStudents.length} of{" "}
              {students.length} students
            </p>
          </div>

          <span className="admin-demo-badge">
            DEMO DATA
          </span>

        </div>

        <div className="admin-table-scroll">

          <table className="admin-student-table">

            <thead>
              <tr>
                <th>Student</th>
                <th>Roll Number</th>
                <th>Branch</th>
                <th>Year / Sec</th>
                <th>Attendance</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="admin-empty"
                  >
                    No students found.
                  </td>
                </tr>
              ) : (
                filteredStudents.map((student) => (

                  <tr key={student.id}>

                    <td>

                      <div className="student-cell">

                        <div className="student-avatar">
                          {student.name.charAt(0)}
                        </div>

                        <div>
                          <strong>{student.name}</strong>
                          <small>{student.email}</small>
                        </div>

                      </div>

                    </td>

                    <td>
                      <span className="roll-badge">
                        {student.roll}
                      </span>
                    </td>

                    <td>{student.branch}</td>

                    <td>
                      {student.year}
                      <span className="section-text">
                        {" "}• {student.section}
                      </span>
                    </td>

                    <td>

                      <div className="student-attendance">

                        <div>
                          <span
                            style={{
                              width: `${student.attendance}%`,
                            }}
                          ></span>
                        </div>

                        <b>{student.attendance}%</b>

                      </div>

                    </td>

                    <td>

                      <span
                        className={`student-status ${
                          student.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        ● {student.status}
                      </span>

                    </td>

                    <td>

                      <div className="student-actions">

                        <button
                          onClick={() =>
                            editStudent(student)
                          }
                          title="Edit"
                        >
                          ✎
                        </button>

                        <button
                          onClick={() =>
                            toggleStatus(student.id)
                          }
                          title="Change status"
                        >
                          ⇄
                        </button>

                        <button
                          className="delete"
                          onClick={() =>
                            deleteStudent(student.id)
                          }
                          title="Delete"
                        >
                          🗑
                        </button>

                      </div>

                    </td>

                  </tr>

                ))
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* INFORMATION */}

      <div className="admin-info-banner">

        <div className="admin-info-icon">i</div>

        <div>
          <strong>Student Management</strong>
          <p>
            This version uses demo data and local state.
            Real student records, authentication, database
            storage and secure role-based access will be
            connected during the backend integration phase.
          </p>
        </div>

      </div>

    </div>
  );
}

export default AdminStudents;