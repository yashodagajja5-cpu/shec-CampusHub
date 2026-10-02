import React, { useState } from "react";
import "./HODPages.css";

function HODFaculty({ onBack }) {
  const [search, setSearch] = useState("");
  const [department, setDepartment] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [facultyList, setFacultyList] = useState([
    {
      id: 1,
      name: "Dr. Demo Faculty",
      facultyId: "FAC-DEMO-001",
      department: "CSE – AI & DS",
      designation: "Assistant Professor",
      subject: "Advanced Data Structures",
      experience: "5 Years",
      status: "Active",
    },
    {
      id: 2,
      name: "Demo Faculty 02",
      facultyId: "FAC-DEMO-002",
      department: "CSE – AI & DS",
      designation: "Assistant Professor",
      subject: "Java Programming",
      experience: "4 Years",
      status: "Active",
    },
    {
      id: 3,
      name: "Demo Faculty 03",
      facultyId: "FAC-DEMO-003",
      department: "CSE – AI",
      designation: "Assistant Professor",
      subject: "Artificial Intelligence",
      experience: "6 Years",
      status: "Active",
    },
    {
      id: 4,
      name: "Demo Faculty 04",
      facultyId: "FAC-DEMO-004",
      department: "CSE General",
      designation: "Assistant Professor",
      subject: "Computer Networks",
      experience: "3 Years",
      status: "Active",
    },
    {
      id: 5,
      name: "Demo Faculty 05",
      facultyId: "FAC-DEMO-005",
      department: "ECE",
      designation: "Assistant Professor",
      subject: "Digital Electronics",
      experience: "5 Years",
      status: "Active",
    },
    {
      id: 6,
      name: "Demo Faculty 06",
      facultyId: "FAC-DEMO-006",
      department: "MBA",
      designation: "Associate Professor",
      subject: "Management Studies",
      experience: "8 Years",
      status: "Active",
    },
    {
      id: 7,
      name: "Demo Faculty 07",
      facultyId: "FAC-DEMO-007",
      department: "MCA",
      designation: "Assistant Professor",
      subject: "Database Management",
      experience: "4 Years",
      status: "Active",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    facultyId: "",
    department: "CSE – AI & DS",
    designation: "Assistant Professor",
    subject: "",
    experience: "",
  });

  const filteredFaculty = facultyList.filter((faculty) => {
    const matchesSearch =
      `${faculty.name} ${faculty.facultyId} ${faculty.subject}`
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesDepartment =
      department === "All" ||
      faculty.department === department;

    return matchesSearch && matchesDepartment;
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addFaculty = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.facultyId.trim() ||
      !form.subject.trim()
    ) {
      alert("Please fill all required faculty details.");
      return;
    }

    const newFaculty = {
      id: Date.now(),
      name: form.name,
      facultyId: form.facultyId,
      department: form.department,
      designation: form.designation,
      subject: form.subject,
      experience: form.experience || "Not Updated",
      status: "Active",
    };

    setFacultyList([newFaculty, ...facultyList]);

    setForm({
      name: "",
      facultyId: "",
      department: "CSE – AI & DS",
      designation: "Assistant Professor",
      subject: "",
      experience: "",
    });

    setShowForm(false);

    alert("Faculty added successfully.");
  };

  const toggleStatus = (id) => {
    setFacultyList(
      facultyList.map((faculty) =>
        faculty.id === id
          ? {
              ...faculty,
              status:
                faculty.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : faculty
      )
    );
  };

  const totalActive = facultyList.filter(
    (faculty) => faculty.status === "Active"
  ).length;

  const totalInactive = facultyList.filter(
    (faculty) => faculty.status === "Inactive"
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

          <h1>Faculty Management</h1>

          <p>
            View and manage faculty information across departments.
          </p>
        </div>

        <button
          className="hod-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Faculty
        </button>

      </div>

      {/* SUMMARY */}

      <div className="hod-summary-grid">

        <div className="hod-summary-card">
          <div className="hod-summary-icon">👩‍🏫</div>
          <div>
            <span>Total Faculty</span>
            <strong>{facultyList.length}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">✓</div>
          <div>
            <span>Active Faculty</span>
            <strong>{totalActive}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">⏸</div>
          <div>
            <span>Inactive</span>
            <strong>{totalInactive}</strong>
          </div>
        </div>

        <div className="hod-summary-card">
          <div className="hod-summary-icon">🏢</div>
          <div>
            <span>Departments</span>
            <strong>7</strong>
          </div>
        </div>

      </div>

      {/* ADD FACULTY FORM */}

      {showForm && (
        <div className="hod-form-card">

          <div className="hod-form-header">

            <div>
              <h2>Add Faculty</h2>
              <p>
                Enter faculty information.
              </p>
            </div>

            <button
              className="hod-close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

          </div>

          <form onSubmit={addFaculty}>

            <div className="hod-form-grid">

              <div className="hod-form-group">
                <label>Faculty Name *</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter faculty name"
                />
              </div>

              <div className="hod-form-group">
                <label>Faculty ID *</label>
                <input
                  name="facultyId"
                  value={form.facultyId}
                  onChange={handleChange}
                  placeholder="Example: FAC-001"
                />
              </div>

              <div className="hod-form-group">
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

              <div className="hod-form-group">
                <label>Designation</label>
                <select
                  name="designation"
                  value={form.designation}
                  onChange={handleChange}
                >
                  <option>Assistant Professor</option>
                  <option>Associate Professor</option>
                  <option>Professor</option>
                  <option>Visiting Faculty</option>
                </select>
              </div>

              <div className="hod-form-group">
                <label>Subject *</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                />
              </div>

              <div className="hod-form-group">
                <label>Experience</label>
                <input
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  placeholder="Example: 5 Years"
                />
              </div>

            </div>

            <div className="hod-form-actions">

              <button
                type="button"
                className="hod-secondary-btn"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>

              <button
                type="submit"
                className="hod-primary-btn"
              >
                Add Faculty
              </button>

            </div>

          </form>

        </div>
      )}

      {/* FILTERS */}

      <div className="hod-filter-card">

        <div>
          <h2>Faculty Directory</h2>
          <p>
            Search and filter faculty members.
          </p>
        </div>

        <div className="hod-filter-controls">

          <input
            type="text"
            className="hod-search-input"
            placeholder="Search faculty..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select
            className="hod-select-input"
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

        </div>

      </div>

      {/* FACULTY TABLE */}

      <div className="hod-table-card">

        <div className="hod-table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Faculty</th>
                <th>Department</th>
                <th>Designation</th>
                <th>Subject</th>
                <th>Experience</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredFaculty.map((faculty) => (

                <tr key={faculty.id}>

                  <td>
                    <div className="hod-faculty-cell">

                      <div className="hod-faculty-avatar">
                        {faculty.name
                          .split(" ")
                          .map((word) => word[0])
                          .slice(0, 2)
                          .join("")}
                      </div>

                      <div>
                        <strong>
                          {faculty.name}
                        </strong>

                        <span>
                          {faculty.facultyId}
                        </span>
                      </div>

                    </div>
                  </td>

                  <td>
                    {faculty.department}
                  </td>

                  <td>
                    {faculty.designation}
                  </td>

                  <td>
                    {faculty.subject}
                  </td>

                  <td>
                    {faculty.experience}
                  </td>

                  <td>

                    <span
                      className={
                        faculty.status === "Active"
                          ? "hod-status active"
                          : "hod-status inactive"
                      }
                    >
                      {faculty.status}
                    </span>

                  </td>

                  <td>

                    <button
                      className="hod-action-btn"
                      onClick={() =>
                        toggleStatus(faculty.id)
                      }
                    >
                      {faculty.status === "Active"
                        ? "Deactivate"
                        : "Activate"}
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

      {filteredFaculty.length === 0 && (
        <div className="hod-empty-state">
          <div>🔎</div>
          <h3>No faculty found</h3>
          <p>
            Try changing the search or department filter.
          </p>
        </div>
      )}

      {/* INFO */}

      <div className="hod-info-note">

        <span>ℹ️</span>

        <p>
          Faculty information displayed here is demo data for
          the CampusHub interface. Final faculty records,
          departments, subjects and account status should be
          maintained by authorized college administration.
        </p>

      </div>

    </div>
  );
}

export default HODFaculty;