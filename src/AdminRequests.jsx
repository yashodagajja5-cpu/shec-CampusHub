import React, { useMemo, useState } from "react";
import "./AdminPages.css";

function AdminRequests({ onBack }) {
  const [requests, setRequests] = useState([
    {
      id: 1,
      student: "Yashii",
      rollNo: "DEMO2026AI001",
      type: "Bonafide Certificate",
      purpose: "Education Loan",
      submitted: "2026-09-28",
      status: "Pending",
      priority: "High",
      remarks: "",
    },
    {
      id: 2,
      student: "Rihana",
      rollNo: "DEMO2026AI002",
      type: "Study Certificate",
      purpose: "Scholarship Application",
      submitted: "2026-09-27",
      status: "Approved",
      priority: "Medium",
      remarks: "Approved by administration",
    },
    {
      id: 3,
      student: "Hema",
      rollNo: "DEMO2026AI003",
      type: "Permission Request",
      purpose: "Personal Work",
      submitted: "2026-09-26",
      status: "Pending",
      priority: "Medium",
      remarks: "",
    },
    {
      id: 4,
      student: "Mohitha",
      rollNo: "DEMO2026AI004",
      type: "Leave Request",
      purpose: "Family Function",
      submitted: "2026-09-25",
      status: "Approved",
      priority: "Low",
      remarks: "Leave approved",
    },
    {
      id: 5,
      student: "Student Demo 05",
      rollNo: "DEMO2026AI005",
      type: "Fee / Bank Letter",
      purpose: "Bank Documentation",
      submitted: "2026-09-24",
      status: "Pending",
      priority: "High",
      remarks: "",
    },
    {
      id: 6,
      student: "Student Demo 06",
      rollNo: "DEMO2026AI006",
      type: "General Request",
      purpose: "Student Service",
      submitted: "2026-09-23",
      status: "Rejected",
      priority: "Low",
      remarks: "Additional information required",
    },
  ]);

  const requestTypes = [
    "All",
    "Leave Request",
    "Permission Request",
    "Bonafide Certificate",
    "Study Certificate",
    "Fee / Bank Letter",
    "Transfer Certificate",
    "General Request",
  ];

  const statusOptions = [
    "All",
    "Pending",
    "Approved",
    "Rejected",
    "Processing",
    "Completed",
  ];

  const priorityOptions = [
    "All",
    "High",
    "Medium",
    "Low",
  ];

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");
  const [priorityFilter, setPriorityFilter] = useState("All");

  const [showForm, setShowForm] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null);

  const emptyForm = {
    student: "",
    rollNo: "",
    type: "Leave Request",
    purpose: "",
    priority: "Medium",
  };

  const [form, setForm] = useState(emptyForm);

  const filteredRequests = useMemo(() => {
    return requests.filter((item) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        item.student.toLowerCase().includes(searchValue) ||
        item.rollNo.toLowerCase().includes(searchValue) ||
        item.type.toLowerCase().includes(searchValue) ||
        item.purpose.toLowerCase().includes(searchValue);

      const matchesType =
        typeFilter === "All" || item.type === typeFilter;

      const matchesStatus =
        statusFilter === "All" || item.status === statusFilter;

      const matchesPriority =
        priorityFilter === "All" ||
        item.priority === priorityFilter;

      return (
        matchesSearch &&
        matchesType &&
        matchesStatus &&
        matchesPriority
      );
    });
  }, [
    requests,
    search,
    typeFilter,
    statusFilter,
    priorityFilter,
  ]);

  const stats = {
    total: requests.length,
    pending: requests.filter((r) => r.status === "Pending").length,
    approved: requests.filter((r) => r.status === "Approved").length,
    rejected: requests.filter((r) => r.status === "Rejected").length,
    certificates: requests.filter(
      (r) =>
        r.type.includes("Certificate") ||
        r.type === "Fee / Bank Letter"
    ).length,
  };

  const handleInput = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.student || !form.rollNo || !form.purpose) {
      alert("Please fill all required fields.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      student: form.student,
      rollNo: form.rollNo,
      type: form.type,
      purpose: form.purpose,
      submitted: new Date().toISOString().split("T")[0],
      status: "Pending",
      priority: form.priority,
      remarks: "",
    };

    setRequests((prev) => [newRequest, ...prev]);
    setForm(emptyForm);
    setShowForm(false);
  };

  const updateStatus = (id, status) => {
    setRequests((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              status,
              remarks:
                status === "Approved"
                  ? "Approved by administration"
                  : status === "Rejected"
                  ? "Request rejected by administration"
                  : item.remarks,
            }
          : item
      )
    );
  };

  const deleteRequest = (id) => {
    if (window.confirm("Delete this request record?")) {
      setRequests((prev) =>
        prev.filter((item) => item.id !== id)
      );
    }
  };

  const viewRequest = (request) => {
    setSelectedRequest(request);
  };

  const getStatusClass = (status) => {
    return status.toLowerCase().replaceAll(" ", "-");
  };

  const getPriorityClass = (priority) => {
    return priority.toLowerCase();
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

          <h1>Requests & Certificates</h1>

          <p>
            Manage student requests, permissions, leave applications
            and certificate services.
          </p>
        </div>

        <button
          className="admin-primary-btn"
          onClick={() => {
            setForm(emptyForm);
            setShowForm(true);
          }}
        >
          + Add Request
        </button>

      </div>

      {/* DEMO WARNING */}
      <div className="admin-demo-banner">
        <strong>Demo Data:</strong> These requests are sample records
        created for SHEC CampusHub development. Actual student requests
        should be connected to the authorized college system.
      </div>

      {/* STATS */}
      <div className="admin-stats-grid request-stats">

        <div className="admin-stat-card">

          <div className="admin-stat-icon purple">
            📄
          </div>

          <div>
            <span>Total Requests</span>
            <strong>{stats.total}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon orange">
            ⏳
          </div>

          <div>
            <span>Pending</span>
            <strong>{stats.pending}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon green">
            ✓
          </div>

          <div>
            <span>Approved</span>
            <strong>{stats.approved}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon pink">
            !
          </div>

          <div>
            <span>Rejected</span>
            <strong>{stats.rejected}</strong>
          </div>

        </div>

        <div className="admin-stat-card">

          <div className="admin-stat-icon blue">
            🎓
          </div>

          <div>
            <span>Certificates / Letters</span>
            <strong>{stats.certificates}</strong>
          </div>

        </div>

      </div>

      {/* FILTERS */}
      <div className="admin-filter-card">

        <div className="admin-search-box">
          <span>🔎</span>

          <input
            type="text"
            placeholder="Search student, roll number or request..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
        >
          {requestTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          {statusOptions.map((status) => (
            <option key={status}>{status}</option>
          ))}
        </select>

        <select
          value={priorityFilter}
          onChange={(e) => setPriorityFilter(e.target.value)}
        >
          {priorityOptions.map((priority) => (
            <option key={priority}>{priority}</option>
          ))}
        </select>

      </div>

      {/* ADD REQUEST FORM */}
      {showForm && (
        <div className="admin-form-card">

          <div className="admin-form-title">

            <div>
              <h2>Add Student Request</h2>

              <p>
                Create a request record for a student.
              </p>
            </div>

            <button
              className="admin-close-btn"
              onClick={() => setShowForm(false)}
            >
              ×
            </button>

          </div>

          <form
            className="admin-form-grid"
            onSubmit={handleSubmit}
          >

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
              <label>Request Type</label>

              <select
                name="type"
                value={form.type}
                onChange={handleInput}
              >
                {requestTypes
                  .filter((type) => type !== "All")
                  .map((type) => (
                    <option key={type}>{type}</option>
                  ))}
              </select>
            </div>

            <div className="admin-form-group">
              <label>Priority</label>

              <select
                name="priority"
                value={form.priority}
                onChange={handleInput}
              >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
              </select>
            </div>

            <div className="admin-form-group admin-form-full">
              <label>Purpose / Description *</label>

              <textarea
                name="purpose"
                value={form.purpose}
                onChange={handleInput}
                rows="4"
                placeholder="Enter request purpose or details"
              />
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
                Create Request
              </button>

            </div>

          </form>

        </div>
      )}

      {/* REQUEST TABLE */}
      <div className="admin-table-card">

        <div className="admin-table-header">

          <div>
            <h2>Student Requests</h2>

            <p>
              Showing {filteredRequests.length} of{" "}
              {requests.length} records
            </p>
          </div>

        </div>

        <div className="admin-table-wrapper">

          <table className="admin-table request-table">

            <thead>
              <tr>
                <th>Student</th>
                <th>Request</th>
                <th>Purpose</th>
                <th>Submitted</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>

              {filteredRequests.map((request) => (

                <tr key={request.id}>

                  <td>

                    <div className="admin-name-cell">

                      <div className="student-avatar">
                        {request.student.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {request.student}
                        </strong>

                        <span>
                          {request.rollNo}
                        </span>
                      </div>

                    </div>

                  </td>

                  <td>

                    <div className="request-type-cell">

                      <span className="request-icon">
                        {request.type.includes("Certificate")
                          ? "🎓"
                          : request.type.includes("Leave")
                          ? "🗓️"
                          : request.type.includes("Permission")
                          ? "✓"
                          : request.type.includes("Bank")
                          ? "🏦"
                          : "📄"}
                      </span>

                      <strong>
                        {request.type}
                      </strong>

                    </div>

                  </td>

                  <td>
                    <span className="request-purpose">
                      {request.purpose}
                    </span>
                  </td>

                  <td>
                    {request.submitted}
                  </td>

                  <td>

                    <span
                      className={`request-priority ${getPriorityClass(
                        request.priority
                      )}`}
                    >
                      {request.priority}
                    </span>

                  </td>

                  <td>

                    <select
                      className={`request-status-select ${getStatusClass(
                        request.status
                      )}`}
                      value={request.status}
                      onChange={(e) =>
                        updateStatus(
                          request.id,
                          e.target.value
                        )
                      }
                    >
                      {statusOptions
                        .filter(
                          (status) => status !== "All"
                        )
                        .map((status) => (
                          <option key={status}>
                            {status}
                          </option>
                        ))}
                    </select>

                  </td>

                  <td>

                    <div className="admin-action-buttons">

                      <button
                        className="admin-small-btn"
                        onClick={() =>
                          viewRequest(request)
                        }
                      >
                        View
                      </button>

                      <button
                        className="admin-small-btn danger"
                        onClick={() =>
                          deleteRequest(request.id)
                        }
                      >
                        Delete
                      </button>

                    </div>

                  </td>

                </tr>

              ))}

              {filteredRequests.length === 0 && (
                <tr>
                  <td colSpan="7">

                    <div className="admin-empty">
                      No requests found.
                    </div>

                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

      </div>

      {/* WORKFLOW */}
      <div className="request-workflow-card">

        <div className="request-workflow-icon">
          🔄
        </div>

        <div>

          <h3>
            Request Approval Workflow
          </h3>

          <p>
            Student submits a request → Faculty / HOD reviews it →
            Administration processes the request → Certificate or
            permission is issued after approval.
          </p>

          <div className="request-workflow-steps">

            <span>1. Student Request</span>
            <b>→</b>
            <span>2. Review</span>
            <b>→</b>
            <span>3. Approval</span>
            <b>→</b>
            <span>4. Completion</span>

          </div>

        </div>

      </div>

      {/* DETAILS MODAL */}
      {selectedRequest && (
        <div className="admin-modal-overlay">

          <div className="admin-modal-card">

            <div className="admin-modal-header">

              <div>
                <h2>Request Details</h2>

                <p>
                  {selectedRequest.type}
                </p>
              </div>

              <button
                className="admin-close-btn"
                onClick={() =>
                  setSelectedRequest(null)
                }
              >
                ×
              </button>

            </div>

            <div className="request-details-grid">

              <div>
                <span>Student</span>
                <strong>
                  {selectedRequest.student}
                </strong>
              </div>

              <div>
                <span>Roll Number</span>
                <strong>
                  {selectedRequest.rollNo}
                </strong>
              </div>

              <div>
                <span>Request Type</span>
                <strong>
                  {selectedRequest.type}
                </strong>
              </div>

              <div>
                <span>Submitted</span>
                <strong>
                  {selectedRequest.submitted}
                </strong>
              </div>

              <div>
                <span>Priority</span>
                <strong>
                  {selectedRequest.priority}
                </strong>
              </div>

              <div>
                <span>Status</span>
                <strong>
                  {selectedRequest.status}
                </strong>
              </div>

              <div className="request-detail-full">
                <span>Purpose</span>
                <strong>
                  {selectedRequest.purpose}
                </strong>
              </div>

              <div className="request-detail-full">
                <span>Remarks</span>
                <strong>
                  {selectedRequest.remarks ||
                    "No remarks available."}
                </strong>
              </div>

            </div>

            <div className="admin-modal-actions">

              {selectedRequest.status !== "Approved" && (
                <button
                  className="admin-approve-btn"
                  onClick={() => {
                    updateStatus(
                      selectedRequest.id,
                      "Approved"
                    );
                    setSelectedRequest(null);
                  }}
                >
                  ✓ Approve
                </button>
              )}

              {selectedRequest.status !== "Rejected" && (
                <button
                  className="admin-reject-btn"
                  onClick={() => {
                    updateStatus(
                      selectedRequest.id,
                      "Rejected"
                    );
                    setSelectedRequest(null);
                  }}
                >
                  ✕ Reject
                </button>
              )}

              <button
                className="admin-secondary-btn"
                onClick={() =>
                  setSelectedRequest(null)
                }
              >
                Close
              </button>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default AdminRequests;