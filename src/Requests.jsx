import React, { useState } from "react";
import "./Requests.css";

function Requests({ onBack }) {
  const [requestType, setRequestType] = useState("Leave Request");
  const [subject, setSubject] = useState("");
  const [reason, setReason] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");

  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "Bonafide Certificate",
      subject: "Bonafide Certificate",
      date: "28 Sep 2026",
      status: "Approved",
    },
    {
      id: 2,
      type: "Leave Request",
      subject: "Personal Leave",
      date: "25 Sep 2026",
      status: "Pending",
    },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !reason) {
      alert("Please fill all required fields.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      type: requestType,
      subject: subject,
      date: new Date().toLocaleDateString("en-IN"),
      status: "Pending",
    };

    setRequests([newRequest, ...requests]);

    setSubject("");
    setReason("");
    setFromDate("");
    setToDate("");

    alert("Request submitted successfully!");
  };

  return (
    <div className="requests-page">

      <header className="requests-header">
        <button onClick={onBack} className="back-btn">
          ← Back to Dashboard
        </button>

        <div>
          <h1>Student Requests</h1>
          <p>
            Submit and track your academic and campus requests
          </p>
        </div>
      </header>

      <main className="requests-container">

        {/* REQUEST FORM */}

        <section className="request-form-card">

          <div className="section-title">
            <h2>Submit New Request</h2>
            <p>
              Select the request type and provide the required details.
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label>Request Type</label>

              <select
                value={requestType}
                onChange={(e) => setRequestType(e.target.value)}
              >
                <option>Leave Request</option>
                <option>Permission Request</option>
                <option>Bonafide Certificate</option>
                <option>Study Certificate</option>
                <option>Fee / Bank Letter</option>
                <option>Transfer Certificate</option>
                <option>General Request</option>
              </select>
            </div>

            <div className="form-group">
              <label>Subject / Title</label>

              <input
                type="text"
                placeholder="Enter request subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            {(requestType === "Leave Request" ||
              requestType === "Permission Request") && (
              <div className="date-row">

                <div className="form-group">
                  <label>From Date</label>

                  <input
                    type="date"
                    value={fromDate}
                    onChange={(e) => setFromDate(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label>To Date</label>

                  <input
                    type="date"
                    value={toDate}
                    onChange={(e) => setToDate(e.target.value)}
                  />
                </div>

              </div>
            )}

            <div className="form-group">
              <label>Reason / Description</label>

              <textarea
                rows="6"
                placeholder="Enter your request details..."
                value={reason}
                onChange={(e) => setReason(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="submit-request-btn"
            >
              Submit Request
            </button>

          </form>

        </section>

        {/* REQUEST HISTORY */}

        <section className="request-history-card">

          <div className="section-title">
            <h2>My Requests</h2>

            <p>
              Track the status of your submitted requests.
            </p>
          </div>

          <div className="request-list">

            {requests.map((request) => (

              <div
                className="request-item"
                key={request.id}
              >

                <div className="request-icon">
                  📄
                </div>

                <div className="request-info">

                  <strong>
                    {request.subject}
                  </strong>

                  <span>
                    {request.type}
                  </span>

                  <small>
                    Submitted: {request.date}
                  </small>

                </div>

                <span
                  className={`request-status ${request.status.toLowerCase()}`}
                >
                  {request.status}
                </span>

              </div>

            ))}

          </div>

        </section>

        {/* WORKFLOW */}

        <section className="request-info-card">

          <h2>Request Workflow</h2>

          <div className="workflow">

            <div>
              <span>1</span>
              <strong>Submit</strong>
              <small>
                Student submits request
              </small>
            </div>

            <div>
              <span>2</span>
              <strong>Review</strong>
              <small>
                Faculty / HOD reviews
              </small>
            </div>

            <div>
              <span>3</span>
              <strong>Approval</strong>
              <small>
                Authorized person approves
              </small>
            </div>

            <div>
              <span>4</span>
              <strong>Completed</strong>
              <small>
                Student receives status
              </small>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Requests;