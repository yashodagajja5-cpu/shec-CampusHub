import React, { useMemo, useState } from "react";
import "./HODPages.css";

function HODRequests({ onBack }) {
  const [filter, setFilter] = useState("All");
  const [requests, setRequests] = useState([
    {
      id: 1,
      student: "Yashii",
      roll: "DEMO2026AI001",
      type: "Bonafide Certificate",
      subject: "Bonafide certificate for scholarship",
      date: "2026-10-01",
      status: "Pending",
      priority: "Normal",
    },
    {
      id: 2,
      student: "Rihana",
      roll: "DEMO2026AI002",
      type: "Leave Request",
      subject: "Leave request for family function",
      date: "2026-10-01",
      status: "Pending",
      priority: "Normal",
    },
    {
      id: 3,
      student: "Hema",
      roll: "DEMO2026AI003",
      type: "Permission Request",
      subject: "Permission for workshop participation",
      date: "2026-09-30",
      status: "Approved",
      priority: "Normal",
    },
    {
      id: 4,
      student: "Mohitha",
      roll: "DEMO2026AI004",
      type: "Study Certificate",
      subject: "Study certificate request",
      date: "2026-09-29",
      status: "Completed",
      priority: "Normal",
    },
    {
      id: 5,
      student: "Manu",
      roll: "DEMO2026AI005",
      type: "Fee / Bank Letter",
      subject: "Request for fee-related bank letter",
      date: "2026-09-28",
      status: "Rejected",
      priority: "Review",
    },
  ]);

  const filteredRequests = useMemo(() => {
    if (filter === "All") return requests;

    return requests.filter((request) => request.status === filter);
  }, [requests, filter]);

  const pending = requests.filter(
    (request) => request.status === "Pending"
  ).length;

  const approved = requests.filter(
    (request) => request.status === "Approved"
  ).length;

  const completed = requests.filter(
    (request) => request.status === "Completed"
  ).length;

  const updateStatus = (id, status) => {
    setRequests((current) =>
      current.map((request) =>
        request.id === id ? { ...request, status } : request
      )
    );
  };

  const handleApprove = (id) => {
    updateStatus(id, "Approved");
    alert("Request approved in demo mode.");
  };

  const handleReject = (id) => {
    updateStatus(id, "Rejected");
    alert("Request rejected in demo mode.");
  };

  const handleComplete = (id) => {
    updateStatus(id, "Completed");
    alert("Request marked as completed.");
  };

  const handleView = (request) => {
    alert(
      `REQUEST DETAILS\n\nStudent: ${request.student}\nRoll Number: ${request.roll}\nType: ${request.type}\nSubject: ${request.subject}\nDate: ${request.date}\nStatus: ${request.status}`
    );
  };

  return (
    <div className="hod-page">
      {/* HEADER */}
      <div className="hod-page-header">
        <div>
          <button className="hod-back-btn" onClick={onBack}>
            ← Back to HOD Dashboard
          </button>

          <h1>Requests & Approvals</h1>

          <p>
            Review student requests, approve or reject applications and track
            request completion.
          </p>
        </div>

        <div className="hod-demo-badge">DEMO DATA</div>
      </div>

      {/* SUMMARY */}
      <div className="hod-summary-grid">
        <div className="hod-summary-card">
          <span className="hod-summary-icon">📋</span>

          <div>
            <p>Total Requests</p>
            <h2>{requests.length}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">⏳</span>

          <div>
            <p>Pending</p>
            <h2>{pending}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">✅</span>

          <div>
            <p>Approved</p>
            <h2>{approved}</h2>
          </div>
        </div>

        <div className="hod-summary-card">
          <span className="hod-summary-icon">🎓</span>

          <div>
            <p>Completed</p>
            <h2>{completed}</h2>
          </div>
        </div>
      </div>

      {/* FILTER */}
      <div className="hod-section-title">
        <div>
          <h2>Student Requests</h2>
          <p>Review requests submitted through CampusHub.</p>
        </div>
      </div>

      <div className="hod-request-tabs">
        {["All", "Pending", "Approved", "Rejected", "Completed"].map(
          (item) => (
            <button
              key={item}
              className={filter === item ? "active" : ""}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* REQUESTS */}
      <div className="hod-requests-list">
        {filteredRequests.length > 0 ? (
          filteredRequests.map((request) => (
            <div className="hod-request-card" key={request.id}>
              <div className="hod-request-left">
                <div className="hod-request-icon">📄</div>

                <div className="hod-request-content">
                  <div className="hod-request-title">
                    <h3>{request.type}</h3>

                    <span
                      className={
                        request.status === "Pending"
                          ? "hod-request-status pending"
                          : request.status === "Approved"
                          ? "hod-request-status approved"
                          : request.status === "Rejected"
                          ? "hod-request-status rejected"
                          : "hod-request-status completed"
                      }
                    >
                      {request.status}
                    </span>
                  </div>

                  <p className="hod-request-subject">
                    {request.subject}
                  </p>

                  <div className="hod-request-meta">
                    <span>
                      👤 <strong>{request.student}</strong>
                    </span>

                    <span>🎫 {request.roll}</span>

                    <span>📅 {request.date}</span>

                    <span>🏷 {request.priority}</span>
                  </div>
                </div>
              </div>

              <div className="hod-request-actions">
                <button
                  className="hod-view-btn"
                  onClick={() => handleView(request)}
                >
                  View
                </button>

                {request.status === "Pending" && (
                  <>
                    <button
                      className="hod-approve-btn"
                      onClick={() => handleApprove(request.id)}
                    >
                      Approve
                    </button>

                    <button
                      className="hod-delete-btn"
                      onClick={() => handleReject(request.id)}
                    >
                      Reject
                    </button>
                  </>
                )}

                {request.status === "Approved" && (
                  <button
                    className="hod-primary-btn"
                    onClick={() => handleComplete(request.id)}
                  >
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="hod-empty-state">
            No requests found.
          </div>
        )}
      </div>

      {/* WORKFLOW */}
      <div className="hod-workflow-card">
        <h2>Request Workflow</h2>

        <div className="hod-workflow">
          <div className="hod-workflow-step">
            <span>1</span>
            <div>
              <strong>Student Submits</strong>
              <p>Student creates a request from the dashboard.</p>
            </div>
          </div>

          <div className="hod-workflow-arrow">→</div>

          <div className="hod-workflow-step">
            <span>2</span>
            <div>
              <strong>HOD Reviews</strong>
              <p>Authorized HOD reviews the submitted request.</p>
            </div>
          </div>

          <div className="hod-workflow-arrow">→</div>

          <div className="hod-workflow-step">
            <span>3</span>
            <div>
              <strong>Decision</strong>
              <p>Request is approved or rejected.</p>
            </div>
          </div>

          <div className="hod-workflow-arrow">→</div>

          <div className="hod-workflow-step">
            <span>4</span>
            <div>
              <strong>Completion</strong>
              <p>Approved request is processed and completed.</p>
            </div>
          </div>
        </div>
      </div>

      {/* INFO */}
      <div className="hod-info-card">
        <div className="hod-info-icon">ℹ️</div>

        <div>
          <h3>Approval System</h3>

          <p>
            This is currently a browser-based demo. In the final CampusHub
            backend, every request will have an authenticated student,
            reviewer, timestamp, status history and approval record.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HODRequests;