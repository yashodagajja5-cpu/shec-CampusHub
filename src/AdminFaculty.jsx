import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminFaculty({ onBack }) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [status, setStatus] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [faculty, setFaculty] = useState([
    {
      id: 1,
      name: "Demo Faculty",
      facultyId: "FAC-DEMO-001",
      department: "CSE – AI & DS",
      designation: "Assistant Professor",
      subjects: "ADS, Java",
      email: "faculty@shec.ac.in",
      phone: "98XXXXXX11",
      status: "Active",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      facultyId: "FAC-DEMO-002",
      department: "CSE – AI",
      designation: "Associate Professor",
      subjects: "Python, AI",
      email: "priya@shec.ac.in",
      phone: "98XXXXXX22",
      status: "Active",
    },
    {
      id: 3,
      name: "Demo Faculty 03",
      facultyId: "FAC-DEMO-003",
      department: "CSE – AI & ML",
      designation: "Assistant Professor",
      subjects: "ML, DBMS",
      email: "faculty03@shec.ac.in",
      phone: "98XXXXXX33",
      status: "Active",
    },
    {
      id: 4,
      name: "Demo Faculty 04",
      facultyId: "FAC-DEMO-004",
      department: "ECE",
      designation: "Assistant Professor",
      subjects: "Networks, Signals",
      email: "faculty04@shec.ac.in",
      phone: "98XXXXXX44",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Demo Faculty 05",
      facultyId: "FAC-DEMO-005",
      department: "MCA",
      designation: "Assistant Professor",
      subjects: "Java, DBMS",
      email: "faculty05@shec.ac.in",
      phone: "98XXXXXX55",
      status: "Active",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    facultyId: "",
    department: "CSE – AI & DS",
    designation: "Assistant Professor",
    subjects: "",
    email: "",
    phone: "",
  });

  const filteredFaculty = useMemo(() => {
    return faculty.filter((member) => {
      const searchText = search.toLowerCase();

      const matchesSearch =
        member.name.toLowerCase().includes(searchText) ||
        member.facultyId.toLowerCase().includes(searchText) ||
        member.email.toLowerCase().includes(searchText);

      const matchesDepartment =
        department === "All" ||
        member.department === department;

      const matchesStatus =
        status === "All" ||
        member.status === status;

      return (
        matchesSearch &&
        matchesDepartment &&
        matchesStatus
      );
    });
  }, [faculty, search, department, status]);

  const activeFaculty = faculty.filter(
    (member) => member.status === "Active"
  ).length;

  const inactiveFaculty = faculty.filter(
    (member) => member.status === "Inactive"
  ).length;

  const departments = new Set(
    faculty.map((member) => member.department)
  ).size;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addFaculty = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.facultyId ||
      !form.email
    ) {
      alert(
        "Please fill Faculty Name, Faculty ID and Email."
      );
      return;
    }

    const newFaculty = {
      id: Date.now(),
      ...form,
      phone: form.phone || "Not updated",
      subjects: form.subjects || "Not assigned",
      status: "Active",
    };

    setFaculty([newFaculty, ...faculty]);

    setForm({
      name: "",
      facultyId: "",
      department: "CSE – AI & DS",
      designation: "Assistant Professor",
      subjects: "",
      email: "",
      phone: "",
    });

    setShowForm(false);
    alert("Faculty added successfully.");
  };

  const toggleStatus = (id) => {
    setFaculty(
      faculty.map((member) =>
        member.id === id
          ? {
              ...member,
              status:
                member.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : member
      )
    );
  };

  const deleteFaculty = (id) => {
    const confirmed = window.confirm(
      "Remove this faculty member from the demo list?"
    );

    if (!confirmed) return;

    setFaculty(
      faculty.filter((member) => member.id !== id)
    );
  };

  const editFaculty = (member) => {
    alert(
      `Edit Faculty\n\n${member.name}\n${member.facultyId}\n${member.department}\n\nFull editing will be connected during backend integration.`
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
            ADMINISTRATION • FACULTY MANAGEMENT
          </span>

          <h1>Faculty Management</h1>

          <p>
            Manage faculty profiles, departments,
            subjects and account status.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Faculty
        </button>

      </div>

      {/* SUMMARY */}

      <div className="admin-module-stats">

        <div className="admin-module-stat purple">
          <span>♙</span>
          <div>
            <small>Total Faculty</small>
            <strong>{faculty.length}</strong>
          </div>
        </div>

        <div className="admin-module-stat green">
          <span>✓</span>
          <div>
            <small>Active Faculty</small>
            <strong>{activeFaculty}</strong>
          </div>
        </div>

        <div className="admin-module-stat orange">
          <span>!</span>
          <div>
            <small>Inactive</small>
            <strong>{inactiveFaculty}</strong>
          </div>
        </div>

        <div className="admin-module-stat blue">
          <span>▣</span>
          <div>
            <small>Departments Covered</small>
            <strong>{departments}</strong>
          </div>
        </div>

      </div>

      {/* ADD FACULTY */}

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-form-title">

            <div>
              <h2>Add New Faculty</h2>
              <p>
                Create a faculty profile for the campus
                administration system.
              </p>
            </div>

            <button
              className="admin-close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

          </div>

          <form onSubmit={addFaculty}>

            <div className="admin-form-grid">

              <div>
                <label>Faculty Name *</label>

                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter faculty name"
                />
              </div>

              <div>
                <label>Faculty ID *</label>

                <input
                  name="facultyId"
                  value={form.facultyId}
                  onChange={handleChange}
                  placeholder="FAC-XXXX-001"
                />
              </div>

              <div>
                <label>Department</label>

                <select
                  name="department"
                  value={form.department}
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
                <label>Designation</label>

                <select
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                >
                  <option>Assistant Professor</option>
                  <option>Associate Professor</option>
                  <option>Professor</option>
                  <option>Head of Department</option>
                  <option>Lecturer</option>
                </select>
              </div>

              <div>
                <label>Subjects</label>

                <input
                  name="subjects"
                  value={form.subjects}
                  onChange={handleChange}
                  placeholder="Example: Java, DBMS"
                />
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
                  placeholder="faculty@shec.ac.in"
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
                Save Faculty
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
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search faculty by name, ID or email..."
          />

        </div>

        <select
          value={department}
          onChange={(e) =>
            setDepartment(e.target.value)
          }
        >
          <option value="All">
            All Departments
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
          value={status}
          onChange={(e) =>
            setStatus(e.target.value)
          }
        >
          <option value="All">All Status</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <button
          className="admin-secondary-btn"
          onClick={() => {
            setSearch("");
            setDepartment("All");
            setStatus("All");
          }}
        >
          Reset Filters
        </button>

      </div>

      {/* FACULTY TABLE */}

      <div className="admin-student-table-card">

        <div className="admin-table-header">

          <div>
            <h2>Faculty Records</h2>

            <p>
              Showing {filteredFaculty.length} of{" "}
              {faculty.length} faculty members
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
                <th>Faculty</th>
                <th>Faculty ID</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Subjects</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredFaculty.length === 0 ? (
                <tr>
                  <td
                    colSpan="7"
                    className="admin-empty"
                  >
                    No faculty records found.
                  </td>
                </tr>
              ) : (
                filteredFaculty.map((member) => (

                  <tr key={member.id}>

                    <td>

                      <div className="student-cell">

                        <div className="student-avatar faculty-avatar">
                          {member.name.charAt(0)}
                        </div>

                        <div>
                          <strong>
                            {member.name}
                          </strong>

                          <small>
                            {member.email}
                          </small>
                        </div>

                      </div>

                    </td>

                    <td>
                      <span className="roll-badge">
                        {member.facultyId}
                      </span>
                    </td>

                    <td>
                      {member.department}
                    </td>

                    <td>
                      {member.designation}
                    </td>

                    <td>
                      <span className="subject-badge">
                        {member.subjects}
                      </span>
                    </td>

                    <td>

                      <span
                        className={`student-status ${
                          member.status === "Active"
                            ? "active"
                            : "inactive"
                        }`}
                      >
                        ● {member.status}
                      </span>

                    </td>

                    <td>

                      <div className="student-actions">

                        <button
                          title="Edit"
                          onClick={() =>
                            editFaculty(member)
                          }
                        >
                          ✎
                        </button>

                        <button
                          title="Change status"
                          onClick={() =>
                            toggleStatus(member.id)
                          }
                        >
                          ⇄
                        </button>

                        <button
                          className="delete"
                          title="Delete"
                          onClick={() =>
                            deleteFaculty(member.id)
                          }
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

      {/* INFO */}

      <div className="admin-info-banner">

        <div className="admin-info-icon">
          i
        </div>

        <div>

          <strong>
            Faculty account management
          </strong>

          <p>
            Faculty login credentials should be created
            securely by the administration. Real passwords
            should never be stored in frontend code.
            Authentication will be connected during backend
            integration.
          </p>

        </div>

      </div>

    </div>
  );
}

export default AdminFaculty;