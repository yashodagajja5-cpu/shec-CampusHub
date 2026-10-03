import React, { useState } from "react";
import "./Requests.css";

function Requests({ onBack }) {
  const [activeTab, setActiveTab] = useState("letters");

  const [requestType, setRequestType] = useState("Bonafide Certificate");
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
      category: "Letter",
    },
    {
      id: 2,
      type: "Leave Request",
      subject: "Personal Leave",
      date: "25 Sep 2026",
      status: "Pending",
      category: "Request",
    },
  ]);

  const letterTypes = [
    {
      icon: "📄",
      title: "Bonafide Certificate",
      description: "Request a bonafide certificate for official purposes.",
    },
    {
      icon: "🎓",
      title: "Study Certificate",
      description: "Request a certificate confirming your student status.",
    },
    {
      icon: "🏦",
      title: "Fee / Bank Letter",
      description: "Request an official letter for bank or fee-related purposes.",
    },
    {
      icon: "📝",
      title: "Permission Letter",
      description: "Submit a permission request for academic or personal needs.",
    },
    {
      icon: "🏠",
      title: "Leave Letter",
      description: "Submit a formal leave request to the college.",
    },
    {
      icon: "📑",
      title: "Transfer Certificate",
      description: "Submit a request related to transfer certificate processing.",
    },
    {
      icon: "📋",
      title: "General Letter",
      description: "Submit any other official college letter request.",
    },
  ];

  const handleLetterSelect = (type) => {
    setRequestType(type);
    setSubject(type);
    setActiveTab("form");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!subject || !reason) {
      alert("Please fill all required fields.");
      return;
    }

    const newRequest = {
      id: Date.now(),
      type: requestType,
      subject,
      date: new Date().toLocaleDateString("en-IN"),
      status: "Pending",
      category:
        requestType.includes("Certificate") ||
        requestType.includes("Letter")
          ? "Letter"
          : "Request",
    };

    setRequests([newRequest, ...requests]);

    setSubject("");
    setReason("");
    setFromDate("");
    setToDate("");

    alert("Your request has been submitted successfully!");
    setActiveTab("history");
  };

  const handlePrint = (request) => {
    const printWindow = window.open("", "_blank");

    if (!printWindow) {
      alert("Please allow pop-ups to view the letter.");
      return;
    }

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>${request.type}</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            padding: 50px;
            color: #333;
          }

          .letter {
            max-width: 750px;
            margin: auto;
            border: 1px solid #ddd;
            padding: 45px;
          }

          .header {
            text-align: center;
            border-bottom: 2px solid #6841c6;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }

          .header h1 {
            margin: 0;
            color: #6841c6;
            font-size: 22px;
          }

          .header p {
            margin: 7px 0 0;
            color: #666;
          }

          h2 {
            text-align: center;
            margin: 30px 0;
          }

          .details {
            line-height: 2;
            margin-top: 20px;
          }

          .footer {
            margin-top: 80px;
            display: flex;
            justify-content: space-between;
          }

          .note {
            margin-top: 35px;
            color: #777;
            font-size: 12px;
          }

          @media print {
            body {
              padding: 0;
            }
          }
        </style>
      </head>

      <body>

        <div class="letter">

          <div class="header">
            <h1>SRI HARSHINI COLLEGE OF ENGINEERING AND TECHNOLOGY FOR WOMEN</h1>
            <p>Ongole, Andhra Pradesh</p>
          </div>

          <h2>${request.type}</h2>

          <div class="details">
            <p><strong>Student Name:</strong> Yashii</p>
            <p><strong>Roll Number:</strong> DEMO2026AI001</p>
            <p><strong>Branch:</strong> CSE – AI & DS</p>
            <p><strong>Academic Year:</strong> 2026–27</p>
            <p><strong>Request:</strong> ${request.subject}</p>
            <p><strong>Status:</strong> ${request.status}</p>
          </div>

          <p class="note">
            This is a CampusHub development/demo document.
            Official certificates and letters must be issued or approved
            by the authorized college authority.
          </p>

          <div class="footer">
            <span>Student Signature</span>
            <span>Authorized Authority</span>
          </div>

        </div>

        <script>
          window.onload = function() {
            window.print();
          };
        </script>

      </body>
      </html>
    `);

    printWindow.document.close();
  };

  return (
    <div className="requests-page">

      {/* HEADER */}

      <header className="requests-header">

        <button onClick={onBack} className="back-btn">
          ← Back to Dashboard
        </button>

        <div>
          <h1>Letters & Certificates</h1>
          <p>
            Apply for official letters, certificates and campus requests
          </p>
        </div>

      </header>

      <main className="requests-container">

        {/* TABS */}

        <div className="requests-tabs">

          <button
            className={activeTab === "letters" ? "active" : ""}
            onClick={() => setActiveTab("letters")}
          >
            📄 Letters & Certificates
          </button>

          <button
            className={activeTab === "form" ? "active" : ""}
            onClick={() => setActiveTab("form")}
          >
            ✍️ New Request
          </button>

          <button
            className={activeTab === "history" ? "active" : ""}
            onClick={() => setActiveTab("history")}
          >
            📋 My Requests
          </button>

        </div>

        {/* LETTERS */}

        {activeTab === "letters" && (

          <section>

            <div className="section-title">
              <h2>Letters & Certificates</h2>
              <p>
                Select the document or letter you want to request.
              </p>
            </div>

            <div className="letter-grid">

              {letterTypes.map((letter) => (

                <div
                  className="letter-card"
                  key={letter.title}
                  onClick={() => handleLetterSelect(letter.title)}
                >

                  <div className="letter-icon">
                    {letter.icon}
                  </div>

                  <h3>{letter.title}</h3>

                  <p>{letter.description}</p>

                  <button>
                    Apply →
                  </button>

                </div>

              ))}

            </div>

            <div className="request-info-card">

              <h2>How it works</h2>

              <div className="workflow">

                <div>
                  <span>1</span>
                  <strong>Select</strong>
                  <small>
                    Choose the required letter or certificate
                  </small>
                </div>

                <div>
                  <span>2</span>
                  <strong>Apply</strong>
                  <small>
                    Enter your request details
                  </small>
                </div>

                <div>
                  <span>3</span>
                  <strong>Review</strong>
                  <small>
                    Faculty / HOD / Admin reviews
                  </small>
                </div>

                <div>
                  <span>4</span>
                  <strong>Approval</strong>
                  <small>
                    Authorized authority approves
                  </small>
                </div>

              </div>

            </div>

          </section>

        )}

        {/* REQUEST FORM */}

        {activeTab === "form" && (

          <section className="request-form-card">

            <div className="section-title">

              <h2>Submit New Request</h2>

              <p>
                Fill in the details required for your letter or certificate.
              </p>

            </div>

            <form onSubmit={handleSubmit}>

              <div className="form-group">

                <label>Request Type</label>

                <select
                  value={requestType}
                  onChange={(e) => {
                    setRequestType(e.target.value);
                    setSubject(e.target.value);
                  }}
                >

                  <option>Bonafide Certificate</option>
                  <option>Study Certificate</option>
                  <option>Fee / Bank Letter</option>
                  <option>Permission Letter</option>
                  <option>Leave Letter</option>
                  <option>Transfer Certificate</option>
                  <option>General Letter</option>
                  <option>Leave Request</option>
                  <option>Permission Request</option>

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
                requestType === "Leave Letter" ||
                requestType === "Permission Request" ||
                requestType === "Permission Letter") && (

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

              <div className="form-actions">

                <button
                  type="button"
                  className="secondary-request-btn"
                  onClick={() => setActiveTab("letters")}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="submit-request-btn"
                >
                  Submit Request
                </button>

              </div>

            </form>

          </section>

        )}

        {/* HISTORY */}

        {activeTab === "history" && (

          <section className="request-history-card">

            <div className="section-title">

              <h2>My Requests</h2>

              <p>
                Track your submitted letters, certificates and requests.
              </p>

            </div>

            <div className="request-list">

              {requests.map((request) => (

                <div
                  className="request-item"
                  key={request.id}
                >

                  <div className="request-icon">
                    {request.category === "Letter" ? "📄" : "📝"}
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
                    className={`request-status ${request.status
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {request.status}
                  </span>

                  {request.status === "Approved" && (
                    <button
                      className="view-letter-btn"
                      onClick={() => handlePrint(request)}
                    >
                      🖨️ View / Print
                    </button>
                  )}

                </div>

              ))}

            </div>

          </section>

        )}

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

        {/* DEMO NOTICE */}

        <div className="request-demo-notice">

          <strong>CampusHub Demo Notice</strong>

          <p>
            The letters and certificates shown here are development/demo
            records. Official documents will be generated only after
            verification and approval by authorized college authorities.
          </p>

        </div>

      </main>

    </div>
  );
}

export default Requests;