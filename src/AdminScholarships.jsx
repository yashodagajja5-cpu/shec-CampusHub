import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminScholarships({ onBack }) {
  const [scholarships, setScholarships] = useState([
    {
      id: 1,
      student: "Yashii",
      rollNo: "DEMO2026AI001",
      scholarship: "PM Vidyalaxmi",
      provider: "Government of India",
      academicYear: "2026-27",
      amount: 460000,
      type: "Education Loan Support",
      status: "Approved",
      date: "2026-08-11",
    },
    {
      id: 2,
      student: "Rihana",
      rollNo: "DEMO2026AI002",
      scholarship: "NSP Scholarship",
      provider: "National Scholarship Portal",
      academicYear: "2026-27",
      amount: 25000,
      type: "Merit",
      status: "Under Process",
      date: "2026-09-10",
    },
    {
      id: 3,
      student: "Hema",
      rollNo: "DEMO2026AI003",
      scholarship: "ONGC Scholarship",
      provider: "ONGC",
      academicYear: "2026-27",
      amount: 48000,
      type: "Merit",
      status: "Under Process",
      date: "2026-09-15",
    },
    {
      id: 4,
      student: "Mohitha",
      rollNo: "DEMO2026AI004",
      scholarship: "Institutional Scholarship",
      provider: "Sri Harshini College",
      academicYear: "2026-27",
      amount: 25000,
      type: "Institutional",
      status: "Eligible",
      date: "2026-09-20",
    },
  ]);

  const [search, setSearch] = useState("");
  const [providerFilter, setProviderFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const emptyForm = {
    student: "",
    rollNo: "",
    scholarship: "",
    provider: "",
    academicYear: "2026-27",
    amount: "",
    type: "Merit",
    status: "Under Process",
  };

  const [form, setForm] = useState(emptyForm);

  const providers = [
    "All",
    ...new Set(scholarships.map((item) => item.provider)),
  ];

  const statuses = [
    "All",
    "Approved",
    "Under Process",
    "Eligible",
    "Rejected",
    "Completed",
  ];

  const filteredScholarships = useMemo(() => {
    return scholarships.filter((item) => {
      const matchesSearch =
        item.student.toLowerCase().includes(search.toLowerCase()) ||
        item.rollNo.toLowerCase().includes(search.toLowerCase()) ||
        item.scholarship.toLowerCase().includes(search.toLowerCase());

      const matchesProvider =
        providerFilter === "All" || item.provider === providerFilter;

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      return matchesSearch && matchesProvider && matchesStatus;
    });
  }, [scholarships, search, providerFilter, statusFilter]);

  const stats = {
    total: scholarships.length,
    approved: scholarships.filter((s) => s.status === "Approved").length,
    pending: scholarships.filter((s) => s.status === "Under Process").length,
    eligible: scholarships.filter((s) => s.status === "Eligible").length,
    totalAmount: scholarships
      .filter((s) => s.status === "Approved")
      .reduce((sum, s) => sum + Number(s.amount || 0), 0),
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.student ||
      !form.rollNo ||
      !form.scholarship ||
      !form.provider ||
      !form.amount
    ) {
      alert("Please fill all required fields.");
      return;
    }

    if (editingId) {
      setScholarships((prev) =>
        prev.map((item) =>
          item.id === editingId
            ? {
                ...item,
                ...form,
                amount: Number(form.amount),
              }
            : item
        )
      );
    } else {
      const newScholarship = {
        ...form,
        id: Date.now(),
        amount: Number(form.amount),
        date: new Date().toISOString().split("T")[0],
      };

      setScholarships((prev) => [newScholarship, ...prev]);
    }

    setForm(emptyForm);
    setEditingId(null);
    setShowForm(false);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setForm({
      student: item.student,
      rollNo: item.rollNo,
      scholarship: item.scholarship,
      provider: item.provider,
      academicYear: item.academicYear,
      amount: item.amount,
      type: item.type,
      status: item.status,
    });
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this scholarship record?")) {
      setScholarships((prev) => prev.filter((item) => item.id !== id));
    }
  };

  const changeStatus = (id, status) => {
    setScholarships((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const formatAmount = (amount) => {
    return `₹${Number(amount).toLocaleString("en-IN")}`;
  };

  return (
    <div className="admin-page">
      <div className="admin-page-header">
        <div>
          <button className="admin-back-btn" onClick={onBack}>
            ← Back to Dashboard
          </button>

          <h1>Scholarship Management</h1>
          <p>
            Manage student scholarship applications, approvals and funding
            records.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => {
            setEditingId(null);
            setForm(emptyForm);
            setShowForm(true);
          }}
        >
          + Add Scholarship
        </button>
      </div>

      <div className="admin-demo-banner">
        <strong>Demo Data:</strong> These scholarship records are sample
        records for portal development. Final student scholarship information
        should come from authorized college administrators.
      </div>

      <div className="admin-stats-grid scholarship-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">🎓</div>
          <div>
            <span>Total Applications</span>
            <strong>{stats.total}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">✅</div>
          <div>
            <span>Approved</span>
            <strong>{stats.approved}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">⏳</div>
          <div>
            <span>Under Process</span>
            <strong>{stats.pending}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">📋</div>
          <div>
            <span>Eligible</span>
            <strong>{stats.eligible}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">💰</div>
          <div>
            <span>Approved Amount</span>
            <strong>{formatAmount(stats.totalAmount)}</strong>
          </div>
        </div>
      </div>

      <div className="admin-filter-card">
        <div className="admin-search-box">
          <span>🔎</span>
          <input
            type="text"
            placeholder="Search student, roll number or scholarship..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={providerFilter}
          onChange={(e) => setProviderFilter(e.target.value)}
        >
          {providers.map((provider) => (
            <option key={provider}>{provider}</option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statuses.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>
      </div>

      {showForm && (
        <div className="admin-form-card">
          <div className="admin-form-title">
            <div>
              <h2>{editingId ? "Edit Scholarship" : "Add Scholarship"}</h2>
              <p>Enter scholarship application details.</p>
            </div>

            <button
              className="admin-close-btn"
              onClick={() => {
                setShowForm(false);
                setEditingId(null);
              }}
            >
              ×
            </button>
          </div>

          <form onSubmit={handleSubmit} className="admin-form-grid">
            <div className="admin-form-group">
              <label>Student Name *</label>
              <input
                name="student"
                value={form.student}
                onChange={handleInput}
                placeholder="Enter student name"
              />
            </div>

            <div className="admin-form-group">
              <label>Roll Number *</label>
              <input
                name="rollNo"
                value={form.rollNo}
                onChange={handleInput}
                placeholder="Enter roll number"
              />
            </div>

            <div className="admin-form-group">
              <label>Scholarship Name *</label>
              <input
                name="scholarship"
                value={form.scholarship}
                onChange={handleInput}
                placeholder="Scholarship name"
              />
            </div>

            <div className="admin-form-group">
              <label>Provider *</label>
              <input
                name="provider"
                value={form.provider}
                onChange={handleInput}
                placeholder="Provider / organization"
              />
            </div>

            <div className="admin-form-group">
              <label>Academic Year</label>
              <select
                name="academicYear"
                value={form.academicYear}
                onChange={handleInput}
              >
                <option>2026-27</option>
                <option>2025-26</option>
                <option>2027-28</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label>Amount *</label>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleInput}
                placeholder="Enter amount"
              />
            </div>

            <div className="admin-form-group">
              <label>Scholarship Type</label>
              <select name="type" value={form.type} onChange={handleInput}>
                <option>Merit</option>
                <option>Need Based</option>
                <option>Institutional</option>
                <option>Government</option>
                <option>Education Loan Support</option>
                <option>Other</option>
              </select>
            </div>

            <div className="admin-form-group">
              <label>Status</label>
              <select name="status" value={form.status} onChange={handleInput}>
                <option>Under Process</option>
                <option>Eligible</option>
                <option>Approved</option>
                <option>Rejected</option>
                <option>Completed</option>
              </select>
            </div>

            <div className="admin-form-actions">
              <button
                type="button"
                className="admin-secondary-btn"
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
              >
                Cancel
              </button>

              <button type="submit" className="admin-primary-btn">
                {editingId ? "Update Scholarship" : "Save Scholarship"}
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="admin-table-card">
        <div className="admin-table-header">
          <div>
            <h2>Scholarship Applications</h2>
            <p>
              Showing {filteredScholarships.length} of {scholarships.length}{" "}
              records
            </p>
          </div>
        </div>

        <div className="admin-table-wrapper">
          <table className="admin-table scholarship-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>Scholarship</th>
                <th>Provider</th>
                <th>Year</th>
                <th>Amount</th>
                <th>Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredScholarships.map((item) => (
                <tr key={item.id}>
                  <td>
                    <div className="admin-name-cell">
                      <div className="student-avatar">
                        {item.student.charAt(0)}
                      </div>

                      <div>
                        <strong>{item.student}</strong>
                        <small>{item.rollNo}</small>
                      </div>
                    </div>
                  </td>

                  <td>
                    <strong>{item.scholarship}</strong>
                  </td>

                  <td>{item.provider}</td>

                  <td>
                    <span className="semester-badge">
                      {item.academicYear}
                    </span>
                  </td>

                  <td>
                    <strong className="scholarship-amount">
                      {formatAmount(item.amount)}
                    </strong>
                  </td>

                  <td>
                    <span className="subject-type-badge">
                      {item.type}
                    </span>
                  </td>

                  <td>
                    <select
                      className={`scholarship-status-select ${item.status
                        .toLowerCase()
                        .replaceAll(" ", "-")}`}
                      value={item.status}
                      onChange={(e) =>
                        changeStatus(item.id, e.target.value)
                      }
                    >
                      {statuses
                        .filter((status) => status !== "All")
                        .map((status) => (
                          <option key={status}>{status}</option>
                        ))}
                    </select>
                  </td>

                  <td>
                    <div className="admin-action-buttons">
                      <button
                        className="admin-small-btn"
                        onClick={() => handleEdit(item)}
                      >
                        Edit
                      </button>

                      <button
                        className="admin-small-btn danger"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredScholarships.length === 0 && (
                <tr>
                  <td colSpan="8">
                    <div className="admin-empty">
                      No scholarship records found.
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AdminScholarships;