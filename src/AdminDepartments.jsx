import React, { useMemo, useState } from "react";
import "./AdminPages.css";

const initialDepartments = [
  {
    id: 1,
    name: "Computer Science & Engineering – AI",
    code: "CSE-AI",
    program: "B.Tech",
    sections: 1,
    students: 82,
    faculty: 7,
    hod: "Demo HOD",
    status: "Active",
  },
  {
    id: 2,
    name: "Computer Science & Engineering – AI & DS",
    code: "CSE-AIDS",
    program: "B.Tech",
    sections: 1,
    students: 86,
    faculty: 8,
    hod: "Demo HOD",
    status: "Active",
  },
  {
    id: 3,
    name: "Computer Science & Engineering – AI & ML",
    code: "CSE-AIML",
    program: "B.Tech",
    sections: 1,
    students: 78,
    faculty: 7,
    hod: "Demo HOD",
    status: "Active",
  },
  {
    id: 4,
    name: "Computer Science & Engineering",
    code: "CSE",
    program: "B.Tech",
    sections: 1,
    students: 74,
    faculty: 7,
    hod: "Demo HOD",
    status: "Active",
  },
  {
    id: 5,
    name: "Electronics & Communication Engineering",
    code: "ECE",
    program: "B.Tech",
    sections: 1,
    students: 68,
    faculty: 6,
    hod: "Demo HOD",
    status: "Active",
  },
  {
    id: 6,
    name: "Master of Business Administration",
    code: "MBA",
    program: "MBA",
    sections: 2,
    students: 96,
    faculty: 8,
    hod: "Demo HOD",
    status: "Active",
  },
  {
    id: 7,
    name: "Master of Computer Applications",
    code: "MCA",
    program: "MCA",
    sections: 1,
    students: 100,
    faculty: 6,
    hod: "Demo HOD",
    status: "Active",
  },
];

