import React, { useMemo, useState } from "react";
import "./AdminPages.css";

const initialSubjects = [
  {
    id: 1,
    code: "ADS301",
    name: "Advanced Data Structures",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 2,
    code: "JAVA302",
    name: "Java Programming",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 3,
    code: "DBMS303",
    name: "Database Management Systems",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 4,
    code: "CN304",
    name: "Computer Networks",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 5,
    code: "MATH305",
    name: "Engineering Mathematics",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 6,
    code: "ENG306",
    name: "English Communication",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Skill",
    credits: 2,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 7,
    code: "AI401",
    name: "Artificial Intelligence",
    branch: "CSE – AI",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
  {
    id: 8,
    code: "ECE401",
    name: "Digital Electronics",
    branch: "ECE",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "Demo Faculty",
    status: "Active",
  },
];

function AdminSubjects({ onBack }) {
  const [subjects, setSubjects] = useState(initialSubjects);

  const [search, setSearch] = useState("");
  const [branchFilter, setBranchFilter] = useState("All");
  const [semesterFilter, setSemesterFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);

  const [form, setForm] = useState({
    code: "",
    name: "",
    branch: "CSE – AI & DS",
    semester: "2-1",
    type: "Core",
    credits: 3,
    faculty: "",
  });

  const filteredSubjects = useMemo(() => {
    return subjects.filter((subject) => {
      const matchesSearch =
        subject.code.toLowerCase().includes(search.toLowerCase()) ||
        subject.name.toLowerCase().includes(search.toLowerCase()) ||
        subject.faculty.toLowerCase().includes(search.toLowerCase());

      const matchesBranch =
        branchFilter === "All" || subject.branch === branchFilter;

      const matchesSemester =
        semesterFilter === "All" || subject.semester === semesterFilter;

      const matchesType =
        typeFilter === "All" || subject.type === typeFilter;

      return (
        matchesSearch &&
        matchesBranch &&
        matchesSemester &&
        matchesType
      );
    });
  }, [subjects, search, branchFilter, semesterFilter, typeFilter]);

  const totalCredits = subjects.reduce(
    (sum, subject) => sum + Number(subject.credits),
    0
  );

  const activeSubjects = subjects.filter(
    (subject) => subject.status === "Active"
  ).length;

  const branchesCovered = new Set(
    subjects.map((subject) => subject.branch)
  ).size;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addSubject = (e) => {
    e.preventDefault();

    if (!form.code || !form.name || !form.faculty) {
      alert("Please fill all required fields.");
      return;
    }

    const newSubject = {
      id: Date.now(),
      code: form.code.toUpperCase(),
      name: form.name,
      branch: form.branch,
      semester: form.semester,
      type: form.type,
      credits: Number(form.credits),
      faculty: form.faculty,
      status: "Active",
    };

    setSubjects((prev) => [...prev, newSubject]);

    setForm({
      code: "",
      name: "",
      branch: "CSE – AI & DS",
      semester: "2-1",
      type: "Core",
      credits: 3,
      faculty: "",
    });

    setShowForm(false);
  };

  const toggleStatus = (id) => {
    setSubjects((prev) =>
      prev.map((subject) =>
        subject.id === id
          ? {
              ...subject,
              status:
                subject.status === "Active"
                  ? "Inactive"
                  : "Active",
            }
          : subject
      )
    );
  };

  const deleteSubject = (id) => {
    if (!window.confirm("Delete this demo subject record?")) {
      return;
    }

    setSubjects((prev) =>
      prev.filter((subject) => subject.id !== id)
    );
  };

  const editSubject = (subject) => {
    alert(
      `Edit Subject\n\n${subject.name}\nCode: ${subject.code}\n\nBackend edit functionality will be connected later.`
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

          <h1>Subjects & Curriculum</h1>

          <p>
            Manage subjects, curriculum, semesters, credits and
            faculty mapping.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => setShowForm(!showForm)}
        >
          + Add Subject
        </button>

      </div>

      {/* DEMO BANNER */}

      <div className="admin-demo-banner">
        <strong>Demo Data:</strong> Subject and curriculum
        records shown here are sample development data. Official
        curriculum should be entered and maintained by authorized
        academic administrators.
      </div>

      {/* SUMMARY */}

      <div className="admin-summary-grid">

        <div className="admin-summary-card">
          <div className="admin-summary-icon purple">
            📚
          </div>

          <div>
            <span>Total Subjects</span>
            <strong>{subjects.length}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon green">
            ✓
          </div>

          <div>
            <span>Active Subjects</span>
            <strong>{activeSubjects}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon blue">
            🏢
          </div>

          <div>
            <span>Branches Covered</span>
            <strong>{branchesCovered}</strong>
          </div>
        </div>

        <div className="admin-summary-card">
          <div className="admin-summary-icon orange">
            ⭐
          </div>

          <div>
            <span>Total Credits</span>
            <strong>{totalCredits}</strong>
          </div>
        </div>

      </div>

      {/* ADD FORM */}

      {showForm && (
        <div className="admin-form-card">

          <div className="admin-section-title">
            <div>
              <h2>Add New Subject</h2>

              <p>
                Add a subject to the academic curriculum.
              </p>
            </div>
          </div>

          <form onSubmit={addSubject}>

            <div className="admin-form-grid">

              <div className="admin-form-group">
                <label>Subject Code *</label>

                <input
                  type="text"
                  name="code"
                  value={form.code}
                  onChange={handleChange}
                  placeholder="Example: ADS301"
                />
              </div>

              <div className="admin-form-group">
                <label>Subject Name *</label>

                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter subject name"
                />
              </div>

              <div className="admin-form-group">
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

              <div className="admin-form-group">
                <label>Semester</label>

                <select
                  name="semester"
                  value={form.semester}
                  onChange={handleChange}
                >
                  <option>1-1</option>
                  <option>1-2</option>
                  <option>2-1</option>
                  <option>2-2</option>
                  <option>3-1</option>
                  <option>3-2</option>
                  <option>4-1</option>
                  <option>4-2</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Subject Type</label>

                <select
                  name="type"
                  value={form.type}
                  onChange={handleChange}
                >
                  <option>Core</option>
                  <option>Elective</option>
                  <option>Skill</option>
                  <option>Laboratory</option>
                  <option>Project</option>
                </select>
              </div>

              <div className="admin-form-group">
                <label>Credits</label>

                <input
                  type="number"
                  min="1"
                  max="10"
                  name="credits"
                  value={form.credits}
                  onChange={handleChange}
                />
              </div>

              <div className="admin-form-group">
                <label>Faculty *</label>

                <input
                  type="text"
                  name="faculty"
                  value={form.faculty}
                  onChange={handleChange}
                  placeholder="Assigned faculty"
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
                Add Subject
              </button>

            </div>

          </form>
        </div>
      )}

      {/* SUBJECT DIRECTORY */}

      <div className="admin-content-card">

        <div className="admin-section-title">

          <div>
            <h2>Curriculum Directory</h2>

            <p>
              Search and manage subjects across branches and
              semesters.
            </p>
          </div>

        </div>

        {/* FILTERS */}

        <div className="admin-filter-row">

          <input
            className="admin-search"
            type="text"
            placeholder="Search subject, code or faculty..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <select
            value={branchFilter}
            onChange={(e) => setBranchFilter(e.target.value)}
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
            value={semesterFilter}
            onChange={(e) => setSemesterFilter(e.target.value)}
          >
            <option value="All">All Semesters</option>
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
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option value="All">All Types</option>
            <option>Core</option>
            <option>Elective</option>
            <option>Skill</option>
            <option>Laboratory</option>
            <option>Project</option>
          </select>

        </div>

        {/* TABLE */}

        <div className="admin-table-wrapper">

          <table className="admin-table">

            <thead>
              <tr>
                <th>Subject</th>
                <th>Code</th>
                <th>Branch</th>
                <th>Semester</th>
                <th>Type</th>
                <th>Credits</th>
                <th>Faculty</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredSubjects.length > 0 ? (

                filteredSubjects.map((subject) => (

                  <tr key={subject.id}>

                    <td>
                      <div className="admin-name-cell">

                        <div className="subject-icon">
                          📘
                        </div>

                        <div>
                          <strong>
                            {subject.name}
                          </strong>

                          <span>
                            Academic Subject
                          </span>
                        </div>

                      </div>
                    </td>

                    <td>
                      <span className="admin-code-badge">
                        {subject.code}
                      </span>
                    </td>

                    <td>
                      {subject.branch}
                    </td>

                    <td>
                      <span className="semester-badge">
                        {subject.semester}
                      </span>
                    </td>

                    <td>
                      <span className="subject-type-badge">
                        {subject.type}
                      </span>
                    </td>

                    <td>
                      <strong>{subject.credits}</strong>
                    </td>

                    <td>
                      {subject.faculty}
                    </td>

                    <td>

                      <span
                        className={`admin-status ${
                          subject.status === "Active"
                            ? "status-active"
                            : "status-inactive"
                        }`}
                      >
                        {subject.status}
                      </span>

                    </td>

                    <td>

                      <div className="admin-action-buttons">

                        <button
                          className="admin-edit-btn"
                          onClick={() =>
                            editSubject(subject)
                          }
                        >
                          Edit
                        </button>

                        <button
                          className="admin-toggle-btn"
                          onClick={() =>
                            toggleStatus(subject.id)
                          }
                        >
                          {subject.status === "Active"
                            ? "Disable"
                            : "Activate"}
                        </button>

                        <button
                          className="admin-delete-btn"
                          onClick={() =>
                            deleteSubject(subject.id)
                          }
                        >
                          Delete
                        </button>

                      </div>

                    </td>

                  </tr>

                ))

              ) : (

                <tr>
                  <td
                    colSpan="9"
                    className="admin-empty"
                  >
                    No subjects found.
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

        <div className="admin-table-footer">
          Showing {filteredSubjects.length} of{" "}
          {subjects.length} subjects
        </div>

      </div>

    </div>
  );
}

export default AdminSubjects;