function AdminDepartments({ onBack }) {
  const [departments, setDepartments] = useState(initialDepartments);
  const [search, setSearch] = useState("");
  const [programFilter, setProgramFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    code: "",
    program: "B.Tech",
    sections: 1,
    students: 0,
    faculty: 0,
    hod: "",
  });

  const filteredDepartments = useMemo(() => {
    return departments.filter((dept) => {
      const matchesSearch =
        dept.name.toLowerCase().includes(search.toLowerCase()) ||
        dept.code.toLowerCase().includes(search.toLowerCase()) ||
        dept.hod.toLowerCase().includes(search.toLowerCase());

      const matchesProgram =
        programFilter === "All" || dept.program === programFilter;

      const matchesStatus =
        statusFilter === "All" || dept.status === statusFilter;

      return matchesSearch && matchesProgram && matchesStatus;
    });
  }, [departments, search, programFilter, statusFilter]);

  const totalStudents = departments.reduce(
    (sum, dept) => sum + Number(dept.students),
    0
  );

  const totalFaculty = departments.reduce(
    (sum, dept) => sum + Number(dept.faculty),
    0
  );

  const activeDepartments = departments.filter(
    (dept) => dept.status === "Active"
  ).length;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addDepartment = (e) => {
    e.preventDefault();

    if (!form.name || !form.code || !form.hod) {
      alert("Please fill all required fields.");
      return;
    }

    const newDepartment = {
      id: Date.now(),
      name: form.name,
      code: form.code.toUpperCase(),
      program: form.program,
      sections: Number(form.sections),
      students: Number(form.students),
      faculty: Number(form.faculty),
      hod: form.hod,
      status: "Active",
    };

    setDepartments((prev) => [...prev, newDepartment]);

    setForm({
      name: "",
      code: "",
      program: "B.Tech",
      sections: 1,
      students: 0,
      faculty: 0,
      hod: "",
    });

    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setDepartments((prev) =>
      prev.map((dept) =>
        dept.id === id
          ? {
              ...dept,
              status: dept.status === "Active" ? "Inactive" : "Active",
            }
          : dept
      )
    );
  };

  const deleteDepartment = (id) => {
    const confirmDelete = window.confirm(
      "Delete this demo department record?"
    );

    if (!confirmDelete) return;

    setDepartments((prev) => prev.filter((dept) => dept.id !== id));
  };

  const editDepartment = (dept) => {
    alert(
      `Edit Department\n\n${dept.name}\nCode: ${dept.code}\n\nBackend edit functionality will be connected later.`
    );
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <button className="admin-back-btn" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <h1>Departments Management</h1>

          <p>
            Manage departments, programs, sections, faculty and academic
            information.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Department
        </button>
      </div>

      <div className="admin-demo-banner">
        <strong>Demo Data:</strong> Department records shown here are sample
        data for development. Actual college records should be connected
        through the authorized admin backend.
      </div>

      <div className="admin-summary-grid">
        <div className="admin-summary-card">
          <div className="admin-summary-icon purple">🏢</div>
          <div>
            <span>Total Departments</span>
            <strong>{departments.length}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon green">✓</div>
          <div>
            <span>Active Departments</span>
            <strong>{activeDepartments}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon blue">🎓</div>
          <div>
            <span>Total Students</span>
            <strong>{totalStudents}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon orange">👨‍🏫</div>
          <div>
            <span>Total Faculty</span>
            <strong>{totalFaculty}</strong>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="admin-form-card">
          <div className="admin-section-title">
            <div>
              <h2>Add New Department</h2>
              <p>Create a department/program record.</p>
            </div>
          </div>

          <form onSubmit={addDepartment}>
            <div className="admin-form-grid">
              <div className="admin-form-group full">
                <label>Department Name *</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter department name"
                />
              </div>

              <div className="admin-form-group">
                <label>Department Code *</label>
                <input
                  type="text"
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  placeholder="Example: CSE-AI"
                />
              </div>

              <div className="admin-form-group">
                <label>Program</label>
                <select
                  name="program"
                  value={form.program}
                  onChange={handleChange}
                >
                  <option value="B.Tech">B.Tech</option>
                  <option value="MBA">MBA</option>
                  <option value="MCA">MCA</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Sections</label>
                <input
                  type="number"
                  min="1"
                  name="sections"
                  value={form.sections}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>Students</label>
                <input
                  type="number"
                  min="0"
                  name="students"
                  value={form.students}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>Faculty</label>
                <input
                  type="number"
                  min="0"
                  name="faculty"
                  value={form.faculty}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>HOD Name *</label>
                <input
                  type="text"
                  name="hod"
                  value={form.hod}
                  onChange={handleChange}
                  placeholder="Enter HOD name"
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

              <button type="submit" className="admin-primary-btn">
                Add Department
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-content-card">
        <div className="admin-section-title">
          <div>
            <h2>Department Directory</h2>
            <p>View and manage all academic programs.</p>
          </div>
        </div>

        <div className="admin-filter-row">
          <input
            className="admin-search"
            type="text"
            placeholder="Search department, code or HOD..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={programFilter}
            onChange={(e) => setProgramFilter(e.target.value)}
          >
            <option value="All">All Programs</option>
            <option value="B.Tech">B.Tech</option>
            <option value="MBA">MBA</option>
            <option value="MCA">MCA</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="All">All Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Department</th>
                <th>Code</th>
                <th>Program</th>
                <th>Sections</th>
                <th>Students</th>
                <th>Faculty</th>
                <th>HOD</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredDepartments.length > 0 ? (
                filteredDepartments.map((dept) => (
                  <tr key={dept.id}>
                    <td>
                      <div className="admin-name-cell">
                        <div className="admin-avatar">
                          {dept.code.slice(0, 2)}
                        </div>

                        <div>
                          <strong>{dept.name}</strong>
                          <span>Academic Department</span>
                        </div>
                      </div>
                    </td>

                    <td>
                      <span className="admin-code-badge">{dept.code}</span>
                    </td>

                    <td>{dept.program}</td>

                    <td>{dept.sections}</td>

                    <td>{dept.students}</td>

                    <td>{dept.faculty}</td>

                    <td>{dept.hod}</td>

                    <td>
                      <span
                        className={`admin-status ${
                          dept.status === "Active"
                            ? "status-active"
                            : "status-inactive"
                        }`}
                      >
                        {dept.status}
                      </span>
                    </td>

                    <td>
                      <div className="admin-action-buttons">
                        <button
                          className="admin-edit-btn"
                          onClick={() => editDepartment(dept)}
                        >
                          Edit
                        </button>

                        <button
                          className="admin-toggle-btn"
                          onClick={() => toggleStatus(dept.id)}
                        >
                          {dept.status === "Active"
                            ? "Disable"
                            : "Activate"}
                        </button>

                        <button
                          className="admin-delete-btn"
                          onClick={() => deleteDepartment(dept.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="9" className="admin-empty">
                    No departments found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="admin-table-footer">
          Showing {filteredDepartments.length} of {departments.length}{" "}
          departments
        </div>
      </div>
    </div>
  );
}

export default AdminDepartments;